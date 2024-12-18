var Hotel = require('../model/hotelModel')

async function list(req, res, next) {
  // res.end('Hotel List')
  await Hotel.find().then((data, err) => {
      if (err) {
          res.status(503).json(err)
      } else {
          res.status(200).json(data)
      }
  })
}

const create = async (req, res, next) => {
    const {  nbrRooms,fabricationDate } = req.body
    
    await new Hotel({
        nbrRooms:nbrRooms,
        fabricationDate: new Date() 
        
    }).save().then((err, data) => {
        if (err) {
            console.log("error create Hotel : " + err);
        }
        console.log(data)
    })

    res.json('Hotel added ! nbrRooms: ' + nbrRooms + '  :fabricationDate ' + fabricationDate )
}



async function updateHotel(req, res, next) {
  Hotel.findByIdAndUpdate(req.params.id, req.body)
      .then((data, err) => {
          if (err) {
              res.status(500).json(err)
          }
          res.status(200).json(data)
      })
}

async function deleteHotel(req, res, next) {
  await Hotel.findByIdAndDelete(req.params.id).then((data, err) => {
      if (err) {
          res.status(500).json(err)
      }
      res.status(200).json("aaaaaaaaaa")

  })
}

async function listHotelsWithDefaultRooms(req, res, next) {
    try {
        const hotels = await Hotel.find({ nbrRooms: 10 }); 
        res.status(200).json(hotels);
    } catch (err) {
        res.status(503).json({ error: err.message });
    }
}







  



module.exports = { create ,list,updateHotel,deleteHotel,listHotelsWithDefaultRooms}