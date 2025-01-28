import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Intropage from "./components/Intropage";
import SignupPage from "./components/SignupPage";
import CodeEditor from "./components/CodeEditor";
import { auth } from "./components/firebase";
import Loader from "./components/Loader";
import { loader } from "@monaco-editor/react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false); // Ensure we stop loading once the state is known
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  // Show a loading state while authentication status is being determined
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null); // Reset user state
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={user ? <Navigate to="/Home" /> : <Intropage />} />
              <Route path="/LoginPage" element={<LoginPage />} />
              <Route path="/SignupPage" element={<SignupPage />} />
              <Route
                path="/Home"
                element={user ? <HomePage handleLogout={handleLogout} /> : <Navigate to="/" />}
              />
              <Route
                path="/CodeEditor"
                element={user ? <CodeEditor /> : <Navigate to="/" />}
              />
            </Routes>
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>


  );
}

export default App;
