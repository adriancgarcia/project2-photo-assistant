# PROJECT 2

- **Project Name:** Photo Assistant
- **Project By: Adrian C. Garcia**
- **[GITHUB](https://github.com/adriancgarcia/project2)**
- **[DEPLOYED SITE](https://project-2-app.onrender.com/)**
- **[TRELLO](https://trello.com/b/4jY99k89/project-2-app)**




# DESCRIPTION
Wedding Venue Tracker allows photographers and potentially other people in the Wedding industry, to keep track of all the venues they've worked at. Photographers can track specific information such as the name of the venue, the date they workded there, the name of the bride and groom, rate the venue, leave comments, and more. The venues can be updated with new information, and deleted if necessary. 

Eventuallly, users will be able to share their information with other users creating a network. 



## MOCK UP OF UI



- ![Mobile & Desktop View](project2-WeddingVenueTracker.pdf)

## LIST OF Backend Endpoints

|   ROUTE   |   ENDPOINT  | METHOD  |   PURPOSE    |
|-----------|-------------|---------|--------------|
|   Index   |   /venue    |   GET |   List all venues   |
|   New     |   /venue:new  |   GET |   Shows form to create a new venue    |
|   Destroy |   /venue/:id  |   DELETE |   Delete selected venue    |
|   Update  |   /venue:id   |   PUT |    Update changes to selected venue    |
|   Create  |   /venue    | POST    |   Creates a new venue     |
|   Edit    |   /venue:id/edit |   PUT |   Edit selected venue    |
|   Show    |   /venue/:id  |   GET |   Displays the selected venue's page  |





## ERD (Entity RELATIONSHIP DIAGRAM)
``` mermaid
erDiagram
    newUSER {
        string signup
        string password
    }
    newUSER ||--O{ USER : login
    USER {
        string login
        string Password
    }

    USER ||--O{ HOME : landingPage
    
    HOME {
        string venueName
        string venueImage
        string venueLocation
    }

    HOME || --o{ SHOW : showVenue
    SHOW{
        string venueName
        string venueImage
        string venueLocation
        string venueDate
        string venueCouple
        string venueWebpage
        Number venueRating
        Boolean venuePortfolio
        string venueComments
    }
    HOME || --o{ CREATE : createVenue
    CREATE {
        string venueName
        string venueImage
        string venueLocation
        string venueDate
        string venueCouple
        string venueWebpage
        Number venueRating
        Boolean venuePortfolio
        string venueComments
    }
    SHOW || --o{ DELETE : deleteVenue
    DELETE {


    }
    SHOW || --o{ EDIT : editVenue
    EDIT {
        string venueName
        string venueImage
        string venueLocation
        string venueDate
        string venueCouple
        string venueWebpage
        Number venueRating
        Boolean venuePortfolio
        string venueComments
    }
    HOME || --o{ LOGOUT : logout
    LOGOUT {

    }
```

## Technologies Used
HTML, JS, CSS, Node, Express, EJS, Mongo 