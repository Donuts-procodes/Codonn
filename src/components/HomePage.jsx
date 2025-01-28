import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db, auth } from "./firebase";
import Loader from "./Loader";
function HomePage() {
  const [isHovered, setIsHovered] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  // Fetch user data from Firestore
  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        console.log("User logged in:", user);
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log("User data from Firestore:", docSnap.data());
        } else {
          console.warn("No user data found in Firestore.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    } else {
      console.log("No user logged in.");
      navigate("/LoginPage"); // Redirect to login if no user is logged in
    }
  };

  // Handle user authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User logged in:", user);
        fetchUserData();
      } else {
        console.log("User is not logged in.");
        setUserDetails(null); // Clear user data
        navigate("/"); // Redirect to intro page if logged out
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [navigate]);

  // Handle logout functionality
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out successfully!");
      setUserDetails(null); // Clear user details after logout
      navigate("/"); // Redirect to intro page
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  // Navigate to the code editor for the selected language
  const handleNavigate = (language) => {
    navigate(`/CodeEditor?language=${language}`);
  };

  return (
    <div>
      {userDetails ? (
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
              {/* Header Section */}
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
                    marginTop: "1rem",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={handleLogout} // Logout functionality
                >
                  LogOut
                </button>
              </div>

              {/* Welcome Section */}
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
                <h2 style={{ fontSize: "1.5rem" }}>
                  <p style={{ color: "#fff" }}>Hi😊,</p>
                  <p
                    style={{
                      color: "#A5C2FB",
                      fontSize: "2rem",
                      flex: "inline",
                    }}
                  >
                    {userDetails.name}
                  </p>
                  What do you want to build today?
                </h2>
              </div>

              {/* Card Section */}
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
                  // List of languages with descriptions and buttons
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
                      >
                        {`${card.title} ${card.version}`}
                      </h5>
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
                        onClick={() => handleNavigate(card.language)} // Navigate to code editor
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
      ) : (
        <div
          className="container"
          style={{ display: "grid", placeItems: "center", height: "100vh" }}
        >
          <div>
            <Loader />
          </div>
        </div> // Show loading text if user data is not available
      )}
    </div>
  );
}

export default HomePage;
