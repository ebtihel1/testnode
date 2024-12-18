var express = require('express')
var router = express.Router()
const {  create,list, updateHotel,deleteHotel ,listHotelsWithDefaultRooms} = require('../service/hotelService')


router.get('/list',  list)
router.post('/create',create)
router.put('/update/:id', updateHotel)
router.delete('/delete/:id',deleteHotel)
router.get('/listHotelsWithDefaultRooms',listHotelsWithDefaultRooms)






module.exports = router