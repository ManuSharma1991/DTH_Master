// @ts-nocheck
const mongoose = require('mongoose');

const ChannelpackageSchema = mongoose.Schema({
  packagename: String,
  packagecategory: String,
  packagechargingtype: String,
  packagetransmissiontype: String,
  packagecost: Number,
  packageavailablefromdate: String,
  packageavailabletodate: String,
  addedbydefault: String,
  packageID: String
});

module.exports = mongoose.model('Channelpackage', ChannelpackageSchema);
