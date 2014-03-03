(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['booking-row.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.agent)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program3(depth0,data) {
  
  var stack1;
  return escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1));
  }

function program5(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.addressNumber) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.addressNumber); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  return escapeExpression(stack1);
  }

function program7(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.postcode) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.postcode); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  return escapeExpression(stack1);
  }

  buffer += "<tr>\n	<td>";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n	<td>";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.agent), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n	<td>";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.Session)),stack1 == null || stack1 === false ? stack1 : stack1.user)),stack1 == null || stack1 === false ? stack1 : stack1.partnerInfo)),stack1 == null || stack1 === false ? stack1 : stack1.usesFixedAddress), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\n	<td>";
  if (stack2 = helpers.name) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.name); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n	<td>";
  if (stack2 = helpers.formattedDate) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.formattedDate); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n	<td>";
  if (stack2 = helpers.therapistsHuman) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.therapistsHuman); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n	<td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.product)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n	<td>&pound;";
  if (stack2 = helpers.price) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.price); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n	<td class=\"text-right\">\n		<a href=\"/bookings/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"btn btn-info\"><span class=\"glyphicon glyphicon-eye-open\"></span> View</a>\n	</td>\n</tr>";
  return buffer;
  });
templates['dashboard-booking-row.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.addressNumber) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.addressNumber); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  return escapeExpression(stack1);
  }

function program3(depth0,data) {
  
  var stack1;
  if (stack1 = helpers.postcode) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.postcode); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  return escapeExpression(stack1);
  }

  buffer += "<tr>\n	<td>";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.Session)),stack1 == null || stack1 === false ? stack1 : stack1.user)),stack1 == null || stack1 === false ? stack1 : stack1.partnerInfo)),stack1 == null || stack1 === false ? stack1 : stack1.usesFixedAddress), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>\n	<td>";
  if (stack2 = helpers.formattedTime) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.formattedTime); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n	<td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.product)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n	<td>&pound;";
  if (stack2 = helpers.price) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.price); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td>\n	<td><a class=\"btn btn-info pull-right\" href=\"/bookings/";
  if (stack2 = helpers.id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.id); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">View</a></td>\n</tr>";
  return buffer;
  });
templates['dashboard-booking-table.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "Room";
  }

function program3(depth0,data) {
  
  
  return "Postcode";
  }

  buffer += "<div style=\"margin: 40px 0 10px 0; font-size: 20px; font-weight: bold;\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.title); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n\n<table class=\"dashboard-booking-table table table-striped\">\n	<thead>\n		<tr>\n			<th>";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.Session)),stack1 == null || stack1 === false ? stack1 : stack1.user)),stack1 == null || stack1 === false ? stack1 : stack1.partnerInfo)),stack1 == null || stack1 === false ? stack1 : stack1.usesFixedAddress), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</th>\n			<th>Time</th>\n			<th>Duration</th>\n			<th>Price</th>\n			<th></th>\n		</tr>\n	</thead>\n	\n	<tbody>\n		";
  if (stack2 = helpers.body) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.body); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n	</tbody>\n</table>";
  return buffer;
  });
templates['slots.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"col-md-2 col-sm-3 col-xs-4\">\n		<div style=\"margin-top: 12px;\" class=\"booking-box slot-box ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.available), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n			";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n		</div>\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "disabled";
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.Slots), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
templates['workers.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"col-md-4 col-sm-6 col-xs-6\">\n		<div style=\"margin-top: 12px; padding: 8px; position: relative;\" class=\"booking-box worker-box ";
  stack1 = helpers.unless.call(depth0, (depth0 && depth0.available), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n			<img src=\"";
  if (stack1 = helpers.img) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.img); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"img-rounded\" style=\"width: 100%; height: auto; margin-bottom: 8px;\" />\n			";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n			<img src=\"/img/busy.png\" class=\"busyImg\" />\n		</div>\n	</div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "disabled";
  }

  stack1 = helpers.each.call(depth0, (depth0 && depth0.Workers), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });
})();