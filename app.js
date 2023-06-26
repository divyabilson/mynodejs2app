const express = require ('express')
const app = express()

app.get ('/', (req, res) => res.send('Hello Node World'))
app.listen(3000, () => console.log('erver ready'))
