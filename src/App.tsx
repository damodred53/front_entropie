import React from 'react'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignInPage from './Pages/SignInPage'
import LogInPage from './Pages/LogInPage'


const App = () => {
  return (
    <div className="App">
     
        <React.StrictMode>
        
            <Router>
              <Routes>
                <Route path="/" element={<SignInPage />}></Route> 
                <Route path="/login" element={<LogInPage />}></Route>
              </Routes>
            </Router>
        
        </React.StrictMode>,
      
      </div>
  )
}

export default App;
