module.exports = {
    elements: {
        account:{
            locateStrategy:'xpath',
            selector: '/html/body/div[1]/div/div/div/div[1]/nav/a[3]'
        },
        createaccount:{
            locateStrategy:'xpath',
            selector:'/html/body/div[1]/div/div/div/div[2]/div[1]/div[2]/a'
        },
        new:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div[2]/div[2]/div/div/a[1]'
        },
        from_privatekey:{
            locateStrategy: 'xpath',
            selector: '//a[contains(text(),"From a Private Key")]'
        },
        accountname:{
            locateStrategy: 'xpath',
            selector: '//input[contains(@placeholder,"Account Name")]'
        },
        password:{
            locateStrategy: 'xpath',
            selector: '//input[contains(@placeholder,"Enter Your Wallet Password")]'
        },
        name_validation:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div[2]/div[2]/form/fieldset/div[1]/div[2]/div'
        },
        password_validation:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div[2]/div[2]/form/fieldset/div[2]/div[2]/div'
        },
        back:{
            locateStrategy:'xpath',
            selector: '/html/body/div[1]/div/div/div/div[2]/div[1]/div[2]/a'
        },
        clear:{
            locateStrategy: 'xpath',
            selector: '//button[contains(text(),"Clear")]'
        },
        password_validation2:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div[2]/div[2]/form/fieldset/div[1]'
        },
        create:{
            locateStrategy: 'xpath',
            selector: '//button[contains(text(),"Create")]'
        },
        show_privatekey:{
            locateStrategy:'xpath',
            selector:'//a[contains(text(),"Show Private Key")]'
        },
        hide_privatekey:{
            locateStrategy:'xpath',
            selector:'//a[contains(text(),"Hide Private Key")]'
        },
        privatekey:{
            locateStrategy:'xpath',
            selector: '/html/body/div[1]/div/div/div/div[2]/div/div/div[4]/div/div[1]'
        },
        continue:{
            locateStrategy: 'xpath',
            selector: '//a[contains(text(),"Continue")]'
        },
        privatekey_field:{
            locateStrategy: 'xpath',
            selector: '//input[contains(@placeholder,"Enter Private Key")]'
        },
        privatekey_validation:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div[2]/div[2]/form/fieldset/div[1]/div[2]/div'
        },
        import:{
            locateStrategy: 'xpath',
            selector: '//button[contains(text(),"Import")]'
        }
    }
}