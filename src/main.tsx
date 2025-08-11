import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { HashRouter } from 'react-router'
import 'normalize.css'
import './styles/style.scss'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
