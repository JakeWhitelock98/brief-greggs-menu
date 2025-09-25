# brief-greggs-menu
QA Engineer Test Brief: Greggs.com Menu Testing public repo

# Installation instructions
Steps to run these playwright tests with allure reporting.

- Install playwright
    Can be done through `npm init playwright@latest` or `npm install --save-dev @playwright/test`

- Install Allure reporter 
```bash
npm install --save-dev @playwright/test allure-playwright
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

# What I Tested 

In this example of greggs.com menu testing, the areas tested were;
- Navigation Bar Item Visibility, to ensure users links to pages in the menu were visible 
- Navigation Bar Item Navigation, verifying the urls, verifying the page contents are as expected of that links related to the menu
- Testing of the UI on the menu page, including filters modal
- Testing of each indivdual menu item to ensure expected elements and data are present 


