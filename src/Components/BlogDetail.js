import React from "react";
import { useLocation, Link } from "react-router-dom";
import { blogs } from "../data/Blogs";
import Copy from "./Copy";
import "./BlogDetail.css";

export default function BlogDetail({ theme }) {
  let loaction = useLocation();
  let id = loaction.pathname.split("/")[2];
  const data = blogs.filter((a) => a.id === id)[0];
  console.log(data);
  return (
    <div className={`BlogDetail ${theme ? " " : "Dark"}`}>
      <div className="BlogDetailtop">
        <div className="BlogDetailBack">
          <Link to={"/"}>
            <h3>
              <i class="fa-solid fa-house"></i>
            </h3>
          </Link>
        </div>
        <div className="BlogDetailfirst">
          <h3>Blog Detail</h3>
        </div>
      </div>
      <div className="BlogDetailMain">
        <div className="BlogDetailImg">
          <img src={data.img} alt="" />
        </div>
        <div className="BlogDetailContent">
          <div className="BlogDetailTitle">
            <h3>{data.title}</h3>
          </div>
          <div className="BlogDetailTime">
            <i class="fa-solid fa-clock"></i> {data.time} | {data.date}
          </div>
          <div className="BlogDetailData">{data.detail}</div>
        </div>
      </div>
      <div className="BlogDetailContentDo">
        {/* {data.detail.main.map((v) => {
          return (
            <>
              <p className="contentH">{v.h}</p>
              <p className="contentp">{v.c}</p>
            </>
          );
        })} */}
      </div>
      <Copy />
    </div>
  );
}
