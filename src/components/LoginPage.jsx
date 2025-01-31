import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [keyboardOpen, setKeyboardOpen] = useState(false); // New state to track keyboard visibility
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    const handleKeyboard = () => {
      if (window.visualViewport) {
        setKeyboardOpen(window.innerHeight > window.visualViewport.height + 100);
      }
    };

    window.addEventListener("resize", handleResize);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleKeyboard);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleKeyboard);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User Logged in Successfully!", { position: "top-center" });
      navigate("/Home");
    } catch (error) {
      toast.error(error.message, { position: "bottom-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        fontFamily: "Courier New",
        color: "#fff",
        fontWeight: "bold",
        overflowX: "hidden",
        transition: "all 0.3s ease-in-out",
      }}
    >
      {/* Left Panel */}
      <div
        style={{
          width: isMobile ? "100vw" : "25vw",
          height: isMobile ? "30vh" : "100vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "url(https://i.pinimg.com/736x/e2/03/dc/e203dc3c0c877ffd65e89b98457549cf.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          fontFamily: "sans-serif",
          textShadow:
            "-1px -1px 0 #6CA0DC , 1px -1px 0 #6CA0DC , -1px 1px 0 #6CA0DC , 1px 1px 0 #6CA0DC",
          fontSize: isMobile ? "1.5rem" : "3rem",
          fontWeight: "bolder",
          transition: "all 0.3s ease-in-out",
        }}
      ></div>

      {/* Login Form */}
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "100vw" : "75vw",
          marginTop: isMobile ? "2rem":"0rem",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            width: "75vw",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              height: "85vh",
              gap: "1rem",
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
              maxWidth: "30vw",
              width: "20rem",
              minWidth: "20rem",
            }}
          >
            {/* Login Heading */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: keyboardOpen ? "1rem" : "2rem", // Reduce margin when keyboard is open
                  fontWeight: "bolder",
                  marginTop: keyboardOpen ? "1rem" : "2rem", // Reduce margin when keyboard is open
                  fontSize: "52px",
                  minWidth: "25rem",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                Log In
              </h1>
            </div>

            {/* Email Input */}
            <div style={{ width: "100%", textAlign: "left" }}>
              <label style={{ fontSize: "20px" }}>User Email:</label>
              <input
                type="email"
                className="form-control rounded-pill"
                placeholder=" example@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  padding: "0.5rem",
                  borderRadius: "20px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Password Input */}
            <div style={{ width: "100%", textAlign: "left" }}>
              <label style={{ fontSize: "20px" }}>Password:</label>
              <input
                type="password"
                className="form-control rounded-pill"
                placeholder=" Enter at least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  padding: "0.5rem",
                  borderRadius: "20px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn rounded-pill"
              style={{
                backgroundColor: "#A5C2FB",
                color: "#271033",
                width: "100%",
                fontWeight: "bolder",
                padding: "0.7rem",
                borderRadius: "20px",
                border: "none",
                cursor: "pointer",
              }}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* Forgot Password */}
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
              <p style={{ color: "#fff" }}>
                Forgot Password?{" "}
                <button
                  type="button"
                  style={{
                    textDecoration: "underline",
                    color: "#a5c3fb",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/reset-password")}
                >
                  Click here
                </button>
              </p>
            </div>

            {/* Signup Link */}
            <div style={{ textAlign: "center" }}>
              <p>Or</p>
              <p style={{ color: "#fff" }}>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/SignupPage")}
                  style={{
                    textDecoration: "underline",
                    color: "#a5c3fb",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Click here
                </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
