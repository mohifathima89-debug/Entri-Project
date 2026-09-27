import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import scenarios from '../testData/scenarios.json';

for (const scenario of scenarios.scenarios) {
  test(`E2E Flow - ${scenario.description}`, async ({ page }) => {
    const home = new HomePage(page);
    const productPage = new ProductPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await test.step('Open homepage', async () => {
      await home.goto();
    });

    await test.step('Search and add products', async () => {
      for (const product of scenario.products) {
        await home.searchProduct(product.name);
        await productPage.addToCart(product.name, product.qty);
      }
    });

    await test.step('Checkout', async () => {
      await cart.checkout();
    });

    await test.step('Place order', async () => {
      await checkout.placeOrder();
    });

    await test.step('Validate order confirmation', async () => {
      await expect(page.locator('text=Your order has been placed successfully')).toBeVisible({ timeout: 5000 });
    });
  });
}
