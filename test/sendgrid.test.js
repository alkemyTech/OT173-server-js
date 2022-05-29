const supertest = require("supertest");
const {sendMail} = require("../services/emailService")
require("dotenv").config()
const emailContent = {
    name:"Tomas",
    surname:"Julian",
    email:"rodrigueztomi1368@gmail.com",
    message:"dsadasdasd",
    subject:"Hola",
}

describe("Email Service",()=>{
    it("empty fields", async ()=>{
        const response = await sendMail({
        })
        expect(response.error).toEqual(true)
    })
    it("Succeful email",async ()=>{
        const response = await sendMail(emailContent)
        expect(response.error).toEqual(false)
        expect(response.message).toEqual(`Email sent to ${emailContent.email}`)
    })
})
