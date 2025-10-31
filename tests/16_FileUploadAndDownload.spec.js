const {test, expect} = require("@playwright/test")

test("File upload", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    await page.goto("https://webdriveruniversity.com/File-Upload/index.html")
    expect(page).toHaveTitle("File Upload")
    await page.locator('[id="myFile"]').setInputFiles('../Fixture/FileUpload/Basics of Competition Law 2025.pdf')
    page.on("dialog", async(alert) =>{
        expect(alert.message()).toContain("Your file has now been uploaded!")
        await alert.accept()
    })
    await page.locator('[id="submit-button"]').click()
    expect(page).toHaveURL("https://webdriveruniversity.com/File-Upload/index.html?filename=Basics+of+Competition+Law+2025.pdf")

})
test("Verify the file download", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    page.goto("https://letcode.in/file")
    const downloadpromise = page.waitForEvent('download')
    page.locator('[id="pdf"]').click()
    const download = await downloadpromise
    download.saveAs('../Fixture/FileDownload/download1.pdf')

})