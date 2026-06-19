import React from "react";
export default function InkTemplate({ data }) {
  if (!data) return null;
  return (
    <div className="poster poster-ink">
      <div className="poster-ink-bg">
        <div className="poster-ink-circle c1"></div>
        <div className="poster-ink-circle c2"></div>
        <div className="poster-ink-circle c3"></div>
      </div>
      <div className="poster-inner">
        <div className="poster-brand">
          <span style={{ color: "#8B7355" }}>知答海报 &middot; 墨韵</span>
        </div>
        <h2 className="poster-title" style={{ color: "#2C1810" }}>{data.title}</h2>
        <div className="poster-ink-sep"></div>
        <div className="poster-author">
          <div className="poster-avatar ink">
            {data.author ? data.author[0] : "?"}
          </div>
          <div className="poster-author-info">
            <span className="poster-author-name" style={{ color: "#3E2C1F" }}>{data.author || "匿名用户"}</span>
            {data.authorBio && <span className="poster-author-bio" style={{ color: "#8B7355" }}>{data.authorBio}</span>}
          </div>
        </div>
        <p className="poster-content" style={{ color: "#3E2C1F", lineHeight: "1.9" }}>{data.content}</p>
        <div className="poster-stats" style={{ borderTopColor: "#D4C5A9" }}>
          <span className="poster-stat" style={{ color: "#8B7355" }}>&#x2B50; {data.likes?.toLocaleString() || 0} 赞同</span>
          <span className="poster-stat" style={{ color: "#8B7355" }}>&#x1F4AC; {data.comments || 0} 评论</span>
        </div>
        <div className="poster-footer-bar" style={{ borderTopColor: "#D4C5A9", color: "#A09070" }}>
          <span>知乎 &middot; 分享知识之美</span>
        </div>
      </div>
    </div>
  );
}