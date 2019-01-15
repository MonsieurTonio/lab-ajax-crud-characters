const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList ()
  }
  
  // THIS ONE DOESN'T WORK

  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementById("chr-id").value;
    charactersAPI.getOneRegister(id)
  }
  
  document.getElementById('delete-one').onclick = function(){
        
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
            
  }
  
  document.getElementById('new-character-form').onsubmit = function(){
                
  }
})
