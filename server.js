var app = require('./app')

var PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`)
})
