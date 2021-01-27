const express = require('express');
const products = require('../products.json');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct')

const app = express();

const port = 3030;

// ! ENDPOINTS
// app.get('/api/users',(req, res) => {
//     res.status(200).send(users)
// });

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})




