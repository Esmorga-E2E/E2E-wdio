const { $ } = require('@wdio/globals')
const Page = require('./page');
class WellcomePage extends Page {
    get screenUnicObject () {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return $('//android.widget.ImageView[@content-desc="App logo"]')
            case "iOS":
            case "ios":
                return $('//XCUIElementTypeImage[@name="SplashView.welcomeScreen"]')
        }

    }
}
module.exports = new WellcomePage();
