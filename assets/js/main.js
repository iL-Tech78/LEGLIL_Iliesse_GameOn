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
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const birthdate = document.getElementById("birthdate");
    const numTournaments = document.getElementById("numTournaments");
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

    // Supprimer toutes les bordures rouges
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(input => input.classList.remove("invalid"));

    // Validation des champs du formulaire 
    if (firstName.value.length < 2) {
        errors.push("Le prénom doit comporter au moins 2 caractères.");
        document.getElementById("firstNameError").textContent = errors[errors.length - 1];
        firstName.classList.add("invalid");
    } else {
        document.getElementById("firstNameError").textContent = "";
    }

    if (lastName.value.length < 2) {
        errors.push("Le nom de famille doit comporter au moins 2 caractères.");
        document.getElementById("lastNameError").textContent = errors[errors.length - 1];
        lastName.classList.add("invalid");
    } else {
        document.getElementById("lastNameError").textContent = "";
    }

    if (!validateEmail(email.value) || !email.value.trim()) {
        errors.push("L'adresse électronique n'est pas valide.");
        document.getElementById("emailError").textContent = errors[errors.length - 1];
        email.classList.add("invalid");
    } 
    else {
        document.getElementById("emailError").textContent = "";
    }

    if (!birthdate.value.trim()) {
        errors.push("Entrez votre date de naissance");
        document.getElementById("birthdateError").textContent = errors[errors.length - 1];
        birthdate.classList.add("invalid");
    } 
    else {
        document.getElementById("birthdateError").textContent = "";
    }

    if (!numTournaments.value.trim() || isNaN(numTournaments.value) || numTournaments.value < 0) {
        document.getElementById("numTournamentsError").textContent = "Veuillez saisir un nombre supérieur ou égal à 0 pour le nombre de concours.";
        numTournaments.classList.add("invalid");
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
    }
});

