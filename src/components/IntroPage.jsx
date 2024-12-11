import React, { useState } from "react";
export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        className="container"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          fontFamily: "monospace",
          height: "100%",
          margin: "0 auto",
          color: "#fff", // Set text color
          padding: "2rem", // Add padding
          boxSizing: "border-box", // Include padding in height calculation
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <img
          src="src\components\4-removebg-preview.png"
          alt=""
          style={{ width: "5rem", marginTop: "-1rem" }}
        />
        <h1
          className=" mb-3"
          style={{ fontSize: "52px", fontWeight: "bolder" }}
        >
          CODONN
        </h1>
        <h2
          className="mt-5"
          style={{
            fontSize: "40px",
            fontWeight: "bolder",
            fontFamily: "courier new",
          }}
        >
          Let's Get
        </h2>
        <h2
          className="mb-5"
          style={{
            fontSize: "40px",
            fontWeight: "bolder",
            color: "#A5C2FB",
            // fontFamily:"courier new",
          }}
        >
          Started
        </h2>
        <button
          className="rounded mb-2"
          style={{
            backgroundColor: "#A5C2FB",
            color: "#271033",
            width: "25rem",
            fontSize: "26px",
            padding: "0 2rem 0 2rem",
            opacity: isHovered ? 0.7 : 1, // Change opacity on hover
            transition: "opacity 0.3s ease", // Smooth transition
            fontWeight: "bold",
            minHeight: "",
          }}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >
          Register
        </button>
        <p style={{ color: "#fff" }}>
          Already have an Account?{" "}
          <button style={{ textDecoration: "underline", color: "#a5c3fb" }}>
            Click here
          </button>
        </p>
        <hr style={{ width: "100%" }} />
        <p>Or</p>
        <button style={{ width: "10rem" }}>
          <img
            src="src\components\google-signin-button-removebg-preview (1).png"
            class="img-fluid rounded-top"
            alt=""
          />
        </button>
      </div>
    </>
  );
}
