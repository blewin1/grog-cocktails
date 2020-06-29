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
    const data = await res.json();
    return formatDrink(data.drinks[0]);
}

export const getDrinksByName = async (name) => {
    name = formatString(name);
    console.log('API NAME FORMATTED --', name);
    const url = apiBase + `search.php?s=${name}`;
    const res = await fetch(url);
    const json = await res.json();
    console.log(json)
    let data = {};
    if (json.drinks){
        data = await json.drinks.map(el => formatDrink(el))
    }
    console.log(data) //DELETE
    return data;
}

// .then(json => json.drinks.map(el => formatDrink(el)));

// export default getDrink;


    // 
    // const getDrink = async (id) => {
    //     let url = apiBase;
    //     if(id === 'random') {
    //         url += 'random.php';
    //     } else {
    //         url += 'lookup.php?i=' + id;
    //     }
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     // setSelectedDrink(data);
    //     console.log('data', data)
    //     const formattedData = formatDrink(data);
    //     console.log('formattedData', formattedData)
    //     setSelectedDrink(formattedData);
    // }

    // const formatDrink = (unformatted) => {
    //     const d = unformatted.drinks[0];
    //     console.log('d', d)

    //     const drink = {};
    //     drink.id = d.idDrink;
    //     drink.name = d.strDrink;
    //     drink.isAlcoholic = (d.strAlcoholic === 'Alcoholic');
    //     drink.glass = d.strGlass;
    //     drink.instructions = d.strInstructions;
    //     drink.image = d.strDrinkThumb;
    //     drink.thumbnail = d.strDrinkThumb + '/preview';
    //     drink.ingredients = [];
    //     for(let i = 1; i <= 15; i++) {
    //         if(!d[`strIngredient${i}`]){
    //             break;
    //         }
    //         drink.ingredients.push({
    //             ingredient: d[`strIngredient${i}`],
    //             amount: d[`strMeasure${i}`]
    //         })
    //     }
    //     return drink;
    // }