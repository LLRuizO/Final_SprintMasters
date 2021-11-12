const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const RegisterSellSchame = new Schema({
    product:{
        type:String,
        require:true
    },
    code:{
        type:String,
        require:true
    },
    unitValue: {
        type: Currency,
        required: true,
        min: 0
    },
    cant:{
        type:Number,
        require:true
    },
    totalValue:{
        type: Currency,
        required: true,
        min: 0
    },
    saleDate:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    cedula:{
        type:Number,
        require:true
    },
    vendedor:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
});

module.exports = mongoose.model("RegisterSell", RegisterSellSchame);