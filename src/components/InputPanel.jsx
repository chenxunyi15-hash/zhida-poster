import React, { useState } from "react";
import { fetchAnswer, extractAnswerId, setApiKey, hasApiKey } from "../utils/zhihuAPI";

export default function InputPanel({ data, onChange, onGenerate }) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [apiKey, setApiKeyLocal] = useState("");

  const handleFetch = async () => {
    if (!url.trim()) {
      setError("请输入知乎回答链接");
      return;
    }
    const id = extractAnswerId(url);
    if (!id) {
      setError("无法识别链接格式，请检查是否为知乎回答链接");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      const result = await fetchAnswer(url);
      onChange({
        title: result.title || "",
        author: result.author || "",
        authorBio: result.authorBio || "",
        content: result.content || "",
        likes: result.likes || 0,
        comments: result.comments || 0,
      });
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveApiKey = () => {
    setApiKey(apiKey);
    setShowApiKeyInput(false);
    setApiKeyLocal("");
  };

  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="input-panel card">
      <h3 className="card-title">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        回答内容
      </h3>

      <div className="input-url-row">
        <input
          className="input-field"
          type="text"
          placeholder="粘贴知乎回答链接..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleFetch()}
        />
        <button className="btn btn-primary" onClick={handleFetch} disabled={isLoading}>
          {isLoading ? "获取中..." : "获取"}
        </button>
      </div>
      {error && <p className="field-error">{error}</p>}

      <div className="input-api-row">
        {!hasApiKey() ? (
          <button className="btn-link" onClick={() => setShowApiKeyInput(!showApiKeyInput)}>
            配置 API Key 以启用自动抓取
          </button>
        ) : (
          <span className="api-status">API Key 已配置</span>
        )}
      </div>

      {showApiKeyInput && (
        <div className="input-api-config">
          <input className="input-field" type="text" placeholder="输入知乎开放数据 API Key"
            value={apiKey} onChange={(e) => setApiKeyLocal(e.target.value)} />
          <button className="btn btn-sm" onClick={handleSaveApiKey}>保存</button>
        </div>
      )}

      <div className="input-divider"><span>或手动编辑</span></div>

      <div className="input-fields">
        <label className="input-label">标题</label>
        <input className="input-field" type="text" value={data.title}
          onChange={(e) => handleChange("title", e.target.value)} />

        <div className="input-row">
          <div className="input-col">
            <label className="input-label">作者</label>
            <input className="input-field" type="text" value={data.author}
              onChange={(e) => handleChange("author", e.target.value)} />
          </div>
          <div className="input-col">
            <label className="input-label">简介</label>
            <input className="input-field" type="text" value={data.authorBio}
              onChange={(e) => handleChange("authorBio", e.target.value)} />
          </div>
        </div>

        <label className="input-label">正文</label>
        <textarea className="input-textarea" rows={6} value={data.content}
          onChange={(e) => handleChange("content", e.target.value)} />

        <div className="input-row">
          <div className="input-col">
            <label className="input-label">赞同数</label>
            <input className="input-field" type="number" value={data.likes}
              onChange={(e) => handleChange("likes", Number(e.target.value))} />
          </div>
          <div className="input-col">
            <label className="input-label">评论数</label>
            <input className="input-field" type="number" value={data.comments}
              onChange={(e) => handleChange("comments", Number(e.target.value))} />
          </div>
        </div>
      </div>

      <button className="btn btn-primary btn-block" onClick={onGenerate}>
        生成海报
      </button>
    </div>
  );
}