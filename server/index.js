const express = require("express");
const app     = express();
const mysql   = require("mysql");
const cors    = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test-app"
});

// CRUD PRODUCTOS
app.post("/products/create", (req, res ) =>{

    const name     = req.body.name.toUpperCase();
    const price    = req.body.price;
    const category = req.body.category;

    db.query("INSERT INTO products  (description, price, category_id) VALUES (?,?,?)", 
    [name, price, category],
    (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Save successfully");
        }
    });


});
app.post("/products/list", (req, res ) =>{
    const price    = req.body.price;
    const category = req.body.category;

    var query  = "SELECT * FROM products where 1 = 1 ";

    if ( price != null && price != ''){
        query += " and price = "+[parseFloat(price)];
    }
    if (category != null && category != ''){
        query += " and category_id = "+[category];
    }

    db.query(query, 
    (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

// CRUD CATEGORIES
app.post("/categories/create", (req, res ) =>{

    const name     = req.body.name.toUpperCase();

    db.query("INSERT INTO categories  (description) VALUES (?)", 
    [name],
    (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Save successfully");
        }
    });


});
app.get("/categories/list", (req, res ) =>{

    db.query("SELECT id as value, description as label FROM categories ORDER BY description asc", 
    (err,result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});



app.listen(3001, () => {
    console.log("Corriendo port 3001");
})