//mongoose gestiona la conexión a bases de datos
const mongoose = require('mongoose')

const DB_URI = "mongodb+srv://saldarriaga:astrid0121@adsi2364482.2jn4v.mongodb.net/?retryWrites=true&w=majority"

    const dbConnect =()=>{ mongoose.connect(DB_URI,
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err){
                console.log('DB: ERROR !!');
            } else {
                console.log('Conexion Correcta!');
        }
    });
}
module.exports = dbConnect;