const mongoose = require('mongoose');
const { Schema } = mongoose;

const doctorSchema = new Schema ({
    serviceType: String,
    name: String,
    location: String,
    locationId: String,
    doctorId: String,
    image: String,
    chiName: String,
    address1: String,
    address2: String,
    region: String,
    chiAddress: String,
    chiLocation: String,
    chiRegion: String,
    telephone1: String,
    telephone2: String,
    daySeq1: String,
    daySeq2: String,
    daySeq3: String,
    daySeq4: String,
    daySeq1time: String,
    daySeq2time: String,
    daySeq3time: String,
    daySeq4time: String,
    chiDaySeq1: String,
    chiDaySeq2: String,
    chiDaySeq3: String,
    chiDaySeq4: String,
    chiDaySeq1time: String,
    chiDaySeq2time: String,
    chiDaySeq3time: String,
    chiDaySeq4time: String,
    price: String,
    partner: String,
    medicine: String
});

module.exports = mongoose.model('Doctor', doctorSchema);