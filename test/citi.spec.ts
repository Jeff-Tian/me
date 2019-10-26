import puppeteer from "puppeteer";

const APP = "https://jeff-tian.github.io/me/";
let page;
let browser;
const width = 414;
const height = 736;

describe("OAuth Log In", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });

  afterAll(() => {
    browser.close();
  });

  test("can navigate to Log In page", async () => {
    await page.goto(APP);
    await page.waitForSelector("div.at-button__text");
  });
});
