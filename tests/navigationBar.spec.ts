import { test, expect } from '@playwright/test';
import { NavbarGlobal } from './pom/navigationBar-global';
import { loadCookies } from './utils/cookie-helper';
import * as allure from "allure-js-commons";

test.describe('Navigation Bar Item Visibility', () => {

    test.beforeEach(async ({ page, browserName }) => {
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await page.goto('/');
    });

    test('Verify Nav Bar Items are visible', async ({ page }) => {
        const navbarGlobal = new NavbarGlobal(page);

        // Verify Nav Bar Items are visible
        await expect(navbarGlobal.navItemMenuAndAllergens).toBeVisible();
    });

    test('Verify Nav & Allergens Sub Nav Items are visible', async ({ page }) => {
        const navbarGlobal = new NavbarGlobal(page);

        // Click on Nav & Allergens to reveal sub nav
        await navbarGlobal.navItemMenuAndAllergens.click();
        // Verify Sub Nav Items are visible
        await expect(navbarGlobal.subNavItemBreakfastImage).toBeVisible();
        await expect(navbarGlobal.subNavItemBreakfast).toBeVisible();
        await expect(navbarGlobal.subNavIOtemSavoryAndBakesImage).toBeVisible();
        await expect(navbarGlobal.subNavItemSavoryAndBakes).toBeVisible();
        await expect(navbarGlobal.subNavItemDrinksAndSnacksImage).toBeVisible();
        await expect(navbarGlobal.subNavItemDrinksAndSnacks).toBeVisible();
        await expect(navbarGlobal.subNavItemSandwichesAndSaladsImage).toBeVisible();
        await expect(navbarGlobal.subNavItemSandwichesAndSalads).toBeVisible();
        await expect(navbarGlobal.subNavItemSweetTreatsImage).toBeVisible();
        await expect(navbarGlobal.subNavItemSweetTreats).toBeVisible();
        await expect(navbarGlobal.subNavItemHotFoodImage).toBeVisible();
        await expect(navbarGlobal.subNavItemHotFood).toBeVisible();
        await expect(navbarGlobal.subNavItemViewAllProducts).toBeVisible();
        await expect(navbarGlobal.subNavItemAllergensAndNutritionInfo).toBeVisible();
    });

    test('Verify Gift Cards Sub Nav Items are visible', async ({ page }) => {
        const navbarGlobal = new NavbarGlobal(page);

        // Click on Gift Cards to reveal sub nav
        await navbarGlobal.navItemGiftCards.click();
        // Verify Sub Nav Items are visible
        await expect(navbarGlobal.subNavItemGiftCards).toBeVisible();
        await expect(navbarGlobal.subNavItemCheckGiftCardBalance).toBeVisible();
    });

});

test.describe('Nav Bar Item Navigation - Nav & Allergens', () => {

    test.beforeEach(async ({ page, browserName }) => {
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await page.goto('/');
    });

    test('Verify Nav & Allergens - Breakfast navigates to correct page', async ({ page }) => {
        await allure.displayName("Nav Bar Item Navigation - Nav & Allergens");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");

        const navbarGlobal = new NavbarGlobal(page);

        // Click on Nav & Allergens
        await navbarGlobal.navItemMenuAndAllergens.click();
        // Click on Breakfast
        await navbarGlobal.subNavItemBreakfast.click();

        // Verify navigation to Breakfast page
        await expect(page).toHaveURL(/.*\/nav\?category=breakfast/);
        await expect(page.getByRole('heading', { name: 'Breakfast', exact: true })).toBeVisible();
    });

    test('Verify Nav & Allergens - Savoury & Bakes navigates to correct page', async ({ page }) => {
        await allure.displayName("Nav Bar Item Navigation - Nav & Allergens");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");

        const navbarGlobal = new NavbarGlobal(page);

        // Click on Nav & Allergens
        await navbarGlobal.navItemMenuAndAllergens.click();
        // Click on Savoury & Bakes
        await navbarGlobal.subNavItemSavoryAndBakes.click();

        // Verify navigation to Savoury & Bakes page
        await expect(page).toHaveURL(/.*\/nav\?category=savouries-bakes/);
        await expect(page.getByRole('heading', { name: 'Savouries & Bakes', exact: true })).toBeVisible();
    });

    test('Verify Nav & Allergens - Drinks & Snacks navigates to correct page', async ({ page }) => {
        await allure.displayName("Nav Bar Item Navigation - Nav & Allergens");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");
        
        const navbarGlobal = new NavbarGlobal(page);

        // Click on Nav & Allergens
        await navbarGlobal.navItemMenuAndAllergens.click();
        // Click on Drinks & Snacks
        await navbarGlobal.subNavItemDrinksAndSnacks.click();

        // Verify navigation to Drinks & Snacks page
        await expect(page).toHaveURL(/.*\/nav\?category=drinks-snacks/);
        await expect(page.getByRole('heading', { name: 'Drinks & Snacks', exact: true })).toBeVisible();
    });

    test('Verify Nav & Allergens - Sandwiches & Salads navigates to correct page', async ({ page }) => {
        await allure.displayName("Nav Bar Item Navigation - Nav & Allergens");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");
        
        const navbarGlobal = new NavbarGlobal(page);

        // Click on Nav & Allergens
        await navbarGlobal.navItemMenuAndAllergens.click();
        // Click on Sandwiches & Salads
        await navbarGlobal.subNavItemSandwichesAndSalads.click();

        // Verify navigation to Sandwiches & Salads page
        await expect(page).toHaveURL(/.*\/nav\?category=sandwiches-salads/);
        await expect(page.getByRole('heading', { name: 'Sandwiches & Salads', exact: true })).toBeVisible();
    });

    test('Verify Nav & Allergens - Sweet Treats navigates to correct page', async ({ page }) => {
        await allure.displayName("Nav Bar Item Navigation - Nav & Allergens");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");
        
        const navbarGlobal = new NavbarGlobal(page);

        // Click on Nav & Allergens
        await navbarGlobal.navItemMenuAndAllergens.click();
        // Click on Sweet Treats
        await navbarGlobal.subNavItemSandwichesAndSalads.click();

        // Verify navigation to Sweet Treats page
        await expect(page).toHaveURL(/.*\/nav\?category=sandwiches-salads/);
        await expect(page.getByRole('heading', { name: 'Sandwiches & Salads', exact: true })).toBeVisible();
    });

    test('Verify Nav & Allergens - Hot Food navigates to correct page', async ({ page }) => {
        await allure.displayName("Nav Bar Item Navigation - Nav & Allergens");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");
        
        const navbarGlobal = new NavbarGlobal(page);

        // Click on Nav & Allergens
        await navbarGlobal.navItemMenuAndAllergens.click();
        // Click on Hot Food
        await navbarGlobal.subNavItemHotFood.click();

        // Verify navigation to Hot Food page
        await expect(page).toHaveURL(/.*\/nav\?category=hot-food/);
        await expect(page.getByRole('heading', { name: 'Hot Food', exact: true })).toBeVisible();
    });

    test('Verify Nav & Allergens - View All Products navigates to correct page', async ({ page }) => {
        await allure.displayName("Nav Bar Item Navigation - Nav & Allergens");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");

        const navbarGlobal = new NavbarGlobal(page);

        // Click on Nav & Allergens
        await navbarGlobal.navItemMenuAndAllergens.click();
        // Click on View All Products
        await navbarGlobal.subNavItemViewAllProducts.click();

        // Verify navigation to View All Products page
        await expect(page).toHaveURL(/.*\/nav/);
        // All is not a cateogry, it shows all products so all headers should be visible
        await expect(page.getByRole('heading', { name: 'Breakfast', exact: true })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Savouries & Bakes' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Drinks & Snacks' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Sandwiches & Salads' })).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Sweet Treats'})).toBeVisible();
        await expect(page.getByRole('heading', { name: 'Hot Food'})).toBeVisible();
    });

    test('Verify Nav & Allergens - Allergens & Nutrition navigates to correct page', async ({ page }) => {
        await allure.displayName("Nav Bar Item Navigation - Nav & Allergens");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");

        const navbarGlobal = new NavbarGlobal(page);

        // Click on Nav & Allergens
        await navbarGlobal.navItemMenuAndAllergens.click();
        // Click on View All Products
        await navbarGlobal.subNavItemAllergensAndNutritionInfo.click();

        // Verify navigation to Allergens & Nutrition page
        await expect(page).toHaveURL(/.*\/nutrition/);
        await expect(page.getByRole('link', { name: 'Our Allergen Guide' }).first()).toBeVisible();
    });

}); // End of Navigation Bar Item Navigation - Nav & Allergens