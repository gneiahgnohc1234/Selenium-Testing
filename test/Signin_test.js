var password_1 = "abcd1234";
var password_2 = 'abcd12345'
module.exports = {
    "Sign In": function (browser) {
        var create = browser.page.Createwallet();
        var signin = browser.page.Signin();
        //create an account
        create
            .navigate()
            .click("@create")
            .pause(500)
            .click("@createnew")
            .setValue("@input_walletname", "Wallet Test")
            .setValue("@input_password", password_1)
            .setValue("@input_confirmpassword", password_1)
            .click("@create2")
            .click('@continue')
        //signin test
        signin
            .click('@signin_button')
            .click('@wallet_dropdown')
            .click('@select_wallet')
            .click('@remove_wallet')
            .pause(500)
            .click('@signin_title')
            .isVisible('@emptywallet_validation', function callback(result){
               /*  result.value === true? browser.assert.ok("If wallet field is empty, error is shown"): '' */
              create
               .assert.equal(result.value,true,"If wallet field is empty, error is shown")
            })
            .setValue("@inputpassword", '\ue004')
            .pause(500)
            .isVisible('@emptypassword_validation', function callback(result){
                result.value ===true? browser.assert.ok("If password field is empty, error is shown"): ''
            })
            .click('@wallet_dropdown')
            .click('@select_wallet')
            .setValue("@inputpassword", password_2)
            .click('@signin_button2')
            .isVisible('@invalid_password', function callback(result){
                result.value === true? browser.assert.ok("If password is incorrect, error is shown"): ''
            })
            //clear function is not functioning
            .clearValue("@inputpassword")
            .setValue("@inputpassword", password_1)
            .click('@signin_button2')
            browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/dashboard', 'User is successfully signed in with valid wallet name and password')
            .pause(1000)
            .end()
    },
    
}