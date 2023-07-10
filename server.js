// import dependencies
require('dotenv').config(); // bring in our .env vars
const express = require('express'); // web framework for node
const VenueRouter = require("./controllers/venue");
const UserRouter = require("./controllers/user");
const morgan = require('morgan'); // logger for node
const methodOverride = require('method-override'); // allows us to use PUT and DELETE methods
const session = require("express-session");
const MongoStore = require('connect-mongo');

// express application
const app = express();

// middleware
app.use(morgan('tiny')); // logging
app.use(methodOverride('_method')); // override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static('public')); // serve static files from public folder
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true, 
    resave: false,
}));

app.use("/venues", VenueRouter);
app.use("/user", UserRouter);

app.get('/', (req, res) => {
    res.render('index.ejs')
});

// Listen
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Listening on port, ${PORT}`)
})