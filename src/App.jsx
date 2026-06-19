import React, { useState } from "react";
import Header from "./components/Header";
import InputPanel from "./components/InputPanel";
import TemplateSelector from "./components/TemplateSelector";
import PosterPreview from "./components/PosterPreview";
import PosterRenderer from "./components/PosterRenderer";
import ExportPanel from "./components/ExportPanel";
import Footer from "./components/Footer";
import { getDemoData } from "./utils/zhihuAPI";
import "./App.css";

const defaultData = getDemoData();

export default function App() {
  const [posterData, setPosterData] = useState(defaultData);
  const [template, setTemplate] = useState("classic");
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="app">
      <Header />
      <main className="main-layout">
        <div className="control-panel">
          <InputPanel data={posterData} onChange={setPosterData}
            onGenerate={() => setShowPreview(true)} />
          <TemplateSelector selected={template} onChange={setTemplate} />
          {showPreview && <ExportPanel posterData={posterData} template={template} />}
        </div>
        <div className="preview-panel">
          {!showPreview ? (
            <div className="preview-placeholder">
              <div className="placeholder-icon">&#x1F3A8;</div>
              <h3>输入回答内容后点击生成海报</h3>
              <p>支持粘贴知乎回答链接或手动编辑内容</p>
            </div>
          ) : (
            <PosterPreview data={posterData} template={template}
              onBack={() => setShowPreview(false)} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}