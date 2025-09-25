import { test, expect } from '@playwright/test';
import { MenubarGlobal } from './pom/menubar-global';
import { loadCookies } from './utils/cookie-helper';
import * as allure from "allure-js-commons";

test.describe('Menu Bar Item Visibility', () => {

    test.beforeEach(async ({ page, browserName }) => {
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await page.goto('/');
    });

    test('Verify Menu Bar Items are visible', async ({ page }) => {
        const menubarGlobal = new MenubarGlobal(page);

        // Verify Menu Bar Items are visible
        await expect(menubarGlobal.menuItemMenuandAllergens).toBeVisible();
        await expect(menubarGlobal.menuItemFindAShop).toBeVisible();
        await expect(menubarGlobal.menuItemWaysToOrder).toBeVisible();
        await expect(menubarGlobal.menuItemGiftCards).toBeVisible();
        await expect(menubarGlobal.menuItemGreggsApp).toBeVisible();
        await expect(menubarGlobal.manuItemDoingGood).toBeVisible();
        await expect(menubarGlobal.menuItemNews).toBeVisible();
    });

    test('Verify Menu & Allergens Sub Menu Items are visible', async ({ page }) => {
        const menubarGlobal = new MenubarGlobal(page);

        // Click on Menu & Allergens to reveal sub menu
        await menubarGlobal.menuItemMenuandAllergens.click();
        // Verify Sub Menu Items are visible
        await expect(menubarGlobal.subMenuItemBreakfastImage).toBeVisible();
        await expect(menubarGlobal.subMenuItemBreakfast).toBeVisible();
        await expect(menubarGlobal.subMenuIOtemSavoryAndBakesImage).toBeVisible();
        await expect(menubarGlobal.subMenuItemSavoryAndBakes).toBeVisible();
        await expect(menubarGlobal.subMenuItemDrinksAndSnacksImage).toBeVisible();
        await expect(menubarGlobal.subMenuItemDrinksAndSnacks).toBeVisible();
        await expect(menubarGlobal.subMenuItemSandwichesAndSaladsImage).toBeVisible();
        await expect(menubarGlobal.subMenuItemSandwichesAndSalads).toBeVisible();
        await expect(menubarGlobal.subMenuItemSweetTreatsImage).toBeVisible();
        await expect(menubarGlobal.subMenuItemSweetTreats).toBeVisible();
        await expect(menubarGlobal.subMenuItemHotFoodImage).toBeVisible();
        await expect(menubarGlobal.subMenuItemHotFood).toBeVisible();
        await expect(menubarGlobal.subMenuItemViewAllProducts).toBeVisible();
        await expect(menubarGlobal.subMenuItemAllergensAndNutritionInfo).toBeVisible();
    });

    test('Verify Gift Cards Sub Menu Items are visible', async ({ page }) => {
        const menubarGlobal = new MenubarGlobal(page);

        // Click on Gift Cards to reveal sub menu
        await menubarGlobal.menuItemGiftCards.click();
        // Verify Sub Menu Items are visible
        await expect(menubarGlobal.subMenuItemGiftCards).toBeVisible();
        await expect(menubarGlobal.subMenuItemCheckGiftCardBalance).toBeVisible();
    });

});

test.describe('Menu Bar Item Navigation', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Verify Menu & Allergens - Breakfast navigates to correct page', async ({ page }) => {
        await allure.displayName("Menu Bar Item Navigation");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");

        const menubarGlobal = new MenubarGlobal(page);

        // Click on Menu & Allergens
        await menubarGlobal.menuItemMenuandAllergens.click();
        // Click on Breakfast
        await menubarGlobal.subMenuItemBreakfast.click();

        // Verify navigation to Breakfast page
        await expect(page).toHaveURL(/.*\/menu?category=breakfast/);
        await expect(page.getByRole('heading', { name: 'Breakfast' })).toBeVisible();
    });

    test('Verify Menu & Allergens - Savoury & Bakes navigates to correct page', async ({ page }) => {
        await allure.displayName("Menu Bar Item Navigation");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");

        const menubarGlobal = new MenubarGlobal(page);

        // Click on Menu & Allergens
        await menubarGlobal.menuItemMenuandAllergens.click();
        // Click on Savoury & Bakes
        await menubarGlobal.subMenuItemSavoryAndBakes.click();

        // Verify navigation to Savoury & Bakes page
        await expect(page).toHaveURL(/.*\/menu?category=savoury-bakes/);
        await expect(page.getByRole('heading', { name: 'Savoury & Bakes' })).toBeVisible();
    });

    test('Verify Menu & Allergens - Drinks & Snacks navigates to correct page', async ({ page }) => {
        await allure.displayName("Menu Bar Item Navigation");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");
        
        const menubarGlobal = new MenubarGlobal(page);

        // Click on Menu & Allergens
        await menubarGlobal.menuItemMenuandAllergens.click();
        // Click on Drinks & Snacks
        await menubarGlobal.subMenuItemDrinksAndSnacks.click();

        // Verify navigation to Drinks & Snacks page
        await expect(page).toHaveURL(/.*\/menu?category=drinks-snacks/);
        await expect(page.getByRole('heading', { name: 'Drinks & Snacks' })).toBeVisible();
    });

    test('Verify Menu & Allergens - Sandwiches & Salads navigates to correct page', async ({ page }) => {
        await allure.displayName("Menu Bar Item Navigation");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");
        
        const menubarGlobal = new MenubarGlobal(page);

        // Click on Menu & Allergens
        await menubarGlobal.menuItemMenuandAllergens.click();
        // Click on Sandwiches & Salads
        await menubarGlobal.subMenuItemSandwichesAndSalads.click();

        // Verify navigation to Sandwiches & Salads page
        await expect(page).toHaveURL(/.*\/menu?category=sandwiches-salads/);
        await expect(page.getByRole('heading', { name: 'Sandwiches & Salads' })).toBeVisible();
    });

    test('Verify Menu & Allergens - Sweet Treats navigates to correct page', async ({ page }) => {
        await allure.displayName("Menu Bar Item Navigation");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");
        
        const menubarGlobal = new MenubarGlobal(page);

        // Click on Menu & Allergens
        await menubarGlobal.menuItemMenuandAllergens.click();
        // Click on Sweet Treats
        await menubarGlobal.subMenuItemSandwichesAndSalads.click();

        // Verify navigation to Sweet Treats page
        await expect(page).toHaveURL(/.*\/menu?category=sandwiches-salads/);
        await expect(page.getByRole('heading', { name: 'Sandwiches & Salads' })).toBeVisible();
    });

    test('Verify Menu & Allergens - Hot Food navigates to correct page', async ({ page }) => {
        await allure.displayName("Menu Bar Item Navigation");
        await allure.tags("Web interface", "Navigation");
        await allure.severity("critical");
        
        const menubarGlobal = new MenubarGlobal(page);

        // Click on Menu & Allergens
        await menubarGlobal.menuItemMenuandAllergens.click();
        // Click on Hot Food
        await menubarGlobal.subMenuItemHotFood.click();

        // Verify navigation to Hot Food page
        await expect(page).toHaveURL(/.*\/menu?category=hot-food/);
        await expect(page.getByRole('heading', { name: 'Hot Food' })).toBeVisible();
    });

}); // End of Menu Bar Item Navigation describe block
