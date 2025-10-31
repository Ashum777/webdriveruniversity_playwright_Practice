const{test, expect} = require("@playwright/test")
// Class for dropdowns
class DropDown {
    PageTitle = "WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)"  //title
    firstdropdownSelector = '[id="dropdowm-menu-1"]'  // Locator for first dropdown
    secondDropdownSelector = '[id="dropdowm-menu-2"]' // Locator for second dropdown
    thirdDropdownSelector = '[id="dropdowm-menu-3"]' // Locator for third dropdown
    // Method to visit the page
    async goto(page){
        await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    }
    // Method to verify the title of page 
    async verifyPage(page){
        await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        await expect(page).toHaveTitle(this.PageTitle)
    }
    //Method to select the option in first dropdown
    async selectInfirstDropdown(page,text){
        await page.locator(this.firstdropdownSelector).selectOption(text)
    }
    //Method to assert the selected value for first dropdown
    async assertTheselection1(page,text){
        expect(page.locator(this.firstdropdownSelector)).toHaveValue(text)
    }
    //Method to select the option in second dropdown
    async selectInsecondDropdown(page,text){
        await page.locator(this.secondDropdownSelector).selectOption(text)
    }
    //Method to assert the selected value for second dropdown
    async assertTheselection2(page,text){
        expect(page.locator(this.secondDropdownSelector)).toHaveValue(text)
    }
    //Method to select the option in third dropdown
    async selectInthirdDropdown(page,text){
        await page.locator(this.thirdDropdownSelector).selectOption(text)
    }
    //Method to assert the selected value for third dropdown
    async assertTheselection3(page,text){
        expect(page.locator(this.thirdDropdownSelector)).toHaveValue(text)
    }

}
export const dropDowns = new DropDown

class CheckBoxes {
    // method to check the checkbox
    async checkCheckbox(page, noOfoptiontoCheck){
        await page.locator(`[id="checkboxes"] [value="option-${noOfoptiontoCheck}"]`).check()
    }
    // method to Uncheck the checkbox
    async uncheckCheckbox(page, noOfoptiontoUncheck){
        await page.locator(`[id="checkboxes"] [value="option-${noOfoptiontoUncheck}"]`).uncheck()
    }
    // Method to verify the checked checkboxes
    async VerifyCheckbox(page, checkedOption){
        expect(page.locator(`[id="checkboxes"] [value="option-${checkedOption}"]`)).toBeChecked()
    }
    // Method to verify the unchecked checkboxes
    async VerifyUnCheckedCheckbox(page, UncheckedOption){
        expect(page.locator(`[id="checkboxes"] [value="option-${UncheckedOption}"]`)).not.toBeChecked()
    }
}
export const checkBoxes = new CheckBoxes

class Radiobuttons {
    async selectRediobutton(page,button){
        await page.locator(`[id="radio-buttons"] [value="${button}"]`).click()
    }
    async checkSelectedButton(page,button){
        expect(page.locator(`[id="radio-buttons"] [value="${button}"]`)).toBeChecked()
    }
    async checkNotSelectedButton(page,button){
        expect(page.locator(`[id="radio-buttons"] [value="${button}"]`)).not.toBeChecked()
    }
}
export const radioButtons = new Radiobuttons

class Radiobuttonsdisabled {
    async selectRediobutton1(page,fruit){
        await page.locator(`[id="fruit-selects"] [value="${fruit}"]`).click()
    }
    async checkSelectedButton1(page,fruit){
        expect(page.locator(`[id="fruit-selects"] [value="${fruit}"]`)).toBeChecked()
    }
    async checkNotSelectedButton1(page,fruit){
        expect(page.locator(`[id="fruit-selects"] [value="${fruit}"]`)).not.toBeChecked()
    }
    async ChecDisabledRadiobutton(page,fruit){
        expect(page.locator(`[id="fruit-selects"] [value="${fruit}"]`)).toBeDisabled()
    }
}
export const radioButtonsDisabled = new Radiobuttonsdisabled
