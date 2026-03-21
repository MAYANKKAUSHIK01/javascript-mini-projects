const express = require("express");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// wake call
main()
    .then((data) => {
        console.log("sever connected");
    })

//mongoose definition
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


//Home Route
app.get("/", (req, res) => {
    res.render("home.ejs");
})

// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
})


// New Chat Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
})
app.post("/chats/new", async (req, res) => {
    let { from, msg, to } = req.body;
    const newChat = new Chat({
        from,
        msg,
        to,
        created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
})


//Edit Massage Route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
})

app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg } = req.body;
    let newMsg = await Chat.findByIdAndUpdate(id, { msg });
    res.redirect("/chats")
})


//DELETE massage
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id)
    res.redirect("/chats");
})

//Local Port
app.listen(8080, (req, res) => {
    console.log(`listening at 8080`);
})



// // Data insert
// const chat1 = new Chat({
// from:"mayank kaushik",
// to:"God",
// msg:"I want never ending real money",
// created_at: new Date(),
// });


// chat1.save()
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// });
