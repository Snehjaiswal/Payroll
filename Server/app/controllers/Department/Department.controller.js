const { DepartmentModal } = require('../../Models/Department/Department.model')


class Deparment {

    async AddDepartment(req, res) {
        // console.log("req.",req.body)

        const { Department, Designation } = req.body

        const DeparmentData = new DepartmentModal({
            Department, Designation
        });

        //STORE YOUR LOGIN DATA IN DB 
        const DeparmentSave = await DeparmentData.save();

        res.send({ msg: "Success" });
    }




    async getDepartment(req, res) {
        console.log("req.", res)

        const DeparmentData = await DepartmentModal.find();
        if (DeparmentData) {
            res.send({ DeparmentData: DeparmentData })
        } else {
            res.send({ msg: "Error" })


        }
    }

}

module.exports = new Deparment();
