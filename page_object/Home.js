
module.exports = {
  url : 'https://proximax-foundry.github.io/web-wallet-vuejs/#/',
  elements:{
    logo:{
      locateStrategy: 'xpath',
      selector: '/html/body/div[1]/div/header/div[1]/a/img'
    },
    network_dropdown:{
      locateStrategy: 'xpath',
      selector: '/html/body/div[1]/div/header/div[3]/div[2]/div/div[2]/span'
    },
    mainnet:{
      locateStrategy: 'xpath',
      selector: '/html/body/div[6]/div/ul/li[2]'
    },
    testnet:{
        locateStrategy: 'xpath',
        selector: '/html/body/div[6]/div/ul/li[3]'
    },
    home:{
      locateStrategy: 'xpath',
      selector:'//a[contains(text(),"Home")]'
    },
    signin_button:{
      locateStrategy: 'xpath',
      selector: '//a[contains(text(),"Sign In")]'
    },
    signin_title:{
      locateStrategy: 'xpath',
      selector: '/html/body/div[1]/div/div/div/div/div/div[2]/div/div[1]/div/div[1]/div/div[2]/h1'
    },
    signin_close:{
      locateStrategy: 'xpath',
      selector: '/html/body/div[1]/div/div/div/div/div/div[2]/div/div[1]/div/div[2]'
    },
    siriusid:{
      locateStrategy: 'xpath',
      selector: '/html/body/div[1]/div/div/div/div/div/div[2]/div/div[2]/div/a'
    },
    siriusid_title:{
      locateStrategy: 'xpath',
      selector: '/html/body/div[1]/div/div/div/div/div/div[2]/div/div[2]/div/div[1]/div/h1'
    },
    siriusid_close:{
      locateStrategy: 'xpath',
      selector: '/html/body/div[1]/div/div/div/div/div/div[2]/div/div[2]/div/div[1]/div/div[1]/svg'
    },
    wallet:{
      locateStrategy: 'xpath',
      selector: '//a[contains(text(),"Wallets")]'
    },
    create:  {
      locateStrategy: 'xpath',
      selector: '//a[contains(text(),"Create")]',
    }
  }

}
