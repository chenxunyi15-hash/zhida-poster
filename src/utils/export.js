import html2canvas from 'html2canvas';
export async function exportAsPNG(element, filename) {
  if (filename === void 0) filename = 'zhida-poster';
  if (!element) throw new Error('海报元素不存在');
  var canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    allowTaint: false,
    backgroundColor: null,
    logging: false,
    width: element.scrollWidth,
    height: element.scrollHeight
  });
  var link = document.createElement('a');
  link.download = filename + '.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
  return canvas;
}
export async function getPosterBlob(element) {
  if (!element) throw new Error('海报元素不存在');
  var canvas = await html2canvas(element, {
    scale: 2, useCORS: true, allowTaint: false,
    backgroundColor: null, logging: false
  });
  return new Promise(function(resolve) { return canvas.toBlob(resolve, 'image/png'); });
}