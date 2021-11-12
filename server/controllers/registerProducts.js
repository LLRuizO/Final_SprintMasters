const ProductRegister = require('../models/registerProduct')

function registerProducts(req, res,next){
    const product ={};
    const { Nombre, IdProduct, EsProduct, Descripcion, City,ValorProduct,Moneda } = req.body;

    product.name = Nombre;
    product.description = Descripcion;
    product.price=ValorProduct
    product.stateProduct=EsProduct
    product.city=City
    product.money=Moneda

    ProductRegister.create(product)
    .then((product) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(product); 
    }, (err) => next(err))
    .catch((err) => next(err));
}

function getRegisterProducts(req, res,next){
    ProductRegister.find(req.query)
    .then((product) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(product);
    }, (err) => next(err))
    .catch((err) => next(err));
}

function updateRegisterProducts(req, res,next){
    ProductRegister.findByIdAndUpdate(req.params.productId, {
        $set: req.body
    }, { new: true })
    .then((product) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(product);
    }, (err) => next(err))
    .catch((err) => next(err));
}

function deleteRegisterProducts(req, res,next){
    ProductRegister.findByIdAndRemove(req.params.productId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next)
}


module.exports = {
    registerProducts,
    getRegisterProducts,
    updateRegisterProducts,
    deleteRegisterProducts
}; 