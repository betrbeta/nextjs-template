import { browser } from "k6/experimental/browser";
import { check } from "k6";

export const options = {
  scenarios: {
    browser: {
      executor: "constant-vus",
      exec: "browserTest",
      vus: 1,
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

    await page.fill("#inputViewer", "github.io");

    const attribute = await page.getAttribute("#iframe", "src");

    check(page, {
      "href is loaded": attribute === "https://github.io/",
    });

    page.screenshot({ path: "screenshots/screenshot.png" });
  } finally {
    page.close();
  }
}
