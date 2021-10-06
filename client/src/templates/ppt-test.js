const puppeteer = require("puppeteer")

;(async () => {
    const url = process.env.REACT_APP_CLIENT_URL
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, {
        waitUntil: "networkidle2",
    })

    const dom = await page.$eval(".ctr-view", (element) => {
        return element.innerHTML
    }) // Get DOM HTML
    await page.setContent(dom)
    await page.pdf({ path: "h1an.pdf", format: "a4" })

    await browser.close()
})()

console.log("haha")
