module.exports = {
    url : 'https://proximax-foundry.github.io/web-wallet-vuejs/#/',
    elements: {
        create:  {
            locateStrategy: 'xpath',
            selector: '//a[contains(text(),"Create")]',
        },
        emptyname_validation:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div/div/form/div/div/div[2]/div[2]/div'
        },
        emptypassword_validation:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div/div/form/div/div/div[3]/div[1]/div[2]/div'
        },
        emptyconfirmpasword_validation:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div/div/form/div/div/div[3]/div[2]/div[2]/div'
        },
        create_button: {
            locateStrategy: 'xpath',
            selector: '//button[text()="Create"]'
        },
        clear_button: {
            locateStrategy: 'xpath',
            selector: '//button[contains(text(),"Clear")]'
        },
        input_walletname: {
            locateStrategy: 'xpath',
            selector: '//input[contains(@placeholder,"Wallet Name")]'
        },
        input_password: {
            locateStrategy: 'xpath',
            selector: '//input[contains(@placeholder,"Enter a New Password")]'
        },
        input_confirmpassword: {
            locateStrategy: 'xpath',
            selector: '//input[contains(@placeholder,"Confirm New Password")]'
        },
        Show_Private_Key_a: {
            locateStrategy: 'xpath',
            selector: '//a[contains(text(),"Show Private Key")]',
        },
        Continue_a: {
            locateStrategy: 'xpath',
            selector: '//a[contains(text(),"Continue")]',
        }
    }
}
