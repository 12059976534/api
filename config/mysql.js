var mysql=require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "wahyu355A",
    database : "kuliah"
});

con.connect(function(err){
    if (err) throw err;
    console.log("conection is activate")
});

module.exports = con;