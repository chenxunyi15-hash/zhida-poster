import React from "react";

const TEMPLATES = [
  { id: "classic", name: "经典", icon: "&#x1F3AB;", desc: "知乎品牌蓝白配色" },
  { id: "ink", name: "墨韵", icon: "&#x1F3DD;", desc: "水墨中国风" },
  { id: "dark", name: "暗夜", icon: "&#x1F319;", desc: "深色科技风" },
  { id: "minimal", name: "极简", icon: "&#x2728;", desc: "留白为主的极简风格" },
];

export default function TemplateSelector({ selected, onChange }) {
  return (
    <div className="template-selector card">
      <h3 className="card-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/></svg>
        选择模板
      </h3>
      <div className="template-grid">
        {TEMPLATES.map(function(t) {
          return (
            <button key={t.id}
              className={"template-card" + (selected === t.id ? " active" : "")}
              onClick={function() { return onChange(t.id); }}>
              <span className="template-icon" dangerouslySetInnerHTML={{ __html: t.icon }} />
              <span className="template-name">{t.name}</span>
              <span className="template-desc">{t.desc}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}