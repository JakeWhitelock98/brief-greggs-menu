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

test.describe('Menu Page Food Item Navigation', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Navigation to Bacon Breakfast Roll Page', async ({ page }) => {
        await allure.displayName("Bacon Breakfast Roll Page Navigation");
        await allure.tags("Web interface", "Menu", "Navigation", "Bacon Breakfast Roll");
        await allure.severity("critical");
        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        // Click on the Bacon Breakfast Roll item
        await menuPage.BaconBreakfastRoll.click();
        await productPage.productTitle.waitFor({ state: 'visible' });

        // Verify navigation to the correct product page
        await expect(productPage.productTitle).toHaveText('Bacon Breakfast Roll');
    }   );

});


