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

document.getElementById("formGameOnForm").addEventListener("submit", function(event) {
  event.preventDefault(); // J'empêche le formulaire de se soumettre normalement

  // Initialisation du tableau des erreurs
  const errors = [];

  // Récupération des valeurs des champs du formulaire
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const numTournaments = document.getElementById("numTournaments").value;
  const tournamentChoice = document.querySelector('input[name="tournamentChoice"]:checked');
  const termsConditions = document.querySelector('input[name="termsConditions"]').checked;

  // Fonction de validation de l'adresse email
  function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
  }

  // Fonction de validation du nombre de tournois
  function validateNumTournaments(numTournaments) {
      return !isNaN(numTournaments);
  }

  // Validation des champs du formulaire 
  if (firstName.length < 2) {
      errors.push("Le prénom doit comporter au moins 2 caractères.");
      document.getElementById("firstNameError").textContent = errors[errors.length - 1];
  } else {
      document.getElementById("firstNameError").textContent = "";
  }

  if (lastName.length < 2) {
      errors.push("Le nom de famille doit comporter au moins 2 caractères.");
      document.getElementById("lastNameError").textContent = errors[errors.length - 1];
  } else {
      document.getElementById("lastNameError").textContent = "";
  }

  if (!validateEmail(email)) {
      errors.push("L'adresse électronique n'est pas valide.");
      document.getElementById("emailError").textContent = errors[errors.length - 1];
  } else {
      document.getElementById("emailError").textContent = "";
  }

  if (!validateNumTournaments(numTournaments)) {
      errors.push("Veuillez saisir un nombre valide pour le nombre de concours.");
      document.getElementById("numTournamentsError").textContent = errors[errors.length - 1];
  } else {
      document.getElementById("numTournamentsError").textContent = "";
  }

  if (!tournamentChoice) {
      errors.push("Veuillez sélectionner un tournoi.");
      document.getElementById("tournamentChoiceError").textContent = errors[errors.length - 1];
  } else {
      document.getElementById("tournamentChoiceError").textContent = "";
  }

  if (!termsConditions) {
      errors.push("Vous devez accepter les conditions générales pour continuer.");
  }

  // Affichage des erreurs ou soumission du formulaire
  if (errors.length > 0) {
      console.log("Erreurs de validation :", errors);
  } else {
      // Si aucune erreur, afficher le message de confirmation
      document.getElementById("confirmationMessage").textContent = "Merci ! Votre réservation a été reçue.";
      document.getElementById("confirmationMessage").style.display = "block";
      // event.target.submit();
  }
});
