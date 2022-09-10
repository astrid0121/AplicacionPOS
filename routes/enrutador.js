const express = require('express');
const router = express.Router();
const db = require('../config/db2').coleccion;
const dbcliente = require('../config/db2').client;

router.get('/inicio', (req, res)=>{
    res.send("Soy un inicio enrutado")
})

//esto de abajo va en el enrutador

router.get('/inicio', async (req, res) => {
    console.log(await db.findOne())
    res.render('pages/index');
   });
 
 router.post('/registrar',(req,res)=>{
   db.insertOne({
       Referencia: 'A03',
       Nombre: 'Tennis Adidas',
       Descripcion:'55',
       Precio:15900,
       Stock:'12'
       });
   res.render('pages/index')
 });

module.exports = router;