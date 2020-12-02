// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/kmranrg/Documents/kan_work/Design-Code-ReactJS/my-app/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/kmranrg/Documents/kan_work/Design-Code-ReactJS/my-app/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/kmranrg/Documents/kan_work/Design-Code-ReactJS/my-app/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/kmranrg/Documents/kan_work/Design-Code-ReactJS/my-app/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/kmranrg/Documents/kan_work/Design-Code-ReactJS/my-app/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/home/kmranrg/Documents/kan_work/Design-Code-ReactJS/my-app/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/kmranrg/Documents/kan_work/Design-Code-ReactJS/my-app/.cache/json/dev-404-page.json"),
  "404.json": require("/home/kmranrg/Documents/kan_work/Design-Code-ReactJS/my-app/.cache/json/404.json"),
  "index.json": require("/home/kmranrg/Documents/kan_work/Design-Code-ReactJS/my-app/.cache/json/index.json"),
  "page-2.json": require("/home/kmranrg/Documents/kan_work/Design-Code-ReactJS/my-app/.cache/json/page-2.json"),
  "404-html.json": require("/home/kmranrg/Documents/kan_work/Design-Code-ReactJS/my-app/.cache/json/404-html.json")
}