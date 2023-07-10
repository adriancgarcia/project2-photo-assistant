const mongoose = require("./models/connection");
const Venue = require("./venue");

mongoose.connection.on('open', async () => {

    await Venue.deleteMany();

    const allVenues = [
        {
            name: "Bridge 410",
            img: "https://static.wixstatic.com/media/69f4f2_d1ac79dae94347edb71d06ab80911a76~mv2.jpg/v1/fill/w_632,h_862,al_c,q_85,usm_0.66_1.00_0.01/69f4f2_d1ac79dae94347edb71d06ab80911a76~mv2.jpg",
            location: "410 N. Paulina",
            dateOfWedding: "06/08/2021",
            nameOfParty: "Garcia-Santos",
            venueWebsite: "www.bridge410.com",
            venueRating: 5,
            addToPortfolio: true,
            comments: "great place. very attentive to detail."
        },
        
    ];
    await Venue.create(allVenues);

    mongoose.connection.close();
});

