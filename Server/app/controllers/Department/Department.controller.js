const { DepartmentModal } = require('../../Models/Department/Department.model')
const { EmployeeModal } = require('../../Models/Employee/Employee.model')


class Deparment {

    async AddDepartment(req, res) {

        try {
            const { Department, Designation } = req.body
            console.log("okkk", typeof Department);

            // const Departmentfind = await DepartmentModal.find({ Department: Department })

            DepartmentModal.findOne({ Department: Department }, async (err, document) => {
                if (document) {
                    return res.send({ msg: "alredy exist Department." })
                } else {
                    const DeparmentData = new DepartmentModal({
                        Department: Department, Designation: Designation, Status: true
                    });
                    console.log("DeparmentData", DeparmentData);
                    //STORE YOUR LOGIN DATA IN DB 
                    const DeparmentSave = await DeparmentData.save();
                    // console.log("DeparmentSave", DeparmentSave);

                    return res.send({ msg: "Success" })
                }
            });

        } catch (error) {

        }
    }

    async getDepartment(req, res) {


        const DeparmentData = await DepartmentModal.find();
        if (DeparmentData) {
            res.send({ DeparmentData: DeparmentData })
        } else {
            res.send({ msg: "Error" })


        }
    }

    async UpdateStatus(req, res) {


        const { id, status } = req.body



        const verifyAccount = DepartmentModal.findOneAndUpdate({ _id: id }, { $set: { Status: status } })
            .then(() => {
                console.log("successfully verifed");
            }).catch((err) => {
                console.log(err);
            })

        res.send({ msg: "Success" });
    }

    async deleteDeparment(req, res) {


        const { id } = req.body

        // console.log("req.body", req.body)

        const DeleteAccount = await DepartmentModal.deleteOne(id)
            .then(() => {
                console.log("successfully verifed");
            }).catch((err) => {
                console.log(err);
            })

        res.send({ msg: "Success" });
    }




    async Dashboard(req, res) {

        const EmployeeData = await EmployeeModal.countDocuments({})
        const DeparmentData = await DepartmentModal.countDocuments({})


        res.send({ msg: { EmployeeData, DeparmentData } })

    }



}

module.exports = new Deparment();
