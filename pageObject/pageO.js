module.exports = {
    url : 'https://cards.devclock.com/login',
        elements : {
            // Sign up Log In
            LoginTab : 'label[data-bind="text: strings.loginTab"]',
            SignUpTab : 'label[data-bind="text: strings.signUpTab"]',
            EmailPlaceholder : 'input[type="email"]',
            PasswordPlaceholder : 'input[type="password"]',
            LoginButton : { selector: '//button[text()="Login"]', locateStrategy: 'xpath' },
            confirmPasswordPlaceholder : 'input[placeholder="Confirm Password"]',
            SignUpButton : 'button[data-bind="click: clickSignUpWithEmail, text: strings.signUp, visible: signUpWithEmailVisible"]',
            LogInButton : 'button[data-bind="click: clickLoginWithEmail, text: strings.login, visible: loginWithEmailVisible"]',
            CardsTitle : 'label[data-bind="text: strings.title"]'
    }
}