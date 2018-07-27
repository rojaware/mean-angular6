var mongoose = require('mongoose');
var MemberSchema = new mongoose.Schema({
    name: String,
    birthYear: Number,
    memberType: String,
    city: String,
    email: String,
    english: String,
    career: String,
    created: Date,
    expiryDate: Date,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Member', MemberSchema);

