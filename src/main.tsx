import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import mainRoutes from './routes/MainRoutes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={mainRoutes}/>
  </StrictMode>,
)
