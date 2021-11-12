const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const authConfig = require("./auth_config.json");
const User = require ("./models/user");


if (!authConfig.domain ||
    !authConfig.audience ||
    authConfig.audience === "YOUR_API_IDENTIFIER") {
        console.log("Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values");
        process.exit();
}

exports.veryfyUser = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
    }),
    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithms: ["RS256"],
});

exports.veryfyAdmin=(req,res,next)=>{
    User.findOne({email:req.user['http://localhost/userData'].email})
    .then((resp) => {
        let access=((resp.role=='Vendedor'  || resp.role=='Administrador') && req.url.indexOf('/register-sell')>-1)?true:
                      resp.role=='Administrador' && req.url.indexOf('/register-products')>-1?true:
                      resp.role=='Administrador' && req.url.indexOf('/users')>-1?true:false;

        if(access){
            next();
        }else{
            var err= new Error('You are not authorized to perform this operation!')
            err.status=401
            next(err)
            return
        }
    }, (err) => next(err))
    .catch((err) => next)
}
