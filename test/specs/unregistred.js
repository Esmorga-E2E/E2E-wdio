const { expect } = require('@wdio/globals')
const WellcomePage = require('../pageobjects/wellcome.page')
const EventsPage = require('../pageobjects/events.page')

describe('Test', () => {
    it('Run app Test', async () => {
        await WellcomePage.open()
        await expect(WellcomePage.screenUnicObject).toBeDisplayed()
   })
   it('Reach Event Screen', async () => {
    await WellcomePage.tap_guest()
    await expect(EventsPage.screenUnicObject).toBeDisplayed()
})
})

