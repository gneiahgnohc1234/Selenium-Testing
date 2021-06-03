//var localhost_path = "http://localhost:8080/";
//const Dynamic_button = require("./Dynamic_button");
//var create_a = "//a[text()='Create']";
//var create_button = "//button[contains(text(),'Create')]";
var password_1 = "abcd1234";
//var clear_button = "//button[contains(text(),'Clear')]";
module.exports = {
  Hello: function (browser) {
    var signinvar = browser.page.Dynamic_button();
    signinvar
      .navigate()
      //.assert.title("web-wallet");
      .click("@create_a")
      .click("@create_a")
      .setValue("@placeholder_wallet", "Wallet Test")
      .setValue("@placeholder_enter_password", password_1)
      .setValue("@placeholder_confirm_password", password_1)
      .pause(2000)

      .click("@clear_button")
      .pause(2000)
      .end();
  },
};
