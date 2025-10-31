const {test, expect} = require('@playwright/test')

class ContactUs{
    title = "WebDriver | Contact Us"
    successmsg = 'Thank You for your Message!'
    firstNameSelecter = 'form[id="contact_form"]>input:nth-child(1)'
    lastNameSelector = 'form[id="contact_form"]>input:nth-child(2)'
    emailAddressSelector = 'form[id="contact_form"]>input:nth-child(3)'
    commentBoxSelector = 'textarea[name="message"]'
    errorMSGSelector = 'body'
    submitButtonSelector = 'div[id="form_buttons"]>input:nth-child(2)'
    resteButtonSelector = 'div[id="form_buttons"]>input:nth-child(1)'
    successMsgSelector = 'div[id="contact_reply"]'

}
export const contactUs = new ContactUs()