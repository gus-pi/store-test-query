import App from '@/App';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
]);

export default router;
