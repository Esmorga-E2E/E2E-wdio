const { expect } = require('@wdio/globals')
const WellcomePage = require('../pageobjects/wellcome.page')
const LoginPage = require('../pageobjects/login.page')

describe('Test Login', () => {
    it('Reach Wellcome Screen', async () => {
        await WellcomePage.open()
        await expect(WellcomePage.screenUnicObject).toBeDisplayed()
    })
    it('Reach Login Screen', async () => {
        await WellcomePage.tap_login()
        await expect(LoginPage.screenUnicObject).toBeDisplayed()
    })
})


