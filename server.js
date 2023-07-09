// import dependencies
require('dotenv').config(); // bring in our .env vars
const express = require('express'); // web framework for node
const morgan = require('morgan'); // logger for node
const methodOverride = require('method-override'); // allows us to use PUT and DELETE methods
const venue = require("./models/venue.js");

// express application
const app = express();

// middleware
app.use(morgan('tiny')); // logging
app.use(methodOverride('_method')); // override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static('public')); // serve static files from public folder
app.use(express.urlencoded({extended: false}))


// Routes
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// INDEX - GET
app.get('/venues', (req, res) => {
console.log(venue)
res.render('venue/index.ejs', {venue});
});

// NEW - GET
app.get('/venues/new', (req, res) => {
    res.render('venue/new.ejs', {venue})
});

// DESTROY - DELETE
app.delete("/venues/:id", (req, res) => {
    const id = req.params.id
    venue.splice(id, 1)
    res.redirect("/venues")
});

// UPDATE - PUT
app.put("/venues/:id", (req, res) => {
    const id = req.params.id;
    venue[id] = {
        name: req.body.name,
        img: req.body.img,
        location: req.body.location,
        dateOfWedding: req.body.dateOfWedding,
        nameOfParty: req.body.nameOfParty,
        venueWebsite: req.body.venueWebsite,
        venueRating: req.body.venueRating,
        addToPortfolio: req.body.addToPortfolio,
        comments: req.body.comments, 
    }
    res.redirect("/venues")
});

// CREATE POST
app.post("/venues/", (req, res) => {
    let newVenue = {
        name: req.body.name,
        img: req.body.img,
        location: req.body.location,
        dateOfWedding: req.body.dateOfWedding,
        nameOfParty: req.body.nameOfParty,
        venueWebsite: req.body.venueWebsite,
        venueRating: req.body.venueRating,
        addToPortfolio: req.body.addToPortfolio,
        comments: req.body.comments, 
    }
    venue.push(newVenue)
    res.redirect("/venues")
});

// EDIT
app.get("/venues/:id/edit", (req, res) => {
    const id = req.params.id;
    const Venue = venue[id];
    res.render("venue/edit.ejs", {Venue, id})
});

// SHOW 
app.get("/venues/:id", (req, res) => {
    const id = req.params.id;
    const Venue = venue[id];
    res.render('venue/show.ejs', { Venue, id });
});


// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Listening on port, ${PORT}`)} )

