const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('User Page')
})

router.get('/new', (req, res) => {
    res.send('New User Page')
})

router.route(':id', (req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
}).put((req, res) => {
    res.send(`Get User With ID ${req.params.id}`)
}).delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
})

module.exports = router