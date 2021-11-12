const SellRegister = require('../models/sellProduct')

function registerSells(req, res,next){
    const sell ={};
    const { product, codigo, valorUnitario, cant, valorTotal,fechaVenta,nombre,cedula,vendedor,esSell} = req.body;

    sell.product = product;
    sell.code = codigo;
    sell.unitValue=valorUnitario
    sell.cant=cant
    sell.totalValue=valorTotal
    sell.saleDate=fechaVenta
    sell.name=nombre
    sell.cedula=cedula
    sell.vendedor=vendedor
    sell.state=esSell

    SellRegister.create(sell)
    .then((sell) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sell); 
    }, (err) => next(err))
    .catch((err) => next(err));
}

function getRegisterSells(req, res,next){
    SellRegister.find(req.query)
    .then((sell) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sell);
    }, (err) => next(err))
    .catch((err) => next(err));
}

function updateRegisterSells(req, res,next){
    SellRegister.findByIdAndUpdate(req.params.sellId, {
        $set: req.body
    }, { new: true })
    .then((sell) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sell);
    }, (err) => next(err))
    .catch((err) => next(err));
}

function deleteRegisterSells(req, res,next){
    SellRegister.findByIdAndRemove(req.params.sellId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next)
}


module.exports = {
    registerSells,
    getRegisterSells,
    updateRegisterSells,
    deleteRegisterSells
}; 