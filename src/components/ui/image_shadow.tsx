import Image from "next/image";
import React from "react";

/**
 * parent-nya harus flex, gak sih?
 * @param src
 * @param width
 * @returns
 */
type ImageShadowedProps = {
  src: string;
  value: number;
  color: "red" | "blue" | "green" | "yellow";
};

const ImageShadowed = ({ src, value, color }: ImageShadowedProps) => {
  const translate = value < 0 ? "-translate-[5%]" : "translate-[5%]";
  const shadowShave = value < 0 ? "rounded-l-[20%]" : "rounded-r-[20%]";
  const bgColor =
    color == "red"
      ? "bg-red-600"
      : color == "yellow"
      ? "bg-yellow-600"
      : color == "blue"
      ? "bg-blue-600"
      : color == "green"
      ? "bg-green-600"
      : "bg-black";
  return (
    <div className={`${shadowShave} ${bgColor}`}>
      <div className="w-[300px] h-[250px] relative transition-all">
        <Image
          src={src}
          alt="IMAGE"
          className={`${translate} rounded-tl-[20%] rounded-br-[20%] object-cover`}
          fill
        />
      </div>
    </div>
  );
};

export default ImageShadowed;
