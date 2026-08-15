import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Suspense, lazy } from 'react';
import './index.css';

// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() => import('./App.jsx'));

import MyCars from './components/MyCars.jsx';
import MyForm from './components/MyForm.jsx';
import MySubmitForm from './components/MySubmitForm.jsx';
import MyMultiInputsForm from './components/MyMultyInputsForm.jsx';
import MyCheckboxForm from './components/MyCheckboxForm.jsx';
import MyRadioForm from './components/MyRadioForm.jsx';
import MyPortals from './components/MyPortals.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}> 
      <App />
    </Suspense>
    <MyCars />
    <MyForm />
    <MySubmitForm />
    <MyMultiInputsForm />
    <MyCheckboxForm />
    <MyRadioForm />
    <MyPortals />
  </StrictMode>
)

