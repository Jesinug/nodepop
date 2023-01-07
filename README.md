## Web basics: Javascript from scratch 🧮
## Backend application - Nodepop, 
> This is a practice delivery in the frame of the [Glovo-KeepCoding Bootcamp "Women in Tech"](https://keepcoding.io/nuestros-bootcamps/mujeres-glovo/)

### General considerations
- Project created 100% with NodeJS, MongoDB & Express
- No use of Browser
- devEnvironment Dependencies: Mongoose, Nodemon, dotenv
- API calls tested with Postman

#### Challenge's description
Develop the API that will run on the server of a **second-hand goods selling service** called **Nodepop**. 

The service maintains ads for buying or selling items and allows you to search as well as filter by various criteria, so the API to be developed should provide the necessary methods for this.


#### Implementation details
Run with the console command `node challenge.js`.

#### Mandatory requirements for adverts:
Each advert has the following data:
- Item name, an ad will always have only one item.
- Whether the item is for sale or wanted.
- Price. This will be the price of the item in case it is an offer for sale. In the case of
If it is a 'wanted' advert it will be the price the applicant would be willing to pay.
- Photo of the item. Each advert will have only one photo.
- Advert tags. It may contain one or more of four tags: work, lifestyle, motor, and mobile.
and mobile.
- It is requested that the deliverable is accompanied by a minimum of documentation and the API code is well formatted for easy maintenance. In this phase, as we want to test if the business model is going to work, neither unit nor integration tests will be necessary.
 
#### Operations to be performed by the API to be created:
- List of ads with the possibility of pagination. With filters by tag, type of ad
(sale or search), price range (min. price and max. price) and article name
(starting with the searched data).
- List of existing tags
- Add creation (optional)
- The systems where the API will be deployed use MongoDB databases.

