function displayModal() {
    const modal = document.getElementById("contact_modal");
	  modal.setAttribute("id","showContact");
    var name = document.querySelector(".infocard h2");
    var contact = document.querySelector(".modal header h2");
    contact.innerHTML += ' '+ name.textContent; 
}

function request() {
    
       
        let valid = true;

        document.querySelectorAll('.contactData input, .contactData textarea').forEach(field =>{
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
              var message =document.querySelector(".modal header h2")
              message.innerHTML = '<p class = "valMsg" >Votre message est envoyé.</p> ';
              
              document.querySelector('.contactRequest').classList.add('hide')
              document.querySelector("#contactBlock").classList.add("hide")
            }
      
        
   
 
    
          
        
}

function closeModal() {
    const modal = document.getElementById("showContact");
    modal.setAttribute("id","contact_modal");
}
