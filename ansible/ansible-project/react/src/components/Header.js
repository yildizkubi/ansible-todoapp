import React from "react";
import cw from "../assets/cw.svg";
import "./style.css";

const Header = () => {
  return (
    <div>
      <div className="text-center">
        <img src={cw} alt="logo" className="cw" />
        <h6 className="text-center mt-5">
          This app has been developed by Kubilay Yildiz.
        </h6>
        <h1 className="text-center mt-5 header-text">Kubilay's Todos</h1>
      </div>
    </div>
  );
};

export default Header;
