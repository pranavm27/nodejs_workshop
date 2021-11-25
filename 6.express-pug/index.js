const express = require('express')
const path = require('path');

const app = express()
const PORT = process.env.PORT || 5000;

// set view engine 
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/members', require('./routs/api/member'))
app.use('/articles', require('./routs/articles'))



app.listen(PORT, () => console.log(`server stated on port ${PORT}`))