var password_1 = "abcd1234";
var password_2 = "11111111";
var password_3 = "11111";
module.exports = {
  "create-wallet": function (browser) {
    var signinvar = browser.page.Home();
    signinvar
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
      .click("@show_Private_Key_a")
      .click('')
      //.pause(1000)
      //.click("@continue_a")
      .pause()
      //.end();
  },
};
