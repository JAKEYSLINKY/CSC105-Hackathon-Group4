import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/loading.json";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie options={defaultOptions} height={500} width={500} />
    </div>
  );
}

export default Loading;
