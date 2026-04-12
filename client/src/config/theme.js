// Professional SaaS Color Scheme
export const theme = {
  colors: {
    // Primary - Professional Dark Blue
    primary: {
      50: '#f0f5ff',
      100: '#e0ebff',
      200: '#c7d9ff',
      300: '#a4bbff',
      400: '#7c93ff',
      500: '#5563ff', // Main primary
      600: '#3d3ef5',
      700: '#2d2cd1',
      800: '#2424a8',
      900: '#1f1f88',
    },
    // Secondary - Teal/Cyan (Accent)
    secondary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eefd9',
      400: '#2dd4bf',
      500: '#14b8a6', // Main secondary
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    // Neutral/Slate - Professional Gray
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    // Success - Professional Green
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
    },
    // Warning - Professional Amber
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
    },
    // Error - Professional Red
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
    '2xl': '3rem',
  },
  shadow: {
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
};

// CSS Classes for common patterns
export const gradients = {
  primary: 'bg-gradient-to-r from-blue-600 to-indigo-600',
  secondary: 'bg-gradient-to-r from-teal-500 to-cyan-500',
  dark: 'bg-gradient-to-r from-slate-900 to-slate-800',
  success: 'bg-gradient-to-r from-emerald-500 to-teal-500',
};

export const buttons = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg',
  secondary: 'bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200',
  outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200',
  ghost: 'text-blue-600 hover:bg-blue-50 font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200',
  danger: 'bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200',
};

export const cards = {
  default: 'bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200',
  premium: 'bg-white rounded-xl border-2 border-blue-600 shadow-lg',
  dark: 'bg-slate-900 rounded-lg border border-slate-800 shadow-lg text-white',
};
