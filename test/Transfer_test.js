var name = "Selenium"
var password = "abcd1234"
// var privatekey = "449198BF93D383DD7F9769DD0ED212B8F28D4A5F2CFD3B282685C3707356DA0C"
var privatekey = "0ACDDBF848D081613E665144FF48181EBE4E009D27F33C53AC32180D73A6C667"
var address = "VBE2LN-QYZS2P-ODPWSO-CARZXJ-3I3RUI-IK5PX5-PMO"
var status = "INVALID"

module.exports = {

    "Namespace_test": function (browser) {

        var create = browser.page.Createwallet()
        var signin = browser.page.Signin()
        var network = browser.page.Topupxpx()
        var transfer = browser.page.Transfer()
        var account = browser.page.Createaccount()

        // change to testnet 1
        network 
            .navigate()
            .change_network()

        // create wallet
        create
            .navigate_createpkwallet(browser.launch_url)
            .create_pkwallet(browser.launch_url, privatekey, name, password)

        // sign in
        signin
            .signin_dashboard(browser.launch_url, password)
        
        account
            .navigate_createaccount(browser.launch_url)
            .navigate_createnewaccount(browser.launch_url)
            .create_account(name, password)
        
        // transfer
        transfer
            .navigation_transfer(browser.launch_url)
            .sender_account()
            .invalid_address(address, status)
            .contact_dropdown()

    }

}