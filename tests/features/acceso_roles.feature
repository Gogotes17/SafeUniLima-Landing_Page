Feature: Selección de Rol de Usuario (Epic 09)
  Como visitante de la web
  Quiero elegir mi tipo de perfil (Estudiante o Autoridad)
  Para acceder al formulario correspondiente

  # Valida US59 y US60 (Estudiantes van a Registro)
  Scenario: Acceso a registro de Estudiantes
    Given que el visitante se encuentra en la sección "Únete a SafeUniLima Hoy"
    When hace clic en el botón "Crear Cuenta de Estudiante"
    Then el sistema debe redirigir a la página "user_registration.html"
    And debe mostrarse el formulario de "Regístrate"

  # Valida US61 (Autoridades van a Login)
  Scenario: Acceso a inicio de sesión de Autoridades
    Given que el visitante se encuentra en la sección "Únete a SafeUniLima Hoy"
    When hace clic en el botón "Iniciar Sesión como Autoridad"
    Then el sistema debe redirigir a la página "login.html"
    And debe mostrarse el formulario de "Inicia sesión"
