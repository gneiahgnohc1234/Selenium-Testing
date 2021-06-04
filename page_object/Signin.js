module.exports = {
    url : 'https://proximax-foundry.github.io/web-wallet-vuejs/#/',
    elements:{
        signin_button:{
          locateStrategy: 'xpath',
          selector: '//a[contains(text(),"Sign In")]'
        },
        wallet_dropdown:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div/div/div[2]/div/div[1]/div/div[1]/div/div[2]/form/fieldset/div[1]/div[2]/div[1]/div[1]'
        },
        select_wallet:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div/div/div[2]/div/div[1]/div/div[1]/div/div[2]/form/fieldset/div[1]/div[2]/div[1]/div[2]/span[1]'
        },
        inputpassword:{
            locateStrategy:'xpath',
            selector: '//input[contains(@placeholder,"Enter Wallet Password")]'
        },
        signin_button2:{
            locateStrategy: 'xpath',
            selector: '//button[contains(text(),"Sign In")]'
          },
    }
}