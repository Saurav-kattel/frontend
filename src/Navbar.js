
import './App.css';
 import Signup from "./signup.js"
 import {
   BrowserRouter as Router,
   Route,
   Routes,
Link
} from "react-router-dom";

import App from "./App.js"
function Navbar() {
  return(
    <>
    <Router>
    <Link to="/signup">signUp</Link>
    <Link to="/home">home</Link>
    <Routes>
    <Route exact path="/signup" element={<Signup />} />
    <Route exact path="/home" element={<App/>} />
    </Routes>
        </Router>
    
    </>
    )
}

export default Navbar;