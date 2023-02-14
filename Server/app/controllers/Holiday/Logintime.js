const { LoginTimeModel } = require('../../Models/Holiday/Logintime')


class LoginTime {

    async CheckInTime(req, res) {
        // console.log("req.",req.body)

        const { td_date, checkIn, userid } = req.body

        const LoginTimeData = new LoginTimeModel({
            td_date, checkIn, checkOut: "00:00:00", userid:userid,status:0
        });

        //STORE YOUR LOGIN DATA IN DB 
        const HolidaysSave = await LoginTimeData.save();
        res.send({ msg: "Success" });
    }

    async CheckOutTime(req, res) {
        // console.log("req.",req.body)

        const { id,td_date, checkOut, userid } = req.body

        // console.log(id,td_date, checkOut, userid)

        const FindUser = await LoginTimeModel.findOne({userid:userid},{sort:{ '_id': -1}},{sort:{ '_id': -1}})

        // console.log(FindUser)
        // return
        const updateEmp = await LoginTimeModel.findByIdAndUpdate(FindUser,{ checkOut:checkOut,status:1 })
        // console.log(updateEmp)

        if(updateEmp.length > 0 || updateEmp != null){

            res.send({ msg: "Success" });
        }
    }

    async GetLoginTime (req,res){

        const { Empid } = req.body
        // console.log(Empid);

        var mysort = { '_id': -1};
        const CheckStatus = await LoginTimeModel.findOne({userid:Empid}).sort(mysort)
       if(CheckStatus != null){
        res.send({data:CheckStatus})
       }

    }



    async GetAllLoginTime (req,res){

        const { Empid } = req.body
        // console.log(Empid);

        const CheckStatus = await LoginTimeModel.find({userid:Empid})
               if(CheckStatus != null){
        res.send({data:CheckStatus})
       }

    }



}

module.exports = new LoginTime();
