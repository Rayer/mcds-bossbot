const sql = require('mysql');
const fs = require('fs');

const sql_info_filename = 'sql_credential.json';

if(!fs.existsSync(sql_info_filename)) {
    throw sql_info_filename + ' not found! Example content of ' + sql_info_filename + ' is : {\n' +
    '  "host": "point_to_mcds_db",\n' +
    '  "user": "ccc",\n' +
    '  "password": "ccc"\n' +
    '}';
}
const sql_info_txt = fs.readFileSync(sql_info_filename);
const sql_info = JSON.parse(sql_info_txt);

let conn = sql.createConnection(sql_info);

conn.connect(function(err) {
    if(err) throw err;
    console.log('DB connect success');
    console.log('DB module initialization done...');
});

function query(statement, response) {
    if(!conn) throw('DB module not initialized!');
    conn.query(statement, response);
}

exports.query = query;