const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const db = require('./config/db')
const Products= require('./routes/ProductRoute')
// const Products= require('./models/Productsmodel')
const Users= require('./routes/UserRoute')


app.get('/', (req, res) => res.status(200).json({ message: "Welcome" }))
// localhost:3000/
app.use('/products', Products)
// localhost:3000/products
app.use('/users', Users)
// localhost:3000/users

app.listen(port, (() => console.log(`Listening on ${port}`)))