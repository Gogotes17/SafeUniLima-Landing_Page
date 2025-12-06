module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#4365B6", // blue-600 - Institutional blue
          50: "#EEF2F9",
          100: "#D4E1F5",
          200: "#A9C3EB",
          300: "#7EA5E1",
          400: "#5387D7",
          500: "#4365B6",
          600: "#365194",
          700: "#293D70",
          800: "#1C294C",
          900: "#0F1528",
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#1A2E5D", // blue-900 - Deep blue
          50: "#E8EBF2",
          100: "#D1D7E5",
          200: "#A3AFCB",
          300: "#7587B1",
          400: "#475F97",
          500: "#1A2E5D",
          600: "#15254A",
          700: "#101C38",
          800: "#0A1225",
          900: "#050913",
        },
        // Accent Colors
        accent: {
          DEFAULT: "#4DA6FF", // blue-400 - Active state blue
          50: "#EBF5FF",
          100: "#D6EBFF",
          200: "#ADD7FF",
          300: "#85C3FF",
          400: "#5CAFFF",
          500: "#4DA6FF",
          600: "#3385CC",
          700: "#266499",
          800: "#1A4266",
          900: "#0D2133",
        },
        // Background Colors
        background: "#FFFFFF", // white - Pure white
        surface: {
          DEFAULT: "#F8F9FA", // gray-50 - Subtle gray
          100: "#F1F3F5",
          200: "#E9ECEF",
          300: "#DEE2E6",
        },
        // Text Colors
        text: {
          primary: "#1A1A1A", // gray-900 - Near-black
          secondary: "#6B7280", // gray-500 - Medium gray
          tertiary: "#9CA3AF", // gray-400 - Light gray
          disabled: "#D1D5DB", // gray-300 - Disabled gray
        },
        // Status Colors
        success: {
          DEFAULT: "#10B981", // green-500 - Calming green
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
        warning: {
          DEFAULT: "#F59E0B", // amber-500 - Amber warning
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        error: {
          DEFAULT: "#E63946", // red-600 - Emergency red
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#E63946",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // gray-200 - Minimal border
          light: "#F3F4F6", // gray-100 - Lighter border
          dark: "#D1D5DB", // gray-300 - Darker border
        },
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        lg: "0 4px 12px 0 rgba(0, 0, 0, 0.15)",
        xl: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        none: "none",
      },
      borderRadius: {
        sm: "4px",
        base: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        full: "9999px",
      },
      spacing: {
        0: "0",
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "48px",
        8: "64px",
        10: "80px",
        12: "96px",
      },
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "pulse-slow": "pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      minHeight: {
        touch: "44px",
      },
      minWidth: {
        touch: "44px",
      },
    },
  },
  plugins: [],
};
