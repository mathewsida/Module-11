const PORT = process.env.PORT || 3001; 
const express = require('express');
const app = express();
const fs = require('fs');
const apiRoutes = require('./Routes/APIRoutes/APIRoutes');
const htmlRoutes = require('./Routes/HTML Routes/HTMLRoutes');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});

