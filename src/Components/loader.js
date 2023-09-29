import React from "react";
import "../App.css"
import { RotatingLines } from  'react-loader-spinner'
const loader = () => {
  return (
    <div className="loader">
      <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
    </div>
  );
};

export default loader;
