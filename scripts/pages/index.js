    
    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        let data = await  fetch ("./data/photographers.json") ;
        let database = await  data.json();
        
       
        
        // et bien retourner le tableau photographers seulement une fois
        return  database.photographers
            
    }
    
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM2();
            //photographersSection.appendChild(userCardDOM);
            photographersSection.innerHTML+=userCardDOM;
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const  photographers  = await getPhotographers();
        displayData(photographers);
        
    };
    
    init();
    