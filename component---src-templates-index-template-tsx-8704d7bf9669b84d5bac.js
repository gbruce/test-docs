(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{233:function(e,t,a){"use strict";a.r(t);var n=a(1),c=(a(0),a(113)),i=a(241),r=a(244),s=a(245),o=a(240);t.default=function(e){return Object(n.c)(o.a,null,Object(n.c)(i.Helmet,{meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),Object(n.c)("h2",null,"All Markdown Content"),Object(n.c)(r.a,{edges:e.pageContext.group}),Object(n.c)(s.a,{page:e.pageContext.page,prefix:e.pageContext.prefix,total:e.pageContext.pageTotal}),Object(n.c)("hr",null),Object(n.c)(c.Link,{to:"/tags"},"All tags"))}},239:function(e){e.exports={data:{site:{siteMetadata:{title:"TypeScript Gatsby Starter"}}}}},240:function(e,t,a){"use strict";var n=a(1),c=a(239),i=a(0),r=a.n(i),s=a(113),o=a(241),l=a(64),d=(a(242),a(85),a(243)),p={wrapper:{name:"1baulvz",styles:"display:inline-block;"},input:{name:"4bth54",styles:"padding:0.25rem 0.5rem;width:12rem;"},list:Object(n.b)("background-color:#fff;border:1px solid ","#ff5700",";display:block;list-style:none;margin:0;padding:0;position:absolute;width:12rem;z-index:2;"),item:Object(n.b)("border-bottom:1px dotted ","#ff5700",";margin:0;"),link:{name:"154qlor",styles:"display:block;padding:0.25rem 0.5rem;"},footer:{name:"1avdwdz",styles:"font-size:0.75rem;margin:0;padding:0.5rem;border:0;"},hidden:{name:"it8c6v",styles:"position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;"}},u=function(e){var t=e.limit,a=Object(i.useState)(""),c=a[0],r=a[1],o=Object(i.useState)([]),l=o[0],u=o[1],b=Object(i.useState)(!1),m=b[0],f=b[1],g=Object(d.useOutside)("click",function(){f(!1)});return Object(n.c)("div",{ref:g,css:p.wrapper},Object(n.c)("label",null,Object(n.c)("span",{css:p.hidden},"Search"),Object(n.c)("input",{type:"search",css:p.input,value:c,onChange:function(e){var t,a,n,c;r(e.target.value),u((t=e.target.value,a=window.__LUNR__&&window.__LUNR__.en,n=a.index,c=a.store,t?n.search(t).map(function(e){var t=e.ref;return c[t]}):[])),f(!0)}})),m?Object(n.c)("ul",{css:p.list},l.slice(0,t).map(function(e,t){return Object(n.c)("li",{key:t,css:p.item},Object(n.c)(s.Link,{css:p.link,to:e.path},e.title))}),Object(n.c)("li",{css:p.footer},"Showing ",t?Math.min(t,l.length)+" of":null," ",l.length," ",1===l.length?"result":"results",".")):null)},b={container:{name:"1ef2mo1",styles:"background:#ff5700;margin-bottom:1.45rem;"},wrapper:{name:"99qdpa",styles:"display:grid;grid-template-columns:auto 10rem;grid-template-rows:auto;margin:0 auto;max-width:960px;padding:1.45rem 1.0875rem;"},title:{name:"1rw11fa",styles:"margin:0;display:inline-block;"}},m=Object(l.a)(s.Link,{target:"e11c33z30"})({name:"1bimwvu",styles:"color:#fff;&:active,&:hover{color:#fff;}"}),f=function(e){var t=e.title;return Object(n.c)("div",{css:b.container},Object(n.c)("div",{css:b.wrapper},Object(n.c)("h1",{css:b.title},Object(n.c)(m,{to:"/"},t)),Object(n.c)(u,{limit:10})))};a.d(t,"a",function(){return j});var g={name:"1i5duz1",styles:"margin:0 auto;max-width:960px;padding:0 1.0875rem 1.45rem;"},j=function(e){var t=e.children;return Object(n.c)(s.StaticQuery,{query:"1242692094",render:function(e){return Object(n.c)(r.a.Fragment,null,Object(n.c)(o.Helmet,{titleTemplate:"%s - "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title,meta:[{name:"description",content:"Demo site for a Gatsby Starter in TypeScript"},{name:"keywords",content:"gatsby, gatsbyjs, sample, demo, typescript"}]}),Object(n.c)(f,{title:e.site.siteMetadata.title}),Object(n.c)("div",null,Object(n.c)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},Object(n.c)("p",null,Object(n.c)(s.Link,{to:"/single-page/",activeClassName:"active"},"Home")),Object(n.c)("p",null,Object(n.c)(s.Link,{to:"/single-page/",activeClassName:"active"},"Vocabulary")),Object(n.c)("p",null,Object(n.c)(s.Link,{to:"/single-page/",activeClassName:"active"},"Concepts")),Object(n.c)("p",null,Object(n.c)(s.Link,{to:"/single-page/",activeClassName:"active"},"Concepts")),Object(n.c)(s.Link,{to:"/single-page/",activeClassName:"active"},"Concepts"),Object(n.c)(s.Link,{to:"/single-page/",activeClassName:"active"},"Concepts"))),Object(n.c)("div",{css:g},t))},data:c})}},244:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(1),c=(a(0),a(113)),i={name:"a5n0d9",styles:"line-height:1.8;list-style:none;padding:0;margin:1rem 0 2rem;"},r=Object(n.b)(),s=function(e){var t=e.edges;return Object(n.c)("ul",{css:i},t.map(function(e){var t=e.node,a=t.frontmatter,i=a.path,s=a.title;return Object(n.c)("li",{css:r,key:i},Object(n.c)(c.Link,{to:i},s)," (",t.frontmatter.date,")")}))}},245:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(64),c=a(1),i=(a(0),a(113));function r(e,t){return t<=1?"/"+e:"/"+e+"/"+t}var s=Object(n.a)(i.Link,{target:"e1143nri0"})({name:"1ussae8",styles:"background-color:#ff5700;border-radius:3px;color:#fff;font-family:sans-serif;margin:0 1rem 0 0;padding:0.25rem 0.5rem;text-decoration:none;&:active,&:hover{color:#fff;}"}),o=function(e){var t=e.prefix,a=e.page,n=e.total;return Object(c.c)("div",null,a>1&&Object(c.c)(s,{to:r(t,a-1)},"Previous"),a<n&&Object(c.c)(s,{to:r(t,a+1)},"Next"))}}}]);
//# sourceMappingURL=component---src-templates-index-template-tsx-8704d7bf9669b84d5bac.js.map