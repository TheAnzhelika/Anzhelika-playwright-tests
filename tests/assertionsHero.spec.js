import { test, expect } from '@playwright/test';

test.describe('Work with different assertions', () => {

	test('Verify toBeChecked assertion', async ({ page }) => {
		await page.goto('/checkboxes');

		await page.getByRole('checkbox').nth(0).check();
		await page.getByRole('checkbox').nth(1).uncheck();

		await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
		await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();
	})

	test('Verify toBeEnabled assertion', async ({ page }) => {
		await page.goto('/');

		const abtest = page.locator('li:has-text("A/B Testing")');
		const add = page.locator('li:has-text("Add/Remove Elements")');

		await expect(abtest).toBeEnabled();
		await expect(add).not.toBeDisabled();
	})

	test('Verify toEqual assertion', async ({ page }) => {
		await page.goto('/floating_menu');

		const EXPECTED_LINKS = [
			'Home',
			'News',
			'Contact',
			'About'
		];
		const navLinks = page.locator('#menu a');
		const linkCount = await navLinks.count();

		expect(await navLinks.allTextContents()).toEqual(EXPECTED_LINKS);
		expect(linkCount).toBe(4);
	})
})
