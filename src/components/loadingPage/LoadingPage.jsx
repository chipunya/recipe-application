import React from "react";
import "./loading.css";
const LoadingPage = () => {
  return (
    <div className="loadingPage">
      <div class="wrapperLoader">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <span>Loading</span>
      </div>
    </div>
  );
};

export default LoadingPage;
