import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PokemonDetails from './components/PokemonDetails'
import PokemonInfo from './components/PokemonInfo'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/pokemon",
    element: <PokemonDetails />
  },
  {
    path: "/pokemon-info/:id",
    element: <PokemonInfo />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
