const apiBase = 'https://www.thecocktaildb.com/api/json/v1/1/';



const formatDrink = (d) => {

    const drink = {};
    drink.id = d.idDrink;
    drink.name = d.strDrink;
    drink.isAlcoholic = (d.strAlcoholic === 'Alcoholic');
    drink.glass = d.strGlass;
    drink.instructions = d.strInstructions;
    drink.image = d.strDrinkThumb;
    drink.thumbnail = d.strDrinkThumb + '/preview';
    drink.ingredients = [];
    for(let i = 1; i <= 15; i++) {
        if(!d[`strIngredient${i}`]){
            break;
        }
        drink.ingredients.push({
            ingredient: d[`strIngredient${i}`],
            amount: d[`strMeasure${i}`]
        })
    }
    return drink;
}

const formatString = (str) => {
    return str.split('').map(char => {
        return (char === ' ') ? '_' : char;
    }).join('');
}

//getDrink takes an id or the keyword 'random' and returns a drink object from the api
export const getDrink = async (id) => {
    let url = apiBase;
    if(id === 'random') {
        url += 'random.php';
    } else {
        url += 'lookup.php?i=' + id;
    }
    const res = await fetch(url);
    let json;
    try {
        json = await res.json();
    } catch (e) {
        //If there is no response, return an empty object
        return {};
    }
    return formatDrink(json.drinks[0]);
}

export const getDrinksByName = async (name) => {
    name = formatString(name);
    const url = apiBase + `search.php?s=${name}`;
    const res = await fetch(url);
    let json;
    try {
        json = await res.json();
    } catch (e) {
        //If there is no response, return an empty array
        return [];
    }
    let data = [];
    if (json.drinks){
        data = await json.drinks.map(el => formatDrink(el))
    }
    return data;
}

const formatDrinkList = (list) => {
    return list.map(drink => {
        return {
            name: drink.strDrink,
            image: drink.strDrinkThumb,
            thumbnail: drink.strDrinkThumb + '/preview',
            id: drink.idDrink
        }
    })
}

export const getDrinksByGlass = async (glass) => {
    glass = formatString(glass);
    const url = apiBase + `filter.php?g=${glass}`;

    const res = await fetch(url);
    let json;
    try {
        json = await res.json();
    } catch (e) {
        //If there is no response, return an empty array
        return [];
    }
    return formatDrinkList(json.drinks);

}

export const getDrinksByIngredient = async (ingredient) => {
    ingredient = formatString(ingredient);
    const url = apiBase + `filter.php?i=${ingredient}`;
    const res = await fetch(url);
    let json;
    try {
        json = await res.json();
    } catch (e) {
        //If there is no response, return an empty array
        return [];
    }
    return formatDrinkList(json.drinks);
}
