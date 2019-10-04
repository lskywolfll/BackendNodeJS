// Estaran las rutas y encargada de recibir las rutas http e procesarlas por el controlador
const express = require('express');
const multer = require('multer');

const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

const storage = multer.diskStorage({
    //guardar el archivo
    // dest: 'uploads/',
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        // extension scope for type files
        console.log(file.mimetype);
        cb(null, Date.now() + '.png');
    }
});

const upload = multer({ storage: storage });

router.get('/get', (req,res) => {
    // req.query(consulta).propiedad que exigimos en la url, con el || nosotros le indicamos un valor por defecto en caso este no pósea nada y le asignaremos un valor por defecto
    const filterMessages = req.query.user || null;

    controller.getMessages(filterMessages)
    .then( (messageList) => {
        response.success(req,res, messageList, 200);
    })
    .catch( e => {
        response.error(req, res, 'Unexpected Error', 500, e);
    })
});
//middleware es un punto donde entrara anes de acceder a nuestra funcion
router.post('/post',upload.single('File'), (req,res) => {
    // res.send('Hola desde Post');
    // console.log(`[user]: ${req.body.user} [message]: ${req.body.Message}`)
    //Tener ojo con los req.body.name ya que el name es donde nosotros vamos a exigir un dato con el nombre especifico que le hayamos indicado en el cuerpo
    controller.addMessage(req.body.chat, req.body.user,  req.body.Message)
    .then( () => {
        response.success(req,res, 'Creado Correctamente', 201);
    })
    .catch( () => {
        response.error(req,res, 'Informacion invalida', 500, 'Error en el controlador para logearse');
    });

});
//patch para hacer modificaciones parciales, si ponemos :nombre estaremos indicando que esperaremos un dato desde la url(param)
router.patch('/:id', (req,res) => {

    controller.updateMessage(req.params.id, req.body.text)
    .then( (data) => {
        response.success(req, res, data, 200)
    })
    .catch(e => {
        response.error(req, res, 'Error interno', 500, e);
    });
});

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
    .then( () => {
        response.success(req,res, `Usuario eliminado`, 200);
    })
    .catch( (e) => {
        response.error(req, res, 'Error interno', 500, e);
    });
});

module.exports = router;