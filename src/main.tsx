import { createRoot } from 'react-dom/client';
import './scss/main.scss';
import { HashRouter as Router } from 'react-router-dom';

import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Router>
);
