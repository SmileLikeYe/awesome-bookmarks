(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{244:function(e,t,v){"use strict";v.r(t);var l=v(0),a=Object(l.a)({},function(){var e=this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"vue"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue","aria-hidden":"true"}},[e._v("#")]),e._v(" Vue")]),e._v(" "),v("p",[e._v("很多人面试会问啥 vue 实现原理，但我觉得这略过分，有多少人会老老实实看过它的源码。但我觉得面者这也只是知道 vue 双向绑定的原理吧。")]),e._v(" "),v("ul",[v("li",[e._v("发布者-订阅者模式（backbone.js）")])]),e._v(" "),v("p",[e._v("一般通过 sub, pub 的方式实现数据和视图的绑定监听，更新数据方式通常做法是 vm.set(‘property’, value)，这种方式现在毕竟太 low 了，我们更希望通过 vm.property = value 这种方式更新数据，同时自动更新视图，于是有了下面两种方式")]),e._v(" "),v("ul",[v("li",[e._v("脏值检查（angular.js）\nangular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 setInterval() 定时轮询检测数据变动，当然 Google 不会这么 low，angular 只有在指定的事件触发时进入脏值检测，大致如下：")])]),e._v(" "),v("blockquote",[v("ul",[v("li",[e._v("DOM 事件，譬如用户输入文本，点击按钮等( ng-click )")]),e._v(" "),v("li",[e._v("XHR 响应事件 ( $http )")]),e._v(" "),v("li",[e._v("浏览器 Location 变更事件 ( $location )")]),e._v(" "),v("li",[e._v("Timer 事件( $timeout , $interval )")]),e._v(" "),v("li",[e._v("执行 $digest() 或 $apply()")])])]),e._v(" "),v("ul",[v("li",[e._v("数据劫持（vue.js）")])]),e._v(" "),v("p",[e._v("vue.js[2.0] 则是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。\nvue.js[3.0]采取了 proxy 的方式")])])}],!1,null,null,null);t.default=a.exports}}]);