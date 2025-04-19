import { Given, Then, setDefaultTimeout, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import fs from 'fs';
import path from 'path';

let homePage: HomePage;

setDefaultTimeout(60 * 1000);

Before(async function () {
  // @ts-ignore
  await this.init();
});

After(async function (scenario) {
  // @ts-ignore
  if (this.page) {
    // Take screenshot on failure or always
    const screenshotPath = path.join(process.cwd(), 'test-results', `screenshot-${Date.now()}.png`);
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    // Attach screenshot to Cucumber report if supported
    if (this.attach) {
      const img = fs.readFileSync(screenshotPath);
      await this.attach(img, 'image/png');
    }
    // Save video if available
    const video = this.page.video && this.page.video();
    if (video) {
      const videoPath = await video.path();
      const destPath = path.join(process.cwd(), 'test-results', `video-${Date.now()}.webm`);
      fs.copyFileSync(videoPath, destPath);
    }
  }
  // @ts-ignore
  await this.close();
});

Given('I am on the home page', async function () {
  // @ts-ignore
  homePage = new HomePage(this.page);
  await homePage.goto();
});

Given('I am on the Google home page', async function () {
  // @ts-ignore
  await this.page.goto('https://www.google.com');
});

Then('the page title should contain {string}', async function (title: string) {
  // @ts-ignore
  const pageTitle = await this.page.title();
  expect(pageTitle).toContain(title);
});
