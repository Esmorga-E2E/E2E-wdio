const { expect } = require('@wdio/globals')
const WellcomePage = require('../pageobjects/wellcome.page')

describe('Test', () => {
    it('Run app Test', async () => {
//        await WellcomePage.open()
        await expect(WellcomePage.screenUnicObject).toBeDisplayed()
   })
})

