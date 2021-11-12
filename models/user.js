const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchame = Schema({
    name: String,
    email:{
        type: String,
        unique: true
    },
    role: String,
    active: String,
    auth0Id:String,
    user_id:String
});

module.exports = mongoose.model("User", UserSchame);