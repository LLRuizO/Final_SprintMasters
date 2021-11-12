const express = require("express");
const UserController = require("../controllers/user");
const cors=require('./cors')
const authenticated = require('../auth0')

const api = express.Router();

api.route("/users")
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200)})
.get(cors.cors,authenticated.veryfyUser,UserController.getUsers)


api.route("/users/:userId")
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.put(cors.corsWithOptions,authenticated.veryfyUser,authenticated.veryfyAdmin,UserController.updateUser)


module.exports = api;