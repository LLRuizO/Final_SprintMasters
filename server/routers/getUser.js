const express = require("express");
const UserController = require("../controllers/getUser");
const cors=require('./cors')
const authenticated = require('../auth0')

const user = express.Router();

user.route("/user/self")
.options(cors.corsWithOptions,(req,res)=>{res.sendStatus(200)})
.get(cors.cors,authenticated.veryfyUser, UserController.getUser)

module.exports = user;