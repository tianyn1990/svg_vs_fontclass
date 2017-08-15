const express = require('express');
const app = express();
const compression = require('compression')

if (process.env.NODE_ENV === 'production') {
    console.log(__dirname);
}

app.use(compression());
app.use(express.static(`${__dirname}/src`));

app.listen(3333);