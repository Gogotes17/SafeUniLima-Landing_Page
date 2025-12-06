
Feature: Formulario de Contacto (Epic 11)
  Como visitante
  Quiero enviar un mensaje al soporte
  Para resolver dudas sobre la plataforma

  # Valida la validación visual (US74)
  Scenario: Validación de campos vacíos
    Given que el visitante está en el formulario "Contáctanos"
    When hace clic en el campo "Correo Electrónico"
    And sale del campo sin escribir nada (blur)
    Then debe aparecer el mensaje de error "Por favor ingresa un correo válido" en color rojo

  # Valida el envío exitoso (US73)
  Scenario: Envío de formulario completo
    Given que el visitante llena todos los campos obligatorios correctamente
    When hace clic en el botón "Enviar Mensaje"
    Then el formulario debe procesar la solicitud
