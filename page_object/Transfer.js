const elements = {

    transfer_tab: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > a:nth-child(2)',
    sender_acc: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)',
    primary_acc: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)',
    second_acc: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)',
    receiver_acc: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input',
    invalid_icon: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)',
    select_contact: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2)',
    contact_list: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(1)',

}

const commands = {

    navigation_transfer(browser){
        return this
        .pause(1000)
        .click("@transfer_tab")
        .assert.urlEquals(browser + 'create-transfer', 'User is navigated to create transfer page')
    },

    sender_account(){
        return this
        .click("@sender_acc")
        .isVisible('@primary_acc', callback = result => {
            this.assert.equal(result.value, true, "If user clicks transfer from drop down, user account is shown")
        })
        // select another account
        .click("@second_acc")
        .click("@sender_acc")
        .click("@primary_acc")
        .pause(1000)
    },

    invalid_address(address, status){
        return this
        .setValue("@receiver_acc", address)
        .assert.containsText('@invalid_icon', status, 'Wallet address is invalid.')

    },

    contact_dropdown(){
        return this
        .click("@select_contact")
        .assert.visible('@contact_list', 'When user clicks select contact, contact list is shown')
        .click("@select_contact")

    },

    empty_password(){
        return this
        .pause(5000)
        .click("@input_password")
        .setValue("@input_password", '\ue004')
        .isVisible('@error_emptypassword', callback = result => {
            this.assert.equal(result.value, true, "If user does not enter password, an error is shown")
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