(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{374:function(t,_,a){"use strict";a.r(_);var r=a(42),v=Object(r.a)({},(function(){var t=this,_=t.$createElement,a=t._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_04-堆叠上下文-stacking-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_04-堆叠上下文-stacking-context"}},[t._v("#")]),t._v(" [04] 堆叠上下文 Stacking Context")]),t._v(" "),a("p",[a("em",[t._v("2020 年 7 月 31 日")])]),t._v(" "),a("hr"),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_04-堆叠上下文-stacking-context"}},[t._v("[04] 堆叠上下文 Stacking Context")])]),a("li",[a("a",{attrs:{href:"#来自张鑫旭的理解"}},[t._v("来自张鑫旭的理解")]),a("ul",[a("li",[a("a",{attrs:{href:"#层叠上下文与层叠水平"}},[t._v("层叠上下文与层叠水平")])]),a("li",[a("a",{attrs:{href:"#层叠顺序规则"}},[t._v("层叠顺序规则")])]),a("li",[a("a",{attrs:{href:"#层叠上下文创建"}},[t._v("层叠上下文创建")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-根层叠上下文"}},[t._v("① 根层叠上下文")])]),a("li",[a("a",{attrs:{href:"#_2-定位元素与传统层叠上下文"}},[t._v("② 定位元素与传统层叠上下文")])]),a("li",[a("a",{attrs:{href:"#_3css3-与新时代的层叠上下文"}},[t._v("③CSS3 与新时代的层叠上下文")])])])])])]),a("li",[a("a",{attrs:{href:"#来自方应航的理解"}},[t._v("来自方应航的理解")])]),a("li",[a("a",{attrs:{href:"#总结"}},[t._v("总结")]),a("ul",[a("li",[a("a",{attrs:{href:"#z-坐标从上至下"}},[t._v("z 坐标从上至下")])])])]),a("li",[a("a",{attrs:{href:"#"}})])])]),a("p"),t._v(" "),a("h1",{attrs:{id:"来自张鑫旭的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来自张鑫旭的理解"}},[t._v("#")]),t._v(" 来自张鑫旭的理解")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 CSS 中的层叠上下文和层叠顺序——张鑫旭博客"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"层叠上下文与层叠水平"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文与层叠水平"}},[t._v("#")]),t._v(" 层叠上下文与层叠水平")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("层叠上下文(stacking context)"),a("strong",[t._v("是 HTML 中的一个三维的概念。元素若含有层叠上下文，可理解为这个元素在")]),t._v("z 轴")]),t._v("上就“高人一等”。")]),t._v(" "),a("li",[a("strong",[t._v("层叠水平(stacking level)")]),t._v("，决定了同一个层叠上下文中元素在 z 轴上的显示顺序。")])]),t._v(" "),a("h2",{attrs:{id:"层叠顺序规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠顺序规则"}},[t._v("#")]),t._v(" 层叠顺序规则")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("层叠顺序规则")]),t._v("遵循下面这张图")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/stacking.jpg"),alt:"foo"}}),t._v(" "),a("ul",[a("li",[a("strong",[t._v("层叠准则")]),t._v("：")]),t._v(" "),a("li",[a("strong",[t._v("谁大谁上")]),t._v("：当具有明显的"),a("strong",[t._v("层叠水平标示")]),t._v("的时候，如识别的 z-indx 值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的那一个。通俗讲就是官大的压死官小的。")]),t._v(" "),a("li",[a("strong",[t._v("后来居上")]),t._v("：当元素的层叠水平一致、层叠顺序相同的时候，在"),a("strong",[t._v("DOM 流中处于后面的元素")]),t._v("会覆盖前面的元素。")])]),t._v(" "),a("h2",{attrs:{id:"层叠上下文创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#层叠上下文创建"}},[t._v("#")]),t._v(" 层叠上下文创建")]),t._v(" "),a("ul",[a("li",[t._v("层叠上下文基本上由一些特定的 CSS 属性创建")]),t._v(" "),a("li",[t._v("皇亲国戚派：页面根元素天生具有层叠上下文，称之为“"),a("strong",[t._v("根层叠上下文")]),t._v("”。")]),t._v(" "),a("li",[t._v("科考入选派：z-index 值为数值的"),a("strong",[t._v("定位元素")]),t._v("的传统层叠上下文。")]),t._v(" "),a("li",[t._v("其他当官途径："),a("strong",[t._v("其他")]),t._v("CSS3 属性。")])]),t._v(" "),a("h3",{attrs:{id:"_1-根层叠上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-根层叠上下文"}},[t._v("#")]),t._v(" ① 根层叠上下文")]),t._v(" "),a("ul",[a("li",[t._v("页面根元素，也就是滚动条的默认的始作俑者"),a("strong",[t._v("html 元素")]),t._v("。")]),t._v(" "),a("li",[t._v("因此，绝对定位元素在 left/top 等值定位的时候，如果没有其他定位元素限制，会相对浏览器窗口定位的原因。")])]),t._v(" "),a("h3",{attrs:{id:"_2-定位元素与传统层叠上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-定位元素与传统层叠上下文"}},[t._v("#")]),t._v(" ② 定位元素与传统层叠上下文")]),t._v(" "),a("ul",[a("li",[t._v("含有"),a("strong",[t._v("position:relative/position:absolute")]),t._v("的定位元素")]),t._v(" "),a("li",[t._v("FireFox/IE 浏览器(不包括 Chrome 等 webkit 内核浏览器-16 年)下含有"),a("strong",[t._v("position:fixed")]),t._v("声明的定位元素，")]),t._v(" "),a("li",[t._v("以上，"),a("strong",[t._v("含 position 定位的元素，当 z-index 值不是 auto 的时候")]),t._v("，会创建层叠上下文。")])]),t._v(" "),a("h3",{attrs:{id:"_3css3-与新时代的层叠上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3css3-与新时代的层叠上下文"}},[t._v("#")]),t._v(" ③CSS3 与新时代的层叠上下文")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("z-index 值不为 auto 的 flex 项(父元素"),a("strong",[t._v("display:flex|inline-flex")]),t._v(").")])]),t._v(" "),a("li",[a("p",[t._v("元素的"),a("strong",[t._v("opacity (透明度)值不是 1")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("元素的**transform (变换)**值不是 none.")])]),t._v(" "),a("li",[a("p",[t._v("元素**mix-blend-mode (混合模式)**值不是 normal.")])]),t._v(" "),a("li",[a("p",[t._v("元素的**filter (滤镜)**值不是 none.")])]),t._v(" "),a("li",[a("p",[t._v("元素的"),a("strong",[t._v("isolation 值是 isolate (隔离)")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("will-change 指定的属性值为上面任意一个。")])]),t._v(" "),a("li",[a("p",[t._v("元素的-webkit-overflow-scrolling 设为 touch.")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2015/11/css3-will-change-improve-paint/",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 CSS3 will-change 提高页面滚动、动画等渲染性能——张鑫旭"),a("OutboundLink")],1)])])]),t._v(" "),a("h1",{attrs:{id:"来自方应航的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#来自方应航的理解"}},[t._v("#")]),t._v(" 来自方应航的理解")]),t._v(" "),a("img",{staticStyle:{"{width":"400px",height:"800px",border:"1px solid #44444480","margin-top":"20px"},attrs:{src:t.$withBase("/duidie.jpg"),alt:"foo"}}),t._v(" "),a("h1",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("h2",{attrs:{id:"z-坐标从上至下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#z-坐标从上至下"}},[t._v("#")]),t._v(" z 坐标从上至下")]),t._v(" "),a("ul",[a("li",[t._v("正 z-index")]),t._v(" "),a("li",[t._v("含 position 定位或 z-index:auto/0 的元素")]),t._v(" "),a("li",[t._v("内联元素")]),t._v(" "),a("li",[t._v("浮动元素")]),t._v(" "),a("li",[t._v("块级元素")]),t._v(" "),a("li",[t._v("父元素有定位或父元素 z 为 0 的 负 z-index")]),t._v(" "),a("li",[t._v("边框 border")]),t._v(" "),a("li",[t._v("背景 background")]),t._v(" "),a("li",[t._v("父元素没有 position 定位的 负 z-index")])]),t._v(" "),a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("em",[t._v("Copyright © 2020 - 2021 by 叶旭瑶 . All Rights Reserved .")])])])}),[],!1,null,null,null);_.default=v.exports}}]);