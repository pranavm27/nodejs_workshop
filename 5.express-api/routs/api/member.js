const express = require('express')

// DATA source
const  Members  = require('../../model/member')

const router = express.Router()


// API TO GET ALL MEMBERS
router.get('/', (req, res) => {
    res.json(Members.getAll())
})

// API TO GET MEMBER BY ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    const result = Members.getMemberById(id)
    if (result.length > 0)
        res.json({message : `member with id : ${req.params.id} found `, data: result, status : 'success'})
    else 
        res.status(400).json({message : `member with id : ${req.params.id} not found `,data:null,  status: 'fail'})
})

// API TO ADD A NEW MEMBER ? 
router.post ('/', async (req, res) => {

    // TODO: input validation 

    const result = await Members.addNew(req.body)
    console.log (result)
    if (result) 
        res.json({message : "New user added "})
    else
        res.status(400).json({message : "failed New user added "})
})

module.exports  = router;