import { browser } from "k6/experimental/browser";
import { check, sleep } from "k6";
import exec from "k6/execution";
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
  },
};

export async function browserTest() {
  let res = http.post("http://localhost:3000");

  const page = browser.newPage();

  try {
    await page.goto("http://localhost:3000");

    page.locator("input[name='email']").type("test@mail.com");

    res = res.submitForm();
    
    check(res, {
      "status is 200": (r) => r.status === 200,
      // "caption is correct": (r) => r.html("h1").text() == "Example Domain",
    });

    sleep(5);
    page.screenshot({ path: `screenshots/screenshot${exec.vu.idInTest}.png` });
  } finally {
    page.close();
    browser.close();
  }
}
