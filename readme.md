# PROJECT 2

- **Project Name:** Wedding Venue Tracker
- **Project By: Adrian C. Garcia**
- **[GITHUB](https://github.com/adriancgarcia/project2)**
- **[DEPLOYED SITE](https://project-2-app.onrender.com/)**
- **[TRELLO](9https://trello.com/invite/b/4jY99k89/ATTI64cdce348b302046f2ecb96f002719a889D092CB/project-2-app)**




# DESCRIPTION
Wedding Venue Tracker allows photographers and potentially other people in the Wedding industry, to keep track of all the venues they've worked at. Photographers can track specific information such as the name of the venue, the date they workded there, the name of the bride and groom, rate the venue, leave comments, and more. The venues can be updated with new information, and deleted if necessary. 

Eventuallly, users will be able to share their information with other users creating a network. 



## MOCK UP OF UI

- ![Desktop View] (http://imgur.com)
- ![MOBILE View] (http://imgur.com)

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
    <!-- USER ||--o{ USER: landing -->
    USER {
        string login
        string Password
    }
    INDEX ||--|{ USER : landingPage
    INDEX {
        string venueName
        string venueImage
        string venueLocation
    }
    SHOW || --o{ INDEX : showVenue
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
    CREATE || --o{ INDEX : is
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
    DELETE || --o{ INDEX : is
    DELETE {


    }
    EDIT || --o{ INDEX : is
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
    LOGOUT || --o{ INDEX : is
    LOGOUT {

    }
    

```



![PICTURE OF ERD](http://imgur.com)

- [Free ERD Diagram Tool](https://dbdiagram.io/home)

## Technologies Used
HTML, JS, CSS, Node, Express, EJS, Mongo 