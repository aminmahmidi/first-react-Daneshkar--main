import React, { useState } from "react";
import profile from "../images/profile 004.jpg";
const blankUrl = "https://via.placeholder.com/150";
const ImageCard = ({name}) => {
  const GetImage = useState(profile);
  return (
    <div className="image-container">
      {GetImage ? (
        <img src={profile} alt={name} srcset="" />
      ) : (
        <img src={blankUrl} alt={name} srcset="" />
      )}
    </div>
  );
};

export default ImageCard;
