import React from "react";
import imgLoader from "../../../img/Spinner.svg";
import "./Preloader.css";
const Preloader = () => {
  return (
    <div>
      <img src={imgLoader} className='loaderON' />
    </div>
  );
};
export default Preloader;
