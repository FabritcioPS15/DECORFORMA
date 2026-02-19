import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import RecommendationsPage from './pages/RecommendationsPage';
import CatalogPage from './pages/CatalogPage';
import ServicePage from './pages/ServicePage';
import EditorPage from './pages/EditorPage';
import NotFound from './pages/NotFound';

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
      { path: 'editor', element: <EditorPage /> },
      { path: 'servicios/:slug', element: <ServicePage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
