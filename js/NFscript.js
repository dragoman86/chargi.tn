/*Dom carte psn*/

var itemsList = [
    {
        "name" : "Carte Netflix 15Eur",
        "img" : "netflix15eur.jpg",
        "description" : "Carte Cadeau Netflix €15 ",
        "price" : 45
    },
    {
        "name" : "Carte Netflix 30Eur",
        "img" : "netflix30eur.jpg",
        "description" : "Carte Cadeau Netflix €30 ",
        "price" : 95
    },
    {
        "name" : "Carte Netflix 50Eur",
        "img" : "netflix50eur.jpg",
        "description" : "Carte Cadeau Netflix €50 ",
        "price" : 155
    },
    {
        "name" : "Carte Netflix 100Eur",
        "img" : "netflix100eur.jpg",
        "description" : "Carte Cadeau Netflix €100 ",
        "price" : 310 
    },
    {
        "name" : "Carte Netflix 200Eur",
        "img" : "netflix200eur.jpg",
        "description" : "Carte Cadeau Netflix €200 ",
        "price" : 620
    },
    {
        "name" : "Carte Netflix 300Eur",
        "img" : "netflix300eur.jpg",
        "description" : "Carte Cadeau Netflix €300 ",
        "price" : 915
    }
]

window.onload = function dom(){
    let parentElement = document.getElementsByClassName("items-list")[0]

    for(let item of itemsList){
        let newItem = document.createElement("div")
        newItem.setAttribute("class", "card")
        newItem.innerHTML = `
        <h3 class="card-title text-danger">${item["name"]}</h3>
        <img class="card-img-top" src="img/${item["img"]}" alt="Card image cap">
        <p class="card-text text-secondary">${item["description"]}</p>
        <div class="card-body">
            <button class="btn-favoris btn btn-outline-danger">Favorites</button><br>
            <span style="font-weight: 600;font-size: 2rem" class="text-dark">${item["price"]}DT</span><br>
            <button class="add-btn btn btn-danger">ADD TO CARD</button>
         </div>
        `
        parentElement.append(newItem)
    }

    let addButtons = document.getElementsByClassName("add-btn")
    for (let addButton of addButtons){
        addButton.addEventListener("click", addToCard)
    }

    let favButtons = document.getElementsByClassName("btn-favoris")
    for (let favButton of favButtons){
        favButton.addEventListener("click", addToFav)
    }
}

/*function to add an item in a favorite list*/
function addToFav(f){
    let clickFavBtn = f.target
    
    let favImg = clickFavBtn.parentElement.parentElement.getElementsByTagName("img")[0].src
    let favName = clickFavBtn.parentElement.parentElement.getElementsByTagName("h3")[0].innerHTML
    console.log(favName) 

    let favItems = document.getElementsByClassName("fav-item")
    
    for (let favItem of favItems){
        let curImg = favItem.getElementsByTagName("img")[0].src
        if (curImg == favImg){
            alert ("This Product is already added in Favorite list")
            return  
        }
    } 

    let newFavList = document.createElement("div")
    newFavList.setAttribute("class", "fav-item d-flex justify-content-between")
    
    newFavList.innerHTML = `
    <img style="width:5rem; height:6rem;" src="${favImg}">
    <h3 class="prt-name">${favName}</h3>
    `
    
    document.getElementsByClassName("fav-items")[0].append(newFavList)
    
}

/*function to add an item in card list to purchase later*/
function addToCard(c){
    let clickedButton = c.target
    let newImg = clickedButton.parentElement.parentElement.getElementsByTagName("img")[0].src
    let price = parseFloat(clickedButton.parentElement.getElementsByTagName("span")[0].innerText.replace("DT", ""))
    
    let cartItems = document.getElementsByClassName("cart-item")
    for (let cartItem of cartItems){
        let currentImg = cartItem.getElementsByTagName("img")[0].src
        if(currentImg == newImg){
            alert ("This already exist")
            return
        }
    }

    let newCartItem = document.createElement("div")
    newCartItem.setAttribute("class", "cart-item d-flex justify-content-between")

    newCartItem.innerHTML = `
    <img src="${newImg}">
    
    <input type="number" value="1" min="1" onKeyDown="return false">
    <div>
       <span>${price}DT</span>
       <button class="btn-remove btn btn-outline-danger">Remove</button>
       <hr>
    </div>
    `

    document.getElementsByClassName("cart-items")[0].append(newCartItem)
    newCartItem.getElementsByClassName("btn-remove")[0].addEventListener("click",remove)
    newCartItem.getElementsByTagName("input")[0].addEventListener("change", function(){
        let totalLocal = price * newCartItem.getElementsByTagName("input")[0].value
        newCartItem.getElementsByTagName("span")[0].innerText = totalLocal + "DT"
        updateTotal()
    })
    updateTotal()
}
/*function to remove an item from card list*/
function remove(e){
   let buttonClicked = e.target
   let blockToDelete = buttonClicked.parentElement.parentElement
   blockToDelete.remove()
   updateTotal()
}
/*function to update the global total of the list selected*/
function updateTotal(){
    let newTotal = 0
    let cardItems = document.getElementsByClassName("cart-item")
    for (let cartItem of cardItems){
        let price = parseFloat(cartItem.getElementsByTagName("span")[0].innerText.replace("DT",""))
        newTotal += price
    }
    document.getElementsByClassName("total")[0].innerText = newTotal
}