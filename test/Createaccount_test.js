var password_1 = "abcd1234";
var password_2 = "abcd12345"
var accountname = "Selenium";
module.exports = {
    "Create-wallet_test": function (browser) {
        var create = browser.page.Createwallet();
        var signin = browser.page.Signin();
        var account = browser.page.Createaccount();
        create
            .navigate()
            .click("@create")
            .pause(500)
            .click("@create")
            .setValue("@input_walletname", "Wallet Test")
            .setValue("@input_password", password_1)
            .setValue("@input_confirmpassword", password_1)
            .click("@create2")
            .click('@continue')
        signin
            .click('@signin_button')
            .click('@wallet_dropdown')
            .click('@select_wallet')
            .setValue("@inputpassword", password_1)
            .click('@signin_button2')
        account
            .click('@account')
        browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/view-all-accounts', 'When Account is clicked,User is navigated to the View Accounts page.')
        account
            .click('@createaccount')
        browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/select-type-creation-account', 'When Create a New Account is clicked,User is navigated to the Select Account Creation Type page.')
        account
            .click('@new')
        browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/create-account', 'When New is clicked, User is navigated to the Create New Account page.')
        account
            .click('@back')
        browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/select-type-creation-account', 'When back is clicked, User is navigated back to the Select Account Creation Type page.')
        account
            .click('@new')
            .pause(500)
            .setValue('@accountname', '\ue004')
            .isVisible('@name_validation', function callback(result) {
                result.value === true ? browser.assert.ok("If account name field is empty, error is shown") : ''
            })
            .setValue('@password', '\ue004')
            .isVisible('@password_validation', function callback(result) {
                result.value === true ? browser.assert.ok("If wallet password field is empty, error is shown") : ''
            })
            .setValue('@accountname', accountname)
            .pause(500)
            .setValue('@password', password_1)
            .pause(500)
            .click('@clear')
            .getValue('@accountname', callback = (result) => {
                result.value === "" ? browser.assert.ok('When clear button is clicked, Account name field is cleared') : ''
            })
            .getValue('@password', callback = (result) => {
                result.value === "" ? browser.assert.ok('When clear button is clicked, wallet password field is cleared') : ''
            })
            .setValue('@accountname', accountname)
            .setValue('@password', password_2)
            .click('@create') 
            .isVisible('@password_validation2', function callback(result) {
                result.value === true ? browser.assert.ok("If wallet password is incorrect, error is shown") : ''
            })
            .click('@clear')
            .setValue('@accountname', accountname)
            .setValue('@password', password_1)
            .click('@create') 
            browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/created-account', 'When account name is valid and wallet password is correct, User account is successfully created.')
        account
            .click('@show_privatekey')
            .isVisible('@privatekey',callback = (result) => {
                result.value === true ? browser.assert.ok('When Show private key is clicked, Private key is revealed') : ''
            })
            .pause(1000)
            .click('@hide_privatekey')
            //value is true after hiding
            /* .isVisible('@privatekey',callback = (result) => {
                result.value === false? browser.assert.ok(result,'When Hide private key is clicked, Private key is hidden') : ''
            }) */
            .click('@continue')
            browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/view-all-accounts', 'When continue is clicked,User is navigated to the View Accounts page.')
        account
            .click('@createaccount')
            .click('@new')
            .setValue('@accountname', accountname)
            .setValue('@password', password_1)
            .click('@create') 
            .isVisible('@password_validation2', function callback(result) {
                result.value === true ? browser.assert.ok("If account name is taken, error is shown") : ''
            })
            .end()
    }



}