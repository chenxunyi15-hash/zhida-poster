import React from "react";
export default function DarkTemplate({ data }) {
  if (!data) return null;
  return (
    <div className="poster poster-dark">
      <div className="poster-dark-grid"></div>
      <div className="poster-inner">
        <div className="poster-brand" style={{ color: "#888" }}>
          <span style={{ color: "#00E5FF", fontSize: "12px", letterSpacing: "2px" }}>ZHIDA POSTER &middot; DARK</span>
        </div>
        <h2 className="poster-title" style={{ color: "#E0E0E0" }}>{data.title}</h2>
        <div style={{ width: "40px", height: "2px", background: "linear-gradient(90deg, #00E5FF, #7C4DFF)", margin: "16px 0" }}></div>
        <div className="poster-author">
          <div className="poster-avatar dark">
            {data.author ? data.author[0] : "?"}
          </div>
          <div className="poster-author-info">
            <span className="poster-author-name" style={{ color: "#B0B0B0" }}>{data.author || "匿名用户"}</span>
            {data.authorBio && <span className="poster-author-bio" style={{ color: "#666" }}>{data.authorBio}</span>}
          </div>
        </div>
        <p className="poster-content" style={{ color: "#999", lineHeight: "1.8" }}>{data.content}</p>
        <div className="poster-stats" style={{ borderTopColor: "#333" }}>
          <span className="poster-stat" style={{ color: "#666" }}>&#x2B50; {data.likes?.toLocaleString() || 0} 赞同</span>
          <span className="poster-stat" style={{ color: "#666" }}>&#x1F4AC; {data.comments || 0} 评论</span>
        </div>
        <div className="poster-footer-bar" style={{ borderTopColor: "#333", color: "#555" }}>
          <span>知乎 &middot; 分享知识之美</span>
        </div>
      </div>
    </div>
  );
}