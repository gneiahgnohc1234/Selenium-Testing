var name = 'selenium'
var password = 'abcd1234'
var password2 = 'abcd12345'
var shortpassword = 'abc'
var privatekey = 'D3AE97B58C1E1A417E11A51232A8FCEDA2137405CC6AEDFDB21F2B088A4F44E0'
var privatekey1 = 'D3AE97B58C1E1A417E11A51232A8FCEDA2137405CC6AEDFDB21F2B088A4F44E'
var privatekey2 = 'D3AE97B58C1E1A417E11A51232A8FCEDA2137405CC6AEDFDB21F2B088A4F44E0000'

module.exports = {
    "Create-wallet_test": (browser) => {
        var create = browser.page.Createwallet();
        create
            .navigate()
            .navigate_createpkwallet(browser.launch_url)
            //.emptyinput_pkwallet()
            //.create_pkwallet(browser.launch_url, privatekey, name, password)
            //.different_password_pk(privatekey, name, password, password2)
            //.password_length_pk(privatekey, name, shortpassword)
            //.eye_icon_pk()
            //.invalid_privatekey(privatekey1, privatekey2)
            //.emptyinput_wallet()
            //.different_password(name, password, password2)
            //.password_length(name, shortpassword)
            .create_pkwallet(browser.launch_url, privatekey, name, password)
            .existing_name_pk(privatekey, name, password)
            //.eye_icon()   
    }
}