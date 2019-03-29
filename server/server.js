const express = require('express')
require('dotenv').config()
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')
app.use(express.json())

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log(db.listTables())
}).catch(err => console.log('error:', err))

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.create)
app.put('/api/product/:id', ctrl.update)
app.delete('/api/product/:id', ctrl.delete)


app.listen(SERVER_PORT, () => console.log(`listen linda on:${SERVER_PORT}`))

