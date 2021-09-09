import asyncHandler from "express-async-handler"
import { v1 as getUUID } from "uuid"
import puppeteer from "puppeteer"

export const downloadPDF = asyncHandler(async (req, res) => {
    console.log("Downloading PDF")
    const filename = getUUID()
    const dlResume = async () => {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()

        await page.setContent(req.query.htmlString)
        await page.addStyleTag({
            url: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
        })

        await page.addStyleTag({
            url: "http://localhost:5000/TemplateDAIICT.css",
        })

        const filePath = `downloads/` + filename + ".pdf"

        await page.pdf({ path: filePath, format: "a4" })
        await browser.close()

        console.log("Sending PDF")

        res.download(filePath)
    }

    dlResume()
})

export const sampleDownloadFromURL = asyncHandler(async (req, res) => {
    ;(async () => {
        const filename = getUUID()
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
