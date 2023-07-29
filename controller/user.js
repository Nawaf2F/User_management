const router = require('express').Router()
const User = require("../model/user.js")

// index
router.get('/', (req, res) => {
    res.render('index')
}
)

// create new
router.get('/new', (req, res) => {
    res.render('new')
}
)

// create
router.post('/new', (req, res) => {
    const user = new User({ 
        name: req.body.name, 
        email: req.body.email, 
        phone: req.body.phone })
    user.save()
        .then(() => res.redirect('/'))
        .catch(err => res.status(500).send(err))
})

// show
router.get('/show', (req, res) => {
    User.find()
        .then(users => res.render('show', { users }))
        .catch(err => console.log(err))
}
)

// edit
router.get('/update/:id', (req, res) => {
    const Userid = req.params.id
    User.find()
        .then(users => res.render('edit', { users, Userid }))
        .catch(err => console.log(err))
}
)

// update
router.put('/update/:id', (req, res) => {
    const id = req.params.id
    const { name, email, phone } = req.body

    User.findByIdAndUpdate(id, { name, email, phone })
        .then(() => res.redirect('/show'))
        .catch(err => res.send(500, err))
}
)

// delete
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then(() => res.redirect('/show'))
        .catch(err => res.send(500, err))
}
)

module.exports = router