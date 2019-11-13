import path from 'path'
import fs from 'fs'
import GIFEncoder from 'gifencoder'
import pngFileStream from 'png-file-stream'

export const sleep = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds))

export default async function screenRecording(
  page,
  width,
  height,
  frames = 15
) {
  console.log('start recording...')
  await sleep(2)
  process.stdout.write('taking screenshots: .')

  for (let i = 1; i < frames; ++i) {
    const filename = path.resolve(__dirname, `T${new Date().getTime()}.png`)
    process.stdout.write('.')
    await page.screenshot({path: filename, fullPage: true})
    await sleep(1)
  }

  await sleep(1)

  console.log('recording done, generating gif...')
  const encoder = new GIFEncoder(width, height)

  await pngFileStream(path.resolve(__dirname, 'T*png'))
    .pipe(encoder.createWriteStream({repeat: 0, deploy: 200, quality: 20}))
    .pipe(fs.createWriteStream(path.resolve(__dirname, 'screenshot.gif')))

  console.log('gif generated.')
}
