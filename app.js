const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const adminReview = require('./routes/review');
const sequelize = require('./util/database');

app.use(adminReview);

sequelize.authenticate().then(() => {
    console.log('CONNECTION DONE');
}).catch(err => console.log(err));

sequelize.sync().then((result) => {
    console.log('TABLE CREATED');
}).catch(err => console.log(err));

app.listen(3000, () => {
    console.log('Server started');
});
