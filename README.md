# Damandeep Kour — Portfolio

React + Tailwind CSS + Vite portfolio with Galaxy background and Orb hero.

## Setup

```bash
npm install
npm run dev
```

## Third-party components needed

Install from [React Bits](https://www.reactbits.dev/):

```bash
# Galaxy background
npx shadcn@latest add @react-bits/Galaxy-JS-CSS

# BorderGlow (optional — for card hover effects)
npx shadcn@latest add @react-bits/BorderGlow
```

These will place `Galaxy.jsx` (and optionally `BorderGlow.jsx`) into your `src/` folder.

## Structure

```
src/
├── App.jsx              ← Root layout, Galaxy background
├── main.jsx             ← ReactDOM entry
├── index.css            ← Tailwind + global styles
├── Orb.jsx              ← WebGL animated orb (from React Bits)
├── Orb.css
├── assets/
│   └── damandeepImg.js  ← Profile photo as base64
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx          ← Orb on the right
    ├── Stats.jsx
    ├── About.jsx         ← Real photo + spinning ring
    ├── Experience.jsx    ← Timeline
    ├── TechStack.jsx
    ├── Projects.jsx
    ├── Skills.jsx        ← Scroll-animated bars
    ├── Contact.jsx
    └── Footer.jsx
```

## Dependencies

- `ogl` — WebGL library used by Orb
- `react` + `react-dom`
- `tailwindcss`
- `vite`
