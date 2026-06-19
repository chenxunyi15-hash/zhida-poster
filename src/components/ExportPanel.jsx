import React, { useCallback } from "react";
import { exportAsPNG } from "../utils/export";

export default function ExportPanel({ posterData, template }) {
  const handleExport = useCallback(async function() {
    const el = document.getElementById("poster-element");
    if (el) {
      const filename = "zhida-" + (posterData.title || "poster").slice(0, 20);
      await exportAsPNG(el, filename);
    }
  }, [posterData]);

  return (
    <div className="export-panel card">
      <h3 className="card-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        导出
      </h3>
      <button className="btn btn-primary btn-block" onClick={handleExport}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        导出 PNG 海报
      </button>
      <p className="export-hint">高清 2x 分辨率，可直接分享</p>
    </div>
  );
}