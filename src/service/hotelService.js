const Hotel = require('../model/Hotel');
const mongoose = require('mongoose');

exports.save = async function(data){

    let result = null;
    const hotel = new Hotel(data);
    await hotel.save().then((res)=>{
        result = res;
    });
    return result;

}

exports.getAll = async function(){

    return Hotel.find({});

}

exports.update = async function (id, data){

    let result = null;
    await Hotel.updateOne({_id: id}, data).then(async ()=>{
        result = await this.getOne(id)
    });
    return result;

}

exports.getOne = async function(id){

    let result = null;
    await Hotel.findById(id).then((res)=>{
        result = res;
    })
    return result;

}

exports.deleteOne = async function(id){
    return Hotel.deleteOne({_id: id});
}

exports.deleteMany = async function(){
    return Hotel.deleteMany({});
}
