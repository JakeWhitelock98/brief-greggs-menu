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
    readonly per100gColumn: Locator;
    readonly perPortionColumn: Locator;
    
    // Nutritional Table Rows
    readonly energyKjRow: Locator;
    readonly energyKcalRow: Locator;
    readonly fatRow: Locator;
    readonly saturatesRow: Locator;
    readonly carbohydrateRow: Locator;
    readonly sugarsRow: Locator;
    readonly proteinRow: Locator;
    readonly saltRow: Locator;

    // Allergen Information
    readonly allergenSection: Locator;
    readonly allergenLabel: Locator;
    readonly allergenInformation: Locator;
    readonly allergenGuideButton: Locator;
    readonly allergenDisclaimer: Locator;

    // Reference Intake Information
    readonly referenceIntakeText: Locator;
    readonly typicalValuesText: Locator;

    constructor(page: Page) {
        this.page = page;

        // Product Header Elements
        this.productTitle = page.locator('h1, h2').first();
        this.productImage = page.locator('img').first();
        this.productDescription = page.locator('p').first();

        // Nutritional Summary Section
        this.nutritionalSummaryContainer = page.locator('[class*="nutrition"], [class*="summary"]').first();
        this.energyValuekJ = page.locator('text=/\\d+kcal|\\d+kJ/').first();
        this.energyValuekcal = page.locator('text=/\\d+kcal|\\d+kJ/').first();
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
        this.typicalValuesColumn = page.locator('text=/Typical values/i');
        this.per100gColumn = page.locator('text=/Per 100g/i');
        this.perPortionColumn = page.locator('text=/Per portion/i');

        // Nutritional Table Rows
        this.energyKjRow = page.locator('text=/Energy.*kJ|kJ/i');
        this.energyKcalRow = page.locator('text=/Energy.*kcal|kcal/i');
        this.fatRow = page.locator('text=/^Fat$/i');
        this.saturatesRow = page.locator('text=/of which Saturates/i');
        this.carbohydrateRow = page.locator('text=/Carbohydrate/i');
        this.sugarsRow = page.locator('text=/of which Sugars/i');
        this.proteinRow = page.locator('text=/Protein/i');
        this.saltRow = page.locator('text=/^Salt$/i');

        // Allergen Information
        this.allergenSection = page.locator('[class*="allergen"], text=/Allergens/i').first();
        this.allergenLabel = page.locator('text=/Allergens/i');
        this.allergenInformation = page.locator('text=/N\\/A|Soya|wheat|milk|eggs|nuts/i');
        this.allergenGuideButton = page.locator('text=/Our Allergen Guide/i, button:has-text("Allergen")');
        this.allergenDisclaimer = page.locator('text=/specific allergen information/i');

        // Reference Intake Information
        this.referenceIntakeText = page.locator('text=/of an adult\'s reference intake/i');
        this.typicalValuesText = page.locator('text=/Typical values.*per 100/i');
    }

    // Get the product title text
    async getProductTitle(): Promise<string> {
        return await this.productTitle.textContent() || '';
    }

    // Get allergen information text
    async getAllergenInfo(): Promise<string> {
        return await this.allergenInformation.textContent() || '';
    }

    // Check if nutritional information table is visible
    async isNutritionalTableVisible(): Promise<boolean> {
        return await this.nutritionalTable.isVisible();
    }

    // Get all nutritional values as an object
    async getNutritionalValues(): Promise<{[key: string]: string}> {
        const values: {[key: string]: string} = {};
        
        try {
            values.enegrykJ = await this.energyValuekJ.textContent() || '';
            values.enegrykcal = await this.energyValuekcal.textContent() || '';
            values.fat = await this.fatValue.textContent() || '';
            values.saturates = await this.saturatesValue.textContent() || '';
            values.sugar = await this.sugarValue.textContent() || '';
            values.salt = await this.saltValue.textContent() || '';
        } catch (error) {
            // Handle cases where elements might not be present
            console.log('Some nutritional values not found:', error);
        }
        
        return values;
    }
}