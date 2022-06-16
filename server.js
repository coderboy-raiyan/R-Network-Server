const app = require('express')();

const cors = require('cors');
const express = require('express');

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log('listening server...');
});
