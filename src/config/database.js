const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/demo', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then((db)=>{
    console.log('Db is connected');
})
