const elements = {

    account: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)',
    accountname_value: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)',
    accountdetails_tab: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)',
    back: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a',
    copy_address: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(7) > svg > path',
    copy_publickey: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(10) > svg > path',
    copy_privatekey: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(3) > svg:nth-child(2) > path',
    confirm_button: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3)',
    cancel_button: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(5)',
    cancel_button2: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4)',
    download_walletpaper: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(14) > div:nth-child(1)',
    edit_nameicon: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > img',
    enter_passwordpopup: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)',
    error_emptyname: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div.error.error_box.mb-3',
    error_existingname: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div.error.error_box.mb-3',
    error_emptypassword: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div.error.error_box.mb-3',
    error_wrongpassword: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div.error.error_box.mb-3',
    input_accountname: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input',
    input_password: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > input',
    password_eyeicon: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > svg > path',
    private_key: '#private',
    private_keyhidden: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > div:nth-child(1)',
    pk_successfulpopup: 'body > div:nth-child(9) > div:nth-child(1)',
    hide_privatekey: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(3) > svg:nth-child(3) > path',
    view_privatekey: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(12) > div:nth-child(2) > svg > path',

}

const commands = {

    navigate_accountdetails(browser){
        return this
        .click("@account")
        .isVisible('@accountdetails_tab', callback = result => {
            this.assert.equal(result.value, true, "If account is clicked, user is navigated to account details page")
        })
    },

    empty_input(){
        return this
        .click("@edit_nameicon")
        .click("@input_accountname")
        .setValue('@input_accountname','\ue003\ue003\ue003\ue003\ue003\ue003\ue003\ue003')
        .click("@edit_nameicon")
        .assert.elementPresent('@error_emptyname', 'When account name is empty, error is shown')
    },

    existing_name(name){
        return this
        .click("@edit_nameicon")
        .setValue('@input_accountname','\ue003\ue003\ue003\ue003\ue003\ue003\ue003\ue003')
        .setValue("@input_accountname", name)
        .click("@edit_nameicon")
        .assert.elementPresent('@error_existingname',' When account name is already taken, error is shown')
    },

    edit_accountname(name){
        return this
        .click("@back")
        .click("@account")
        .click("@edit_nameicon")
        .assert.elementPresent('@input_accountname', 'When edit button is clicked, account name field is open for edit.')
        .click("@input_accountname")
        .setValue('@input_accountname','\ue003\ue003\ue003\ue003\ue003\ue003\ue003\ue003')
        .setValue("@input_accountname", name)
        .click("@edit_nameicon")
        .pause(1000)
        .assert.containsText('@accountname_value', name, 'Account name has successfully edited.')

    },

    show_privatekey(password1, password2){
        return this
        .click("@view_privatekey")
        .isVisible('@enter_passwordpopup', callback = (result) => {
            this.assert.equal(result.value, true, 'If user clicks to view private key, it will prompt for user to enter password')
        })
        .click("@input_password")
        .click("@confirm_button")
        .isVisible('@error_emptypassword', callback = (result) => {
            this.assert.equal(result.value, true, 'If password field has no input, it will show an error')
        })
        .click("@cancel_button")
        .click("@back")
        .click("@account")
        .click("@view_privatekey")
        .click("@input_password")
        .setValue("@input_password", password1)
        .pause(1000)
        .click("@cancel_button2")
        .isVisible('@accountdetails_tab', callback = result => {
            this.assert.equal(result.value, true, "If user clicks cancel, user is navigated back to account details page")
        })
        .click("@view_privatekey")
        .click("@input_password")
        .setValue("@input_password", password2)
        .click("@confirm_button")
        .isVisible('@error_wrongpassword', callback = result => {
            this.assert.equal(result.value, true, "If user enters wrong wallet password, an error is shown")
        })
        .click("@cancel_button")
        .click("@back")
        .click("@account")
        .click("@view_privatekey")
        .click("@input_password")
        .setValue("@input_password", password1)
        .click("@password_eyeicon")
        .assert.elementPresent('@password_eyeicon', "When eye icon is clicked, private key field is unmasked")
        .click("@confirm_button")
        .assert.elementPresent('@private_key','If wallet password is correct, private key is revealed')
        .click("@copy_privatekey")
        .isVisible('@pk_successfulpopup', callback = result => {
            this.assert.equal(result.value, true, "If user clicks to copy private key, a notification is shown")
        })
        .pause(5000)
        .click("@hide_privatekey")
        .assert.elementPresent('@private_keyhidden', 'When hide private key button is clicked, private key field is masked again.')

    },
    


//swap, save paper wallet
}



module.exports = {
    elements: elements,
    commands: commands,
    url: function () {
      return '${this.api.launchUrl}'
    }
  
  }
