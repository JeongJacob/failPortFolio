import React from "react";
import Image from "next/image";
import intro from "./Intro.module.css";

export default function Intro() {
  return (
    <div>
      <Image
        src={"/semin.png"}
        alt="개발자"
        width="10000"
        height="10000"
        className={intro.image}
      />
    </div>
  );
}
