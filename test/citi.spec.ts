import puppeteer from "puppeteer";
import path from "path";
import GIFEncoder from "gifencoder";
import pngFileStream from "png-file-stream";
import fs from "fs";

const APP = "https://jeff-tian.github.io/me/";
let page;
let browser;
const width = 414;
const height = 736;

describe("OAuth Log In", () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      slowMo: 80,
      headless: "true" === process.env.ci,
      args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });

  afterAll(() => {
    browser.close();
  });

  test("can navigate to Log In page", async () => {
    async function testing() {
      console.log("start testing...");
      await page.goto(APP);
      await page.waitForSelector("div.at-button__text");
      console.log("testing done.");
    }

    async function screenRecording() {
      console.log("start recording...");
      await new Promise(resolve => setTimeout(resolve, 10000));
      process.stdout.write("taking screenshots: .");
      const screenshotPromises = [];
      for (let i = 1; i < 15; ++i) {
        const filename = path.resolve(
          __dirname,
          `T${new Date().getTime()}.png`
        );
        process.stdout.write(".");
        screenshotPromises.push(page.screenshot({ path: filename }));

        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      await Promise.all(screenshotPromises);

      console.log("recording done, generating gif...");
      const encoder = new GIFEncoder(width, height);
      await pngFileStream(path.resolve(__dirname, "T*png"))
        .pipe(
          encoder.createWriteStream({ repeat: 0, deploy: 200, quality: 20 })
        )
        .pipe(fs.createWriteStream(path.resolve(__dirname, "screenshot.gif")));

      console.log("gif generated.");
    }

    await Promise.all([testing(), screenRecording()]);
  });
});
