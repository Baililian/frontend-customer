import { createRoot } from 'react-dom/client';
import { HydratedRouter } from 'react-router/dom';
import './bootstrap';

createRoot(document.getElementById('root')!).render(<HydratedRouter />);