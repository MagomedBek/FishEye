class Image{
    constructor(image,name){
        this.id =image.id;
        this.photographerId = image.photographerId;
        this.title = image.title;
        this.image = image.image;
        this.likes = image.likes;
        this.date = image.date;
        this.price =image.price;
        this.imgAdress =`./assets/images/${name}/${this.image} `;
    }
    
    display(){
        
        
       return `<article class = "media" data-id ="${this.id}" tabindex= '0'>
                <img  tabindex= "0" class= "image" src="${this.imgAdress}" alt="${this.image}" id="${this.id}">
            <div class="infocard">
                <h2>${this.title}</h2>
                <div class="likes">
                    <p>${this.likes}</p>
                    <i class="fas fa-heart" aria-label="likes"></i>
                </div>
            </div>
        </article>`
    }

    slided(){
        
        
        return `<article class = "media" data-id ="${this.id}" tabindex= "0">
                 <img class= "image" src="${this.imgAdress}" alt="${this.image}" id="${this.id}">
             <div class="infocard">
                 <h2>${this.title}</h2>
             </div>
         </article>`
     }
}