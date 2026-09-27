import { Page } from '@playwright/test';
import { ENV } from '../utils/envLoader';

export class CheckoutPage {
  constructor(private page: Page) {}

  async placeOrder() {
    await this.page.click('text=Place Order');
    await this.page.selectOption('select', { label: ENV.COUNTRY });
    await this.page.check('input[type="checkbox"]');
    await this.page.click('text=Proceed');
  }
}
