import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <div className='bg-radial-[at_50%_50%] from-[#DF6894] via-[#DA5183] to-[#CC054D] to-80% '>

    <App />
    </div>
  </BrowserRouter>
  </StrictMode>,
)
