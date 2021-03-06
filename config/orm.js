var connection = require('../config/connection');

var orm = {
	selectAll: function(tableName, callBack){
		var queryStr = "SELECT * FROM " + tableName + ";"

		connection.query(queryStr, function(err, result){
			if(err) throw err;				
			callBack(result);
		});
	},

	insertOne: function(tableName, colNames, colValues, callBack){
		var queryStr = "INSERT INTO " + tableName.toString() + "(" + colNames.toString() + ") VALUES (?);"
		
		connection.query(queryStr, [colValues], function(err, result){
			if(err) throw err;
			callBack(result);
		});
	},

	updateOne: function(tableName, colNames, updateData, callBack){
		
		if(updateData.devoured == 1){
			updateData.devoured = false;
		}else{
			updateData.devoured = true;
		}

		var queryStr = "UPDATE " + tableName.toString() + " SET devoured = ? WHERE id= ?";

		connection.query(queryStr, [updateData.devoured, parseInt(updateData.id)], function(err, result){
			if(err) throw err;
			callBack(result);
		});
	},

	deleteOne: function(tableName, colNames, idValue, callBack){
		var queryStr = "DELETE FROM " + tableName.toString() + " WHERE id= ?";

		connection.query(queryStr, [parseInt(idValue)], function(err, result){
			if(err) throw err;
			callBack(result);
		});
	}


}



module.exports = orm;
