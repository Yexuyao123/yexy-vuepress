(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{395:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_05-cookie-与浏览器-http-缓存控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_05-cookie-与浏览器-http-缓存控制"}},[t._v("#")]),t._v(" [05] Cookie 与浏览器 HTTP 缓存控制")]),t._v(" "),e("p",[e("em",[t._v("2021 年 2 月 1 日")])]),t._v(" "),e("hr"),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_05-cookie-与浏览器-http-缓存控制"}},[t._v("[05] Cookie 与浏览器 HTTP 缓存控制")]),e("ul",[e("li",[e("a",{attrs:{href:"#web-缓存分类"}},[t._v("web 缓存分类")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-数据库数据缓存"}},[t._v("1. 数据库数据缓存")])]),e("li",[e("a",{attrs:{href:"#_2-服务器端缓存"}},[t._v("2. 服务器端缓存")])]),e("li",[e("a",{attrs:{href:"#_3-1-代理服务器缓存"}},[t._v("3.1 代理服务器缓存")])]),e("li",[e("a",{attrs:{href:"#_3-2-网关缓存-反向代理缓存"}},[t._v("3.2 网关缓存/反向代理缓存")]),e("ul",[e("li",[e("a",{attrs:{href:"#负载均衡器"}},[t._v("负载均衡器")])]),e("li",[e("a",{attrs:{href:"#内容分发网络"}},[t._v("内容分发网络")])]),e("li",[e("a",{attrs:{href:"#cdn-缓存"}},[t._v("CDN 缓存")])])])]),e("li",[e("a",{attrs:{href:"#_4-浏览器端缓存"}},[t._v("4 浏览器端缓存")])]),e("li",[e("a",{attrs:{href:"#_5-web-应用层缓存"}},[t._v("5 Web 应用层缓存")])])])]),e("li",[e("a",{attrs:{href:"#浏览器-cookie-缓存"}},[t._v("浏览器 Cookie 缓存")]),e("ul",[e("li",[e("a",{attrs:{href:"#cookie-缓存"}},[t._v("Cookie 缓存")])]),e("li",[e("a",{attrs:{href:"#设置-cookie-缓存"}},[t._v("设置 Cookie 缓存")])])])]),e("li",[e("a",{attrs:{href:"#浏览器-http-缓存控制方法"}},[t._v("浏览器 HTTP 缓存控制方法")]),e("ul",[e("li",[e("a",{attrs:{href:"#meta-标签控制"}},[t._v("meta 标签控制")])]),e("li",[e("a",{attrs:{href:"#web-性能优化-http-缓存控制-http1-1-响应头-cache-control-文档过期验证-服务器再验证"}},[t._v("web 性能优化：HTTP 缓存控制 / HTTP1.1 响应头 Cache-control / 文档过期验证 / 服务器再验证")]),e("ul",[e("li",[e("a",{attrs:{href:"#http1-1-缓存控制-响应头-cache-control"}},[t._v("HTTP1.1 缓存控制 / 响应头 Cache-control")])]),e("li",[e("a",{attrs:{href:"#文档过期验证机制-expires-与-cache-control"}},[t._v("文档过期验证机制 —— Expires 与 Cache-control")])]),e("li",[e("a",{attrs:{href:"#服务器再验证-last-modified-与-etag"}},[t._v("服务器再验证 —— Last-Modified 与 Etag")])]),e("li",[e("a",{attrs:{href:"#文档过期验证-vs-服务器再验证"}},[t._v("文档过期验证 VS 服务器再验证")])])])]),e("li",[e("a",{attrs:{href:"#用户-disable-cache-控制"}},[t._v("用户 Disable cache 控制")])])])]),e("li",[e("a",{attrs:{href:"#http-缓存设置-10-年-如何更新"}},[t._v("HTTP 缓存设置 10 年，如何更新？")])]),e("li",[e("a",{attrs:{href:"#问题"}},[t._v("问题")])])])])])]),e("p"),t._v(" "),e("p",[t._v("前言：\n使用缓存的原因：")]),t._v(" "),e("ol",[e("li",[t._v("降低延迟：缓存离客户端更近，从缓存请求内容比从源服务器所用时间更少，呈现速度更快，网站就显得更灵敏。")]),t._v(" "),e("li",[t._v("降低网络传输：副本被重复使用，大大降低了用户的带宽使用，保证带宽请求在较低水平上，更容易维护。")])]),t._v(" "),e("h2",{attrs:{id:"web-缓存分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-缓存分类"}},[t._v("#")]),t._v(" web 缓存分类")]),t._v(" "),e("ul",[e("li",[t._v("按是否私有分类：")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("按是否私有划分")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("特点")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("私有缓存")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("私有缓存只能用于单独用户。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("共享缓存")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("共享缓存存储的响应能够被多个用户使用。")])])])]),t._v(" "),e("h3",{attrs:{id:"_1-数据库数据缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库数据缓存"}},[t._v("#")]),t._v(" 1. 数据库数据缓存")]),t._v(" "),e("p",[t._v("提供查询性能，将查询后的数据放到内存中进行缓存，下次查询时，直接从内存缓存直接返回，提供响应效率。比如常用的缓存方案有 memcached,redis 等。")]),t._v(" "),e("h3",{attrs:{id:"_2-服务器端缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务器端缓存"}},[t._v("#")]),t._v(" 2. 服务器端缓存")]),t._v(" "),e("p",[t._v("部署在服务器上的缓存。")]),t._v(" "),e("h3",{attrs:{id:"_3-1-代理服务器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-代理服务器缓存"}},[t._v("#")]),t._v(" 3.1 代理服务器缓存")]),t._v(" "),e("ul",[e("li",[t._v("为站点和 web 应用提供更好的稳定性、性能和扩展性。")]),t._v(" "),e("li",[t._v("代理服务器：是浏览器和源服务器之间的中间服务器。")]),t._v(" "),e("li",[t._v("浏览器先向这个中间服务器发起 Web 请求，经过处理后（比如权限验证，缓存匹配等），再将请求转发到源服务器。")]),t._v(" "),e("li",[t._v("其运作原理跟浏览器差不多，只是规模更大，属于一种共享缓存，为大量用户提供服务，在减少相应时间和带宽使用方面很有效，同一个副本会被重用多次。")]),t._v(" "),e("li",[t._v("常见代理服务器缓存解决方案有 Squid,Nginx,Apache 等。")])]),t._v(" "),e("h3",{attrs:{id:"_3-2-网关缓存-反向代理缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-网关缓存-反向代理缓存"}},[t._v("#")]),t._v(" 3.2 网关缓存/反向代理缓存")]),t._v(" "),e("ul",[e("li",[t._v("网关缓存也被称为“反向代理缓存”或“替代缓存”。")]),t._v(" "),e("li",[t._v("网关缓存同样是起中介作用的，但不是（素不相识、不曾谋面的 Add）网络管理员部署的，而多半是网站管理员（公司专门的运维工程师、或 UED 或程序组某人 Add）他们自己部署，这样更容易扩展与维护。")]),t._v(" "),e("li",[t._v("可以有多种方法把请求路由到网关缓存，但通常使用某种形式的负载均衡器 ①，使它们中的一个或多个看起来像是源服务器。")]),t._v(" "),e("li",[t._v("内容分发网络 ②(CDNs)为整个网络（或部分）分配网关缓存，然后把这些缓存卖给需要的网站。")]),t._v(" "),e("li",[t._v("Speedera③ 和 Akamai④ 就是代表性的网络内容发布商。")])]),t._v(" "),e("h4",{attrs:{id:"负载均衡器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡器"}},[t._v("#")]),t._v(" 负载均衡器")]),t._v(" "),e("p",[t._v("是一种采用各种分配算法把网络请求分散到一个服务器集群中的可用服务器上去，通过管理进入的 Web 数据流量和增加有效的网络带宽，从而使网络访问者获得尽可能最佳的联网体验的硬件设备。")]),t._v(" "),e("h4",{attrs:{id:"内容分发网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内容分发网络"}},[t._v("#")]),t._v(" 内容分发网络")]),t._v(" "),e("ul",[e("li",[t._v("为整个网络（或部分）分配网关缓存，然后把这些缓存卖给需要的网站。")]),t._v(" "),e("li",[t._v("即 CDN, 基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。")]),t._v(" "),e("li",[t._v("通过在网络各处放置节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络，CDN 系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。")]),t._v(" "),e("li",[t._v("其目的是使用户可就近取得所需内容，解决 Internet 网络拥挤的状况，提高用户访问网站的响应速度。")]),t._v(" "),e("li",[t._v("Speedera 和 Akamai 就是代表性的网络内容发布商。")])]),t._v(" "),e("h4",{attrs:{id:"cdn-缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdn-缓存"}},[t._v("#")]),t._v(" CDN 缓存")]),t._v(" "),e("p",[t._v("CDN（Content delivery networks）缓存。CDN 缓存一般是由网站管理员自己部署，为了让他们的网站更容易扩展并获得更好的性能。浏览器先向 CDN 网关发起 Web 请求，网关服务器后面对应着一台或多台负载均衡源服务器，会根据它们的负载请求，动态将请求转发到合适的源服务器上。虽然这种架构负载均衡源服务器之间的缓存没法共享，但却拥有更好的处扩展性。从浏览器角度来看，整个 CDN 就是一个源服务器，浏览器和服务器之间的缓存机制，在这种架构下同样适用。")]),t._v(" "),e("h3",{attrs:{id:"_4-浏览器端缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-浏览器端缓存"}},[t._v("#")]),t._v(" 4 浏览器端缓存")]),t._v(" "),e("ul",[e("li",[t._v("浏览器会在你的硬盘上专门开辟一个空间专门为你存储资源副本。")]),t._v(" "),e("li",[t._v("浏览器缓存根据一套与服务器约定的规则进行工作，在同一个会话过程中会检查一次并确定缓存的副本是最新的。")]),t._v(" "),e("li",[t._v("如果你浏览过程中，比如前进或后退，或点击一个之前看过的链接，访问到同一个图片，这些图片可以从浏览器缓存中调出而即时显现。")])]),t._v(" "),e("h3",{attrs:{id:"_5-web-应用层缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-web-应用层缓存"}},[t._v("#")]),t._v(" 5 Web 应用层缓存")]),t._v(" "),e("p",[t._v("应用层缓存指的是从代码层面上，通过代码逻辑和缓存策略，实现对数据，页面，图片等资源的缓存，可以根据实际情况选择将数据存在文件系统或者内存中，减少数据库查询或者读写瓶颈，提高响应效率。")]),t._v(" "),e("h2",{attrs:{id:"浏览器-cookie-缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-cookie-缓存"}},[t._v("#")]),t._v(" 浏览器 Cookie 缓存")]),t._v(" "),e("h3",{attrs:{id:"cookie-缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie-缓存"}},[t._v("#")]),t._v(" Cookie 缓存")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Cookie",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cookie 维基百科"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("定义：\n指某些网站为了辨别用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。")]),t._v(" "),e("li",[t._v("Cookie 缓存分类")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("按存在时间划分")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("按在客户端中的存储位置划分")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("特点")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("非持久 Cookie")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("内存 Cookie")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("由浏览器维护，保存在内存中，浏览器关闭即消失，存在时间短暂")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("持久 Cookie")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("硬盘 Cookie")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("保存在硬盘里，有过期时间，除非用户手动清理或到了过期时间，硬盘 Cookie 不会清除，存在时间较长")])])])]),t._v(" "),e("ul",[e("li",[t._v("用途：\n前一次登录时，服务器发送了包含登录凭据（用户名加密码的某种加密形式）的 Cookie 到用户的硬盘上。\n第二次登录时，如果该 Cookie 尚未到期，浏览器会发送该 Cookie，服务器验证凭据，于是不必输入用户名和密码就让用户登录了。")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/22396872?refer=study-fe",target:"_blank",rel:"noopener noreferrer"}},[t._v("简述 Cookie 是什么——知乎.方应杭"),e("OutboundLink")],1)]),t._v(" "),e("ol",[e("li",[t._v("Cookie 是浏览器访问服务器后，服务器传给浏览器的一段数据。")]),t._v(" "),e("li",[t._v("浏览器需要保存这段数据，不得轻易删除。")]),t._v(" "),e("li",[t._v("此后每次浏览器访问该服务器，都必须带上这段数据。")])]),t._v(" "),e("h3",{attrs:{id:"设置-cookie-缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置-cookie-缓存"}},[t._v("#")]),t._v(" 设置 Cookie 缓存")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" email"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 想办法获取到用户注册的Email")]),t._v("\nresponse"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("Set-Cookie:Sign_in_email=")]),e("span",{pre:!0,attrs:{class:"token interpolation"}},[e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("email"),e("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("只要给了一次 Set-Cookie 响应头，从此请求时都会在请求头附上"),e("code",[t._v("Cookie：Sign_in_email=yyyexy@XX.com")])]),t._v(" "),e("h2",{attrs:{id:"浏览器-http-缓存控制方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器-http-缓存控制方法"}},[t._v("#")]),t._v(" 浏览器 HTTP 缓存控制方法")]),t._v(" "),e("p",[e("strong",[t._v("注意：首页(尤其是 HTML)不允许设置缓存，以保证用户能够及时获取最新网页。")])]),t._v(" "),e("h3",{attrs:{id:"meta-标签控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meta-标签控制"}},[t._v("#")]),t._v(" meta 标签控制")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Pragma"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("no-cache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("告诉浏览器当前页面不需要被缓存，每次请求页面都需要去服务器请求资源。")]),t._v(" "),e("h3",{attrs:{id:"web-性能优化-http-缓存控制-http1-1-响应头-cache-control-文档过期验证-服务器再验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#web-性能优化-http-缓存控制-http1-1-响应头-cache-control-文档过期验证-服务器再验证"}},[t._v("#")]),t._v(" web 性能优化：HTTP 缓存控制 / HTTP1.1 响应头 Cache-control / 文档过期验证 / 服务器再验证")]),t._v(" "),e("h4",{attrs:{id:"http1-1-缓存控制-响应头-cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http1-1-缓存控制-响应头-cache-control"}},[t._v("#")]),t._v(" HTTP1.1 缓存控制 / 响应头 Cache-control")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 缓存控制——MDN"),e("OutboundLink")],1)]),t._v(" "),e("ul",[e("li",[t._v("每次浏览器第一次 HTTP 请求，浏览器缓存中并不存在其请求资源相应的副本，浏览器会向服务器发起 HTTP 请求获得请求结果(包含 HTTP 头信息各种字段)后，会根据响应报文中 HTTP 头的缓存标识字段(Expires 和 Cache-Control)，来决定是否将请求结果作为资源副本存入浏览器缓存中。")]),t._v(" "),e("li",[t._v("之后每一次浏览器向服务器发起 HTTP 请求时，都会查找浏览器缓存中是否存在其相应的请求结果，然后根据缓存标识字段来决定其是直接使用之前缓存的副本还是再次向服务器发出 HTTP 请求。")]),t._v(" "),e("li",[t._v("HTTP 保持已缓存数据与服务器数据之间充分一致的机制称为文档过期和服务器再验证。")]),t._v(" "),e("li",[t._v("而从浏览器缓存分类来看，也有将其分为强制缓存和协商缓存。")])]),t._v(" "),e("p",[e("strong",[t._v("HTTP 1.1 引入了新的头信息：Cache-Control（缓存控制）HTTP 头信息")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cache-Control"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[e("code",[t._v("Cache-Control")]),t._v(" 响应头"),e("code",[t._v('"XXX"')]),t._v("包括：")]),t._v(" "),e("li",[e("code",[t._v("public")]),t._v("：所有内容都将被缓存（客户端和代理服务器都可缓存）, 一般需要认证 HTTP 请求内容会自动私有化(不会被缓存)。")]),t._v(" "),e("li",[e("code",[t._v("private")]),t._v("：内容只缓存到私有缓存中(仅客户端可以缓存，代理服务器/中间人不可缓存)。")]),t._v(" "),e("li",[e("code",[t._v("no-cache")]),t._v("：如果存在合适的验证令牌(ETag)，强制发送请求给源服务器进行验证,确认返回的响应是否被更改/或保证内容必须是即时的，然后才能使用该响应来满足后续对同一个网址的请求。")]),t._v(" "),e("li",[e("code",[t._v("no-store")]),t._v("：强制缓存在任何情况下都不要保留任何副本。")]),t._v(" "),e("li",[t._v("HTTP 允许缓存在某些特定情况下返回过期数据")]),t._v(" "),e("li",[e("code",[t._v("must-revalidate")]),t._v("：需告诉缓存关于新鲜度的信息, 缓存在考虑使用一个陈旧的资源时，必须先验证它的状态，已过期的缓存将不被使用, 请求必须发送到服务器重新验证。")]),t._v(" "),e("li",[e("code",[t._v("proxy-revalidate")]),t._v("：类似 must-revalidate，需缓存验证，应用于代理服务器验证。")]),t._v(" "),e("li",[e("code",[t._v("max-age=xxx")]),t._v("：请求成功后 xxx 秒内缓存是新鲜的, 缓存的内容将在 xxx 秒后失效。")]),t._v(" "),e("li",[e("code",[t._v("s-maxage=xxx")]),t._v("：类似 max-age, 仅应用于共享缓存(如代理)。")])]),t._v(" "),e("p",[e("strong",[t._v("注意:no-cache 的作用是指跳过文档过期验证,而直接进行服务器再验证。")])]),t._v(" "),e("h4",{attrs:{id:"文档过期验证机制-expires-与-cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档过期验证机制-expires-与-cache-control"}},[t._v("#")]),t._v(" 文档过期验证机制 —— Expires 与 Cache-control")]),t._v(" "),e("ul",[e("li",[t._v("在"),e("code",[t._v("Response Header")]),t._v("中进行设置：浏览器缓存中的缓存标识字段(Expires 和 Cache-Control) ，来验证资源副本是否过期。")])]),t._v(" "),e("h5",{attrs:{id:"http1-0-缓存-控制文档过期验证-expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http1-0-缓存-控制文档过期验证-expires"}},[t._v("#")]),t._v(" HTTP1.0 缓存 控制文档过期验证 / Expires")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires",target:"_blank",rel:"noopener noreferrer"}},[t._v("Expires —— MDN"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("code",[t._v("Expires:XXXXXX GMT")]),t._v(" 是服务器端在响应请求时用来规定资源的失效时间。")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Expires"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXX"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("Expires 响应头包含日期/时间， 即在此时候之后，响应过期。")]),t._v(" "),e("li",[t._v("无效的日期，比如 0, 代表着过去的日期，即该资源已经过期。")])]),t._v(" "),e("h5",{attrs:{id:"http1-1-缓存-控制文档过期验证-cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http1-1-缓存-控制文档过期验证-cache-control"}},[t._v("#")]),t._v(" HTTP1.1 缓存 控制文档过期验证 / Cache-control")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Cache-Control:max-age=xxx,must-revalidate;")]),t._v(": 服务器端在响应请求时规定必须缓存验证和资源缓存的有效时间。")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cache-Control"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"max-age=xxx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h5",{attrs:{id:"expires-与-cache-control-比较-选-cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires-与-cache-control-比较-选-cache-control"}},[t._v("#")]),t._v(" Expires 与 Cache-control 比较 (选 Cache-control)")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("Expires")]),t._v(" 是 HTTP 1.0 的字段，而"),e("code",[t._v("Cache-Control")]),t._v(" 是 HTTP 1.1 的字段。")]),t._v(" "),e("li",[t._v("Expires 与 Cache-Control 时间区别:")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v('response.setHeader(("Expires": "XXXXXX GMT"));')]),t._v(" 设定什么时间(几分几秒)过期。")]),t._v(" "),e("li",[e("code",[t._v('response.setHeader(("Cache-Control": "max-age=xxx"));')]),t._v(" 设定多长时间过期。")]),t._v(" "),e("li",[t._v("Expires 过期时间指的是本地时间，如果用户本地时间错了，变成十年后，即在过期时间以后，则该缓存永远是过期的。所以优先使用"),e("code",[t._v("Cache-Control")]),t._v("。")])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v('如果在 Cache-Control 响应头设置了 "max-age" 或者 "s-max-age" 指令，那么 Expires 头会被忽略。\n即当 '),e("code",[t._v("Expires")]),t._v(" 与 "),e("code",[t._v("Cache-Control")]),t._v(" 同时存在时，"),e("code",[t._v("Cache-Control")]),t._v(" 的优先级要高于 "),e("code",[t._v("Expires")]),t._v("。")]),t._v(" "),e("li",[t._v("若是文档没有过期，则浏览器会直接使用缓存中的文档作为返回结果，若是文档已经过期了，则需要进行服务器再验证。")])]),t._v(" "),e("h4",{attrs:{id:"服务器再验证-last-modified-与-etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务器再验证-last-modified-与-etag"}},[t._v("#")]),t._v(" 服务器再验证 —— Last-Modified 与 Etag")]),t._v(" "),e("p",[t._v("在浏览器缓存中，还保存了从服务器返回响应信息头带过来的其它关于资源副本的描述字段(如 Last-Modified 和 Etag)")]),t._v(" "),e("h5",{attrs:{id:"last-modified-服务器再验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-服务器再验证"}},[t._v("#")]),t._v(" Last-Modified 服务器再验证")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("Last-Modified")]),t._v(" : 服务器端在响应请求时用来说明资源的最后修改时间。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("If-Modified-Since")]),t._v(" : 在服务器再验证过程中，浏览器发送的 HTTP 请求的请求头中会带上 If-Modified-Since 字段，值为该资源 Last-Modified 属性的值。")])]),t._v(" "),e("li",[e("p",[t._v("当服务器端接收到带有 If-Modified-Since 属性的请求时，则会将 If-Modified-Since 属性的值与被请求资源的最后修改时间做对比。")])]),t._v(" "),e("li",[e("p",[t._v("如果相同，说明资源没有新的修改，则响应 HTTP 304，浏览器会继续使用原先保存的该资源的副本；")])]),t._v(" "),e("li",[e("p",[t._v("如果最后修改时间比较新，则说明资源被修改过，则响应 HTTP 200，并且返回最新的资源。")])])]),t._v(" "),e("h5",{attrs:{id:"etag-服务器再验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-服务器再验证"}},[t._v("#")]),t._v(" Etag 服务器再验证")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("Etag")]),t._v(" : 服务器端在响应请求时用来说明资源在服务器端的唯一标识。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("If-None-Match")]),t._v(" : 在服务器再验证过程中，浏览器发送的 HTTP 请求的请求头中会带上 If-Modified-Since 字段，值为该资源 Etag 属性的值。")])]),t._v(" "),e("li",[e("p",[t._v("当服务器端接收到带有 If-None-Match 属性的请求时，则会将 If-None-Match 属性的值与被请求资源的唯一标识做对比。")])]),t._v(" "),e("li",[e("p",[t._v("如果相同，说明资源没有新的修改，则响应 HTTP 304，浏览器会继续使用原先保存的该资源的副本；")])]),t._v(" "),e("li",[e("p",[t._v("如果不同，则说明资源被修改过，则响应 HTTP 200，并且返回最新的资源。")])]),t._v(" "),e("li",[e("p",[t._v("Etag 是 Entity tag 的缩写，可以理解为“被请求变量的实体值”，Etag 是服务端的一个资源的标识，在 HTTP 响应头中将其传送到客户端。")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/162945656",target:"_blank",rel:"noopener noreferrer"}},[t._v("ETag 简介与作用——知乎.小金鱼"),e("OutboundLink")],1)])])]),t._v(" "),e("p",[e("strong",[t._v("Etag 值通过一些算法来确定")])]),t._v(" "),e("h6",{attrs:{id:"apache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[t._v("#")]),t._v(" Apache")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Apache 首先判断是不是弱 Etag，这个留在下面讲。如果不是，进入第二种情况：")])]),t._v(" "),e("li",[e("p",[t._v('强 Etag 根据配置文件中的配置来设置 Etag 值，默认的 Apache 的 FileEtag 设置为： INode / Mtime / Size ，根据这三个属性来生成 Etag 值，他们之间通过一些算法来实现，并输出成 hex 的格式，相邻属性之间用-分隔，比如：Etag"2e681a-6-5d044840"')])]),t._v(" "),e("li",[e("p",[t._v("这里面的三个段，分别代表了 INode，MTime，Size 根据算法算出的值的 Hex 格式，当然，可以改变 Apache 的 FileEtag 设置，设置了几个段，Etag 值就有几个段。(不要误以为 Etag 就是固定的 3 段式)。")])]),t._v(" "),e("li",[e("p",[t._v('说明：这里说的都是 Apache2.2 里面的 Etag 实现，因为 HTTP/1.1 并没有规定 Etag 必须是什么样的实现或者格式，因此，也可以修改或者完全编写自己的算法得到 Etag，比如"2e681a65d044840"，客户端会记住并缓存下这个 Etag(Windows 里面保存在哪里，下次访问的时候直接拿这个值去和服务器生成的 Etag 对比。')])])]),t._v(" "),e("h6",{attrs:{id:"md5-信息摘要算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#md5-信息摘要算法"}},[t._v("#")]),t._v(" MD5 信息摘要算法")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://baike.baidu.com/item/MD5/212708?fromtitle=MD5%E7%AE%97%E6%B3%95&fromid=174909&fr=aladdin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MD5 信息摘要算法(Message-Digest Algorithm)——百度百科"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 命令行\n// MD5 文件路径\nMD5 1.txt 回车 // 得到MD5(1.txt) = 电脑计算出的MD5值\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("ul",[e("li",[e("p",[t._v("在文件传输过程中，接收者并不知道文件有没有传输完整，可以通过计算 MD5 进行比对，只要不同，传输前后的文件一定有不同的地方。")])]),t._v(" "),e("li",[e("p",[t._v("MD5 特点，如果内容的差异越小，算出来结果差异越大。即可以将微小的差异放大。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("npm install md5")]),t._v("可以在 node.js 中安装 MD5 "),e("a",{attrs:{href:"https://www.npmjs.com/package/md5-nodejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("md5-nodejs"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("不管怎么样的算法，在服务器端都要进行计算，计算就有开销，会带来性能损失。因此为了榨干这一点点性能，不少网站完全把 Etag 禁用了(比如 Yahoo!)，这其实不符合 HTTP/1.1 的规定，因为 HTTP/1.1 总是鼓励服务器尽可能的开启 Etag。")])])]),t._v(" "),e("h5",{attrs:{id:"last-modified-与-etag-比较-选-etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-与-etag-比较-选-etag"}},[t._v("#")]),t._v(" Last-Modified 与 Etag 比较 (选 Etag)")]),t._v(" "),e("ul",[e("li",[t._v("当 "),e("code",[t._v("Last-Modified / If-Modified-Since")]),t._v(" 和 "),e("code",[t._v("Etag / If-None-Match")]),t._v(" 同时存在时，"),e("code",[t._v("Etag / If-None-Match")]),t._v(" 的优先级要高于"),e("code",[t._v("Last-Modified / If-Modified-Since")]),t._v("。")])]),t._v(" "),e("p",[t._v("HTTP 1.1 中 Etag 的出现主要是为了解决几个 Last-Modified 比较难解决的问题：")]),t._v(" "),e("ol",[e("li",[t._v("Last-Modified 标注的最后修改只能精确到秒级，如果某些文件在 1 秒钟以内被修改多次的话，它将不能准确标注文件的修改时间；")]),t._v(" "),e("li",[t._v("如果某些文件会被定期生成，但有时内容并没有任何变化，但 Last-Modified 却改变了，导致文件没法使用缓存；")]),t._v(" "),e("li",[t._v("可能存在服务器没有准确获取文件修改时间，或者与代理服务器时间不一致等情形；")])]),t._v(" "),e("h4",{attrs:{id:"文档过期验证-vs-服务器再验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档过期验证-vs-服务器再验证"}},[t._v("#")]),t._v(" 文档过期验证 VS 服务器再验证")]),t._v(" "),e("ul",[e("li",[t._v("文档过期验证 Cache-Control：直接不请求。（更省事）")]),t._v(" "),e("li",[t._v("服务器再验证 Etag：请求，响应体是空的。")])]),t._v(" "),e("h3",{attrs:{id:"用户-disable-cache-控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户-disable-cache-控制"}},[t._v("#")]),t._v(" 用户 Disable cache 控制")]),t._v(" "),e("p",[t._v("打开浏览器的开发者工具，在 Network 中有个 Disable cache ，钩上后浏览器会忽略掉文档过期验证和服务器再验证的过程，直接向服务器请求最新的资源。")]),t._v(" "),e("h2",{attrs:{id:"http-缓存设置-10-年-如何更新"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存设置-10-年-如何更新"}},[t._v("#")]),t._v(" HTTP 缓存设置 10 年，如何更新？")]),t._v(" "),e("ol",[e("li",[t._v("url 价格查询参数")]),t._v(" "),e("li",[t._v("文件名后面加个数")]),t._v(" "),e("li",[t._v("其他方法")])]),t._v(" "),e("h2",{attrs:{id:"问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),e("ol",[e("li",[t._v("我在 Chrome 登录了得到 Cookie，用 Safari 访问，Safari 会带上 Cookie 吗\nno")]),t._v(" "),e("li",[t._v("Cookie 存在哪\nWindows 存在 C 盘的一个文件里")]),t._v(" "),e("li",[t._v("Cookie 会被用户篡改吗？\n可以，Session 可以解决这个问题，防止用户篡改")]),t._v(" "),e("li",[t._v("Cookie 有效期吗？\n默认有效期 20 分钟左右，不同浏览器策略不同\n后端可以强制设置有效期，具体语法看 MDN")]),t._v(" "),e("li",[t._v("Cookie 遵守同源策略吗？\n也有，不过跟 AJAX 的同源策略稍微有些不同。\n当请求 qq.com 下的资源时，浏览器会默认带上 qq.com 对应的 Cookie，不会带上 baidu.com 对应的 Cookie\n当请求 v.qq.com 下的资源时，浏览器不仅会带上 v.qq.com 的 Cookie，还会带上 qq.com 的 Cookie\n另外 Cookie 还可以根据路径做限制，请自行了解，这个功能用得比较少。")])]),t._v(" "),e("hr"),t._v(" "),e("p",[e("em",[t._v("Copyright © 2020 - 2021 by 叶旭瑶 . All Rights Reserved .")])])])}),[],!1,null,null,null);a.default=r.exports}}]);