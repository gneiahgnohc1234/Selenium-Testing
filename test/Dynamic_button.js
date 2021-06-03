
module.exports = {
  url : "http://localhost:8080/",

  elements:{
    create_button:{
      locateStrategy: 'xpath',
      selector: "//a[text()='Create']"
    },
    create_a:  {
      locateStrategy: 'xpath',
      selector:"//a[contains(text(),'Create')]",
    },

    clear_button:  {
      locateStrategy: 'xpath',
      selector:"//button[contains(text(),'Clear')]"
    },

  }

}
