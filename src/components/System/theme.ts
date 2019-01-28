import colors from './colors';
import fonts from './fonts';

// TODO (chip) - consider converting to "elevation" to encapsulate border + box-shadow
export interface ThemeBoxShadowProps {
  boxShadow?: 'small' | 'medium' | 'large' | 'extra-large' | 'form-control' | 'form-control-focus';
}

export interface ThemeButtonVariantProps {
  size?: 'small' | 'large';
  variant?: 'primary' | 'outline';
}

export interface ThemeBoxLayoutProps {
  layout?: 'fill';
}

// https://github.com/segmentio/evergreen/blob/master/src/theme/src/default-theme/shared.js

const theme = {
  colors,
  fonts,
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400,
    light: 300,
    ultralight: 200
  },
  space: [
    0, 4, 8, 12, 16, 24, 32, 64, 128
  ],
  radii: [0, 3, 6],
  // boxShadow="small"
  shadows: {
    small: '0 1px 1px rgba(27, 31, 35, 0.1)',
    medium: '0 1px 5px rgba(27, 31, 35, 0.15)',
    large: '0 1px 15px rgba(27, 31, 35, 0.15)',
    'extra-large': '0 10px 50px rgba(27, 31, 35, 0.07)',
    'form-control': 'rgba(27, 31, 35, 0.075) 0px 1px 2px inset',
    'form-control-focus': 'rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em'
  },
  boxes: {
    layout: {
      fill: {
        display: 'flex',
        width: '100%',
        height: '100%'
      }
    }
  },
  buttons: {
    variants: {
      primary: {
        color: colors.white,
        backgroundColor: colors.pink
      },
      outline: {
        color: colors.pink,
        backgroundColor: 'transparent',
        border: `1px solid ${colors.pink}`
      }
    },
    size: {
      small: {
        padding: '4px 8px',
        fontSize: '12px'
      },
      large: {
        padding: '12px 24px',
        fontSize: '18px'
      }
    }
  },
  headings: {
    '900': {
      fontSize: '48px',
      fontWeight: 500,
      lineHeight: '56px',
      letterSpacing: '-0.5px',
      marginTop: 0,
      fontFamily: fonts.sans,
      color: colors.gray1
    },
    '800': {
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: '32px',
      letterSpacing: '-0.2px',
      marginTop: 40,
      fontFamily: fonts.sans,
      color: colors.gray1
    },
    '700': {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '28px',
      letterSpacing: '-0.07px',
      marginTop: 40,
      fontFamily: fonts.sans,
      color: colors.gray1
    },
    '600': {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '-0.07px',
      marginTop: 28,
      fontFamily: fonts.sans,
      color: colors.gray1
    },
    '500': {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 24,
      fontFamily: fonts.sans,
      color: colors.gray1
    },
    '400': {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      letterSpacing: '-0.05px',
      marginTop: 16,
      fontFamily: fonts.sans,
      color: colors.gray1
    },
    '300': {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      letterSpacing: '0',
      marginTop: 16,
      fontFamily: fonts.sans,
      color: colors.gray1
    },
    '200': {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      marginTop: 16,
      fontFamily: fonts.sans,
      color: colors.gray5
    },
    '100': {
      fontSize: '11px',
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: '16px',
      letterSpacing: '0.6px',
      marginTop: 16,
      fontFamily: fonts.sans,
      color: colors.gray5
    }
  }
};

export default theme;
