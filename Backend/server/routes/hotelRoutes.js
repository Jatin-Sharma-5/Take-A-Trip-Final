const router = require('express').Router();
const multer = require('multer')
const roomsController = require('../apis/rooms/roomsController')
const userController = require("../apis/user/userController")
const dashboardController = require('../apis/dashboard/dashboardController')
const reviewController = require('../apis/review/reviewController')
// const customerController = require("../apis/customer/customerController")



router.post('/login', userController.login)
router.post('/dashboard', dashboardController.hotelDashboard)


router.post('/room/all', roomsController.all)
router.post('/room/single', roomsController.single)

// router.use(require('../middleware/tokenChecker'))

router.post('/changePassword', userController.changePassword)

////////Rooms Routes///////////
const roomStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "server/public/room")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.fieldname + "-" + file.originalname)
    }
})
const roomUpload = multer({ storage: roomStorage })
router.post('/room/add', roomUpload.single('image'), roomsController.add)
router.post('/room/update',roomUpload.single('image'), roomsController.update)
router.post('/room/delete', roomsController.del)

/////Review////////////
router.post('/review/all', reviewController.all)
router.post('/review/single', reviewController.single)

////All////
router.all('*', (req, res) => {
    res.send({
        success: false,
        status: 404,
        message: "Invalid Address"
    })
})
module.exports = router
