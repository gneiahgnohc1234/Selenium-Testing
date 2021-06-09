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
        create2: {
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
        createsuccessful_title:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div/div/div/h1'
        },
        show_privatekey: {
            locateStrategy: 'xpath',
            selector: '//a[contains(text(),"Show Private Key")]',
        },
        privatekey:{
            locateStrategy:'xpath',
            selector:'/html/body/div[1]/div/div/div/div/div/div/div/div[4]/div/div[1]',
        },
        continue: {
            locateStrategy: 'xpath',
            selector: '//a[contains(text(),"Continue")]',
        },
        duplicatename_validation:{
            locateStrategy:'xpath',
            selector:'/html/body/div[1]/div/div/div/div/div/form/div/div/div[1]'
        },
        createfromprivatekey:{
            locateStrategy:'xpath',
            selector:'/html/body/div[1]/div/div/div/div/div/div/div[2]/a'
        },
        input_privatekey:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div/div/form/div/div/div[2]/div[1]/input'
        },
        checkbox:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div/div/form/div/div/label/input'
        },
        emptypk_validation:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div/div/form/div/div/div[2]/div[2]/div'
        },
        emptyname_validation2:{
            locateStrategy: 'xpath',
            selector:'/html/body/div[1]/div/div/div/div/div/form/div/div/div[3]/div[2]/div'
        },
        emptypassword_validation2:{
            locateStrategy: 'xpath',
            selector:'/html/body/div[1]/div/div/div/div/div/form/div/div/div[4]/div[1]/div[2]/div'
        },
        emptyconfirmpassword_validation2:{
            locateStrategy: 'xpath',
            selector:'/html/body/div[1]/div/div/div/div/div/form/div/div/div[4]/div[2]/div[2]/div'
        },
        createpk_title:{
            locateStrategy: 'xpath',
            selector: '/html/body/div[1]/div/div/div/div/div/form/h1'
        }
    }
}
