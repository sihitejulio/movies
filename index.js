const express = require('express')
const {genre_route, movie_router} = require('./router')
const app = express()
const port = 3010

app.use('/genres', genre_route);
app.use('/movie', movie_router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})