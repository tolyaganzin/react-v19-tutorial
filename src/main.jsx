import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import MyCars from './components/MyCars.jsx';
import MyForm from './components/MyForm.jsx';
import MySubmitForm from './components/MySubmitForm.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyCars />
    <MyForm />
    <MySubmitForm />
  </StrictMode>,
)
