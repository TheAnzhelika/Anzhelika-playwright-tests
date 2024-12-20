import { test, expect } from '@playwright/test';
import { LoginHero, LOG_IN_MESSAGES } from '../pages/loginHero.page';

test.describe('Login page', () => {
    let loginPage;

	test.beforeEach(async ({ page }) => {
		loginPage = new LoginHero(page);
		await loginPage.navigate();
	})

    test('Login with Correct Username and Correct Password', async () => {

        await loginPage.loginForm('tomsmith', 'SuperSecretPassword!');

		await expect(loginPage.flash).toContainText(LOG_IN_MESSAGES.SUCCESS);
		await expect(loginPage.area).toContainText(LOG_IN_MESSAGES.AREA_NAME);
		await expect(loginPage.subheader).toContainText(LOG_IN_MESSAGES.WELCOME);
    })

	test('Login with Correct Username and Wrong Password', async () => {

		await loginPage.loginForm('tomsmith', 'UknownPassword');

		await expect(loginPage.error).toContainText(LOG_IN_MESSAGES.ERROR_PASSWORD);
	})

	test('Login with Wrong Username and Correct Password', async () => {

		await loginPage.loginForm('someone', 'SuperSecretPassword!');

		await expect(loginPage.error).toContainText(LOG_IN_MESSAGES.ERROR_USERNAME);
	})

	test('Login with Wrong Username and Wrong Password', async () => {

		await loginPage.loginForm('wrongUser', 'wrongPassword');

		await expect(loginPage.error).toContainText(LOG_IN_MESSAGES.ERROR_USERNAME);
	})

	test('Login with empty fields', async () => {

		await loginPage.loginForm('', '');

		await expect(loginPage.error).toContainText(LOG_IN_MESSAGES.ERROR_USERNAME);
	})

})