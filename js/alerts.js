document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Filtros Avanzados (Toggle) ---
  const advancedFiltersBtn = document.getElementById("advanced-filters-btn");
  const advancedFiltersPanel = document.getElementById(
    "advanced-filters-panel"
  );

  if (advancedFiltersBtn && advancedFiltersPanel) {
    advancedFiltersBtn.addEventListener("click", () => {
      advancedFiltersPanel.classList.toggle("hidden");
    });
  }

  // --- 2. Botones de Filtro (Tabs) ---
  const filterButtons = document.querySelectorAll(".filter-btn");
  const alertCards = document.querySelectorAll(".alert-card");

  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remover clase activa de todos
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Agregar clase activa al clickeado
        button.classList.add("active");

        const filter = button.dataset.filter;

        // Filtrar tarjetas
        alertCards.forEach((card) => {
          if (filter === "all") {
            card.style.display = "block";
          } else {
            if (card.dataset.status === filter) {
              card.style.display = "block";
            } else {
              card.style.display = "none";
            }
          }
        });
      });
    });
  }

  // --- 3. Buscador ---
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      alertCards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? "block" : "none";
      });
    });
  }

  // --- 4. Botón Restablecer ---
  const resetFiltersBtn = document.getElementById("reset-filters-btn");
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      if (filterButtons[0]) filterButtons[0].classList.add("active");
      alertCards.forEach((card) => (card.style.display = "block"));

      // Resetear selects si existen
      const selects = document.querySelectorAll("select");
      selects.forEach((select) => (select.value = ""));
    });
  }

  // --- 5. Modales (Alertas y Emergencia) ---
  // Funciones globales para que el HTML onclick="" las encuentre
  window.viewDetails = function (alertId) {
    const modal = document.getElementById("alert-modal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  };

  window.closeModal = function () {
    const modal = document.getElementById("alert-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  };

  window.createEmergencyAlert = function () {
    const modal = document.getElementById("emergency-modal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  };

  window.closeEmergencyModal = function () {
    const modal = document.getElementById("emergency-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
  };

  // Acciones dentro del Modal
  window.acknowledgeAlert = function (id) {
    alert(`Alerta #${id} recepcionada. Equipo notificado.`);
    window.closeModal();
  };

  window.assignAlert = function (id) {
    alert(`Unidad asignada a la alerta #${id}.`);
    window.closeModal();
  };

  window.resolveAlert = function (id) {
    if (confirm("¿Marcar alerta como resuelta?")) {
      alert(`Alerta #${id} cerrada.`);
      window.location.reload();
    }
  };

  // Cerrar modales con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closeModal();
      window.closeEmergencyModal();
    }
  });

  // Formulario de Emergencia
  const emergencyForm = document.getElementById("emergency-form");
  if (emergencyForm) {
    emergencyForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("¡Alerta enviada! Unidades en camino.");
      window.closeEmergencyModal();
      emergencyForm.reset();
    });
  }
});
