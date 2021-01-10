const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
    get btnLogin () { return $('#login > button > i') }
  
}

module.exports = new SecurePage();

