import puppeteer from 'puppeteer'
import screenRecording from './helpers/screenRecording'

const APP = 'https://pa-ca.me/'
let page
let browser
const width = 414
const height = 736

describe('OAuth Log In', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: 'true' === process.env.ci,
      args: [`--window-size=${width},${height}`],
    })
    page = await browser.newPage()
    await page.setViewport({width, height})

    afterAll(browser.close)
  })

  test('can navigate to Log In page', async () => {
    async function testing() {
      console.log('start testing...')
      await page.goto(APP, {waitUntil: 'networkidle0'})
      await page.waitForSelector('div.at-button__text')
      await page.tap('div.at-button.at-button--normal')
      console.log('testing done.')
      const client = await page.target().createCDPSession()
    }

    await Promise.all([testing, () => screenRecording(page, width, height)])
  })
})
