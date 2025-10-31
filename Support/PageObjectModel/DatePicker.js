const {test, expect} = require("@playwright/test")

test("verify the datePicker", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    page.goto("https://webdriveruniversity.com/Datepicker/index.html")
})