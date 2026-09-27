import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  timeout: 15000,

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],

  use: {
    baseURL: process.env.APP_URL || 'https://rahulshettyacademy.com/seleniumPractise/#/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },

projects: [
  { name: 'Chromium', use: { ...devices['Desktop Chrome'], channel: 'chrome' } }
  ]

});
