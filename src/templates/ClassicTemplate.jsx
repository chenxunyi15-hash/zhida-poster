import React from "react";
export default function ClassicTemplate({ data }) {
  if (!data) return null;
  return (
    <div className="poster poster-classic">
      <div className="poster-inner">
        <div className="poster-brand">
          <div className="poster-brand-dot"></div>
          <span>知答海报 &middot; 设计</span>
        </div>
        <h2 className="poster-title">{data.title}</h2>
        <div className="poster-divider"></div>
        <div className="poster-author">
          <div className="poster-avatar">
            {data.author ? data.author[0] : "?"}
          </div>
          <div className="poster-author-info">
            <span className="poster-author-name">{data.author || "匿名用户"}</span>
            {data.authorBio && <span className="poster-author-bio">{data.authorBio}</span>}
          </div>
        </div>
        <p className="poster-content">{data.content}</p>
        <div className="poster-stats">
          <span className="poster-stat">&#x2B50; {data.likes?.toLocaleString() || 0} 赞同</span>
          <span className="poster-stat">&#x1F4AC; {data.comments || 0} 评论</span>
        </div>
        <div className="poster-footer-bar">
          <span>知乎 &middot; 分享知识之美</span>
        </div>
      </div>
    </div>
  );
}