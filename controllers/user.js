const bcrypt = require("bcrypt-nodejs");
const User = require ("../models/user");

function signUp(req, res){
    const user = new User();

    const { name, lastname, email, password, repeatPassword } = req.body;
    user.name = name;
    user.lastname = lastname;
    user.email = email.toLowerCase();
    user.role =  "admin"; //Este no se lo damos de manera automatica, validar en user.js-models
    user.active = false;  //Este no se lo damos de manera automatica, validar en user.js-models

    if (!password || !repeatPassword){
        res.status(404).send({ message: "Las contraseñas son obligatorias." });
    }else{
        if (password !== repeatPassword){
            res.status(404).send({ message: "Las contraseñas no son iguales." });
        }else{
            bcrypt.hash(password, null, null, function(err, hash){
                if(err){
                    res
                    .status(500)
                    .send({ message: "Error al encriptar la contraseña" });
                }else{
                    user.password = hash;

                    user.save((err, userStored) =>{
                        if (err){
                            res.status(500).send({ message: "El usuario ya existe." });
                        }else{
                            if (!userStored){
                                res.status(404).send({ message: "Error al crear usuario"});
                            }else{
                                res.status(200).send({ user:userStored });
                            }
                        }
                    })
                }
            })
        }
    }
}


function getUsers(req, res){
    User.find(req.query)
    .then((users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
}

function updateUser(req, res,next){
    User.findByIdAndUpdate(req.params.userId, {
        $set: req.body
    }, { new: true })
    .then((users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
    }, (err) => next(err))
    .catch((err) => next(err));
}

module.exports = {
    signUp,
    getUsers,
    updateUser
}; 