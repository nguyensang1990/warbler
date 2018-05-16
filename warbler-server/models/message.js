const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true,
        maxlength: 160
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "User" //this must be exactly the same with the name export in User schema
    }
})

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;