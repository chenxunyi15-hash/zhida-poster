import React from "react";
export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <span className="logo-icon">知</span>
          <div className="logo-text">
            <h1>知答海报</h1>
            <span className="logo-badge">Beta</span>
          </div>
        </div>
        <p className="header-desc">将知乎优质回答转化为精美可分享的海报</p>
      </div>
    </header>
  );
}