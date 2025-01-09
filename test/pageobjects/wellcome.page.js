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
    tap_login () {
        return super.tap_primary()
    }
    tap_guest () {
        return super.tap_secondary()
    }
}
module.exports = new WellcomePage();
