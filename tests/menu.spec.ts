import { test, expect } from '@playwright/test';
import { MenuPage } from './pom/menuPage';
import { ProductPage } from './pom/productPage';
import { loadCookies } from './utils/cookie-helper';
import * as allure from "allure-js-commons";

test.describe('Menu Page Appearance', () => {

    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Menu loads correctly', async ({ page }) => {
        await allure.displayName("Menu Page Appearance");
        await allure.tags("Web interface", "Menu");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);

        // Verify Menu Page Elements are visible
        await expect(menuPage.bannerTitle).toBeVisible();
        await expect(menuPage.bannerDescription).toBeVisible();
        await expect(menuPage.searchBox).toBeVisible();
        await expect(menuPage.filterButton).toBeVisible();
        await expect(menuPage.menuCarosuel).toBeVisible();
    });
});

test.describe('Menu Page Controls', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);    
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Menu Page Search Functionality', async ({ page }) => {
        await allure.displayName("Menu Page Search Functionality");
        await allure.tags("Web interface", "Menu", "Search");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);

        // Use the search box to search for a product
        await menuPage.searchBox.fill('Toastie');
        await menuPage.searchBox.press('Enter');

        // Verify that the search results contain the searched product
        await expect(menuPage.HamAndCheeseToastieNewRecipe).toBeVisible();
        await expect(menuPage.CheeseAndCaramelisedOnionToastie).toBeVisible();
        await expect(menuPage.BBQChickenToastie).toBeVisible();
    });

    test('Verify "All" filter Button Functionality', async ({ page }) => {
        await allure.displayName('"All" Filter Button Functionality');
        await allure.tags("Web interface", "Menu", "Filter");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);

        // Click on the "All" filter button
        await menuPage.menuCarosuelAll.click();

        // Verify that products from all categories are shown
        // Testing a representative sample from each category
        
        // Breakfast items
        await expect(menuPage.BaconBreakfastRoll).toBeVisible();
        await expect(menuPage.SausageBreakfastRoll).toBeVisible();
        await expect(menuPage.AllButterCroissant).toBeVisible();
        
        // Savouries & Bakes items
        await expect(menuPage.SausageRoll).toBeVisible();
        await expect(menuPage.SteakBake).toBeVisible();
        await expect(menuPage.ChickenBake).toBeVisible();
        
        // Drinks & Snacks items
        await expect(menuPage.RegularAmericano).toBeVisible();
        await expect(menuPage.RegularLatte).toBeVisible();
        await expect(menuPage.ThaiSweetChilliCrisps).toBeVisible();
        
        // Sandwiches & Salads items
        await expect(menuPage.RoastChickenMayonnaiseBaguette).toBeVisible();
        await expect(menuPage.BLTSandwich).toBeVisible();
        await expect(menuPage.TunaPasta).toBeVisible();
        
        // Sweet Treats items
        await expect(menuPage.JamDoughnut).toBeVisible();
        await expect(menuPage.TripleChocolateCookie).toBeVisible();
        await expect(menuPage.CaramelCustardDoughnut).toBeVisible();
        
        // Hot Food items
        await expect(menuPage.SixSliceMargheritaPizzaBox).toBeVisible();
        await expect(menuPage.TomatoSoup).toBeVisible();
        await expect(menuPage.AllDayBreakfastBaguette).toBeVisible();
    });

    test('Verify "Breakfast" filter Button Functionality', async ({ page }) => {
        await allure.displayName('"Breakfast" Filter Button Functionality');
        await allure.tags("Web interface", "Menu", "Filter", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);

        // Click on the "Breakfast" filter button
        await menuPage.menuCarosuelBreakfast.click();
        await menuPage.breakfastHeader.waitFor({ state: 'visible' });

        // Verify that ALL Breakfast products are shown
        await expect(menuPage.BaconBreakfastRoll).toBeVisible();
        await expect(menuPage.SausageBreakfastRoll).toBeVisible();
        await expect(menuPage.OmeletteBreakfastRoll).toBeVisible();
        await expect(menuPage.VeganSausageBreakfastRoll).toBeVisible();
        await expect(menuPage.BaconAndOmeletteBreakfastRoll).toBeVisible();
        await expect(menuPage.BaconAndSausageBreakfastRoll).toBeVisible();
        await expect(menuPage.SausageAndOmeletteBreakfastRoll).toBeVisible();
        await expect(menuPage.BaconBreakfastBaguette).toBeVisible();
        await expect(menuPage.SausageBreakfastBaguette).toBeVisible();
        await expect(menuPage.OmeletteBreakfastBaguette).toBeVisible();
        await expect(menuPage.BaconAndOmeletteBreakfastBaguette).toBeVisible();
        await expect(menuPage.BaconAndSausageBreakfastBaguette).toBeVisible();
        await expect(menuPage.SausageAndOmeletteBreakfastBaguette).toBeVisible();
        await expect(menuPage.BaconAndCheeseWrap).toBeVisible();
        await expect(menuPage.HashBrown2Pack).toBeVisible();
        await expect(menuPage.PainAuChocolat).toBeVisible();
        await expect(menuPage.AllButterCroissant).toBeVisible();
        await expect(menuPage.SimplyCreamyPorridgeReadyToEat).toBeVisible();
        await expect(menuPage.GoldenSyrupFlavourPorridgeReadyToEat).toBeVisible();
        await expect(menuPage.AppleCinnamonFlavourPorridgeReadyToEat).toBeVisible();

        // Verify that non-Breakfast products are NOT shown
        await expect(menuPage.SausageRoll).not.toBeVisible();
        await expect(menuPage.RegularAmericano).not.toBeVisible();
        await expect(menuPage.JamDoughnut).not.toBeVisible();
        await expect(menuPage.RoastChickenMayonnaiseBaguette).not.toBeVisible();
        await expect(menuPage.SixSliceMargheritaPizzaBox).not.toBeVisible();
    });

    test('Verify "Savouries & Bakes" filter Button Functionality', async ({ page }) => {
        await allure.displayName('"Savouries & Bakes" Filter Button Functionality');
        await allure.tags("Web interface", "Menu", "Filter", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);

        // Click on the "Savouries & Bakes" filter button
        await menuPage.menuCarosuelSavoryAndBakes.click();
        await menuPage.savoryAndBakesHeader.waitFor({ state: 'visible' });

        // Verify that ALL Savouries & Bakes products are shown
        await expect(menuPage.SausageRoll).toBeVisible();
        await expect(menuPage.VeganSausageRoll).toBeVisible();
        await expect(menuPage.CheeseAndOnionBake).toBeVisible();
        await expect(menuPage.SteakBake).toBeVisible();
        await expect(menuPage.ChickenBake).toBeVisible();
        await expect(menuPage.SausageBeanAndCheeseMelt).toBeVisible();
        await expect(menuPage.VeganLatticeStekFree).toBeVisible();
        await expect(menuPage.FajitaChickenBake).toBeVisible();
        await expect(menuPage.MargheritaPizza).toBeVisible();
        await expect(menuPage.PepperoniPizza).toBeVisible();
        await expect(menuPage.SpicyChickenPizza).toBeVisible();

        // Verify that non-Savouries & Bakes products are NOT shown
        await expect(menuPage.BaconBreakfastRoll).not.toBeVisible();
        await expect(menuPage.RegularAmericano).not.toBeVisible();
        await expect(menuPage.JamDoughnut).not.toBeVisible();
        await expect(menuPage.RoastChickenMayonnaiseBaguette).not.toBeVisible();
        await expect(menuPage.SixSliceMargheritaPizzaBox).not.toBeVisible();
    });

    test('Verify "Drinks & Snacks" filter Button Functionality', async ({ page }) => {
        await allure.displayName('"Drinks & Snacks" Filter Button Functionality');
        await allure.tags("Web interface", "Menu", "Filter", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);

        // Click on the "Drinks & Snacks" filter button
        await menuPage.menuCarosuelDrinksAndSnacks.click();
        await menuPage.drinksAndSnacksHeader.waitFor({ state: 'visible' });

        // Verify that ALL Drinks & Snacks products are shown
        await expect(menuPage.ReadyToDrinkLatte).toBeVisible();
        await expect(menuPage.ReadyToDrinkCaramelLatte).toBeVisible();
        await expect(menuPage.RegularAmericano).toBeVisible();
        await expect(menuPage.LargeAmericano).toBeVisible();
        await expect(menuPage.RegularCappuccino).toBeVisible();
        await expect(menuPage.LargeCappuccino).toBeVisible();
        await expect(menuPage.RegularLatte).toBeVisible();
        await expect(menuPage.LargeLatte).toBeVisible();
        await expect(menuPage.RegularCaramelLatte).toBeVisible();
        await expect(menuPage.LargeCaramelLatte).toBeVisible();
        await expect(menuPage.RegularVanillaLatte).toBeVisible();
        await expect(menuPage.LargeVanillaLatte).toBeVisible();
        await expect(menuPage.RegularPumpkinSpiceLatteNewRecipe).toBeVisible();
        await expect(menuPage.LargePumpkinSpiceLatteNewRecipe).toBeVisible();
        await expect(menuPage.RegularCaramelMocha).toBeVisible();
        await expect(menuPage.LargeCaramelMocha).toBeVisible();
        await expect(menuPage.RegularMocha).toBeVisible();
        await expect(menuPage.LargeMocha).toBeVisible();
        await expect(menuPage.RegularWhiteCoffee).toBeVisible();
        await expect(menuPage.LargeWhiteCoffee).toBeVisible();
        await expect(menuPage.FlatWhite).toBeVisible();
        await expect(menuPage.Espresso).toBeVisible();
        await expect(menuPage.RegularHotChocolate).toBeVisible();
        await expect(menuPage.LargeHotChocolate).toBeVisible();
        await expect(menuPage.RegularCaramelHotChocolate).toBeVisible();
        await expect(menuPage.LargeCaramelHotChocolate).toBeVisible();
        await expect(menuPage.RegularTea).toBeVisible();
        await expect(menuPage.LargeTea).toBeVisible();
        await expect(menuPage.RegularGreenTea).toBeVisible();
        await expect(menuPage.RegularPeppermintTea).toBeVisible();
        await expect(menuPage.SmallOrangeJuice).toBeVisible();
        await expect(menuPage.LargeOrangeJuice).toBeVisible();
        await expect(menuPage.FairtradeAppleJuice).toBeVisible();
        await expect(menuPage.SmallStillWater).toBeVisible();
        await expect(menuPage.LargeStillWater).toBeVisible();
        await expect(menuPage.SparklingMangoAndPineapple).toBeVisible();
        await expect(menuPage.SparklingRaspberryLemonade).toBeVisible();
        await expect(menuPage.CaramelCrispyBar).toBeVisible();
        await expect(menuPage.FruityFlapjack).toBeVisible();
        await expect(menuPage.ThaiSweetChilliCrisps).toBeVisible();
        await expect(menuPage.SeaSaltAndCiderVinegarCrisps).toBeVisible();
        await expect(menuPage.MatureCheddarCheeseAndOnionCrisps).toBeVisible();
        await expect(menuPage.FreeRangeEggPot).toBeVisible();

        // Verify that non-Drinks & Snacks products are NOT shown
        await expect(menuPage.BaconBreakfastRoll).not.toBeVisible();
        await expect(menuPage.SausageRoll).not.toBeVisible();
        await expect(menuPage.JamDoughnut).not.toBeVisible();
        await expect(menuPage.RoastChickenMayonnaiseBaguette).not.toBeVisible();
        await expect(menuPage.SixSliceMargheritaPizzaBox).not.toBeVisible();
    });

    test('Verify "Sandwiches & Salads" filter Button Functionality', async ({ page }) => {
        await allure.displayName('"Sandwiches & Salads" Filter Button Functionality');
        await allure.tags("Web interface", "Menu", "Filter", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);

        // Click on the "Sandwiches & Salads" filter button
        await menuPage.menuCarosuelSandwichesAndSalads.click();
        await menuPage.sandwichesAndSaladsHeader.waitFor({ state: 'visible' });

        // Verify that ALL Sandwiches & Salads products are shown
        await expect(menuPage.RoastChickenMayonnaiseBaguette).toBeVisible();
        await expect(menuPage.HamAndCheeseBaguette).toBeVisible();
        await expect(menuPage.MatureCheddarCheeseSaladBaguette).toBeVisible();
        await expect(menuPage.SpicyChipotleChickenBaguette).toBeVisible();
        await expect(menuPage.RoastChickenAndBaconClubBaguette).toBeVisible();
        await expect(menuPage.TandooriChickenBaguette).toBeVisible();
        await expect(menuPage.TunaCrunchBaguette).toBeVisible();
        await expect(menuPage.CheeseAndOnionRoll).toBeVisible();
        await expect(menuPage.SweetAndSpicyChickenOvalBite).toBeVisible();
        await expect(menuPage.MatureCheddarCheesePloughmansOvalBite).toBeVisible();
        await expect(menuPage.RoastChickenAndHoneyMustardMayoOvalBite).toBeVisible();
        await expect(menuPage.TunaCrunchRoll).toBeVisible();
        await expect(menuPage.HoneyRoastHamAndEggSaladRoll).toBeVisible();
        await expect(menuPage.ChipotleChickenFlatbread).toBeVisible();
        await expect(menuPage.RoastChickenSaladSandwich).toBeVisible();
        await expect(menuPage.BLTSandwich).toBeVisible();
        await expect(menuPage.TunaMayonnaiseAndCucumberSandwich).toBeVisible();
        await expect(menuPage.FreeRangeEggMayoSandwich).toBeVisible();
        await expect(menuPage.TunaPasta).toBeVisible();
        await expect(menuPage.SmokyCajunRiceWithBBQChickenAndSweetcornFritters).toBeVisible();
        await expect(menuPage.SweetPotatoBhajiAndRice).toBeVisible();
        await expect(menuPage.PestoAndMozzarellaPasta).toBeVisible();
        await expect(menuPage.ChickenAndBaconPasta).toBeVisible();

        // Verify that non-Sandwiches & Salads products are NOT shown
        await expect(menuPage.BaconBreakfastRoll).not.toBeVisible();
        await expect(menuPage.SausageRoll).not.toBeVisible();
        await expect(menuPage.RegularAmericano).not.toBeVisible();
        await expect(menuPage.JamDoughnut).not.toBeVisible();
        await expect(menuPage.SixSliceMargheritaPizzaBox).not.toBeVisible();
    });

    test('Verify "Sweet Treats" filter Button Functionality', async ({ page }) => {
        await allure.displayName('"Sweet Treats" Filter Button Functionality');
        await allure.tags("Web interface", "Menu", "Filter", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);

        // Click on the "Sweet Treats" filter button
        await menuPage.menuCarosuelSweetTreats.click();
        await menuPage.sweetTreatsHeader.waitFor({ state: 'visible' });

        // Verify that ALL Sweet Treats products are shown
        await expect(menuPage.CaramelCustardDoughnut).toBeVisible();
        await expect(menuPage.GlazedRingDoughnut).toBeVisible();
        await expect(menuPage.JamDoughnut).toBeVisible();
        await expect(menuPage.PinkJammieDoughnut).toBeVisible();
        await expect(menuPage.SugarStrandDoughnut).toBeVisible();
        await expect(menuPage.TripleChocolateDoughnut).toBeVisible();
        await expect(menuPage.PumpkinSpiceDoughnutNewRecipe).toBeVisible();
        await expect(menuPage.YumYum).toBeVisible();
        await expect(menuPage.BelgianBun).toBeVisible();
        await expect(menuPage.CreamEclair).toBeVisible();
        await expect(menuPage.GingerbreadMan).toBeVisible();
        await expect(menuPage.StarBiscuit).toBeVisible();
        await expect(menuPage.JammyHeartBiscuit).toBeVisible();
        await expect(menuPage.MilkChocolateCookie).toBeVisible();
        await expect(menuPage.TripleChocolateCookie).toBeVisible();
        await expect(menuPage.WhiteChocolateCookie).toBeVisible();
        await expect(menuPage.TripleChocolateMuffin).toBeVisible();
        await expect(menuPage.ToffeeFudgeMuffin).toBeVisible();
        await expect(menuPage.NoveltyBun).toBeVisible();
        await expect(menuPage.ChocolateBrownieBar).toBeVisible();
        await expect(menuPage.CaramelShortbread4Pack).toBeVisible();
        await expect(menuPage.MelonAndGrapeFruitPot).toBeVisible();
        await expect(menuPage.FatFreeGreekStyleYoghurtWithStrawberryCompote).toBeVisible();
        await expect(menuPage.AppleAndStrawberryFruitPot).toBeVisible();

        // Verify that non-Sweet Treats products are NOT shown
        await expect(menuPage.BaconBreakfastRoll).not.toBeVisible();
        await expect(menuPage.SausageRoll).not.toBeVisible();
        await expect(menuPage.RegularAmericano).not.toBeVisible();
        await expect(menuPage.RoastChickenMayonnaiseBaguette).not.toBeVisible();
        await expect(menuPage.SixSliceMargheritaPizzaBox).not.toBeVisible();
    });

    test('Verify "Hot Food" filter Button Functionality', async ({ page }) => {
        await allure.displayName('"Hot Food" Filter Button Functionality');
        await allure.tags("Web interface", "Menu", "Filter", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);

        // Click on the "Hot Food" filter button
        await menuPage.menuCarosuelHotFood.click();
        await menuPage.hotFoodHeader.waitFor({ state: 'visible' });

        // Verify that ALL Hot Food products are shown
        await expect(menuPage.SixSliceMargheritaPizzaBox).toBeVisible();
        await expect(menuPage.SixSlicePepperoniPizzaBox).toBeVisible();
        await expect(menuPage.SixSlicePepperoniHotShotPizzaBox).toBeVisible();
        await expect(menuPage.SixSliceSpicyChickenPizzaBox).toBeVisible();
        await expect(menuPage.SixSliceSpicyVegPizzaBox).toBeVisible();
        await expect(menuPage.SixSliceBBQChickenAndBaconPizzaBox).toBeVisible();
        await expect(menuPage.SixSliceVeggieFeastPizzaBox).toBeVisible();
        await expect(menuPage.SixSliceFirecrackerChickenPizzaBox).toBeVisible();
        await expect(menuPage.FourSliceMargheritaPizzaBox).toBeVisible();
        await expect(menuPage.FourSlicePepperoniHotShotPizzaBox).toBeVisible();
        await expect(menuPage.FourSlicePepperoniPizzaBox).toBeVisible();
        await expect(menuPage.FourSliceSpicyChickenPizzaBox).toBeVisible();
        await expect(menuPage.FourSliceSpicyVegPizzaBox).toBeVisible();
        await expect(menuPage.FourSliceBBQChickenAndBaconPizzaBox).toBeVisible();
        await expect(menuPage.FourSliceVeggieFeastPizzaBox).toBeVisible();
        await expect(menuPage.FourSliceChickenSweetcornAndRedOnionPizzaBox).toBeVisible();
        await expect(menuPage.FourSliceFirecrackerChickenPizzaBox).toBeVisible();
        await expect(menuPage.TwoSliceMargheritaPizzaBox).toBeVisible();
        await expect(menuPage.TwoSlicePepperoniPizzaBox).toBeVisible();
        await expect(menuPage.TwoSliceSpicyChickenPizzaBox).toBeVisible();
        await expect(menuPage.TwoSlicePepperoniHotShotPizzaBox).toBeVisible();
        await expect(menuPage.TwoSliceSpicyVegPizzaBox).toBeVisible();
        await expect(menuPage.TwoSliceBBQChickenAndBaconPizzaBox).toBeVisible();
        await expect(menuPage.TwoSliceVeggieFeastPizzaBox).toBeVisible();
        await expect(menuPage.TwoSliceChickenSweetcornAndRedOnionPizzaBox).toBeVisible();
        await expect(menuPage.TwoSliceFirecrackerChickenPizzaBox).toBeVisible();
        await expect(menuPage.HotChocolateBrownies).toBeVisible();
        await expect(menuPage.SouthernFriedPotatoWedges).toBeVisible();
        await expect(menuPage.SouthernFriedChickenGoujons).toBeVisible();
        await expect(menuPage.SpicyBBQChickenBites).toBeVisible();
        await expect(menuPage.MozzarellaAndCheddarBites).toBeVisible();
        await expect(menuPage.TomatoSoup).toBeVisible();
        await expect(menuPage.HotHamAndCheeseBaguette).toBeVisible();
        await expect(menuPage.HotSouthernFriedChickenBaguette).toBeVisible();
        await expect(menuPage.AllDayBreakfastBaguette).toBeVisible();
        await expect(menuPage.HotSpicyChipotleChickenBaguette).toBeVisible();
        await expect(menuPage.HamAndCheeseToastieNewRecipe).toBeVisible();
        await expect(menuPage.CheeseAndCaramelisedOnionToastie).toBeVisible();
        await expect(menuPage.BBQChickenToastie).toBeVisible();

        // Verify that non-Hot Food products are NOT shown
        await expect(menuPage.BaconBreakfastRoll).not.toBeVisible();
        await expect(menuPage.SausageRoll).not.toBeVisible();
        await expect(menuPage.RegularAmericano).not.toBeVisible();
        await expect(menuPage.JamDoughnut).not.toBeVisible();
        await expect(menuPage.RoastChickenMayonnaiseBaguette).not.toBeVisible();
    });
});

test.describe('Menu Page Filters', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Filter Modal Opens and Displays All UI Elements', async ({ page }) => {
        await allure.displayName("Filter Modal UI Elements Verification");
        await allure.tags("Web interface", "Menu", "Filter", "Modal", "UI");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);

        // Click on the filter button to open the filters modal
        await menuPage.filterButton.click();
        await expect(menuPage.filterModal).toBeVisible();

        // Verify Filter Modal General Elements
        await expect(menuPage.filterModalTitle).toBeVisible();
        await expect(menuPage.filterModalCloseButton).toBeVisible();
        await expect(menuPage.clearAllFiltersButton).toBeVisible();
        await expect(menuPage.applyFiltersButton).toBeVisible();
        await expect(menuPage.backButton).toBeVisible();

        // Verify Calories Filter Section
        await expect(menuPage.caloriesFilterTitle).toBeVisible();
        await expect(menuPage.caloriesSlider).toBeVisible();

        // Verify Allergens Filter Section
        await expect(menuPage.allergensFilterTitle).toBeVisible();
        await expect(menuPage.allergensDescription).toBeVisible();
        
        // Verify ALL Allergens Filter Checkboxes
        await expect(menuPage.noSoyaCheckbox).toBeVisible();
        await expect(menuPage.noWheatCheckbox).toBeVisible();
        await expect(menuPage.noSulphitesCheckbox).toBeVisible();
        await expect(menuPage.noEggsCheckbox).toBeVisible();
        await expect(menuPage.noMilkCheckbox).toBeVisible();
        await expect(menuPage.noBarleyCheckbox).toBeVisible();
        await expect(menuPage.noOatsCheckbox).toBeVisible();
        await expect(menuPage.noMustardCheckbox).toBeVisible();
        await expect(menuPage.noCeleryCheckbox).toBeVisible();
        await expect(menuPage.noFishCheckbox).toBeVisible();

        // Verify ALL Category Filter Checkboxes
        await expect(menuPage.breakfastCategoryCheckbox).toBeVisible();
        await expect(menuPage.savoryAndBakesCategoryCheckbox).toBeVisible();
        await expect(menuPage.drinksAndSnacksCategoryCheckbox).toBeVisible();
        await expect(menuPage.sandwichesAndSaladsCategoryCheckbox).toBeVisible();
        await expect(menuPage.sweetTreatsCategoryCheckbox).toBeVisible();
        await expect(menuPage.hotFoodCategoryCheckbox).toBeVisible();
    });

    test('Verify Filter Modal Close Functionality', async ({ page }) => {
        await allure.displayName("Filter Modal Close Functionality");
        await allure.tags("Web interface", "Menu", "Filter", "Modal", "Close");
        await allure.severity("high");
        const menuPage = new MenuPage(page);

        // Open the filter modal
        await menuPage.filterButton.click();
        await expect(menuPage.filterModal).toBeVisible();

        // Close the modal using the close button
        await menuPage.filterModalCloseButton.click();
        await expect(menuPage.filterModal).not.toBeVisible();
    });

    test('Verify Filter Modal Back Button Functionality', async ({ page }) => {
        await allure.displayName("Filter Modal Back Button Functionality");
        await allure.tags("Web interface", "Menu", "Filter", "Modal", "Navigation");
        await allure.severity("normal");
        const menuPage = new MenuPage(page);

        // Open the filter modal
        await menuPage.filterButton.click();
        await expect(menuPage.filterModal).toBeVisible();

        // Test back button functionality
        await menuPage.backButton.click();
        await menuPage.filterModal.waitFor({ state: 'hidden' });
        await expect(menuPage.filterModal).not.toBeVisible();
    });

    test('Verify Calories Filter Slider Functionality', async ({ page }) => {
        await allure.displayName("Calories Filter Slider Functionality");
        await allure.tags("Web interface", "Menu", "Filter", "Calories", "Slider");
        await allure.severity("normal");
        const menuPage = new MenuPage(page);

        // Open the filter modal
        await menuPage.filterButton.click();
        await expect(menuPage.filterModal).toBeVisible();

        // Verify calories section is present and interactive
        await expect(menuPage.caloriesFilterTitle).toBeVisible();
        await expect(menuPage.caloriesSlider).toBeVisible();
        
        // Test slider interaction
        await menuPage.caloriesSlider.click();
        await expect(menuPage.caloriesSlider).toBeFocused();
    });

    test('Verify Allergens Filter Checkboxes Functionality', async ({ page }) => {
        await allure.displayName("Allergens Filter Checkboxes Functionality");
        await allure.tags("Web interface", "Menu", "Filter", "Allergens", "Checkboxes");
        await allure.severity("normal");
        const menuPage = new MenuPage(page);

        // Open the filter modal
        await menuPage.filterButton.click();
        await expect(menuPage.filterModal).toBeVisible();

        // Test allergen checkboxes are clickable
        await menuPage.noSoyaCheckbox.click();
        await expect(menuPage.noSoyaCheckbox).toBeChecked();
        
        await menuPage.noWheatCheckbox.click();
        await expect(menuPage.noWheatCheckbox).toBeChecked();

        await menuPage.noSulphitesCheckbox.click();
        await expect(menuPage.noSulphitesCheckbox).toBeChecked();

        await menuPage.noEggsCheckbox.click();
        await expect(menuPage.noEggsCheckbox).toBeChecked();
        
        await menuPage.noMilkCheckbox.click();
        await expect(menuPage.noMilkCheckbox).toBeChecked();
        
        await menuPage.noBarleyCheckbox.click();
        await expect(menuPage.noBarleyCheckbox).toBeChecked();
        
        await menuPage.noOatsCheckbox.click();
        await expect(menuPage.noOatsCheckbox).toBeChecked();
        
        await menuPage.noMustardCheckbox.click();
        await expect(menuPage.noMustardCheckbox).toBeChecked();
        
        await menuPage.noCeleryCheckbox.click();
        await expect(menuPage.noCeleryCheckbox).toBeChecked();
        
        await menuPage.noFishCheckbox.click();
        await expect(menuPage.noFishCheckbox).toBeChecked();
    });

    test('Verify Category Filter Checkboxes Functionality', async ({ page }) => {
        await allure.displayName("Category Filter Checkboxes Functionality");
        await allure.tags("Web interface", "Menu", "Filter", "Categories", "Checkboxes");
        await allure.severity("normal");
        const menuPage = new MenuPage(page);

        // Open the filter modal
        await menuPage.filterButton.click();
        await expect(menuPage.filterModal).toBeVisible();

        // Test category checkboxes are clickable
        await menuPage.breakfastCategoryCheckbox.click();
        await expect(menuPage.breakfastCategoryCheckbox).toBeChecked();
        
        await menuPage.savoryAndBakesCategoryCheckbox.click();
        await expect(menuPage.savoryAndBakesCategoryCheckbox).toBeChecked();

        await menuPage.drinksAndSnacksCategoryCheckbox.click();
        await expect(menuPage.drinksAndSnacksCategoryCheckbox).toBeChecked();

        await menuPage.sandwichesAndSaladsCategoryCheckbox.click();
        await expect(menuPage.sandwichesAndSaladsCategoryCheckbox).toBeChecked();
        
        await menuPage.sweetTreatsCategoryCheckbox.click();
        await expect(menuPage.sweetTreatsCategoryCheckbox).toBeChecked();

        await menuPage.hotFoodCategoryCheckbox.click();
        await expect(menuPage.hotFoodCategoryCheckbox).toBeChecked();
    });

    test('Verify Clear All Filters Button Functionality', async ({ page }) => {
        await allure.displayName("Clear All Filters Button Functionality");
        await allure.tags("Web interface", "Menu", "Filter", "Clear", "Reset");
        await allure.severity("normal");
        const menuPage = new MenuPage(page);

        // Open the filter modal
        await menuPage.filterButton.click();
        await expect(menuPage.filterModal).toBeVisible();

        // Select some filters
        await menuPage.breakfastCategoryCheckbox.click();
        await menuPage.noSoyaCheckbox.click();
        await expect(menuPage.breakfastCategoryCheckbox).toBeChecked();
        await expect(menuPage.noSoyaCheckbox).toBeChecked();

        // Clear all filters
        await menuPage.clearAllFiltersButton.click();
        
        // Verify filters are cleared
        await expect(menuPage.breakfastCategoryCheckbox).not.toBeChecked();
        await expect(menuPage.noSoyaCheckbox).not.toBeChecked();
    });

    test('Verify Apply Filters Button Functionality', async ({ page }) => {
        await allure.displayName("Apply Filters Button Functionality");
        await allure.tags("Web interface", "Menu", "Filter", "Apply");
        await allure.severity("high");
        const menuPage = new MenuPage(page);

        // Open the filter modal
        await menuPage.filterButton.click();
        await expect(menuPage.filterModal).toBeVisible();

        // Select a filter
        await menuPage.breakfastCategoryCheckbox.click();
        await expect(menuPage.breakfastCategoryCheckbox).toBeChecked();

        // Apply filters
        await menuPage.applyFiltersButton.click();
        
        // Verify modal closes after applying filters
        await menuPage.filterModal.waitFor({ state: 'hidden' });
        await expect(menuPage.filterModal).not.toBeVisible();

        // Verify that the menu now shows only breakfast items
        await expect(menuPage.BaconBreakfastRoll).toBeVisible();
        await expect(menuPage.SausageBreakfastRoll).toBeVisible();
        await expect(menuPage.AllButterCroissant).toBeVisible();
        await expect(menuPage.SausageRoll).not.toBeVisible();
        await expect(menuPage.RegularAmericano).not.toBeVisible();
        await expect(menuPage.JamDoughnut).not.toBeVisible();
        await expect(menuPage.RoastChickenMayonnaiseBaguette).not.toBeVisible();
        await expect(menuPage.SixSliceMargheritaPizzaBox).not.toBeVisible();
    });
});

test.describe('Menu Page Food Item Navigation - Breakfast', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Navigation to Bacon Breakfast Roll Page', async ({ page }) => {
        await allure.displayName("Bacon Breakfast Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        // Click on the Bacon Breakfast Roll item
        await menuPage.BaconBreakfastRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });

        // Verify navigation to the correct product page
        await expect(productPage.productTitle).toHaveText('Bacon Breakfast Roll');
    });

    test('Verify Navigation to Sausage Breakfast Roll Page', async ({ page }) => {
        await allure.displayName("Sausage Breakfast Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SausageBreakfastRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sausage Breakfast Roll');
    });

    test('Verify Navigation to Omelette Breakfast Roll Page', async ({ page }) => {
        await allure.displayName("Omelette Breakfast Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.OmeletteBreakfastRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Omelette Breakfast Roll');
    });

    test('Verify Navigation to Vegan Sausage Breakfast Roll Page', async ({ page }) => {
        await allure.displayName("Vegan Sausage Breakfast Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.VeganSausageBreakfastRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Vegan Sausage Breakfast Roll');
    });

    test('Verify Navigation to Bacon and Omelette Breakfast Roll Page', async ({ page }) => {
        await allure.displayName("Bacon and Omelette Breakfast Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconAndOmeletteBreakfastRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Bacon and Omelette Breakfast Roll');
    });

    test('Verify Navigation to Bacon and Sausage Breakfast Roll Page', async ({ page }) => {
        await allure.displayName("Bacon and Sausage Breakfast Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconAndSausageBreakfastRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Bacon and Sausage Breakfast Roll');
    });

    test('Verify Navigation to Sausage and Omelette Breakfast Roll Page', async ({ page }) => {
        await allure.displayName("Sausage and Omelette Breakfast Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SausageAndOmeletteBreakfastRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sausage and Omelette Breakfast Roll');
    });

    test('Verify Navigation to Bacon Breakfast Baguette Page', async ({ page }) => {
        await allure.displayName("Bacon Breakfast Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconBreakfastBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Bacon Breakfast Baguette');
    });

    test('Verify Navigation to Sausage Breakfast Baguette Page', async ({ page }) => {
        await allure.displayName("Sausage Breakfast Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SausageBreakfastBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sausage Breakfast Baguette');
    });

    test('Verify Navigation to Omelette Breakfast Baguette Page', async ({ page }) => {
        await allure.displayName("Omelette Breakfast Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.OmeletteBreakfastBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Omelette Breakfast Baguette');
    });

    test('Verify Navigation to Bacon and Omelette Breakfast Baguette Page', async ({ page }) => {
        await allure.displayName("Bacon and Omelette Breakfast Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconAndOmeletteBreakfastBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Bacon and Omelette Breakfast Baguette');
    });

    test('Verify Navigation to Bacon and Sausage Breakfast Baguette Page', async ({ page }) => {
        await allure.displayName("Bacon and Sausage Breakfast Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconAndSausageBreakfastBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Bacon and Sausage Breakfast Baguette');
    });

    test('Verify Navigation to Sausage and Omelette Breakfast Baguette Page', async ({ page }) => {
        await allure.displayName("Sausage and Omelette Breakfast Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SausageAndOmeletteBreakfastBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sausage and Omelette Breakfast Baguette');
    });

    test('Verify Navigation to Bacon and Cheese Wrap Page', async ({ page }) => {
        await allure.displayName("Bacon and Cheese Wrap Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconAndCheeseWrap.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Bacon and Cheese Wrap');
    });

    test('Verify Navigation to Hash Brown 2 Pack Page', async ({ page }) => {
        await allure.displayName("Hash Brown 2 Pack Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HashBrown2Pack.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Hash Brown (2 pack)');
    });

    test('Verify Navigation to Pain Au Chocolat Page', async ({ page }) => {
        await allure.displayName("Pain Au Chocolat Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.PainAuChocolat.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Pain au Chocolat');
    });

    test('Verify Navigation to All Butter Croissant Page', async ({ page }) => {
        await allure.displayName("All Butter Croissant Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.AllButterCroissant.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('All Butter Croissant');
    });

    test('Verify Navigation to Simply Creamy Porridge Ready To Eat Page', async ({ page }) => {
        await allure.displayName("Simply Creamy Porridge Ready To Eat Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SimplyCreamyPorridgeReadyToEat.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Simply Creamy Porridge (Ready to eat)');
    });

    test('Verify Navigation to Golden Syrup Flavour Porridge Ready To Eat Page', async ({ page }) => {
        await allure.displayName("Golden Syrup Flavour Porridge Ready To Eat Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.GoldenSyrupFlavourPorridgeReadyToEat.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Golden Syrup Flavour Porridge (Ready to eat)');
    });

    test('Verify Navigation to Apple & Cinnamon Flavour Porridge Ready To Eat Page', async ({ page }) => {
        await allure.displayName("Apple & Cinnamon Flavour Porridge Ready To Eat Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Breakfast");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.AppleCinnamonFlavourPorridgeReadyToEat.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Apple & Cinnamon Flavour Porridge (Ready to eat)');
    });

});

test.describe('Menu Page Food Item Navigation - Savouries & Bakes', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Navigation to Sausage Roll Page', async ({ page }) => {
        await allure.displayName("Sausage Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SausageRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sausage Roll');
    });

    test('Verify Navigation to Vegan Sausage Roll Page', async ({ page }) => {
        await allure.displayName("Vegan Sausage Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.VeganSausageRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Vegan Sausage Roll');
    });

    test('Verify Navigation to Cheese & Onion Bake Page', async ({ page }) => {
        await allure.displayName("Cheese & Onion Bake Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CheeseAndOnionBake.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Cheese & Onion Bake');
    });

    test('Verify Navigation to Steak Bake Page', async ({ page }) => {
        await allure.displayName("Steak Bake Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SteakBake.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Steak Bake');
    });

    test('Verify Navigation to Chicken Bake Page', async ({ page }) => {
        await allure.displayName("Chicken Bake Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ChickenBake.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Chicken Bake');
    });

    test('Verify Navigation to Sausage, Bean & Cheese Melt Page', async ({ page }) => {
        await allure.displayName("Sausage, Bean & Cheese Melt Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SausageBeanAndCheeseMelt.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sausage, Bean & Cheese Melt');
    });

    test('Verify Navigation to Vegan Lattice (Steak-Free) Page', async ({ page }) => {
        await allure.displayName("Vegan Lattice (Steak-Free) Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.VeganLatticeStekFree.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Vegan Lattice (Steak-Free)');
    });

    test('Verify Navigation to Fajita Chicken Bake Page', async ({ page }) => {
        await allure.displayName("Fajita Chicken Bake Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FajitaChickenBake.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Fajita Chicken Bake');
    });

    test('Verify Navigation to Margherita Pizza Page', async ({ page }) => {
        await allure.displayName("Margherita Pizza Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MargheritaPizza.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Margherita Pizza');
    });

    test('Verify Navigation to Pepperoni Pizza Page', async ({ page }) => {
        await allure.displayName("Pepperoni Pizza Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.PepperoniPizza.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Pepperoni Pizza');
    });

    test('Verify Navigation to Spicy Chicken Pizza Page', async ({ page }) => {
        await allure.displayName("Spicy Chicken Pizza Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Savouries");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SpicyChickenPizza.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Spicy Chicken Pizza');
    });

});

test.describe('Menu Page Food Item Navigation - Drinks & Snacks', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Navigation to Ready To Drink Latte Page', async ({ page }) => {
        await allure.displayName("Ready To Drink Latte Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ReadyToDrinkLatte.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Ready to Drink Latte');
    });

    test('Verify Navigation to Ready To Drink Caramel Latte Page', async ({ page }) => {
        await allure.displayName("Ready To Drink Caramel Latte Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ReadyToDrinkCaramelLatte.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Ready to Drink Caramel Latte');
    });

    test('Verify Navigation to Regular Americano Page', async ({ page }) => {
        await allure.displayName("Regular Americano Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularAmericano.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Americano');
    });

    test('Verify Navigation to Large Americano Page', async ({ page }) => {
        await allure.displayName("Large Americano Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeAmericano.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Americano');
    });

    test('Verify Navigation to Regular Cappuccino Page', async ({ page }) => {
        await allure.displayName("Regular Cappuccino Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularCappuccino.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Cappuccino');
    });

    test('Verify Navigation to Large Cappuccino Page', async ({ page }) => {
        await allure.displayName("Large Cappuccino Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeCappuccino.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Cappuccino');
    });

    test('Verify Navigation to Regular Latte Page', async ({ page }) => {
        await allure.displayName("Regular Latte Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularLatte.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Latte');
    });

    test('Verify Navigation to Large Latte Page', async ({ page }) => {
        await allure.displayName("Large Latte Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeLatte.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Latte');
    });

    test('Verify Navigation to Regular Caramel Latte Page', async ({ page }) => {
        await allure.displayName("Regular Caramel Latte Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularCaramelLatte.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Caramel Latte');
    });

    test('Verify Navigation to Large Caramel Latte Page', async ({ page }) => {
        await allure.displayName("Large Caramel Latte Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeCaramelLatte.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Caramel Latte');
    });

    test('Verify Navigation to Regular Vanilla Latte Page', async ({ page }) => {
        await allure.displayName("Regular Vanilla Latte Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularVanillaLatte.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Vanilla Latte');
    });

    test('Verify Navigation to Large Vanilla Latte Page', async ({ page }) => {
        await allure.displayName("Large Vanilla Latte Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeVanillaLatte.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Vanilla Latte');
    });

    test('Verify Navigation to Regular Pumpkin Spice Latte New Recipe Page', async ({ page }) => {
        await allure.displayName("Regular Pumpkin Spice Latte New Recipe Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularPumpkinSpiceLatteNewRecipe.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Pumpkin Spice Latte (New Recipe)');
    });

    test('Verify Navigation to Large Pumpkin Spice Latte New Recipe Page', async ({ page }) => {
        await allure.displayName("Large Pumpkin Spice Latte New Recipe Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargePumpkinSpiceLatteNewRecipe.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Pumpkin Spice Latte (New Recipe)');
    });

    test('Verify Navigation to Regular Caramel Mocha Page', async ({ page }) => {
        await allure.displayName("Regular Caramel Mocha Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularCaramelMocha.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Caramel Mocha');
    });

    test('Verify Navigation to Large Caramel Mocha Page', async ({ page }) => {
        await allure.displayName("Large Caramel Mocha Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeCaramelMocha.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Caramel Mocha');
    });

    test('Verify Navigation to Regular Mocha Page', async ({ page }) => {
        await allure.displayName("Regular Mocha Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularMocha.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Mocha');
    });

    test('Verify Navigation to Large Mocha Page', async ({ page }) => {
        await allure.displayName("Large Mocha Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeMocha.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Mocha');
    });

    test('Verify Navigation to Regular White Coffee Page', async ({ page }) => {
        await allure.displayName("Regular White Coffee Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularWhiteCoffee.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular White Coffee');
    });

    test('Verify Navigation to Large White Coffee Page', async ({ page }) => {
        await allure.displayName("Large White Coffee Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeWhiteCoffee.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large White Coffee');
    });

    test('Verify Navigation to Flat White Page', async ({ page }) => {
        await allure.displayName("Flat White Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FlatWhite.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Flat White');
    });

    test('Verify Navigation to Espresso Page', async ({ page }) => {
        await allure.displayName("Espresso Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.Espresso.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Espresso');
    });

    test('Verify Navigation to Regular Hot Chocolate Page', async ({ page }) => {
        await allure.displayName("Regular Hot Chocolate Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularHotChocolate.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Hot Chocolate');
    });

    test('Verify Navigation to Large Hot Chocolate Page', async ({ page }) => {
        await allure.displayName("Large Hot Chocolate Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeHotChocolate.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Hot Chocolate');
    });

    test('Verify Navigation to Regular Caramel Hot Chocolate Page', async ({ page }) => {
        await allure.displayName("Regular Caramel Hot Chocolate Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularCaramelHotChocolate.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Caramel Hot Chocolate');
    });

    test('Verify Navigation to Large Caramel Hot Chocolate Page', async ({ page }) => {
        await allure.displayName("Large Caramel Hot Chocolate Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeCaramelHotChocolate.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Caramel Hot Chocolate');
    });

    test('Verify Navigation to Regular Tea Page', async ({ page }) => {
        await allure.displayName("Regular Tea Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularTea.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Tea');
    });

    test('Verify Navigation to Large Tea Page', async ({ page }) => {
        await allure.displayName("Large Tea Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeTea.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Tea');
    });

    test('Verify Navigation to Regular Green Tea Page', async ({ page }) => {
        await allure.displayName("Regular Green Tea Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularGreenTea.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Green Tea');
    });

    test('Verify Navigation to Regular Peppermint Tea Page', async ({ page }) => {
        await allure.displayName("Regular Peppermint Tea Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularPeppermintTea.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Regular Peppermint Tea');
    });

    test('Verify Navigation to Small Orange Juice Page', async ({ page }) => {
        await allure.displayName("Small Orange Juice Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SmallOrangeJuice.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Small Orange Juice');
    });

    test('Verify Navigation to Large Orange Juice Page', async ({ page }) => {
        await allure.displayName("Large Orange Juice Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeOrangeJuice.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Orange Juice');
    });

    test('Verify Navigation to Fairtrade Apple Juice Page', async ({ page }) => {
        await allure.displayName("Fairtrade Apple Juice Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FairtradeAppleJuice.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Fairtrade Apple Juice');
    });

    test('Verify Navigation to Small Still Water Page', async ({ page }) => {
        await allure.displayName("Small Still Water Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SmallStillWater.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Small Still Water');
    });

    test('Verify Navigation to Large Still Water Page', async ({ page }) => {
        await allure.displayName("Large Still Water Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeStillWater.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Large Still Water');
    });

    test('Verify Navigation to Sparkling Mango & Pineapple Page', async ({ page }) => {
        await allure.displayName("Sparkling Mango & Pineapple Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SparklingMangoAndPineapple.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sparkling Mango & Pineapple');
    });

    test('Verify Navigation to Sparkling Raspberry Lemonade Page', async ({ page }) => {
        await allure.displayName("Sparkling Raspberry Lemonade Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Drinks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SparklingRaspberryLemonade.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sparkling Raspberry Lemonade');
    });

    test('Verify Navigation to Caramel Crispy Bar Page', async ({ page }) => {
        await allure.displayName("Caramel Crispy Bar Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Snacks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CaramelCrispyBar.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Caramel Crispy Bar');
    });

    test('Verify Navigation to Fruity Flapjack Page', async ({ page }) => {
        await allure.displayName("Fruity Flapjack Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Snacks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FruityFlapjack.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Fruity Flapjack');
    });

    test('Verify Navigation to Thai Sweet Chilli Crisps Page', async ({ page }) => {
        await allure.displayName("Thai Sweet Chilli Crisps Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Snacks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ThaiSweetChilliCrisps.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Thai Sweet Chilli Crisps');
    });

    test('Verify Navigation to Sea Salt & Cider Vinegar Crisps Page', async ({ page }) => {
        await allure.displayName("Sea Salt & Cider Vinegar Crisps Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Snacks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SeaSaltAndCiderVinegarCrisps.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sea Salt & Cider Vinegar Crisps');
    });

    test('Verify Navigation to Mature Cheddar Cheese & Onion Crisps Page', async ({ page }) => {
        await allure.displayName("Mature Cheddar Cheese & Onion Crisps Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Snacks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MatureCheddarCheeseAndOnionCrisps.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Mature Cheddar Cheese & Onion Crisps');
    });

    test('Verify Navigation to Free Range Egg Pot Page', async ({ page }) => {
        await allure.displayName("Free Range Egg Pot Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Snacks");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FreeRangeEggPot.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Free Range Egg Pot');
    });

});

test.describe('Menu Page Food Item Navigation - Sandwiches & Salads', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Navigation to Roast Chicken Mayonnaise Baguette Page', async ({ page }) => {
        await allure.displayName("Roast Chicken Mayonnaise Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RoastChickenMayonnaiseBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Roast Chicken Mayonnaise Baguette');
    });

    test('Verify Navigation to Ham and Cheese Baguette Page', async ({ page }) => {
        await allure.displayName("Ham and Cheese Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HamAndCheeseBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Ham and Cheese Baguette');
    });

    test('Verify Navigation to Mature Cheddar Cheese Salad Baguette Page', async ({ page }) => {
        await allure.displayName("Mature Cheddar Cheese Salad Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MatureCheddarCheeseSaladBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Mature Cheddar Cheese Salad Baguette');
    });

    test('Verify Navigation to Spicy Chipotle Chicken Baguette Page', async ({ page }) => {
        await allure.displayName("Spicy Chipotle Chicken Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SpicyChipotleChickenBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Spicy Chipotle Chicken Baguette');
    });

    test('Verify Navigation to Roast Chicken and Bacon Club Baguette Page', async ({ page }) => {
        await allure.displayName("Roast Chicken and Bacon Club Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RoastChickenAndBaconClubBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Roast Chicken and Bacon Club Baguette');
    });

    test('Verify Navigation to Tandoori Chicken Baguette Page', async ({ page }) => {
        await allure.displayName("Tandoori Chicken Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TandooriChickenBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Tandoori Chicken Baguette');
    });

    test('Verify Navigation to Tuna Crunch Baguette Page', async ({ page }) => {
        await allure.displayName("Tuna Crunch Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TunaCrunchBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Tuna Crunch Baguette');
    });

    test('Verify Navigation to Cheese & Onion Roll Page', async ({ page }) => {
        await allure.displayName("Cheese & Onion Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CheeseAndOnionRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Cheese & Onion Roll');
    });

    test('Verify Navigation to Sweet & Spicy Chicken Oval Bite Page', async ({ page }) => {
        await allure.displayName("Sweet & Spicy Chicken Oval Bite Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SweetAndSpicyChickenOvalBite.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sweet & Spicy Chicken Oval Bite');
    });

    test('Verify Navigation to Mature Cheddar Cheese Ploughmans Oval Bite Page', async ({ page }) => {
        await allure.displayName("Mature Cheddar Cheese Ploughmans Oval Bite Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MatureCheddarCheesePloughmansOvalBite.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Mature Cheddar Cheese Ploughmans Oval Bite');
    });

    test('Verify Navigation to Roast Chicken & Honey Mustard Mayo Oval Bite Page', async ({ page }) => {
        await allure.displayName("Roast Chicken & Honey Mustard Mayo Oval Bite Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RoastChickenAndHoneyMustardMayoOvalBite.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Roast Chicken & Honey Mustard Mayo Oval Bite');
    });

    test('Verify Navigation to Tuna Crunch Roll Page', async ({ page }) => {
        await allure.displayName("Tuna Crunch Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TunaCrunchRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Tuna Crunch Roll');
    });

    test('Verify Navigation to Honey Roast Ham and Egg Salad Roll Page', async ({ page }) => {
        await allure.displayName("Honey Roast Ham and Egg Salad Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HoneyRoastHamAndEggSaladRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Honey Roast Ham and Egg Salad Roll');
    });

    test('Verify Navigation to Chipotle Chicken Flatbread Page', async ({ page }) => {
        await allure.displayName("Chipotle Chicken Flatbread Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ChipotleChickenFlatbread.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Chipotle Chicken Flatbread');
    });

    test('Verify Navigation to Roast Chicken Salad Sandwich Page', async ({ page }) => {
        await allure.displayName("Roast Chicken Salad Sandwich Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RoastChickenSaladSandwich.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Roast Chicken Salad Sandwich');
    });

    test('Verify Navigation to BLT Sandwich Page', async ({ page }) => {
        await allure.displayName("BLT Sandwich Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BLTSandwich.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('BLT Sandwich');
    });

    test('Verify Navigation to Tuna Mayonnaise & Cucumber Sandwich Page', async ({ page }) => {
        await allure.displayName("Tuna Mayonnaise & Cucumber Sandwich Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TunaMayonnaiseAndCucumberSandwich.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Tuna Mayonnaise & Cucumber Sandwich');
    });

    test('Verify Navigation to Free Range Egg Mayo Sandwich Page', async ({ page }) => {
        await allure.displayName("Free Range Egg Mayo Sandwich Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sandwiches");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FreeRangeEggMayoSandwich.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Free Range Egg Mayo Sandwich');
    });

    test('Verify Navigation to Tuna Pasta Page', async ({ page }) => {
        await allure.displayName("Tuna Pasta Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Salads");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TunaPasta.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Tuna Pasta');
    });

    test('Verify Navigation to Smoky Cajun Rice with BBQ Chicken & Sweetcorn Fritters Page', async ({ page }) => {
        await allure.displayName("Smoky Cajun Rice with BBQ Chicken & Sweetcorn Fritters Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Salads");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SmokyCajunRiceWithBBQChickenAndSweetcornFritters.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Smoky Cajun Rice with BBQ Chicken & Sweetcorn Fritters');
    });

    test('Verify Navigation to Sweet Potato Bhaji & Rice Page', async ({ page }) => {
        await allure.displayName("Sweet Potato Bhaji & Rice Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Salads");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SweetPotatoBhajiAndRice.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sweet Potato Bhaji & Rice');
    });

    test('Verify Navigation to Pesto and Mozzarella Pasta Page', async ({ page }) => {
        await allure.displayName("Pesto and Mozzarella Pasta Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Salads");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.PestoAndMozzarellaPasta.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Pesto and Mozzarella Pasta');
    });

    test('Verify Navigation to Chicken & Bacon Pasta Page', async ({ page }) => {
        await allure.displayName("Chicken & Bacon Pasta Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Salads");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ChickenAndBaconPasta.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Chicken & Bacon Pasta');
    });

});

test.describe('Menu Page Food Item Navigation - Sweet Treats', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Navigation to Caramel Custard Doughnut Page', async ({ page }) => {
        await allure.displayName("Caramel Custard Doughnut Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CaramelCustardDoughnut.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Caramel Custard Doughnut');
    });

    test('Verify Navigation to Glazed Ring Doughnut Page', async ({ page }) => {
        await allure.displayName("Glazed Ring Doughnut Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.GlazedRingDoughnut.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Glazed Ring Doughnut');
    });

    test('Verify Navigation to Jam Doughnut Page', async ({ page }) => {
        await allure.displayName("Jam Doughnut Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.JamDoughnut.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Jam Doughnut');
    });

    test('Verify Navigation to Pink Jammie Doughnut Page', async ({ page }) => {
        await allure.displayName("Pink Jammie Doughnut Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.PinkJammieDoughnut.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Pink Jammie Doughnut');
    });

    test('Verify Navigation to Sugar Strand Doughnut Page', async ({ page }) => {
        await allure.displayName("Sugar Strand Doughnut Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SugarStrandDoughnut.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Sugar Strand Doughnut');
    });

    test('Verify Navigation to Triple Chocolate Doughnut Page', async ({ page }) => {
        await allure.displayName("Triple Chocolate Doughnut Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TripleChocolateDoughnut.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Triple Chocolate Doughnut');
    });

    test('Verify Navigation to Pumpkin Spice Doughnut New Recipe Page', async ({ page }) => {
        await allure.displayName("Pumpkin Spice Doughnut New Recipe Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.PumpkinSpiceDoughnutNewRecipe.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Pumpkin Spice Doughnut (New Recipe)');
    });

    test('Verify Navigation to Yum Yum Page', async ({ page }) => {
        await allure.displayName("Yum Yum Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.YumYum.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Yum Yum');
    });

    test('Verify Navigation to Belgian Bun Page', async ({ page }) => {
        await allure.displayName("Belgian Bun Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BelgianBun.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Belgian Bun');
    });

    test('Verify Navigation to Cream Éclair Page', async ({ page }) => {
        await allure.displayName("Cream Éclair Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CreamEclair.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Cream Éclair');
    });

    test('Verify Navigation to Gingerbread Man Page', async ({ page }) => {
        await allure.displayName("Gingerbread Man Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.GingerbreadMan.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Gingerbread Man');
    });

    test('Verify Navigation to Star Biscuit Page', async ({ page }) => {
        await allure.displayName("Star Biscuit Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.StarBiscuit.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Star Biscuit');
    });

    test('Verify Navigation to Jammy Heart Biscuit Page', async ({ page }) => {
        await allure.displayName("Jammy Heart Biscuit Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.JammyHeartBiscuit.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Jammy Heart Biscuit');
    });

    test('Verify Navigation to Milk Chocolate Cookie Page', async ({ page }) => {
        await allure.displayName("Milk Chocolate Cookie Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MilkChocolateCookie.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Milk Chocolate Cookie');
    });

    test('Verify Navigation to Triple Chocolate Cookie Page', async ({ page }) => {
        await allure.displayName("Triple Chocolate Cookie Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TripleChocolateCookie.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Triple Chocolate Cookie');
    });

    test('Verify Navigation to White Chocolate Cookie Page', async ({ page }) => {
        await allure.displayName("White Chocolate Cookie Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.WhiteChocolateCookie.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('White Chocolate Cookie');
    });

    test('Verify Navigation to Triple Chocolate Muffin Page', async ({ page }) => {
        await allure.displayName("Triple Chocolate Muffin Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TripleChocolateMuffin.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Triple Chocolate Muffin');
    });

    test('Verify Navigation to Toffee Fudge Muffin Page', async ({ page }) => {
        await allure.displayName("Toffee Fudge Muffin Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ToffeeFudgeMuffin.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Toffee Fudge Muffin');
    });

    test('Verify Navigation to Novelty Bun Page', async ({ page }) => {
        await allure.displayName("Novelty Bun Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.NoveltyBun.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Novelty Bun');
    });

    test('Verify Navigation to Chocolate Brownie Bar Page', async ({ page }) => {
        await allure.displayName("Chocolate Brownie Bar Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ChocolateBrownieBar.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Chocolate Brownie Bar');
    });

    test('Verify Navigation to Caramel Shortbread 4 Pack Page', async ({ page }) => {
        await allure.displayName("Caramel Shortbread 4 Pack Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CaramelShortbread4Pack.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Caramel Shortbread 4 pack');
    });

    test('Verify Navigation to Melon & Grape Fruit Pot Page', async ({ page }) => {
        await allure.displayName("Melon & Grape Fruit Pot Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MelonAndGrapeFruitPot.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Melon & Grape Fruit Pot');
    });

    test('Verify Navigation to Fat Free Greek Style Yoghurt with Strawberry Compote Page', async ({ page }) => {
        await allure.displayName("Fat Free Greek Style Yoghurt with Strawberry Compote Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FatFreeGreekStyleYoghurtWithStrawberryCompote.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Fat Free Greek Style Yoghurt with Strawberry Compote');
    });

    test('Verify Navigation to Apple & Strawberry Fruit Pot Page', async ({ page }) => {
        await allure.displayName("Apple & Strawberry Fruit Pot Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Sweet Treats");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.AppleAndStrawberryFruitPot.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Apple & Strawberry Fruit Pot');
    });

});

test.describe('Menu Page Food Item Navigation - Hot Food', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Navigation to 6 Slice Margherita Pizza Box Page', async ({ page }) => {
        await allure.displayName("6 Slice Margherita Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceMargheritaPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('6 Slice Margherita Pizza Box');
    });

    test('Verify Navigation to 6 Slice Pepperoni Pizza Box Page', async ({ page }) => {
        await allure.displayName("6 Slice Pepperoni Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSlicePepperoniPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('6 Slice Pepperoni Pizza Box');
    });

    test('Verify Navigation to 6 Slice Pepperoni Hot Shot Pizza Box Page', async ({ page }) => {
        await allure.displayName("6 Slice Pepperoni Hot Shot Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSlicePepperoniHotShotPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('6 Slice Pepperoni Hot Shot Pizza Box');
    });

    test('Verify Navigation to 6 Slice Spicy Chicken Pizza Box Page', async ({ page }) => {
        await allure.displayName("6 Slice Spicy Chicken Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceSpicyChickenPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('6 Slice Spicy Chicken Pizza Box');
    });

    test('Verify Navigation to 6 Slice Spicy Veg Pizza Box Page', async ({ page }) => {
        await allure.displayName("6 Slice Spicy Veg Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceSpicyVegPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('6 Slice Spicy Veg Pizza Box');
    });

    test('Verify Navigation to 6 Slice BBQ Chicken & Bacon Pizza Box Page', async ({ page }) => {
        await allure.displayName("6 Slice BBQ Chicken & Bacon Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceBBQChickenAndBaconPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('6 Slice BBQ Chicken & Bacon Pizza Box');
    });

    test('Verify Navigation to 6 Slice Veggie Feast Pizza Box Page', async ({ page }) => {
        await allure.displayName("6 Slice Veggie Feast Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceVeggieFeastPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('6 Slice Veggie Feast Pizza Box');
    });

    test('Verify Navigation to 6 Slice Firecracker Chicken Pizza Box Page', async ({ page }) => {
        await allure.displayName("6 Slice Firecracker Chicken Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceFirecrackerChickenPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('6 Slice Firecracker Chicken Pizza Box');
    });

    test('Verify Navigation to 4 Slice Margherita Pizza Box Page', async ({ page }) => {
        await allure.displayName("4 Slice Margherita Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceMargheritaPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('4 Slice Margherita Pizza Box');
    });

    test('Verify Navigation to 4 Slice Pepperoni Hot Shot Pizza Box Page', async ({ page }) => {
        await allure.displayName("4 Slice Pepperoni Hot Shot Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSlicePepperoniHotShotPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('4 Slice Pepperoni Hot Shot Pizza Box');
    });

    test('Verify Navigation to 4 Slice Pepperoni Pizza Box Page', async ({ page }) => {
        await allure.displayName("4 Slice Pepperoni Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSlicePepperoniPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('4 Slice Pepperoni Pizza Box');
    });

    test('Verify Navigation to 4 Slice Spicy Chicken Pizza Box Page', async ({ page }) => {
        await allure.displayName("4 Slice Spicy Chicken Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceSpicyChickenPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('4 Slice Spicy Chicken Pizza Box');
    });

    test('Verify Navigation to 4 Slice Spicy Veg Pizza Box Page', async ({ page }) => {
        await allure.displayName("4 Slice Spicy Veg Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceSpicyVegPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('4 Slice Spicy Veg Pizza Box');
    });

    test('Verify Navigation to 4 Slice BBQ Chicken & Bacon Pizza Box Page', async ({ page }) => {
        await allure.displayName("4 Slice BBQ Chicken & Bacon Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceBBQChickenAndBaconPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('4 Slice BBQ Chicken & Bacon Pizza Box');
    });

    test('Verify Navigation to 4 Slice Veggie Feast Pizza Box Page', async ({ page }) => {
        await allure.displayName("4 Slice Veggie Feast Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceVeggieFeastPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('4 Slice Veggie Feast Pizza Box');
    });

    test('Verify Navigation to 4 Slice Chicken, Sweetcorn & Red Onion Pizza Box Page', async ({ page }) => {
        await allure.displayName("4 Slice Chicken, Sweetcorn & Red Onion Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceChickenSweetcornAndRedOnionPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('4 Slice Chicken, Sweetcorn & Red Onion Pizza Box');
    });

    test('Verify Navigation to 4 Slice Firecracker Chicken Pizza Box Page', async ({ page }) => {
        await allure.displayName("4 Slice Firecracker Chicken Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceFirecrackerChickenPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('4 Slice Firecracker Chicken Pizza Box');
    });

    test('Verify Navigation to 2 Slice Margherita Pizza Box Page', async ({ page }) => {
        await allure.displayName("2 Slice Margherita Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceMargheritaPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('2 Slice Margherita Pizza Box');
    });

    test('Verify Navigation to 2 Slice Pepperoni Pizza Box Page', async ({ page }) => {
        await allure.displayName("2 Slice Pepperoni Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSlicePepperoniPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('2 Slice Pepperoni Pizza Box');
    });

    test('Verify Navigation to 2 Slice Spicy Chicken Pizza Box Page', async ({ page }) => {
        await allure.displayName("2 Slice Spicy Chicken Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceSpicyChickenPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('2 Slice Spicy Chicken Pizza Box');
    });

    test('Verify Navigation to 2 Slice Pepperoni Hot Shot Pizza Box Page', async ({ page }) => {
        await allure.displayName("2 Slice Pepperoni Hot Shot Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSlicePepperoniHotShotPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('2 Slice Pepperoni Hot Shot Pizza Box');
    });

    test('Verify Navigation to 2 Slice Spicy Veg Pizza Box Page', async ({ page }) => {
        await allure.displayName("2 Slice Spicy Veg Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceSpicyVegPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('2 Slice Spicy Veg Pizza Box');
    });

    test('Verify Navigation to 2 Slice BBQ Chicken & Bacon Pizza Box Page', async ({ page }) => {
        await allure.displayName("2 Slice BBQ Chicken & Bacon Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceBBQChickenAndBaconPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('2 Slice BBQ Chicken & Bacon Pizza Box');
    });

    test('Verify Navigation to 2 Slice Veggie Feast Pizza Box Page', async ({ page }) => {
        await allure.displayName("2 Slice Veggie Feast Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceVeggieFeastPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('2 Slice Veggie Feast Pizza Box');
    });

    test('Verify Navigation to 2 Slice Chicken, Sweetcorn & Red Onion Pizza Box Page', async ({ page }) => {
        await allure.displayName("2 Slice Chicken, Sweetcorn & Red Onion Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceChickenSweetcornAndRedOnionPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('2 Slice Chicken, Sweetcorn & Red Onion Pizza Box');
    });

    test('Verify Navigation to 2 Slice Firecracker Chicken Pizza Box Page', async ({ page }) => {
        await allure.displayName("2 Slice Firecracker Chicken Pizza Box Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceFirecrackerChickenPizzaBox.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('2 Slice Firecracker Chicken Pizza Box');
    });

    test('Verify Navigation to Hot Chocolate Brownies Page', async ({ page }) => {
        await allure.displayName("Hot Chocolate Brownies Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HotChocolateBrownies.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Hot Chocolate Brownies');
    });

    test('Verify Navigation to Southern Fried Potato Wedges Page', async ({ page }) => {
        await allure.displayName("Southern Fried Potato Wedges Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SouthernFriedPotatoWedges.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Southern Fried Potato Wedges');
    });

    test('Verify Navigation to Southern Fried Chicken Goujons Page', async ({ page }) => {
        await allure.displayName("Southern Fried Chicken Goujons Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SouthernFriedChickenGoujons.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Southern Fried Chicken Goujons');
    });

    test('Verify Navigation to Spicy BBQ Chicken Bites Page', async ({ page }) => {
        await allure.displayName("Spicy BBQ Chicken Bites Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SpicyBBQChickenBites.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Spicy BBQ Chicken Bites');
    });

    test('Verify Navigation to Mozzarella & Cheddar Bites Page', async ({ page }) => {
        await allure.displayName("Mozzarella & Cheddar Bites Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MozzarellaAndCheddarBites.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Mozzarella & Cheddar Bites');
    });

    test('Verify Navigation to Tomato Soup Page', async ({ page }) => {
        await allure.displayName("Tomato Soup Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TomatoSoup.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Tomato Soup');
    });

    test('Verify Navigation to Hot Ham and Cheese Baguette Page', async ({ page }) => {
        await allure.displayName("Hot Ham and Cheese Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HotHamAndCheeseBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Hot Ham and Cheese Baguette');
    });

    test('Verify Navigation to Hot Southern Fried Chicken Baguette Page', async ({ page }) => {
        await allure.displayName("Hot Southern Fried Chicken Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HotSouthernFriedChickenBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Hot Southern Fried Chicken Baguette');
    });

    test('Verify Navigation to All Day Breakfast Baguette Page', async ({ page }) => {
        await allure.displayName("All Day Breakfast Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.AllDayBreakfastBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('All Day Breakfast Baguette');
    });

    test('Verify Navigation to Hot Spicy Chipotle Chicken Baguette Page', async ({ page }) => {
        await allure.displayName("Hot Spicy Chipotle Chicken Baguette Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HotSpicyChipotleChickenBaguette.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Hot Spicy Chipotle Chicken Baguette');
    });

    test('Verify Navigation to Ham & Cheese Toastie New Recipe Page', async ({ page }) => {
        await allure.displayName("Ham & Cheese Toastie New Recipe Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HamAndCheeseToastieNewRecipe.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Ham & Cheese Toastie (New Recipe)');
    });

    test('Verify Navigation to Cheese & Caramelised Onion Toastie Page', async ({ page }) => {
        await allure.displayName("Cheese & Caramelised Onion Toastie Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CheeseAndCaramelisedOnionToastie.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('Cheese & Caramelised Onion Toastie');
    });

    test('Verify Navigation to BBQ Chicken Toastie Page', async ({ page }) => {
        await allure.displayName("BBQ Chicken Toastie Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Hot Food");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BBQChickenToastie.click();
        await productPage.productTitle.waitFor({ state: 'visible' });
        await expect(productPage.productTitle).toHaveText('BBQ Chicken Toastie');
    });

});


