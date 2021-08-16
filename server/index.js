const fs = require("fs")
const express = require("express")
const puppeteer = require("puppeteer")
const cors = require("cors")
var uuid = require("uuid")

const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(express.static("../src/templates/style"))

app.use(cors())

const port = 8080 // default port to listen

app.get("/", (req, res) => {
    res.send("Yes, Joyy! Well done. This is working! <3")
})

app.get("/download-pdf", (req, res) => {
    console.log("Downloading PDF")
    const filename = uuid.v1()
    const dlResume = async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        await page.setContent(req.query.htmlString)
        await page.addStyleTag({
            url: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
        })

        await page.addStyleTag({
            url: "http://localhost:8080/TemplateDAIICT.css",
        })

        await page.pdf({ path: `${filename}.pdf`, format: "a4" })
        await browser.close()

        console.log("Sending PDF")

        res.download(`./${filename}.pdf`)
    }

    dlResume()
})

app.get("/download-trial", (req, res) => {
    ;(async () => {
        const filename = uuid.v1()
        const url = "https://themes.jsonresume.org/theme/modern"
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url)
        // await page.addStyleTag({
        //     url: "https://bootswatch.com/5/lumen/bootstrap.min.css",
        // })
        await page.pdf({ path: `${filename}.pdf` })
        res.download(`./${filename}.pdf`)

        await browser.close()
    })()
})

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`)
})
