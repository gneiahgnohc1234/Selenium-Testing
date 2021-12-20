const elements = {

    address: '#address',
    account_detailstab: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)',
    close: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1)',
    create: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > button',
    create_account: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > a',
    createnew_account: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > a:nth-child(1)',
    createnew_frompk: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > a:nth-child(2)',
    copy_address: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(7) > svg > path',
    copy_publickey: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(10) > svg > path',
    copyaddress_successful: 'body > div:nth-child(9) > div:nth-child(1)',
    copypublickey_successful: 'body > div:nth-child(9) > div:nth-child(1) > div:nth-child(1)',
    createsuccessful_popup: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)',
    input_accountname: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > input',
    input_walletpassword: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > input',
    home_icon: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a > img',
    empty_accountname: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div.error.error-text.text-left.my-2',
    empty_walletpassword: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div.error.error-password.text-left.my-2',
    //enter_passwordpopup: '',
    wrong_walletpassword: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)',
    password_eyeicon: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > svg > path',
    public_key: '#public',
    private_key: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > div:nth-child(1)',
    view_privatekey: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > svg > path'

}

const commands = {

    navigate_createaccount(browser){
        return this
        .click("@create_account")
        .assert.urlEquals(browser + 'select-type-creation-account', 'When Create New Account is clicked, user is navigated to select account selection type page.')
        .click("@home_icon")
        .assert.urlEquals(browser + 'dashboard', 'When home icon is clicked, user is navigated back to dashboard page.')
        .click("@create_account")

    },

    navigate_createnewaccount(browser){
        return this
        .click("@createnew_account")
        .assert.urlEquals(browser + 'create-account', 'When Create New is selected, user is navigated to create new account page.')

    },

    navigate_createnewfrompk(browser){
        return this
        .click("@createnew_frompk")
        .assert.urlEquals(browser + 'import-account', 'When From Private Key is selected, user is navigated to create new account from private key page.')
        
    },

    empty_inputaccount(){
        return this
        .click("@input_accountname")
        .setValue("@input_accountname", "\ue004")
        .isVisible('@empty_accountname', callback = (result) => {
            this.assert.equal(result.value, true, 'If account name has no input, error is shown')
        })
        .setValue("@input_walletpassword", "\ue004")
        .isVisible('@empty_walletpassword', callback = (result) => {
            this.assert.equal(result.value, true, 'If wallet password has no input, error is shown')
        })
    },

    // empty_inputpkaccount(){

    // },

    wrong_walletpassword(name, password){
        return this
        .click("@input_accountname")
        .setValue("@input_accountname", name)
        .setValue("@input_walletpassword", password)
        .click("@create")
        .isVisible('@wrong_walletpassword', callback = (result) => {
            this.assert.equal(result.value, true, 'If wallet password is wrong, error is shown')
        })
    },

    eye_icon(){
        return this
        .click('@password_eyeicon')
        .assert.elementPresent('@password_eyeicon', "When eye icon is clicked, password field is unmasked")
        .click('@password_eyeicon')
        .assert.elementPresent('@password_eyeicon', "When eye icon is clicked, password field is masked again")
        .pause(2000)
        .end()
    },

    create_account(name, password){
        return this
        .click("@input_accountname")
        .setValue("@input_accountname", name)
        .setValue("@input_walletpassword", password)
        .click("@create")
        .pause(1000)
        .assert.visible('@createsuccessful_popup', 'Account is successfully created when account name is valid and wallet password is correct')
        .click("@close")
        .pause(1000)
        .isVisible('@account_detailstab', callback = (result) => {
            this.assert.equal(result.value, true, 'If account is successfully created, user is navigated to the newly created account details page')
        })
        .isVisible('@address', callback = (result) => {
            this.assert.equal(result.value, true, 'If account is successfully created, wallet address is visible')
        })
        .isVisible('@public_key', callback = (result) => {
            this.assert.equal(result.value, true, 'If account is successfully created, public key is visible')
        })
        .isVisible('@private_key', callback = (result) => {
            this.assert.equal(result.value, true, 'If account is successfully created, private key is available')
        })
        .click("@copy_address")
        .isVisible('@copyaddress_successful', callback = (result) => {
            this.assert.equal(result.value, true, 'If user clicks copy address, a notification is shown')
        })
        .click("@copy_publickey")
        .isVisible('@copypublickey_successful', callback = (result) => {
            this.assert.equal(result.value, true, 'If user clicks copy public key, a notification is shown')
        })
        .click("@view_privatekey")

    }

    
}



module.exports = {
    elements: elements,
    commands: commands,
    url: function () {
        return '${this.api.launchUrl}'
    }
}