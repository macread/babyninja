//npm i express dotenv passport passport-auth0 express-session massive
// to install all the server dependencies

//set server parts first, then test to make sure it works.
//next, if using authentication, set up passport 

//require what we need
require('dotenv').config();
const express = require('express') 
    , bodyParser = require('body-parser')
    , controller = require('./controller');

//deconstruct the data from the .env file
const {
    SERVER_PORT
} = process.env;


const app = express(); //server

app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());



app.get('/api/user/', controller.getUser);
// app.get('/api/contacts/', controller.getContactCount);
// app.get('/api/contacts/:id', controller.getContacts);
// app.post('/api/contact', controller.addContact);
// app.put('/api/contact', controller.updateContact);

// app.post('/api/email', controller.sendEmail)

// app.delete('/api/network/:id', controller.deleteNetwork)
// app.delete('/api/networkconnection/:id', controller.deleteNetworkConnection)
// app.get('/api/network/:id', controller.getNetwork);
// app.get('/api/networks', controller.getAllNetworks);
// app.get('/api/networks/:id', controller.getNetworks);
// app.put('/api/network', controller.updateNetwork);
// app.post('/api/network', controller.addUnrelatedNetwork);
// app.post('/api/networkconnection', controller.addNetworkConnection)
// app.post('/api/networks', controller.addNetwork);

// app.get('/api/meetings/', controller.getMeetingCount);

// app.delete('/api/resources/:id',controller.deleteResource);
// app.get('/api/resources', controller.getResources);
// app.get('/api/resources/count', controller.getResourceCount)
// app.post('/api/resources',controller.addResource);
// app.put('/api/resources/:id',controller.updateResource);

// app.get('/api/user', controller.getUser);
// app.post('/api/user',controller.updateUser)

//server
//get that server going 
app.listen(SERVER_PORT, () => {
    console.log('Listening on port ', SERVER_PORT);
})