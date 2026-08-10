const { test, expect } = require("@playwright/test");

test("Handling automation", async ({ page }) => {
  try {
    await page.goto("https://www.saucedemo.cm/");

    await page.getByPlaceholder("Username").fill("vision_pro");
  } catch (error) {
    console.error("Sorry, there is some error: ", error.message);
    throw error;
  }
});
