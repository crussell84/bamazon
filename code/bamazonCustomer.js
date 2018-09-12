var mysql = require("mysql");
var inquirer = require("inquirer");
var searchTerm = "";

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "knitgameplaylove",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

function listAllProducts() {
    connection.query(`SELECT * FROM products `, function (err, res) {
        if (err) throw err;
        res.forEach(function (element) {
            console.log(`Item ID: ${element.item_id} Product: ${element.product_name} Price: ${element.price}`);
        });
        connection.end();
    });
}

listAllProducts();