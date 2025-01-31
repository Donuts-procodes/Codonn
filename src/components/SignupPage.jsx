import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignupPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill all fields.", { position: "top-center" });
      return;
    }
    setLoading(true);
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
      navigate("/Home");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "bottom-center" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    const handleViewportChange = () => {
      setIsKeyboardOpen(
        window.visualViewport.height < window.innerHeight * 0.75
      );
    };

    window.addEventListener("resize", handleResize);
    window.visualViewport.addEventListener("resize", handleViewportChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.visualViewport.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        overflowX: "hidden",
        fontFamily: "Courier New",
        color: "#fff",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          height: isMobile ? "0" : "100vh",
          width: isMobile ? "100vw" : "25vw",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          gap: "1rem",
          backgroundImage:
            "url(https://i.pinimg.com/736x/e2/03/dc/e203dc3c0c877ffd65e89b98457549cf.jpg)",
          fontFamily: "sans-serif",
          textShadow:
            "-1px -1px 0 #6CA0DC, 1px -1px 0 #6CA0DC, -1px 1px 0 #6CA0DC, 1px 1px 0 #6CA0DC",
          fontSize: isMobile ? "2rem" : "3rem",
          fontWeight: "bolder",
        }}
      ></div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "100vw" : "75vw",
          height: isMobile ? "70vh" : "100vh",
          marginTop: isMobile ? "5rem" : "0rem",
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
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              height: isKeyboardOpen ? "60vh" : "85vh",
              gap: "1rem",
              flexDirection: "column",
              justifyContent: "center",
              display: "flex",
              maxWidth: "30vw",
              width: "15rem",
              minWidth: "20rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "2rem",
                  fontWeight: "bolder",
                  marginTop: "2rem",
                  fontSize: "52px",
                  minWidth: "25rem",
                }}
              >
                Register
              </h1>
            </div>
            <label style={{ fontSize: isMobile ? "16px" : "20px" }}>
              User Name:
            </label>
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="User Name"
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
            <label style={{ fontSize: isMobile ? "16px" : "20px" }}>
              User Email:
            </label>
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="User Email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
            <label style={{ fontSize: isMobile ? "16px" : "20px" }}>
              Password:
            </label>
            <input
              type="password"
              className="form-control rounded-pill"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", marginBottom: "1rem" }}
            />
            <button
              className="btn rounded-pill"
              disabled={loading}
              style={{
                backgroundColor: loading ? "#ccc" : "#A5C2FB",
                color: "#271033",
                width: "100%",
                fontWeight: "bolder",
              }}
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <div style={{ textAlign: "center" }}>
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
        </form>
      </div>
    </div>
  );
}
