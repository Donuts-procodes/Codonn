import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Intropage from "./components/Intropage";
function App() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <HomePage /> */}
        {/* <Intropage /> */}
        <LoginPage/>
      </div>
    </>
  );
}

export default App;
