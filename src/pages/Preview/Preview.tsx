import Button from "components/common/Button/Button";
import React from "react";
import { useNavigate } from "react-router-dom";

function Preview() {
  const navigate = useNavigate();
  return (
    <div style={{ color: "white" }}>
      Preview
      <div>
        <Button isActive onClick={() => navigate("/home")} text={"OK to home"} />
      </div>
    </div>
  );
}

export default Preview;
