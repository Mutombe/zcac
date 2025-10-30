/**
 * CACZ Website Theme Constants
 * 
 * Centralized color palette and gradients for consistent branding
 * across the entire application. Import these constants instead of
 * hardcoding colors or using Tailwind custom classes.
 * 
 * Usage:
 * import { COLORS, GRADIENTS } from '../constants/theme';
 * 
 * <div style={{ background: COLORS.primary.green }}>
 */

export const COLORS = {
  // Primary Brand Colors (Green)
  primary: {
    green: '#22C55E',           // Main brand green
    greenDark: '#166534',       // Dark green
    greenLight: '#86EFAC',      // Light green
    greenPale: '#DCFCE7',       // Pale green
    green50: '#F0FDF4',         // Lightest green
    green100: '#DCFCE7',        // Very light green
    green200: '#BBF7D0',        // Light green shade
    green400: '#4ADE80',        // Medium light green
    green500: '#22C55E',        // Standard green (same as main)
    green600: '#16A34A',        // Medium dark green
    green700: '#15803D',        // Dark green shade
    green800: '#166534',        // Darker green (same as greenDark)
    green900: '#14532D',        // Darkest green
  },

  // Accent Colors
  accent: {
    yellow: '#FCD34D',          // Main accent yellow
    yellowDark: '#F59E0B',      // Dark yellow/amber
    yellowLight: '#FEF3C7',     // Light yellow
    yellow50: '#FEFCE8',        // Lightest yellow
    yellow100: '#FEF3C7',       // Very light yellow (same as yellowLight)
    yellow200: '#FDE68A',       // Light yellow shade
    yellow400: '#FBBF24',       // Medium yellow
    yellow500: '#F59E0B',       // Standard yellow (same as yellowDark)
    yellow600: '#D97706',       // Medium dark yellow
    
    red: '#EF4444',             // Accent red
    redDark: '#DC2626',         // Dark red
    redLight: '#FEE2E2',        // Light red
    red50: '#FEF2F2',           // Lightest red
    red100: '#FEE2E2',          // Very light red (same as redLight)
    red200: '#FECACA',          // Light red shade
    red500: '#EF4444',          // Standard red (same as main)
    red700: '#B91C1C',          // Dark red shade
  },

  // Neutral Colors
  neutral: {
    black: '#1F2937',           // Near black
    gray: '#6B7280',            // Medium gray
    grayLight: '#F3F4F6',       // Light gray
    white: '#FFFFFF',           // Pure white
    gray50: '#F9FAFB',          // Lightest gray
    gray100: '#F3F4F6',         // Very light gray (same as grayLight)
    gray200: '#E5E7EB',         // Light gray
    gray300: '#D1D5DB',         // Medium light gray
    gray400: '#9CA3AF',         // Medium gray
    gray500: '#6B7280',         // Standard gray (same as gray)
    gray600: '#4B5563',         // Medium dark gray
    gray700: '#374151',         // Dark gray
    gray750: '#2D3748',         // Darker gray (custom)
    gray800: '#1F2937',         // Darker gray (same as black)
    gray900: '#111827',         // Darkest gray
  },

  // Standard Green Shades (for compatibility)
  green: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },
};

export const GRADIENTS = {
  // Primary gradients
  primary: `linear-gradient(135deg, ${COLORS.primary.green} 0%, ${COLORS.primary.greenDark} 100%)`,
  
  hero: `linear-gradient(to bottom right, ${COLORS.primary.green50} 0%, ${COLORS.neutral.white} 50%, ${COLORS.accent.yellow50} 100%)`,
  
  dark: `linear-gradient(135deg, ${COLORS.primary.green700} 0%, ${COLORS.primary.green900} 100%)`,
  
  darkGreenToGreen: `linear-gradient(to right, ${COLORS.primary.green600} 0%, ${COLORS.primary.green800} 100%)`,
  
  // Accent gradients
  yellow: `linear-gradient(135deg, ${COLORS.accent.yellow400} 0%, ${COLORS.accent.yellow600} 100%)`,
  
  red: `linear-gradient(135deg, ${COLORS.accent.red500} 0%, ${COLORS.accent.red700} 100%)`,
  
  // Service card gradients
  greenService: `linear-gradient(135deg, ${COLORS.primary.green500} 0%, ${COLORS.primary.green700} 100%)`,
  
  yellowService: `linear-gradient(135deg, ${COLORS.accent.yellow400} 0%, ${COLORS.accent.yellow600} 100%)`,
  
  redService: `linear-gradient(135deg, ${COLORS.accent.red500} 0%, ${COLORS.accent.red700} 100%)`,
  
  standardGreenService: `linear-gradient(135deg, ${COLORS.green[500]} 0%, ${COLORS.green[700]} 100%)`,
  
  // Background gradients
  grayToWhite: `linear-gradient(to bottom right, ${COLORS.neutral.gray50} 0%, ${COLORS.neutral.white} 100%)`,
  
  greenCard: `linear-gradient(to bottom right, ${COLORS.primary.green50} 0%, ${COLORS.neutral.white} 100%)`,
  
  yellowCard: `linear-gradient(to bottom right, ${COLORS.accent.yellow50} 0%, ${COLORS.neutral.white} 100%)`,
  
  // CTA gradient
  ctaGreen: `linear-gradient(to bottom right, ${COLORS.primary.green600} 0%, ${COLORS.primary.green800} 100%)`,
};

// Animation durations (optional, for consistency)
export const ANIMATIONS = {
  fast: '0.2s',
  normal: '0.3s',
  slow: '0.5s',
};

// Border radius values (optional, for consistency)
export const RADIUS = {
  sm: '0.25rem',
  md: '0.25rem',
  lg: '0.25rem',
  xl: '0.25rem',
  full: '0.25rem',
};

// Shadow values (optional, for consistency)
export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
};

export default { COLORS, GRADIENTS, ANIMATIONS, RADIUS, SHADOWS };