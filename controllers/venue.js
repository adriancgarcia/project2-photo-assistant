const express = require("express");
const Venue = require("../models/venues");

const router = express.Router();

router.use((req, res, next) => {
    req.session
    if(req.session.loggedIn){
        next();
    }else{
        res.redirect("/user/login")
    }
});

// Routes
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// INDEX - GET
router.get("/", async (req, res) => {
    const venue = await Venue.find({ username: req.session.username });
res.render(
    "venue/index.ejs", 
    { venue, 
        user: req.session.username }
        )
});

// NEW - GET
router.get("/new", async (req, res) => {
    await res.render('venue/new.ejs')
});

// DESTROY - DELETE
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    await Venue.findByIdAndDelete(id)
    res.redirect("/venues")
});

// UPDATE - PUT
router.put("/:id", async (req, res) => {
    const id = req.params.id;
    req.body.addToPortfolio = req.body.addToPortfolio === 'on' ? true : false;
    await Venue.findByIdAndUpdate(id, req.body)
    res.redirect("/venues");
});

// CREATE POST
router.post("/", async (req, res) => {
    if(req.body.addToPortfolio === 'on') {
        req.body.addToPortfolio = true;
    }else {
        req.body.addToPortfolio = false;
    }
    req.body.username = req.session.username;
    req.body
    await Venue.create(req.body)
    res.redirect("/venues");
});

// EDIT
router.get("/:id/edit", async (req, res) => {
    const id = req.params.id;
    const venue = await Venue.findById(req.params.id);
    res.render("venue/edit.ejs", { venue })
});

// SHOW 
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const venue = await Venue.findById(req.params.id)
    res.render("venue/show.ejs", { venue });
});

// EXPORT THE ROUTES
module.exports = router;