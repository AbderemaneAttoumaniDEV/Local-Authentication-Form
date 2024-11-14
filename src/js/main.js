document.addEventListener("DOMContentLoaded", function () {
    const registerSection = document.getElementById("register-section");
    const backToLoginButton = document.getElementById("back-to-login");
    const registerLink = document.getElementById("register-link");
    const loginForm = document.querySelector('form[action="#"]');
    const registerForm = document.querySelector('#register-section form[action="#"]');
  
    // Afficher la section d'inscription
    registerLink.addEventListener("click", () => {
      document.querySelector("#back-div").classList.add("hidden");
      registerSection.classList.remove("hidden");
    });
  
    // Retour à la connexion depuis l'inscription
    backToLoginButton.addEventListener("click", () => {
      registerSection.classList.add("hidden");
      document.querySelector("#back-div").classList.remove("hidden");
    });
  
    // Inscription de l'utilisateur (stockage local)
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
  
      // Stockage dans le localStorage (à adapter en fonction de la sécurité, ici simplifié)
      localStorage.setItem("user", JSON.stringify({
        firstName,
        lastName,
        email,
        password
      }));
  
      // Retourner à la page de connexion après l'inscription
      registerSection.classList.add("hidden");
      document.querySelector("#back-div").classList.remove("hidden");
      alert("Inscription réussie ! Vous pouvez maintenant vous connecter.");
    });
  
    // Connexion de l'utilisateur
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      const storedUser = JSON.parse(localStorage.getItem("user"));
  
      // Vérification de la connexion avec le localStorage
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        // Connexion réussie, redirection vers main.html
        window.location.href = "main.html";
      } else {
        alert("Email ou mot de passe incorrect.");
      }
    });


    // Récupérer les informations de l'utilisateur depuis le localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Vérifier si l'utilisateur est authentifié et afficher ses informations
    if (storedUser) {
        const userName = document.getElementById("user-name");
        userName.textContent = `${storedUser.firstName} ${storedUser.lastName}`;
    } else {
        // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
        window.location.href = "index.html";
    }

    // Fonction de déconnexion
    document.getElementById("logout-btn").addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "index.html"; // Rediriger vers la page de connexion
    });
  });
  