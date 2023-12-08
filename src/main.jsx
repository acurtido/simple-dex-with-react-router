import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PokemonDetails from './components/PokemonDetails.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/simple-dex-with-react-router",
    element: <App />
  },
  {
    path: "/pokemon",
    element: <PokemonDetails />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
