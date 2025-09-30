import { type Locator, type Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    // Product Header Elements
    readonly productTitle: Locator;
    readonly productImage: Locator;
    readonly productDescription: Locator;

    // Nutritional Summary Section
    readonly nutritionalSummaryContainer: Locator;
    readonly energyValuekJ: Locator;
    readonly energyValuekcal: Locator;
    readonly fatValue: Locator;
    readonly saturatesValue: Locator;
    readonly sugarValue: Locator;
    readonly saltValue: Locator;
    readonly energyPercentage: Locator;
    readonly fatPercentage: Locator;
    readonly saturatesPercentage: Locator;
    readonly sugarPercentage: Locator;
    readonly saltPercentage: Locator;

    // Nutritional Information Table
    readonly nutritionalInformationTitle: Locator;
    readonly nutritionalTable: Locator;
    readonly typicalValuesColumn: Locator;
    readonly typicalValuesColumnOneOnPage: Locator;
    readonly per100Column: Locator;
    readonly per100ColumnOneOnPage: Locator;
    readonly perPortionColumn: Locator;
    
    // Nutritional Table Rows
    readonly energyKjRowHeader: Locator;
    readonly energyKcalRowHeader: Locator;
    readonly fatRowHeader: Locator;
    readonly saturatesRowHeader: Locator;
    readonly carbohydrateRowHeader: Locator;
    readonly sugarsRowHeader: Locator;
    readonly proteinRowHeader: Locator;
    readonly saltRowHeader: Locator;

    // Per 100g Column Values
    readonly energyKj100g: Locator;
    readonly energyKcal100g: Locator;
    readonly fat100g: Locator;
    readonly saturates100g: Locator;
    readonly carbohydrate100g: Locator;
    readonly sugars100g: Locator;
    readonly protein100g: Locator;
    readonly salt100g: Locator;

    // Per Portion Column Values
    readonly energyKjPortion: Locator;
    readonly energyKcalPortion: Locator;
    readonly fatPortion: Locator;
    readonly saturatesPortion: Locator;
    readonly carbohydratePortion: Locator;
    readonly sugarsPortion: Locator;
    readonly proteinPortion: Locator;
    readonly saltPortion: Locator;

    // Allergen Information
    readonly allergenSection: Locator;
    readonly allergenInformation: Locator;
    readonly allergenGuideButton: Locator;
    readonly allergenDisclaimer: Locator;

    // Reference Intake Information
    readonly referenceIntakeText: Locator;

    constructor(page: Page) {
        this.page = page;

        // Product Header Elements
        this.productTitle = page.locator('h1, h2').first();
        this.productImage = page.locator('img').nth(6); // Adjusted to select the 7th image on the page
        this.productDescription = page.locator('p').first();

        // Nutritional Summary Section
        this.nutritionalSummaryContainer = page.locator('[class*="nutrition"], [class*="summary"]').first();
        this.energyValuekJ = page.locator('text=/\\d+kJ/').first();
        this.energyValuekcal = page.locator('text=/\\d+kcal/').first();
        this.fatValue = page.locator('text=/\\d+g.*Fat|Fat.*\\d+g/i').first();
        this.saturatesValue = page.locator('text=/\\d+g.*Saturates|Saturates.*\\d+g/i').first();
        this.sugarValue = page.locator('text=/\\d+g.*Sugar|Sugar.*\\d+g/i').first();
        this.saltValue = page.locator('text=/\\d+g.*Salt|Salt.*\\d+g/i').first();
        this.energyPercentage = page.locator('text=/\\d+%/').first();
        this.fatPercentage = page.locator('text=/\\d+%/').nth(1);
        this.saturatesPercentage = page.locator('text=/\\d+%/').nth(2);
        this.sugarPercentage = page.locator('text=/\\d+%/').nth(3);
        this.saltPercentage = page.locator('text=/\\d+%/').nth(4);

        // Nutritional Information Table
        this.nutritionalInformationTitle = page.locator('text=/Nutritional Information/i');
        this.nutritionalTable = page.locator('table, [class*="nutrition-table"], [class*="nutritional"]');
        this.typicalValuesColumn = page.locator('text=Typical values').nth(1);
        this.typicalValuesColumnOneOnPage = page.locator('text=Typical values');
        this.per100Column = page.locator('text=/Per 100g|100ml/i').nth(1);
        this.per100ColumnOneOnPage = page.locator('text=/Per 100g|100ml/i');
        this.perPortionColumn = page.locator('text=/Per portion/i');

        // Nutritional Table Rows
        this.energyKjRowHeader = page.locator('table tr:has-text("Energy kJ") td').nth(1);
        this.energyKcalRowHeader = page.locator('table tr:has-text("Energy kcal") td').nth(1);
        this.fatRowHeader = page.locator('table tr:has-text("Fat") td').nth(1);
        this.saturatesRowHeader = page.locator('table tr:has-text("of which Saturates") td').nth(1);
        this.carbohydrateRowHeader = page.locator('table tr:has-text("Carbohydrate") td').nth(1);
        this.sugarsRowHeader = page.locator('table tr:has-text("of which Sugars") td').nth(1);
        this.proteinRowHeader = page.locator('table tr:has-text("Protein") td').nth(1);
        this.saltRowHeader = page.locator('table tr:has-text("Salt") td').nth(1);

        // Per 100g Column Values - targeting cells in the Per 100g column
        this.energyKj100g = page.locator('table tr:has-text("Energy kJ") td').nth(2);
        this.energyKcal100g = page.locator('table tr:has-text("Energy kcal") td').nth(2);
        this.fat100g = page.locator('table tr:has-text("Fat") td').nth(2);
        this.saturates100g = page.locator('table tr:has-text("of which Saturates") td').nth(2);
        this.carbohydrate100g = page.locator('table tr:has-text("Carbohydrate") td').nth(2);
        this.sugars100g = page.locator('table tr:has-text("of which Sugars") td').nth(2);
        this.protein100g = page.locator('table tr:has-text("Protein") td').nth(2);
        this.salt100g = page.locator('table tr:has-text("Salt") td').nth(2);

        // Per Portion Column Values - targeting cells in the Per portion column
        this.energyKjPortion = page.locator('table tr:has-text("Energy kJ") td').nth(3);
        this.energyKcalPortion = page.locator('table tr:has-text("Energy kcal") td').nth(3);
        this.fatPortion = page.locator('table tr:has-text("Fat") td').nth(3);
        this.saturatesPortion = page.locator('table tr:has-text("of which Saturates") td').nth(3);
        this.carbohydratePortion = page.locator('table tr:has-text("Carbohydrate") td').nth(3);
        this.sugarsPortion = page.locator('table tr:has-text("of which Sugars") td').nth(3);
        this.proteinPortion = page.locator('table tr:has-text("Protein") td').nth(3);
        this.saltPortion = page.locator('table tr:has-text("Salt") td').nth(3);

        // Allergen Information
        this.allergenSection = page.locator('[class*="allergen"], text=/Allergens/i').first();
        this.allergenInformation = page.locator('text=/Allergens.*:/i');
        this.allergenGuideButton = page.getByRole('link', { name: 'Our Allergen Guide' })
        this.allergenDisclaimer = page.locator('text=/specific allergen information/i');

        // Reference Intake Information
        this.referenceIntakeText = page.locator('text=of an adult\’s reference intake');
    }

}