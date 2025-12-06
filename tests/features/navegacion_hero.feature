Feature: Navegación Global y Hero (Epic 08 y 12)
  Como visitante
  Quiero navegar rápidamente a las secciones de interés
  Para no perder tiempo buscando información

  # Valida US55 (Botón del Hero)
  Scenario: Navegación desde el Hero a Cómo Funciona
    Given que el visitante está en la cabecera (Hero Section)
    When hace clic en el botón "Ver Cómo Funciona"
    Then la página debe desplazarse suavemente hasta la sección con id "#como-funciona"
    And el título "Cómo Funciona SafeUniLima" debe ser visible

  # Valida US77 (Menú de Navegación)
  Scenario: Navegación desde el Menú Principal
    Given que el visitante visualiza la barra de navegación superior
    When hace clic en el enlace "Contacto"
    Then la página debe desplazarse hasta el formulario de pie de página
    And el campo "Nombre Completo" debe estar visible
