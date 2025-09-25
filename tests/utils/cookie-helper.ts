import fs from 'fs';
import path from 'path';
import { BrowserContext } from '@playwright/test';

// Define paths for cookies
const COOKIES_DIR = path.join(__dirname, '..', '..', 'cookies');
const CHROMIUM_COOKIES = path.join(COOKIES_DIR, 'chromium-cookies.json');
const FIREFOX_COOKIES = path.join(COOKIES_DIR, 'firefox-cookies.json');
const WEBKIT_COOKIES = path.join(COOKIES_DIR, 'webkit-cookies.json');

/**
 * Load cookies into a browser context based on the browser name
 * @param context - The Playwright browser context
 * @param browserName - The name of the browser ('chromium', 'firefox', 'webkit')
 */
export async function loadCookies(context: BrowserContext, browserName: string): Promise<void> {
  let cookiesPath: string;
  
  switch (browserName.toLowerCase()) {
    case 'chromium':
    case 'chrome':
      cookiesPath = CHROMIUM_COOKIES;
      break;
    case 'firefox':
      cookiesPath = FIREFOX_COOKIES;
      break;
    case 'webkit':
    case 'safari':
      cookiesPath = WEBKIT_COOKIES;
      break;
    default:
      console.warn(`Unknown browser: ${browserName}, defaulting to chromium cookies`);
      cookiesPath = CHROMIUM_COOKIES;
  }
  
  if (fs.existsSync(cookiesPath)) {
    try {
      const cookies = JSON.parse(fs.readFileSync(cookiesPath, 'utf-8'));
      await context.addCookies(cookies);
      console.log(`Loaded ${cookies.length} cookies for ${browserName}`);
    } catch (error) {
      console.error(`Failed to load cookies for ${browserName}:`, error);
    }
  } else {
    console.warn(`No cookies found for ${browserName} at ${cookiesPath}`);
    console.log('Run the setup tests first to generate cookies: npx playwright test --project=setup');
  }
}

/**
 * Check if cookies exist for a specific browser
 * @param browserName - The name of the browser
 * @returns true if cookies exist, false otherwise
 */
export function cookiesExist(browserName: string): boolean {
  let cookiesPath: string;
  
  switch (browserName.toLowerCase()) {
    case 'chromium':
    case 'chrome':
      cookiesPath = CHROMIUM_COOKIES;
      break;
    case 'firefox':
      cookiesPath = FIREFOX_COOKIES;
      break;
    case 'webkit':
    case 'safari':
      cookiesPath = WEBKIT_COOKIES;
      break;
    default:
      cookiesPath = CHROMIUM_COOKIES;
  }
  
  return fs.existsSync(cookiesPath);
}

/**
 * Delete cookies for a specific browser (useful for refreshing cookies)
 * @param browserName - The name of the browser
 */
export function deleteCookies(browserName: string): void {
  let cookiesPath: string;
  
  switch (browserName.toLowerCase()) {
    case 'chromium':
    case 'chrome':
      cookiesPath = CHROMIUM_COOKIES;
      break;
    case 'firefox':
      cookiesPath = FIREFOX_COOKIES;
      break;
    case 'webkit':
    case 'safari':
      cookiesPath = WEBKIT_COOKIES;
      break;
    default:
      cookiesPath = CHROMIUM_COOKIES;
  }
  
  if (fs.existsSync(cookiesPath)) {
    fs.unlinkSync(cookiesPath);
    console.log(`Deleted cookies for ${browserName}`);
  }
}