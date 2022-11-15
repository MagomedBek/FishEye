class Video{
    constructor(video,name){
        this.id =video.id;
        this.photographerId = video.photographerId;
        this.title = video.title;
        this.video = video.video;
        this.likes = video.likes;
        this.date = video.date;
        this.price =video.price;
        this.vidAdress =`./assets/images/${name}/${this.video} `;
    }

    display(){
       return `<article class = "media" data-id ="${this.id}">
                <video class= "image" src="${this.vidAdress}" alt="${this.video}" id="${this.id}"></video>
            <div class="infocard">
                <h2>${this.title}</h2>
                <div class="likes">
                    <p>${this.likes}</p>
                    <i class="fas fa-heart"></i>
                </div>
            </div>
        </article>`
    }

    slided(){
        return `<article class = "media" data-id ="${this.id}">
        <video controls class= "image" src="${this.vidAdress}" alt="${this.video}" id="${this.id}">
        <source src="${this.video}" type ="video/mp4">
        </video>
        
      
    </div>
             <div class="infocard">
                 <h2>${this.title}</h2>
                 
             </div>
         </article>`
     }
}