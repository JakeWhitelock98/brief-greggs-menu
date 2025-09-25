# Greggs Cookie Management System

This project includes an automated cookie management system that handles the Greggs website cookie popup across Chrome, Firefox, and Safari browsers. This ensures that your tests don't need to manually accept cookies every time.

## How it works

The system consists of:

1. **Setup Tests** (`tests/setup.setup.ts`) - Automatically accept cookies and store them for each browser
2. **Cookie Helper** (`tests/utils/cookie-helper.ts`) - Utility functions to load saved cookies
3. **Playwright Configuration** - Setup projects that run before main tests

## Usage

### Running Setup (First Time)

Before running your main tests, you need to run the setup to accept cookies:

```powershell
# Run setup for all browsers
npx playwright test --project=setup-chromium
npx playwright test --project=setup-firefox  
npx playwright test --project=setup-webkit

# Or run all setup projects at once
npx playwright test *.setup.ts
```

This will:
- Launch each browser in headed mode
- Navigate to greggs.co.uk
- Automatically find and click the cookie acceptance button
- Save the resulting cookies to files in the `cookies/` directory

### Using Cookies in Tests

In your test files, import and use the `loadCookies` helper:

```typescript
import { test, expect } from '@playwright/test';
import { loadCookies } from './utils/cookie-helper';

test.describe('My Tests', () => {
    test.beforeEach(async ({ page, browserName }) => {
        // Load cookies before navigating - no more cookie popup!
        await loadCookies(page.context(), browserName);
        await page.goto('/');
    });

    test('My test', async ({ page }) => {
        // Your test code here - cookies are already accepted
    });
});
```

### Running Main Tests

Once setup is complete, run your main tests normally:

```powershell
# Run tests in all browsers
npx playwright test

# Run tests in specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

The main test projects have dependencies on the setup projects, so setup will run automatically if cookies don't exist.

## File Structure

```
cookies/
├── chromium-cookies.json    # Cookies for Chrome/Chromium
├── firefox-cookies.json     # Cookies for Firefox  
└── webkit-cookies.json      # Cookies for Safari/WebKit

tests/
├── setup.setup.ts           # Cookie setup tests
├── utils/
│   └── cookie-helper.ts     # Cookie management utilities
└── *.spec.ts               # Your main tests
```

## Refreshing Cookies

If you need to refresh the cookies (e.g., they've expired):

```powershell
# Delete existing cookies and re-run setup
rm -rf cookies/
npx playwright test *.setup.ts
```

Or use the helper function:

```typescript
import { deleteCookies } from './utils/cookie-helper';

// Delete cookies for specific browser
deleteCookies('chromium');
deleteCookies('firefox'); 
deleteCookies('webkit');
```

## Troubleshooting

### Cookie button not found
If the setup can't find the cookie acceptance button, it will log a message but continue. This might happen if:
- The cookie popup design has changed
- Cookies were already accepted in a previous session
- The site is being accessed from a region without cookie requirements

### Cookies not loading
If cookies aren't loading in your tests:
1. Check that the `cookies/` directory exists and contains JSON files
2. Ensure you're calling `loadCookies()` before `page.goto()`
3. Verify the browser name matches ('chromium', 'firefox', 'webkit')

### Running tests individually
If you run tests individually without the setup dependency:
```powershell
# This will warn about missing cookies
npx playwright test menuBar.spec.ts --project=chromium

# Run setup first, then your test
npx playwright test setup.setup.ts --project=setup-chromium
npx playwright test menuBar.spec.ts --project=chromium
```