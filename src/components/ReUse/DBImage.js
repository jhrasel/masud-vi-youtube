import Image from "next/image";
import React from "react";

const DBImage = ({ image, width, height, alt }) => {
  return (
    <>
      <Image src={image} width={width} height={height} alt={alt} />
    </>
  );
};

export default DBImage;
