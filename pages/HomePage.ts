import { Page } from '@playwright/test';
import { ENV } from '../utils/envLoader';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto(ENV.APP_URL);
    await this.page.waitForSelector('.products', { timeout: 5000 });
  }

  async searchProduct(product: string) {
    await this.page.fill('.search-keyword', product);
    await this.page.press('.search-keyword', 'Enter');
    await this.page.waitForTimeout(1000); // allow results to refresh
  }
}
