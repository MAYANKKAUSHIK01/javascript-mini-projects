//Use to Crete Random  first Data 

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

// wake call
main()
.then((data)=>{
    console.log("sever connected");
})

//mongoose definition
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Data insert

let allChats =[
  {
    from: "Aman Sharma",
    to: "Rohit",
    msg: "Bro, assignment complete hua kya?",
    created_at: new Date(),
  },
  {
    from: "Sneha",
    to: "Priya",
    msg: "Kal movie chalein?",
    created_at: new Date(),
  },
  {
    from: "Rahul",
    to: "Mom",
    msg: "Main thodi der late aaunga",
    created_at: new Date(),
  },
  {
    from: "Neha",
    to: "Arjun",
    msg: "Meeting reschedule ho gayi hai",
    created_at: new Date(),
  }
];
Chat.insertMany(allChats);