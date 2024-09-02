import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import {App} from './App.jsx'
import './index.css'
import { LoginSignup } from './Components/LoginSignup/LoginSignup'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    <LoginSignup/>

  </StrictMode>,
)
