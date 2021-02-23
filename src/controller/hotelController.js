const hotelService = require('../service/hotelService')

exports.post = async function (req, res, next){
    const result = await hotelService.save(req.body);
    res.status(201);
    res.send(result);
}

exports.getAll = async function(req, res, next){
    const result = await hotelService.getAll();
    res.send(result);
}

exports.update = async function(req, res, next){
    const result = await hotelService.update(req.params.id, req.body);
    res.status(201);
    res.send(result);
}

exports.getOne = async function(req, res, next){
    const result = await hotelService.update(req.params.id, req.body);
    res.send(result);
}

exports.deleteOne = async function(req, res, next){
    const result = await hotelService.deleteOne(req.params.id, req.body);
    res.status(204);
    res.send("");
}

exports.deleteMany = async function(req, res, next){
    const result = await hotelService.deleteMany(req.params.id, req.body);
    res.status(204);
    res.send("");
}
