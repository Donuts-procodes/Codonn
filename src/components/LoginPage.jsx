import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged in Successfully!!!");
      toast.success("User Logged in Successfully!!!", { position: "top-center" });
      navigate("/Home"); // Redirect to homepage after login
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          fontFamily: "courier new",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "25vw",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            gap: "2rem",
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
        <div>
          <form
            onSubmit={handleSubmit}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              width: "75vw",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "100vh",
                gap: "1rem",
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <h1 style={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bolder" }}>
                Log In
              </h1>
              <label style={{ fontSize: "20px" }} className="form-label">
                User Email:
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="User Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "25rem", marginBottom: "1rem" }}
              />
              <label style={{ fontSize: "20px" }} className="form-label">
                Password:
              </label>
              <input
                type="password"
                className="form-control rounded-pill"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "25rem", marginBottom: "1rem" }}
              />
              <button
                className="btn rounded-pill"
                style={{
                  backgroundColor: "#A5C2FB",
                  color: "#271033",
                  width: "25rem",
                  fontWeight: "bolder",
                }}
              >
                Login
              </button>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#fff" }}>
                  Forgot Password?{" "}
                  <button
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
