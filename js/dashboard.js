document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Reloj en Tiempo Real ---
  function updateClock() {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const timeString = now.toLocaleString("es-PE", options).replace(",", "");

    document.querySelectorAll("[data-clock]").forEach((el) => {
      el.textContent = `Actualizado: ${timeString}`;
    });
  }
  updateClock();
  setInterval(updateClock, 60000);

  // --- 2. Animación de "latido" para indicadores de estado ---
  const statusIndicators = document.querySelectorAll(
    ".status-active, .status-alert"
  );
  statusIndicators.forEach((indicator) => {
    setInterval(() => {
      indicator.style.opacity = "0.5";
      setTimeout(() => {
        indicator.style.opacity = "1";
      }, 500);
    }, 2000);
  });

  // --- 3. Simulación de actualización de datos ---
  function simulateDataRefresh() {
    const metrics = document.querySelectorAll(".card-elevated h3");
    metrics.forEach((metric) => {
      metric.style.opacity = "0.5";
      setTimeout(() => {
        metric.style.opacity = "1";
      }, 300);
    });
  }
  setInterval(simulateDataRefresh, 30000); // Cada 30 seg

  // --- 4. Botones de Acción Rápida (Si existen) ---
  const emergencyBtn = document.querySelector(".btn-error");
  if (emergencyBtn) {
    emergencyBtn.addEventListener("click", () => {
      if (confirm("¿Enviar alerta de emergencia?")) {
        const originalText = emergencyBtn.innerHTML;
        emergencyBtn.disabled = true;
        emergencyBtn.innerHTML = "Enviando...";
        setTimeout(() => {
          alert("Alerta enviada. Ayuda en camino.");
          emergencyBtn.innerHTML = originalText;
          emergencyBtn.disabled = false;
        }, 1500);
      }
    });
  }
});
