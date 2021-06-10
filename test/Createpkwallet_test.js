var password_1 = "abcd1234";
var password_2 = 'abcd12345'
var privatekey_1 = '7c226bf53c10ceb7e0dd7423cd378bbe0e78275756f4ccb8e6f70fa5d46e309b'
var privatekey_2 = 'asdsadasdasdasdasfsgsdaasdasdasdsadsadsafasdfdsfsadsadsadasdddbs'
module.exports = {
    "Create-wallet-with-private-key_test": function (browser) {
        var create = browser.page.Createwallet();
        create
            .navigate()
            .click("@create")
        browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/create', 'When Create Button is clicked, user is navigated to the Select Wallet Creation Type page.')
        create
            .pause(500)
            .click('@createfromprivatekey')
        browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/import-wallet', 'When Create Button is clicked, user is navigated to the Create Wallet with Private Key page.')
        create
            .setValue('@input_privatekey', '\ue004')
            .isVisible('@emptypk_validation', function callback(result) {
                result.value === true? browser.assert.ok("If private key is empty, error is shown") : ''
            })
            .setValue('@input_walletname', '\ue004')
            .isVisible('@emptyname_validation2', function callback(result) {
                result.value === true ? browser.assert.ok("If wallet name is empty, error is shown") : ''
            })
            .setValue('@input_password', '\ue004')
            .isVisible('@emptypassword_validation2', function callback(result) {
                result.value ===true ? browser.assert.ok("If password is empty, error is shown") : ''
            })
            .setValue('@input_confirmpassword', '\ue004')
            .isVisible('@emptyconfirmpassword_validation2', function callback(result) {
                result.value === true ? browser.assert.ok("If confirm password is empty, error is shown") : ''
            })
            //invalid private key not validated
            .pause(1000)
            .setValue('@input_privatekey', privatekey_1)
            .setValue('@input_walletname', 'Wallet Test')
            .setValue('@input_password', password_1)
            .setValue('@input_confirmpassword', password_2)
            .isVisible('@emptyconfirmpassword_validation2', function callback(result) {
                result.value === true ? browser.assert.ok("If confirm password is different from password, error is shown") : ''
            })
            .click('@clear_button')
            .getValue('@input_privatekey', function callback(result) {
                result.value === "" ? browser.assert.ok("When clear button is clicked, private key field is cleared") : ''
            })
            .getValue('@input_walletname', function callback(result) {
                result.value === "" ? browser.assert.ok("When clear button is clicked, wallet name field is cleared") : ''
            })
            .getValue('@input_password', function callback(result) {
                result.value === "" ? browser.assert.ok("When clear button is clicked, password field is cleared") : ''
            })
            .getValue('@input_confirmpassword', function callback(result) {
                result.value === "" ? browser.assert.ok("When clear button is clicked, confirm password field is cleared") : ''
            })
            .setValue('@input_privatekey', privatekey_1)
            .setValue('@input_walletname', 'Wallet Test')
            .setValue('@input_password', password_1)
            .setValue('@input_confirmpassword', password_1)
            .click('@create2')
            .assert.visible('@createsuccessful_title', 'Wallet is successfully created when wallet name, password and confirm password are valid')
            .click('@show_privatekey')
            .assert.visible('@privatekey', 'When Show private key button is clicked, private key is revealed.')
            .click('@continue')
        browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/', 'When Continue button is clicked, user is navigated to the Home page.')
            //existing name validation
            create
            .click("@create")
            .click("@createfromprivatekey")
            .setValue('@input_privatekey', privatekey_1)
            .pause(1000)
            .setValue("@input_walletname", "Wallet Test")
            .pause(1000)
            .setValue("@input_password", password_1)
            .setValue("@input_confirmpassword", password_1)
            .click("@create2")
            .isVisible('@duplicatename_validation', function callback(result){
                result.value === true? browser.assert.ok("If wallet name is already taken, error is shown"): ''
            })
            .end()
    }
}