const {test, expect} = require("@playwright/test")
const {dropDowns} = require("../Support/PageObjectModel/DropDowns,CheckBoxes&RadioButtons")
const data = require("../Fixture/TestData.json")
const{checkBoxes} = require("../Support/PageObjectModel/DropDowns,CheckBoxes&RadioButtons")
const{radioButtons} = require("../Support/PageObjectModel/DropDowns,CheckBoxes&RadioButtons")
const {radioButtonsDisabled} = require("../Support/PageObjectModel/DropDowns,CheckBoxes&RadioButtons")

test("Verify the first dropdown", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    const pageTitle = dropDowns.getPageTitle()
    // Visiting the page
    await dropDowns.goto(page)
    // Verify the page title
    await dropDowns.verifyPage(page)
    // Select the langauge SQL
    await dropDowns.selectInfirstDropdown(page,data.testdata1Drowpdown[0].Value4)
    // Verify the SQL langauge is selected or not
    await dropDowns.assertTheselection1(page,data.testdata1Drowpdown[0].Value4)
    // Select the python langauge
    await dropDowns.selectInfirstDropdown(page,data.testdata1Drowpdown[0].Value3)
    // Verify the Python is selected ot not
    await dropDowns.assertTheselection1(page,data.testdata1Drowpdown[0].Value3)
})
test("Verify the second dropdown", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    //Visit url
    await dropDowns.goto(page)
    // verify the titlt
    await dropDowns.verifyPage(page)
    // select the testNG in second dropdown
    await dropDowns.selectInsecondDropdown(page,data.testdata1Drowpdown[1].Value3)
    // Verify the testNG is selected
    await dropDowns.assertTheselection2(page,data.testdata1Drowpdown[1].Value3)
    // select the maven in second dropdown
    await dropDowns.selectInsecondDropdown(page,data.testdata1Drowpdown[1].Value2)
    //Verify the maven is selected
    await dropDowns.selectInsecondDropdown(page,data.testdata1Drowpdown[1].Value2)
})
test("Verify the third dropdown", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    //Visit url
    await dropDowns.goto(page)
    // Verify the titlt
    await dropDowns.verifyPage(page)
    //Select the jquerry option in third dropdown
    await dropDowns.selectInthirdDropdown(page,data.testdata1Drowpdown[2].Value4)
    // Verify the jquerry is selected.
    await dropDowns.assertTheselection3(page,data.testdata1Drowpdown[2].Value4)
    //Select the HTML value in third dropdown
    await dropDowns.selectInthirdDropdown(page,data.testdata1Drowpdown[2].Value1)
    // Verify the HTML is selected.
    await dropDowns.assertTheselection3(page, data.testdata1Drowpdown[2].Value1)
})
test("Verify the checkboxes", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    //Visit url
    await dropDowns.goto(page)
    // Verify the titlt
    await dropDowns.verifyPage(page)
    // check the option 1
    await checkBoxes.checkCheckbox(page,1)
    // Verify the option one is checkes
    await checkBoxes.checkCheckbox(page,1)
    // verify another checkbox should not checked
    await checkBoxes.VerifyUnCheckedCheckbox(page,2)
    // uncheck third option
    await checkBoxes.uncheckCheckbox(page,3)
    // verify third option is not checked
    await checkBoxes.VerifyUnCheckedCheckbox(page,3)
})
test("Verify the Radio Buttons", async({browser}) =>{
    const Context = await browser.newContext()
        const page = await Context.newPage()
        // Visit url
        await dropDowns.goto(page)
        // Verify the titlt
        await dropDowns.verifyPage(page)
        // click the the button Blue
        await radioButtons.selectRediobutton(page, data.testdata1radiobutton[0].buttton2)
        // verify the button blue is selected
        await radioButtons.checkSelectedButton(page, data.testdata1radiobutton[0].buttton2)
        // click on button orange
        await radioButtons.selectRediobutton(page, data.testdata1radiobutton[0].buttton4)
         // verify the button orange is selected
         await radioButtons.checkSelectedButton(page, data.testdata1radiobutton[0].buttton4)
        // now check that blue is disselected
        await radioButtons.checkNotSelectedButton(page, data.testdata1radiobutton[0].buttton2)

})
test("verify the disabled Radio Button", async({browser}) =>{
    const Context = await browser.newContext()
    const page = await Context.newPage()
    //Visit url
    await dropDowns.goto(page)
    // Verify the titlt
    await dropDowns.verifyPage(page)
    // check that cabbage is disabled
    await radioButtonsDisabled.ChecDisabledRadiobutton(page, data.testdata1radiobutton[1].buttton2)
    // click on lattuce button 
    await radioButtonsDisabled.checkSelectedButton1(page, data.testdata1radiobutton[1].buttton1)
    // Verify tha button is ckecked
    await radioButtonsDisabled.checkSelectedButton1(page, data.testdata1radiobutton[1].buttton1)
    // Check another button is not selected
    await radioButtonsDisabled.checkNotSelectedButton1(page,data.testdata1radiobutton[1].buttton3)
  
})

page.on("dialog",async(simplealer) =>{
    await simplealer.message()
    await simplealer.accept()

})
// file upload
page.locator("b b").setInpuFile()

// file download
let downloadpeomise = page.waitfoEvent("download")


// multitabs
