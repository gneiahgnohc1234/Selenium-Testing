
module.exports = {
  url : 'https://proximax-foundry.github.io/web-wallet-vuejs/#/',
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
      selector: '//input[contains(@placeholder,"Enter New Password")]'
    },
    confirm_password_input:  {
      locateStrategy: 'xpath',
      selector: '//input[contains(@placeholder,"Confirm New Password")]'
    },
    show_Private_Key_a:  {
      locateStrategy: 'xpath',
      selector: '//a[contains(text(),"Show Private Key")]', 
    },
    continue_a:  {
      locateStrategy: 'xpath',
      selector: '//a[contains(text(),"Continue")]',
    },
  }

}
