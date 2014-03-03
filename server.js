// setup logging stuff
var mongoose = require('./config/mongoose');
var sanitizeLogData = function(obj) {
	var from = /\./g;
	var to = '__';

    var output = {};
    for (i in obj) {
        if (Object.prototype.toString.apply(obj[i]) === '[object Object]') {
            output[i.replace(from, to)] = sanitizeLogData(obj[i]);
        } else {
            output[i.replace(from, to)] = obj[i];
        }
    }
    return output;
};
var writeLog = function(log, cb) {
	var unixTime = log.timestamp;
	log.timestamp = (new Date(unixTime * 1000));
	
	log.data = sanitizeLogData(log.data);

	var item = new mongoose.Log(log);
	
	item.save(function (err) {
		console.log('saved item', log, err);
	
		if(typeof(cb) !== 'undefined') {
			cb(err);
		}
	});
};



// setup socketio
var io = require('socket.io').listen(process.env.SOCKET_PORT || 3003);

io.sockets.on('connection', function (socket) {
	socket.emit('welcome', { hello: 'world' });
	socket.on('write', function (data) {
		writeLog(data);
	});
	socket.on('subscribe', function (data) {		
		if(socket.stream) {
			console.log('unsubscribing previous stream');
			socket.stream.destroy();
		}
		
		/*if(data.length > 0) {
			data = {
				data: data
			};
		}*/
		
		console.log('subscribe', data);
		var stream = mongoose.Log.find(data).tailable().stream();

		stream.on('data', function(doc){
		    console.log('New item!');
		    console.log(doc);
		    socket.emit('data', {type: 'log', data: doc});
		}).on('error', function (error){
		    console.log(error);
		    socket.emit('error', { hello: 'world' });
		}).on('close', function () {
		    console.log('closed stream');
		});
		
		socket.stream = stream;
	});
	socket.on('disconnect', function() {
		console.log('closing socket');
		
		if(socket.stream) {
			console.log('unsubscribing stream on close');
			socket.stream.destroy();
		}
	});
});



// setup express to serve the interface
var express = require('express');
var app = express();
var fs = require('fs');
var less = require('less');
var MongoStore = require('connect-mongo')(express);

app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.static(__dirname + '/assets'));
	app.set('view engine', 'ejs');

	if(mongoose.url !== '') {
		app.use(express.session({
			store: new MongoStore({
				url: mongoose.url
			}),
			secret: '1234567890QWERTY'
		}));
	}
	else {
		app.use(express.session({secret: 'memery'}));
	}
});



app.get('/styles.css', function(req, res) {
	/*if(compiledLess !== '') {
		res.setHeader('Content-type', 'text/css');
		return res.send(200, compiledLess);
	}*/
	
	fs.readFile(__dirname+'/less/compile.less', function (err, data) {
		if (err) {
			console.log(err);
			
			return res.send(500, {
				error: err,
				message: 'An error occured compiling the stylesheet',
				module: 'server',
				url: '/styles.css'
			});
		}
		
		var parser = new(less.Parser)({
		    paths: [__dirname, __dirname+'/less'], // Specify search paths for @import directives
		    filename: 'compile.less' // Specify a filename, for better error messages
		});
		
		parser.parse(data.toString(), function (err, tree) {
			if (err) {
				console.log(err);
				
				return res.send(500, {
					error: err,
					message: 'An error occured compiling the stylesheet',
					module: 'server',
					url: '/styles.css'
				});
			}
		
		    compiledLess = tree.toCSS({ compress: false }); // Minify CSS output
		
			res.setHeader('Content-type', 'text/css');
			res.send(compiledLess);
		});
	});
});


app.get('/', function(req, res) {
	res.render('index', {
		
	});
});

app.listen(process.env.NODE_PORT || 3002);