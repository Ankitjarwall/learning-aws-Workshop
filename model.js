const mongoose = require('mongoose');

const OtpSchema = mongoose.Schema({
    email: {
        type: String
    },
    otp: {
        type: Number
    },
    time_expires: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model("TestDatabase", OtpSchema);
