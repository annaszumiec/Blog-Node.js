const express = require('express');

// express app

const app = express();

//register view engine

app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

app.get('/',(req, res) => {
    const blogs =[
        // {title: 'Pink Tulip', snippet: 'lorem ipsum dloro sit amet consectetur'},
        // {title: 'Whats in the Box', snippet: 'lorem ipsum dloro sit amet consectetur'},
        // {title: 'Purpple ball pencill', snippet: 'lorem ipsum dloro sit amet consectetur'},
    ]
    res.render('index', {title: 'Home',blogs });
});

app.get('/about',(req, res) => {
    res.render('about', {title: 'About' });
});

app.get ('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new Blog'});
});


//404 page ! should go on the bottome of code otherwise it overrits request after this one
app.use((req, res) => {
    res.status(404).render('404', {title: 'ERROR'});
});