const express = require('express')
const validUrl = require('valid-url')
const shortid = require('short-id')

const router = express.Router()

const Url = require('../models/UrlModel')

const baseUrl = process.env.NODE_ENV === 'dev' ? 'http://localhost:5000' : process.env.BASE_URL

console.log(baseUrl)

router.post('/shorten', async(req,res) => {
    const {longURL} = req.body

    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json('URL base inválido.')
    }

    const urlCode = shortid.generate()


    if(validUrl.isUri(longURL)) {
        try {
            let url = await Url.findOne({
                longURL
            })
            if(url) {
                res.json(url)
            }else {
                const shortURL = `${baseUrl}/${urlCode}`
                console.log(shortURL)
                console.log(longURL)
    
                url = new Url({
                    longURL,
                    shortURL,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.json(url)
            }
        }catch(e) {
            console.log(e)
            res.status(500).json('Algo deu errado.')
        }
    }else {
        return res.status(401).json('URL original inválido.')
    }


    
    
})

module.exports = router