// js/auth.js

// 1. FUNCIÓN GLOBAL DE CAMBIO DE ROL
window.switchRole = function (role) {
  const userRoleInput = document.getElementById("user-role");
  if (userRoleInput) userRoleInput.value = role;

  const btnStudent = document.getElementById("btn-role-student");
  const btnAuth = document.getElementById("btn-role-authority");

  // ID CORRECTO: Coincide con el HTML ahora
  const authField = document.getElementById("authority-code-field");

  const emailLabel = document.querySelector("label[for='institutional-email']");
  const emailInput = document.getElementById("institutional-email");
  const emailHelp = document.getElementById("email-help");

  if (role === "student") {
    // --- ESTILO ESTUDIANTE ---
    if (btnStudent)
      btnStudent.className =
        "flex-1 py-2 rounded-md text-sm font-medium bg-white text-primary shadow-sm transition-all";
    if (btnAuth)
      btnAuth.className =
        "flex-1 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary transition-all";

    // Ocultar código
    if (authField) authField.classList.add("hidden");

    // Textos
    if (emailLabel) emailLabel.textContent = "Correo Institucional *";
    if (emailInput) emailInput.placeholder = "juan.perez@universidad.edu.pe";
    if (emailHelp)
      emailHelp.textContent = "Usa tu correo institucional con dominio .edu.pe";
  } else {
    // --- ESTILO AUTORIDAD ---
    if (btnAuth)
      btnAuth.className =
        "flex-1 py-2 rounded-md text-sm font-medium bg-white text-primary shadow-sm transition-all";
    if (btnStudent)
      btnStudent.className =
        "flex-1 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-text-primary transition-all";

    // Mostrar código
    if (authField) authField.classList.remove("hidden");

    // Textos
    if (emailLabel) emailLabel.textContent = "Correo Oficial *";
    if (emailInput) emailInput.placeholder = "seguridad@safeuni.edu.pe";
    if (emailHelp) emailHelp.textContent = "Usa tu correo oficial de seguridad";
  }
};

// 2. RESTO DE LA LÓGICA
document.addEventListener("DOMContentLoaded", () => {
  // OJO (PASSWORD TOGGLE)
  const toggleButtons = document.querySelectorAll("#toggle-password");
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault(); // Evitar submit
      const input = this.previousElementSibling;
      const svgs = this.querySelectorAll("svg");

      if (input && input.type === "password") {
        input.type = "text";
        if (svgs[0]) svgs[0].classList.add("hidden");
        if (svgs[1]) svgs[1].classList.remove("hidden");
      } else if (input) {
        input.type = "password";
        if (svgs[0]) svgs[0].classList.remove("hidden");
        if (svgs[1]) svgs[1].classList.add("hidden");
      }
    });
  });

  // ENVÍO DE REGISTRO
  const regForm = document.getElementById("registration-form");
  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const role = document.getElementById("user-role").value;
      const codeInput = document.getElementById("access-code");
      const errorMsg = document.getElementById("error-message");
      const successMsg = document.getElementById("success-message");
      const submitBtn = document.getElementById("submit-btn");

      // Reset mensajes
      errorMsg.classList.add("hidden");
      successMsg.classList.add("hidden");

      // Validar código de autoridad
      if (role === "authority") {
        if (!codeInput || codeInput.value.trim() !== "SAFE2025") {
          errorMsg.textContent =
            "Código de verificación incorrecto (Prueba: SAFE2025)";
          errorMsg.classList.remove("hidden");
          return;
        }
      }

      // Éxito simulado
      submitBtn.disabled = true;
      submitBtn.textContent = "Creando...";

      setTimeout(() => {
        successMsg.classList.remove("hidden");
        setTimeout(() => {
          window.location.href = "login.html";
        }, 2000);
      }, 1500);
    });
  }
});
