(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{232:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return l});var c=n(1),r=(n(0),n(241)),a=n.n(r),i=n(240),o=n(254);t.default=function(e){var t=e.data.mdx,n=t.frontmatter,r=t.body;return Object(c.c)(i.a,null,Object(c.c)(a.a,{title:""+n.title}),Object(c.c)("h2",null,n.title),Object(c.c)("h3",null,n.date),Object(c.c)(o,null,r))};var l="1850510893"},239:function(e){e.exports={data:{site:{siteMetadata:{title:"Showcase Embed SDK"}}}}},240:function(e,t,n){"use strict";var c=n(1),r=n(239),a=n(0),i=n.n(a),o=n(113),l=n(241),s=n(64),u={container:{name:"tz4fcx",styles:"background:#ffffff;margin-bottom:1.45rem;"},wrapper:{name:"99qdpa",styles:"display:grid;grid-template-columns:auto 10rem;grid-template-rows:auto;margin:0 auto;max-width:960px;padding:1.45rem 1.0875rem;"},title:{name:"ag9678",styles:"color:'#ff0000';margin:0;display:inline-block;"}},p=Object(s.a)(o.Link,{target:"e11c33z30"})({name:"1ilhjz6",styles:"color:#000000;&:active,&:hover{color:#fff;}"}),f=function(e){var t=e.title;return Object(c.c)("div",{css:u.container},Object(c.c)("div",{css:u.wrapper},Object(c.c)("h1",{css:u.title},Object(c.c)(p,{to:"/"},t))))};n.d(t,"a",function(){return d});var b={name:"gs9e3s",styles:"margin-left:160px;padding:0px 10px;"},m={name:"mvwsl9",styles:"font-family:'sans serif';font-size:20px;height:100%;width:160px;position:fixed;left:0;overflow-x:hidden;padding-left:10px;"},d=function(e){var t=e.children;return Object(c.c)(o.StaticQuery,{query:"1242692094",render:function(e){return Object(c.c)(i.a.Fragment,null,Object(c.c)(l.Helmet,{titleTemplate:"%s - "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title,meta:[{name:"description",content:"Demo site for a Gatsby Starter in TypeScript"},{name:"keywords",content:"gatsby, gatsbyjs, sample, demo, typescript"}]}),Object(c.c)(f,{title:e.site.siteMetadata.title}),Object(c.c)("div",{css:m},Object(c.c)("p",null,Object(c.c)(o.Link,{to:"/single-page/",activeClassName:"active"},"Home")),Object(c.c)("p",null,Object(c.c)(o.Link,{to:"/single-page/",activeClassName:"active"},"Vocabulary")),Object(c.c)("p",null,Object(c.c)(o.Link,{to:"/single-page/",activeClassName:"active"},"Concepts")),Object(c.c)("p",null,Object(c.c)(o.Link,{to:"/single-page/",activeClassName:"active"},"Installation")),Object(c.c)("p",null,Object(c.c)(o.Link,{to:"/single-page/",activeClassName:"active"},"Reference")),Object(c.c)("p",null,Object(c.c)(o.Link,{to:"/single-page/",activeClassName:"active"},"Examples")),Object(c.c)("p",null,Object(c.c)(o.Link,{to:"/single-page/",activeClassName:"active"},"Questions")),Object(c.c)("p",null,Object(c.c)(o.Link,{to:"/single-page/",activeClassName:"active"},"Request an API Key")),Object(c.c)("p",null,Object(c.c)(o.Link,{to:"/single-page/",activeClassName:"active"},"Legal"))),Object(c.c)("div",{css:b},t))},data:r})}},246:function(e,t,n){var c=n(2),r=n(67),a=n(38),i=n(8),o=n(9),l=n(10),s=n(162),u=(n(6).Reflect||{}).construct,p=l(function(){function e(){}return!(u(function(){},[],e)instanceof e)}),f=!l(function(){u(function(){})});c(c.S+c.F*(p||f),"Reflect",{construct:function(e,t){a(e),i(t);var n=arguments.length<3?e:a(arguments[2]);if(f&&!p)return u(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var c=[null];return c.push.apply(c,t),new(s.apply(e,c))}var l=n.prototype,b=r(o(l)?l:Object.prototype),m=Function.apply.call(e,b,t);return o(m)?m:b}})},254:function(e,t,n){function c(e,t,n){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var c=[null];c.push.apply(c,t);var a=new(Function.bind.apply(e,c));return n&&r(a,n.prototype),a}).apply(null,arguments)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,c)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(53),n(14),n(22),n(88),n(160),n(65),n(23),n(13),n(156),n(46),n(5),n(246),n(246),n(156),n(88),n(160),n(46),n(65),n(53),n(23),n(13),n(14),n(5),n(22);var s=n(0),u=n(109),p=u.useMDXComponents,f=u.mdx,b=n(148).useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,r=e.children,i=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["scope","components","children"]),l=p(n),u=b(t),m=s.useMemo(function(){if(!r)return null;var e=o({React:s,mdx:f},u),t=Object.keys(e),n=t.map(function(t){return e[t]});return c(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(n)))},[r,t]);return s.createElement(m,o({components:l},i))}}}]);
//# sourceMappingURL=component---src-templates-single-template-tsx-9cadb0d8d4a81964a389.js.map