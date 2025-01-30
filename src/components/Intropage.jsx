import { useState } from "react";
import GoogleSignin from "./GoogleSignin";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export default function IntroPage() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Initialize the navigation hook

  return (
    <div
      style={{
        color: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 1rem", // Add padding to prevent overflow
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "1rem", // Increased gap for better mobile spacing
          width: "100%",
          maxWidth: "500px", // Restrict max width for better mobile appearance
        }}
      >
        {/* Logo */}
        <div
          className="rounded-circle"
          style={{
            height: "5rem",
            width: "5rem",
            backgroundImage: `url(/src/components/4-removebg-preview.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginBottom: "1rem", // Add margin to space out logo
          }}
        ></div>

        {/* Title */}
        <h1
          style={{
            fontSize: "5rem", // Adjust font size for mobile
            fontWeight: "bolder",
            margin: "0 0 1rem 0", // Adjust margin for mobile spacing
          }}
        >
          Codonn
        </h1>

        {/* Subheading */}
        <div>
          <p
            style={{
              fontSize: "1.8rem", // Adjusted for mobile view
              fontWeight: "bolder",
              fontFamily: "Courier New, monospace",
              margin: "0",
            }}
          >
            Let&apos;s get
          </p>
          <p
            style={{
              fontSize: "2.2rem", // Adjusted for mobile view
              fontWeight: "bolder",
              color: "#A5C2FB",
              fontFamily: "Courier New, monospace",
              margin: "0",
            }}
          >
            Started
          </p>
        </div>

        {/* Register Button */}
        <button
          className="btn"
          style={{
            padding: "0.5rem 2rem",
            backgroundColor: "#A5C2FB",
            color: "#271033",
            fontSize: "1.8rem", // Adjust font size for mobile
            width: "250px", // Fixed width for larger screens, but can adjust for mobile
            fontWeight: "bolder",
            opacity: isHovered ? 0.7 : 1, // Change opacity on hover
            transition: "opacity 0.15s ease", // Smooth transition
            border: "none",
            cursor: "pointer",
            minWidth: "200px", // Ensure button is not too small on smaller screens
          }}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
          onClick={() => navigate("/SignupPage")} // Navigate to the signup page
        >
          Register
        </button>

        {/* Divider */}
        <div
          style={{
            width: "80%",
            border: "1px solid white",
            marginTop: "1rem",
          }}
        ></div>

        {/* Already Have an Account Section */}
        <p style={{ marginTop: "1rem", fontSize: "1rem" }}>or</p>

        {/* Google Button */}
        <div>
          <GoogleSignin />
        </div>
      </div>
    </div>
  );
}
