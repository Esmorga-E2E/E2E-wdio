let appPackage=''
let appState=''
const { browser } = require('@wdio/globals')
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open (path) {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                appPackage = 'cmm.apps.esmorga';
                appState = await browser.queryAppState(appPackage);
                if (appState !== 4) {
                  await browser.startActivity(
                    appPackage,
                    ".view.MainActivity"
                  );
                  await browser.pause(300);
                }
                break;
            case "iOS":
            case "ios":
                appPackage = 'com.mobilestudio.esmorga';
                await browser.pause(1000);
                appState = await browser.queryAppState(appPackage);
                console.log("### \n\n\t\t"+appState)
                if (appState !== 4) {
                  await browser.activateApp(
                    appPackage,
                    );
                    await browser.pause(500);
                }
                break;
        }

    }
    tap_primary () {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button').click()
                        
                case "iOS":
            case "ios":
                return $('//XCUIElementTypeButton[1]').click()
        }
    }
    tap_secondary(){
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.Button').click()
            case "iOS":
            case "ios":
                return $('//XCUIElementTypeButton[2]').click()
        }
    }
}
