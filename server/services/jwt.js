const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "gR7cH9Svfj8jLe4c186Ghs48hheb3902nh5DsA"

//Otra forma de exportar una función

exports.createAccessToken = function(user){
    const payload = {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        createToken: moment().unix(),
        exp: moment().add(3, "hours").unix()//La expiración sera 3 horas después de su creación
    };

    return jwt.encode(payload, SECRET_KEY); //endoce para codificar el objeto
};

exports.createRefreshToken = function(user){
    const payload = {
        id: user._id,
        exp: moment()
        .add(30, "days")
        .inux()
    };

    return jwt.encode(payload, SECRET_KEY);
};

exports.decodedToken = function(token){
    return jwt.decode(token, SECRET_KEY, true);
}