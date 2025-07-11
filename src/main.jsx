import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom' // ✅ add this
import './index.css'
import './Component/Style/ProfileSettings.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter>  ✅ Correct place for BrowserRouter */}
      <App />
    {/* </BrowserRouter> */}
  </StrictMode>
)
