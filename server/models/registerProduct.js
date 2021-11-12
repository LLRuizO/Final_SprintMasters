const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const RegisterProductSchame = new Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price: {
        type: String,
        required: true,
    },
    stateProduct:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    money:{
        type:String,
        require:true
    },
});

module.exports = mongoose.model("RegisterProduct", RegisterProductSchame);