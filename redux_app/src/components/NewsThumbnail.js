import React from "react";

const NewsThumbnail = ({ image,className }) => {
    const src = `/images/${image}`;
  return (
    <div>
      <img src={src} alt="サムネイル"  className={className}/>
    </div>
  );
};

export default NewsThumbnail;

