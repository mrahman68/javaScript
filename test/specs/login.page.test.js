const LoginPage = require('../pageobjects/login.page');
const SecurePage=require('../pageobjects/secure.page')



describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.invokeLogPage();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        browser.pause(5000);
    });
    it('should logout successfully', () => {
        LoginPage.logout();
        expect(SecurePage.btnLogin).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged out of the secure area!');
        browser.pause(5000);
    });
});


