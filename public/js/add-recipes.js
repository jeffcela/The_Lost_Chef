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
            const cardImage = document.createElement('img')
            cardImage.src = item.image
           
            const imageConagtiner = document.createElement('div')
            imageConagtiner.classList.add('card-image')
            imageConagtiner.appendChild(cardImage)
            container.appendChild(imageConagtiner)
            recipesEle.appendChild(container)

        })
}

