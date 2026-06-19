import React, { useRef } from "react";
import PosterRenderer from "./PosterRenderer";

export default function PosterPreview({ data, template, onBack }) {
  const posterRef = useRef(null);

  return (
    <div className="poster-preview">
      <div className="preview-toolbar">
        <button className="btn btn-ghost" onClick={onBack}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
          返回编辑
        </button>
      </div>
      <div className="poster-frame">
        <div ref={posterRef} id="poster-element">
          <PosterRenderer data={data} template={template} />
        </div>
      </div>
    </div>
  );
}