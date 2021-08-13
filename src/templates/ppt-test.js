const puppeteer = require("puppeteer")

;(async () => {
    const url = "http://localhost:3000/rm-puppeteer"
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, {
        waitUntil: "networkidle2",
    })
    await page.pdf({ path: "h1an.pdf", format: "a4" })

    await browser.close()
})()

console.log("haha")
