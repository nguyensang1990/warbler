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

messageSchema.pre("remove", async function (next) { //user arrow function here can lead to wrong keyword this reference
    try{
        let user = await User.findById(this.user);
        user.messages.remove(this.user);
        await user.save();
        return next();
    } catch (err) {
        return next(err)
    }
})

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;

// find a user 
// remove the id of the message in the message list of that user 
// save the user
// return next 