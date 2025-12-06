# Archivo: tests/features/boton_sos.feature

Feature: Activación de Alerta de Emergencia (Epic 01)
  Como estudiante universitario
  Quiero presionar un botón de pánico
  Para enviar mi ubicación a contactos y autoridades inmediatamente

  # Valida US01 - Escenario 1 (Conexión exitosa)
  Scenario: Activación de SOS con internet
    Given que el estudiante "Scarlet" ha iniciado sesión en la app
    And tiene el GPS activado en su dispositivo
    When mantiene presionado el botón "SOS" por 3 segundos
    Then la aplicación debe mostrar la pantalla de "Alerta Activada"
    And se debe enviar la ubicación actual al servidor de SafeUni
    And los contactos de emergencia deben recibir una notificación push

  # Valida US01 - Escenario 2 (Sin conexión)
  Scenario: Activación de SOS sin internet (Modo Offline)
    Given que el estudiante no tiene conexión a datos móviles
    When presiona el botón "SOS" por 3 segundos
    Then la alerta se debe guardar en el almacenamiento local
    And la aplicación debe mostrar el mensaje "Alerta guardada. Se enviará al recuperar conexión."
    And el sistema debe reintentar el envío automáticamente en segundo plano
