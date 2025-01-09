const { $ } = require('@wdio/globals')
const Page = require('./page');
class LoginPage extends Page {
    get screenUnicObject () {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return $('//android.widget.ImageView[@content-desc="Login header"]')
            case "iOS":
            case "ios":
                return $('//XCUIElementTypeImage[@name="login-header"]')
        }
    }
}
module.exports = new LoginPage();
