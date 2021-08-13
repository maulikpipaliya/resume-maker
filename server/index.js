const fs = require("fs")
const express = require("express")
const puppeteer = require("puppeteer")
const cors = require("cors")

const app = express()

app.use(cors())

const port = 8080 // default port to listen

app.get("/download-pdf", (req, res) => {
    console.log("Downloading PDF")
    ;(async () => {
        // const url = "http://localhost:3000/rm-puppeteer"
        // const url =
        //     "file:///C:/Users/vivek164/Desktop/fake-resumes/202012067_Resume_Maulik_May2021.html"

        const url =
            "file:///H:/studies/daiict/sem2-winter/IT629%20-%20Web%20Programming/assignments/assignment1/a1_resume.html"
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url, {
            waitUntil: "networkidle2",
        })
        // const dom = await page.$eval("div.ctr-view", (element) => {
        //     return element.innerHTML
        // }) // Get DOM HTML
        // await page.setContent(dom)
        await page.pdf({ path: "rmpt2.pdf", format: "a4" })

        await browser.close()
    })()

    var filePath = "./rmpt2.pdf"

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
