const { $ } = require('@wdio/globals')
const Page = require('./page');
class EventsPage extends Page {
    get screenUnicObject () {
        switch (browser.capabilities.platformName) {
            case "Android":
            case "android":
                return $('//android.widget.TextView[@text="Event list"]')
            case "iOS":
            case "ios":
                return $('~Listado de eventos')
        }

    }

}
module.exports = new EventsPage();
