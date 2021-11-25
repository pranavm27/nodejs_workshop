const express = require('express')
const path = require('path');

const app = express()
const PORT = process.env.PORT || 5000;

// set view engine 
app.set('views', path.join(__dirname,'views'))
app.set('view engine' , 'pug');

app.use(express.json());
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/members', require('./routs/api/member'))


//routs 
let articles = [
    {id : 1 , title : ' article 1 ' , author : "some one ", body : " description of article 1"},
    {id : 2 , title : ' article 1 ' , author : "some one ", body : " description of article 2"},
    {id : 3 , title : ' article 1 ' , author : "some one ", body : " description of article 3"}

]
app.get('/', (req, res) => {
    res.render('index', {title: "hello", articles : articles})
})

app.get('/articles/add', (req, res) => {
    res.render('add_articles' , {title: "add article"})
})

app.get('/articles/showFilledDetails', (req, res)=> {
    res.send(req.query)
})

app.listen(PORT, () => console.log(`server stated on port ${PORT}`))