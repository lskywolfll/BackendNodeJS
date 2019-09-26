const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);


router.get('/get', (req,res) => {
    console.log(req.headers);
    res.header({
        "custom-header":"Nuestro valor personalizado",
    });
    // res.send('Hola desde get');
    response.success(req,res,'Lista de mensajes');
});

router.post('/post', (req,res) => {
    // res.send('Hola desde Post');
    console.log(req.query);
    if(req.query.error == 'ok'){
        response.error(req,res, 'Error simulado', 400);
    }else{
        response.success(req,res, 'Creado Correctamente', 201);
    }
});

router.delete('/delete', (req,res) => {
    console.log(req.query);
    console.log(req.body);
    // res.send(`Mensaje ${req.body.text} añadido correctamente`);
    // res.status(201).send({error:'None',message:"I'M alive in your body :^) "})
    response.success(req,res, 'Creado Correctamente', 201);
});

// app.use('/', (req, res) => {
//     res.send('Hola');
// });

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');