module.exports = {
    url : 'https://proximax-foundry.github.io/web-wallet-vuejs/#/',
    elements: {
        create:  {
            locateStrategy: 'css selector',
            selector: 'div.px-5:nth-child(3) > a:nth-child(1)',
        },
        createnew:{
            locateStrategy: 'css selector',
            selector: 'div.px-5:nth-child(1) > a:nth-child(3)'
        },
        emptyname_validation:{
            locateStrategy: 'css selector',
            selector: '.error'
        },
        emptypassword_validation:{
            locateStrategy: 'css selector',
            selector: '.mr-1 > div:nth-child(2) > div:nth-child(1)'
        },
        emptyconfirmpasword_validation:{
            locateStrategy: 'css selector',
            selector: '.ml-1 > div:nth-child(2) > div:nth-child(1)'
        },
        create2: {
            locateStrategy: 'css selector',
            selector: 'button.default-btn:nth-child(2)'
        },
        clear_button: {
            locateStrategy: 'css selector',
            selector: 'button.default-btn:nth-child(1)'
        },
        input_walletname: {
            locateStrategy: 'css selector',
            selector: 'input.bg-white'
        },
        input_password: {
            locateStrategy: 'css selector',
            selector: '.mr-1 > div:nth-child(1) > input:nth-child(2)'
        },
        input_confirmpassword: {
            locateStrategy: 'css selector',
            selector: '.ml-1 > div:nth-child(1) > input:nth-child(2)'
            
        },
        input_confirmpassword2:{
            locateStrategy: 'css selector',
            selector: '.grid > div:nth-child(2) > div:nth-child(1) > input:nth-child(2)'
        },
        createsuccessful_title:{
            locateStrategy: 'css selector',
            selector: 'h1.font-bold'
        },
        show_privatekey: {
            locateStrategy: 'css selector',
            selector: 'div.px-5:nth-child(1) > a:nth-child(1)',
        },
        privatekey:{
            locateStrategy:'css selector',
            selector:'div.flex:nth-child(4) > div:nth-child(1) > div:nth-child(1)',
        },
        continue: {
            locateStrategy: 'css selector',
            selector: 'div.px-5:nth-child(3) > a:nth-child(1)',
        },
        duplicatename_validation:{
            locateStrategy:'css selector',
            selector:'.error'
        },
        createfromprivatekey:{
            locateStrategy:'css selector',
            selector:'div.px-5:nth-child(2) > a:nth-child(3)'
        },
        input_privatekey:{
            locateStrategy: 'css selector',
            selector: '.ml-1 >  div:nth-child(1) > input'
        },
        checkbox:{
            locateStrategy: 'css selector',
            selector: '.h-5'
        },
        emptypk_validation:{
            locateStrategy: 'css selector',
            selector: '.error'
        },
        emptyname_validation2:{
            locateStrategy: 'css selector',
            selector:'.error-text'
        },
        emptypassword_validation2:{
            locateStrategy: 'css selector',
            selector:'.mr-1 > div:nth-child(2) > div:nth-child(1)'
        },
        emptyconfirmpassword_validation2:{
            locateStrategy: 'css selector',
            selector:'.grid > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)'
        },
        createpk_title:{
            locateStrategy: 'css selector',
            selector: 'h1.font-bold'
        }
    }
}
