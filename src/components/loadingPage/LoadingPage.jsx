import React from "react";
import "./loading.css";
const LoadingPage = () => {
  return (
    <div className="loadingPage">
      <div className="wrapperLoader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
      </div>
    </div>
  );
};

export default LoadingPage;
