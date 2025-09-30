import { test, expect } from '@playwright/test';
import { MenuPage } from './pom/menuPage';
import { ProductPage } from './pom/productPage';
import { loadCookies } from './utils/cookie-helper';
import * as allure from "allure-js-commons";

import AxeBuilder from '@axe-core/playwright'; // 1

test.describe('Accessibility Tests', () => {

    test.beforeEach(async ({ page, browserName }) => {
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
    });

    test('Check Accessibility on Menu Page', async ({ page }) => {
        await allure.displayName("Menu Page Accessibility Test");
        await allure.tags("Web interface", "Menu", "Accessibility");
        await allure.severity("normal");

        const menuPage = new MenuPage(page);
        await menuPage.goToMenu();

        // Check accessibility using Playwright's axe package
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('Check Accessibility on a Product Page', async ({ page }) => {
        await allure.displayName("Product Page Accessibility Test");
        await allure.tags("Web interface", "Product", "Accessibility");
        await allure.severity("normal");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);
        await menuPage.goToMenu();
        await menuPage.BaconBreakfastRoll.click();
        await expect(page).toHaveURL(/\/product\/bacon-breakfast-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });

        // Check accessibility using Playwright's axe package
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
    }); 
        
});