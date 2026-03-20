const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const path = require("path");
const methodOver = require("method-override");
const { exit } = require('process');
const app = express();
const port = 8080;


app.use(methodOver("_method"));
app.use(express.urlencoded({extended:true}));

app.set("viwe engine", "ejs");
app.set("viwes", path.join(__dirname, "/viwes"));

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'class',
    password: 'Mayank@730',
});

// Creating Fake Data

let getRandomUser = () => {
    return [faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),];
};

// Home Page
app.get('/', (req, res) => {
    let q = `SELECT count(*) from user`;
    try {
        connection.query(q, (err, results) => {
            let count = results[0]["count(*)"];
            res.render(`home.ejs`,{count})
        });
    }
    catch (err) {
        res.status(500).send("Database error");
    }

})


// New User Addition
app.get("/users/New",(req,res)=>{
    res.render("new.ejs");
})


app.post("/users/new",(req,res)=>{
    let  q = `insert into user(id,email,usernmae,password)value(?,?,?,?)`;
    let {email,usernmae,password}=req.body;
    let id = faker.string.uuid();
    
    connection.query(q,[id,email,usernmae,password],(err,result)=>{
        if(err){
            res.send("already in db");
        }
        
    })
    res.redirect("/users");
})




//Showusers Data
app.get('/users', (req, res) => {
    let q = `SELECT * from user`;
    try {
        connection.query(q, (err, users) => {
            res.render(`showusers.ejs`,{users})
        });
    }
    catch (err) {
        res.status(500).send("Database error");
    }

})

//Edit Username
app.get('/users/:id/edit', (req, res) => {
    let {id} = req.params;
    let q = `SELECT * from user where id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            let user = result[0];
            res.render(`edit.ejs`,{user})
        });
    }
    catch (err) {
        res.status(500).send("Database error");
    }

})

// Update username
app.patch("/users/:id",(req,res)=>{
    let {id} = req.params;
    let q = `SELECT * from user where id = '${id}'`;
    let {password:formpass,usernmae:formname}=req.body;
    try {
        connection.query(q, (err, result) => {
            let user = result[0];
        if(formpass!=user.password){
            res.send("wrong password");
        }
        else{
            let q1 = `update user set usernmae = '${formname}'where id = '${id}'`;
            connection.query(q1, (err, result) =>{
             res.redirect("/users");
            });
        }
        });
    }
    catch (err) {
        res.status(500).send("Database error");
    }
})


//Delete User
app.get('/users/:id/delete', (req, res) => {
    let {id} = req.params;
    let q = `SELECT * from user where id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            let user = result[0];
            res.render(`delete.ejs`,{user})
        });
    }
    catch (err) {
        res.status(500).send("Database error");
    }

})


// Delete user
app.delete("/users/:id",(req,res)=>{
    let {id} = req.params;
    let q = `SELECT * from user where id = '${id}'`;
    let {password:formpass}=req.body;
    try {
        connection.query(q, (err, result) => {
            let user = result[0];
        if(formpass!=user.password){
            res.send("wrong password");
        }
        else{
            let q1 = `delete from user where id = '${id}'`;
            connection.query(q1, (err, result) =>{
             res.redirect("/users");
            });
        }
        });
    }
    catch (err) {
        res.status(500).send("Database error");
    }
})



app.listen(port, (req, res) => {
    console.log(`Web Page LItsening at Port: ${port}`)
})