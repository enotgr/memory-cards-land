# Memard Web

Landing page for the Memard iPhone app, built with React and Vite.

The site includes the main product page and a Privacy Policy page. It is designed to be deployed as a static site, including GitHub Pages.

## Requirements

- Node.js
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Routing

The Privacy Policy page uses hash routing:

```text
/#/privacy
```

This keeps direct page access reliable on static hosting such as GitHub Pages without extra server fallback configuration.

## Assets

- App renders and logo files are stored in `images/`
- Favicons and web manifest files are stored in `public/`
- Production output is generated into `dist/`
