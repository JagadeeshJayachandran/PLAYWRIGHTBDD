import { setWorldConstructor, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

class PlaywrightWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  videoPath?: string;

  constructor(options: IWorldOptions) {
    // No need to call super(options) since we're not extending World
  }

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext({
      recordVideo: {
        dir: path.join(process.cwd(), 'test-results', 'videos'),
        size: { width: 1280, height: 720 }
      }
    });
    this.page = await this.context.newPage();
  }

  async close() {
    if (this.page) {
      // Wait for video to be saved
      const video = this.page.video();
      if (video) {
        const videoPath = await video.path();
        this.videoPath = videoPath;
      }
      await this.page.close();
    }
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(PlaywrightWorld);
export { PlaywrightWorld };
