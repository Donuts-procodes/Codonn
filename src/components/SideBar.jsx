import React from "react";

export default function SideBar() {
  return (
    <>
      {/* Button to open offcanvas */}
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        style={{
          height: "2rem",
          display: "flex", // Use flexbox
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          padding: "0",
          margin:"1rem 1rem"
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36"
          height="36"
          color="#a5c2fb"
          fill="none"
        >
          <path
            d="M4 5L20 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12L20 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 19L20 19"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Offcanvas (Sidebar) */}
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
        style={{
          backgroundColor: "#271033",
          color: "#fff",
          borderRight: "1px solid #fff",
          width: "15rem",
          transition: "transform 0.3s ease-in-out", // Smooth transition
        }}
      >
        <div className="offcanvas-header" style={{ position: 'relative' }}>
			
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
          <img src="src\components\4-removebg-preview.png" style={{width:"3rem"}}  alt="" />
          </h5>
          <button
            type="button"
            className="btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style={{
              position: "absolute", // Absolute positioning
              top: "10px", // Adjust top position as needed
              right: "10px", // Adjust right position as needed
              display: "flex",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              color="#a5c2fb"
              fill="none"
            >
              <path
                d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="offcanvas-body">
          {/* Add navigation links here */}
          <nav>
            <ul style={{listStyle:"none",gap:"1rem"}}>
              <li>
                <a href="#home" style={{ color: "#a5c2fb", textDecoration: "none", fontSize:"24px" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" style={{ color: "#a5c2fb", textDecoration: "none",fontSize:"24px" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" style={{ color: "#a5c2fb", textDecoration: "none",fontSize:"24px" }}>
                  Services
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
