export const AxiomDesignTokens = {
  // Color System - Semantic & Branded
  colors: {
    // Primary Brand Colors
    axiom: {
      primary: '#00FF99',      // Matrix green (primary action)
      secondary: '#00FFFF',    // Cyan accent
      tertiary: '#FF00FF',     // Magenta highlight
    },
    
    // Semantic State Colors
    state: {
      success: '#00FF99',
      warning: '#FFAA00',
      error: '#FF3366',
      info: '#00CCFF',
    },
    
    // Neutral Palette (Black-to-White with alpha variants)
    neutral: {
      black: '#000000',
      gray: {
        900: '#0A0A0A',
        800: '#1A1A1A',
        700: '#2A2A2A',
        600: '#3A3A3A',
        500: '#5A5A5A',
        400: '#7A7A7A',
        300: '#9A9A9A',
        200: '#BABABA',
        100: '#DADADA',
      },
      white: '#FFFFFF',
    },
    
    // Alpha Variants for Glassmorphism
    alpha: {
      primary: 'rgba(0, 255, 153, 0.1)',
      primaryMed: 'rgba(0, 255, 153, 0.3)',
      primaryHigh: 'rgba(0, 255, 153, 0.6)',
      white: 'rgba(255, 255, 255, 0.05)',
      whiteMed: 'rgba(255, 255, 255, 0.1)',
      whiteHigh: 'rgba(255, 255, 255, 0.2)',
    },
  },
  
  // Typography System
  typography: {
    fontFamily: {
      sans: 'var(--font-inter)',
      mono: 'var(--font-jetbrains)',
      display: 'var(--font-inter)',
    },
    
    // Type Scale (1.25 ratio - perfect fourth)
    fontSize: {
      xs: '0.64rem',     // 10.24px
      sm: '0.8rem',      // 12.8px
      base: '1rem',      // 16px
      md: '1.25rem',     // 20px
      lg: '1.563rem',    // 25px
      xl: '1.953rem',    // 31.25px
      '2xl': '2.441rem', // 39.06px
      '3xl': '3.052rem', // 48.83px
      '4xl': '3.815rem', // 61.04px
    },
    
    // Line Heights
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
    
    // Font Weights
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    
    // Letter Spacing
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  // Spacing System (4px base unit, exponential scale)
  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',  // 2px
    1: '0.25rem',     // 4px
    2: '0.5rem',      // 8px
    3: '0.75rem',     // 12px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    8: '2rem',        // 32px
    10: '2.5rem',     // 40px
    12: '3rem',       // 48px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    32: '8rem',       // 128px
  },
  
  // Border Radius System
  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    base: '0.5rem',   // 8px
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    full: '9999px',
  },
  
  // Shadow System (Layered depth)
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
    base: '0 2px 8px rgba(0, 0, 0, 0.6)',
    md: '0 4px 16px rgba(0, 0, 0, 0.7)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.8)',
    xl: '0 16px 64px rgba(0, 0, 0, 0.9)',
    
    // Glow Variants (for buttons, accents)
    glow: {
      primary: '0 0 20px rgba(0, 255, 153, 0.6)',
      primaryHover: '0 0 30px rgba(0, 255, 153, 0.8)',
      secondary: '0 0 20px rgba(0, 255, 255, 0.6)',
      tertiary: '0 0 20px rgba(255, 0, 255, 0.6)',
    },
  },
  
  // Animation Tokens
  animation: {
    duration: {
      instant: '100ms',
      fast: '200ms',
      base: '300ms',
      slow: '500ms',
      slower: '750ms',
      slowest: '1000ms',
    },
    
    easing: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
  
  // Z-Index Scale
  zIndex: {
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modalBackdrop: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
  },
} as const;
