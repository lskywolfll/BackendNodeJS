const express = require('express');
const app = express();
const server = require('http').Server(app);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
db('mongodb+srv://db_user_sky:1llD1UgBueud8bAj@cluster0-b0vhf.mongodb.net/telegrom_db');
// const router = require('./components/message/network');
const router = require('./network/routes');
const response = require('./network/response');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);
router(app);

app.use('/app', express.static('public'));

server.listen(3000, () => {
    console.log('La aplicacion esta escuchando en http://localhost:3000');
});