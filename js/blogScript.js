var listBlog = [
    {
        "title" : "PlayStation Store Gift Card",
        "title2" : "Bonus Program",
        "date" : "Oct 22",
        "text" : "Get More, Play More with PlayStation® Gift Cards. Redeem for anything on PlayStation™Store: games, add-ons, memberships and more. PlayStation®Plus: Use gift card funds to contribute towards PlayStation®Plus memberships, with online multiplayer access, games every month, exclusive discounts and more (scroll down for more details). Find exclusive deals on top games: With regular deals and discounts, there's always something to play at a price you'll love. Pre-order. Preload. Play: Can't wait for a game? Preload it to your console and play as soon as it’s available. Download purchases remotely: Add your purchases to your download queue from anywhere online - and start playing sooner. Enhance your PlayStation® experience: Pick your plan with PlayStation®Plus. Discover three membership plan options, benefits, and more. Essential: Monthly Games, Online Multiplayer, discounts and more. Extra: Discover a huge catalogue of incredible PS5™and PS4™games (includes everything in Essential). Premium: Enjoy streaming, Classic games, trials and more (includes everything in Extra).",
        "img" : "playstation6.jpg",
    },
    {
        "title" : "Google Play Store Gift Card",
        "title2" : "Bonus Program",
        "date" : "Sep 22",
        "text" : "Google Play, also branded as the Google Play Store and formerly Android Market, is a digital distribution service operated and developed by Google. It serves as the official app store for certified devices running on the Android operating system and its derivatives as well as ChromeOS, allowing users to browse and download applications developed with the Android software development kit (SDK) and published through Google. Google Play has also served as a digital media store, offering games, music, books, movies, and television programs be.[4] Content that has been purchased on Google Play Movies & TV and Google Play Books can be accessed on a web browser, and through the Android and iOS apps.",
        "img" : "phone4.jpg",
    },
    {
        "title" : "Netflix Store Gift Card",
        "title2" : "Bonus Program",
        "date" : "Oct 22",
        "text" : "Netflix can be accessed via web browsers or via application software installed on smart TVs, set-top boxes connected to televisions, tablet computers, smartphones, digital media players, Blu-ray players, video game consoles and virtual reality headsets on the list of Netflix-compatible devices.It is available in 4K resolution.In the United States, the company provided Digital Video Disc (DVD) and Blu-ray rentals delivered individually via the United States Postal Service from regional warehouses.",
        "img" : "netflix6.jpg",
    }
]

window.onload = function domBlog(){
    parentBlogElt = document.getElementsByClassName("blog-items")[0]
    

    for(let blog of listBlog){
        let newBlog = document.createElement("div")
        
        newBlog.setAttribute("class", "blog-item")
        
        newBlog.innerHTML= `
    <div class="row mb-2">
    <div class="col-md-15">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="text-danger d-inline-block mb-2 text-primary">${blog["title"]}</strong>
          <h3 class="mb-0">${blog["title2"]}</h3>
          <div class="mb-1 text-muted">${blog["date"]}</div>
          <p class="card-text mb-auto">${blog["text"]}</p>
          <a href="#" class="text-danger stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img src="img/${blog["img"]}" width="300">
        </div>
      </div>
    </div>
  </div>
        `
        console.log(newBlog)
        parentBlogElt.append(newBlog)
        
    }
}
