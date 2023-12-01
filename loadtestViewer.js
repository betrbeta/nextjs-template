import { browser } from "k6/experimental/browser";
import { check, sleep } from "k6";
import exec from "k6/execution";


export const options = {
  scenarios: {
    browser: {
      executor: "constant-vus",
      exec: "browserTest",
      vus: 5,
      duration: "10s",
      options: {
        browser: {
          type: "chromium",
        },
      },
    },
  },
};

// const randowHref = [
//   "github.io",
//   "wired.com",
//   "estradax.github.io",
//   "www.youtube.com/embed/lJIrF4YjHfQ?si=Wth2R4pS2NHzIjDO",
// ][Math.floor(Math.random() * 3)];
export async function browserTest() {
  const page = browser.newPage();
  try {
    await page.goto("http://localhost:3000");
    // let forCheck = randowHref;

    await page.locator("#inputViewer").type("wired.com");
    check(page, {
      "href is loaded": (p) =>
        p.getAttribute("#iframe", "src") === `https://wired.com`,
    });

    sleep(3);
    page.screenshot({ path: `screenshots/screenshot${exec.vu.idInTest}.png` });
  } finally {
    page.close();
    browser.close();
  }
}
