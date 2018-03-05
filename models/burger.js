var orm = require("../config/orm.js");

var burger = {
	selectAll : function(callback){
		orm.selectAll('burgers', function(result){
			callback(result);
		});
	},

	insertOne : function(cols, data, callback){
		orm.insertOne('burgers', cols, data, function(result){
			console.log("Inserted burger" , result);
			callback(result);
		});
	},

	updateOne: function(cols, data, callback){
		orm.updateOne('burgers', cols, data, function(result){
			console.log("Updated burger" , result);
			callback(result);
		});
	}
}

module.exports = burger;