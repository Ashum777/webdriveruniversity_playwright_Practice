const {test, expect} = require("@playwright/test")
const{iFrame} = require("../Support/PageObjectModel/IFrame")
const data = require("../Fixture/TestData.json")
const exp = require("constants")
test("Verify the i Frame", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    // visit page
    await iFrame.Goto(page)
    // verify the title
    await iFrame.VerifyTitle(page)
    // fill first name
    await iFrame.fillText(page,"First Name",data.testdata[0].firstNameValue)
    // Verify the first name is filled
    await iFrame.VerifyFieldtext(page,"First Name",data.testdata[0].firstNameValue)
    // fill last name
    await iFrame.fillText(page,"Last Name",data.testdata[0].lastNameValue)
    // Verify the last name is filled
    await iFrame.VerifyFieldtext(page,"Last Name",data.testdata[0].lastNameValue)
    // fill email address name
    await iFrame.fillText(page,"Email Address",data.testdata[0].emailValue)
    // Verify the email address name is filled
    await iFrame.VerifyFieldtext(page,"Email Address",data.testdata[0].commentValue)
    // fill comment name
    await iFrame.fillText(page,"Comments",data.testdata[0].commentValue)
    // Verify the comment name is filled
    await iFrame.VerifyFieldtext(page,"Comments",data.testdata[0].commentValue)
    // Click on submit button
    await iFrame.clickButton(page,SUBMIT)
})

