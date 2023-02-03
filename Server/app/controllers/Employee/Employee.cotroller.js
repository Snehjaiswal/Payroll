"use strict";
const express = require("express");

const { EmployeeModal, EmployeeComapnyModal, EmployeeAccountModal, EmployeeFinancialModal } = require('../../Models/Employee/Employee.model')
const { validationResult } = require('express-validator')

// Product CLASS
class Employee {
  async AddEmployee(req, res) {
    try {
<<<<<<< HEAD
      const { FirstName, LastName, PhoneNumber, Email, FatherName, Date_Of_Birth, Gender, Local_Address, Martial_Status, Nationality, Profile_Img, Deparment, BankName, Branch_Name, Account_Number, Account_type, IFSC_Code,
        Designation, Date_Of_Joining, Status, Basic_salary, Increment, IncrementPercent, Bonus
=======
      const { FirstName, LastName,
        PhoneNumber, Email,
        FatherName, Date_Of_Birth,
        Gender, Local_Address,
        Martial_Status, Nationality,
        Profile_Img, Deparment, BankName,
        Branch_Name, Account_Number,
        Account_type, IFSC_Code,
        Designation, Date_Of_Joining,
        Status, Basic_salary,
        Increment, IncrementPercent,
        Bonus
>>>>>>> f5155dda9db82a40b03bbb11b05f4b3060353326
      } = req.body;

      const errors = validationResult(req)

      if (!errors.isEmpty()) {
<<<<<<< HEAD
        // console.log("err=>", errors.array());
=======
        console.log("err=>", errors.array());
>>>>>>> f5155dda9db82a40b03bbb11b05f4b3060353326
        req.send({ msg: errors.array() })
      } else {

        // Email Validation Check
        const ExistEmail = await EmployeeModal.findOne({ Email });

        if (ExistEmail)
          return res.status(400).json({ msg: "This email already exists." });


        // Account Number Check 
        const ExistAccountNumber = await EmployeeAccountModal.findOne({ Account_Number });

        if (ExistAccountNumber)
          return res.status(400).json({ msg: "This Bank Account already exists." });
<<<<<<< HEAD
=======

        // Personal Account Information
        const employ = new EmployeeModal({
          FirstName,
          LastName,
          PhoneNumber,
          Email,
          Password: FirstName + "@" + PhoneNumber.slice(-4),
          FatherName,
          Date_Of_Birth,
          Gender,
          Local_Address,
          Martial_Status,
          Nationality,
          Profile_Img
        });

        //STORE YOUR LOGIN DATA IN DB 
        const employSave = await employ.save();


        // Company Information
        const EmployeeComapny = new EmployeeComapnyModal({
          Deparment,
          Designation,
          Date_Of_Joining,
          Status,
          userid: employSave.id
        });
        await EmployeeComapny.save();

        // Bank Account Information
        const EmployeeAccountInfo = new EmployeeAccountModal({
          BankName,
          Branch_Name,
          Account_type,
          Account_Number,
          IFSC_Code,
          userid: employSave.id
        });

        await EmployeeAccountInfo.save();


        // Employee Financial Information 
        const EmployeeFinabcialInfo = new EmployeeFinancialModal({
          Basic_salary,
          Increment,
          IncrementPercent,
          Bonus,
          userid: employSave.id
        });

        await EmployeeFinabcialInfo.save();
>>>>>>> f5155dda9db82a40b03bbb11b05f4b3060353326




<<<<<<< HEAD

        // Personal Account Information
        const employ = new EmployeeModal({
          FirstName, LastName, PhoneNumber, Email, Password: FirstName + "@" + PhoneNumber.slice(-4), FatherName, Date_Of_Birth, Gender, Local_Address, Martial_Status, Nationality, Profile_Img
        });

        //STORE YOUR LOGIN DATA IN DB 
        const employSave = await employ.save();


        // Company Information
        const EmployeeComapny = new EmployeeComapnyModal({
          Deparment, Designation, Date_Of_Joining, Status,
          userid: employSave.id
        });
        await EmployeeComapny.save();

        // Bank Account Information
        const EmployeeAccountInfo = new EmployeeAccountModal({
          BankName, Branch_Name, Account_type, Account_Number, IFSC_Code,
          userid: employSave.id
        });

        await EmployeeAccountInfo.save();


        // Employee Financial Information 
        const EmployeeFinabcialInfo = new EmployeeFinancialModal({
          Basic_salary, Increment, IncrementPercent, Bonus,
          userid: employSave.id
        });

        await EmployeeFinabcialInfo.save();




=======
>>>>>>> f5155dda9db82a40b03bbb11b05f4b3060353326
        res.send({ msg: "Success" });
      }
    }
    catch (error) {
      res.send({ msg: "Error=>" + error })
<<<<<<< HEAD
    }
  }

  async aggre(req, res) {
    collection('Payroll')
      .aggregate(
        [
          { $match: { clothId: { '$in': convertInto } } }, // convertInto is arrays of sold clothId which I got from Shopify
          {
            $lookup:
            {
              from: "bags",
              localField: "bagId",
              foreignField: "bagId",
              as: "bags"
            }
          },
          {
            $lookup:
            {
              from: "sellers",
              localField: "sellerId",
              foreignField: "sellerId",
              as: "sellers"
            },
          },
          {
            "$project": {
              "bagId": 1.0,
              "bags.source": 1.0,
              "sellers.firstName": 1.0, // dont get anything
              "sellers.lastName": 1.0,  // dont get anything
              "brand": 1.0
            }
          },
        ]
      ).toArray()

  }






  async GetEmployees(req, res) {

    try {

      let QueryObject = [{
        $lookup: {
          from: "Employee Company Information",
          localField: "userid",
          foreignField: "_id",
          as: "Employee All Information"
        }
      }];
      // let QueryObject1 = [{
      //   $lookup: {
      //     from: "Employee Company Information",
      //     localField: "userid",
      //     foreignField: "_id",
      //     as: "Employee Information"
      //   }
      // }];

      // let QueryObject2 = [{
      //   $lookup: {
      //     from: "Employee Financial Information",
      //     localField: "_id",
      //     foreignField: "userid",
      //     as: "Employee Information"
      //   }
      // }];

      // const cursor = EmployeeModal.aggregate(QueryObject,QueryObject1,QueryObject2)
      const cursor = EmployeeModal.aggregate([{
        $lookup: {
          from: "Employee Company Information",
          localField: "userid",
          foreignField: "_id",
          as: "Employee All Information"
        }
      }])


      cursor.then(
        function (item) {
          console.log("QueryObject", item)
          res.send({ Employees: item })
        })


=======
>>>>>>> f5155dda9db82a40b03bbb11b05f4b3060353326
    }
  }
  async GetEmployee(req, res, next) {
    EmployeeAccountModal.find({}).then(function (employee) {
      res.send(employee);
    }).catch(next);
  }

  async aggre(req, res) {
  //   collection('Payroll')
  //     .aggregate(
  //       [
  //         { $match: { clothId: { '$in': convertInto } } }, // convertInto is arrays of sold clothId which I got from Shopify
  //         {
  //           $lookup:
  //           {
  //             from: "bags",
  //             localField: "bagId",
  //             foreignField: "bagId",
  //             as: "bags"
  //           }
  //         },
  //         {
  //           $lookup:
  //           {
  //             from: "sellers",
  //             localField: "sellerId",
  //             foreignField: "sellerId",
  //             as: "sellers"
  //           },
  //         },
  //         {
  //           "$project": {
  //             "bagId": 1.0,
  //             "bags.source": 1.0,
  //             "sellers.firstName": 1.0, // dont get anything
  //             "sellers.lastName": 1.0,  // dont get anything
  //             "brand": 1.0
  //           }
  //         },
  //         {
  //           $lookup: {
  //             from: "movies",
  //             localField: "movie_id",
  //             foreignField: "_id",
  //             as: "movie_details",
  //           },
  //         },
  //         {
  //           $limit: 1
  //         }
  //       ]
  //     ).toArray()

  }

    catch (err) {
      console.log("Error=>", err)
    }
  }





  async GetAllEmployee(req, res) {

    EmployeeModal.aggregate([
      {
        $lookup:
        {
          from: "EMPLOYEE_COMPANY_INFORMATION",
          localField: "userid",
          foreignField: "_id",
          as: "Employee All Information"
        }
      }
    ]).then(function (err, res) {
      if (err) throw err;
      console.log(JSON.stringify(res));
  
    })

  }






}


module.exports = new Employee();
