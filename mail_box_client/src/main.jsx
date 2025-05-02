import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Signup } from './components/Signup.jsx'
import { MainRouter } from './components/router/MainRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainRouter>
    <Signup/>
    </MainRouter>
  
  </StrictMode>,
)
