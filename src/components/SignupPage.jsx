import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignupPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800); // State to track screen size
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill all fields.", { position: "top-center" });
      return;
    }
    setLoading(true); // Start loading
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        name: name,
        photo: "",
      });
      toast.success("User Registered Successfully!!!", {
        position: "top-center",
      });
      navigate("/Home"); // Redirect to the homepage
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "bottom-center" });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Handle window resize for mobile responsiveness
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  window.addEventListener("resize", handleResize);

  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: isMobile ? "column" : "row", // Flex direction changes on mobile
          overflow: "hidden",
          fontFamily: "Courier New",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: isMobile ? "100vw" : "25vw", // Adjust width for mobile screens
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            gap: "1rem",
            backgroundImage:
              "url(https://i.pinimg.com/736x/e2/03/dc/e203dc3c0c877ffd65e89b98457549cf.jpg)",
            fontFamily: "sans-serif",
            textShadow:
              "-1px -1px 0 #6CA0DC, 1px -1px 0 #6CA0DC, -1px 1px 0 #6CA0DC, 1px 1px 0 #6CA0DC",
            fontSize: isMobile ? "2rem" : "3rem", // Adjust font size for mobile
            fontWeight: "bolder",
          }}
        >
          WELCOME!
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            width: isMobile ? "100vw" : "75vw", // Adjust width for mobile screens
          }}
        >
          <form
            onSubmit={handleRegister}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              width: "75vw",
            }}
          >
            <div
              style={{
                height: "80vh",
                gap: "1rem",
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "2rem",
                  fontWeight: "bolder",
                  marginTop:"2rem"
                }}
              >
                Register
              </h1>
              <label style={{ fontSize: isMobile ? "16px" : "20px" }}>User Name:</label>
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="User Name"
                onChange={(e) => setName(e.target.value)}
                style={{ width: "25rem", marginBottom: "1rem" }}
              />
              <label style={{ fontSize: isMobile ? "16px" : "20px" }}>User Email:</label>
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="User Email"
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "25rem", marginBottom: "1rem" }}
              />
              <label style={{ fontSize: isMobile ? "16px" : "20px" }}>Password:</label>
              <input
                type="password"
                className="form-control rounded-pill"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "25rem", marginBottom: "1rem" }}
              />
              <button
                className="btn rounded-pill"
                disabled={loading} // Disable button while loading
                style={{
                  backgroundColor: loading ? "#ccc" : "#A5C2FB",
                  color: "#271033",
                  width: "25rem",
                  fontWeight: "bolder",
                }}
              >
                {loading ? "Registering..." : "Register"}{" "}
                {/* Show loading text */}
              </button>
            </div>
          </form>
          <div style={{ textAlign: "center", margin: "0.5rem" }}>
            <p style={{ color: "#fff" }}>
              Already have an Account?{" "}
              <button
                onClick={() => navigate("/LoginPage")}
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
      </div>
    </div>
  );
}
