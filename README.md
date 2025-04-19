# Playwright BDD Automation Framework

This project is a complete end-to-end automation testing framework using Playwright, Cucumber (BDD), and TypeScript.

## Features
- Playwright test runner with TypeScript
- Cucumber (BDD) for Gherkin feature files
- Page Object Model structure
- Environment-based configuration (staging, production)
- Custom HTML reporting (see `reports/cucumber-report.html`)
- Reusable helper methods
- Screenshots and video recording for each scenario
- Example feature: Launches https://www.google.com and checks the title

## Folder Structure
```
configs/           # Environment configs
features/          # Gherkin feature files
pages/             # Page Object Model classes
reports/           # HTML/Cucumber reports
step-definitions/  # Step definitions and hooks
test-results/      # Screenshots and videos
utils/             # Helper utilities
```

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the main BDD test:
   ```sh
   npm run test
   ```
3. View the HTML report:
   ```sh
   open reports/cucumber-report.html
   ```

## Scripts
- `npm run test` — Run the main BDD scenario
- `npm run test:bdd` — Run all BDD tests
- `npm run test:bdd:staging` — Run tests with staging config
- `npm run test:bdd:prod` — Run tests with production config
- `npm run test:bdd:tag` — Run tests by tag
- `npm run test:bdd:file` — Run the example feature file

## Notes
- Screenshots and videos are saved in `test-results/` after each run.
- The HTML report is generated at `reports/cucumber-report.html`.

---

Feel free to extend this framework with more features, page objects, and scenarios!
