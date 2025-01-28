import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (language) => {
    navigate(`/CodeEditor?language=${language}`);
  };

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
          className="container"
        >
          <div
            className="container"
            style={{
              height: "10%",
              justifyContent: "right",
              alignItems: "center",
              display: "flex",
              gap: "1rem",
            }}
          >
            <button
              className="btn btn"
              style={{
                backgroundColor: "#A5C2FB",
                color: "#271033",
                fontFamily: "sans-serif",
                padding: "0.5rem 2rem",
                fontWeight: "bolder",
                opacity: isHovered ? 0.7 : 1,
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              LogOut
            </button>
          </div>
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
          <div
            style={{
              height: "85%",
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
            {[
              {
                title: "JavaScript",
                version: "vES2024",
                language: "javascript",
                imgSrc:
                  "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
                description:
                  "JavaScript (JS) is a versatile programming language for web development, enabling dynamic content, interactivity, APIs, animations, and more functionality.",
              },
              {
                title: "Python",
                version: "v3.12.0",
                language: "python",
                imgSrc:
                  "https://abctrainings.in/media/thumbnails/Python-01_2_1.png",
                description:
                  "Python is a versatile, user-friendly programming language for web, data analysis, AI, automation, scientific computing, and scripting, with extensive libraries.",
              },
              {
                title: "Java",
                version: "v20.0.1",
                language: "java",
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
                      justifyContent: "center",
                    }}
                    onClick={() => handleNavigate(card.language)}
                  >
                    Open Editor
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
