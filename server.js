//Install express server
const express = require('express');
const cors = require('cors');
const path = require('path');
// const { dirname } = require('node:path');
const app = express();

const PORT = process.env.PORT || 3000;
var app_path = './dist/angular-app-heroku';
require('./backend/server/database');

// app.use(express.static('../dist/angular-app-heroku'));

app.use(cors());
app.use(express.json()); //?para leer los datos quue se estan resiviendo

app.use('/api', require('./backend/server/routes/index'))


// Serve only the static files form the dist directory

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/angular-app-heroku/'}),
// );


app.use('/', express.static(path.join(__dirname, app_path)))
.get('*', (req, res) => res.sendFile(path.join(__dirname, app_path + '/index.html')))
.listen(PORT,()=>console.log(`servidor en puerto ${PORT}`));

// Start the app by listening on the default Heroku port
// app.set('port', process.env.PORT || 8080);
// app.set('port', process.env.PORT || 8080);
// app.listen(process.env.PORT || 8080);


// module.exports = app;


