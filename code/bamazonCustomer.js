var mysql = require("mysql");
var inquirer = require("inquirer");

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

function listAllProducts(_func) {
    connection.query(`SELECT * FROM products `, function (err, res) {
        if (err) throw err;
        res.forEach(function (element) {
            console.log(`Item ID: ${element.item_id} Product: ${element.product_name} Price: ${element.price}`);
        });
        _func();
    });
    
}

function validateIsInterger(value) {
    var reg = /^\d+$/;
    return reg.test(value) || "value should be a number!";
}

listAllProducts(beginInteraction);

function beginInteraction(){
inquirer.prompt([{
    type: 'input',
    message: 'Please enter the ID of the product you would like to purchase',
    name: 'product',
    validate: validateIsInterger
}]).then(function (answer){
    var productID = answer.product;
    inquirer.prompt([{
        type: 'input',
        message: 'How many would you like to buy?',
        name: 'quantity',
        validate: validateIsInterger
    }]).then(function (answer) {
        var orderQuantity = answer.quantity;
        var sql = `SELECT * FROM products WHERE item_id = '${productID}'`;
        connection.query(sql, function (err, res){
            if (err) throw err;
            if (res[0].stock_quantity >= orderQuantity){
                var newStock = res[0].stock_quantity - orderQuantity;
                var total = res[0].price * orderQuantity;
                sql = `UPDATE products SET stock_quantity = '${newStock}' WHERE item_id = ${productID}`;
                connection.query(sql, function (err, res){
                    if (err) throw err;
                    console.log(`Thank you for your purchase! Your total is ${total}`);
                    connection.end();
                })
                
            } else {
                console.log('Insufficent product available');
                connection.end();
            }
        })
    });
});
}
