

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sirisamala:21092004@in-aws.strgs.mongodb.net/")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')