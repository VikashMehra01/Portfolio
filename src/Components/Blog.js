import React from "react";
import "./Blog.css";
import { useState } from "react";
import { blogs } from "../data/Blogs";
import { Link } from "react-router-dom";

export default function Blog({ theme }) {
  const [bloglm, setbloglm] = useState(3);
  const [bloglms, setbloglms] = useState(true);
  return (
    <div className={`Blog ${theme ? "" : "Dark"}`} id="Blog">
      <div className="MyWork-top">
        <div className="MyWork-top-heading">
          <span className="MyWork-first">My</span>&nbsp;
          <span className="MyWork-second">Blog</span>
        </div>
        <div className="MyWork-top-about" style={{ textAlign: "center" }}>
          <p>
            "Join me as I explore a world of ideas, technology, and life
            lessons. Through my blogs, I share valuable insights, personal
            stories, and practical tips for everyone."
          </p>
        </div>
        <div className="bottom-bar"></div>
      </div>
      <div className="blogs-outer">
        <div className="blogs">
          {blogs.slice(0, bloglm).map((v, i) => {
            return <BlogPost item={v} key={i} />;
          })}
        </div>
        {bloglms && (
          <div
            className="buttonsm"
            onClick={() => {
              setbloglm(blogs.length - 1);
              setbloglms(!bloglms);
            }}
          >
            Show More
          </div>
        )}
        {!bloglms && (
          <div
            className="buttonsm"
            onClick={() => {
              setbloglm(3);
              setbloglms(!bloglms);
            }}
          >
            Show Less
          </div>
        )}
      </div>
    </div>
  );
}
function BlogPost({ item }) {
  // console.log(item);
  // console.log("Vikash");
  return (
    <>
      <div className="post">
        <div className="blog-img">
          <img src={item.img} alt="" />
        </div>
        <div className="post-title">{item.title}</div>
        <div className="time">&#9200; | {item.date}&nbsp;</div>
        {item.about}
        <div className="post-button">
          <button>
            <Link to={`/blogs/${item.id}`}>Read More</Link>
          </button>
        </div>
      </div>
    </>
  );
}
