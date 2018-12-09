// @ts-nocheck
const mongoose = require( 'mongoose' );

const STBSchema = mongoose.Schema( {
    settopboxtype: String,
    settopboxfeatures: String,

    length: Number,
    height: Number,
    width: Number,

    price: Number,
    installationcharges: Number,
    upgradationcharge: Number,
    discount: Number,
    billingtype: String,
    refundabledepositamount: Number,

    stbID: String
} );

module.exports = mongoose.model( 'STB', STBSchema );