var name = "Selenium"
var password = "abcd1234"
var password2 = 'abcd12345'


module.exports = {

    "Account-Details_test": function (browser) {

        var create = browser.page.Createwallet();
        var signin = browser.page.Signin();
        var account = browser.page.Accountdetails();

        // create wallet
        create
            .navigate()
            .navigate_createnewwallet(browser.launch_url)
            .create_wallet(browser.launch_url, name, password)

        // sign in
        signin
            .signin_dashboard(browser.launch_url, password)

        // account details
        account
            .navigate_accountdetails(browser.launch_url)
            // .empty_input()
            // .edit_accountname(name)
            // .existing_name(name)
            .show_privatekey(password, password2)

    }
}