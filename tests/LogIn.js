let pageO = {}
module.exports = {
    before: browser => {
        pageO = browser.page.pageO()
        pageO.navigate()
    },
    after: browser => {
        browser.end()
    },
    'LogIn': browser => {
        pageO
        .click('@LoginTab')  
        .setValue('@EmailPlaceholder', 'vit1mode@gmail.com') 
        .setValue('@PasswordPlaceholder', '123456a')
        .click('@LogInButton') 
        browser.pause(7800)
    },
    'Confirm LogIn': browser => {    
       pageO
        // client.waitForElementVisible('@CardsTitle',3000)        
        browser.assert.urlContains('https://cards.devclock.com/')
        browser.pause(9000)
    },
}         