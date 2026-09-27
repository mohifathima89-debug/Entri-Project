import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async checkout() {
    await this.page.click('img[alt="Cart"]');
    await this.page.waitForSelector('text=PROCEED TO CHECKOUT', { timeout: 5000 });
    await this.page.click('text=PROCEED TO CHECKOUT');
  }
}
