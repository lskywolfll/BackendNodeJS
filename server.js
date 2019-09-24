const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/get', (req,res) => {
    console.log(req.headers);
    res.header({
        "custom-header":"Nuestro valor personalizado"
    });
    res.send('Hola desde get');
});

router.post('/post', (req,res) => {
    res.send('Hola desde Post');
});

router.delete('/delete', (req,res) => {
    console.log(req.query);
    console.log(req.body);
    res.send(`Mensaje ${req.body.text} añadido correctamente`);
});

// app.use('/', (req, res) => {
//     res.send('Hola');
// });

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');