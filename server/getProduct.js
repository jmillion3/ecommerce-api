const products = require('../products.json')

const getProduct = (req, res) => {
    let finder = products.find(elem => elem.id === +req.params.id)
    if(!finder){
        res.status(500).send('Item not in list')
    } 
    res.status(200).send(finder)
}

module.exports = getProduct