import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
        fontFamily: "Courier New",
        color: "#fff",
        fontWeight: "bold",
        overflow: "hidden",
      }}
    >
      {/* Left Panel */}
      <div
        style={{
          width: "25vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage:
            "url(https://i.pinimg.com/736x/e2/03/dc/e203dc3c0c877ffd65e89b98457549cf.jpg)",
          fontFamily: "sans-serif",
          textShadow:
            "-1px -1px 0 #6CA0DC , 1px -1px 0 #6CA0DC , -1px 1px 0 #6CA0DC , 1px 1px 0 #6CA0DC",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        WELCOME!
      </div>

      {/* Login Form */}
      <div style={{ width: "75vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "25rem" }}>
          <h1 style={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bolder" }}>Log In</h1>

          <div style={{ width: "100%", textAlign: "left" }}>
            <label style={{ fontSize: "20px" }}>User Email:</label>
            <input
              type="email"
              className="form-control rounded-pill"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", marginBottom: "1rem" }}
            />
          </div>

          <div style={{ width: "100%", textAlign: "left" }}>
            <label style={{ fontSize: "20px" }}>Password:</label>
            <input
              type="password"
              className="form-control rounded-pill"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", marginBottom: "1rem" }}
            />
          </div>

          <button
            type="submit"
            className="btn rounded-pill"
            style={{
              backgroundColor: "#A5C2FB",
              color: "#271033",
              width: "100%",
              fontWeight: "bolder",
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
                }}
              >
                Click here
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
