

function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("id","showContact");
   const forme = document.querySelector("#showContact .modal")
   forme.focus();
    var name = document.querySelector(".infocard h2");
    var contact = document.querySelector(".modal header h2");
    if(!contact.textContent.includes(name.textContent)){
      contact.innerHTML += ' '+ name.textContent; 
    }
    
}

function request() {
    
       
        let valid = true;

        var forme = document.querySelectorAll('.contactData input, .contactData textarea');
        forme.forEach(field =>{
            field.closest('.contactData').classList.remove('error');
            let check = field.checkValidity();
            valid &= check;
            
            if(!check){
              field.closest('.contactData').classList.add('error');
              field.closest('.contactData').querySelector('.errorMsg').innerHTML = field.validationMessage;
            }
          })
            if(valid)
            {
              
              // form Apres la validation 
              var message =document.querySelector(".modal header h2 ")
              message.innerHTML = ' Votre message est envoyé à '+ '. ';
              forme.forEach(field =>{
                  console.log(field.name+": "+field.value)
              }

              )
              document.querySelector('.contactRequest').classList.add('hide')
              document.querySelector("#contactBlock").classList.add("hide")
            }
      
        
   
 
    
          
        
}

function closeModal() {
    const modal = document.getElementById("showContact");
    modal.setAttribute("id","contact_modal");
}

function  keyClose(){
  let button = document.querySelector(".closeModal");
    button.addEventListener("click", () =>{
      console.log("ok escape");
    })
  button.addEventListener("keyup", (e) => {
    if(e.key === "Escape") {
      // write your logic here.
      console.log("ok escape");
  }
      closeModal();
    
})
}