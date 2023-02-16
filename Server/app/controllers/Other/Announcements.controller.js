const { AnnouncementsModel } = require('../../Models/Others/Announcements.model')


class Announcements {

    async AddAnnouncements(req, res) {
    
        try {
            const { title, from_date, end_date, msg } = req.body

            console.log(title, from_date, end_date, msg);
    
            if (title == "" || from_date == "" || end_date == "" || msg == "") {
                res.send({ msg: "Please Fill All Feild" })
            }
    
    
            const AnnouncementsData = new AnnouncementsModel({
                title, from_date, end_date, msg
            });
    
            //STORE YOUR LOGIN DATA IN DB 
            const AnnouncementsSave = await AnnouncementsData.save();
            console.log("HolidaysSave",HolidaysSave)
    
            res.send({ msg: "Success" });
        } catch (error) {
            res.send({msg:error})
        }
    
    }




    async GetAnnouncements(req, res) {
        // console.log("req.",res)

        const AnnouncementsData = await AnnouncementsModel.find();
        console.log("fff", AnnouncementsData);
        if (AnnouncementsData) {
            res.send({ Announcements: AnnouncementsData })
        } else {
            res.send({ msg: "Error" })


        }

    }

}

module.exports = new Announcements();
