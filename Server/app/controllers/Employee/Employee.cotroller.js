"use strict";
const express = require("express");

const { EmployeeModal, EmployeeComapnyModal, EmployeeAccountModal, EmployeeFinancialModal } = require('../../Models/Employee/Employee.model')
const { validationResult } = require('express-validator')

// Product CLASS
class Employee {
    async AddEmployee(req, res) {
        try {
            const { FirstName, LastName, PhoneNumber, Email , FatherName , Date_Of_Birth ,  Gender , Local_Address , Martial_Status , Nationality , Profile_Img
            } = req.body;

            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                console.log("err=>",errors.array());
                req.send({msg:errors.array()})
            } else {

                const employ = new EmployeeModal({
                    FirstName, LastName, PhoneNumber, Email , FatherName , Date_Of_Birth ,  Gender , Local_Address , Martial_Status , Nationality , Profile_Img
                });
    
                //STORE YOUR LOGIN DATA IN DB 
               const employSave =  await employ.save();
                console.log( employSave.id );












                
                res.send({ msg: "Success ",data:employSave });
            }


           
        }
        catch (error) {
            console.log(error);
        }
    }


}


module.exports = new Employee();
