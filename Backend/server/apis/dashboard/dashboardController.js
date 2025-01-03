const destination = require('../destination/destinationModel')
const hotel = require('../hotel/hotelModel')
const package = require('../packages/packageModel')
const User = require('../user/userModel')
const rooms = require('../rooms/roomsModel')
const customer = require('../customer/customerModel')
const booking = require('../booking/bookingModel')

const adminDashboard = async (req, res) => {
    let totalDestination = await destination.countDocuments()
    let totalPackage = await package.countDocuments()
    let totalCustomers = await customer.countDocuments()
    let totalHotel = await hotel.countDocuments()
    let totalBooking=await booking.countDocuments()
        res.send({
            success: true,
            status: 200,
            message: "Dashboard",
            totalDestination: totalDestination,
            totalPackage: totalPackage,
            totalCustomer: totalCustomers,
            totalHotel: totalHotel,
            totalBooking:totalBooking
        })
}
const hotelDashboard = async (req, res) => {
    let totalRooms = await rooms.find({hotelId:req.body.hotelId}).countDocuments()
   
    let totalBooking=await booking.find({userId:req.body.hotelId}).countDocuments()
    console.log(req.body.userId);
    res.send({
        success: true,
        status: 200,
        message: "dashboard",
       totalRooms:totalRooms,
       totalBooking:totalBooking
    })

}



module.exports = { adminDashboard, hotelDashboard }