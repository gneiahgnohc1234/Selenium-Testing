var password = "abcd1234";

module.exports = {
  "Home_test": function (browser) {
    var home = browser.page.Home();
    home
      .navigate()
      .pause(1000)
      .click('@logo')
    browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/', 'When ProximaX logo is clicked, user is navigated to home screen.')
    home
      .click('@network_dropdown')
      .assert.visible('@mainnet', 'When network dropdown button is clicked, list of available networks is shown.')
      .click('@wallet')
    browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/wallets', 'When Wallet is clicked, user is navigated to the wallets page.')
    home
      .click('@home')
    browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/', 'When Home is clicked, user is navigated to the home page.')
    home
      .click('@signin_button')
      .assert.visible('@signin_title', 'When Sign In button is clicked, the Sign in pop-up appeared.')
      .click('@signin_close')
      .click("@create")
      browser.assert.urlEquals('https://proximax-foundry.github.io/web-wallet-vuejs/#/create', 'When Create Button is clicked, user is navigated to the Select Wallet Creation Type page.')
    home
      .click('@home')
      .click('@siriusid')
      .assert.visible('@siriusid_title', 'When Sign In With Sirius ID button is clicked, the Sirius ID pop-up appeared')
      .end()
    },
};