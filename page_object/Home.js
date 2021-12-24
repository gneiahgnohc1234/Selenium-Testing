const elements = {

    new_button: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)',
    transfer_button: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1)',
    digitalasset_button: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(2)',
    namespace_button: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(3)',
    account_button: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(4)',
    home_button: '#app > div:nth-child(1) > header > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > img',
    overview_tab: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)',
    assets_tab: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)',
    namespaces_tab: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)',
    transactions_tab: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4)',
    assets_title: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > b',
    assetid_title: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(2) > div:nth-child(1) > span',
    namespaces_title: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > b',
    transactions_title: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(5) > b',
    name_title: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(2) > div:nth-child(1) > span',
    inout_title: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(1) > div:nth-child(1) > span',
    primary_account: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)',
    top_up: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1) > div:nth-child(2)',
    account_popup: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)',
    copy_address: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > img',
    transfer_xpx: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > a:nth-child(3) > div:nth-child(2)',
    close: '#app > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img',
    copy_successfulpopup: 'body > div:nth-child(9) > div:nth-child(1) > div:nth-child(1)',

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

    home(browser){
        return this
        .click("@home_button")
        .assert.urlEquals(browser + 'dashboard', 'When home icon is clicked, user is directed back to dashboard page')

    },

    click_tabs(){
        return this
        .click("@assets_tab")
        .isVisible('@assetid_title', callback = (result) => {
          this.assert.equal(result.value, true, 'If assets tab is clicked, user assets will be shown')
        })
        .click("@namespaces_tab")
        .isVisible('@name_title', callback = (result) => {
          this.assert.equal(result.value, true, 'If namespaces tab is clicked, user namespaces will be shown')
        })
        .click("@transactions_tab")
        .isVisible('@inout_title', callback = (result) => {
          this.assert.equal(result.value, true, 'If transactions tab is clicked, user transactions will be shown')
        })
        .click("@overview_tab")
        .isVisible('@assets_title', callback = (result) => {
          this.assert.equal(result.value, true, 'If overview tab is clicked, user assets will be shown')
        })
        .isVisible('@namespaces_title', callback = (result) => {
          this.assert.equal(result.value, true, 'If overview tab is clicked, user namespaces will be shown')
        })
        .isVisible('@transactions_title', callback = (result) => {
          this.assert.equal(result.value, true, 'If overview tab is clicked, user transactions will be shown')
        })

    },

    click_headercomponents(browser){
        return this
        .click("@primary_account")
        .isVisible('@account_popup', callback = (result) => {
          this.assert.equal(result.value, true, 'If user clicks primary account, a list of user accounts will be shown')
        })
        .click("@close")
        .click("@top_up")
        .assert.urlEquals(browser + 'create-transfer', 'When top up button is clicked, user is directed to create transfer page')
        .click("@home_button")
        .click("@transfer_xpx")
        .assert.urlEquals(browser + 'create-transfer', 'When transfer xpx button is clicked, user is directed to create transfer page')
        .click("@home_button")
        .click("@copy_address")
        .isVisible('@copy_successfulpopup', callback = (result) => {
          this.assert.equal(result.value, true, 'If user clicks to copy wallet address, a notification is shown')
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
