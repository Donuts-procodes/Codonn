export default function LoginPage() {
  return (
    <div>
      <div
        className=""
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          fontFamily: "courier new",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        <div
          className="border"
          style={{
            height: "100vh",
            width: "25vw",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            gap: "2rem",
            backgroundImage:
              " url(https://i.pinimg.com/736x/e2/03/dc/e203dc3c0c877ffd65e89b98457549cf.jpg",
            fontFamily: "sans-serif",
            textShadow:
              "-1px -1px 0 #6CA0DC , 1px -1px 0 #6CA0DC , -1px 1px 0 #6CA0DC , 1px 1px 0 #6CA0DC",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          WELCOME!
        </div>
        <div>
          <form
            className=""
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              width: "75vw",
              flexDirection: "column",
            }}
          >
            <div
              className="mx-5"
              style={{
                height: "100vh",
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
                }}
              >
                LogIn
              </h1>
              {/* username  */}
              <label
                style={{
                  fontSize: "20px",
                }}
                className="form-label"
              >
                User Name:
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="User Name"
                style={{
                  width: "25rem",
                  marginBottom: "1rem",
                }}
              />
              {/* email */}
              <label
                style={{
                  fontSize: "20px",
                }}
                className="form-label"
              >
                User Email:
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="User Email"
                style={{
                  width: "25rem",
                  marginBottom: "1rem",
                }}
              />
              {/* password */}
              <label
                style={{
                  fontSize: "20px",
                }}
                className="form-label"
              >
                Password:
              </label>
              <input
                type="password"
                className="form-control rounded-pill"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder="Password"
                style={{
                  width: "25rem",
                  marginBottom: "1rem",
                }}
              />
              <button
                className="btn rounded-pill"
                style={{
                  backgroundColor: "#A5C2FB",
                  color: "#271033",
                  width: "25rem",
                  fontWeight: "bolder",
                }}
              >
                Register
              </button>
              <div style={{ textAlign: "center" }}>
                <p style={{ color: "#fff" }}>
                  Forgot Password{" "}
                  <button
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
    </div>
  );
}
