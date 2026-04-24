import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import CatalogPage from './pages/CatalogPage';
import ServicePage from './pages/ServicePage';
import ServicesPage from './pages/ServicesPage';
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
      { path: 'contacto', element: <ContactPage /> },
      { path: 'proyectos', element: <ProjectsPage /> },
      { path: 'catalogo', element: <CatalogPage /> },
      { path: 'servicios', element: <ServicesPage /> },
      { path: 'servicios/:slug', element: <ServicePage /> },
      { path: 'editor', element: <EditorPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
