const supertest = require("supertest");
const {sendMail} = require("../services/emailService")

const emailContent = {
    name:"Tomas",
    surname:"Julian",
    email:"tomirodriguez1368@gmail.com",
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
        expect(response.error).toEqual(true)
        expect(response.message).toEqual(`Email sent to ${emailContent.email}`)
    })
})
