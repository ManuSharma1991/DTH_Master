// @ts-nocheck
const mongoose = require( 'mongoose' );

const OperatorSchema = mongoose.Schema( {
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
    operatorid: Number
} );

module.exports = mongoose.model( 'Operator', OperatorSchema );