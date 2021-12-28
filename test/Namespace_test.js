var name = "Selenium"
var password = "abcd1234"


module.exports = {

    "Namespace_test": function (browser) {

        var create = browser.page.Createwallet()
        var signin = browser.page.Signin()
        var namespace = browser.page.Namespace()

        // create wallet
        create
            .navigate()
            .navigate_createnewwallet(browser.launch_url)
            .create_wallet(browser.launch_url, name, password)

        // sign in
        signin
            .signin_dashboard(browser.launch_url, password)
        
        namespace
            .navigate_namespace(browser.launch_url)

    }

}