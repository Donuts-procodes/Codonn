import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email!", { position: "top-center" });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.", { position: "top-center" });

      // Redirect to LoginPage after sending reset email
      navigate("/LoginPage");
    } catch (error) {
      toast.error(`Error: ${error.message}`, { position: "top-center" });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 vw-100 p-2 m-auto">
      <form onSubmit={handleSubmit} className="border p-2 rounded" style={{
        maxWidth:"80%",
        minWidth:"60%",
        border:"3px solid #A5C2FB",
        boxShadow:"2px 2px 10px #000"
      }}>
        <h2 className="text-center">Reset Password</h2>
        <div className="mb-3 d-flex gap-2 m-3" style={{flexDirection:"column"}}>
          <label htmlFor="email" className="form-label">
            Enter your email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
            required
            style={{minWidth:"100%"}}
          />
        </div>
        <div className="d-flex gap-2 m-3">
          <button type="submit" className="btn" style={{
                        backgroundColor: "#A5C2FB",
                        color: "#271033",
                        width:"20rem",
                        minWidth:"100%",

          }}>
            Send Reset Link
          </button>
        </div>
      </form>
    </div>
  );
}
