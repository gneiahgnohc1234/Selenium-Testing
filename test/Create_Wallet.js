var localhost_path = "http://localhost:8080/";
const Dynamic_button = require("./Dynamic_button");
var create_a = "//a[text()='Create']";
var create_button = "//button[contains(text(),'Create')]";
var password_1 = "abcd1234"
var clear_button = "//button[contains(text(),'Clear')]";
module.exports = {
  Hello: function (browser) {
    browser
    .url(Dynamic_button.url)

    //Sign In
     //.click("a[text()='Sign In']")
    // .pause(2000)

    //Sign In With SirusID
    // .click("a[text()='Sign In With SirusID']")
    // .pause(2000)


  
    .useXpath()
    .click(Dynamic_button.elements.create_a.selector)
    .click(Dynamic_button.elements.create_a.selector)



  //  // .click("//a[text()='Clear']")
  
  //   //.click('//input[contains(@placeholder,"Wallet Name")]')
  //  // .getValue('//input[contains(@placeholder,"Wallet Name")]')
    

  //   // .click(clear_button)
  //   if(browser.assert.attributeEquals(create_button,"disabled","true")){
  //     browser
      .setValue('//input[contains(@placeholder,"Wallet Name")]', "Wallet Test")
      .setValue('//input[contains(@placeholder,"Enter a New Password")]', password_1)
      .setValue('//input[contains(@placeholder,"Confirm New Password")]', password_1)
      .pause(2000)

      .click(Dynamic_button.elements.clear_button.selector)
      .pause(2000)
      .end()

  //   }else{
      
  //   }
  //   // .setValue('//input[contains(@placeholder,"Wallet Name")]', "Wallet Test")
  //   // .setValue('//input[contains(@placeholder,"Enter a New Password")]', password_1)
  //   // .setValue('//input[contains(@placeholder,"Confirm New Password")]', password_1)
  //   //.useCss().click('button.default-btn:nth-child(1)')
  //   //.click(create_a)

    //browser.end()

  }
};
