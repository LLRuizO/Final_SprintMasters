const express = require("express");
const RegisterSellsController = require("../controllers/registerSell");
const cors=require('./cors')
const authenticated = require('../auth0')

const api = express.Router();

api.route("/register-sell")
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200)})
.get(cors.cors,authenticated.veryfyUser,RegisterSellsController.getRegisterSells)
.post(cors.corsWithOptions,authenticated.veryfyUser,authenticated.veryfyAdmin,RegisterSellsController.registerSells);

api.route("/register-sell/:sellId")
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.put(cors.corsWithOptions,authenticated.veryfyUser,authenticated.veryfyAdmin,RegisterSellsController.updateRegisterSells)
.delete(cors.corsWithOptions,authenticated.veryfyUser,authenticated.veryfyAdmin,RegisterSellsController.deleteRegisterSells)

module.exports = api;