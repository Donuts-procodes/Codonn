import { useState } from "react";
import GoogleButton from 'react-google-button'
export default function Intropage() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          height: "100vh",
          margin: "auto",
          gap: "0.5rem",
          width:"100vw"
        }}
      >
        {/* image/logo  */}
        <div
          className="rounded-circle"
          style={{
            height: "5rem",
            width: "5rem",
            backgroundImage: `url(/src/components/4-removebg-preview.png)`, // Corrected backgroundImage syntax
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        {/* titlename */}
        <div
          style={{
            width: "100%",
            margin: "0",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "64px", fontWeight: "bolder" }}>Codonn</h1>
        </div>
        {/* lets get started */}
        <div
          style={{
            width: "100%",
            margin: "0",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "0",
            marginTop:"1rem"
          }}
        >
          <p
            style={{
              fontSize: "2.5rem",
              fontWeight: "bolder",
              fontFamily: "courier new",
            }}
          >
            Let&apos;s get
          <p
            style={{
              fontSize: "3rem",
              fontWeight: "bolder",
              color: "#A5C2FB",
              fontFamily: "courier new",
            }}
            >
            Started
          </p>
            </p>
        </div>
        {/* button  */}
        <div style={{width:"100%",
          alignItems:"center",
          display:"flex",
          justifyContent:"center",
        }}>
          <button
            className="btn"
            style={{
              padding: "0 2rem 0 2rem",
              backgroundColor: "#A5C2FB",
              fontSize: "26px",
              width: "30%",
              fontWeight: "bolder",
              color: "#271033",
              opacity: isHovered ? 0.7 : 1, // Change opacity on hover
              transition: "opacity 0.15s ease", // Smooth transition
            }}
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true
            onMouseLeave={() => setIsHovered(false)} // Set hover state to
          >
            Regsiter
          </button>
        </div>
        {/* division line  */}
        <div style={{width:"100%",border:"1px solid white", marginTop:"1rem"}}></div>
        {/* the or question  */}
		<div style={{
			width:"100%",
      textAlign:"center",
      height:"fit-content",
      marginTop:"1rem"
		}}>
			<p>All ready have an Account?</p>
		</div>
    <div>
      <GoogleButton/>
    </div>
      </div>
    </div>
  );
}
