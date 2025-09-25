import { type Locator, type Page } from '@playwright/test';

export class NavbarGlobal {
    readonly page: Page;

    // General Menu Page Elements
    readonly bannerTitle: Locator;
    readonly bannerDescription: Locator;
    readonly searchBox: Locator;
    readonly filterbutton: Locator;

    //Filter modal general elements
    readonly filterModal: Locator;
    readonly filterModalTitle: Locator
    readonly filterModalCloseButton: Locator;
    readonly clearAllFiltersButton: Locator;
    readonly applyFiltersButton: Locator;
    readonly backButton: Locator;

    //Calories Filter Slider
    readonly caloriesFilterTitle: Locator;
    readonly caloriesSlider: Locator;

    //Allergens Filter Checkboxes
    readonly allergensFilterTitle: Locator;
    readonly allergensDescription: Locator;
    readonly noSoyaCheckbox: Locator;
    readonly noWheatCheckbox: Locator;
    readonly noSulphitesCheckbox: Locator;
    readonly noEggsCheckbox: Locator
    readonly noMilkCheckbox: Locator;
    readonly noBarleyCheckbox: Locator;
    readonly noOatsCheckbox: Locator;
    readonly noMustardCheckbox: Locator;
    readonly noCeleryCheckbox: Locator;
    readonly noFishCheckbox: Locator;

    //Category Filter Checkboxes
    readonly breakfastCategoryCheckbox: Locator;
    readonly savoryAndBakesCategoryCheckbox: Locator;
    readonly drinksAndSnacksCategoryCheckbox: Locator;
    readonly sandwichesAndSaladsCategoryCheckbox: Locator;
    readonly sweetTreatsCategoryCheckbox: Locator;
    readonly hotFoodCategoryCheckbox: Locator;

    constructor(page: Page) {
        this.page = page;
        // General Menu Page Elements
        this.bannerTitle = page.getByText('OUR MENU');
        this.bannerDescription = page.getByText('Find your yummy');
        this.searchBox = page.getByRole('searchbox', { name: 'Search for a product' });
        this.filterbutton = page.locator('[data-test="filterButton"]');

        //Filter modal general elements
        this.filterModal = page.getByRole('dialog', { name: 'Filters' });
        this.filterModalTitle = page.getByRole('heading', { name: 'Filters' });
        this.filterModalCloseButton = page.getByRole('button').filter({ hasText: /^$/ });
        this.clearAllFiltersButton = page.getByRole('button', { name: 'Clear all' });
        this.applyFiltersButton = page.getByRole('button', { name: 'Apply filters' });
        this.backButton = page.getByRole('button', { name: 'Back' });

        //Calories Filter Slider
        this.caloriesFilterTitle = page.getByRole('heading', { name: 'Calories' });
        this.caloriesSlider = page.getByRole('slider');

        //Allergens Filter Checkboxes
        this.allergensFilterTitle = page.getByRole('heading', { name: 'Allergens' });
        this.allergensDescription = page.getByText('We’re proud to freshly');
        this.noSoyaCheckbox = page.getByRole('checkbox', { name: 'No Soya' });
        this.noWheatCheckbox = page.getByRole('checkbox', { name: 'No Wheat' });
        this.noSulphitesCheckbox = page.getByRole('checkbox', { name: 'No Sulphites' });
        this.noEggsCheckbox = page.getByRole('checkbox', { name: 'No Eggs' });
        this.noMilkCheckbox = page.getByRole('checkbox', { name: 'No Milk' });
        this.noBarleyCheckbox = page.getByRole('checkbox', { name: 'No Barley' });
        this.noOatsCheckbox = page.getByRole('checkbox', { name: 'No Oats' });
        this.noMustardCheckbox = page.getByRole('checkbox', { name: 'No Mustard' });
        this.noCeleryCheckbox = page.getByRole('checkbox', { name: 'No Celery' });
        this.noFishCheckbox = page.getByRole('checkbox', { name: 'No Fish' });

        //Category Filter Checkboxes
        this.breakfastCategoryCheckbox = page.getByRole('checkbox', { name: 'Breakfast' });
        this.savoryAndBakesCategoryCheckbox = page.getByRole('checkbox', { name: 'Savoury & Bakes' });
        this.drinksAndSnacksCategoryCheckbox = page.getByRole('checkbox', { name: 'Drinks & Snacks' });
        this.sandwichesAndSaladsCategoryCheckbox = page.getByRole('checkbox', { name: 'Sandwiches & Salads' });
        this.sweetTreatsCategoryCheckbox = page.getByRole('checkbox', { name: 'Sweet Treats' });
        this.hotFoodCategoryCheckbox = page.getByRole('checkbox', { name: 'Hot Food' });
    }  
}
