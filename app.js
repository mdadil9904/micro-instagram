const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('sequelize')
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')

const app = express();

app.use(bodyParser.json())
app.use('/users', userRoutes)
app.use('/posts', postRoutes)

sequelize.sync({alter: true}).then(()=>console.log('Database synced'))

app.listen(process.env.PORT, () => console.log('Server running on port ${process.env.PORT}'))