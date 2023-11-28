import { browser } from "k6/experimental/browser";
import { check, sleep } from "k6";
import http from "k6/http";

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
    main: {
      executor: "constant-vus",
      exec: "main",
      vus: 20,
      duration: "30s",
    },
  },
};

export async function browserTest() {
  const page = browser.newPage();

  try {
    await page.goto("http://localhost:3000");
    page.screenshot({ path: "screenshots/screenshot.png" });
  } finally {
    page.close();
  }
}

export function main() {
  const res = http.get("http://localhost:3000");

  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
