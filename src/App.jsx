import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intropage from "./components/Intropage";
import SignupPage from "./components/SignupPage";
import { ToastContainer } from "react-toastify";
import CodeEditor from "./components/CodeEditor";
function App() {
  console.log("hello")
  return (
    <>
    <Router>
          <div className="App">
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Routes>
                  <Route path="/" element={<Intropage/>}/>
                  <Route path="/LoginPage" element={<LoginPage/>}/>
                  <Route path="/SignupPage" element={<SignupPage/>}/>
                  <Route path="/Home" element={<HomePage/>}/>
                  <Route path="/CodeEditor" element={<CodeEditor/>}/>
                </Routes>
                <ToastContainer/>
              </div>
            </div>
          </div>
      </Router>
    </>
  );
}

export default App;
