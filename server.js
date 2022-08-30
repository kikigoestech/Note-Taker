// initiate express.js
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require('fs');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// instruct server to make files in 'public' dir readily available
app.use(express.static('public'));

// parse incoming string & array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());

// use router set up in 'routes' directory
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

