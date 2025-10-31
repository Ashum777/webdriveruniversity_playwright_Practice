const {test, expect} = require("@playwright/test")

test("Verify the drag and drop", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://webdriveruniversity.com/Actions/index.html")
    let dragele = await page.locator('[id="draggable"]')
    let dropable = await page.locator('[id="droppable"]')
    await dragele.dragTo(dropable)
    expect(page.locator('[id="droppable"]')).toHaveAttribute('style',"background-color: rgb(244, 89, 80); height: 100%;")
})
test("verify the double click function", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    await page.goto("https://demoqa.com/buttons")
    await page.locator('[id="doubleClickBtn"]').dblclick()
    expect(page.locator('id="doubleClickMessage"')).toContainText('You have done a double click')
})
test("verify the right click function", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    await page.goto("https://demoqa.com/buttons")
    await page.locator('[id="rightClickBtn"]').click({button:'right'})
    expect(page.locator('id="rightClickMessage"')).toContainText('You have done a right click')
})
test("verify the key board action", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    await page.goto("https://gotranscript.com/text-compare")
    await page.locator('textarea[name="text1"]').fill("I am learning playwright")
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.press('Tab')
    await page.keyboard.press('Control+V')
    expect(page.locator('[name="text2"]')).toHaveValue("I am learning playwright")

})

