var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id: "+connection.threadId);
});

//display all items for sale
connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  //callback function 
  console.log(res);
});
//then prompt users with two messages. 
//ask them the ID of the product they would like to buy.
var askId = function(){
  inquirer.prompt([
  {
    name:"asking",
    type:"input",
    message:"What would you like to buy?"
  },
  {
    name: "count",
    type: "input",
    message: "How many of this item would you like to buy?"
  }
  ]).then(function(information){
    var choice = information.asking;
   // console.log(choice);
    var amount = information.count;
    // console.log(amount);
    //database query that grabs the choice as the where clause AND updates the product count
    connection.query("SELECT stock_quantity FROM products WHERE product_name = " + choice, function(err, res){
  if (err) throw err;
  console.log(res); 
    });
        // var newValue = stock_quantity - amount;
        // connection.query("UPDATE stock_quantity = " + newValue + "WHERE product_name = " + choice);
        // console.log("after query");
    })
}
//check if your store has enough of the product to meet the customer's request.

//If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through 

//update the SQL database to reflect the remaining quantity

askId();
    




