
function toggle(){
    const getItem = this.parentNode;
    getItem.classList.toggle('complited');
}

const checkox = document.querySelectorAll('.chb');

checkox.forEach((el)=> {
    el.addEventListener('change' , toggle);
} );