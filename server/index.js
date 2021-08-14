const fs = require("fs")
const express = require("express")
const puppeteer = require("puppeteer")
const cors = require("cors")
var uuid = require("uuid")

const app = express()

app.use(cors())

const port = 8080 // default port to listen

app.get("/", (req, res) => {
    res.send("Yes, Joyy! Well done. This is working! <3")
})

app.get("/download-pdf", (req, res) => {
    console.log("Downloading PDF")
    const filename = uuid.v1()
    const dlResume = async () => {
        const url = "http://localhost:3000/"
        // const url =
        //     "file:///C:/Users/vivek164/Desktop/fake-resumes/202012067_Resume_Maulik_May2021.html"

        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url, {
            waitUntil: "networkidle2",
        })
        // await page.waitForNavigation()

        const dom = await page.$eval(".ctr-view", (element) => {
            return element.innerHTML
        }) // Get DOM HTML
        await page.setContent(dom)
        await page.addStyleTag({
            url: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        })

        await page.pdf({ path: `${filename}.pdf`, format: "a4" })

        return await browser.close()
    }
    dlResume()

    var filePath = `./${filename}.pdf`

    // fs.readFile(filePath, function (err, data) {
    //     res.contentType("application/pdf")
    //     // res.send(data)
    // })

    console.log("Sending PDF")
    // res.send("Hello world!")
    setTimeout(() => {
        res.download(filePath)
    }, 5000)
    // res.setHeader("Content-Type", "text/pdf")
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
