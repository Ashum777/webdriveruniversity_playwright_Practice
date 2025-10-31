const {test, expect} = require("@playwright/test")
const exp = require("constants")
class iframe {
    pageTitle = "WebDriver | IFrame"
    iFrameID = "frame"
    // Method to visit Page
    async Goto(page){
        await page.goto("https://webdriveruniversity.com/IFrame/index.html")
    }
    // Method to Verify the title
    async VerifyTitle(page){
        expect(page).toHaveTitle(this.pageTitle)
    }
    // Method to fill the text in field
    async fillText(page,fieldName,text){
        await page.frameLocator('[id="frame"]').locator(`[id="contact_form"] [placeholder="${fieldName}"]`).fill(text)
    }
    // Method to verify the filled text
    async VerifyFieldtext(page,fieldName,text){
        expect(page.frameLocator('[id="frame"]').locator(`[id="contact_form"] [placeholder="${fieldName}"]`)).toHaveValue(text)

    }
    // Method to click on sunmitButton
    async clickButton(page,Button){
        await page.frameLocator('[id="frame"]').locator(`[id="form_buttons"] [type=${Button}]`).click()
    }

}
export const iFrame = new iframe