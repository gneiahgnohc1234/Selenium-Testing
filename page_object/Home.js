
module.exports = {
  url : 'http://localhost:8080/',
  elements:{
    create_button:{
      locateStrategy: 'xpath',
      selector: '//button[text()="Create"]'
    },
    create_a:  {
      locateStrategy: 'xpath',
      selector: '//a[contains(text(),"Create")]',
    },
    clear_button:  {
      locateStrategy: 'xpath',
      selector: '//button[contains(text(),"Clear")]'
    },
    create_wallet_input:  {
      locateStrategy: 'xpath',
      selector: '//input[contains(@placeholder,"Wallet Name")]'
    },
    enter_password_input:  {
      locateStrategy: 'xpath',
      selector: '//input[contains(@placeholder,"Enter a New Password")]'
    },
    confirm_password_input:  {
      locateStrategy: 'xpath',
      selector: '//input[contains(@placeholder,"Confirm New Password")]'
    },
    Show_Private_Key_a:  {
      locateStrategy: 'xpath',
      selector: '//a[contains(text(),"Show Private Key")]',
    },
    Continue_a:  {
      locateStrategy: 'xpath',
      selector: '//a[contains(text(),"Continue")]',
    },
  }

}
