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

/*=============== FORMULAIRE ===============*/
// let form = document.querySelector("#loginForm")
// // console.log(form.firstName, form.lastName, form.email);
// // Ecouter la modification de l'email
// form.email.addEventListener('change', ()=> {
//   validEmail(this);
// })
// // const validEmail = function (inputEmail) {
// //   let emailRegExp = new RegExp(
// //   "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,10}$/g"
// //   // de a à z en minuscule ou en maj de 0 a 9 et des . - _ plusieurs fois; 
// //   // une fois le @
// //   // de a à z en minuscule ou en maj de 0 a 9 et des . - _ plusieurs fois; 
// //   // le caractère du . une fois
// //   // des lettre de 2 a 10 maxi
// //   // 
// //   );
// //   let testEmail = emailRegExp.test(inputEmail.value)
// //   console.log(testEmail);
// // }

// function validateEmail(email) {
//   // Expression régulière pour valider l'adresse e-mail
//   let emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-z]{2,10}$/;
  
//   // Test de l'adresse e-mail avec l'expression régulière
//   return emailRegExp.test(email);
// }

// // Exemple d'utilisation de la fonction
// let email = "example@email.com";
// if (validateEmail(email)) {
//   console.log("L'adresse e-mail est valide !");
//   console.log(testEmail);
// } else {
//   console.log("L'adresse e-mail n'est pas valide !");
//   console.log(testEmail);
// }

// document.getElementById("formGameOnForm").addEventListener("submit", function(event) {
//   event.preventDefault(); // J'empêche le formulaire de se soumettre.

//   // Initialisation du tableau des erreurs
//   const errors = [];

//   // Récupération des valeurs des champs du formulaire
//   const firstName = document.getElementById("firstName").value;
//   const lastName = document.getElementById("lastName").value;
//   const email = document.getElementById("email").value;
//   const birthdate = document.getElementById("birthdate").value;
//   const numTournaments = document.getElementById("numTournaments").value;
//   const tournamentChoice = document.querySelector('input[name="tournamentChoice"]:checked').value;
//   const termsConditions = document.querySelector('input[name="termsConditions"]').checked;
//   const notifyEvents = document.querySelector('input[name="notifyEvents"]').checked;


// });


document.getElementById("formGameOnForm").addEventListener("submit", function(event) {
  event.preventDefault(); // J'Empêche le formulaire de se soumettre normalement

  // Initialisation du tableau des erreurs
  const errors = [];

  // Récupération des valeurs des champs du formulaire
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const numTournaments = document.getElementById("numTournaments").value;
  const tournamentChoice = document.querySelector('input[name="tournamentChoice"]:checked');
  const termsConditions = document.querySelector('input[name="termsConditions"]').checked;

  // Fonction de validation de l'adresse email (rendre plus compliqué par la suite)
  function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  // Fonction de validation du nombre de tournois
  function validateNumTournaments(numTournaments) {
      return !isNaN(numTournaments);
  }

  // Validation des champs du formulaire 
  if (firstName.length < 2) errors.push("Le prénom doit comporter au moins 2 caractères.");
  if (lastName.length < 2) errors.push("Le nom de famille doit comporter au moins 2 caractères.");
  if (!validateEmail(email)) errors.push("L'adresse électronique n'est pas valide.");
  if (!validateNumTournaments(numTournaments)) errors.push("Veuillez saisir un nombre valide pour le nombre de concours.");
  if (!tournamentChoice) errors.push("Veuillez sélectionner un tournoi.");
  if (!termsConditions) errors.push("Vous devez accepter les conditions générales pour continuer.");

  // Affichage des erreurs ou soumission du formulaire
  if (errors.length > 0) {
      // Afficher les erreurs
      console.log("Erreurs de validation :", errors);
      // les ajouter sur le html plus tard
  } else {
      // Si aucune erreur, soumettre le formulaire
      alert("Pas de fautes");
      event.target.submit();
  }
});
