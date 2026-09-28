# Sabarish PV — Portfolio

Personal portfolio site built with React and Vite, deployed to GitHub Pages.

## Stack

- React 19 + Vite
- Plain CSS (no framework)
- [Web3Forms](https://web3forms.com) for the contact form
- GitHub Actions for CI/deploy

## Development

```bash
npm install
cp .env.example .env.local   # add your own Web3Forms access key
npm run dev
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. The build needs
`VITE_WEB3FORMS_ACCESS_KEY` set as a repository secret
(Settings → Secrets and variables → Actions) for the live contact form to work.
