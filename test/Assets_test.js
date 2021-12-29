var name = "Selenium"
var password = "abcd1234"


module.exports = {

    "Assets_test": function (browser) {

        var network = browser.page.Assets()
        var create = browser.page.Createwallet()
        var signin = browser.page.Signin()

        
        // change to testnet 1
        network 
            .navigate()
            .change_network()

        // create wallet
        create
            .navigate_createnewwallet(browser.launch_url)
            .create_wallet(browser.launch_url, name, password)

        // sign in
        signin
            .signin_dashboard(browser.launch_url, password)

        network
            .copy_address()
            .top_up()

        // Switch to new tab
        browser.windowHandles(function (result) {
        // 0 == current main window, 1 == new tab
        var handle = result.value[1];
        browser.switchWindow(handle);

        });

        // do something
        network
            .input_address()
            
        browser.sendKeys('xpath', "//input[@id='form-name']", browser.Keys.CONTROL + "v")
        // (browser.Keys.CONTROL, "v")
        network.testing()

        // Close tab
        browser.closeWindow(); 

        
        // Switch to main window
        browser.windowHandles(function (result) {
            // 0 == current main window, 1 == new tab
            var handle = result.value[0];
            browser.switchWindow(handle);
        });

    },

    // 'Test new tab open': function (browser) {
    //     // browser.url('http://localhost:8000')
    //     //     .click('#a-href-with-target-blank')
    //     var signin = browser.page.Signin()
        

    //     // Switch to new tab
    //     browser.windowHandles(function (result) {
    //         // 0 == current main window, 1 == new tab
    //         var handle = result.value[1];
    //         browser.switchWindow(handle);
    //     });
        



        

    //     signin
    //     .signin_dashboard(browser.launch_url, password)


    // }

  
}