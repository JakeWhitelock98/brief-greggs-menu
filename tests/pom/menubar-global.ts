import { type Locator, type Page } from '@playwright/test';

export class MenubarGlobal {
    readonly page: Page;

// Menu Bar Items
    readonly menuBar: Locator;
    readonly menuItemMenuandAllergens: Locator;
    readonly menuItemFindAShop: Locator;
    readonly menuItemWaysToOrder: Locator;
    readonly menuItemGiftCards: Locator;
    readonly menuItemGreggsApp: Locator;
    readonly manuItemDoingGood: Locator;
    readonly menuItemNews: Locator;

// Sub Menu Items - Menu & Allergens
    readonly subMenuItemBreakfastImage: Locator;
    readonly subMenuItemBreakfast: Locator;
    readonly subMenuIOtemSavoryAndBakesImage: Locator;
    readonly subMenuItemSavoryAndBakes: Locator;
    readonly subMenuItemDrinksAndSnacksImage: Locator;
    readonly subMenuItemDrinksAndSnacks: Locator;
    readonly subMenuItemSandwichesAndSaladsImage: Locator;
    readonly subMenuItemSandwichesAndSalads: Locator;
    readonly subMenuItemSweetTreatsImage: Locator;
    readonly subMenuItemSweetTreats: Locator;
    readonly subMenuItemHotFoodImage: Locator;
    readonly subMenuItemHotFood: Locator;
    readonly subMenuItemViewAllProducts: Locator;
    readonly subMenuItemAllergensAndNutritionInfo: Locator;

// Sub Menu Items - Gift Cards
    readonly subMenuItemGiftCards: Locator;
    readonly subMenuItemCheckGiftCardBalance: Locator;

    constructor(page: Page) {
        this.page = page;

        // Menu Bar Items
        this.menuBar = page.locator('nav[aria-label="Primary"]');
        this.menuItemMenuandAllergens = page.getByRole('link', { name: 'Menu & Allergens' });
        this.menuItemFindAShop = page.getByRole('link', { name: 'Find a shop' });
        this.menuItemWaysToOrder = page.getByRole('link', { name: 'Ways to order' });
        this.menuItemGiftCards = page.getByRole('link', { name: 'Gift cards' });
        this.menuItemGreggsApp = page.getByRole('link', { name: 'Greggs app' });
        this.manuItemDoingGood = page.getByRole('link', { name: 'Doing good' });
        this.menuItemNews = page.getByRole('link', { name: 'News' });

        // Sub Menu Items - Menu & Allergens
        this.subMenuItemBreakfastImage = page.locator('img[alt="Breakfast"]');
        this.subMenuItemBreakfast = page.getByRole('link', { name: 'Breakfast' });
        this.subMenuIOtemSavoryAndBakesImage = page.locator('img[alt="Savoury & Bakes"]');
        this.subMenuItemSavoryAndBakes = page.getByRole('link', { name: 'Savoury & Bakes' });
        this.subMenuItemDrinksAndSnacksImage = page.locator('img[alt="Drinks & Snacks"]');
        this.subMenuItemDrinksAndSnacks = page.getByRole('link', { name: 'Drinks & Snacks' });
        this.subMenuItemSandwichesAndSaladsImage = page.locator('img[alt="Sandwiches & Salads"]');
        this.subMenuItemSandwichesAndSalads = page.getByRole('link', { name: 'Sandwiches & Salads' });
        this.subMenuItemSweetTreatsImage = page.locator('img[alt="Sweet Treats"]');
        this.subMenuItemSweetTreats = page.getByRole('link', { name: 'Sweet Treats' });
        this.subMenuItemHotFoodImage = page.locator('img[alt="Hot Food"]');
        this.subMenuItemHotFood = page.getByRole('link', { name: 'Hot Food' });
        this.subMenuItemViewAllProducts = page.getByRole('link', { name: 'View all products' });
        this.subMenuItemAllergensAndNutritionInfo = page.getByRole('link', { name: 'Allergens & Nutrition Info' });

        // Sub Menu Items - Gift Cards
        this.subMenuItemGiftCards = page.getByRole('link', { name: 'Gift cards' });
        this.subMenuItemCheckGiftCardBalance = page.getByRole('link', { name: 'Check gift card balance' });
    }  

    async navigate() {
        // Uses baseURL from playwright.config.ts 'https://www.greggs.com'
        await this.page.goto('/');
    }

}

