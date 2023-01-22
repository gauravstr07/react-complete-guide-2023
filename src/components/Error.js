import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{color: "red"}}>404: Page not found</div>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
};

export default Error;
