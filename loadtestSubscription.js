import { browser } from "k6/experimental/browser";
import { check, sleep } from "k6";
import exec from "k6/execution";

export const options = {
  scenarios: {
    browser: {
      executor: "constant-vus",
      exec: "browserTest",
      vus: 2,
      duration: "10s",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
};

export async function browserTest() {
  const page = browser.newPage();

  try {
    await page.goto("http://localhost:3000");

    await page.click("#subcriptionButton");

    await page.waitForNavigation();

    check(page, {
      "title is loaded": (p) =>
        p.locator("h1").textContent() == "My Subscriptions",
      "table is loaded": (p) => p.locator(".subscription-table").isVisible,
    });
    sleep(5);
    page.screenshot({ path: `screenshots/screenshot${exec.vu.idInTest}.png` });
  } finally {
    page.close();
    browser.close();
  }
}
