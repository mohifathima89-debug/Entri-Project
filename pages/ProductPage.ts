import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addToCart(product: string, qty: number) {
    // Locate product card by its title text
    const productCard = this.page.locator('.product').filter({
      has: this.page.locator('h4', { hasText: product })
    });

    // Find the ADD TO CART button inside that card
    const addButton = productCard.locator('button:has-text("ADD TO CART")');

    // Ensure the button is visible before clicking
    await addButton.first().waitFor({ state: 'visible', timeout: 5000 });

    // Click multiple times based on qty
    for (let i = 0; i < qty; i++) {
      await addButton.first().click();    
    }
  }
}
