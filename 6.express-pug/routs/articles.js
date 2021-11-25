const express = require('express')

// DATA source
const Articles = require('../model/article')

const router = express.Router()

// GET all articles 
router.get('/',(req, res)=>{
    const result = Articles.getAll()
    res.render('index',{title:'All Articles', articles:result})
})

router.get('/add', (req,res) => {
    res.render('add_article', {title:'add view'})
})

router.get('/saveForm', (req, res)=> {
    res.send(req.query)
})

module.exports = router;