import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors based on the image
        "app-red": "#E72929", // Main red for button and active icon
        "app-red-dark": "#A03A3A", // Darker red for text and inactive icons
        "app-bg": "#FDFBF8", // Light background color
        "app-input-bg": "#FCE9E9", // Light pink/red for input background
        "app-placeholder": "#A03A3A", // Darker red for placeholder text
        "app-green": "#D4EDDA", // Green for success alert
        "app-green-dark": "#28A745", // Darker green for text
        "app-yellow": "#FFF3CD", // Yellow for warning alert
        "app-yellow-dark": "#FFC107", // Darker yellow for text
        "app-light-red": "#F8D7DA", // Light red for info alert
        "app-light-red-dark": "#DC3545", // Darker red for text
        "app-gray-light": "#E0E0E0", // Light gray for inactive buttons/backgrounds
        "app-text-dark": "#333333", // General dark text
        "app-badge-bg": "#E9E9E9", // Background for badges
        "app-badge-text": "#666666", // Text for badges
        "app-timeline-line": "#E0E0E0", // Timeline line color
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
