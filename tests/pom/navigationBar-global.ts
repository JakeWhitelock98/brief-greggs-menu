import { type Locator, type Page } from '@playwright/test';

export class NavbarGlobal {
    readonly page: Page;

// Nav Bar Items
    readonly navBar: Locator;
    readonly navItemMenuAndAllergens: Locator;
    readonly navItemFindAShop: Locator;
    readonly navItemWaysToOrder: Locator;
    readonly navItemGiftCards: Locator;
    readonly navItemGreggsApp: Locator;
    readonly navItemDoingGood: Locator;
    readonly navItemNews: Locator;

// Sub Nav Items - Nav & Allergens
    readonly subNavItemBreakfastImage: Locator;
    readonly subNavItemBreakfast: Locator;
    readonly subNavIOtemSavoryAndBakesImage: Locator;
    readonly subNavItemSavoryAndBakes: Locator;
    readonly subNavItemDrinksAndSnacksImage: Locator;
    readonly subNavItemDrinksAndSnacks: Locator;
    readonly subNavItemSandwichesAndSaladsImage: Locator;
    readonly subNavItemSandwichesAndSalads: Locator;
    readonly subNavItemSweetTreatsImage: Locator;
    readonly subNavItemSweetTreats: Locator;
    readonly subNavItemHotFoodImage: Locator;
    readonly subNavItemHotFood: Locator;
    readonly subNavItemViewAllProducts: Locator;
    readonly subNavItemAllergensAndNutritionInfo: Locator;

// Sub Nav Items - Gift Cards
    readonly subNavItemGiftCards: Locator;
    readonly subNavItemCheckGiftCardBalance: Locator;

    constructor(page: Page) {
        this.page = page;

        // Nav Bar Items
        this.navBar = page.locator('nav[aria-label="Primary"]');
        this.navItemMenuAndAllergens = page.getByRole('button', { name: 'Nav & allergens' });
        this.navItemFindAShop = page.getByRole('link', { name: 'Find a shop' });
        this.navItemWaysToOrder = page.getByRole('link', { name: 'Ways to order' });
        this.navItemGiftCards = page.getByRole('button', { name: 'Gift cards' });
        this.navItemGreggsApp = page.getByRole('link', { name: 'Greggs app' });
        this.navItemDoingGood = page.getByRole('link', { name: 'Doing good' });
        this.navItemNews = page.getByRole('link', { name: 'News' });

        // Sub Nav Items - Nav & Allergens
        this.subNavItemBreakfastImage = page.locator('img[alt="A bacon roll with ketchup"]');
        this.subNavItemBreakfast = page.getByRole('link', { name: 'A bacon roll with ketchup' }) //Breakfast
        this.subNavIOtemSavoryAndBakesImage = page.locator('img[alt="A Greggs bake"]');
        this.subNavItemSavoryAndBakes = page.getByRole('link', { name: 'A Greggs bake' }) //Savory & Bakes
        this.subNavItemDrinksAndSnacksImage = page.locator('img[alt="A cup of freshly ground Greggs coffee"]');
        this.subNavItemDrinksAndSnacks = page.getByRole('link', { name: 'A cup of freshly ground Greggs coffee' }) //Drinks & Snacks
        this.subNavItemSandwichesAndSaladsImage = page.locator('img[alt="A chicken salad sandwich"]');
        this.subNavItemSandwichesAndSalads = page.getByRole('link', { name: 'A chicken salad sandwich' }); //Sandwiches & Salads
        this.subNavItemSweetTreatsImage = page.locator('img[alt="A sugar strand doughnut"]');
        this.subNavItemSweetTreats = page.getByRole('link', { name: 'A sugar strand doughnut' }); //Sweet Treats
        this.subNavItemHotFoodImage = page.locator('img[alt="A box of Greggs BBQ chicken bites"]');
        this.subNavItemHotFood = page.getByRole('link', { name: 'A box of Greggs BBQ chicken bites' }); //Hot Food
        this.subNavItemViewAllProducts = page.getByRole('link', { name: 'View all products' });
        this.subNavItemAllergensAndNutritionInfo = page.getByRole('link', { name: 'Allergens & Nutrition' });

        // Sub Nav Items - Gift Cards
        this.subNavItemGiftCards = page.getByRole('link', { name: 'Gift cards' });
        this.subNavItemCheckGiftCardBalance = page.getByRole('link', { name: 'Check gift card balance', exact: true })

    }  

}

