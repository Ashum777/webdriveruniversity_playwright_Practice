const {test, expect} = require("@playwright/test")
const { CONNREFUSED } = require("dns")
// Multiwindowa
test("Verift the multiwindows", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    // visit the page
    await page.goto("https://webdriveruniversity.com/")
const [Contactuspage] = await Promise.all([
    Context.waitForEvent("page"),
    page.locator('[href="Contact-Us/contactus.html"] h1').click()
])

    await Contactuspage.locator('[name="first_name"]').fill("'Ashutosh'")
    await Contactuspage.locator('[name="last_name"]').fill("More")
    expect(page.locator('[name="first_name"]')).toHaveValue('Ashutosh')
    expect(page.locator('[name="last_name"]')).toHaveValue('more')

    // open button click
const [ButtonclickPage] = await Promise.all([
    Context.waitForEvent('page'),
    page.locator('[href="Click-Buttons/index.html"] h1').click()
])    
    // await ButtonclickPage.locator('[href="Click-Buttons/index.html"] h1').click()
    // expect(page.locator('[href="Click-Buttons/index.html"] h1')).toContainText("BUTTON CLICKS")
    await ButtonclickPage.locator('[id="button1"]').click()

})
