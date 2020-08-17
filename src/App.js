const express = require('express')
const indexRoute = require('./ui-routes/indexRoute');
const port = process.env.PORT || 3000;
const app = express();

app.use('', indexRoute);

app.listen(port, () => {
    console.log(`Trading app listening at http://localhost:${port}`)
})

