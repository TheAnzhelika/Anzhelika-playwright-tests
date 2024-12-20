const LOG_IN_MESSAGES = {
    SUCCESS: 'You logged into a secure area!',
    WELCOME: 'Welcome to the Secure Area. When you are done click logout below.',
    AREA_NAME: 'Secure Area',
    ERROR_PASSWORD: 'Your password is invalid!',
    ERROR_USERNAME: 'Your username is invalid!'
};

class LoginHero {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginBtn = page.locator('button.radius');

        this.flash = page.locator('#flash');
        this.area = page.locator('h2');
        this.subheader = page.locator('h4.subheader');

        this.error = page.locator('#flash.flash.error');
    }

    async navigate() {
        await this.page.goto('/login');
    }

    async loginForm(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
    
}

export { 
    LoginHero, 
    LOG_IN_MESSAGES 
}