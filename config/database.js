/**
 * This is the database configuration script
 * Mongoose was set as global promise and connect to the local collection
 */

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/todo-list',{ useNewUrlParser: true, useUnifiedTopology: true}).then(
    ()=> console.log('Conectado ao MongoDB!')).catch((err)=>console.log(err))