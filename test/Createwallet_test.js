var password_1 = "abcd1234";
var password_2 = "11111111";
var password_3 = "11111";
module.exports = {
  "Create-wallet": function (browser) {
    var home = browser.page.Home();
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
      .end();
  },
};