const { test, expect } = require("@playwright/test")

export class HomePage {

     title = "WebDriverUniversity.com"

    homePageTitle() {
        return "WebDriverUniversity.com"
    }
  
};
export const homePage = new HomePage();