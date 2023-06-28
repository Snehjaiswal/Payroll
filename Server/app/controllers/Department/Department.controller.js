const { DepartmentModal } = require('../../Models/Department/Department.model')
const { EmployeeModal } = require('../../Models/Employee/Employee.model')


class Deparment {

    async AddDepartment(req, res) {

      try {
        console.log("RUN=====");
        const { Department, Designation } = req.body
        const Departmentfind = await DepartmentModal.findOne({ Department: Department })
        if (Departmentfind) {
            return res.send({ message: "alredy exist Department." })

        }
        const DeparmentData = new DepartmentModal({
            Department, Designation
        });

        //STORE YOUR LOGIN DATA IN DB 
        const DeparmentSave = await DeparmentData.save();
        console.log("DeparmentSave", DeparmentSave);
        res.send({ msg: "Success" });
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
