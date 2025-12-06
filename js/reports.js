// Datos Mock (Simulados)
const incidentsData = [
    { id: "INC-2025-247", date: "05/12/2025", time: "14:32", type: "Robo", location: "Biblioteca Central", responseTime: "2.5 min", status: "resuelto", authority: "Policía Nacional", student: "María González", description: "Robo de laptop en sala de estudio", coordinates: "-12.0464, -77.0428" },
    { id: "INC-2025-246", date: "05/12/2025", time: "12:15", type: "Emergencia Médica", location: "Facultad Medicina", responseTime: "1.8 min", status: "resuelto", authority: "Serenazgo", student: "Carlos Ramírez", description: "Estudiante con crisis de ansiedad", coordinates: "-12.0468, -77.0432" },
    { id: "INC-2025-245", date: "05/12/2025", time: "10:45", type: "Actividad Sospechosa", location: "Estacionamiento", responseTime: "3.2 min", status: "en-proceso", authority: "Seguridad Campus", student: "Ana Torres", description: "Persona merodeando vehículos", coordinates: "-12.0472, -77.0425" },
    // Puedes agregar más datos aquí si quieres
];

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById("incidents-table-body");
    const mobileList = document.getElementById("mobile-incidents-list");

    // --- Helpers de UI ---
    function getStatusBadge(status) {
        const styles = {
            'pendiente': 'bg-warning-100 text-warning-700',
            'en-proceso': 'bg-accent-100 text-accent-700',
            'resuelto': 'bg-success-100 text-success-700',
            'cerrado': 'bg-primary-100 text-primary-700'
        };
        const style = styles[status] || styles['pendiente'];
        // Capitalizar primera letra
        const text = status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ');
        return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${style}">${text}</span>`;
    }

    // --- Renderizado ---
    function renderTables() {
        if (!incidentsData.length) return;

        // 1. Render Desktop Table
        if (tableBody) {
            tableBody.innerHTML = incidentsData.map(item => `
                <tr class="hover:bg-surface transition-colors border-b border-border-light">
                    <td class="p-4">
                        <input type="checkbox" class="w-4 h-4 text-primary rounded border-border focus:ring-primary">
                    </td>
                    <td class="p-4 text-sm font-medium">${item.date}<br><span class="text-xs text-text-secondary">${item.time}</span></td>
                    <td class="p-4 text-sm">${item.type}</td>
                    <td class="p-4 text-sm">${item.location}</td>
                    <td class="p-4 text-sm font-mono">${item.responseTime}</td>
                    <td class="p-4">${getStatusBadge(item.status)}</td>
                    <td class="p-4 text-right">
                        <button class="text-primary hover:text-primary-700 font-medium text-sm" onclick="showIncidentDetails('${item.id}')">Ver</button>
                    </td>
                </tr>
            `).join('');
        }

        // 2. Render Mobile Cards
        if (mobileList) {
            mobileList.innerHTML = incidentsData.map(item => `
                <div class="p-4 border-b border-border-light bg-white">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <span class="text-xs font-bold text-text-secondary">${item.id}</span>
                            <h3 class="font-bold text-text-primary">${item.type}</h3>
                        </div>
                        ${getStatusBadge(item.status)}
                    </div>
                    <p class="text-sm text-text-secondary mb-2">${item.location} • ${item.date}</p>
                    <button class="btn-outline w-full py-2 text-sm" onclick="showIncidentDetails('${item.id}')">Ver Detalles</button>
                </div>
            `).join('');
        }
    }

    // --- Inicialización ---
    renderTables();

    // --- Funciones Globales para Modales ---
    window.showIncidentDetails = function(id) {
        const item = incidentsData.find(i => i.id === id);
        if(!item) return;
        
        const modal = document.getElementById("incident-modal");
        const content = document.getElementById("modal-content");
        
        if(content) {
            content.innerHTML = `
                <div class="space-y-4">
                    <div class="flex justify-between items-center">
                        <h2 class="text-xl font-bold">${item.type}</h2>
                        <span class="text-sm text-text-secondary">${item.id}</span>
                    </div>
                    ${getStatusBadge(item.status)}
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div><span class="block text-text-secondary text-xs">Ubicación</span>${item.location}</div>
                        <div><span class="block text-text-secondary text-xs">Autoridad</span>${item.authority}</div>
                        <div><span class="block text-text-secondary text-xs">Tiempo Resp.</span>${item.responseTime}</div>
                        <div><span class="block text-text-secondary text-xs">Estudiante</span>${item.student}</div>
                    </div>
                    <div class="bg-surface p-3 rounded-lg text-sm">
                        <span class="block text-text-secondary text-xs mb-1">Descripción</span>
                        ${item.description}
                    </div>
                </div>
            `;
        }
        if(modal) modal.classList.remove("hidden");
    };

    // Cerrar Modales
    const closeModalBtn = document.getElementById("close-modal-btn");
    const incidentModal = document.getElementById("incident-modal");
    
    if(closeModalBtn && incidentModal) {
        const close = () => incidentModal.classList.add("hidden");
        closeModalBtn.addEventListener("click", close);
        incidentModal.addEventListener("click", (e) => {
            if(e.target === incidentModal) close();
        });
    }

    // --- Exportar / Imprimir ---
    const exportBtn = document.getElementById("export-btn");
    const printBtn = document.getElementById("print-btn");
    
    if(printBtn) printBtn.addEventListener("click", () => window.print());
    if(exportBtn) {
        exportBtn.addEventListener("click", () => {
            // Aquí iría la lógica del modal de exportación si lo deseas, o una alerta simple
            alert("Descargando reporte en Excel...");
        });
    }
});