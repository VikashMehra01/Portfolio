import React from "react";

export default function Copy({ theme }) {
  return (
    <>
      <div className="copy-outer" style={{ position: "relative" }}>
        <div className={`footer ${theme ? "" : "Dark"}`}>
          <p>&copy;   {new Date().getFullYear()} Vikash Mehra · All rights reserved</p>
        </div>
      </div>
    </>
  );
}
