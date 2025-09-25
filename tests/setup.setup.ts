import { test as setup, expect, chromium, firefox, webkit } from '@playwright/test';
import path from 'path';
import fs from 'fs';

// Define paths for storing cookies for each browser
const COOKIES_DIR = path.join(__dirname, '..', 'cookies');
const CHROMIUM_COOKIES = path.join(COOKIES_DIR, 'chromium-cookies.json');
const FIREFOX_COOKIES = path.join(COOKIES_DIR, 'firefox-cookies.json');
const WEBKIT_COOKIES = path.join(COOKIES_DIR, 'webkit-cookies.json');

// Ensure cookies directory exists
if (!fs.existsSync(COOKIES_DIR)) {
  fs.mkdirSync(COOKIES_DIR, { recursive: true });
}

// Utility function to accept cookies and capture them
async function acceptCookiesAndStore(browserType: any, cookiesPath: string, browserName: string) {
  console.log(`Setting up cookies for ${browserName}...`);
  
  const browser = await browserType.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  // Navigate to Greggs website
  await page.goto('https://www.greggs.com/');
  
  // Wait for the page to load and cookie banner to appear
  await page.waitForLoadState('networkidle');
  
  // Try different selectors for the cookie acceptance button
  const cookieSelectors = [
    '[data-testid="accept-all-cookies"]',
    'button:has-text("Accept All Cookies")',
    'button:has-text("Accept all cookies")',
    'button:has-text("Accept All")',
    '#onetrust-accept-btn-handler',
    '.ot-sdk-show-settings',
    '[id*="accept"]',
    '[class*="accept"]'
  ];
  
  let cookieButtonFound = false;
  
  for (const selector of cookieSelectors) {
    try {
      const cookieButton = page.locator(selector);
      if (await cookieButton.isVisible({ timeout: 2000 })) {
        console.log(`Found cookie button with selector: ${selector}`);
        await cookieButton.click();
        cookieButtonFound = true;
        break;
      }
    } catch (error) {
      // Continue to next selector if this one fails
      continue;
    }
  }
  
  if (!cookieButtonFound) {
    console.log(`No cookie banner found for ${browserName}, or it was already accepted`);
  } else {
    // Wait a bit for cookies to be set
    await page.waitForTimeout(2000);
    console.log(`Successfully accepted cookies for ${browserName}`);
  }
  
  // Get all cookies from the context
  const cookies = await context.cookies();
  
  // Save cookies to file
  fs.writeFileSync(cookiesPath, JSON.stringify(cookies, null, 2));
  console.log(`Cookies saved for ${browserName} to ${cookiesPath}`);
  console.log(`Found ${cookies.length} cookies`);
  
  await browser.close();
}

// Setup function for Chromium
setup('setup chromium cookies', async () => {
  if (!fs.existsSync(CHROMIUM_COOKIES)) {
    await acceptCookiesAndStore(chromium, CHROMIUM_COOKIES, 'Chromium');
  } else {
    console.log('Chromium cookies already exist, skipping setup');
  }
});

// Setup function for Firefox  
setup('setup firefox cookies', async () => {
  if (!fs.existsSync(FIREFOX_COOKIES)) {
    await acceptCookiesAndStore(firefox, FIREFOX_COOKIES, 'Firefox');
  } else {
    console.log('Firefox cookies already exist, skipping setup');
  }
});

// Setup function for WebKit (Safari)
setup('setup webkit cookies', async () => {
  if (!fs.existsSync(WEBKIT_COOKIES)) {
    await acceptCookiesAndStore(webkit, WEBKIT_COOKIES, 'WebKit/Safari');
  } else {
    console.log('WebKit cookies already exist, skipping setup');
  }
});
  