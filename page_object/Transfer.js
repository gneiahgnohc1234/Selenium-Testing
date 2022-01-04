const elements = {

    transfer_tab: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > a:nth-child(2)',
    transferfrom_acc: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)',
    primary_acc: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)',
    second_acc: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)',

}

const commands = {

    navigation_transfer(browser){
        return this
        .pause(1000)
        .click("@transfer_tab")
        .assert.urlEquals(browser + 'create-transfer', 'User is navigated to create transfer page')
    },

    transferfrom_dropdown(){
        return this
        .click("@transferfrom_acc")
        .isVisible('@primary_acc', callback = result => {
            this.assert.equal(result.value, true, "If user clicks transfer from drop down, user account is shown")
        })
        // select another account
        .click("@second_acc")
        
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