const apiBase = 'https://www.thecocktaildb.com/api/json/v1/1/';



const formatDrink = (unformatted) => {
    const d = unformatted.drinks[0];
    console.log('d', d)

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

const getDrink = async (id) => {
    let url = apiBase;
    if(id === 'random') {
        url += 'random.php';
    } else {
        url += 'lookup.php?i=' + id;
    }
    const res = await fetch(url);
    const data = await res.json();
    return formatDrink(data);
}

export default getDrink;


    // //getDrink takes an id or the keywork 'random' and returns a drink object from the api
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