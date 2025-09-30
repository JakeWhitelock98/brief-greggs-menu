import { test, expect } from '@playwright/test';
import { MenuPage } from './pom/menuPage';
import { ProductPage } from './pom/productPage';
import { loadCookies } from './utils/cookie-helper';
import * as allure from "allure-js-commons";

test.describe('Product Page Content Verification - Breakfast Products', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Bacon Breakfast Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Bacon Breakfast Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        // Navigate to Bacon Breakfast Roll product page
        await menuPage.BaconBreakfastRoll.click();
        await expect(page).toHaveURL(/\/product\/bacon-breakfast-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        // Use reusable function to verify all product page content
        await verifyProductPageContent(page, productPage, 'Bacon Breakfast Roll');

    });

    test('Verify Sausage Breakfast Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Sausage Breakfast Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        // Navigate to Sausage Breakfast Roll product page
        await menuPage.SausageBreakfastRoll.click();
        await expect(page).toHaveURL(/\/product\/sausage-breakfast-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        // Use reusable function to verify all product page content
        await verifyProductPageContent(page, productPage, 'Sausage Breakfast Roll');
       
    });

    test('Verify Omelette Breakfast Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Omelette Breakfast Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.OmeletteBreakfastRoll.click();
        await expect(page).toHaveURL(/\/product\/omelette-breakfast-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Omelette Breakfast Roll');
    });

    test('Verify Vegan Sausage Breakfast Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Vegan Sausage Breakfast Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast", "Vegan");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.VeganSausageBreakfastRoll.click();
        await expect(page).toHaveURL(/\/product\/vegan-sausage-breakfast-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Vegan Sausage Breakfast Roll');
    });

    test('Verify Bacon and Omelette Breakfast Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Bacon and Omelette Breakfast Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconAndOmeletteBreakfastRoll.click();
        await expect(page).toHaveURL(/\/product\/bacon-and-omelette-breakfast-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Bacon and Omelette Breakfast Roll');
    });

    test('Verify Bacon and Sausage Breakfast Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Bacon and Sausage Breakfast Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconAndSausageBreakfastRoll.click();
        await expect(page).toHaveURL(/\/product\/bacon-and-sausage-breakfast-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Bacon and Sausage Breakfast Roll');
    });

    test('Verify Sausage and Omelette Breakfast Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Sausage and Omelette Breakfast Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SausageAndOmeletteBreakfastRoll.click();
        await expect(page).toHaveURL(/\/product\/sausage-and-omelette-breakfast-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Sausage and Omelette Breakfast Roll');
    });

    test('Verify Bacon Breakfast Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Bacon Breakfast Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconBreakfastBaguette.click();
        await expect(page).toHaveURL(/\/product\/bacon-breakfast-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Bacon Breakfast Baguette');
    });

    test('Verify Sausage Breakfast Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Sausage Breakfast Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SausageBreakfastBaguette.click();
        await expect(page).toHaveURL(/\/product\/sausage-breakfast-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Sausage Breakfast Baguette');
    });

    test('Verify Omelette Breakfast Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Omelette Breakfast Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.OmeletteBreakfastBaguette.click();
        await expect(page).toHaveURL(/\/product\/omelette-breakfast-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Omelette Breakfast Baguette');
    });

    test('Verify Bacon and Omelette Breakfast Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Bacon and Omelette Breakfast Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconAndOmeletteBreakfastBaguette.click();
        await expect(page).toHaveURL(/\/product\/bacon-and-omelette-breakfast-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Bacon and Omelette Breakfast Baguette');
    });

    test('Verify Bacon and Sausage Breakfast Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Bacon and Sausage Breakfast Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconAndSausageBreakfastBaguette.click();
        await expect(page).toHaveURL(/\/product\/bacon-and-sausage-breakfast-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Bacon and Sausage Breakfast Baguette');
    });

    test('Verify Sausage and Omelette Breakfast Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Sausage and Omelette Breakfast Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SausageAndOmeletteBreakfastBaguette.click();
        await expect(page).toHaveURL(/\/product\/sausage-and-omelette-breakfast-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Sausage and Omelette Breakfast Baguette');
    });

    test('Verify Bacon and Cheese Wrap Product Page Contents', async ({ page }) => {
        await allure.displayName("Bacon and Cheese Wrap Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BaconAndCheeseWrap.click();
        await expect(page).toHaveURL(/\/product\/bacon-and-cheese-wrap/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Bacon and Cheese Wrap');
    });

    test('Verify Hash Brown (2 pack) Product Page Contents', async ({ page }) => {
        await allure.displayName("Hash Brown (2 pack) Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HashBrown2Pack.click();
        await expect(page).toHaveURL(/\/product\/hash-brown-2-pack/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Hash Brown (2 pack)');
    });

    test('Verify Pain au Chocolat Product Page Contents', async ({ page }) => {
        await allure.displayName("Pain au Chocolat Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.PainAuChocolat.click();
        await expect(page).toHaveURL(/\/product\/pain-au-chocolat/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Pain au Chocolat');
    });

    test('Verify All Butter Croissant Product Page Contents', async ({ page }) => {
        await allure.displayName("All Butter Croissant Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.AllButterCroissant.click();
        await expect(page).toHaveURL(/\/product\/all-butter-croissant/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'All Butter Croissant');
    });

    test('Verify Simply Creamy Porridge (Ready to eat) Product Page Contents', async ({ page }) => {
        await allure.displayName("Simply Creamy Porridge (Ready to eat) Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SimplyCreamyPorridgeReadyToEat.click();
        await expect(page).toHaveURL(/\/product\/simply-creamy-porridge-ready-to-eat/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Simply Creamy Porridge (Ready to eat)');
    });

    test('Verify Golden Syrup Flavour Porridge (Ready to eat) Product Page Contents', async ({ page }) => {
        await allure.displayName("Golden Syrup Flavour Porridge (Ready to eat) Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.GoldenSyrupFlavourPorridgeReadyToEat.click();
        await expect(page).toHaveURL(/\/product\/golden-syrup-flavour-porridge-ready-to-eat/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Golden Syrup Flavour Porridge (Ready to eat)');
    });

    test('Verify Apple & Cinnamon Flavour Porridge (Ready to eat) Product Page Contents', async ({ page }) => {
        await allure.displayName("Apple & Cinnamon Flavour Porridge (Ready to eat) Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Breakfast");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.AppleCinnamonFlavourPorridgeReadyToEat.click();
        await expect(page).toHaveURL(/\/product\/apple-cinnamon-flavour-porridge-ready-to-eat/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Apple & Cinnamon Flavour Porridge (Ready to eat)');
    });
    
});

test.describe('Product Page Content Verification - Savouries & Bakes Products', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Sausage Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Sausage Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Savouries & Bakes");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SausageRoll.click();
        await expect(page).toHaveURL(/\/product\/sausage-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Sausage Roll');
    });

    test('Verify Vegan Sausage Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Vegan Sausage Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Savouries & Bakes", "Vegan");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.VeganSausageRoll.click();
        await expect(page).toHaveURL(/\/product\/vegan-sausage-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Vegan Sausage Roll');
    });

    test('Verify Cheese & Onion Bake Product Page Contents', async ({ page }) => {
        await allure.displayName("Cheese & Onion Bake Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Savouries & Bakes");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CheeseAndOnionBake.click();
        await expect(page).toHaveURL(/\/product\/cheese-onion-bake/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Cheese & Onion Bake');
    });

    test('Verify Steak Bake Product Page Contents', async ({ page }) => {
        await allure.displayName("Steak Bake Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Savouries & Bakes");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SteakBake.click();
        await expect(page).toHaveURL(/\/product\/steak-bake/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Steak Bake');
    });

    test('Verify Chicken Bake Product Page Contents', async ({ page }) => {
        await allure.displayName("Chicken Bake Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Savouries & Bakes");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ChickenBake.click();
        await expect(page).toHaveURL(/\/product\/chicken-bake/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Chicken Bake');
    });

    test('Verify Sausage, Bean & Cheese Melt Product Page Contents', async ({ page }) => {
        await allure.displayName("Sausage, Bean & Cheese Melt Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Savouries & Bakes");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SausageBeanAndCheeseMelt.click();
        await expect(page).toHaveURL(/\/product\/sausage-bean-cheese-melt/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Sausage, Bean & Cheese Melt');
    });

    test('Verify Vegan Lattice (Steak-Free) Product Page Contents', async ({ page }) => {
        await allure.displayName("Vegan Lattice (Steak-Free) Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Savouries & Bakes", "Vegan");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.VeganLatticeStekFree.click();
        await expect(page).toHaveURL(/\/product\/vegan-lattice-steak-free/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Vegan Lattice (Steak-Free)');
    });

    test('Verify Fajita Chicken Bake Product Page Contents', async ({ page }) => {
        await allure.displayName("Fajita Chicken Bake Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Savouries & Bakes");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FajitaChickenBake.click();
        await expect(page).toHaveURL(/\/product\/fajita-chicken-bake/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Fajita Chicken Bake');
    });

    test('Verify Margherita Pizza Product Page Contents', async ({ page }) => {
        await allure.displayName("Margherita Pizza Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Savouries & Bakes");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MargheritaPizza.click();
        await expect(page).toHaveURL(/\/product\/margherita-pizza/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Margherita Pizza');
    });

    test('Verify Pepperoni Pizza Product Page Contents', async ({ page }) => {
        await allure.displayName("Pepperoni Pizza Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Savouries & Bakes");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.PepperoniPizza.click();
        await expect(page).toHaveURL(/\/product\/pepperoni-pizza/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Pepperoni Pizza');
    });

    test('Verify Spicy Chicken Pizza Product Page Contents', async ({ page }) => {
        await allure.displayName("Spicy Chicken Pizza Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Savouries & Bakes");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SpicyChickenPizza.click();
        await expect(page).toHaveURL(/\/product\/spicy-chicken-pizza/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Spicy Chicken Pizza');
    });

});

test.describe('Product Page Content Verification - Drinks & Snacks Products', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Ready to Drink Latte Product Page Contents', async ({ page }) => {
        await allure.displayName("Ready to Drink Latte Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ReadyToDrinkLatte.click();
        await expect(page).toHaveURL(/\/product\/ready-to-drink-latte/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Ready to Drink Latte');
    });

    test('Verify Ready to Drink Caramel Latte Product Page Contents', async ({ page }) => {
        await allure.displayName("Ready to Drink Caramel Latte Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ReadyToDrinkCaramelLatte.click();
        await expect(page).toHaveURL(/\/product\/ready-to-drink-caramel-latte/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Ready to Drink Caramel Latte');
    });

    test('Verify Regular Americano Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Americano Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularAmericano.click();
        await expect(page).toHaveURL(/\/product\/regular-americano/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Americano');
    });

    test('Verify Large Americano Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Americano Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeAmericano.click();
        await expect(page).toHaveURL(/\/product\/large-americano/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Americano');
    });

    test('Verify Regular Cappuccino Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Cappuccino Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularCappuccino.click();
        await expect(page).toHaveURL(/\/product\/regular-cappuccino/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Cappuccino');
    });

    test('Verify Large Cappuccino Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Cappuccino Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeCappuccino.click();
        await expect(page).toHaveURL(/\/product\/large-cappuccino/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Cappuccino');
    });

    test('Verify Regular Latte Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Latte Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularLatte.click();
        await expect(page).toHaveURL(/\/product\/regular-latte/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Latte');
    });

    test('Verify Large Latte Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Latte Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeLatte.click();
        await expect(page).toHaveURL(/\/product\/large-latte/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Latte');
    });

    test('Verify Regular Caramel Latte Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Caramel Latte Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularCaramelLatte.click();
        await expect(page).toHaveURL(/\/product\/regular-caramel-latte/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Caramel Latte');
    });

    test('Verify Large Caramel Latte Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Caramel Latte Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeCaramelLatte.click();
        await expect(page).toHaveURL(/\/product\/large-caramel-latte/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Caramel Latte');
    });

    test('Verify Regular Vanilla Latte Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Vanilla Latte Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularVanillaLatte.click();
        await expect(page).toHaveURL(/\/product\/regular-vanilla-latte/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Vanilla Latte');
    });

    test('Verify Large Vanilla Latte Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Vanilla Latte Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeVanillaLatte.click();
        await expect(page).toHaveURL(/\/product\/large-vanilla-latte/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Vanilla Latte');
    });

    test('Verify Regular Pumpkin Spice Latte New Recipe Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Pumpkin Spice Latte New Recipe Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularPumpkinSpiceLatteNewRecipe.click();
        await expect(page).toHaveURL(/\/product\/regular-pumpkin-spice-latte-new-recipe/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Pumpkin Spice Latte (New Recipe)');
    });

    test('Verify Large Pumpkin Spice Latte New Recipe Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Pumpkin Spice Latte New Recipe Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargePumpkinSpiceLatteNewRecipe.click();
        await expect(page).toHaveURL(/\/product\/large-pumpkin-spice-latte-new-recipe/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Pumpkin Spice Latte (New Recipe)');
    });

    test('Verify Regular Caramel Mocha Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Caramel Mocha Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularCaramelMocha.click();
        await expect(page).toHaveURL(/\/product\/regular-caramel-mocha/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Caramel Mocha');
    });

    test('Verify Large Caramel Mocha Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Caramel Mocha Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeCaramelMocha.click();
        await expect(page).toHaveURL(/\/product\/large-caramel-mocha/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Caramel Mocha');
    });

    test('Verify Regular Mocha Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Mocha Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularMocha.click();
        await expect(page).toHaveURL(/\/product\/regular-mocha/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Mocha');
    });

    test('Verify Large Mocha Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Mocha Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeMocha.click();
        await expect(page).toHaveURL(/\/product\/large-mocha/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Mocha');
    });

    test('Verify Regular White Coffee Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular White Coffee Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularWhiteCoffee.click();
        await expect(page).toHaveURL(/\/product\/regular-white-coffee/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular White Coffee');
    });

    test('Verify Large White Coffee Product Page Contents', async ({ page }) => {
        await allure.displayName("Large White Coffee Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeWhiteCoffee.click();
        await expect(page).toHaveURL(/\/product\/large-white-coffee/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large White Coffee');
    });

    test('Verify Flat White Product Page Contents', async ({ page }) => {
        await allure.displayName("Flat White Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FlatWhite.click();
        await expect(page).toHaveURL(/\/product\/flat-white/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Flat White');
    });

    test('Verify Espresso Product Page Contents', async ({ page }) => {
        await allure.displayName("Espresso Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.Espresso.click();
        await expect(page).toHaveURL(/\/product\/espresso/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Espresso');
    });

    test('Verify Regular Hot Chocolate Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Hot Chocolate Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularHotChocolate.click();
        await expect(page).toHaveURL(/\/product\/regular-hot-chocolate/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Hot Chocolate');
    });

    test('Verify Large Hot Chocolate Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Hot Chocolate Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeHotChocolate.click();
        await expect(page).toHaveURL(/\/product\/large-hot-chocolate/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Hot Chocolate');
    });

    test('Verify Regular Caramel Hot Chocolate Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Caramel Hot Chocolate Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularCaramelHotChocolate.click();
        await expect(page).toHaveURL(/\/product\/regular-caramel-hot-chocolate/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Caramel Hot Chocolate');
    });

    test('Verify Large Caramel Hot Chocolate Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Caramel Hot Chocolate Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeCaramelHotChocolate.click();
        await expect(page).toHaveURL(/\/product\/large-caramel-hot-chocolate/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Caramel Hot Chocolate');
    });

    test('Verify Regular Tea Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Tea Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularTea.click();
        await expect(page).toHaveURL(/\/product\/regular-tea/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Tea');
    });

    test('Verify Large Tea Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Tea Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeTea.click();
        await expect(page).toHaveURL(/\/product\/large-tea/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Tea');
    });

    test('Verify Regular Green Tea Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Green Tea Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularGreenTea.click();
        await expect(page).toHaveURL(/\/product\/regular-green-tea/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Green Tea');
    });

    test('Verify Regular Peppermint Tea Product Page Contents', async ({ page }) => {
        await allure.displayName("Regular Peppermint Tea Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RegularPeppermintTea.click();
        await expect(page).toHaveURL(/\/product\/regular-peppermint-tea/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Regular Peppermint Tea');
    });

    test('Verify Small Orange Juice Product Page Contents', async ({ page }) => {
        await allure.displayName("Small Orange Juice Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SmallOrangeJuice.click();
        await expect(page).toHaveURL(/\/product\/small-orange-juice/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Small Orange Juice');
    });

    test('Verify Large Orange Juice Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Orange Juice Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeOrangeJuice.click();
        await expect(page).toHaveURL(/\/product\/large-orange-juice/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Orange Juice');
    });

    test('Verify Fairtrade Apple Juice Product Page Contents', async ({ page }) => {
        await allure.displayName("Fairtrade Apple Juice Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FairtradeAppleJuice.click();
        await expect(page).toHaveURL(/\/product\/fairtrade-apple-juice/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Fairtrade Apple Juice');
    });

    test('Verify Small Still Water Product Page Contents', async ({ page }) => {
        await allure.displayName("Small Still Water Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SmallStillWater.click();
        await expect(page).toHaveURL(/\/product\/small-still-water/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Small Still Water');
    });

    test('Verify Large Still Water Product Page Contents', async ({ page }) => {
        await allure.displayName("Large Still Water Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.LargeStillWater.click();
        await expect(page).toHaveURL(/\/product\/large-still-water/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Large Still Water');
    });

    test('Verify Sparkling Mango & Pineapple Product Page Contents', async ({ page }) => {
        await allure.displayName("Sparkling Mango & Pineapple Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SparklingMangoAndPineapple.click();
        await expect(page).toHaveURL(/\/product\/sparkling-mango-pineapple/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Sparkling Mango & Pineapple');
    });

    test('Verify Sparkling Raspberry Lemonade Product Page Contents', async ({ page }) => {
        await allure.displayName("Sparkling Raspberry Lemonade Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SparklingRaspberryLemonade.click();
        await expect(page).toHaveURL(/\/product\/sparkling-raspberry-lemonade/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Sparkling Raspberry Lemonade');
    });

    test('Verify Caramel Crispy Bar Product Page Contents', async ({ page }) => {
        await allure.displayName("Caramel Crispy Bar Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CaramelCrispyBar.click();
        await expect(page).toHaveURL(/\/product\/caramel-crispy-bar/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Caramel Crispy Bar');
    });

    test('Verify Fruity Flapjack Product Page Contents', async ({ page }) => {
        await allure.displayName("Fruity Flapjack Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FruityFlapjack.click();
        await expect(page).toHaveURL(/\/product\/fruity-flapjack/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Fruity Flapjack');
    });

    test('Verify Thai Sweet Chilli Crisps Product Page Contents', async ({ page }) => {
        await allure.displayName("Thai Sweet Chilli Crisps Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ThaiSweetChilliCrisps.click();
        await expect(page).toHaveURL(/\/product\/thai-sweet-chilli-crisps/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Thai Sweet Chilli Crisps');
    });

    test('Verify Sea Salt & Cider Vinegar Crisps Product Page Contents', async ({ page }) => {
        await allure.displayName("Sea Salt & Cider Vinegar Crisps Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SeaSaltAndCiderVinegarCrisps.click();
        await expect(page).toHaveURL(/\/product\/sea-salt-cider-vinegar-crisps/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Sea Salt & Cider Vinegar Crisps');
    });

    test('Verify Mature Cheddar Cheese & Onion Crisps Product Page Contents', async ({ page }) => {
        await allure.displayName("Mature Cheddar Cheese & Onion Crisps Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MatureCheddarCheeseAndOnionCrisps.click();
        await expect(page).toHaveURL(/\/product\/mature-cheddar-cheese-onion-crisps/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Mature Cheddar Cheese & Onion Crisps');
    });

    test('Verify Free Range Egg Pot Product Page Contents', async ({ page }) => {
        await allure.displayName("Free Range Egg Pot Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Drinks & Snacks");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FreeRangeEggPot.click();
        await expect(page).toHaveURL(/\/product\/free-range-egg-pot/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Free Range Egg Pot');
    });

});

test.describe('Product Page Content Verification - Sandwiches & Salads Products', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Roast Chicken Mayonnaise Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Roast Chicken Mayonnaise Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RoastChickenMayonnaiseBaguette.click();
        await expect(page).toHaveURL(/\/product\/roast-chicken-mayonnaise-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Roast Chicken Mayonnaise Baguette');
    });

    test('Verify Ham and Cheese Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Ham and Cheese Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HamAndCheeseBaguette.click();
        await expect(page).toHaveURL(/\/product\/ham-and-cheese-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Ham and Cheese Baguette');
    });

    test('Verify Mature Cheddar Cheese Salad Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Mature Cheddar Cheese Salad Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MatureCheddarCheeseSaladBaguette.click();
        await expect(page).toHaveURL(/\/product\/mature-cheddar-cheese-salad-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Mature Cheddar Cheese Salad Baguette');
    });

    test('Verify Spicy Chipotle Chicken Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Spicy Chipotle Chicken Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SpicyChipotleChickenBaguette.click();
        await expect(page).toHaveURL(/\/product\/spicy-chipotle-chicken-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Spicy Chipotle Chicken Baguette');
    });

    test('Verify Roast Chicken and Bacon Club Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Roast Chicken and Bacon Club Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RoastChickenAndBaconClubBaguette.click();
        await expect(page).toHaveURL(/\/product\/roast-chicken-and-bacon-club-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Roast Chicken and Bacon Club Baguette');
    });

    test('Verify Tandoori Chicken Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Tandoori Chicken Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TandooriChickenBaguette.click();
        await expect(page).toHaveURL(/\/product\/tandoori-chicken-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Tandoori Chicken Baguette');
    });

    test('Verify Tuna Crunch Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Tuna Crunch Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TunaCrunchBaguette.click();
        await expect(page).toHaveURL(/\/product\/tuna-crunch-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Tuna Crunch Baguette');
    });

    test('Verify Cheese & Onion Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Cheese & Onion Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CheeseAndOnionRoll.click();
        await expect(page).toHaveURL(/\/product\/cheese-onion-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Cheese & Onion Roll');
    });

    test('Verify Sweet & Spicy Chicken Oval Bite Product Page Contents', async ({ page }) => {
        await allure.displayName("Sweet & Spicy Chicken Oval Bite Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SweetAndSpicyChickenOvalBite.click();
        await expect(page).toHaveURL(/\/product\/sweet-spicy-chicken-oval-bite/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Sweet & Spicy Chicken Oval Bite');
    });

    test('Verify Mature Cheddar Cheese Ploughmans Oval Bite Product Page Contents', async ({ page }) => {
        await allure.displayName("Mature Cheddar Cheese Ploughmans Oval Bite Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MatureCheddarCheesePloughmansOvalBite.click();
        await expect(page).toHaveURL(/\/product\/mature-cheddar-cheese-ploughmans-oval-bite/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Mature Cheddar Cheese Ploughmans Oval Bite');
    });

    test('Verify Roast Chicken & Honey Mustard Mayo Oval Bite Product Page Contents', async ({ page }) => {
        await allure.displayName("Roast Chicken & Honey Mustard Mayo Oval Bite Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RoastChickenAndHoneyMustardMayoOvalBite.click();
        await expect(page).toHaveURL(/\/product\/roast-chicken-honey-mustard-mayo-oval-bite/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Roast Chicken & Honey Mustard Mayo Oval Bite');
    });

    test('Verify Tuna Crunch Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Tuna Crunch Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TunaCrunchRoll.click();
        await expect(page).toHaveURL(/\/product\/tuna-crunch-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Tuna Crunch Roll');
    });

    test('Verify Honey Roast Ham and Egg Salad Roll Product Page Contents', async ({ page }) => {
        await allure.displayName("Honey Roast Ham and Egg Salad Roll Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HoneyRoastHamAndEggSaladRoll.click();
        await expect(page).toHaveURL(/\/product\/honey-roast-ham-and-egg-salad-roll/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Honey Roast Ham and Egg Salad Roll');
    });

    test('Verify Chipotle Chicken Flatbread Product Page Contents', async ({ page }) => {
        await allure.displayName("Chipotle Chicken Flatbread Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ChipotleChickenFlatbread.click();
        await expect(page).toHaveURL(/\/product\/chipotle-chicken-flatbread/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Chipotle Chicken Flatbread');
    });

    test('Verify Roast Chicken Salad Sandwich Product Page Contents', async ({ page }) => {
        await allure.displayName("Roast Chicken Salad Sandwich Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.RoastChickenSaladSandwich.click();
        await expect(page).toHaveURL(/\/product\/roast-chicken-salad-sandwich/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Roast Chicken Salad Sandwich');
    });

    test('Verify BLT Sandwich Product Page Contents', async ({ page }) => {
        await allure.displayName("BLT Sandwich Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BLTSandwich.click();
        await expect(page).toHaveURL(/\/product\/blt-sandwich/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'BLT Sandwich');
    });

    test('Verify Tuna Mayonnaise & Cucumber Sandwich Product Page Contents', async ({ page }) => {
        await allure.displayName("Tuna Mayonnaise & Cucumber Sandwich Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TunaMayonnaiseAndCucumberSandwich.click();
        await expect(page).toHaveURL(/\/product\/tuna-mayonnaise-cucumber-sandwich/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Tuna Mayonnaise & Cucumber Sandwich');
    });

    test('Verify Free Range Egg Mayo Sandwich Product Page Contents', async ({ page }) => {
        await allure.displayName("Free Range Egg Mayo Sandwich Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FreeRangeEggMayoSandwich.click();
        await expect(page).toHaveURL(/\/product\/free-range-egg-mayo-sandwich/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Free Range Egg Mayo Sandwich');
    });

    test('Verify Tuna Pasta Product Page Contents', async ({ page }) => {
        await allure.displayName("Tuna Pasta Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TunaPasta.click();
        await expect(page).toHaveURL(/\/product\/tuna-pasta/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Tuna Pasta');
    });

    test('Verify Smoky Cajun Rice with BBQ Chicken & Sweetcorn Fritters Product Page Contents', async ({ page }) => {
        await allure.displayName("Smoky Cajun Rice with BBQ Chicken & Sweetcorn Fritters Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SmokyCajunRiceWithBBQChickenAndSweetcornFritters.click();
        await expect(page).toHaveURL(/\/product\/smoky-cajun-rice-with-bbq-chicken-sweetcorn-fritters/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Smoky Cajun Rice with BBQ Chicken & Sweetcorn Fritters');
    });

    test('Verify Sweet Potato Bhaji & Rice Product Page Contents', async ({ page }) => {
        await allure.displayName("Sweet Potato Bhaji & Rice Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SweetPotatoBhajiAndRice.click();
        await expect(page).toHaveURL(/\/product\/sweet-potato-bhaji-rice/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Sweet Potato Bhaji & Rice');
    });

    test('Verify Pesto and Mozzarella Pasta Product Page Contents', async ({ page }) => {
        await allure.displayName("Pesto and Mozzarella Pasta Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.PestoAndMozzarellaPasta.click();
        await expect(page).toHaveURL(/\/product\/pesto-and-mozzarella-pasta/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Pesto and Mozzarella Pasta');
    });

    test('Verify Chicken & Bacon Pasta Product Page Contents', async ({ page }) => {
        await allure.displayName("Chicken & Bacon Pasta Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sandwiches & Salads");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ChickenAndBaconPasta.click();
        await expect(page).toHaveURL(/\/product\/chicken-bacon-pasta/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Chicken & Bacon Pasta');
    });

});

test.describe('Product Page Content Verification - Sweet Treats Products', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify Caramel Custard Doughnut Product Page Contents', async ({ page }) => {
        await allure.displayName("Caramel Custard Doughnut Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CaramelCustardDoughnut.click();
        await expect(page).toHaveURL(/\/product\/caramel-custard-doughnut/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Caramel Custard Doughnut');
    });

    test('Verify Glazed Ring Doughnut Product Page Contents', async ({ page }) => {
        await allure.displayName("Glazed Ring Doughnut Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.GlazedRingDoughnut.click();
        await expect(page).toHaveURL(/\/product\/glazed-ring-doughnut/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Glazed Ring Doughnut');
    });

    test('Verify Jam Doughnut Product Page Contents', async ({ page }) => {
        await allure.displayName("Jam Doughnut Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.JamDoughnut.click();
        await expect(page).toHaveURL(/\/product\/jam-doughnut/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Jam Doughnut');
    });

    test('Verify Pink Jammie Doughnut Product Page Contents', async ({ page }) => {
        await allure.displayName("Pink Jammie Doughnut Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.PinkJammieDoughnut.click();
        await expect(page).toHaveURL(/\/product\/pink-jammie-doughnut/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Pink Jammie Doughnut');
    });

    test('Verify Sugar Strand Doughnut Product Page Contents', async ({ page }) => {
        await allure.displayName("Sugar Strand Doughnut Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SugarStrandDoughnut.click();
        await expect(page).toHaveURL(/\/product\/sugar-strand-doughnut/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Sugar Strand Doughnut');
    });

    test('Verify Triple Chocolate Doughnut Product Page Contents', async ({ page }) => {
        await allure.displayName("Triple Chocolate Doughnut Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TripleChocolateDoughnut.click();
        await expect(page).toHaveURL(/\/product\/triple-chocolate-doughnut/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Triple Chocolate Doughnut');
    });

    test('Verify Pumpkin Spice Doughnut New Recipe Product Page Contents', async ({ page }) => {
        await allure.displayName("Pumpkin Spice Doughnut New Recipe Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.PumpkinSpiceDoughnutNewRecipe.click();
        await expect(page).toHaveURL(/\/product\/pumpkin-spice-doughnut-new-recipe/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Pumpkin Spice Doughnut (New Recipe)');
    });

    test('Verify Yum Yum Product Page Contents', async ({ page }) => {
        await allure.displayName("Yum Yum Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.YumYum.click();
        await expect(page).toHaveURL(/\/product\/yum-yum/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Yum Yum');
    });

    test('Verify Belgian Bun Product Page Contents', async ({ page }) => {
        await allure.displayName("Belgian Bun Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BelgianBun.click();
        await expect(page).toHaveURL(/\/product\/belgian-bun/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Belgian Bun');
    });

    test('Verify Cream Éclair Product Page Contents', async ({ page }) => {
        await allure.displayName("Cream Éclair Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CreamEclair.click();
        await expect(page).toHaveURL(/\/product\/cream-eclair/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Cream Éclair');
    });

    test('Verify Gingerbread Man Product Page Contents', async ({ page }) => {
        await allure.displayName("Gingerbread Man Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.GingerbreadMan.click();
        await expect(page).toHaveURL(/\/product\/gingerbread-man/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Gingerbread Man');
    });

    test('Verify Star Biscuit Product Page Contents', async ({ page }) => {
        await allure.displayName("Star Biscuit Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.StarBiscuit.click();
        await expect(page).toHaveURL(/\/product\/star-biscuit/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Star Biscuit');
    });

    test('Verify Jammy Heart Biscuit Product Page Contents', async ({ page }) => {
        await allure.displayName("Jammy Heart Biscuit Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.JammyHeartBiscuit.click();
        await expect(page).toHaveURL(/\/product\/jammy-heart-biscuit/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Jammy Heart Biscuit');
    });

    test('Verify Milk Chocolate Cookie Product Page Contents', async ({ page }) => {
        await allure.displayName("Milk Chocolate Cookie Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MilkChocolateCookie.click();
        await expect(page).toHaveURL(/\/product\/milk-chocolate-cookie/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Milk Chocolate Cookie');
    });

    test('Verify Triple Chocolate Cookie Product Page Contents', async ({ page }) => {
        await allure.displayName("Triple Chocolate Cookie Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TripleChocolateCookie.click();
        await expect(page).toHaveURL(/\/product\/triple-chocolate-cookie/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Triple Chocolate Cookie');
    });

    test('Verify White Chocolate Cookie Product Page Contents', async ({ page }) => {
        await allure.displayName("White Chocolate Cookie Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.WhiteChocolateCookie.click();
        await expect(page).toHaveURL(/\/product\/white-chocolate-cookie/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'White Chocolate Cookie');
    });

    test('Verify Triple Chocolate Muffin Product Page Contents', async ({ page }) => {
        await allure.displayName("Triple Chocolate Muffin Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TripleChocolateMuffin.click();
        await expect(page).toHaveURL(/\/product\/triple-chocolate-muffin/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Triple Chocolate Muffin');
    });

    test('Verify Toffee Fudge Muffin Product Page Contents', async ({ page }) => {
        await allure.displayName("Toffee Fudge Muffin Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ToffeeFudgeMuffin.click();
        await expect(page).toHaveURL(/\/product\/toffee-fudge-muffin/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Toffee Fudge Muffin');
    });

    test('Verify Novelty Bun Product Page Contents', async ({ page }) => {
        await allure.displayName("Novelty Bun Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.NoveltyBun.click();
        await expect(page).toHaveURL(/\/product\/novelty-bun/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Novelty Bun');
    });

    test('Verify Chocolate Brownie Bar Product Page Contents', async ({ page }) => {
        await allure.displayName("Chocolate Brownie Bar Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.ChocolateBrownieBar.click();
        await expect(page).toHaveURL(/\/product\/chocolate-brownie-bar/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Chocolate Brownie Bar');
    });

    test('Verify Caramel Shortbread 4 Pack Product Page Contents', async ({ page }) => {
        await allure.displayName("Caramel Shortbread 4 Pack Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CaramelShortbread4Pack.click();
        await expect(page).toHaveURL(/\/product\/caramel-shortbread-4-pack/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Caramel Shortbread 4 pack');
    });

    test('Verify Melon & Grape Fruit Pot Product Page Contents', async ({ page }) => {
        await allure.displayName("Melon & Grape Fruit Pot Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MelonAndGrapeFruitPot.click();
        await expect(page).toHaveURL(/\/product\/melon-grape-fruit-pot/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Melon & Grape Fruit Pot');
    });

    test('Verify Fat Free Greek Style Yoghurt with Strawberry Compote Product Page Contents', async ({ page }) => {
        await allure.displayName("Fat Free Greek Style Yoghurt with Strawberry Compote Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FatFreeGreekStyleYoghurtWithStrawberryCompote.click();
        await expect(page).toHaveURL(/\/product\/fat-free-greek-style-yoghurt-with-strawberry-compote/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Fat Free Greek Style Yoghurt with Strawberry Compote');
    });

    test('Verify Apple & Strawberry Fruit Pot Product Page Contents', async ({ page }) => {
        await allure.displayName("Apple & Strawberry Fruit Pot Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Sweet Treats");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.AppleAndStrawberryFruitPot.click();
        await expect(page).toHaveURL(/\/product\/apple-strawberry-fruit-pot/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Apple & Strawberry Fruit Pot');
    });

});

test.describe('Product Page Content Verification - Hot Foods Products', () => {
    test.beforeEach(async ({ page, browserName }) => {
        const menuPage = new MenuPage(page);
        // Load cookies before navigating to avoid cookie popup
        await loadCookies(page.context(), browserName);
        await menuPage.goToMenu();
    });

    test('Verify 6 Slice Margherita Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("6 Slice Margherita Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceMargheritaPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/6-slice-margherita-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '6 Slice Margherita Pizza Box');
    });

    test('Verify 6 Slice Pepperoni Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("6 Slice Pepperoni Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSlicePepperoniPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/6-slice-pepperoni-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '6 Slice Pepperoni Pizza Box');
    });

    test('Verify 6 Slice Pepperoni Hot Shot Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("6 Slice Pepperoni Hot Shot Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSlicePepperoniHotShotPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/6-slice-pepperoni-hot-shot-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '6 Slice Pepperoni Hot Shot Pizza Box');
    });

    test('Verify 6 Slice Spicy Chicken Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("6 Slice Spicy Chicken Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceSpicyChickenPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/6-slice-spicy-chicken-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '6 Slice Spicy Chicken Pizza Box');
    });

    test('Verify 6 Slice Spicy Veg Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("6 Slice Spicy Veg Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceSpicyVegPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/6-slice-spicy-veg-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '6 Slice Spicy Veg Pizza Box');
    });

    test('Verify 6 Slice BBQ Chicken & Bacon Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("6 Slice BBQ Chicken & Bacon Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceBBQChickenAndBaconPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/6-slice-bbq-chicken-bacon-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '6 Slice BBQ Chicken & Bacon Pizza Box');
    });

    test('Verify 6 Slice Veggie Feast Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("6 Slice Veggie Feast Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceVeggieFeastPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/6-slice-veggie-feast-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '6 Slice Veggie Feast Pizza Box');
    });

    test('Verify 6 Slice Firecracker Chicken Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("6 Slice Firecracker Chicken Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SixSliceFirecrackerChickenPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/6-slice-firecracker-chicken-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '6 Slice Firecracker Chicken Pizza Box');
    });

    test('Verify 4 Slice Margherita Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("4 Slice Margherita Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceMargheritaPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/4-slice-margherita-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '4 Slice Margherita Pizza Box');
    });

    test('Verify 4 Slice Pepperoni Hot Shot Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("4 Slice Pepperoni Hot Shot Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSlicePepperoniHotShotPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/4-slice-pepperoni-hot-shot-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '4 Slice Pepperoni Hot Shot Pizza Box');
    });

    test('Verify 4 Slice Pepperoni Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("4 Slice Pepperoni Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSlicePepperoniPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/4-slice-pepperoni-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '4 Slice Pepperoni Pizza Box');
    });

    test('Verify 4 Slice Spicy Chicken Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("4 Slice Spicy Chicken Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceSpicyChickenPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/4-slice-spicy-chicken-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '4 Slice Spicy Chicken Pizza Box');
    });

    test('Verify 4 Slice Spicy Veg Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("4 Slice Spicy Veg Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceSpicyVegPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/4-slice-spicy-veg-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '4 Slice Spicy Veg Pizza Box');
    });

    test('Verify 4 Slice BBQ Chicken & Bacon Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("4 Slice BBQ Chicken & Bacon Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceBBQChickenAndBaconPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/4-slice-bbq-chicken-bacon-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '4 Slice BBQ Chicken & Bacon Pizza Box');
    });

    test('Verify 4 Slice Veggie Feast Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("4 Slice Veggie Feast Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceVeggieFeastPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/4-slice-veggie-feast-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '4 Slice Veggie Feast Pizza Box');
    });

    test('Verify 4 Slice Chicken Sweetcorn & Red Onion Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("4 Slice Chicken Sweetcorn & Red Onion Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceChickenSweetcornAndRedOnionPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/4-slice-chicken-sweetcorn-red-onion-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '4 Slice Chicken, Sweetcorn & Red Onion Pizza Box');
    });

    test('Verify 4 Slice Firecracker Chicken Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("4 Slice Firecracker Chicken Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.FourSliceFirecrackerChickenPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/4-slice-firecracker-chicken-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '4 Slice Firecracker Chicken Pizza Box');
    });

    test('Verify 2 Slice Margherita Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("2 Slice Margherita Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceMargheritaPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/2-slice-margherita-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '2 Slice Margherita Pizza Box');
    });

    test('Verify 2 Slice Pepperoni Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("2 Slice Pepperoni Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSlicePepperoniPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/2-slice-pepperoni-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '2 Slice Pepperoni Pizza Box');
    });

    test('Verify 2 Slice Spicy Chicken Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("2 Slice Spicy Chicken Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceSpicyChickenPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/2-slice-spicy-chicken-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '2 Slice Spicy Chicken Pizza Box');
    });

    test('Verify 2 Slice Pepperoni Hot Shot Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("2 Slice Pepperoni Hot Shot Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSlicePepperoniHotShotPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/2-slice-pepperoni-hot-shot-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '2 Slice Pepperoni Hot Shot Pizza Box');
    });

    test('Verify 2 Slice Spicy Veg Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("2 Slice Spicy Veg Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceSpicyVegPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/2-slice-spicy-veg-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '2 Slice Spicy Veg Pizza Box');
    });

    test('Verify 2 Slice BBQ Chicken & Bacon Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("2 Slice BBQ Chicken & Bacon Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceBBQChickenAndBaconPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/2-slice-bbq-chicken-bacon-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '2 Slice BBQ Chicken & Bacon Pizza Box');
    });

    test('Verify 2 Slice Veggie Feast Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("2 Slice Veggie Feast Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceVeggieFeastPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/2-slice-veggie-feast-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '2 Slice Veggie Feast Pizza Box');
    });

    test('Verify 2 Slice Chicken, Sweetcorn & Red Onion Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("2 Slice Chicken, Sweetcorn & Red Onion Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceChickenSweetcornAndRedOnionPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/2-slice-chicken-sweetcorn-red-onion-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '2 Slice Chicken, Sweetcorn & Red Onion Pizza Box');
    });

    test('Verify 2 Slice Firecracker Chicken Pizza Box Product Page Contents', async ({ page }) => {
        await allure.displayName("2 Slice Firecracker Chicken Pizza Box Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TwoSliceFirecrackerChickenPizzaBox.click();
        await expect(page).toHaveURL(/\/product\/2-slice-firecracker-chicken-pizza-box/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, '2 Slice Firecracker Chicken Pizza Box');
    });

    test('Verify Hot Chocolate Brownies Product Page Contents', async ({ page }) => {
        await allure.displayName("Hot Chocolate Brownies Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HotChocolateBrownies.click();
        await expect(page).toHaveURL(/\/product\/hot-chocolate-brownies/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Hot Chocolate Brownies');
    });

    test('Verify Southern Fried Potato Wedges Product Page Contents', async ({ page }) => {
        await allure.displayName("Southern Fried Potato Wedges Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SouthernFriedPotatoWedges.click();
        await expect(page).toHaveURL(/\/product\/southern-fried-potato-wedges/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Southern Fried Potato Wedges');
    });

    test('Verify Southern Fried Chicken Goujons Product Page Contents', async ({ page }) => {
        await allure.displayName("Southern Fried Chicken Goujons Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SouthernFriedChickenGoujons.click();
        await expect(page).toHaveURL(/\/product\/southern-fried-chicken-goujons/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Southern Fried Chicken Goujons');
    });

    test('Verify Spicy BBQ Chicken Bites Product Page Contents', async ({ page }) => {
        await allure.displayName("Spicy BBQ Chicken Bites Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.SpicyBBQChickenBites.click();
        await expect(page).toHaveURL(/\/product\/spicy-bbq-chicken-bites/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Spicy BBQ Chicken Bites');
    });

    test('Verify Mozzarella & Cheddar Bites Product Page Contents', async ({ page }) => {
        await allure.displayName("Mozzarella & Cheddar Bites Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.MozzarellaAndCheddarBites.click();
        await expect(page).toHaveURL(/\/product\/mozzarella-cheddar-bites/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Mozzarella & Cheddar Bites');
    });

    test('Verify Tomato Soup Product Page Contents', async ({ page }) => {
        await allure.displayName("Tomato Soup Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.TomatoSoup.click();
        await expect(page).toHaveURL(/\/product\/tomato-soup/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Tomato Soup');
    });

    test('Verify Hot Ham and Cheese Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Hot Ham and Cheese Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HotHamAndCheeseBaguette.click();
        await expect(page).toHaveURL(/\/product\/hot-ham-and-cheese-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Hot Ham and Cheese Baguette');
    });

    test('Verify Hot Southern Fried Chicken Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Hot Southern Fried Chicken Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HotSouthernFriedChickenBaguette.click();
        await expect(page).toHaveURL(/\/product\/hot-southern-fried-chicken-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Hot Southern Fried Chicken Baguette');
    });

    test('Verify All Day Breakfast Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("All Day Breakfast Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.AllDayBreakfastBaguette.click();
        await expect(page).toHaveURL(/\/product\/all-day-breakfast-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'All Day Breakfast Baguette');
    });

    test('Verify Hot Spicy Chipotle Chicken Baguette Product Page Contents', async ({ page }) => {
        await allure.displayName("Hot Spicy Chipotle Chicken Baguette Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HotSpicyChipotleChickenBaguette.click();
        await expect(page).toHaveURL(/\/product\/hot-spicy-chipotle-chicken-baguette/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Hot Spicy Chipotle Chicken Baguette');
    });

    test('Verify Ham & Cheese Toastie New Recipe Product Page Contents', async ({ page }) => {
        await allure.displayName("Ham & Cheese Toastie New Recipe Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.HamAndCheeseToastieNewRecipe.click();
        await expect(page).toHaveURL(/\/product\/ham-cheese-toastie-new-recipe/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Ham & Cheese Toastie (New Recipe)');
    });

    test('Verify Cheese & Caramelised Onion Toastie Product Page Contents', async ({ page }) => {
        await allure.displayName("Cheese & Caramelised Onion Toastie Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.CheeseAndCaramelisedOnionToastie.click();
        await expect(page).toHaveURL(/\/product\/cheese-caramelised-onion-toastie/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'Cheese & Caramelised Onion Toastie');
    });

    test('Verify BBQ Chicken Toastie Product Page Contents', async ({ page }) => {
        await allure.displayName("BBQ Chicken Toastie Product Page Verification");
        await allure.tags("Web interface", "Product Page", "Content Verification", "Hot Foods");
        await allure.severity("critical");

        const menuPage = new MenuPage(page);
        const productPage = new ProductPage(page);

        await menuPage.BBQChickenToastie.click();
        await expect(page).toHaveURL(/\/product\/bbq-chicken-toastie/);
        await productPage.productTitle.waitFor({ state: 'visible' });
        
        await verifyProductPageContent(page, productPage, 'BBQ Chicken Toastie');
    });

});

// Reusable function to verify product page content
async function verifyProductPageContent(page: any, productPage: ProductPage, productName: string) {
    // Verify Product Header Information
    await expect(productPage.productTitle).toHaveText(productName);
    await expect(productPage.productImage).toHaveAccessibleName(productName);

    // Verify Nutritional Summary Section text with dynamic product name and weight
    // This matches text like "Each Bacon Breakfast Roll (119.5g) contains:" or "Each Sausage Breakfast Roll (154g) contains:"
    const escapedProductName = productName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const portionTextRegex = new RegExp(`Each ${escapedProductName} \\((\\d+(?:\\.\\d+)?(?:g|ml))\\) contains:`, 'i');
    
    // Try to find the text with a more flexible approach
    const allText = await page.textContent('body');
    
    // If exact regex fails, try a more flexible approach
    try {
        await expect(page.getByText(portionTextRegex)).toBeVisible();
    } catch (error) {
        console.log('Exact regex failed, trying more flexible approach');
        // Fallback: look for "Each [product name] (" pattern more flexibly
        const flexibleRegex = new RegExp(`Each\\s+${escapedProductName}\\s+\\(\\d+(?:\\.\\d+)?(?:g|ml)\\)\\s+contains:`, 'i');
        await expect(page.getByText(flexibleRegex)).toBeVisible();
    }

    // Verify Energy Values are present and contain numeric data
    await expect(productPage.energyValuekJ).toBeVisible();
    await expect(productPage.energyValuekJ).not.toHaveText('');
    await expect(productPage.energyValuekJ).toContainText(/\d+kJ/);
    await expect(productPage.energyValuekcal).toBeVisible();
    await expect(productPage.energyValuekcal).not.toHaveText('');
    await expect(productPage.energyValuekcal).toContainText(/\d+kcal/);

    // Verify Nutritional Summary Values are present and contain numeric data
    await expect(productPage.fatValue).toBeVisible();
    await expect(productPage.fatValue).not.toHaveText('');
    await expect(productPage.fatValue).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.saturatesValue).toBeVisible();
    await expect(productPage.saturatesValue).not.toHaveText('');
    await expect(productPage.saturatesValue).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.sugarValue).toBeVisible();
    await expect(productPage.sugarValue).not.toHaveText('');
    await expect(productPage.sugarValue).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.saltValue).toBeVisible();
    await expect(productPage.saltValue).not.toHaveText('');
    await expect(productPage.saltValue).toContainText(/\d+(\.\d+)?g/);

    // Verify Reference Intake Percentages are present and contain numeric data
    await expect(productPage.energyPercentage).toBeVisible();
    await expect(productPage.energyPercentage).not.toHaveText('');
    await expect(productPage.energyPercentage).toContainText(/\d+%/);
    await expect(productPage.fatPercentage).toBeVisible();
    await expect(productPage.fatPercentage).not.toHaveText('');
    await expect(productPage.fatPercentage).toContainText(/\d+%/);
    await expect(productPage.saturatesPercentage).toBeVisible();
    await expect(productPage.saturatesPercentage).not.toHaveText('');
    await expect(productPage.saturatesPercentage).toContainText(/\d+%/);
    await expect(productPage.sugarPercentage).toBeVisible();
    await expect(productPage.sugarPercentage).not.toHaveText('');
    await expect(productPage.sugarPercentage).toContainText(/\d+%/);
    await expect(productPage.saltPercentage).toBeVisible();
    await expect(productPage.saltPercentage).not.toHaveText('');
    await expect(productPage.saltPercentage).toContainText(/\d+%/);

    // Verify Reference Intake Text
    await expect(productPage.referenceIntakeText).toContainText('of an adult\’s reference intake');

    // Verify Nutritional Information Table Title
    await expect(productPage.nutritionalInformationTitle).toBeVisible();
    await expect(productPage.nutritionalInformationTitle).toHaveText('Nutritional Information');

    // Verify Table Column Headers
    try {
        await expect(productPage.typicalValuesColumn).toBeVisible();
    } catch {
        // Fallback for pages that dont have typical values sold text
        await expect(productPage.typicalValuesColumnOneOnPage).toBeVisible();
    }

    try {
        await expect(productPage.per100Column).toBeVisible();
    } catch {
        // Fallback for pages that dont have typical values sold text
        await expect(productPage.per100ColumnOneOnPage).toBeVisible();
    }
    
    await expect(productPage.perPortionColumn).toBeVisible();

    // Verify Table Row Headers
    await expect(productPage.energyKjRowHeader).toBeVisible();
    await expect(productPage.energyKcalRowHeader).toBeVisible();
    await expect(productPage.fatRowHeader).toBeVisible();
    await expect(productPage.saturatesRowHeader).toBeVisible();
    await expect(productPage.carbohydrateRowHeader).toBeVisible();
    await expect(productPage.sugarsRowHeader).toBeVisible();
    await expect(productPage.proteinRowHeader).toBeVisible();
    await expect(productPage.saltRowHeader).toBeVisible();

    // Verify Per 100g Column Values are present and contain numeric data
    await expect(productPage.energyKj100g).toBeVisible();
    await expect(productPage.energyKj100g).not.toHaveText('');
    await expect(productPage.energyKj100g).toContainText(/\d+kJ/);
    await expect(productPage.energyKcal100g).toBeVisible();
    await expect(productPage.energyKcal100g).not.toHaveText('');
    await expect(productPage.energyKcal100g).toContainText(/\d+kcal/);
    await expect(productPage.fat100g).toBeVisible();
    await expect(productPage.fat100g).not.toHaveText('');
    await expect(productPage.fat100g).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.saturates100g).toBeVisible();
    await expect(productPage.saturates100g).not.toHaveText('');
    await expect(productPage.saturates100g).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.carbohydrate100g).toBeVisible();
    await expect(productPage.carbohydrate100g).not.toHaveText('');
    await expect(productPage.carbohydrate100g).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.sugars100g).toBeVisible();
    await expect(productPage.sugars100g).not.toHaveText('');
    await expect(productPage.sugars100g).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.protein100g).toBeVisible();
    await expect(productPage.protein100g).not.toHaveText('');
    await expect(productPage.protein100g).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.salt100g).toBeVisible();
    await expect(productPage.salt100g).not.toHaveText('');
    await expect(productPage.salt100g).toContainText(/\d+(\.\d+)?g/);

    // Verify Per Portion Column Values are present and contain numeric data
    await expect(productPage.energyKjPortion).toBeVisible();
    await expect(productPage.energyKjPortion).not.toHaveText('');
    await expect(productPage.energyKjPortion).toContainText(/\d+kJ/);
    await expect(productPage.energyKcalPortion).toBeVisible();
    await expect(productPage.energyKcalPortion).not.toHaveText('');
    await expect(productPage.energyKcalPortion).toContainText(/\d+kcal/);
    await expect(productPage.fatPortion).toBeVisible();
    await expect(productPage.fatPortion).not.toHaveText('');
    await expect(productPage.fatPortion).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.saturatesPortion).toBeVisible();
    await expect(productPage.saturatesPortion).not.toHaveText('');
    await expect(productPage.saturatesPortion).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.carbohydratePortion).toBeVisible();
    await expect(productPage.carbohydratePortion).not.toHaveText('');
    await expect(productPage.carbohydratePortion).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.sugarsPortion).toBeVisible();
    await expect(productPage.sugarsPortion).not.toHaveText('');
    await expect(productPage.sugarsPortion).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.proteinPortion).toBeVisible();
    await expect(productPage.proteinPortion).not.toHaveText('');
    await expect(productPage.proteinPortion).toContainText(/\d+(\.\d+)?g/);
    await expect(productPage.saltPortion).toBeVisible();
    await expect(productPage.saltPortion).not.toHaveText('');
    await expect(productPage.saltPortion).toContainText(/\d+(\.\d+)?g/);

    // Verify Allergen Information
    await expect(productPage.allergenInformation).toBeVisible();

    // Verify Allergen Guide Button
    await expect(productPage.allergenGuideButton).toBeVisible();
    await expect(productPage.allergenGuideButton).toHaveText('Our Allergen Guide');

    // Verify Allergen Disclaimer
    await expect(productPage.allergenDisclaimer).toContainText('specific allergen information by product recipe');
    await expect(page.locator('text=More detailed information can be found in our allergen guide below')).toBeVisible();
}