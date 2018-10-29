var express = require('express');
var JSONData = require('./heros.json');
var fs = require("fs");
    
let Heros= {}
Heros.getAll = function(){
    return JSONData
}


Heros.saveNew = function(newHeroData){
    JSONData.push(newHeroData);
    fs.writeFile('./heros.json', JSONData, function(err) {
        if(err){
            console.lgo('ERR.')
        }   
    })
}
module.exports = Heros;
