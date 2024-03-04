import Image from "next/image";
import React from "react";

const ImageComponent = ({
  image,
  borderRadius,
  alt,
  width = 225,
  height = 225,
}: any): JSX.Element => {
  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        sizes="100vw"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: `${borderRadius}px`,
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ImageComponent;
