// @ts-nocheck
const mongoose = require( 'mongoose' );

const CustomerSchema = mongoose.Schema( {
    firstname: String,
    lastname: String,

    emailid: String,
    phonenumber: Number,

    addressline1: String,
    addressline2: String,
    landmark: String,
    pincode: Number,
    city: String,
    state: String,

    operatorName: String,
    retailerName: String,

    customerID: String,
    password: String
}, {
    timestamps: true
} );

module.exports = mongoose.model( 'Customer', CustomerSchema );