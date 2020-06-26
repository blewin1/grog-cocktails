# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link]()

## Project Description

Grog is a coctail recipe finder built in React that uses TheCocktailDB database.  Using the site you can find a coctail recipe by name, by ingredients, randomly, or even by the glass it should be served in!

## API

TheCocktailDB provides detailed data on cocktail drinks and their ingredients.  It will return lists of drinks based on a search query, and then you can look up more info with another call to look up by ID.


Search Result:
<https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=galliano>
```
{
"drinks": [
        {
            "strDrink": "Barracuda",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/jwmr1x1504372337.jpg",
            "idDrink": "17209"
        },
        {
            "strDrink": "California Root Beer",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rsxuyr1472719526.jpg",
            "idDrink": "14282"
        },
        {
            "strDrink": "Gagliardo",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/lyloe91487602877.jpg",
            "idDrink": "12758"
        },
        ...
    ]
}

```

Full Info:
<https://www.thecocktaildb.com/api/json/v1/1/search.php?s=manhattan>
```
{
    "idDrink": "11008",
    "strDrink": "Manhattan",
    ...
    "strVideo": "https://www.youtube.com/watch?v=TFWPtkNoF4Y",
    "strCategory": "Cocktail",
    "strIBA": "Unforgettables",
    "strAlcoholic": "Alcoholic",
    "strGlass": "Cocktail glass",
    "strInstructions": "Stirred over ice, strained into a chilled glass, garnished, and served up.",
    ...
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/hz7p4t1589575281.jpg",
    "strIngredient1": "Sweet Vermouth",
    "strIngredient2": "Bourbon",
    "strIngredient3": "Angostura bitters",
    "strIngredient4": "Ice",
    "strIngredient5": "Maraschino cherry",
    "strIngredient6": "Orange peel",
    ...
    "strMeasure1": "3/4 oz ",
    "strMeasure2": "2 1/2 oz Blended ",
    "strMeasure3": "dash ",
    "strMeasure4": "2 or 3 ",
    "strMeasure5": "1 ",
    "strMeasure6": "1 twist of ",
    ...
}
```


## Wireframes

Below are links to wireframes for the site, as well as the planned React architecture.

- [WireFrames](https://res.cloudinary.com/blewin1/image/upload/a_-90/v1593148003/Wireframes/Grog-cocktails/grog-wireframes_egryfa.jpg)
- [React Architecture](https://res.cloudinary.com/blewin1/image/upload/a_-90/v1593148001/Wireframes/Grog-cocktails/grog-react-hirarchy_rbngkd.jpg)


### MVP/PostMVP


#### MVP EXAMPLE

The MVP includes looking up drinks by name and finding random drinks, as well as showing a full detailed view with an image, ingredients, instructions, and a description.

#### PostMVP EXAMPLE

Post MVP includes filtering by ingredients to find what you can make with what is in your cabinet.  This will be slightly difficult because the API doesn't naturally allow these searches (for free), so I will have to find out if I can do the filtering and API calls in the background fast enough to be useful.

Post MVP will include autocomplete in search bars.

Also Post MVP is searching for a drink by Glass type, since that is silly but fun.

## Components

| Component | Description | 
| --- | :---: |  
| App | This will render the Nav, Main, and Footer | 
| Nav | This will render the header and Menu Bar |
| Menu | This will render the menu that switches between Hamburger and nav options | 
| Home | This will render the main page that will route you to searches |
| ImgButton | This will render a large button with text over an image |
| SingleSearch | This will render a page that just has a search bar |
| MultiSearch | This will render a page that allows you to search and then filter |
| Searchbar | This will render a form that handles Autocomplete |
| Details | This will render a page that shows title, image, ingredients, description, and instructions |
| Ingredients | This will render ingredients with their corresponding quantities |
| Footer | This will render the footer | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

### MVP

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| App | H | .5hrs |  |  |
| Nav | H | 1hr|  |  |
| Menu | H | 1hr|  |  |
| Home | H | 1hr|  |  |
| ImgButton | H | 1hr|  |  |
| SingleSearch | H | .5hr|  |  |
| SearchBar | H | 1hr|  |  |
| Details | H | 3hr|  |  |
| Ingredients | M | 1hr|  |  |
| Footer | M | 1hr|  |  |
| Additional Formatting | 4hrs | | |
| Api Work | 1hr | | |
| Total | H | 16hrs| 0hrs |  |

### Post MVP

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| MultiSearch | M | 2hrs |  |  |
| Multi ingredient filtering with api | M | 4hrs | | |
| Autocomplete | M | 2hrs | | |
| Search by Glass | L | 1 hr | | |
| Total | H | 9hrs | 0hrs |  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```