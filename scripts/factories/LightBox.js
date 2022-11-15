class LightBox{
    constructor(listMedia){
            this.currentMedia = null;
            this.listMedia = listMedia;
            this.container = document.querySelector("#content");
            this.element = document.querySelector("#lightbox");
            this.manageEvent();
            
    }

    show(id){
        this.currentMedia = this.listMedia.find( media => media.id == id);
        this.container.innerHTML = this.currentMedia.slided();
        this.element.classList.add("show");
    }

    next(){
       let index =  this.listMedia.findIndex(media => media.id == this.currentMedia.id)
       if(index == this.listMedia.length-1){
            this.currentMedia = this.listMedia[0]
       }else{
        this.currentMedia =  this.listMedia[index+1];
       }
    
        this.container.innerHTML = this.currentMedia.slided();

        
    }

    previous(){
        let index =  this.listMedia.findIndex(media => media.id == this.currentMedia.id)
       if(index == 0){
            this.currentMedia = this.listMedia[this.listMedia.length-1]
       }else{
        this.currentMedia =  this.listMedia[index-1];
       }
        
        this.container.innerHTML = this.currentMedia.slided();

    }
    
    close(){
        this.element.classList.remove("show"); 
    }

    manageEvent(){
            document.querySelector("#lightbox .next").addEventListener("click", ()=>{
                this.next();
            })

            document.querySelector("#lightbox .previous").addEventListener("click", ()=>{
                this.previous();
            })

            document.querySelector("#lightbox .close").addEventListener("click", () => {
                this.close();
            })
            document.addEventListener("keyup", (e) => {
                   switch(e.key){
                    case "Escape" : 
                        this.close();
                        break;
                    case "ArrowRight" : 
                        this.next();
                        break;
                    case "ArrowLeft" : 
                        this.previous();
                        break;
                   }
            })
    }
}
