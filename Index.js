const mongoose = require ("mongoose");
require("dotenv").config();
//Ahora importamos app
const app = require("./App");
//Importamos el puerto
const port = process.env.PORT || 3977;
//Hacemos lo mismo para nuestra versión dela API
const { API_VERSION, IP_SERVER, PORT_DB } = require ("./config");

/* mongoose.set("useFindAndMoify", false); */

mongoose.connect(`${process.env.DATABASE_URL}`,
{useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if (err){
        throw err;
    }else{
        console.log("La conexión a la base de datos es correcta");

        app.listen(port, () =>{
            console.log("######################");
            console.log("###### API REST ######");
            console.log("######################");
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
        })
    }
});

