import React from "react";
import { useLocation, Link } from "react-router-dom";
import { blogs } from "../data/Blogs";
import Copy from "./Copy";
import "./BlogDetail.css";

export default function BlogDetail({ theme }) {
  let loaction = useLocation();
  let id = loaction.pathname.split("/")[2];
  const data = blogs.filter((a) => a.id == id)[0];
  console.log(data);
  return (
    <div className={`BlogDetail ${theme ? "" : "Dark"}`}>
      <div className="BlogDetailBack">
        <Link to={"/"}>Back To Homepage</Link>
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
            {data.time} | {data.date}
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
