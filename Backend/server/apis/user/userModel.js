const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    autoId: { type: Number, default: 0 },
    name: { type: String, default: '' },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
    hotelId: {type: mongoose.Schema.Types.ObjectId, ref: 'hotel'},
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'customer' },
    userType: { type: Number, default: '3' },///1-admin////2-hotel/////3-customer
    createdAt: { type: Date, default: Date.now },
    status: { type: Boolean, default: true }
})
module.exports = mongoose.model('user', userSchema)  