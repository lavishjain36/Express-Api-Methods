const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;

app.get('/all', function (req, res) {
  res.send({
      status: 200,
        message: 'Welcome to express!'
  })
})

app.listen(PORT,()=>console.log('server is running on port '+PORT))
