import React from "react"
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const navigate = useNavigate();
  return (
    <form id="signInForm">
      <label for="referenceId">Reference ID:</label>
      <input type="text" id="referenceId" name="referenceId" required />
      <button type="submit" className="signInBtn" onClick={() => navigate("/selector")}>Submit</button>
    </form>
  )
};

export default SignIn;
