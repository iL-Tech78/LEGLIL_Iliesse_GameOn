// function editNav() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }
  
//   // DOM Elements
//   const modalbg = document.querySelector(".bground");
//   const modalBtn = document.querySelectorAll(".modal-btn");
//   const formData = document.querySelectorAll(".formData");
  
//   // launch modal event
//   modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
//   // launch modal form
//   function launchModal() {
//     modalbg.style.display = "block";
//   }
  
  
/*=============== REFONTE NAV ===============*/
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener('click', ()=>{
  navbar.classList.toggle('active');
  menu.classList.toggle('style-menu');
})

// /*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) =>{
  const openBtn = document.getElementById(openButton),
  modalContainer = document.getElementById(modalContent)
  
  if(openBtn && modalContainer){
      openBtn.addEventListener('click', ()=>{
          modalContainer.classList.add('show-modal')
      })
  }
}
showModal('open-modal','modal-container')

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
  const modalContainer = document.getElementById('modal-container')
  modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(close => close.addEventListener('click', closeModal))