const { test, expect } = require('@playwright/test')
// const {homepage} = require('../Support/PageObjectModel/HomePage')
const { homePage } = require('../Support/PageObjectModel/HomePage')
const { contactUs } = require('../Support/PageObjectModel/ContactUs')
const data = require('../Fixture/TestData.json')

test("Verify The homePage title", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()
    let Title = homePage.homePageTitle()
    //visiting baseURL
    await page.goto("https://webdriveruniversity.com/")

    // verifying homepage title
    await expect(page).toHaveTitle((Title))

})
test("verify the title of Contact us page", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()
    let Title = contactUs.title
    page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    expect(page).toHaveTitle(Title)

})
test('Verify the functionality of submit button', async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()
    let firstName = contactUs.firstNameSelecter
    let lastName = contactUs.lastNameSelector
    let email = contactUs.emailAddressSelector
    let commentBox = contactUs.commentBoxSelector
    let subButton = contactUs.submitButtonSelector
    let successMSG = contactUs.submitButtonSelector
    let successMsgText = contactUs.successmsg
    let firstNameValue = data.testdata[0].firstNameValue
    let lastNameValue = data.testdata[0].lastNameValue
    let emailValue = data.testdata[0].emailValue
    let commentValue = data.testdata[0].commentValue
    await page.goto("/")

    await page.locator(firstName).fill(firstNameValue)
    await page.locator(lastName).fill(lastNameValue)
    await page.locator(email).fill(emailValue)
    await page.locator(commentBox).fill(commentValue)
    await page.locator(subButton).click()
    expect(page.locator(successMSG)).toHaveText(successMsgText)
})
test.only('Verify the functionality of Reset Button', async ({ browser }) => {
    const Context = await browser.newContext()
    const Page = await Context.newPage()
    let firstName = contactUs.firstNameSelecter
    let lastName = contactUs.lastNameSelector
    let email = contactUs.emailAddressSelector
    let commentBox = contactUs.commentBoxSelector
    let resButton = contactUs.resteButtonSelector
    let firstNameValue = data.testdata[0].firstNameValue
    let lastNameValue = data.testdata[0].lastNameValue
    let emailValue = data.testdata[0].emailValue
    let commentValue = data.testdata[0].commentValue

    //visiting the baseurl
    await Page.goto('/')
console.log(await Page.title())


})
test('Verify All field error msg', async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()
    let firstName = contactUs.firstNameSelecter
    let lastName = contactUs.lastNameSelector
    let email = contactUs.emailAddressSelector
    let commentBox = contactUs.commentBoxSelector
    let firstNameValue = data.testdata[0].firstNameValue
    let lastNameValue = data.testdata[0].lastNameValue
    let successMsgText = contactUs.successmsg
    let emailValue = data.testdata[0].emailValue
    let commentValue = data.testdata[0].commentValue
    let erromsg = contactUs.errorMSGSelector
    let subButton = contactUs.submitButtonSelector
    let erroMSGText = data.testdata[0].erromsg
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    await page.locator(firstName).fill(firstNameValue)
    await page.locator(lastName).fill(lastNameValue)
    await page.locator(email).fill(emailValue)
    await page.locator(subButton).click()
    expect(page.locator(erromsg)).toContainText(erroMSGText)
})
//