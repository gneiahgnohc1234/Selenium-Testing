const elements = {

    namespace: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > a:nth-child(3)',
    register_namespace: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a',
    input_name: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input',
    input_password: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1) > input',
    error_invalidname: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)',
    error_emptypassword: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(8) > div.error.error-password.text-left.my-2',

}

const commands = {

    navigate_namespace(browser){
        return this
        .pause(8000)
        .click("@namespace")
        .click("@register_namespace")
        .assert.urlEquals(browser + 'create-namespace', 'User is navigated to create namespace page')

    },

    invalid_name(name){
        return this
        .setValue("@input_name", name)
        .isVisible('@error_invalidname', callback = result => {
            this.assert.equal(result.value, true, "If user enters invalid name in one char, an error is shown")
        })
    },

    empty_password(name){
        return this
        .pause(1000)
        .setValue("@input_name", '\ue003')
        .setValue("@input_name", name)
        .click("@input_password")
        .pause(5000)
        .setValue("@input_password", '\ue004')
        .pause(8000)
        .isVisible('@error_emptypassword', callback = result => {
            this.assert.equal(result.value, true, "If wallet password has no input, an error is shown")
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