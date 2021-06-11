
module.exports = {
  url : 'https://proximax-foundry.github.io/web-wallet-vuejs/#/',
  elements:{
    logo:{
      locateStrategy: 'css selector',
      selector: '.w-32'
    },
    network_dropdown:{
      locateStrategy: 'css selector',
      selector: '.p-dropdown-trigger-icon'
    },
    mainnet:{
      locateStrategy: 'xpath',
      selector: '/html/body/div[6]/div/ul/li[2]'
    },
    testnet:{
        locateStrategy: 'css selector',
        selector: 'li.p-dropdown-item:nth-child(3)'
    },
    home:{
      locateStrategy: 'css selector',
      selector:'.font-normal'
    },
    signin_button:{
      locateStrategy: 'css selector',
      selector: '.w-full'
    },
    signin_title:{
      locateStrategy: 'css selector',
      selector: '.default-title'
    },
    signin_close:{
      locateStrategy: 'css selector',
      selector: '.fixed'
    },
    siriusid:{
      locateStrategy: 'css selector',
      selector: 'div.px-5:nth-child(2) > div:nth-child(1) > a:nth-child(1)'
    },
    siriusid_title:{
      locateStrategy: 'css selector',
      selector: '.default-title'
    },
    wallet:{
      locateStrategy: 'css selector',
      selector: 'div.w-16:nth-child(4) > a:nth-child(1)'
    },
    create:  {
      locateStrategy: 'css selector',
      selector: 'div.px-5:nth-child(3) > a:nth-child(1)',
    }
  }

}
