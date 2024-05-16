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
  const btnFermer = document.querySelector('btn-fermer');

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

  if (!numTournaments.trim() || isNaN(numTournaments) || numTournaments < 0) {
    document.getElementById("numTournamentsError").textContent = "Veuillez saisir un nombre supérieur ou égal à 0 pour le nombre de concours.";
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
    document.getElementById("termsConditionsError").textContent = errors[errors.length - 1];
  } else {
    document.getElementById("termsConditionsError").textContent = "";
}

  // Affichage des erreurs ou soumission du formulaire
  if (errors.length > 0) {
      console.log("Erreurs de validation :", errors);
  } else {
      // Si aucune erreur, afficher le message de confirmation
      document.querySelector("#formGameOnForm").style.display = "none";
      document.getElementById("confirmationMessage").textContent = "Merci pour votre inscription";
      document.getElementById("confirmationMessage").style.display = "flex";
      document.getElementById("btnFermer").classList.remove('d-n');
    //   btnFermer.classList.add('d-b');
  }
});
