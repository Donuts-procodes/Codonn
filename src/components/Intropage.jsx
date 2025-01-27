import { useState } from "react";
import GoogleButton from "react-google-button";

export default function IntroPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        color: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          gap: "1rem",
          width: "100%",
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
          }}
        ></div>

        {/* Title */}
        <h1 style={{ fontSize: "62px", fontWeight: "bolder" }}>Codonn</h1>

        {/* Subheading */}
        <div>
          <p
            style={{
              fontSize: "2.5rem",
              fontWeight: "bolder",
              fontFamily: "Courier New, monospace",
              margin: "0",
            }}
          >
            Let&apos;s get
          </p>
          <p
            style={{
              fontSize: "3rem",
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
            fontSize: "26px",
            width: "30%",
            fontWeight: "bolder",
            opacity: isHovered ? 0.7 : 1, // Change opacity on hover
            transition: "opacity 0.15s ease", // Smooth transition
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
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
        <p style={{ marginTop: "1rem", fontSize: "1rem" }}>
          Already have an account?
        </p>

        {/* Google Button */}
        <div>
          <GoogleButton
            onClick={() => console.log("Google Button Clicked!")} // Add functionality
          />
        </div>
      </div>
    </div>
  );
}
