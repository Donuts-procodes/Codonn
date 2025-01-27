import { useState } from "react";

// import React from "react";
function HomePage() {
  console.log("created");
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
              className="container"
              style={{
                height: "10%",
                justifyContent: "right",
                alignItems: "center",
                display: "flex",
                marginTop:"2rem"
              }}
            >
              <button
                className="btn btn"
                style={{
                  backgroundColor: "#A5C2FB",
                  color: "#271033",
                  fontFamily: "sans-serif",
                  padding: "0.5rem 2rem 0.5rem 2rem",
                  fontWeight: "bolder",
                  opacity: isHovered ? 0.7 : 1, // Change opacity on hover
                  transition: "opacity 0.15s ease", // Smooth transition
                }}
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                onMouseLeave={() => setIsHovered(false)} // Set hover state to
              >
                LogOut
              </button>
            </div>
          {/* Header Section */}
          <div
            style={{
              height: "15%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              textAlign: "center",
              backgroundColor: "transparent",
            }}
          >
            <h2 style={{ fontSize: "2rem" }}>
              What do you want to build today?
            </h2>
          </div>

          {/* Cards Section */}
          <div
            style={{
              height: "85%", // Remainder of the viewport height
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              overflowY: "auto",
              padding: "1rem",
              backgroundColor: "transparent",
            }}
          >
            {/* Card Component */}
            {[
              {
                title: "JavaScript",
                version: "v18.15.0",
                imgSrc:
                  "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
                description:
                  "JavaScript (JS) is a versatile programming language for web development, enabling dynamic content, interactivity, APIs, animations, and more functionality.",
              },
              {
                title: "Python",
                version: "v3.10.0",
                imgSrc:
                  "https://abctrainings.in/media/thumbnails/Python-01_2_1.png",
                description:
                  "Python is a versatile, user-friendly programming language for web, data analysis, AI, automation, scientific computing, and scripting, with extensive libraries.",
              },
              {
                title: "Java",
                version: "v15.0.2",
                imgSrc:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWYHg-GEEZiYGXC9an-y0kl_6Cx5vBL_NRNw&s",
                description:
                  "Java is a versatile, object-oriented programming language used for building platform-independent applications, including web, mobile, desktop, and enterprise-level software.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="card"
                style={{
                  width: "18rem",
                  backgroundColor: "#271033",
                  color: "#A5C2FB",
                  border: "2px dashed #A5C2FB",
                  fontFamily: "monospace",
                  display: "flex",
                  flexDirection: "column",
                  height: "23rem",
                  overflow: "hidden",
                }}
              >
                <img
                  className="card-img-top"
                  src={card.imgSrc}
                  alt={`${card.title} logo`}
                  style={{
                    width: "100%",
                    height: "8.8rem",
                    objectFit: "contain",
                  }}
                />
                <div
                  className="card-body"
                  style={{
                    flex: 1,
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "1rem",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}
                  >{`${card.title} ${card.version}`}</h5>
                  <p
                    className="card-text"
                    style={{
                      color: "white",
                      fontSize: "12px",
                      overflowY: "auto",
                      flex: 1,
                    }}
                  >
                    {card.description}
                  </p>
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#A5C2FB",
                      color: "#271033",
                      marginTop: "auto",
                      alignItems: "center",
                      display: "flex",
                      justifyContent:"center"
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="none"
                    >
                      <path
                        d="M20.0001 11.9998L4.00012 11.9998"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
