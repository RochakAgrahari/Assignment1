import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AccountSettings from "./pages/AccountSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Signup" element={<SignUp />} />  
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/AccountSettings" element={<AccountSettings/>} />
      </Routes>
    </Router>
  );
}

export default App;
