const products = require('../products.json')

const getProducts = (req, res) => {
    if(req.query.price){
        let query = products.filter(
            elem => elem.price >= +req.query.price
        )
        res.status(200).send(query)
    }
    res.status(200).send(products)
}

module.exports = getProducts

