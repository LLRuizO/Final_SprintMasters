const express = require("express");
const RegisterProductsController = require("../controllers/registerProducts");
const cors=require('./cors')
const authenticated = require('../auth0')

const api = express.Router();

api.route("/register-products")
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200)})
.get(cors.cors,authenticated.veryfyUser, RegisterProductsController.getRegisterProducts)
.post(cors.corsWithOptions, authenticated.veryfyUser,authenticated.veryfyAdmin,RegisterProductsController.registerProducts);

api.route("/register-products/:productId")
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.put(cors.corsWithOptions,authenticated.veryfyUser,authenticated.veryfyAdmin,RegisterProductsController.updateRegisterProducts)
.delete(cors.corsWithOptions, authenticated.veryfyUser,authenticated.veryfyAdmin,RegisterProductsController.deleteRegisterProducts)

module.exports = api;