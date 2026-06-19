/**
 * 知乎开放数据 API 工具模块
 */
const API_BASE = 'https://open-api.zhihu.com';
var savedKey = localStorage.getItem('zhihu_api_key') || '';
export function setApiKey(key) {
  savedKey = key;
  localStorage.setItem('zhihu_api_key', key);
}
export function getApiKey() { return savedKey; }
export function hasApiKey() { return !!savedKey; }
export function extractAnswerId(url) {
  var m = url.match(/zhihu\.com\/question\/\d+\/answer\/(\d+)/);
  return m ? m[1] : null;
}
export async function fetchAnswer(url) {
  var id = extractAnswerId(url);
  if (!id) throw new Error('无法从链接中提取回答 ID');
  if (!savedKey) return getDemoData();
  var res = await fetch(API_BASE + '/v2/answers/' + id, {
    headers: { 'Authorization': 'Bearer ' + savedKey }
  });
  if (!res.ok) throw new Error('API请求失败: ' + res.status);
  return res.json();
}
export function getDemoData() {
  return {
    title: '有哪些让你觉得非常惊艳的设计？',
    author: '设计观察者',
    authorBio: '设计话题优秀答主',
    content: '好的设计往往在不经意间改变我们的行为习惯。比如微信红包功能的界面设计——它把冰冷的电子转账包装成了充满仪式感的社交互动。红色icon加金色封面的视觉语言唤起的是传统春节红包的情感记忆。更精妙的是开按钮的设计：它没有直接完成支付，而是创造了一个打开的动作，让用户获得拆礼物的体验感。这种将功能需求转化为情感体验的设计思维，正是好设计的核心所在。',
    likes: 9876,
    comments: 342,
    avatarUrl: null
  };
}