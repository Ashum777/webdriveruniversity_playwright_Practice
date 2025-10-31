const{test,expect} = require("@playwright/test")

test("Verify the table", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    await page.goto("https://webdriveruniversity.com/Data-Table/index.html")
    let text = await page.locator('[id="t01"] tbody tr td:nth-child(1)')
    let lastname = await page.locator('[id="t01"] tbody tr td:nth-child(2)')
    let age = await page.locator('[id="t01"] tbody tr td:nth-child(3)')

    for(let i=0;i<3;i++){
        let nametext = await text.nth(i).textContent()
        let lasttext = await lastname.nth(i).textContent()
        let agenumber= await age.nth(i).textContent()
        console.log(`my name is ${nametext} ${lasttext} and my age is ${agenumber}`)
    }
})