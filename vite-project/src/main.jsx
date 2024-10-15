import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contacto from "./pages/Contacto.jsx";
import Servicios from "./pages/Servicios.jsx";
import App from './App.jsx'
import './index.css'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/Contacto",
    element: <Contacto />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {routes} />
  </StrictMode>,
);
