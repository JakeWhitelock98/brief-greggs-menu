import { type Locator, type Page } from '@playwright/test';

export class MenuPage {
    readonly page: Page;

    // General Menu Page Elements
    readonly bannerTitle: Locator;
    readonly bannerDescription: Locator;
    readonly searchBox: Locator;
    readonly filterButton: Locator;
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
        this.filterButton = page.locator('[data-test="filterButton"]');
        this.menuCarosuel = page.locator('[data-component="PillFilters"]');

        // Menu Carosuel Items
        this.menuCarosuelAll = page.getByRole('button', { name: 'All', exact: true })
        this.menuCarosuelBreakfast = page.getByRole('button', { name: 'Breakfast' });
        this.menuCarosuelSavoryAndBakes = page.getByRole('button', { name: 'Savouries & Bakes' })
        this.menuCarosuelDrinksAndSnacks = page.getByRole('button', { name: 'Drinks & Snacks' });
        this.menuCarosuelSandwichesAndSalads = page.getByRole('button', { name: 'Sandwiches & Salads' });
        this.menuCarosuelSweetTreats = page.getByRole('button', { name: 'Sweet Treats' });
        this.menuCarosuelHotFood = page.getByRole('button', { name: 'Hot Food' });

        //Filter modal general elements
        this.filterModal = page.getByRole('dialog');
        this.filterModalTitle = page.getByRole('heading', { name: 'Filters'});
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
        this.savoryAndBakesCategoryCheckbox = page.getByRole('checkbox', { name: 'Savouries & Bakes' });
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
        this.BaconBreakfastRoll = page.getByRole('img', { name: 'Bacon Breakfast Roll', exact: true });
        this.SausageBreakfastRoll = page.getByRole('img', { name: 'Sausage Breakfast Roll', exact: true });
        this.OmeletteBreakfastRoll = page.getByRole('img', { name: 'Omelette Breakfast Roll', exact: true });
        this.VeganSausageBreakfastRoll = page.getByRole('img', { name: 'Vegan Sausage Breakfast Roll', exact: true });
        this.BaconAndOmeletteBreakfastRoll = page.getByRole('img', { name: 'Bacon and Omelette Breakfast Roll', exact: true });
        this.BaconAndSausageBreakfastRoll = page.getByRole('img', { name: 'Bacon and Sausage Breakfast Roll', exact: true });
        this.SausageAndOmeletteBreakfastRoll = page.getByRole('img', { name: 'Sausage and Omelette Breakfast Roll', exact: true });
        this.BaconBreakfastBaguette = page.getByRole('img', { name: 'Bacon Breakfast Baguette', exact: true });
        this.SausageBreakfastBaguette = page.getByRole('img', { name: 'Sausage Breakfast Baguette', exact: true });
        this.OmeletteBreakfastBaguette = page.getByRole('img', { name: 'Omelette Breakfast Baguette', exact: true });
        this.BaconAndOmeletteBreakfastBaguette = page.getByRole('img', { name: 'Bacon and Omelette Breakfast Baguette', exact: true });
        this.BaconAndSausageBreakfastBaguette = page.getByRole('img', { name: 'Bacon and Sausage Breakfast Baguette', exact: true });
        this.SausageAndOmeletteBreakfastBaguette = page.getByRole('img', { name: 'Sausage and Omelette Breakfast Baguette', exact: true });
        this.BaconAndCheeseWrap = page.getByRole('img', { name: 'Bacon and Cheese Wrap', exact: true });
        this.HashBrown2Pack = page.getByRole('img', { name: 'Hash Brown (2 pack)', exact: true });
        this.PainAuChocolat = page.getByRole('img', { name: 'Pain au Chocolat', exact: true });
        this.AllButterCroissant = page.getByRole('img', { name: 'All Butter Croissant', exact: true });
        this.SimplyCreamyPorridgeReadyToEat = page.getByRole('img', { name: 'Simply Creamy Porridge (Ready to eat)', exact: true });
        this.GoldenSyrupFlavourPorridgeReadyToEat = page.getByRole('img', { name: 'Golden Syrup Flavour Porridge (Ready to eat)', exact: true });
        this.AppleCinnamonFlavourPorridgeReadyToEat = page.getByRole('img', { name: 'Apple & Cinnamon Flavour Porridge (Ready to eat)', exact: true });
        
        //Menu Items - Savouries & Bakes
        this.SausageRoll = page.getByRole('img', { name: 'Sausage Roll', exact: true });
        this.VeganSausageRoll = page.getByRole('img', { name: 'Vegan Sausage Roll', exact: true });
        this.CheeseAndOnionBake = page.getByRole('img', { name: 'Cheese & Onion Bake', exact: true });
        this.SteakBake = page.getByRole('img', { name: 'Steak Bake', exact: true });
        this.ChickenBake = page.getByRole('img', { name: 'Chicken Bake', exact: true });
        this.SausageBeanAndCheeseMelt = page.getByRole('img', { name: 'Sausage, Bean & Cheese Melt', exact: true });
        this.VeganLatticeStekFree = page.getByRole('img', { name: 'Vegan Lattice (Steak-Free)', exact: true });
        this.FajitaChickenBake = page.getByRole('img', { name: 'Fajita Chicken Bake', exact: true });
        this.MargheritaPizza = page.getByRole('img', { name: 'Margherita Pizza', exact: true });
        this.PepperoniPizza = page.getByRole('img', { name: 'Pepperoni Pizza', exact: true });
        this.SpicyChickenPizza = page.getByRole('img', { name: 'Spicy Chicken Pizza', exact: true });
        
        //Menu Items - Drinks & Snacks
        this.ReadyToDrinkLatte = page.getByRole('img', { name: 'Ready to Drink Latte', exact: true });
        this.ReadyToDrinkCaramelLatte = page.getByRole('img', { name: 'Ready to Drink Caramel Latte', exact: true });
        this.RegularAmericano = page.getByRole('img', { name: 'Regular Americano', exact: true });
        this.LargeAmericano = page.getByRole('img', { name: 'Large Americano', exact: true });
        this.RegularCappuccino = page.getByRole('img', { name: 'Regular Cappuccino', exact: true });
        this.LargeCappuccino = page.getByRole('img', { name: 'Large Cappuccino', exact: true });
        this.RegularLatte = page.getByRole('img', { name: 'Regular Latte', exact: true });
        this.LargeLatte = page.getByRole('img', { name: 'Large Latte', exact: true });
        this.RegularCaramelLatte = page.getByRole('img', { name: 'Regular Caramel Latte', exact: true });
        this.LargeCaramelLatte = page.getByRole('img', { name: 'Large Caramel Latte', exact: true });
        this.RegularVanillaLatte = page.getByRole('img', { name: 'Regular Vanilla Latte', exact: true });
        this.LargeVanillaLatte = page.getByRole('img', { name: 'Large Vanilla Latte', exact: true });
        this.RegularPumpkinSpiceLatteNewRecipe = page.getByRole('img', { name: 'Regular Pumpkin Spice Latte (New Recipe)', exact: true });
        this.LargePumpkinSpiceLatteNewRecipe = page.getByRole('img', { name: 'Large Pumpkin Spice Latte (New Recipe)', exact: true });
        this.RegularCaramelMocha = page.getByRole('img', { name: 'Regular Caramel Mocha', exact: true });
        this.LargeCaramelMocha = page.getByRole('img', { name: 'Large Caramel Mocha', exact: true });
        this.RegularMocha = page.getByRole('img', { name: 'Regular Mocha', exact: true });
        this.LargeMocha = page.getByRole('img', { name: 'Large Mocha', exact: true });
        this.RegularWhiteCoffee = page.getByRole('img', { name: 'Regular White Coffee', exact: true });
        this.LargeWhiteCoffee = page.getByRole('img', { name: 'Large White Coffee', exact: true });
        this.FlatWhite = page.getByRole('img', { name: 'Flat White', exact: true });
        this.Espresso = page.getByRole('img', { name: 'Espresso', exact: true });
        this.RegularHotChocolate = page.getByRole('img', { name: 'Regular Hot Chocolate', exact: true });
        this.LargeHotChocolate = page.getByRole('img', { name: 'Large Hot Chocolate', exact: true });
        this.RegularCaramelHotChocolate = page.getByRole('img', { name: 'Regular Caramel Hot Chocolate', exact: true });
        this.LargeCaramelHotChocolate = page.getByRole('img', { name: 'Large Caramel Hot Chocolate', exact: true });
        this.RegularTea = page.getByRole('img', { name: 'Regular Tea', exact: true });
        this.LargeTea = page.getByRole('img', { name: 'Large Tea', exact: true });
        this.RegularGreenTea = page.getByRole('img', { name: 'Regular Green Tea', exact: true });
        this.RegularPeppermintTea = page.getByRole('img', { name: 'Regular Peppermint Tea', exact: true });
        this.SmallOrangeJuice = page.getByRole('img', { name: 'Small Orange Juice', exact: true });
        this.LargeOrangeJuice = page.getByRole('img', { name: 'Large Orange Juice', exact: true });
        this.FairtradeAppleJuice = page.getByRole('img', { name: 'Fairtrade Apple Juice', exact: true });
        this.SmallStillWater = page.getByRole('img', { name: 'Small Still Water', exact: true });
        this.LargeStillWater = page.getByRole('img', { name: 'Large Still Water', exact: true });
        this.SparklingMangoAndPineapple = page.getByRole('img', { name: 'Sparkling Mango & Pineapple', exact: true });
        this.SparklingRaspberryLemonade = page.getByRole('img', { name: 'Sparkling Raspberry Lemonade', exact: true });
        this.CaramelCrispyBar = page.getByRole('img', { name: 'Caramel Crispy Bar', exact: true });
        this.FruityFlapjack = page.getByRole('img', { name: 'Fruity Flapjack', exact: true });
        this.ThaiSweetChilliCrisps = page.getByRole('img', { name: 'Thai Sweet Chilli Crisps', exact: true });
        this.SeaSaltAndCiderVinegarCrisps = page.getByRole('img', { name: 'Sea Salt & Cider Vinegar Crisps', exact: true });
        this.MatureCheddarCheeseAndOnionCrisps = page.getByRole('img', { name: 'Mature Cheddar Cheese & Onion Crisps', exact: true });
        this.FreeRangeEggPot = page.getByRole('img', { name: 'Free Range Egg Pot', exact: true });
        
        //Menu Items - Sandwiches & Salads
        this.RoastChickenMayonnaiseBaguette = page.getByRole('img', { name: 'Roast Chicken Mayonnaise Baguette', exact: true });
        this.HamAndCheeseBaguette = page.getByRole('img', { name: 'Ham and Cheese Baguette', exact: true });
        this.MatureCheddarCheeseSaladBaguette = page.getByRole('img', { name: 'Mature Cheddar Cheese Salad Baguette', exact: true });
        this.SpicyChipotleChickenBaguette = page.getByRole('img', { name: 'Spicy Chipotle Chicken Baguette', exact: true });
        this.RoastChickenAndBaconClubBaguette = page.getByRole('img', { name: 'Roast Chicken and Bacon Club Baguette', exact: true });
        this.TandooriChickenBaguette = page.getByRole('img', { name: 'Tandoori Chicken Baguette', exact: true });
        this.TunaCrunchBaguette = page.getByRole('img', { name: 'Tuna Crunch Baguette', exact: true });
        this.CheeseAndOnionRoll = page.getByRole('img', { name: 'Cheese & Onion Roll', exact: true });
        this.SweetAndSpicyChickenOvalBite = page.getByRole('img', { name: 'Sweet & Spicy Chicken Oval Bite', exact: true });
        this.MatureCheddarCheesePloughmansOvalBite = page.getByRole('img', { name: 'Mature Cheddar Cheese Ploughmans Oval Bite', exact: true });
        this.RoastChickenAndHoneyMustardMayoOvalBite = page.getByRole('img', { name: 'Roast Chicken & Honey Mustard Mayo Oval Bite', exact: true });
        this.TunaCrunchRoll = page.getByRole('img', { name: 'Tuna Crunch Roll', exact: true });
        this.HoneyRoastHamAndEggSaladRoll = page.getByRole('img', { name: 'Honey Roast Ham and Egg Salad Roll', exact: true });
        this.ChipotleChickenFlatbread = page.getByRole('img', { name: 'Chipotle Chicken Flatbread', exact: true });
        this.RoastChickenSaladSandwich = page.getByRole('img', { name: 'Roast Chicken Salad Sandwich', exact: true });
        this.BLTSandwich = page.getByRole('img', { name: 'BLT Sandwich', exact: true });
        this.TunaMayonnaiseAndCucumberSandwich = page.getByRole('img', { name: 'Tuna Mayonnaise & Cucumber Sandwich', exact: true });
        this.FreeRangeEggMayoSandwich = page.getByRole('img', { name: 'Free Range Egg Mayo Sandwich', exact: true });
        this.TunaPasta = page.getByRole('img', { name: 'Tuna Pasta', exact: true });
        this.SmokyCajunRiceWithBBQChickenAndSweetcornFritters = page.getByRole('img', { name: 'Smoky Cajun Rice with BBQ Chicken & Sweetcorn Fritters', exact: true });
        this.SweetPotatoBhajiAndRice = page.getByRole('img', { name: 'Sweet Potato Bhaji & Rice', exact: true });
        this.PestoAndMozzarellaPasta = page.getByRole('img', { name: 'Pesto and Mozzarella Pasta', exact: true });
        this.ChickenAndBaconPasta = page.getByRole('img', { name: 'Chicken & Bacon Pasta', exact: true });
        
        // Menu Items - Sweet Treats
        this.CaramelCustardDoughnut = page.getByRole('img', { name: 'Caramel Custard Doughnut', exact: true });
        this.GlazedRingDoughnut = page.getByRole('img', { name: 'Glazed Ring Doughnut', exact: true });
        this.JamDoughnut = page.getByRole('img', { name: 'Jam Doughnut', exact: true });
        this.PinkJammieDoughnut = page.getByRole('img', { name: 'Pink Jammie Doughnut', exact: true });
        this.SugarStrandDoughnut = page.getByRole('img', { name: 'Sugar Strand Doughnut', exact: true });
        this.TripleChocolateDoughnut = page.getByRole('img', { name: 'Triple Chocolate Doughnut', exact: true });
        this.PumpkinSpiceDoughnutNewRecipe = page.getByRole('img', { name: 'Pumpkin Spice Doughnut (New Recipe)', exact: true });
        this.YumYum = page.getByRole('img', { name: 'Yum Yum', exact: true });
        this.BelgianBun = page.getByRole('img', { name: 'Belgian Bun', exact: true });
        this.CreamEclair = page.getByRole('img', { name: 'Cream Éclair', exact: true });
        this.GingerbreadMan = page.getByRole('img', { name: 'Gingerbread Man', exact: true });
        this.StarBiscuit = page.getByRole('img', { name: 'Star Biscuit', exact: true });
        this.JammyHeartBiscuit = page.getByRole('img', { name: 'Jammy Heart Biscuit', exact: true });
        this.MilkChocolateCookie = page.getByRole('img', { name: 'Milk Chocolate Cookie', exact: true });
        this.TripleChocolateCookie = page.getByRole('img', { name: 'Triple Chocolate Cookie', exact: true });
        this.WhiteChocolateCookie = page.getByRole('img', { name: 'White Chocolate Cookie', exact: true });
        this.TripleChocolateMuffin = page.getByRole('img', { name: 'Triple Chocolate Muffin', exact: true });
        this.ToffeeFudgeMuffin = page.getByRole('img', { name: 'Toffee Fudge Muffin', exact: true });
        this.NoveltyBun = page.getByRole('img', { name: 'Novelty Bun', exact: true });
        this.ChocolateBrownieBar = page.getByRole('img', { name: 'Chocolate Brownie Bar', exact: true });
        this.CaramelShortbread4Pack = page.getByRole('img', { name: 'Caramel Shortbread 4 pack', exact: true });
        this.MelonAndGrapeFruitPot = page.getByRole('img', { name: 'Melon & Grape Fruit Pot', exact: true });
        this.FatFreeGreekStyleYoghurtWithStrawberryCompote = page.getByRole('img', { name: 'Fat Free Greek Style Yoghurt with Strawberry Compote', exact: true });
        this.AppleAndStrawberryFruitPot = page.getByRole('img', { name: 'Apple & Strawberry Fruit Pot', exact: true });
        
        // Menu Items - Hot Food
        this.SixSliceMargheritaPizzaBox = page.getByRole('img', { name: '6 Slice Margherita Pizza Box', exact: true });
        this.SixSlicePepperoniPizzaBox = page.getByRole('img', { name: '6 Slice Pepperoni Pizza Box', exact: true });
        this.SixSlicePepperoniHotShotPizzaBox = page.getByRole('img', { name: '6 Slice Pepperoni Hot Shot Pizza Box', exact: true });
        this.SixSliceSpicyChickenPizzaBox = page.getByRole('img', { name: '6 Slice Spicy Chicken Pizza Box', exact: true });
        this.SixSliceSpicyVegPizzaBox = page.getByRole('img', { name: '6 Slice Spicy Veg Pizza Box', exact: true });
        this.SixSliceBBQChickenAndBaconPizzaBox = page.getByRole('img', { name: '6 Slice BBQ Chicken & Bacon Pizza Box', exact: true });
        this.SixSliceVeggieFeastPizzaBox = page.getByRole('img', { name: '6 Slice Veggie Feast Pizza Box', exact: true });
        this.SixSliceFirecrackerChickenPizzaBox = page.getByRole('img', { name: '6 Slice Firecracker Chicken Pizza Box', exact: true });
        this.FourSliceMargheritaPizzaBox = page.getByRole('img', { name: '4 Slice Margherita Pizza Box', exact: true });
        this.FourSlicePepperoniHotShotPizzaBox = page.getByRole('img', { name: '4 Slice Pepperoni Hot Shot Pizza Box', exact: true });
        this.FourSlicePepperoniPizzaBox = page.getByRole('img', { name: '4 Slice Pepperoni Pizza Box', exact: true });
        this.FourSliceSpicyChickenPizzaBox = page.getByRole('img', { name: '4 Slice Spicy Chicken Pizza Box', exact: true });
        this.FourSliceSpicyVegPizzaBox = page.getByRole('img', { name: '4 Slice Spicy Veg Pizza Box', exact: true });
        this.FourSliceBBQChickenAndBaconPizzaBox = page.getByRole('img', { name: '4 Slice BBQ Chicken & Bacon Pizza Box', exact: true });
        this.FourSliceVeggieFeastPizzaBox = page.getByRole('img', { name: '4 Slice Veggie Feast Pizza Box', exact: true });
        this.FourSliceChickenSweetcornAndRedOnionPizzaBox = page.getByRole('img', { name: '4 Slice Chicken, Sweetcorn & Red Onion Pizza Box', exact: true });
        this.FourSliceFirecrackerChickenPizzaBox = page.getByRole('img', { name: '4 Slice Firecracker Chicken Pizza Box', exact: true });
        this.TwoSliceMargheritaPizzaBox = page.getByRole('img', { name: '2 Slice Margherita Pizza Box', exact: true });
        this.TwoSlicePepperoniPizzaBox = page.getByRole('img', { name: '2 Slice Pepperoni Pizza Box', exact: true });
        this.TwoSliceSpicyChickenPizzaBox = page.getByRole('img', { name: '2 Slice Spicy Chicken Pizza Box', exact: true });
        this.TwoSlicePepperoniHotShotPizzaBox = page.getByRole('img', { name: '2 Slice Pepperoni Hot Shot Pizza Box', exact: true });
        this.TwoSliceSpicyVegPizzaBox = page.getByRole('img', { name: '2 Slice Spicy Veg Pizza Box', exact: true });
        this.TwoSliceBBQChickenAndBaconPizzaBox = page.getByRole('img', { name: '2 Slice BBQ Chicken & Bacon Pizza Box', exact: true });
        this.TwoSliceVeggieFeastPizzaBox = page.getByRole('img', { name: '2 Slice Veggie Feast Pizza Box', exact: true });
        this.TwoSliceChickenSweetcornAndRedOnionPizzaBox = page.getByRole('img', { name: '2 Slice Chicken, Sweetcorn & Red Onion Pizza Box', exact: true });
        this.TwoSliceFirecrackerChickenPizzaBox = page.getByRole('img', { name: '2 Slice Firecracker Chicken Pizza Box', exact: true });
        this.HotChocolateBrownies = page.getByRole('img', { name: 'Hot Chocolate Brownies', exact: true });
        this.SouthernFriedPotatoWedges = page.getByRole('img', { name: 'Southern Fried Potato Wedges', exact: true });
        this.SouthernFriedChickenGoujons = page.getByRole('img', { name: 'Southern Fried Chicken Goujons', exact: true });
        this.SpicyBBQChickenBites = page.getByRole('img', { name: 'Spicy BBQ Chicken Bites', exact: true });
        this.MozzarellaAndCheddarBites = page.getByRole('img', { name: 'Mozzarella & Cheddar Bites', exact: true });
        this.TomatoSoup = page.getByRole('img', { name: 'Tomato Soup', exact: true });
        this.HotHamAndCheeseBaguette = page.getByRole('img', { name: 'Hot Ham and Cheese Baguette', exact: true });
        this.HotSouthernFriedChickenBaguette = page.getByRole('img', { name: 'Hot Southern Fried Chicken Baguette', exact: true });
        this.AllDayBreakfastBaguette = page.getByRole('img', { name: 'All Day Breakfast Baguette', exact: true });
        this.HotSpicyChipotleChickenBaguette = page.getByRole('img', { name: 'Hot Spicy Chipotle Chicken Baguette', exact: true });
        this.HamAndCheeseToastieNewRecipe = page.getByRole('img', { name: 'Ham & Cheese Toastie (New Recipe)', exact: true });
        this.CheeseAndCaramelisedOnionToastie = page.getByRole('img', { name: 'Cheese & Caramelised Onion Toastie', exact: true });
        this.BBQChickenToastie = page.getByRole('img', { name: 'BBQ Chicken Toastie', exact: true });
        
    }

    async goToMenu() {
        await this.page.goto('/menu');
    }
}