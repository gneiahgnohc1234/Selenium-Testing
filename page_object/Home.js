const elements = {

    new_button: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
    transfer_button: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)',
    digitalasset_button: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)',
    namespace_button: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)',
    account_button: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(4)',
    home_icon: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > img',

  }


const commands = {


    navigate_transfer(browser){
        return this
        .click("@new_button")
        .click("@transfer_button")
        .assert.urlEquals(browser + 'create-transfer', 'When transfer xpx is clicked, user is directed to create transfer page')

    },

    navigate_digitalasset(browser){
        return this
        .click("@new_button")
        .click("@digitalasset_button")
        .assert.urlEquals(browser + 'create-asset', 'When digital asset is clicked, user is directed to create asset page')
    },

    navigate_namespace(browser){
        return this
        .click("@new_button")
        .click("@namespace_button")
        .assert.urlEquals(browser + 'create-namespace', 'When namespace is clicked, user is directed to create namespace page')
    },

    navigate_namespace(browser){
        return this
        .click("@new_button")
        .click("@account_button")
        .assert.urlEquals(browser + 'select-type-creation-account', 'When account is clicked, user is directed to select wallet creation type page')
    },



}





module.exports = {
  elements: elements,
  commands: commands,
  url: function () {
    return '${this.api.launchUrl}'
  }

}
