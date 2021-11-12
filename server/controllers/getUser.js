const User = require('../models/user')


function getUser(req, res,next){    
    User.findOne({email:req.user['http://localhost/userData'].email})
    .then((resp) => {
        if(resp){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }else{
            const dataUsers ={};
            const { email, nickname,active,_id,user_id} = req.user['http://localhost/userData'];
            dataUsers.name=nickname
            dataUsers.email=email
            dataUsers.role='Inactivo'
            dataUsers.active='Pendiente'
            dataUsers.auth0Id=_id
            dataUsers.user_id=user_id
            delete dataUsers._Id
            User.create(dataUsers)
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp); 
            }, (err) => next(err))
        }
    }, (err) => next(err))
    .catch((err) => next)
}


module.exports = {
    getUser
}; 