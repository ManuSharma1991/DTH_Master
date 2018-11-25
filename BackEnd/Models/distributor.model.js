const mongoose = require('mongoose');

const DistributorSchema = mongoose.Schema({
    name: String,

    phonenumber1: Number,
    phonenumber2: Number,

    addressline1: String,
    addressline2: String,
    pincode: Number,
    city: String,
    zone: String,

    settopboxlimit: Number,
    creditlimit: Number,
    totalcostofinventory: Number,


    distributorID: String,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Distributor', DistributorSchema);