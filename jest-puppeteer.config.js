module.exports = {
  launch: {
    dumpio: true,
    headless: 'true' === process.env.ci,
    args: ['--disable-infobars'],
  },
  browserContext: 'default',
}
