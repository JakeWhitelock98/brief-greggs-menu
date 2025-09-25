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


