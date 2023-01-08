## Web basics: Javascript from scratch 🧮
## Backend application - Nodepop, a second-hand e-commerce
> This is a practice delivery in the frame of the [Glovo-KeepCoding Bootcamp "Women in Tech"](https://keepcoding.io/nuestros-bootcamps/mujeres-glovo/)

### To run database: `npm run init-db`
### To run application: `npm run dev`

### General considerations
- Project created 100% with NodeJS, MongoDB & Express
- No use of Browser
- devEnvironment Dependencies: Mongoose, Nodemon, dotenv
- API calls must be tested with Postman

#### Challenge's description
Develop the API that will run on the server of a **second-hand goods selling service** called **Nodepop**. 

The service maintains ads for buying or selling items and allows you to search as well as filter by various criteria, so the API to be developed should provide the necessary methods for this.
 
#### Operations to be performed by the API to be created:
- List of ads with the possibility of pagination. 
Query for testing:
> "/api/adverts?pagSkip=1&pagLimit=1"
- Filter by tag
Query for testing:
> "/api/adverts?tags=motor"
- Filter by type of ad
Query for testing:
> "/api/adverts?isForSale=true" // "/api/adverts?isForSale=false"
- Filter by price range (min. price and max. price) 
Query for testing:
> "/api/adverts?priceMax=120&priceMin=10"
- Filter by article name (starting with the searched data).
Query for testing:
"/api/adverts?name=Samsung"
- List of existing tags

