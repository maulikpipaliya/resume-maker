const fs = require("fs")
const express = require("express")
const puppeteer = require("puppeteer")
const cors = require("cors");

const app = express()

app.use(cors());

const port = 8080 // default port to listen


app.get("/download-pdf", (req, res) => {
    console.log("Downloading PDF")
    ;(async () => {
        const url = "http://localhost:3000/daiict-template"
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url, {
            waitUntil: "networkidle2",
        })
        await page.pdf({ path: "123d.pdf", format: "a4" })

        await browser.close()
    })()

    var filePath = "./123d.pdf"

    // fs.readFile(filePath, function (err, data) {
    //     res.contentType("application/pdf")
    //     // res.send(data)
    // })

    console.log("Sending PDF")
    res.download(filePath)
    // res.setHeader("Content-Type", "text/pdf")

    // res.send("Hello world!")
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
