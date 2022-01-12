const elements = {

    account: 'a.link_block:nth-child(1)',
    multisig_tab: 'a.w-18:nth-child(2)',
    managecosign_button: '.blue-btn',
    addcosign_button: 'button.pl-6',
    input_publickey: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > input',
    publickey: '.pb-1 > path:nth-child(2)',
    error_invalidpublickey: '.error',
    select_contact: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5)',
    contact_list: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)',
    reduce_txnapproval: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)',
    add_txnapproval: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(8) > div:nth-child(1) > div:nth-child(2) > button:nth-child(3)',
    reduce_dltapproval: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(2) > button:nth-child(1)',
    add_dltapproval: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(2) > button:nth-child(3)',
    error_invalidapproval: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)',
    input_password: 'input.text-left',
    error_emptypassword: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(12) > div:nth-child(2)',
    cancel_button: '.content-center',
    updatecosign_button: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(13) > button',
    error_invalidpassword: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)',

}

const commands = {

    navigation_multisig(browser){
        return this
        .click("@account")
        .click("@multisig_tab")
        .assert.urlEquals(browser + 'multisig-settings/Primary', 'User is navigated to multisig page')
        .click("@managecosign_button")
        .assert.urlEquals(browser + 'convert-account-multisign/Primary', 'User is navigated to convert account to multisig page')
    
    },

    add_cosignatory(){
        return this
        .click("@contact_list")
        .pause(3000)
    },

    invalid_password(password){
        return this
        .setValue("@input_password", password)
        .click("@updatecosign_button")
        .isVisible('@error_invalidpassword', callback = result => {
            this.assert.equal(result.value, true, "If user enters invalid password, an error is shown")
        })

    },

    empty_password(browser){
        return this
        .clearValue("@input_password")
        .setValue("@input_password", "\ue004")
        .isVisible('@error_emptypassword', callback = result => {
            this.assert.equal(result.value, true, "If password has no input, an error is shown")
        })
        .click("@cancel_button")
        .assert.urlEquals(browser + 'multisig-settings/Primary', 'User is navigated back to multisig page')
        .pause(10000)
        
    },

    scheme_validation(){
        return this
        .click("@reduce_txnapproval")
        .isVisible('@error_invalidapproval', callback = result => {
            this.assert.equal(result.value, true, "If number of cosignatories for transaction approval is less than 1, an error is shown")
        })
        .click("@add_txnapproval")
        .click("@reduce_dltapproval")
        .isVisible('@error_invalidapproval', callback = result => {
            this.assert.equal(result.value, true, "If number of cosignatories for deletion approval is less than 1, an error is shown")
        })
        .click("@add_dltapproval")
    },  

    invalid_publickey(publickey){
        return this
        .click("@addcosign_button")
        .assert.visible('@input_publickey', 'When user clicks add cosignatory, cosignatory public key field is opened')
        .setValue("@input_publickey", publickey)
        .isVisible('@error_invalidpublickey', callback = result => {
            this.assert.equal(result.value, true, "If user enters invalid public key, an error is shown")
        })
        .clearValue("@input_publickey")
        
    },

    contact_dropdown(){
        return this
        .pause(1000)
        .click("@select_contact")
        .isVisible('@contact_list', callback = result => {
            this.assert.equal(result.value, true, "If user clicks select contact button, a list of contacts is shown")
        })
    },
    

}

module.exports = {

    elements: elements,
    commands: commands,
    url: function () {
        return '${this.api.launchUrl}'
    }

}