import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Intropage from "./components/Intropage";
import SignupPage from "./components/SignupPage";
import CodeEditor from "./components/CodeEditor";
import { auth } from "./components/firebase";
import ResetPassword from "./components/ResetPassword";
import Loader from "./components/Loader";
function App() {
  // State to track the user and loading state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser); // Set user state when the auth state changes
      setLoading(false); // Stop loading once authentication state is determined
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  // If still loading, display a loading screen
  if (loading) {
    return (
      <div
        className="container"
        style={{ display: "grid", placeItems: "center", height: "100vh" }}
      >
        <Loader />
      </div>
    );
  }

  // Function to handle user logout
  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign the user out
      setUser(null); // Reset user state after logout
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
              {/* Route for the home page, redirects based on user login status */}
              <Route
                path="/"
                element={user ? <Navigate to="/Home" /> : <Intropage />}
              />

              {/* Route for login page */}
              <Route path="/LoginPage" element={<LoginPage />} />

              {/* Route for signup page */}
              <Route path="/SignupPage" element={<SignupPage />} />

              {/* Protected route for HomePage */}
              <Route
                path="/Home"
                element={
                  user ? (
                    <HomePage handleLogout={handleLogout} />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              {/* Protected route for CodeEditor */}
              <Route
                path="/CodeEditor"
                element={user ? <CodeEditor /> : <Navigate to="/" />}
              />

              {/* Route for password reset page */}
              <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>

            {/* Toast container for notifications */}
            <ToastContainer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
