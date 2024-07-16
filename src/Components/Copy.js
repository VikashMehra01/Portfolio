import React from "react";

export default function Copy({ theme }) {
  return (
    <>
      <div className="copy-outer" style={{ position: "relative" }}>
        <div className={`footer ${theme ? "" : "Dark"}`}>
          &copy; Vikash Mehra | 2024
        </div>
      </div>
    </>
  );
}
