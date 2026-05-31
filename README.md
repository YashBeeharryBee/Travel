# VoyageVista ✈️

A responsive travel website built with HTML, CSS, and JavaScript — featuring smooth scroll animations, a mobile-friendly navigation, and stunning destination photography.

---

## 📁 Project Structure

```
VoyageVista/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── bg.jpg
    ├── Travel.jpg
    ├── Explore.jpg
    ├── Explore2.jpg
    ├── island.jpg
    ├── Barcelona, CT, Spain.jpg
    ├── Dubrovnik, Dubrovnik-Neretva County, Croatia.jpg
    ├── Vik, Iceland.jpg
    ├── Venice, Italy.jpg
    ├── MountainAB, Canada.jpg
    ├── Irlandforest.jpg
    └── Varenna, Lake Italy.jpg
```

---

## 🌍 Sections

| Section  | Description                                              |
|----------|----------------------------------------------------------|
| **Home** | Hero background with destination cards (Croatia, Iceland, Italy, Spain) |
| **About** | Introduction to VoyageVista with a travel image          |
| **Popular** | Three featured destinations: Canada, Ireland, Italy     |
| **Explore** | Full-width immersive section with explorer profile      |
| **Join** | Newsletter subscription form with island imagery         |
| **Footer** | Links, social icons, and copyright                      |

---

## ✨ Features

- **Responsive Design** — adapts from mobile (340px) to large desktop (1152px+)
- **Mobile Navigation** — slide-in menu with backdrop blur, toggled via hamburger icon
- **Blur Header** — header gains a frosted-glass blur effect on scroll
- **Active Nav Links** — current section highlighted in the navbar as you scroll
- **Scroll-to-Top Button** — appears after scrolling 350px down
- **Image Hover Zoom** — cards and feature images scale on hover
- **Profile Enlarge** — clicking the explorer profile photo expands it with an overlay
- **ScrollReveal Ready** — `scrollreveal.min.js` is included for entrance animations (can be wired up in `main.js`)

---

## 🛠️ Tech Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, CSS Grid, Flexbox, media queries, backdrop-filter
- **JavaScript (ES6)** — DOM manipulation, scroll events, class toggling
- **Remix Icons** — icon library via CDN (`remixicon@4.5.0`)
- **Google Fonts** — Montserrat (headings) + Poppins (body)
- **ScrollReveal** — lightweight scroll animation library (local copy included)

---

## 🚀 Getting Started

1. **Clone or download** the repository.
2. Place all images in the `assets/` folder (filenames must match those referenced in `index.html`).
3. Open `index.html` directly in a browser — no build step required.

```bash
# Optional: serve locally with any static server
npx serve .
# or
python -m http.server 8000
```

---

## 📐 Breakpoints

| Breakpoint | Layout                              |
|------------|-------------------------------------|
| `< 340px`  | Single column, compact margins      |
| `≥ 576px`  | Centered single-column containers   |
| `≥ 768px`  | Two-column layouts (About, Join)    |
| `≥ 1023px` | Desktop nav, 3-column Popular grid  |
| `≥ 1152px` | Full desktop — largest typography and spacing |

---

## 🔌 Adding ScrollReveal Animations

The `scrollreveal.min.js` file is included. To activate animations, add the following to `main.js`:

```js
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal('.home__data');
sr.reveal('.home__card', { interval: 100 });
sr.reveal('.about__data, .about__image', { origin: 'left' });
sr.reveal('.popular__card', { interval: 100 });
```

---

## 📝 Credits

- Photography — Unsplash contributors
- Icons — [Remix Icons](https://remixicon.com/)
- Fonts — [Google Fonts](https://fonts.google.com/)
- Animations — [ScrollReveal](https://scrollrevealjs.org/)

---

© VoyageVista. All rights reserved.
