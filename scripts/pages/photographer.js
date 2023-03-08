//Mettre le code JavaScript lié à la page photographer.html
let url = new URL(window.location);
let id = url.searchParams.get("id");
console.log(id);

const photos = document.querySelectorAll('.media');

 

async function getPhotographer() {
    // Penser à remplacer par les données récupérées dans le json
    let data = await  fetch ("./data/photographers.json") ;
    let database = await  data.json();
    let photographer = database.photographers.find(p => p.id == id);
    let listMedia = database.media.filter(m => m.photographerId == id);
    let info = console.log(photographer)
    // et bien retourner le tableau photographers seulement une fois
    return  {photographer,listMedia};


    
        
}

async function displayData(photographer,listMedia) {
    const photographerSection = document.querySelector(".photograph-header");
   
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    
        
        photographerSection.appendChild(userCardDOM);
        let info = console.log(photographerModel)
        displayMediaData(listMedia);

      
        
        
        
};


function displayMediaData(listMedia){
    
    const mediaSection = document.querySelector(".mediaSection");
    mediaSection.innerHTML = "";
   // mediaSection.innerHTML += menu(listMedia).generer();
    mediaSection.innerHTML += slider();
    listMedia.forEach((media)=>{
        //  const mediaModel = new MediaFactory(media,photographer.name.split(" ")[0]);
          const mediaCardDOM =media.display();
          
          mediaSection.innerHTML += mediaCardDOM;
      })
    // menu(listMedia);
      setSlide(listMedia);
      const medias = document.querySelectorAll('media');
      medias.forEach((media) => media.addEventListener("click",setSlide()))

      let sortMenu = document.getElementById("menu");
      //select(listMedia,sortMenu.options[sortMenu.selectedIndex].value); 
      
    

      
       
    
         /* sortMenu.addEventListener("change",(e)=>{
            
            select(listMedia,sortMenu.value);  
            displayMediaData(listMedia);
          })*/
          
        
       
        

      const likes = document.querySelectorAll('.media .fa-heart');
      likes.forEach((like) => like.closest(".likes").addEventListener("click",likeIt));
      const totalLikes = listMedia.map(media => media.likes).reduce((like,total)=>total+like)
      document.querySelector(".likesnb").innerHTML = totalLikes;


      
}

function likeIt(e){
   let nbLike = e.currentTarget.querySelector("p");
   let total = document.querySelector(".likesnb");
   nbLike.innerHTML = parseInt(nbLike.innerHTML)+1;
   total.innerHTML = parseInt(total.innerHTML)+1;
}

function setSlide(listMedia){
    let lightbox = new LightBox(listMedia);
    
    document.querySelectorAll(".mediaSection .media .image ").forEach(mediaCardDOM => {
        mediaCardDOM.addEventListener("keyup", (event) => {
            if(event.key=== "Enter"){
                lightbox.show(event.currentTarget.closest(".media").dataset.id);
                
               }
        });
        mediaCardDOM.addEventListener("click", (event) => {
            lightbox.show(event.currentTarget.closest(".media").dataset.id);
        })
    })
}

function toSort(listMedia){

    
    //let sortMenu = document.getElementById("menu");
    let sortM = document.querySelectorAll("ul li");
    let selector = document.querySelector("#selector");
    let menu =document.querySelector("ul")
    let arrow=document.querySelector("#selector span i ");
    
   /* sortMenu.addEventListener("change",()=>{ 
        select(listMedia,sortMenu);  
        displayMediaData(listMedia);
        
      })*/

      function showMenu(){
        if(menu.classList.contains("showed")){
            menu.classList.remove("showed");
            arrow.classList.remove("turned");
    
        }else{
            menu.classList.add("showed");
            arrow.classList.add("turned");
            menu.querySelector("li").focus();
            
        }
      };
      selector.addEventListener("click",showMenu);
      selector.addEventListener("keyup",(e) => {
        switch(e.key){
            case "Enter" : 
                showMenu();
                break;
           }
      });
      sortM.forEach(menuElem => {
            
          menuElem.addEventListener("click",filterMedia);
          menuElem.addEventListener("keyup",(e) =>{
            if(e.key === "Enter"){
                filterMedia(e);
            }
            
        
        })
              
      })

      function filterMedia(e){
        select(listMedia,e.target.id);
        sortM.forEach(menuElem => {
            e.target.classList.remove("selected"); 
        }
           );
        
           e.target.classList.add("selected"); 
        selector.querySelector("p").innerHTML = e.target.textContent;
        menu.classList.remove("showed");
        arrow.classList.remove("turned");
         displayMediaData(listMedia); 
    }
      
}

function displayMenu(){
    let menuSection = document.querySelector(".menuSection");
    menuSection.innerHTML = menu().genererMenu();
};

async function init() {
    // Récupère les datas des photographes
    const {photographer,listMedia}   = await getPhotographer();
    let listMediaFactory = [];
    listMedia.forEach((media)=>{
        listMediaFactory.push ( new MediaFactory(media,photographer.name.split(" ")[0]));
    
    })
    //document.querySelector("#popular ").addEventListener("click",menu(listMedia).select())
   // listMediaFactory.sort((a, b) => a.likes - b.likes);
    displayData(photographer,listMediaFactory);
    displayMenu();
   toSort(listMediaFactory);
   // let sortMenu = document.querySelectorAll("#menu li");
   displayMediaData(listMediaFactory);
   keyClose();
    document.querySelector(".contactRequest").addEventListener("click",function(e){
        e.preventDefault()
        request();
    })
    
};


init();

    
  /* function findPhotographer(id){
    let photographer = null;
    for(let p of database.photographers){
        if(p.id==id){
            photographer=p;
        }
    }
   } 

   const findPhotographer = id=> {
    let photographer = null;
    for(let p of database.photographers){
        if(p.id==id){
            photographer=p;
        }
    }
   }*/