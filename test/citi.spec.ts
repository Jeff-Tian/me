import screenRecording, {sleep} from './helpers/screenRecording'

const APP = 'https://pa-ca.me/'
const width = 414
const height = 736

describe('OAuth Log In', () => {
  beforeAll(async () => {
    await page.goto(APP, {waitUntil: 'networkidle0'})
  })

  test('can navigate to Log In page', async () => {
    async function testing() {
      await page.waitForSelector('div.at-button__text')
      await page.tap('div.at-button.at-button--normal')
      console.log('testing done.')
      // const client = await page.target().createCDPSession()
      await sleep(5)
    }

    await Promise.all([testing(), () => screenRecording(page, width, height)])
  })
})
