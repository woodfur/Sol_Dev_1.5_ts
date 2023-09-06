import { chromium, Browser, Page } from "playwright";

let browser: Browser;
let page: Page;

beforeAll(async () => {
  // Launch a new browser instance and create a new page
  browser = await chromium.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  // Close the browser after all tests are done
  await browser.close();
});

describe("Login Test", () => {
  it("should login with Google", async () => {
    // Navigate to your app's login page
    await page.goto("http://localhost:3000/login");

    // Click the login button that opens the Web3Auth modal (e.g., Google login)
    await page.click("login-button");

    // Wait for the Google login selector to appear in the modal
    await page.waitForSelector("your-selector-for-google-button");

    // Click the Google login button in the modal
    await page.click("your-selector-for-google-button");

    // You may need to handle Google's login flow here

    // After successful login, you can assert that the user is logged in
    const userIsLoggedIn = await page.waitForSelector(
      "your-selector-for-logged-in-element"
    );

    // Example assertion
    expect(userIsLoggedIn).toBeTruthy();
  });
});
