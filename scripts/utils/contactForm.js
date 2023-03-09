

function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute("id","showContact");
   const forme = document.querySelector("#showContact .modal").focus();
    var name = document.querySelector(".infocard h2");
    var contact = document.querySelector(".modal header h2  ");
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

  const button = document.querySelector(".contact_button");
  console.log(button)
  
  document.addEventListener("keyup", (e) => {
    console.log(e.key);
    if(e.key === "Escape") {
      button.focus()
      closeModal();
  }
  
})
}