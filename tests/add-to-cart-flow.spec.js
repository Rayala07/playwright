const { test, expect } = require("@playwright/test");

test.use({ testIdAttribute: "data-test" });

test("Ecomm-automation", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("visual_user");

  await page.getByPlaceholder("Password").fill("secret_sauce");

  await page.getByRole("button", { name: "Login" }).click();

  // Assertion: 1
  await expect(page).toHaveURL(/inventory/);

  //   Action: 2
  await page.getByTestId("add-to-cart-sauce-labs-bolt-t-shirt").click();

  //   Action: 3
  await page.getByTestId("shopping-cart-link").click();

  //   Assertion: 1
  await expect(page).toHaveURL(/cart/);

  // Assertion: 2
  const cartItem = await page.getByTestId("inventory-item-name");

  await expect(cartItem).toHaveText("Sauce Labs Bolt T-Shirt");
});

