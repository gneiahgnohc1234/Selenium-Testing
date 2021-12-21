var name = "Selenium"
var password = "abcd1234"
var password2 = "abcd12345"


module.exports = {

    "Create-account_test": function (browser) {

        var create = browser.page.Createwallet();
        var signin = browser.page.Signin();
        var account = browser.page.Createaccount();

        // create wallet
        create
            .navigate()
            .navigate_createnewwallet(browser.launch_url)
            .create_wallet(browser.launch_url, name, password)

        // sign in
        signin
            .signin_dashboard(browser.launch_url, password)

        //create new account
        account
            .navigate_createaccount(browser.launch_url)
            .navigate_createnewaccount(browser.launch_url)
            .empty_inputaccount()
            //.wrong_walletpassword(name, password2)
            //.eye_icon()
            .create_account(name, password)
            .existing_name(name, password)
    }


}