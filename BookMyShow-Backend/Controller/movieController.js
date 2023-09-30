//This my MovieController Section --------------------------------->
const BookingModel = require("../Schema/bookMovieSchema")

//This is my StoreBooking Request and Result all section more and both are ----------->
const storeBooking = async (req, res) => {
        //then use are try and catch fuction are used --------->
    try {
        const { movie, slot, seats } = req.body;

        const myData = new BookingModel({ movie, slot, seats }); //Booking Movie and Booking , Seats
        const data = await myData.save();// and then Movie Save 

        //then return section Status are 200 then Booking Are Successful Check any (software)-------->          

        return res.status(200).json({
            message:"Booking successful",
            status:200,
            data:data
        })
    } catch (error) {
        console.log("error", error.message); // not choose then show error message is somthing went wrong-->
        return res.status(500).json({
            message:"something went wrong!",
            status:500,
            data:{}
        })
    }
}// create the get Booking request and result

const getBooking = async (req, res) => {
    try {
        // find last booking of user 
        const [data] = await BookingModel.find().sort({_id:-1}).limit(1)
        
        if (data.length === 0) {
            // if no booking found then print this message
            return res.status(200).json({
                message:"No previous Booking found!",
                status:200,
                data:null
            })    
        }
        
        // have any booking then print this message
        return res.status(200).json({
            message:"last booking!",
            status:200,
            data:data
        })
        
    } catch (error) {
        console.log("error", error.message);
        return res.status(500).json({
            message:"something went wrong!",
            status:500,
            data:{}
        })
    }
}

module.exports = { storeBooking, getBooking }
