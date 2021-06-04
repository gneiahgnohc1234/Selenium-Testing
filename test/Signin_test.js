var password_1 = "abcd1234";
module.exports = {
    "Sign In": function (browser) {
        var home = browser.page.Home();
        var signin = browser.page.Signin();
        home
            .navigate()
            .pause(1000)
            .click("@create_a")
            .pause(1000)
            .click("@create_a")
            .pause(1000)
            .setValue("@create_wallet_input", "Wallet Test")
            .setValue("@enter_password_input", password_1)
            .setValue("@confirm_password_input", password_1)
            .pause(1000)
            .click("@clear_button")
            .pause(1000)
            .setValue("@create_wallet_input", "Wallet Test")
            .setValue("@enter_password_input", password_1)
            .setValue("@confirm_password_input", password_1)
            .pause(1000)
            .click("@create_button")
            .pause(1000)
            .click('@Continue_a')
        signin
            .pause(2000)
            .click('@signin_button')
            .pause(1000)
            .click('@wallet_dropdown')
            .pause(1000)
            .click('@select_wallet')
            .pause(1000)
            .setValue("@inputpassword", password_1)
            .pause(1000)
            .click('@signin_button2')
            .pause(1000)
            .end()
    }
}