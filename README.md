# brief-greggs-menu
QA Engineer Test Brief: Greggs.com Menu Testing public repo

# Installation instructions
Steps to run these playwright tests with allure reporting.

- Install playwright
```bash
`npm install --save-dev @playwright/test`
```

- Install Allure reporter 
```bash
npm install --save-dev @playwright/test allure-playwright
```

- Install @axe-core/playwright for accessbility tests
```bash
npm i @axe-core/playwright
```

# Running instructions locally
- To runs the end-to-end tests. 

```bash
npx playwright test
```

- To view allure reports from these tests, once ran;

```bash
allure serve allure-results
```
I have uploaded test results to the repo already so this can be done straight way once downloaded to the PC.

# What I Tested 

In this example of greggs.com menu testing, the areas tested were;
- Navigation Bar Item Visibility, to ensure users links to pages in the menu were visible 
- Navigation Bar Item Navigation, verifying the urls, verifying the page contents are as expected of that links related to the menu
- Testing of the UI on the menu page - searchbox, filters and carosuel funcitionality
- Testing of each indivdual menu item to ensure the links lead to the correct product
- Testing of each product page to ensure the expected data populates the pages
- Tested the menu and a singular product page for accessbility issues through the axe package

# Why I chose my approach
I broke down the "menu" into 3 seperate testing "blocks" 
1. The Navbar Menu controls
2. The Menu Appearance, filters and navigation
3. The product pages and their data

The nav bar controls testing was done to ensure that the users are able to easily navigate to the desired part of the menu they are looking for.

The Menu testing was done to ensure the menu could be navigation and all expected links and UI elements were present.

As I don't have access to product data other than what is seen on the site, I took an approach of to verify that the expected data exists on the product pages - instead of specfifc data, the goal was to check that the data exists and therefore the page is populating as expected. 

# Assumptions or limitations
- Assuming all the data on the production site of greggs is correct
- Automated testing for accessbility isn't a catch all, so manual testing for accessibility is highly recommended as only manu issues can only be found manually. I would use "Accessibility Insights for Web" for this case. 
- Unable to have them running in CI/CD pipelines
- Utilised Claude to assist in test replication and cookies setup handling



