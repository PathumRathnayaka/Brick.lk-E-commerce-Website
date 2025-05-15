import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App.tsx';
import './index.css';
import { ToasterProvider } from './components/common/Toaster';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ToasterProvider>
        <App />
      </ToasterProvider>
    </Provider>
  </StrictMode>
);