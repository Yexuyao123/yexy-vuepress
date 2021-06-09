(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{366:function(s,n,a){"use strict";a.r(n);var e=a(42),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),a("p",[a("em",[s._v("2021 年 1 月 30 日")])]),s._v(" "),a("hr"),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#目录结构"}},[s._v("目录结构")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-前端目录结构"}},[s._v("1. 前端目录结构")])]),a("li",[a("a",{attrs:{href:"#_2-vuepress-目录结构"}},[s._v("2.vuepress 目录结构")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"_1-前端目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-前端目录结构"}},[s._v("#")]),s._v(" 1. 前端目录结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n│\n├── .git(git仓库配置)\n│\n├── src(source未经翻译的代码/源码)\n│   ├── assets (图片，如icon)\n│   │   ├── img (给图片分库，按功能命名)\n│   │   │   └── xxx.img\n│   │   └── img (可选的)\n│   ├── axios (存放ajax请求函数)\n│   │   └── XXX (按功能命名)\n│   │       └── xxx.js\n│   ├── components (组件)\n│   │   ├── Layout\n│   │   ├── Form\n│   │   └── Widge(小组件)\n│   ├── CSS\n│   ├── init(全局初始化js)\n│   ├── mixins(混入，设置一些默认值js)\n│   ├── router(路由管理 path映射)\n│   ├── store(状态管理)\n│   ├── type(ts的类型定义)\n│   ├── util(工具函数js)\n│   ├── view/page(页面文件)\n│   ├── App.vue(vue主路口)\n│   └── main.js(js主路口)\n│\n├── dist(distribution待发布的代码)\n├── vendors(第三方代码，如jQuery)\n├── node_modules(npm第三方包)\n│\n│\n└── package.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("h2",{attrs:{id:"_2-vuepress-目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-vuepress-目录结构"}},[s._v("#")]),s._v(" 2.vuepress 目录结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates (可选的, 谨慎配置)\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js (可选的)\n│   │   └── enhanceApp.js (可选的)\n│   │\n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│\n└── package.json\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("hr"),s._v(" "),a("p",[a("em",[s._v("Copyright © 2020 - 2021 by 叶旭瑶 . All Rights Reserved .")])])])}),[],!1,null,null,null);n.default=t.exports}}]);