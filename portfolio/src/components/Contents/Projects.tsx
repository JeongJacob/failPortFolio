"use client";
import React, { useEffect, useState } from "react";
import projects from "./Projects.module.css";
import Link from "next/link";
import Slideshow from "./Slideshow";
import { ObjectId } from "mongodb";
import axios from "axios";

export interface SlideshowContentProps {
  _id: ObjectId;
  url?: string;
  projectId?: number;
}

export interface ArraySlideshowContentProps
  extends Array<SlideshowContentProps> {}

export default function Projects() {
  const [pikchaData, setPikchaData] = useState<ArraySlideshowContentProps>();
  const [nerdnestData, setNerdnestData] =
    useState<ArraySlideshowContentProps>();
  useEffect(() => {
    const getProjectData = async () => {
      await axios("http://localhost:3000/api/pikchaAPI")
        .then((res) => setPikchaData(res.data))
        .catch((err) => console.error(err));
    };
    getProjectData();
  }, []);
  useEffect(() => {
    const getProjectData = async () => {
      await axios("http://localhost:3000/api/nerdnestAPI")
        .then((res) => setNerdnestData(res.data))
        .catch((err) => console.error(err));
    };
    getProjectData();
  }, []);

  return (
    <section className={projects.wrapper}>
      <h1>Projects</h1>
      <div className={projects.content_container}>
        <div>
          <Link href={"https://pikcha36.o-r.kr/"} target="blink">
            <h2>Pikcha</h2>
          </Link>
          <h3>팀 프로젝트 23/01 ~ 23/02</h3>
          <h4>팀 내 역할</h4>
          <div className={projects.role_wrapper}>
            <div className={projects.role_container}>
              <ul>
                <li className={projects.role_text}>
                  명소 리스트 조회 및 필터링
                </li>
                <li className={projects.role_text}>
                  포스트 리스트 조회 및 필터링
                </li>
                <li className={projects.role_text}>
                  상세포스트 CRUD 기능 구현
                </li>
              </ul>
              <ul>
                <li className={projects.role_text}>
                  상세포스트 댓글 CRUD 기능 구현
                </li>
                <li className={projects.role_text}>
                  마이페이지 정보 CRUD 기능 구현
                </li>
              </ul>
            </div>
          </div>
          <div className={projects.slideshow_container}>
            {pikchaData && <Slideshow projectData={pikchaData} />}
          </div>
        </div>
        <div>
          <Link
            href={"http://nerdnest.s3-website.ap-northeast-2.amazonaws.com/"}
            target="blink"
          >
            <h2>NerdNest</h2>
          </Link>
          <h3>팀 프로젝트 23/02 ~ 23/03</h3>

          <h4>팀 내 역할</h4>
          <div className={projects.role_wrapper}>
            <div className={projects.role_container}>
              <ul>
                <li className={projects.role_text}>Header 구현</li>
                <li className={projects.role_text}>기본 메인 페이지 구현</li>
                <li className={projects.role_text}>
                  블로그 상세페이지 CRUD 구현
                </li>
              </ul>
              <ul>
                <li className={projects.role_text}>댓글/대댓글 CRUD 구현</li>
                <li className={projects.role_text}>검색페이지 구현</li>
                <li className={projects.role_text}>
                  Blog Record 컴포넌트 구현
                </li>
              </ul>
            </div>
          </div>
          <div className={projects.slideshow_container}>
            {nerdnestData && <Slideshow projectData={nerdnestData} />}
          </div>
        </div>
      </div>
    </section>
  );
}
