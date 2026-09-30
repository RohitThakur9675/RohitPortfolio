# Rohit Thakur | Full Stack Developer Portfolio

A modern, responsive developer portfolio built with **React + Vite** and plain CSS. It presents my profile, skills, projects (with case studies), journey, services and contact details in a dark, premium design.

## Features

- Hero with a large circular profile photo, glowing ring and subtle orbit animation
- Sticky glass-style navbar with active-section highlighting and a mobile hamburger menu
- Sections: Home, About, Skills, Projects, Experience, Services, Contact
- Project cards that open the live app, plus a case-study modal (overview, problem, solution, features, stack, challenges, learnings)
- Contact section with clickable email, phone, GitHub and LinkedIn cards, and a form with toast feedback
- Scroll-reveal animations, back-to-top button and `prefers-reduced-motion` support
- SEO metadata (title, description, Open Graph), semantic HTML, keyboard focus states and ARIA labels
- No Tailwind and no animation library: CSS plus a small `IntersectionObserver`, so the bundle stays light

## Tech Stack

React 18, Vite 5, JavaScript (ES6+), CSS3, React Icons

## Getting Started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build in /dist
npm run preview   # preview the production build locally
```

## Project Structure

```
public/
├── profile.jpg          # hero and About photo (replace to change)
└── resume.pdf           # resume used by the Download buttons
src/
├── components/          # Navbar, Hero, About, Skills, Projects, ProjectCard,
│                        # Experience, Services, Contact, Socials, Footer, Section
├── data/portfolioData.js  # all content and links
├── App.jsx
├── main.jsx
└── index.css            # design tokens, layout and animations
```

## Customizing

Nearly everything is edited in one file: `src/data/portfolioData.js`.

| What | Where |
| --- | --- |
| GitHub, LinkedIn, email, phone, resume path, photo path | `config` |
| Bio, philosophy, focus areas | `about` |
| Skill categories | `skills` |
| Projects, case studies, live and GitHub links | `projects` |
| Timeline | `journey` |
| Services and "Why work with me" cards | `services`, `why` |

- **Photo:** replace `public/profile.jpg` with a square image (about 900x900).
- **Resume:** replace `public/resume.pdf`.
- **Project screenshots:** add an image to `public/` and set `image: '/your-file.png'` on the project. Without one, a gradient placeholder is shown.
- **Hide the phone number:** set `phone: ''` in `config`.
- **Accent color:** change `--accent` and `--accent2` at the top of `src/index.css`.
- A link left as a `YOUR_...` placeholder is shown as disabled instead of pointing nowhere.

## Contact Form

The site has no backend. Submitting the form opens the visitor's email app with the message pre-filled and addressed to the email in `config`. To receive messages directly, connect a form service such as Formspree or EmailJS in `src/components/Contact.jsx`.

## Deployment

The site is a static build, so it works on Vercel, Netlify or GitHub Pages.

On Vercel: import the repository, choose the **Vite** preset (build command `npm run build`, output directory `dist`) and deploy.

## License

All rights reserved. Please do not reuse the personal content (photo, resume, text) without permission.
