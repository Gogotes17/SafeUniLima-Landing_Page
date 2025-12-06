
Feature: Monitoreo de Trayecto Seguro (Epic 01)
  Como estudiante
  Quiero compartir mi ubicación en tiempo real
  Para que mis contactos puedan monitorear mi trayecto a casa

  # Valida US05
  Scenario: Iniciar compartición de recorrido
    Given que el estudiante selecciona la opción "Compartir Recorrido"
    And selecciona a los contactos "Mamá" y "Hermano"
    When presiona el botón "Iniciar Trayecto"
    Then los contactos seleccionados deben recibir un enlace de seguimiento
    And la ubicación debe actualizarse en el mapa cada 10 segundos
    And debe aparecer una notificación persistente "Compartiendo ubicación activamente"
