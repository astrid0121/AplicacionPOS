const { MongoClient } = require("mongodb");

const uri ="mongodb+srv://saldarriaga:astrid0121@adsi2364482.2jn4v.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const database = client.db('AplicacionPOS');
const coleccion = database.collection('Producto');
    module.exports ={
      client,
      coleccion
    }
    
    
  
  

