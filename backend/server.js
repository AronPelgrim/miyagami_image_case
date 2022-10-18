const express = require('express')

const app = express()

app.get('/api', (req, res) => {

    res.json({ "users": ["one", "two", "three"] })
})

app.listen(7000, () => console.log(`Server is running.`))