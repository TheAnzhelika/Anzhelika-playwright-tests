# Playwright Automation Framework

## Overview

This repository showcases **Playwright automation tests** covering **API and UI testing** with structured and maintainable approaches. It includes tests for **CRUD** operations, various **assertion** techniques, and Login functionality implemented using both **Codegen** and the **POM** (Page Object Model) for better scalability. The goal is to demonstrate test automation skills by writing diverse tests in Playwright while ensuring robust test coverage.

## Tech Stack

- **Test Automation:** Playwright
- **Programming Language:** JavaScript
- **Assertions & Reporting:** Playwright's built-in assertion library & Allure Reporter
- **CI/CD Integration:** Integrated with GitHub Actions

## Features  

- **API Testing** – Covers CRUD operations in `apiTests.spec.js`  
- **Assertion Testing** – Demonstrates various assertion techniques in `assertionsHero.spec.js`  
- **UI Testing with Codegen** – Auto-generated Playwright tests for Login functionality in `codegenLoginHero.spec.js`  
- **UI Testing with Page Object Model (POM)** – Structured and maintainable Login tests in `loginHero.spec.js`

## How to Run Tests

1. Clone the Repository:
```sh
git clone https://github.com/TheAnzhelika/playwright-tests.git
```
2. Install Dependencies:
```sh
npm install
```
3. Run Tests:
```sh
npx playwright test
```

## Test Reporting

```sh
npx allure generate allure-results --clean && npx allure open
```

## Contact

For any questions or collaboration, reach out via https://www.linkedin.com/in/anzhelika-surab-370094175/
