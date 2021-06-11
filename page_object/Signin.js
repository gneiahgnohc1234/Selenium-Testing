module.exports = {
    url : 'https://proximax-foundry.github.io/web-wallet-vuejs/#/',
    elements:{
        signin_button:{
          locateStrategy: 'css selector',
          selector: '.w-full'
        },
        wallet_dropdown:{
            locateStrategy: 'css selector',
            selector: '.selectPlugin > div:nth-child(1) > div:nth-child(1)'
        },
        remove_wallet:{
            locateStrategy:'css selector',
            selector:'.multiselect-clear'
        },
        emptywallet_validation:{
            locateStrategy: 'css selector',
            selector: '.error'
        },
        emptypassword_validation:{
            locateStrategy: 'css selector',
            selector: '.error-password'
        },
        select_wallet:{
            locateStrategy: 'css selector',
            selector: '.selectPlugin > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)'
        },
        inputpassword:{
            locateStrategy:'css selector',
            selector: '.text-placeholder'
        },
        signin_title:{
            locateStrategy:'css selector',
            selector: '.default-title'
        },
        invalid_password:{
            locateStrategy: 'css selector',
            selector:'.error'
        },
        signin_button2:{
            locateStrategy: 'css selector',
            selector: 'button.default-btn:nth-child(2)'
          },
    }
}