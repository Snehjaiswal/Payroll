"use strict";
const express = require("express");

const { EmployeeModal, EmployeeComapnyModal, EmployeeAccountModal, EmployeeFinancialModal } = require('../../Models/Employee/Employee.model')
const { validationResult } = require('express-validator')

// Product CLASS
class Employee {
    async AddEmployee(req, res) {
        try {
            const { FirstName, LastName, PhoneNumber, Email, FatherName, Date_Of_Birth, Gender, Local_Address, Martial_Status, Nationality, Profile_Img, Deparment, BankName, Branch_Name, Account_Number, Account_type, IFSC_Code,
                Designation, Date_Of_Joining, Status, Basic_salary, Increment, IncrementPercent, Bonus
            } = req.body;

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                console.log("err=>", errors.array());
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
                    Basic_salary,Increment, IncrementPercent, Bonus,
                    userid: employSave.id
                });

                await EmployeeFinabcialInfo.save();




                res.send({ msg: "Success"});
            }
        }
        catch (error) {
            res.send({ msg: "Error=>" + error })
        }
    }


}


module.exports = new Employee();
