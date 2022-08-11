const menu =document.querySelector('.flexcontainer');
const closemenu =document.querySelector('.closecontainer');
const openmenu =document.querySelector('.opencontainer');

openmenu.addEventListener('click',show);
closemenu.addEventListener('click',show);

function show(){
    menu.style.display = 'flex';
    menu.style.top  = '0';
}
function close(){
    menu.style.top ='100%';
}