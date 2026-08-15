import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyCars from './components/MyCars.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyCars />
  </StrictMode>,
)
