document.querySelector('#get-recipes').addEventListener('click', handleGetRecipe)

async function handleGetRecipe(){
    const checks = document.querySelector('#ingredient-form').querySelectorAll("input:checked")
    console.log('checks', checks)
    checks.forEach((check) => {

    })

    let strData = '' 
    checks.forEach((item, index)=> {
        console.log(item)
        if (index == 0) {
            strData = item.value + "," 
        } else {
            strData = strData + "+" + item.value + ","
        }
        })
        // res.json(ingredient)
        console.log(strData);

        const response = await fetch('/api/apicall/get-recipes', {
            method: "post",
            body: JSON.stringify({
                ingredients: strData
            }),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await response.json()
        console.log('json', json)
        const recipesEle = document.querySelector('#recipes')
        json.forEach((item) => {
            const container = document.createElement('div')
            container.classList.add('card')
            const imageContainer = document.createElement('div')
            imageContainer.classList.add('card-image')
            const cardImage = document.createElement('img')
            cardImage.src = item.image
            const cardTitle = document.createElement('span');
            cardTitle.classList.add('card-title')
            const recipeTitle = item.title
            cardTitle.append(recipeTitle)
            const cardContent = document.createElement('div')
            cardContent.classList.add('card-content')
            const cardIngredientsUlList = document.createElement('ul');
            const cardIngredientsLiList = document.createElement('li')
            const ingredientsList = item.missedIngredients[0].originalString
            cardIngredientsUlList.appendChild(cardIngredientsLiList)
            const usedIngredient = item.usedIngredients[0].name
            // for (var i = 0; i < ingredientsList.length; i++){
            //     document.createElement('li')
            // }
            
            cardIngredientsLiList.append(usedIngredient)
            cardIngredientsLiList.append(ingredientsList)
            container.appendChild(cardIngredientsUlList)
            container.appendChild(cardTitle);
            container.appendChild(imageContainer);
            imageContainer.append(cardTitle);
            imageContainer.appendChild(cardImage);
            recipesEle.appendChild(container);

        })
}

