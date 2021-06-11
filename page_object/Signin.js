const elements = {
    signin_button:'.w-full',
    wallet_dropdown: '.selectPlugin > div:nth-child(1) > div:nth-child(1)',
    remove_wallet:'.multiselect-clear',
    emptywallet_validation: '.error',
    emptypassword_validation:'.error-password',
    select_wallet: '.selectPlugin > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)',
    inputpassword: '.text-placeholder',
    signin_title: '.default-title',
    invalid_password:'.error',
    signin_button2: 'button.default-btn:nth-child(2)'
  };
  const commands = [{
    click_headercomponents(browser) {
      return this
    },
    click_homecomponents(browser) {
      return this
       
    }
  
  }];
  module.exports = {
    elements: elements,
    commands: commands,
    url: function () {
      return '${this.api.launchUrl}'
    }
  
  }