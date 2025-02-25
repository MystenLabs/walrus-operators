// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary_dark: '#0C0F1D',
                primary_pink: '#C684F6',
                primary_teal: '#97F0E5',
                gradientStart: '#97F0E5',
                gradientEnd: '#97F0E5',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            fontFamily: {
                ppNeueBit: [
                    'PPNeueBit-Regular',
                    'sans-serif'
                ],
                ppNeueBitBold: [
                    'PPNeueBit-Bold',
                    'sans-serif'
                ],
                ppNeueMontreal: [
                    'PPNeueMontreal-Regular',
                    'sans-serif'
                ],
                ppNeueMontrealBold: [
                    'PPNeueMontreal-Bold',
                    'sans-serif'
                ],
                ppNeueMontrealThin: [
                    'PPNeueMontreal-Thin',
                    'sans-serif'
                ]
            },
            screens: {
                custom_xl: '1200px',
                custom_lg: '1100px',
                custom_md: '660px'
            },
            keyframes: {
                enterFromRight: {
                    from: {
                        opacity: '0',
                        transform: 'translateX(200px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                enterFromLeft: {
                    from: {
                        opacity: '0',
                        transform: 'translateX(-200px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateX(0)'
                    }
                },
                exitToRight: {
                    from: {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                    to: {
                        opacity: '0',
                        transform: 'translateX(200px)'
                    }
                },
                exitToLeft: {
                    from: {
                        opacity: '1',
                        transform: 'translateX(0)'
                    },
                    to: {
                        opacity: '0',
                        transform: 'translateX(-200px)'
                    }
                },
                scaleIn: {
                    from: {
                        opacity: '0',
                        transform: 'rotateX(-10deg) scale(0.9)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'rotateX(0deg) scale(1)'
                    }
                },
                scaleOut: {
                    from: {
                        opacity: '1',
                        transform: 'rotateX(0deg) scale(1)'
                    },
                    to: {
                        opacity: '0',
                        transform: 'rotateX(-10deg) scale(0.95)'
                    }
                },
                fadeIn: {
                    from: {
                        opacity: '0'
                    },
                    to: {
                        opacity: '1'
                    }
                },
                fadeOut: {
                    from: {
                        opacity: '1'
                    },
                    to: {
                        opacity: '0'
                    }
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        },
        animation: {
            scaleIn: 'scaleIn 200ms ease',
            scaleOut: 'scaleOut 200ms ease',
            fadeIn: 'fadeIn 200ms ease',
            fadeOut: 'fadeOut 200ms ease',
            enterFromLeft: 'enterFromLeft 250ms ease',
            enterFromRight: 'enterFromRight 250ms ease',
            exitToLeft: 'exitToLeft 250ms ease',
            exitToRight: 'exitToRight 250ms ease'
        }
    },
    plugins: [],
    utilities: {
        '.no-scrollbar::-webkit-scrollbar': {
            'display': 'none',
        },
        '.no-scrollbar': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
        },
    },
};