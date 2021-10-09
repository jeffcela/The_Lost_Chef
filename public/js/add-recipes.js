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
<<<<<<< HEAD
            const cardContainer = document.createElement(‘div’)
            cardContainer.classList.add(‘card’)
            
            
            
            const cardImage = document.createElement(‘img’)
            cardImage.src = item.image
            const cardTitle = document.createElement(‘span’);
            cardTitle.classList.add(‘card-title’)
            const recipeTitle = item.title
            cardTitle.append(recipeTitle)
            const cardContent = document.createElement(‘div’)
            cardContent.classList.add(‘card-content’)
            const cardIngredientsUlList = document.createElement(‘ul’);
            const cardIngredientsLiList = document.createElement(‘li’)
            const ingredientsList = item.missedIngredients[0].originalString
            cardIngredientsUlList.appendChild(cardIngredientsLiList)
            const usedIngredient = item.usedIngredients[0].name
            // for (var i = 0; i < ingredientsList.length; i++){
            //     document.createElement(‘li’)
            // }
            cardContent.append(cardIngredientsUlList)
            cardIngredientsLiList.append(usedIngredient)
            cardIngredientsLiList.append(ingredientsList)
            container.appendChild(cardIngredientsUlList)
            container.appendChild(cardTitle);
            container.appendChild(imageContainer);
            container.appendChild(cardContent)
            cardTitle.append(cardImage);
            imageContainer.appendChild(cardImage);
            recipesEle.appendChild(container);
white_check_mark
eyes
raised_hands







Send a message to Sebastian Campos



=======
            const cardRow = document.createElement('div')
            cardRow.classList.add('row')
            const cardCol = document.createElement('div')
            cardCol.classList.add('col', 'm3')
            // const lineBreak = document.createElement('br')
          const cardContainer = document.createElement('div')
          cardContainer.classList.add('card')
          const imageContainer = document.createElement('div')
          cardContainer.classList.add('card-image')
          const cardImage = document.createElement('img')
          cardImage.src = item.image
          const cardTitle = document.createElement('span');
          cardTitle.classList.add('card-title')
          const recipeTitle = item.title
          cardTitle.append(recipeTitle)
          const cardContent = document.createElement('div')
          cardContent.classList.add('card-content')
          const ingredientsList = item.missedIngredients[0].originalString
          const cardIngredientsUlList = document.createElement('ul');
          const cardIngredientsLiList = document.createElement('li')
        //  for(var i = 0; i < json.length;  i++){
        //      console.log(json[i].missedIngredients)
        //      var ing = missedIngredients
        //     }
        
        // for(var j = 0; j<= missedIngredients.length; j++){
        //     console.log(missedIngredients[j].or)
        // }
          cardIngredientsUlList.appendChild(cardIngredientsLiList)
          const usedIngredient = item.usedIngredients[0].originalString
        //     for (var i = 0; i <= ingredientsList.length; i++){
        //        document.createElement('li')
        //     }
          
          cardRow.appendChild(cardCol)
          cardCol.appendChild(cardContainer)
          cardContainer.appendChild(imageContainer)
          imageContainer.appendChild(cardImage)
          imageContainer.appendChild(cardTitle)
          cardContainer.appendChild(cardContent)
          cardContent.appendChild(cardIngredientsUlList)
        //   cardContent.appendChild(lineBreak)
          cardIngredientsLiList.append(usedIngredient)
        cardIngredientsUlList.append(ingredientsList)
          recipesEle.appendChild(cardRow);
>>>>>>> main

        })
}

