const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const {v4:uuidv4}=require("uuid");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.listen(port,()=>{
    console.log(`app is listening in port:${port}`);
});

let posts = [{
    id:uuidv4(),
    username : "Mayank Kaushik",
    content :" Learning Restful api"
},{
    id:uuidv4(),
    username : "Bhanu ",
    content :"India wins"
},{
    id:uuidv4(),
    username : "Kalu sahu",
    content :" Aaj Barish hohi"
},]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    console.log(id);
    console.log("Found post:", post);
    if (!post) {
        return res.send("Post not found ❌");
    }

    res.render("show", { post });
});
app.post("/posts",(req,res)=>{
    let id = uuidv4();
    let {username,content}=req.body;
    posts.push({id,username,content});
    res.redirect("/posts");
})


app.patch("/posts/:id",(req,res)=>{
    let newContent = req.body.content;
    let { id } = req.params;
    let post = posts.find(p => p.id === id);
    post.content = newContent;
        if (!post) {
        return res.send("Post not found ❌");
    }

    console.log(post);
    res.redirect("/posts");

})


app.get("/posts/:id/edit",(req,res)=>{
     let { id } = req.params;
    let post = posts.find(p => p.id === id);
    res.render("edit.ejs",{post});
})

app.delete("/posts/:id",(req,res)=>{
    let { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect("/posts");
})