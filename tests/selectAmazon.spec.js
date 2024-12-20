import { test, expect } from '@playwright/test';

test.describe('Added to cart message using different Selectors', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.amazon.com/Retractable-Medium-Uni-Ball-Nursing-Business/dp/B000FDR47E/ref=sr_1_2_sspa?c=ts&dib=eyJ2IjoiMSJ9.YxFRvqWqM_cLIEZDtYFSWdeHApTEHdihCkRjFfaK2W7fTLO1cV58q3f21Cz-5uEXvjmB4kDQ5yrR3JYx3jh71WgX2dmH4WtrqFafW61GIUH9IMB5uV1_btzNcq8najZ0pyfOgqQfU2Udxpt_eiWWu-CbVxrxsEXpxEHI1ci7VnBwHWVWbIRXheAtN2CognG8s2yFOGgnQOm2KgicAh31o6u95zRvAuLAqJ4K_JHCtY6t3UctuiwqUYVd8_JNpv2rtMaCVG6OUalaTV3GxXeLa8RZzHcV5xcx5gsGu6uFoMw.Gk_0p7f2xCJgqzoI9NGKIWnHrWeq1DuumF8NNHSFegM&dib_tag=se&keywords=Pens%2B%26%2BPen%2BRefills&qid=1717083548&s=office-products&sr=1-2-spons&ts_id=1069820&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
    })

    test('Selecting by CSS Selectors', async ({ page }) => {
        const headingCart = page.locator('h1:has-text("Added to cart")');

        await page.locator('input#add-to-cart-button.a-button-input').click(); // without const
        await expect(headingCart).toBeVisible(); // with const
    })

    test('Selecting by Playwright Locators', async ({ page }) => {
        await page.getByRole('button', { name: 'Add to Cart', exact: true }).click();
        await expect(page.getByRole('heading', { name: 'Added to cart' })).toBeVisible();
    })
})
