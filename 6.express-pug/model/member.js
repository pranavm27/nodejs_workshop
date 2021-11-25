const members = require('../datastore/members.json')
const fs = require('fs')
const uuid = require('uuid');

let Members = {}

Members.getAll = () => {
    return members
}

Members.getMemberById = (id) => {
    return members.filter(member => member.id === parseInt(id));
}

Members.addNew = async(memberObj) => {
    const id = uuid.v4()
    memberObj.id = id;

    members.push(memberObj)
    await fs.writeFileSync('./members.json', JSON.stringify(members), function(err){
        if (err){
            console.log(err)
            return err;
        }
        else {
            return true;
        }
    })
}

module.exports = Members ; 