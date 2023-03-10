"use strict";
const express = require("express");

const { EmployeeModal, EmployeeComapnyModal, EmployeeAccountModal, EmployeeFinancialModal } = require('../../Models/Employee/Employee.model')
const { validationResult } = require('express-validator')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

// Product CLASS
class Employee {
    async AddEmployee(req, res) {
        try {
            const { FirstName, LastName, PhoneNumber, Email, FatherName, Date_Of_Birth, Gender, Local_Address, Martial_Status, Nationality, Profile_Img, Deparment, BankName, Branch_Name, Account_Number, Account_type, IFSC_Code,
                Designation, Date_Of_Joining, Status, Basic_salary, Increment, IncrementPercent, Bonus
            } = req.body;

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                // console.log("err=>", errors.array());
                req.send({ msg: errors.array() })
            } else {

                // Email Validation Check
                const ExistEmail = await EmployeeModal.findOne({ Email });

                if (ExistEmail)
                    return res.json({ msg: "This email already exists." });



                // Account Number Check 
                const ExistAccountNumber = await EmployeeAccountModal.findOne({ Account_Number });


                if (ExistAccountNumber)
                    return res.json({ msg: "This Bank Account already exists." });





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



                res.send({ msg: "Success" });
            }
        }
        catch (error) {
            res.send({ msg: "Error=>", error })
        }

    }

    async GetAllEmployee(req, res) {



        const docs = await EmployeeModal.aggregate([
            {
                $lookup: {
                    from: "company_informations",
                    localField: "_id",
                    foreignField: "userid",
                    as: "result"
                }
            },
            {
                $lookup: {
                    from: "account_informations",
                    localField: "_id",
                    foreignField: "userid",
                    as: "result1"
                }
            },
            {
                $lookup: {
                    from: "financial_informations",
                    localField: "_id",
                    foreignField: "userid",
                    as: "result2"
                }
            }
        ])
        // console.log("docs", docs)
        res.send({ msg: docs })

    }


    async GetEmployee(req, res) {



        const docs = await EmployeeModal.aggregate([

            { $match: {  _id:ObjectId(req.params.id)} }
            ,
            {
                $lookup: {
                    from: "company_informations",
                    localField: "_id",
                    foreignField: "userid",
                    as: "result"
                }
            },
            {
                $lookup: {
                    from: "account_informations",
                    localField: "_id",
                    foreignField: "userid",
                    as: "result1"
                }
            },
            {
                $lookup: {
                    from: "financial_informations",
                    localField: "_id",
                    foreignField: "userid",
                    as: "result2"
                }
            }
        ])
        // console.log("docs", docs)
        res.send({ msg: docs })
    }




    async Login(req, res) {
        try {
            const { Email, Password } = req.body;

            if (!Email || !Password)
                return res.send({ msg: "Please fill in all fields." });

            if (!validateEmail(Email))
                return res.send({ msg: "Invalid emails." });

            // CHECK EMAIL IS ALREADY EXISTS ARE NOT
            const user = await EmployeeModal.findOne({ Email });

            if (!user)
                return res.json({ msg: "This Email Not exists." });


            if (user.Password != Password)
                return res.json({ msg: "Password Not Match." });

            if (!Password.length > 6)
                return res.send({ msg: "Password length minimum 6..." })


            res.send({ msg: "Success", data: user })
        } catch (error) {
            res.send({ msg: error })
        }

    }



}


// // email validation

function validateEmail(Email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(Email);
}




module.exports = new Employee();
