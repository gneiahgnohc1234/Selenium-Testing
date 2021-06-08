var password1 = "abcd1234";
var password2 = 'abcd12345'
module.exports = {
    "Create-wallet_test": function (browser) {
        var create = browser.page.Createwallet();
        create
            .navigate()
            .pause(1000)
            .click("@create")
        browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/create', 'When Create Button is clicked, user is navigated to the Select Wallet Creation Type page.')
        create
            .pause(1000)
            .click("@create")
            browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/create-wallet', 'When Create Button is clicked, user is navigated to the Create Wallet page.')
            .pause(1000)
        create
            .setValue("@input_walletname", "\ue004") //clicks tab,  more info: https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.keys.html
            .isVisible('@emptyname_validation', function callback(result){
                browser.assert.ok(result,"If wallet name is empty, error is shown")
               
            })
            .setValue('@input_password', "\ue004")
            .isVisible('@emptypassword_validation', function callback(result){
                browser.assert.ok(result,"If password is empty, error is shown")
                
            })
           
            .setValue('@input_confirmpassword', "\ue004")
            .pause(500)
            .isVisible('@emptyconfirmpasword_validation', function callback(result){
                browser.assert.ok(result,"If confirm password is empty, error is shown")
            })
        
            .setValue('@input_walletname',"Wallet Test")
            .setValue("@input_password", password1)
            .setValue("@input_confirmpassword", password2)
            .pause(1000)
            .click("@clear_button")
            
            .getValue('@input_password', function callback(result){
                result.value === "" ? browser.assert.ok({},"When clear button is clicked, wallet name field is cleared"):''
            })
            .getValue('@input_password', function callback(result){
                result.value === "" ? browser.assert.ok(result,"When clear button is clicked, password field is cleared"):''
            })
            .getValue('@input_confirmpassword', function callback(result){
                result.value === "" ? browser.assert.ok(result,"When clear button is clicked, confirm password field is cleared"):''
            })

            .pause(1000)
            /* .setValue("@create_wallet_input", "Wallet Test")
            .setValue("@enter_password_input", password1)
            .setValue("@confirm_password_input", password2)
            .pause(1000)
            .click("@clear_button")
            .pause(1000)
            .setValue("@create_wallet_input", "Wallet Test")
            .setValue("@enter_password_input", password_1)
            .setValue("@confirm_password_input", password_1)
            .pause(1000)
            .click("@create_button")
            .pause(1000)
            .click('@Continue_a')
            .end(); */
    }

}