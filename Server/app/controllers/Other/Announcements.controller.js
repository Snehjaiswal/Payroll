const { AnnouncementsModel } = require('../../Models/Others/Announcements.model')


class Announcements {

    async AddAnnouncements(req, res) {
        // console.log("req.",req.body)
        try {
            const { title, from_date, end_date, msg } = req.body

            const AnnouncementsData = new AnnouncementsModel({
                title, from_date, end_date, msg
            });

            //STORE YOUR LOGIN DATA IN DB 
            const AnnouncementsSave = await AnnouncementsData.save();
            // console.log("HolidaysSave",HolidaysSave)

            res.send({ msg: "Success" });
        }
        catch (error) {
            res.send({ msg: "error", error });
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
