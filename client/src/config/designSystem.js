/**
 * DESIGN SYSTEM - CareerConnect
 * Centralized design tokens for consistent styling across all components
 * Uses Tailwind CSS with custom color palette
 */

export const designSystem = {
  // ============================================
  // COLOR PALETTE
  // ============================================
  colors: {
    // Primary - Professional Blue
    primary: {
      light: 'bg-blue-50',
      lighter: 'bg-blue-100',
      main: 'bg-blue-600',
      dark: 'bg-blue-700',
      darkest: 'bg-blue-900',
      text: 'text-blue-600',
      border: 'border-blue-600',
      ring: 'ring-blue-500',
    },
    // Secondary - Teal/Cyan (Accent)
    secondary: {
      light: 'bg-teal-50',
      lighter: 'bg-teal-100',
      main: 'bg-teal-600',
      dark: 'bg-teal-700',
      text: 'text-teal-600',
      border: 'border-teal-600',
    },
    // Neutral - Professional Gray
    neutral: {
      50: 'bg-slate-50',
      100: 'bg-slate-100',
      200: 'bg-slate-200',
      300: 'bg-slate-300',
      400: 'bg-slate-400',
      500: 'bg-slate-500',
      700: 'bg-slate-700',
      800: 'bg-slate-800',
      900: 'bg-slate-900',
      text: 'text-slate-600',
      textDark: 'text-slate-900',
      textLight: 'text-slate-500',
      border: 'border-slate-200',
    },
    // Success - Green
    success: {
      light: 'bg-green-50',
      main: 'bg-green-500',
      dark: 'bg-green-700',
      text: 'text-green-600',
    },
    // Warning - Amber
    warning: {
      light: 'bg-amber-50',
      main: 'bg-amber-500',
      dark: 'bg-amber-700',
      text: 'text-amber-600',
    },
    // Error - Red
    error: {
      light: 'bg-red-50',
      main: 'bg-red-500',
      dark: 'bg-red-700',
      text: 'text-red-600',
    },
  },

  // ============================================
  // TYPOGRAPHY
  // ============================================
  typography: {
    h1: 'text-4xl font-bold text-slate-900',
    h2: 'text-3xl font-bold text-slate-900',
    h3: 'text-2xl font-bold text-slate-900',
    h4: 'text-xl font-bold text-slate-900',
    h5: 'text-lg font-semibold text-slate-900',
    h6: 'text-base font-semibold text-slate-900',
    body: 'text-base text-slate-600',
    bodySm: 'text-sm text-slate-600',
    bodyXs: 'text-xs text-slate-500',
    caption: 'text-xs text-slate-500 uppercase tracking-wide',
  },

  // ============================================
  // SPACING
  // ============================================
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
  },

  // ============================================
  // BUTTONS
  // ============================================
  buttons: {
    primary: 'px-6 py-2.5 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors',
    primaryLg: 'px-8 py-3 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors text-lg',
    secondary: 'px-6 py-2.5 rounded-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-colors',
    outline: 'px-6 py-2.5 rounded-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors',
    ghost: 'px-6 py-2.5 rounded-lg font-semibold text-slate-700 hover:bg-slate-100 transition-colors',
    danger: 'px-6 py-2.5 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors',
  },

  // ============================================
  // CARDS & CONTAINERS
  // ============================================
  cards: {
    base: 'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
    elevated: 'bg-white rounded-lg shadow-lg border border-slate-100',
    bordered: 'bg-white rounded-lg border-2 border-slate-200',
    subtle: 'bg-slate-50 rounded-lg border border-slate-200',
  },

  // ============================================
  // INPUTS
  // ============================================
  inputs: {
    base: 'w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all',
    lg: 'w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg',
  },

  // ============================================
  // NAVBAR & HEADER
  // ============================================
  navbar: {
    base: 'fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-md',
    bg: 'bg-white',
    height: 'h-16',
    padding: 'px-6 py-3',
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    bg: 'bg-slate-900',
    text: 'text-slate-400',
    heading: 'text-white font-semibold',
  },

  // ============================================
  // BADGES
  // ============================================
  badges: {
    primary: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800',
    secondary: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-100 text-teal-800',
    success: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800',
    warning: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800',
    danger: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800',
  },

  // ============================================
  // SHADOWS
  // ============================================
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  },

  // ============================================
  // BORDERS & RADIUS
  // ============================================
  borders: {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  },

  // ============================================
  // RESPONSIVE BREAKPOINTS
  // ============================================
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ============================================
  // TRANSITIONS
  // ============================================
  transitions: {
    fast: 'duration-150',
    normal: 'duration-300',
    slow: 'duration-500',
  },
};

// ============================================
// UTILITY HELPERS
// ============================================
export const getButtonClass = (variant = 'primary', size = 'md') => {
  return `${designSystem.buttons[variant]}`;
};

export const getCardClass = (variant = 'base') => {
  return `${designSystem.cards[variant]}`;
};

export const getBadgeClass = (variant = 'primary') => {
  return `${designSystem.badges[variant]}`;
};

export default designSystem;
