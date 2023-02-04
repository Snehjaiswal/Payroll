const {HolidaysModel} = require('../../Models/Holiday/Holiday.model')


class Holidays {

    async AddHoliday(req, res) {
        // console.log("req.",req.body)

        const {title,Discription,allDay,start,end} = req.body

        const HolidayData = new HolidaysModel({
            title,Discription,allDay,start,end
        });

        //STORE YOUR LOGIN DATA IN DB 
        const  HolidaysSave = await HolidayData.save();
        // console.log("HolidaysSave",HolidaysSave)
        
        res.send({ msg: "Success"});
    }

    async AddHoliday(req, res) {
        // console.log("req.",req.body)

        const {title,Discription,allDay,start,end} = req.body

        const HolidayData = new HolidaysModel({
            title,Discription,allDay,start,end
        });

        //STORE YOUR LOGIN DATA IN DB 
        const  HolidaysSave = await HolidayData.save();
        // console.log("HolidaysSave",HolidaysSave)
        
        res.send({ msg: "Success"});
    }



    async GetHoliday(req, res) {
        console.log("req.",res)

        const HolidaysData = await HolidaysModel.find();
        if(HolidaysData){
            res.send({HolidayData:HolidaysData})
        }else{
            res.send({msg:"Error"})


        }
        // console.log("HolidaysData",HolidaysData)
    }

}

module.exports = new Holidays();
