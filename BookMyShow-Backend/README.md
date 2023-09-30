# Bookmyshow - Backend

This backend it built on top of Node.js where the user data is being stored and retrived flexibly from MongoDB and shown on the UI.

## Link to website -> [BookMyShow](https://bookmyshowticket.netlify.app/)


## Technologies used
- Express.
   
    To Create Server.
- MongoDB.

    To store and retrive the data of the user.

### Usage 
It takes the user data from the [Front-end](https://github.com/Hemant610/BookMyShow) and uses [Mongo DB Atlas](https://www.mongodb.com/cloud/atlas/register) to store the data recieved and fetches the data back from the database to show the user that the  
operation was successfully completed.

### End points
1. `Post` [url](https://bookms.onrender.com)/api/booking 

   This is a post request endpoint which is used to store the booking details of the user.

2. `Get` [url](https://bookms.onrender.com)/api/booking

   This is a get request endpoint which is used to get the last booking deatils of user.

Thank You !


