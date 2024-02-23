const mongoose = require('mongoose');

console.log("connecting to mongoose");

let providersSchema = new mongoose.Schema({
    name : {type : String, required : true}
});


let Providers = mongoose.model('Providers', providersSchema);
console.log(Providers);
module.exports = Providers;