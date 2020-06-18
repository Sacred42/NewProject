
function Edit(){

   const li = this.parentNode;
   const span = li.querySelector('span');
   const btn = li.querySelector('.btn');
   const ISedit = li.classList.contains('edeting');
   
   if(ISedit){
       btn.innerText = 'Change';
   }
   else{
       btn.innerText = 'Save';
   }
   li.classList.toggle('edeting');
}

const Allbtn = document.querySelectorAll('.btn');
Allbtn.forEach((el)=>{
    el.addEventListener('click', Edit);
});