"use client";
import React, { useState } from "react";
import projects from "./Projects.module.css";
import Image from "next/image";
import { ArraySlideshowContentProps } from "./Projects";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FiCircle } from "react-icons/fi";
import { FaCircle } from "react-icons/fa";

export default function Slideshow({
  projectData,
}: {
  projectData: ArraySlideshowContentProps;
}) {
  const [count, setCount] = useState(0);
  const onControlSlideshow = (control: string) => {
    if (control === "prev") {
      count < 1 ? setCount(4) : setCount(count - 1);
    }
    if (control === "next") {
      count > 3 ? setCount(0) : setCount(count + 1);
    }
  };
  return (
    <div className={projects.slideshow_content_wrapper}>
      <div className={projects.slideshow_content_container}>
        <SlArrowLeft
          cursor={"pointer"}
          className={projects.slideshow_content_prev}
          onClick={() => onControlSlideshow("prev")}
        />
        <div className={projects.slideshow_content}>
          <Image
            key={projectData[count].projectId}
            className={projects.capture}
            src={projectData[count].url as string}
            width={700}
            height={600}
            alt="슬라이드"
          />
        </div>
        <SlArrowRight
          cursor={"pointer"}
          className={projects.slideshow_content_next}
          onClick={() => onControlSlideshow("next")}
        />
      </div>
      <div className={projects.slideshow_content_range}>
        {projectData.map((range, idx) =>
          count !== idx ? <FiCircle key={range.projectId} /> : <FaCircle key={range.projectId}/>
        )}
      </div>
    </div>
  );
}
