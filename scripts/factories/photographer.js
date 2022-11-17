function photographerFactory(data) {
    const  {id, name, portrait, city,country,tagline,price} = data;
    const picture = `assets/images/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const link =document.createElement('a');
        const uri = `photographer.html?id=${id}`;
        link.setAttribute("href",uri)
        article.appendChild(link);
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt",name);
        img.setAttribute("id",`${id}`);
        link.appendChild(img);
        article.appendChild(link);
        const button = document.querySelector(".contact_button")
        article.appendChild(button);
        const infocard = document.createElement ('div');
        infocard.className = "infocard";
       
        const description = document.createElement ('div');
        description.className = "desc";

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}`;
        const tag = document.createElement('p');
        tag.textContent = tagline;
        const popularity = document.createElement('div')
        popularity.classList.add('popularity');

        const priceP = document.createElement('p');
        priceP.classList.add("price");
        priceP.textContent = `${price}€/jour`;
        const likesT = document.createElement("div");
        likesT.classList.add("totalLikes")
        let likesnb = document.createElement("p");
        likesnb.classList.add("likesnb");
        likesnb.textContent = "0"
        const icon = document.createElement("i");
        icon.classList.add("fas","fa-heart");
        likesT.append(likesnb,icon)
        popularity.append(likesT,priceP)
        description.append(h3,tag,popularity)
        infocard.append(h2,description)
        
        article.appendChild(infocard);
       
        return (article);
    }

    function getUserCardDOM2(){
        return `<article>
            <a href="photographer.html?id=${id}">
                <img src="${picture}" alt="${name}" id="${id}">
            </a>
            <div class="infocard">
                <h2>${name}</h2>
                <div class="desc">
                    <h3>${city}, ${country}</h3>
                    <p>${tagline}</p>
                    <p>${price}€/jour</p>
                </div>
            </div>
        </article>`
    }
   

 
    return { id,name, portrait, city,country,tagline,price, getUserCardDOM,getUserCardDOM2 }
}



function menu(){

    
   function genererSelector(){

    return `
    <span>
    <p>Trier par </p>
    <select name="menu" id="menu">
        <option value="" id="selector" >Selectionnez la categorie</option>
        <option value="popular" id="popular" >Popularité</option>
        <option value="date" id="date">Date</option>
        <option value ="title" id="title">Titre</option>
    </select>
 </span>
 `
   }

   function genererMenu(){

    return `
        
         <p>Trier par</p>
         <div id="menu">
         <div id = "selector" >
             <span ><p>Selectionner</p><i class="fas fa-chevron-right"></i></span>
         </div>
             <ul >
                <li id="popular">Popularité</li>
                <li  id="date">Date</li>
                <li  id="title">Titre</li>
            
             </ul>
        </div>
    `
   }
   
     return {genererMenu,genererSelector}   
    }

function select(listMedia,type){
   // let type =  menu.value;
   // let selector =document.getElementById("selector"); 
        /*function selected(){
            if(document.body.contains(selector)){
                //menu.removeChild(selector);
                selector.classList.add("mouved")
            }
         }  */

   switch(type){
    
        case "popular":
            listMedia.sort((a, b) => b.likes - a.likes);
            //selected()
            break;
        case "date":
            listMedia.sort((a, b) => Date.parse(b.date) -  Date.parse(a.date));
           //selected()
            break;
        case "title":
            listMedia.sort((a, b) => a.title.localeCompare(b.title));
           //selected();
            break;
    }


}

function slider(){
    return `<div id="lightbox" aria-label="Image closeup view">
                <i class="fas fa-chevron-left previous" aria-label="Previous image"></i>    
            <div id="content">
            </div>
                <i class="fas fa-chevron-right next " aria-label="Next image"></i>
                <i class="fas fa-times close" aria-label="Close dialog"></i>
            </div>`
}