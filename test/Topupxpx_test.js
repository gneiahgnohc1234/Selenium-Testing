var name = "Selenium"
var password = "abcd1234"
var privatekey = "449198BF93D383DD7F9769DD0ED212B8F28D4A5F2CFD3B282685C3707356DA0C"

module.exports = {

    "Topupxpx_test": function (browser) {

        var xpx = browser.page.Topupxpx()
        var create = browser.page.Createwallet()
        var signin = browser.page.Signin()
        // var asset = browser.page.Assets()
        
        // change to testnet 1
        xpx 
            .navigate()
            .change_network()

        // create wallet
        create
            .navigate_createnewwallet(browser.launch_url)
            .create_wallet(browser.launch_url, name, password)

        // sign in
        signin
            .signin_dashboard(browser.launch_url, password)

        xpx
            .copy_address()
            .top_up()


        // switch to new tab
        browser.windowHandles(function (result) {
            // 0 == current main window, 1 == new tab
            var handle = result.value[1];
            browser.switchWindow(handle);

        });

        // enter wallet address
        xpx
            .input_address()
        
        // paste previously copied wallet address
        browser.sendKeys('xpath', "//input[@id='form-name']", browser.Keys.CONTROL + "v")
        
        // click send xpx
        xpx
            .send_xpx()

        // close sirius faucet tab
        browser.closeWindow(); 
        
        // switch back to main window
        browser.windowHandles(function (result) {
            // 0 == current main window, 1 == new tab
            var handle = result.value[0];
            browser.switchWindow(handle);
        });

        // wait for transaction
        xpx
            .waitfor_xpx()
            .copy_privatekey(password)
        

        // asset
        //     .navigation_assets(browser.launch_url)

    },


  
}