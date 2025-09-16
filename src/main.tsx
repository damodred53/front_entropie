
import React from 'react'
import ReactDOM from 'react-dom/client'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import '../main.scss'
import SignInPage from './Pages/SignInPage'
import LogInPage from './Pages/LogInPage'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />}></Route>
          <Route path="/login" element={<LogInPage />}></Route>
        </Routes>
      </Router>
   
  </React.StrictMode>,
)
