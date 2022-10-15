var listImg = [
    {
        "img" : "phone1-500.jpg",
    },
    {
        "img" : "netflix2-400.jpg",
    },
    {
        "img" : "phone3-400.jpg",
    },
    {
        "img" : "Ryzen.jpg",
    },
    {
        "img" : "phone4-400.jpg",
    },
    {
        "img" : "phone5-400.jpg",
    },
    {
        "img" : "phone6-400.jpg",
    },
    {
        "img" : "phone7-400.jpg",
    }
]

window.onload = function domImg(){
    parentImgElt = document.getElementsByClassName("image-responsives")[0]
    

    for(let imge of listImg){
        let newImg = document.createElement("div")
        
        newImg.setAttribute("class", "images ")
        console.log(newImg)
        newImg.innerHTML= `
        <a href="#"><img class="img-fluid" src="img/${imge["img"]}" width="400"></a>
        `
        parentImgElt.append(newImg)
        
    }
}