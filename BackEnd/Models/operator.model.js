const mongoose = require('mongoose');

const OperatorSchema = mongoose.Schema({
    firstname: String,
    lastname: String,

    emailid: String,
    phonenumber: Number,

    shiftstarttime: Number,
    shiftendtime: Number,

    startmeridian: Number,
    endmeridian: Number,

    maximumnumberofcustomers: Number,
    totalnumberofactivecustomers: Number,

    operatorID: String,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Operator', OperatorSchema);