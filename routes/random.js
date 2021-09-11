const express = require('express')
const router = express.Router()

const Url = require('../models/UrlModel')

router.get('', async (req,res) => {
    try {
        const numUrls = await Url.estimatedDocumentCount()
        const random = Math.floor(Math.random() * numUrls)
        const randomUrl = await Url.findOne().skip(random)
        return res.redirect(randomUrl.longURL)
    }catch(e) {
        console.log(e)
        return res.status(500).json('Algo deu errado.')
    }
})

router.get('/api', async (req,res) => {
    try {
        const numUrls = await Url.estimatedDocumentCount()
        const random = Math.floor(Math.random() * numUrls)
        const randomUrl = await Url.findOne().skip(random)
        return res.json(`${randomUrl.shortURL}`)
    }catch(e) {
        console.log(e)
        return res.status(500).json('Algo deu errado.')
    }
})


module.exports = router