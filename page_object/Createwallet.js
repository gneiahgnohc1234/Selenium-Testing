const elements = {
    create: 'div.px-5:nth-child(3) > a:nth-child(1)',
    createnew: 'div.px-5:nth-child(1) > a:nth-child(3)',
    emptyname_validation: '.error',
    emptypassword_validation: '.mr-1 > div:nth-child(2) > div:nth-child(1)',
    emptyconfirmpasword_validation: '.ml-1 > div:nth-child(2) > div:nth-child(1)',
    create2: 'button.default-btn:nth-child(2)',
    clear_button: 'button.default-btn:nth-child(1)',
    input_walletname: 'input.bg-white',
    input_password: '.mr-1 > div:nth-child(1) > input:nth-child(2)',
    input_confirmpassword: '.ml-1 > div:nth-child(1) > input:nth-child(2)',
    input_confirmpassword2: '.grid > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)',
    createsuccessful_title: 'h1.font-bold',
    show_privatekey: 'div.px-5:nth-child(1) > a:nth-child(1)',
    privatekey: 'div.flex:nth-child(4) > div:nth-child(1) > div:nth-child(1)',
    continue: 'div.px-5:nth-child(3) > a:nth-child(1)',
    duplicatename_validation: '.error',
    createfromprivatekey: 'div.px-5:nth-child(2) > a:nth-child(3)',
    input_privatekey: '.ml-1 >  div:nth-child(1) > input',
    checkbox: '.h-5',
    emptypk_validation: '.error',
    emptyname_validation2: '.error-text',
    emptypassword_validation2: '.mr-1 > div:nth-child(2) > div:nth-child(1)',
    emptyconfirmpassword_validation2: '.grid > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)',
    createpk_title: 'h1.font-bold',
};

const commands = [{
    //create_wallet_test
    navigate_createnewwallet(browser) {
        return this
            .click("@create")
            .assert.urlEquals(browser + 'create', 'When ProximaX logo is clicked, user is navigated to home screen.')
            .click("@createnew")
            .assert.urlEquals(browser + 'create-wallet', 'When ProximaX logo is clicked, user is navigated to home screen.')
    },
    emptyfield_validation() {
        return this
            .setValue("@input_walletname", "\ue004") //clicks tab,  more info: https://www.selenium.dev/selenium/docs/api/py/webdriver/selenium.webdriver.common.keys.html
            .isVisible('@emptyname_validation', callback = (result) => {
                this.assert.equal(result.value, true, 'If wallet name is empty, error is shown')
            })
            .setValue("@input_password", "\ue004")
            .isVisible('@emptypassword_validation', callback = (result) => {
                this.assert.equal(result.value, true, 'If password is empty, error is shown')
            })
            .setValue("@input_confirmpassword", "\ue004")
            .isVisible('@emptyconfirmpasword_validation', callback = (result) => {
                this.assert.equal(result.value, true, 'If confirm password is empty, error is shown')
            })
    },
    clearbutton_validation(name, password) {
        return this
            .setValue('@input_walletname', name)
            .setValue("@input_password", password)
            .setValue("@input_confirmpassword", password)
            .click("@clear_button")
            .getValue('@input_walletname', callback = (result) => {
                this.assert.equal(result.value, '', 'When clear button is clicked, wallet name field is cleared')
            })
            .getValue('@input_password', callback = (result) => {
                this.assert.equal(result.value, '', 'When clear button is clicked, password field is cleared')
            })
            .getValue('@input_confirmpassword', function callback(result) {
                this.assert.equal(result.value, '', 'When clear button is clicked, password field is cleared')
            })
    },
    differentpassword_validation(name, password, password2) {
        return this
            .setValue("@input_walletname", name)
            .setValue("@input_password", password)
            .setValue("@input_confirmpassword", password2)
            .isVisible('@emptyconfirmpasword_validation',callback = (result) =>{
                this.assert.equal(result.value, true, 'If confirm password is different from password, error is shown')
            })
    },
    create_wallet(browser,name,password){
        return this 
        .click("@clear_button")
            .setValue("@input_walletname", name)
            .setValue("@input_password", password)
            .setValue("@input_confirmpassword", password)
            .click("@create2")
            .assert.visible('@createsuccessful_title', 'Wallet is successfully created when wallet name, password and confirm password are valid')
            .click('@show_privatekey')
            .assert.visible('@privatekey', 'When Show private key button is clicked, private key is revealed.')
            .click('@continue')
            .assert.urlEquals(browser,'When Continue button is clicked, user is navigated to the Home page.')
    },
    existingname_validation(name,password){
        return this
            .click("@create")
            .click("@createnew")
            .setValue("@input_walletname", name)
            .setValue("@input_password", password)
            .setValue("@input_confirmpassword", password)
            .click("@create2")
            .isVisible('@duplicatename_validation', callback = (result) =>{
                this.assert.equal(result.value, true, 'If wallet name is already taken, error is shown')
            })
            .end();  
    }

}];

module.exports = {
    elements: elements,
    commands: commands,
    url: function () {
        return '${this.api.launchUrl}'
    }

}