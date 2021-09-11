const express = require('express')
const router = express.Router()

const Url = require('../models/UrlModel')


router.get('/:code', async (req,res) => {
    try {
        const url = await Url.findOne({
            urlCode: req.params.code
        })
        if(!url) {
            return res.status(400).json('URL não encontrada.')
        }
        return res.redirect(url.longURL)
    }catch(e) {
        console.log(e)
        res.status(500).json('Algo deu errado.')
    }
})

module.exports = router