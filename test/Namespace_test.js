var name = "Selenium"
var shortname = "s"
var namespace_input = "sirius"
var password = "abcd12345678"
var privatekey1 = "449198BF93D383DD7F9769DD0ED212B8F28D4A5F2CFD3B282685C3707356DA0C" // has namespace in account
var privatekey2 = "AD947A8674BBB115DBC7C33351F808D3ED4C8F2DCBFAFA8C68861B3124CA4E26" // has namespace in account
var privatekey3 = "D1D60FD83033CB99886A31AEBF92BF82AB283DC2AFD65817B957AB13E6B3D3E8" // for testing, got error, namespace owner conflict
var privatekey4 = "1C77F6CA8DD0865D9B5141B2745C5D09D0EB7FFFBA2DE4D075523DE8F5AAA0FC"
var privatekey = "" // brand new account

module.exports = {

    "Namespace_test": function (browser) {

        var create = browser.page.Createwallet()
        var signin = browser.page.Signin()
        var namespace = browser.page.Namespace()
        var network = browser.page.Topupxpx()

        // change to testnet 1
        network 
            .navigate()
            .change_network()

        // create wallet
        create
            .navigate_createpkwallet(browser.launch_url)
            .create_pkwallet(browser.launch_url, privatekey4, name, password)

        // sign in
        signin
            .signin_dashboard(browser.launch_url, password)
        
        // namespace
        namespace
            .navigate_namespace(browser.launch_url)
            .invalid_name(shortname)
            .empty_password(namespace_input)
            .create_namespace(namespace_input, password)

    }

}