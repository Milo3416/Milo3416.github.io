const btonAbrilModal = 
document.querySelector("#bton-abrir-modal");
const btonCerrarModal =
document.querySelector("#bton-cerrar-modal");
const modal =
document.querySelector("#modal");

btonAbrilModal.addEventListener("click",()=>{modal.showModal()})

btonCerrarModal.addEventListener("click",()=>{modal.close()})
