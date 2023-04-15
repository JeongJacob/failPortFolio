import React from "react";
import Image from "next/image";
import intro from "./Intro.module.css";

export default function Intro() {
  return (
    <div className={intro.wrapper}>
      <Image
        src={"/semin.png"}
        alt="개발자"
        width="10000"
        height="10000"
        className={intro.image}
      />
      <span className={intro.typingText}>
        안녕하세요 배울 때 늘 흥분하는 프론트엔드 개발자 정세민입니다.
      </span>
    </div>
  );
}
