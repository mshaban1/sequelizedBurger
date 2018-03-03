var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'alv4v3hlsipxnujn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'bugt84jn8ee8tgts',
    password: 'b2tvmge4zbq1lwmf',
    database: 'nki4myabllep52sj'
   });

// var connection = mysql.createConnection({
// 	//port: 3306,
//     host: 'alv4v3hlsipxnujn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//     user: 'bugt84jn8ee8tgts',
//     password: 'b2tvmge4zbq1lwmf',
//     database: 'nki4myabllep52sj'
// });


pool.getConnection(function(err, connection) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

//export to other files. like server.
module.exports = pool;

