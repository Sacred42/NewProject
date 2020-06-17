const checkox = document.querySelector('input');

function toggle(){
    const getItem = this.parentNode;
    getItem.classList.toggle('complited');
}

const bnt = document.getElementById('nip').addEventListener('change' , toggle);