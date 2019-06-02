const express = require('express')
const app = express()

app.get('/', (request, response) => {
  console.log(`URL: ${request.url}`)
  response.send('Hello, Server!')
})

app.listen(3000, (error) => {
  if (error) return console.log(`Error: ${error}`)
  console.log('Server listening on port 3000')
})
