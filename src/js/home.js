document.addEventListener("DOMContentLoaded", function () {
    const userName = document.getElementById("user-name");
    const logoutBtn = document.getElementById("logout-btn");
    const editProfileBtn = document.getElementById("edit-profile-btn");
    const editPasswordBtn = document.getElementById("edit-password-btn");

    const editProfilePopup = document.getElementById("edit-profile-popup");
    const editPasswordPopup = document.getElementById("edit-password-popup");

    const editProfileSave = document.getElementById("profil-edit-save");
    const editPasswordSave = document.getElementById("password-edit-save");

    const closeEditProfile = document.getElementById("close-edit-profile");
    const closeEditPassword = document.getElementById("close-edit-password");

    const confirmationPopup = document.getElementById("confirmation-popup");
    const closeConfirmation = document.getElementById("close-confirmation");

    const passwordAlertPopup = document.getElementById("password-alert-popup");
    const closePasswordAlert = document.getElementById("close-password-alert");

    // Nouveau pop-up pour "Aucune modification"
    const noModificationPopup = document.getElementById("no-modification-popup");
    const closeNoModification = document.getElementById("close-no-modification");

    const editProfileForm = document.getElementById("edit-profile-form");
    const editPasswordForm = document.getElementById("edit-password-form");

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
        userName.textContent = `${storedUser.firstName} ${storedUser.lastName}`;
    } else {
        window.location.href = "index.html"; // Redirection si l'utilisateur n'est pas authentifié
    }

    // Fonction pour afficher un pop-up spécifique
    function showPopup(popup) {
        popup.classList.remove("hidden");
    }

    // Fonction pour cacher un pop-up spécifique
    function hidePopup(popup) {
        popup.classList.add("hidden");
    }

    // Afficher le pop-up pour modifier le profil
    editProfileBtn.addEventListener("click", () => {
        document.getElementById("edit-first-name").value = storedUser.firstName;
        document.getElementById("edit-last-name").value = storedUser.lastName;
        document.getElementById("edit-email").value = storedUser.email;
        showPopup(editProfilePopup);
    });

    // Afficher le pop-up pour modifier le mot de passe
    editPasswordBtn.addEventListener("click", () => {
        showPopup(editPasswordPopup);
    });

    // Gestion de l'annulation dans le formulaire de modification de profil
    closeEditProfile.addEventListener("click", () => {
        hidePopup(editProfilePopup);
        showPopup(noModificationPopup);
    });

    // Gestion de l'annulation dans le formulaire de modification de mot de passe
    closeEditPassword.addEventListener("click", () => {
        hidePopup(editPasswordPopup);
        showPopup(noModificationPopup);
    });

    // Enregistrer les modifications du profil
    editProfileForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const firstName = document.getElementById("edit-first-name").value;
        const lastName = document.getElementById("edit-last-name").value;
        const email = document.getElementById("edit-email").value;

        storedUser.firstName = firstName;
        storedUser.lastName = lastName;
        storedUser.email = email;

        localStorage.setItem("user", JSON.stringify(storedUser));
        hidePopup(editProfilePopup);
        showPopup(confirmationPopup);
    });

    // Enregistrer les modifications du mot de passe
    editPasswordForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newPassword = document.getElementById("edit-password").value;

        if (newPassword.length >= 6) {
            storedUser.password = newPassword;
            localStorage.setItem("user", JSON.stringify(storedUser));
            hidePopup(editPasswordPopup);
            showPopup(confirmationPopup);
        } else {
            hidePopup(editPasswordPopup);
            showPopup(passwordAlertPopup);
        }
    });

    // Fermer le pop-up de confirmation après la modification
    closeConfirmation.addEventListener("click", () => {
        hidePopup(confirmationPopup);
    });

    // Fermer l'alerte de mot de passe trop court
    closePasswordAlert.addEventListener("click", () => {
        hidePopup(passwordAlertPopup);
    });

    // Fermer le pop-up "Aucune modification"
    closeNoModification.addEventListener("click", () => {
        hidePopup(noModificationPopup);
    });

    // Déconnexion
    logoutBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
