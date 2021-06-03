module.exports = {
  Hello: function (browser) {
    browser.
    url("http://localhost:8080/");
    pause(2000);
    click("#app > div > div > div > div > div > div.inline-block.mt-5 > div > div:nth-child(3) > a");
    pause(2000);
    click("#app > div > div > div > div > div > div > div:nth-child(1) > a");
    pause(2000);
    end();
    // browser.setValue("#app > div > div > div > div > div > form > div > div > div:nth-child(2) > div.text-outline.bg-white.border-2.border-red-primary > input", "testwallet")
    
    // browser.setValue("#app > div > div > div > div > div > form > div > div > div:nth-child(2) > div.text-outline.bg-white.border-2.border-red-primary > input", "11111111")

    // browser.setValue("#app > div > div > div > div > div > form > div > div > div.grid.xs\:grid-cols-1.md\:grid-cols-2 > div.ml-1 > div.text-outline.bg-white.border-2.border-red-primary > input", "11111111")



  },
};
