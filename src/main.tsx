import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { inject } from '@vercel/analytics'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Em produção o HTML vem pré-renderizado (scripts/prerender.mjs): hidrata.
// Em dev o #root está vazio: renderiza do zero.
// Vercel Web Analytics: sem cookies e sem dados pessoais (dispensa banner de
// consentimento; descrito em /privacidade). Acompanha as trocas de rota via pushState.
inject()

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
