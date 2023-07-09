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

// SHOW 
app.get("/venues/:id", (req, res) => {
    const id = req.params.id;
    const Venue = venue[id];
    res.render('venue/show.ejs', { Venue, id });
});











// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Listening on port, ${PORT}`)} )

