import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import RecommendationsPage from './pages/RecommendationsPage';
import CatalogPage from './pages/CatalogPage';
import ServicePage from './pages/ServicePage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'categoria/:slug', element: <CategoryPage /> },
      { path: 'quienes-somos', element: <AboutPage /> },
      { path: 'recomendaciones', element: <RecommendationsPage /> },
      { path: 'catalogo', element: <CatalogPage /> },
      { path: 'servicios/:slug', element: <ServicePage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
