// import dependencies
require('dotenv').config(); // bring in our .env vars
const express = require('express'); // web framework for node
const morgan = require('morgan'); // logger for node
const methodOverride = require('method-override'); // allows us to use PUT and DELETE methods
const Venue = require("./models/venue.js");

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
app.get('/venues', async (req, res) => {
    const venue = await Venue.find({});
res.render('venue/index.ejs', {venue});
});

// NEW - GET
app.get('/venues/new', (req, res) => {
    res.render('venue/new.ejs', {Venue})
});

// DESTROY - DELETE
app.delete("/venues/:id", async(req, res) => {
    await Venue.findByIdAndDelete(req.params.body)
    res.redirect("/venues")
});

// UPDATE - PUT
app.put("/venues/:id", async (req, res) => {
    if(req.body.addToPortfolio === 'on') {
        req.body.addToPortfolio = true;
    }else {
        req.body.addToPortfolio = false;
    }
    await Venue.findByIdAndUpdate(req.params.id, req.body)

    res.redirect("/venues")
});

// CREATE POST
app.post("/venues/", async (req, res) => {
    if(req.body.addToPortfolio === 'on') {
        req.body.addToPortfolio = true;
    }else {
        req.body.addToPortfolio = false;
    }
    await Venue.create(req.body)
    res.redirect("/venues")
});

// EDIT
app.get("/venues/:id/edit", async (req, res) => {
    const id = req.params.id;
    const venue = await Venue.findById(req.params.id);
    res.render("venue/edit.ejs", {venue, id})
});

// SHOW 
app.get("/venues/:id", async (req, res) => {
    const venue = await Venue.findById(req.params.id);
    res.render('venue/show.ejs', { Venue, id });
});

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Listening on port, ${PORT}`)} )

