import React from "react";
export default function MinimalTemplate({ data }) {
  if (!data) return null;
  return (
    <div className="poster poster-minimal">
      <div className="poster-inner" style={{ padding: "60px 56px" }}>
        <h2 className="poster-title" style={{
          fontSize: "28px", fontWeight: "500", letterSpacing: "1px",
          color: "#1A1A1A", marginBottom: "32px", lineHeight: "1.4"
        }}>{data.title}</h2>
        <div className="poster-author" style={{ marginBottom: "24px" }}>
          <div className="poster-avatar minimal">
            {data.author ? data.author[0] : "?"}
          </div>
          <div className="poster-author-info">
            <span className="poster-author-name" style={{ fontSize: "13px", color: "#333" }}>{data.author || "匿名用户"}</span>
          </div>
        </div>
        <p className="poster-content" style={{
          fontSize: "15px", color: "#555", lineHeight: "1.9",
          marginBottom: "32px"
        }}>{data.content}</p>
        <div className="poster-stats" style={{ borderTop: "1px solid #EEE", paddingTop: "20px" }}>
          <span className="poster-stat" style={{ color: "#999", fontSize: "12px" }}>{data.likes?.toLocaleString() || 0} 赞同</span>
          <span className="poster-stat" style={{ color: "#999", fontSize: "12px", marginLeft: "20px" }}>{data.comments || 0} 评论</span>
        </div>
        <div className="poster-footer-bar" style={{ marginTop: "24px", color: "#CCC", fontSize: "11px", letterSpacing: "1px", borderTop: "none" }}>
          <span>知乎 &middot; 分享知识之美</span>
        </div>
      </div>
    </div>
  );
}