import { type Locator, type Page } from '@playwright/test';

export class MenuPage {
    readonly page: Page;

    // General Menu Page Elements
    readonly bannerTitle: Locator;
    readonly bannerDescription: Locator;
    readonly searchBox: Locator;
    readonly filterbutton: Locator;
    readonly menuCarosuel: Locator;

    // Menu Carosuel Items
    readonly menuCarosuelAll: Locator;
    readonly menuCarosuelBreakfast: Locator;
    readonly menuCarosuelSavoryAndBakes: Locator;
    readonly menuCarosuelDrinksAndSnacks: Locator;
    readonly menuCarosuelSandwichesAndSalads: Locator;
    readonly menuCarosuelSweetTreats: Locator;
    readonly menuCarosuelHotFood: Locator;

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

    //Menu Headers
    readonly breakfastHeader: Locator;
    readonly savoryAndBakesHeader: Locator;
    readonly drinksAndSnacksHeader: Locator;
    readonly sandwichesAndSaladsHeader: Locator;
    readonly sweetTreatsHeader: Locator;
    readonly hotFoodHeader: Locator;

    //Menu Items - Breakfast
    readonly BaconBreakfastRoll: Locator;
    readonly SausageBreakfastRoll: Locator;
    readonly OmeletteBreakfastRoll: Locator;
    readonly VeganSausageBreakfastRoll: Locator;
    readonly BaconAndOmeletteBreakfastRoll: Locator;
    readonly BaconAndSausageBreakfastRoll: Locator;
    readonly SausageAndOmeletteBreakfastRoll: Locator;
    readonly BaconBreakfastBaguette: Locator;
    readonly SausageBreakfastBaguette: Locator;
    readonly OmeletteBreakfastBaguette: Locator;
    readonly BaconAndOmeletteBreakfastBaguette: Locator;
    readonly BaconAndSausageBreakfastBaguette: Locator;
    readonly SausageAndOmeletteBreakfastBaguette: Locator;
    readonly BaconAndCheeseWrap: Locator;
    readonly HashBrown2Pack: Locator;
    readonly PainAuChocolat: Locator;
    readonly AllButterCroissant: Locator;
    readonly SimplyCreamyPorridgeReadyToEat: Locator;
    readonly GoldenSyrupFlavourPorridgeReadyToEat: Locator;
    readonly AppleCinnamonFlavourPorridgeReadyToEat: Locator;

    //Menu Items - Savouries & Bakes
    readonly SausageRoll: Locator;
    readonly VeganSausageRoll: Locator;
    readonly CheeseAndOnionBake: Locator;
    readonly SteakBake: Locator;
    readonly ChickenBake: Locator;
    readonly SausageBeanAndCheeseMelt: Locator;
    readonly VeganLatticeStekFree: Locator;
    readonly FajitaChickenBake: Locator;
    readonly MargheritaPizza: Locator;
    readonly PepperoniPizza: Locator;
    readonly SpicyChickenPizza: Locator;

    //Menu Items - Drinks & Snacks
    readonly ReadyToDrinkLatte: Locator;
    readonly ReadyToDrinkCaramelLatte: Locator;
    readonly RegularAmericano: Locator;
    readonly LargeAmericano: Locator;
    readonly RegularCappuccino: Locator;
    readonly LargeCappuccino: Locator;
    readonly RegularLatte: Locator;
    readonly LargeLatte: Locator;
    readonly RegularCaramelLatte: Locator;
    readonly LargeCaramelLatte: Locator;
    readonly RegularVanillaLatte: Locator;
    readonly LargeVanillaLatte: Locator;
    readonly RegularPumpkinSpiceLatteNewRecipe: Locator;
    readonly LargePumpkinSpiceLatteNewRecipe: Locator;
    readonly RegularCaramelMocha: Locator;
    readonly LargeCaramelMocha: Locator;
    readonly RegularMocha: Locator;
    readonly LargeMocha: Locator;
    readonly RegularWhiteCoffee: Locator;
    readonly LargeWhiteCoffee: Locator;
    readonly FlatWhite: Locator;
    readonly Espresso: Locator;
    readonly RegularHotChocolate: Locator;
    readonly LargeHotChocolate: Locator;
    readonly RegularCaramelHotChocolate: Locator;
    readonly LargeCaramelHotChocolate: Locator;
    readonly RegularTea: Locator;
    readonly LargeTea: Locator;
    readonly RegularGreenTea: Locator;
    readonly RegularPeppermintTea: Locator;
    readonly SmallOrangeJuice: Locator;
    readonly LargeOrangeJuice: Locator;
    readonly FairtradeAppleJuice: Locator;
    readonly SmallStillWater: Locator;
    readonly LargeStillWater: Locator;
    readonly SparklingMangoAndPineapple: Locator;
    readonly SparklingRaspberryLemonade: Locator;
    readonly CaramelCrispyBar: Locator;
    readonly FruityFlapjack: Locator;
    readonly ThaiSweetChilliCrisps: Locator;
    readonly SeaSaltAndCiderVinegarCrisps: Locator;
    readonly MatureCheddarCheeseAndOnionCrisps: Locator;
    readonly FreeRangeEggPot: Locator;

    //Menu Items - Sandwiches & Salads
    readonly RoastChickenMayonnaiseBaguette: Locator;
    readonly HamAndCheeseBaguette: Locator;
    readonly MatureCheddarCheeseSaladBaguette: Locator;
    readonly SpicyChipotleChickenBaguette: Locator;
    readonly RoastChickenAndBaconClubBaguette: Locator;
    readonly TandooriChickenBaguette: Locator;
    readonly TunaCrunchBaguette: Locator;
    readonly CheeseAndOnionRoll: Locator;
    readonly SweetAndSpicyChickenOvalBite: Locator;
    readonly MatureCheddarCheesePloughmansOvalBite: Locator;
    readonly RoastChickenAndHoneyMustardMayoOvalBite: Locator;
    readonly TunaCrunchRoll: Locator;
    readonly HoneyRoastHamAndEggSaladRoll: Locator;
    readonly ChipotleChickenFlatbread: Locator;
    readonly RoastChickenSaladSandwich: Locator;
    readonly BLTSandwich: Locator;
    readonly TunaMayonnaiseAndCucumberSandwich: Locator;
    readonly FreeRangeEggMayoSandwich: Locator;
    readonly TunaPasta: Locator;
    readonly SmokyCajunRiceWithBBQChickenAndSweetcornFritters: Locator;
    readonly SweetPotatoBhajiAndRice: Locator;
    readonly PestoAndMozzarellaPasta: Locator;
    readonly ChickenAndBaconPasta: Locator;
    
    // Menu Items - Sweet Treats 
    readonly CaramelCustardDoughnut: Locator;
    readonly GlazedRingDoughnut: Locator;
    readonly JamDoughnut: Locator;
    readonly PinkJammieDoughnut: Locator;
    readonly SugarStrandDoughnut: Locator;
    readonly TripleChocolateDoughnut: Locator;
    readonly PumpkinSpiceDoughnutNewRecipe: Locator;
    readonly YumYum: Locator;
    readonly BelgianBun: Locator;
    readonly CreamEclair: Locator;
    readonly GingerbreadMan: Locator;
    readonly StarBiscuit: Locator;
    readonly JammyHeartBiscuit: Locator;
    readonly MilkChocolateCookie: Locator;
    readonly TripleChocolateCookie: Locator;
    readonly WhiteChocolateCookie: Locator;
    readonly TripleChocolateMuffin: Locator;
    readonly ToffeeFudgeMuffin: Locator;
    readonly NoveltyBun: Locator;
    readonly ChocolateBrownieBar: Locator;
    readonly CaramelShortbread4Pack: Locator;
    readonly MelonAndGrapeFruitPot: Locator;
    readonly FatFreeGreekStyleYoghurtWithStrawberryCompote: Locator;
    readonly AppleAndStrawberryFruitPot: Locator;
    
    // Menu Items - Hot Food
    readonly SixSliceMargheritaPizzaBox: Locator;
    readonly SixSlicePepperoniPizzaBox: Locator;
    readonly SixSlicePepperoniHotShotPizzaBox: Locator;
    readonly SixSliceSpicyChickenPizzaBox: Locator;
    readonly SixSliceSpicyVegPizzaBox: Locator;
    readonly SixSliceBBQChickenAndBaconPizzaBox: Locator;
    readonly SixSliceVeggieFeastPizzaBox: Locator;
    readonly SixSliceFirecrackerChickenPizzaBox: Locator;
    readonly FourSliceMargheritaPizzaBox: Locator;
    readonly FourSlicePepperoniHotShotPizzaBox: Locator;
    readonly FourSlicePepperoniPizzaBox: Locator;
    readonly FourSliceSpicyChickenPizzaBox: Locator;
    readonly FourSliceSpicyVegPizzaBox: Locator;
    readonly FourSliceBBQChickenAndBaconPizzaBox: Locator;
    readonly FourSliceVeggieFeastPizzaBox: Locator;
    readonly FourSliceChickenSweetcornAndRedOnionPizzaBox: Locator;
    readonly FourSliceFirecrackerChickenPizzaBox: Locator;
    readonly TwoSliceMargheritaPizzaBox: Locator;
    readonly TwoSlicePepperoniPizzaBox: Locator;
    readonly TwoSliceSpicyChickenPizzaBox: Locator;
    readonly TwoSlicePepperoniHotShotPizzaBox: Locator;
    readonly TwoSliceSpicyVegPizzaBox: Locator;
    readonly TwoSliceBBQChickenAndBaconPizzaBox: Locator;
    readonly TwoSliceVeggieFeastPizzaBox: Locator;
    readonly TwoSliceChickenSweetcornAndRedOnionPizzaBox: Locator;
    readonly TwoSliceFirecrackerChickenPizzaBox: Locator;
    readonly HotChocolateBrownies: Locator;
    readonly SouthernFriedPotatoWedges: Locator;
    readonly SouthernFriedChickenGoujons: Locator;
    readonly SpicyBBQChickenBites: Locator;
    readonly MozzarellaAndCheddarBites: Locator;
    readonly TomatoSoup: Locator;
    readonly HotHamAndCheeseBaguette: Locator;
    readonly HotSouthernFriedChickenBaguette: Locator;
    readonly AllDayBreakfastBaguette: Locator;
    readonly HotSpicyChipotleChickenBaguette: Locator;
    readonly HamAndCheeseToastieNewRecipe: Locator;
    readonly CheeseAndCaramelisedOnionToastie: Locator;
    readonly BBQChickenToastie: Locator;

    constructor(page: Page) {
        this.page = page;
        // General Menu Page Elements
        this.bannerTitle = page.getByText('OUR MENU');
        this.bannerDescription = page.getByText('Find your yummy');
        this.searchBox = page.getByRole('searchbox', { name: 'Search for a product' });
        this.filterbutton = page.locator('[data-test="filterButton"]');
        this.menuCarosuel = page.locator('[data-test="menuCarousel"]');

        // Menu Carosuel Items
        this.menuCarosuelAll = page.getByRole('button', { name: 'All', exact: true })
        this.menuCarosuelBreakfast = page.getByRole('button', { name: 'Breakfast' });
        this.menuCarosuelSavoryAndBakes = page.getByRole('button', { name: 'Savouries & Bakes' })
        this.menuCarosuelDrinksAndSnacks = page.getByRole('button', { name: 'Drinks & Snacks' });
        this.menuCarosuelSandwichesAndSalads = page.getByRole('button', { name: 'Sandwiches & Salads' });
        this.menuCarosuelSweetTreats = page.getByRole('button', { name: 'Sweet Treats' });
        this.menuCarosuelHotFood = page.getByRole('button', { name: 'Hot Food' });

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

        //Menu Headers
        this.breakfastHeader = page.getByRole('heading', { name: 'Breakfast', exact: true });
        this.savoryAndBakesHeader = page.getByRole('heading', { name: 'Savouries & Bakes' });
        this.drinksAndSnacksHeader = page.getByRole('heading', { name: 'Drinks & Snacks' });
        this.sandwichesAndSaladsHeader = page.getByRole('heading', { name: 'Sandwiches & Salads' })
        this.sweetTreatsHeader = page.getByRole('heading', { name: 'Sweet Treats' })
        this.hotFoodHeader = page.getByRole('heading', { name: 'Hot Food' })

        //Menu Items - Breakfast
        this.BaconBreakfastRoll = page.getByRole('link', { name: 'Bacon Breakfast Roll' });
        this.SausageBreakfastRoll = page.getByRole('link', { name: 'Sausage Breakfast Roll' });
        this.OmeletteBreakfastRoll = page.getByRole('link', { name: 'Omelette Breakfast Roll' });
        this.VeganSausageBreakfastRoll = page.getByRole('link', { name: 'Vegan Sausage Breakfast Roll' });
        this.BaconAndOmeletteBreakfastRoll = page.getByRole('link', { name: 'Bacon and Omelette Breakfast Roll' });
        this.BaconAndSausageBreakfastRoll = page.getByRole('link', { name: 'Bacon and Sausage Breakfast Roll' });
        this.SausageAndOmeletteBreakfastRoll = page.getByRole('link', { name: 'Sausage and Omelette Breakfast Roll' });
        this.BaconBreakfastBaguette = page.getByRole('link', { name: 'Bacon Breakfast Baguette' });
        this.SausageBreakfastBaguette = page.getByRole('link', { name: 'Sausage Breakfast Baguette' });
        this.OmeletteBreakfastBaguette = page.getByRole('link', { name: 'Omelette Breakfast Baguette' });
        this.BaconAndOmeletteBreakfastBaguette = page.getByRole('link', { name: 'Bacon and Omelette Breakfast Baguette' });
        this.BaconAndSausageBreakfastBaguette = page.getByRole('link', { name: 'Bacon and Sausage Breakfast Baguette' });
        this.SausageAndOmeletteBreakfastBaguette = page.getByRole('link', { name: 'Sausage and Omelette Breakfast Baguette' });
        this.BaconAndCheeseWrap = page.getByRole('link', { name: 'Bacon and Cheese Wrap' });
        this.HashBrown2Pack = page.getByRole('link', { name: 'Hash Brown (2 pack)' });
        this.PainAuChocolat = page.getByRole('link', { name: 'Pain au Chocolat' });
        this.AllButterCroissant = page.getByRole('link', { name: 'All Butter Croissant' });
        this.SimplyCreamyPorridgeReadyToEat = page.getByRole('link', { name: 'Simply Creamy Porridge (Ready to eat)' });
        this.GoldenSyrupFlavourPorridgeReadyToEat = page.getByRole('link', { name: 'Golden Syrup Flavour Porridge (Ready to eat)' });
        this.AppleCinnamonFlavourPorridgeReadyToEat = page.getByRole('link', { name: 'Apple & Cinnamon Flavour Porridge (Ready to eat)' });
        
        //Menu Items - Savouries & Bakes
        this.SausageRoll = page.getByRole('link', { name: 'Sausage Roll' });
        this.VeganSausageRoll = page.getByRole('link', { name: 'Vegan Sausage Roll' });
        this.CheeseAndOnionBake = page.getByRole('link', { name: 'Cheese & Onion Bake' });
        this.SteakBake = page.getByRole('link', { name: 'Steak Bake' });
        this.ChickenBake = page.getByRole('link', { name: 'Chicken Bake' });
        this.SausageBeanAndCheeseMelt = page.getByRole('link', { name: 'Sausage, Bean & Cheese Melt' });
        this.VeganLatticeStekFree = page.getByRole('link', { name: 'Vegan Lattice (Steak-Free)' });
        this.FajitaChickenBake = page.getByRole('link', { name: 'Fajita Chicken Bake' });
        this.MargheritaPizza = page.getByRole('link', { name: 'Margherita Pizza' });
        this.PepperoniPizza = page.getByRole('link', { name: 'Pepperoni Pizza' });
        this.SpicyChickenPizza = page.getByRole('link', { name: 'Spicy Chicken Pizza' });
        
        //Menu Items - Drinks & Snacks
        this.ReadyToDrinkLatte = page.getByRole('link', { name: 'Ready to Drink Latte' });
        this.ReadyToDrinkCaramelLatte = page.getByRole('link', { name: 'Ready to Drink Caramel Latte' });
        this.RegularAmericano = page.getByRole('link', { name: 'Regular Americano' });
        this.LargeAmericano = page.getByRole('link', { name: 'Large Americano' });
        this.RegularCappuccino = page.getByRole('link', { name: 'Regular Cappuccino' });
        this.LargeCappuccino = page.getByRole('link', { name: 'Large Cappuccino' });
        this.RegularLatte = page.getByRole('link', { name: 'Regular Latte' });
        this.LargeLatte = page.getByRole('link', { name: 'Large Latte' });
        this.RegularCaramelLatte = page.getByRole('link', { name: 'Regular Caramel Latte' });
        this.LargeCaramelLatte = page.getByRole('link', { name: 'Large Caramel Latte' });
        this.RegularVanillaLatte = page.getByRole('link', { name: 'Regular Vanilla Latte' });
        this.LargeVanillaLatte = page.getByRole('link', { name: 'Large Vanilla Latte' });
        this.RegularPumpkinSpiceLatteNewRecipe = page.getByRole('link', { name: 'Regular Pumpkin Spice Latte (New Recipe)' });
        this.LargePumpkinSpiceLatteNewRecipe = page.getByRole('link', { name: 'Large Pumpkin Spice Latte (New Recipe)' });
        this.RegularCaramelMocha = page.getByRole('link', { name: 'Regular Caramel Mocha' });
        this.LargeCaramelMocha = page.getByRole('link', { name: 'Large Caramel Mocha' });
        this.RegularMocha = page.getByRole('link', { name: 'Regular Mocha' });
        this.LargeMocha = page.getByRole('link', { name: 'Large Mocha' });
        this.RegularWhiteCoffee = page.getByRole('link', { name: 'Regular White Coffee' });
        this.LargeWhiteCoffee = page.getByRole('link', { name: 'Large White Coffee' });
        this.FlatWhite = page.getByRole('link', { name: 'Flat White' });
        this.Espresso = page.getByRole('link', { name: 'Espresso' });
        this.RegularHotChocolate = page.getByRole('link', { name: 'Regular Hot Chocolate' });
        this.LargeHotChocolate = page.getByRole('link', { name: 'Large Hot Chocolate' });
        this.RegularCaramelHotChocolate = page.getByRole('link', { name: 'Regular Caramel Hot Chocolate' });
        this.LargeCaramelHotChocolate = page.getByRole('link', { name: 'Large Caramel Hot Chocolate' });
        this.RegularTea = page.getByRole('link', { name: 'Regular Tea' });
        this.LargeTea = page.getByRole('link', { name: 'Large Tea' });
        this.RegularGreenTea = page.getByRole('link', { name: 'Regular Green Tea' });
        this.RegularPeppermintTea = page.getByRole('link', { name: 'Regular Peppermint Tea' });
        this.SmallOrangeJuice = page.getByRole('link', { name: 'Small Orange Juice' });
        this.LargeOrangeJuice = page.getByRole('link', { name: 'Large Orange Juice' });
        this.FairtradeAppleJuice = page.getByRole('link', { name: 'Fairtrade Apple Juice' });
        this.SmallStillWater = page.getByRole('link', { name: 'Small Still Water' });
        this.LargeStillWater = page.getByRole('link', { name: 'Large Still Water' });
        this.SparklingMangoAndPineapple = page.getByRole('link', { name: 'Sparkling Mango & Pineapple' });
        this.SparklingRaspberryLemonade = page.getByRole('link', { name: 'Sparkling Raspberry Lemonade' });
        this.CaramelCrispyBar = page.getByRole('link', { name: 'Caramel Crispy Bar' });
        this.FruityFlapjack = page.getByRole('link', { name: 'Fruity Flapjack' });
        this.ThaiSweetChilliCrisps = page.getByRole('link', { name: 'Thai Sweet Chilli Crisps' });
        this.SeaSaltAndCiderVinegarCrisps = page.getByRole('link', { name: 'Sea Salt & Cider Vinegar Crisps' });
        this.MatureCheddarCheeseAndOnionCrisps = page.getByRole('link', { name: 'Mature Cheddar Cheese & Onion Crisps' });
        this.FreeRangeEggPot = page.getByRole('link', { name: 'Free Range Egg Pot' });
        
        //Menu Items - Sandwiches & Salads
        this.RoastChickenMayonnaiseBaguette = page.getByRole('link', { name: 'Roast Chicken Mayonnaise Baguette' });
        this.HamAndCheeseBaguette = page.getByRole('link', { name: 'Ham and Cheese Baguette' });
        this.MatureCheddarCheeseSaladBaguette = page.getByRole('link', { name: 'Mature Cheddar Cheese Salad Baguette' });
        this.SpicyChipotleChickenBaguette = page.getByRole('link', { name: 'Spicy Chipotle Chicken Baguette' });
        this.RoastChickenAndBaconClubBaguette = page.getByRole('link', { name: 'Roast Chicken and Bacon Club Baguette' });
        this.TandooriChickenBaguette = page.getByRole('link', { name: 'Tandoori Chicken Baguette' });
        this.TunaCrunchBaguette = page.getByRole('link', { name: 'Tuna Crunch Baguette' });
        this.CheeseAndOnionRoll = page.getByRole('link', { name: 'Cheese & Onion Roll' });
        this.SweetAndSpicyChickenOvalBite = page.getByRole('link', { name: 'Sweet & Spicy Chicken Oval Bite' });
        this.MatureCheddarCheesePloughmansOvalBite = page.getByRole('link', { name: 'Mature Cheddar Cheese Ploughmans Oval Bite' });
        this.RoastChickenAndHoneyMustardMayoOvalBite = page.getByRole('link', { name: 'Roast Chicken & Honey Mustard Mayo Oval Bite' });
        this.TunaCrunchRoll = page.getByRole('link', { name: 'Tuna Crunch Roll' });
        this.HoneyRoastHamAndEggSaladRoll = page.getByRole('link', { name: 'Honey Roast Ham and Egg Salad Roll' });
        this.ChipotleChickenFlatbread = page.getByRole('link', { name: 'Chipotle Chicken Flatbread' });
        this.RoastChickenSaladSandwich = page.getByRole('link', { name: 'Roast Chicken Salad Sandwich' });
        this.BLTSandwich = page.getByRole('link', { name: 'BLT Sandwich' });
        this.TunaMayonnaiseAndCucumberSandwich = page.getByRole('link', { name: 'Tuna Mayonnaise & Cucumber Sandwich' });
        this.FreeRangeEggMayoSandwich = page.getByRole('link', { name: 'Free Range Egg Mayo Sandwich' });
        this.TunaPasta = page.getByRole('link', { name: 'Tuna Pasta' });
        this.SmokyCajunRiceWithBBQChickenAndSweetcornFritters = page.getByRole('link', { name: 'Smoky Cajun Rice with BBQ Chicken & Sweetcorn Fritters' });
        this.SweetPotatoBhajiAndRice = page.getByRole('link', { name: 'Sweet Potato Bhaji & Rice' });
        this.PestoAndMozzarellaPasta = page.getByRole('link', { name: 'Pesto and Mozzarella Pasta' });
        this.ChickenAndBaconPasta = page.getByRole('link', { name: 'Chicken & Bacon Pasta' });
        
        // Menu Items - Sweet Treats
        this.CaramelCustardDoughnut = page.getByRole('link', { name: 'Caramel Custard Doughnut' });
        this.GlazedRingDoughnut = page.getByRole('link', { name: 'Glazed Ring Doughnut' });
        this.JamDoughnut = page.getByRole('link', { name: 'Jam Doughnut' });
        this.PinkJammieDoughnut = page.getByRole('link', { name: 'Pink Jammie Doughnut' });
        this.SugarStrandDoughnut = page.getByRole('link', { name: 'Sugar Strand Doughnut' });
        this.TripleChocolateDoughnut = page.getByRole('link', { name: 'Triple Chocolate Doughnut' });
        this.PumpkinSpiceDoughnutNewRecipe = page.getByRole('link', { name: 'Pumpkin Spice Doughnut (New Recipe)' });
        this.YumYum = page.getByRole('link', { name: 'Yum Yum' });
        this.BelgianBun = page.getByRole('link', { name: 'Belgian Bun' });
        this.CreamEclair = page.getByRole('link', { name: 'Cream Éclair' });
        this.GingerbreadMan = page.getByRole('link', { name: 'Gingerbread Man' });
        this.StarBiscuit = page.getByRole('link', { name: 'Star Biscuit' });
        this.JammyHeartBiscuit = page.getByRole('link', { name: 'Jammy Heart Biscuit' });
        this.MilkChocolateCookie = page.getByRole('link', { name: 'Milk Chocolate Cookie' });
        this.TripleChocolateCookie = page.getByRole('link', { name: 'Triple Chocolate Cookie' });
        this.WhiteChocolateCookie = page.getByRole('link', { name: 'White Chocolate Cookie' });
        this.TripleChocolateMuffin = page.getByRole('link', { name: 'Triple Chocolate Muffin' });
        this.ToffeeFudgeMuffin = page.getByRole('link', { name: 'Toffee Fudge Muffin' });
        this.NoveltyBun = page.getByRole('link', { name: 'Novelty Bun' });
        this.ChocolateBrownieBar = page.getByRole('link', { name: 'Chocolate Brownie Bar' });
        this.CaramelShortbread4Pack = page.getByRole('link', { name: 'Caramel Shortbread 4 pack' });
        this.MelonAndGrapeFruitPot = page.getByRole('link', { name: 'Melon & Grape Fruit Pot' });
        this.FatFreeGreekStyleYoghurtWithStrawberryCompote = page.getByRole('link', { name: 'Fat Free Greek Style Yoghurt with Strawberry Compote' });
        this.AppleAndStrawberryFruitPot = page.getByRole('link', { name: 'Apple & Strawberry Fruit Pot' });
        
        // Menu Items - Hot Food
        this.SixSliceMargheritaPizzaBox = page.getByRole('link', { name: '6 Slice Margherita Pizza Box' });
        this.SixSlicePepperoniPizzaBox = page.getByRole('link', { name: '6 Slice Pepperoni Pizza Box' });
        this.SixSlicePepperoniHotShotPizzaBox = page.getByRole('link', { name: '6 Slice Pepperoni Hot Shot Pizza Box' });
        this.SixSliceSpicyChickenPizzaBox = page.getByRole('link', { name: '6 Slice Spicy Chicken Pizza Box' });
        this.SixSliceSpicyVegPizzaBox = page.getByRole('link', { name: '6 Slice Spicy Veg Pizza Box' });
        this.SixSliceBBQChickenAndBaconPizzaBox = page.getByRole('link', { name: '6 Slice BBQ Chicken & Bacon Pizza Box' });
        this.SixSliceVeggieFeastPizzaBox = page.getByRole('link', { name: '6 Slice Veggie Feast Pizza Box' });
        this.SixSliceFirecrackerChickenPizzaBox = page.getByRole('link', { name: '6 Slice Firecracker Chicken Pizza Box' });
        this.FourSliceMargheritaPizzaBox = page.getByRole('link', { name: '4 Slice Margherita Pizza Box' });
        this.FourSlicePepperoniHotShotPizzaBox = page.getByRole('link', { name: '4 Slice Pepperoni Hot Shot Pizza Box' });
        this.FourSlicePepperoniPizzaBox = page.getByRole('link', { name: '4 Slice Pepperoni Pizza Box' });
        this.FourSliceSpicyChickenPizzaBox = page.getByRole('link', { name: '4 Slice Spicy Chicken Pizza Box' });
        this.FourSliceSpicyVegPizzaBox = page.getByRole('link', { name: '4 Slice Spicy Veg Pizza Box' });
        this.FourSliceBBQChickenAndBaconPizzaBox = page.getByRole('link', { name: '4 Slice BBQ Chicken & Bacon Pizza Box' });
        this.FourSliceVeggieFeastPizzaBox = page.getByRole('link', { name: '4 Slice Veggie Feast Pizza Box' });
        this.FourSliceChickenSweetcornAndRedOnionPizzaBox = page.getByRole('link', { name: '4 Slice Chicken, Sweetcorn & Red Onion Pizza Box' });
        this.FourSliceFirecrackerChickenPizzaBox = page.getByRole('link', { name: '4 Slice Firecracker Chicken Pizza Box' });
        this.TwoSliceMargheritaPizzaBox = page.getByRole('link', { name: '2 Slice Margherita Pizza Box' });
        this.TwoSlicePepperoniPizzaBox = page.getByRole('link', { name: '2 Slice Pepperoni Pizza Box' });
        this.TwoSliceSpicyChickenPizzaBox = page.getByRole('link', { name: '2 Slice Spicy Chicken Pizza Box' });
        this.TwoSlicePepperoniHotShotPizzaBox = page.getByRole('link', { name: '2 Slice Pepperoni Hot Shot Pizza Box' });
        this.TwoSliceSpicyVegPizzaBox = page.getByRole('link', { name: '2 Slice Spicy Veg Pizza Box' });
        this.TwoSliceBBQChickenAndBaconPizzaBox = page.getByRole('link', { name: '2 Slice BBQ Chicken & Bacon Pizza Box' });
        this.TwoSliceVeggieFeastPizzaBox = page.getByRole('link', { name: '2 Slice Veggie Feast Pizza Box' });
        this.TwoSliceChickenSweetcornAndRedOnionPizzaBox = page.getByRole('link', { name: '2 Slice Chicken, Sweetcorn & Red Onion Pizza Box' });
        this.TwoSliceFirecrackerChickenPizzaBox = page.getByRole('link', { name: '2 Slice Firecracker Chicken Pizza Box' });
        this.HotChocolateBrownies = page.getByRole('link', { name: 'Hot Chocolate Brownies' });
        this.SouthernFriedPotatoWedges = page.getByRole('link', { name: 'Southern Fried Potato Wedges' });
        this.SouthernFriedChickenGoujons = page.getByRole('link', { name: 'Southern Fried Chicken Goujons' });
        this.SpicyBBQChickenBites = page.getByRole('link', { name: 'Spicy BBQ Chicken Bites' });
        this.MozzarellaAndCheddarBites = page.getByRole('link', { name: 'Mozzarella & Cheddar Bites' });
        this.TomatoSoup = page.getByRole('link', { name: 'Tomato Soup' });
        this.HotHamAndCheeseBaguette = page.getByRole('link', { name: 'Hot Ham and Cheese Baguette' });
        this.HotSouthernFriedChickenBaguette = page.getByRole('link', { name: 'Hot Southern Fried Chicken Baguette' });
        this.AllDayBreakfastBaguette = page.getByRole('link', { name: 'All Day Breakfast Baguette' });
        this.HotSpicyChipotleChickenBaguette = page.getByRole('link', { name: 'Hot Spicy Chipotle Chicken Baguette' });
        this.HamAndCheeseToastieNewRecipe = page.getByRole('link', { name: 'Ham & Cheese Toastie (New Recipe)' });
        this.CheeseAndCaramelisedOnionToastie = page.getByRole('link', { name: 'Cheese & Caramelised Onion Toastie' });
        this.BBQChickenToastie = page.getByRole('link', { name: 'BBQ Chicken Toastie' });
        
    }
}