const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const errorHandler = require('./handlers/error')

const PORT = 8081;

app.use(cors())
app.use(bodyParser.json()) // use json due to we want return json

app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(errorHandler) // this middleware will run after the one above

app.listen(PORT, () => {
    console.log(`Server is starting on port ${PORT}`)
})