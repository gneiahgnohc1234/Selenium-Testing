
module.exports = {
  url : 'http://localhost:8080/',
  elements:{
    create_button:{
      locateStrategy: 'xpath',
      selector: '//a[text()="Create"]'
    },
    create_a:  {
      locateStrategy: 'xpath',
      selector: '//a[contains(text(),"Create")]',
    },
    clear_button:  {
      locateStrategy: 'xpath',
      selector: '//button[contains(text(),"Clear")]'
    },
    placeholder_wallet:  {
      locateStrategy: 'xpath',
      selector: '//input[contains(@placeholder,"Wallet Name")]'
    },
    placeholder_enter_password:  {
      locateStrategy: 'xpath',
      selector: '//input[contains(@placeholder,"Enter a New Password")]'
    },
    placeholder_confirm_password:  {
      locateStrategy: 'xpath',
      selector: '//input[contains(@placeholder,"Confirm New Password")]'
    },
    
  }

}
