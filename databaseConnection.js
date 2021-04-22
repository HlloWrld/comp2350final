const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b2ea21ad3f4267",
	password: "d85b69da",
	database: "heroku_a7c68cae9d1b769",
	multipleStatements: false,
	namedPlaceHolders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "password",
	database: "lab_example",
	multipleStatements: false,
	namedPlaceHolders: true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		