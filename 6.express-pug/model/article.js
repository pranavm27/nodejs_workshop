const articles = require('../datastore/articles.json')

let Articles = {}

Articles.getAll = ()=>{
    return articles
}



module.exports = Articles