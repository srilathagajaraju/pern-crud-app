// used to connect database 

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres", // while its postgres if we use another then its name should be '?'
    password:"0111", // which is created by me at the initialization of pgadmin
    host:"localhost", // it should be localhost
    port:5432, //port should be 5432 its pgadmin default port number
    database:"perntodo" // this is our database name
});

module.exports = pool;