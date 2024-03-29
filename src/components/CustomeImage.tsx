import React from "react";
import Image from "next/image";

type CustomeImageProps = {
  src: string;
  width: number;
  height: number;
};

const CustomeImage:React.FC<CustomeImageProps> = ({ src, width, height }) => {
  return <Image src={src} alt="" width={width} height={height} />;
};

export default CustomeImage;
