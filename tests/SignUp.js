let pageO = {}
module.exports = {
    before: browser => {
        pageO = browser.page.pageO()
        pageO.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Sign Up': browser => {
        pageO
            .click('@SignUpTab')
            .setValue('@EmailPlaceholder', 'vit2mode@google.com') // For new test need new email.
            .setValue('@PasswordPlaceholder', '123456a')
            .click('@SignUpButton')
            browser.assert.urlContains('https://cards.devclock.com/login');
            browser.pause(7000)

    }
}


