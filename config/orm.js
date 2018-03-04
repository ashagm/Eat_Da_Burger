var connection = require('../config/connection');

var orm = {
	selectAll: function(tableName, callBack){
		var queryStr = "SELECT * FROM " + tableName + ";"

		connection.query(queryStr, function(err, result){
			if(err){
				throw err;
			}

			callBack(result);
		})

	},

	insertOne: function(){

	},

	updateOne: function(){

	}
}



module.exports = orm;
