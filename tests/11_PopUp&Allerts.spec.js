import { test, expect } from "@playwright/test";

test("Verify the js alert", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()

    page.goto("https://webdriveruniversity.com/Popup-Alerts/index.html")
    expect(page).toHaveTitle("WebDriver | Popups & Alerts")
    page.locator('[id="button1"]').click()
    page.on("dialog", async(simplealert) =>{
        simplealert.message()
        expect(simplealert.message).toContain("I am an alert box!")
        await simplealert.accept()
        console.log(simplealert.message());
        
    })
    
  
    // page.locator('[id="button2"]').click()
})
