var password1 = "abcd1234";
var password2 = 'abcd12345'

module.exports = {
    "Create-wallet_test": function (browser) {
        var create = browser.page.Createwallet();
        create
            .navigate()
            .click("@create")
        browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/create', 'When Create Button is clicked, user is navigated to the Select Wallet Creation Type page.')
        create
            .click("@createnew")
            browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/create-wallet', 'When Create Button is clicked, user is navigated to the Create Wallet page.')
        create
            .setValue("@input_walletname", "\ue004") //clicks tab,  more info: https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.keys.html
            .isVisible('@emptyname_validation', function callback(result){
                result.value === true?browser.assert.ok("If wallet name is empty, error is shown"): ''
            })
            .setValue('@input_password', "\ue004")
            .isVisible('@emptypassword_validation', function callback(result){
                result.value === true?browser.assert.ok("If password is empty, error is shown"): ''   
            })
            .setValue('@input_confirmpassword', "\ue004")
            .pause(500)
            .isVisible('@emptyconfirmpasword_validation', function callback(result){
                result.value ===true? browser.assert.ok("If confirm password is empty, error is shown"): ''
            })
            .setValue('@input_walletname',"Wallet Test")
            .setValue("@input_password", password1)
            .setValue("@input_confirmpassword", password1)
            .click("@clear_button")
            .getValue('@input_walletname', function callback(result){
                result.value === "" ? browser.assert.ok("When clear button is clicked, wallet name field is cleared"):''
            })
            .getValue('@input_password', function callback(result){
                result.value === "" ? browser.assert.ok("When clear button is clicked, password field is cleared"):''
            })
            .getValue('@input_confirmpassword', function callback(result){
                result.value === "" ? browser.assert.ok("When clear button is clicked, confirm password field is cleared"):''
            })
            .setValue("@input_walletname", "Wallet Test")
            .setValue("@input_password", password1)
            .setValue("@input_confirmpassword", password2)
            .isVisible('@emptyconfirmpasword_validation', function callback(result){
                result.value === true? browser.assert.ok("If confirm password is different from password, error is shown"): ''
            })
            //cant validate eyeicon
            .click("@clear_button")
            .setValue("@input_walletname", "Wallet Test")
            .setValue("@input_password", password1)
            .setValue("@input_confirmpassword", password1)
            .click("@create2")
            .assert.visible('@createsuccessful_title', 'Wallet is successfully created when wallet name, password and confirm password are valid')
            .click('@show_privatekey')
            .assert.visible('@privatekey', 'When Show private key button is clicked, private key is revealed.')
            .click('@continue')
            browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/', 'When Continue button is clicked, user is navigated to the Home page.')
           
            //existing wallet name
            create
            .click("@create")
            .click("@createnew")
            .setValue("@input_walletname", "Wallet Test")
            .setValue("@input_password", password1)
            .setValue("@input_confirmpassword", password1)
            .click("@create2")
            .isVisible('@duplicatename_validation', function callback(result){
                result.value === true? browser.assert.ok("If wallet name is already taken, error is shown"): ''
            })
            .end();  
    }
    
    

}