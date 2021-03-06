const express = require('express');
const routes = require('./routes/index');
const session = require('express-session');


let app = express();
let port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.use(session({
    secret: 'keyboard dog'
}));

app.use('/', routes);

app.use("/styles", express.static(__dirname + "/views/styles"));

app.listen(port, () => {
    console.log('listening on port:', port);
})
