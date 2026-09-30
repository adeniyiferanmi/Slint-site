export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#06132A',
          900: '#0B1F3A',
          800: '#12305A',
          700: '#1B4178',
          600: '#255499',
        },
        sky: {
          50: '#F3F8FD',
          100: '#E6F0FA',
          200: '#CCE0F4',
          300: '#A6C9EC',
          400: '#6FA6DD',
          500: '#1E7FD8',
          600: '#1565C0',
        },
        ink: {
          DEFAULT: '#0B1F3A',
          muted: '#475873',
          soft: '#64748B',
        },
        accent: {
          red: '#C62828',
          redTint: '#FCEBEC',
          orange: '#B4520E',
          orangeBright: '#E8772E',
          orangeTint: '#FDF0E6',
          purple: '#6B3FA0',
          purpleTint: '#F2ECF9',
        },
        whatsapp: {
          DEFAULT: '#1FA855',
          dark: '#0E7A3E',
          darker: '#0A6532',
          tint: '#E7F6EC',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.65' }],
      },
      maxWidth: {
        site: '1240px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,31,58,0.04), 0 8px 24px rgba(11,31,58,0.06)',
        lift: '0 2px 4px rgba(11,31,58,0.06), 0 16px 40px rgba(11,31,58,0.12)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
}
