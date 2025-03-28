const express = require('express')
const userRoutes = require('./routes/users.routes')
const postRoutes=require('./routes/posts.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRoutes)
app.use('/posts', postRoutes)



module.exports = app