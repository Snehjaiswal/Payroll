"use strict"

const { Schema, model } = require('mongoose');

// Employee Information Collection
const EmployeeInformation = Schema({

    FirstName: {
        type: String,
        required: true,
        trim: true
    },
    LastName: {
        type: String,
        required: true,
        trim: true
    },
    PhoneNumber: {
        type: Number,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    FatherName: {
        type: String,
        required: true,
        trim: true
    },
    Gender: {
        type: String,
        required: true
    },
    Date_Of_Birth: {
        type: Date,
        required: true
    },


    Local_Address: {
        type: String,
        required: true
    },

    Martial_Status: {
        type: String,
        required: true
    },
    Nationality: {
        type: String,
        required: true
    },

    Profile_Img: {
        type: Buffer,
        required: true
    },
    Role_Id :{
        type:String,
        Enum:[0,1],
        default:0

    }

},
    {
        timestamps: true
    },

)
const EmployeeModal = model('EMPLOYEES', EmployeeInformation);


// Employee Company Information Collection
const EmployeeCompanyInformation = Schema({
    Deparment: {
        type: String,
        required: true,
        trim: true
    },
    Designation: {
        type: String,
        required: true,
        trim: true
    },
    Date_Of_Joining: {
        type: String,
        required: true,
        trim: true
    },
    Status: {
        type: String,
        required: true,
        trim: true
    },
    userid: {
        type: Schema.ObjectId,
        required: true,
        trim: true
    },

},
    {
        timestamps: true
    },

)
const EmployeeComapnyModal = model('COMPANY_INFORMATION', EmployeeCompanyInformation);


// Employee Account Information Collection
const EmployeeAccountInformation = Schema({
    BankName: {
        type: String,
        required: true,
        trim: true
    },
    Branch_Name: {
        type: String,
        required: true,
        trim: true
    },
    Account_type: {
        type: String,
        required: true,
        trim: true
    },
    Account_Number: {
        type: String,
        unique:true,
        required: true,
        trim: true
    },
    IFSC_Code: {
        type: String,
        required: true,
        trim: true
    },
    userid: {
        type: Schema.ObjectId,
        required: true,
        trim: true
    },

},
    {
        timestamps: true
    },

)
const EmployeeAccountModal = model('ACCOUNT_INFORMATION', EmployeeAccountInformation);


// Employee Financial Information Collection
const EmployeeFinancialInformation = Schema({
    Basic_salary: {
        type: String,
        required: true,
        trim: true
    },
    Increment: {
        type: String,
        required: true,
        trim: true
    },
    IncrementPercent: {
        type: String,
        required: true,
        trim: true
    },
    Bonus: {
        type: String,
        trim: true
    },
    userid: {
        type:Schema.ObjectId,
        required: true,
        trim: true
    },

},
    {
        timestamps: true
    },

)
const EmployeeFinancialModal = model('FINANCIAL_INFORMATION', EmployeeFinancialInformation);



module.exports = { EmployeeModal, EmployeeComapnyModal, EmployeeAccountModal, EmployeeFinancialModal };

