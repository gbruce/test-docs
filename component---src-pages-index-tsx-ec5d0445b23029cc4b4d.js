(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{237:function(e,t,n){"use strict";n.r(t),n.d(t,"IndexPage",function(){return s});var i=n(1),a=n(0),c=n.n(a),r=n(113),l=n(240),s=function(){return Object(i.c)(c.a.Fragment,null,Object(i.c)("h2",null,"Hi people"),Object(i.c)("p",null,"Welcome to your new Gatsby site."),Object(i.c)("p",null,"Now go build something great."),Object(i.c)("p",null,Object(i.c)(r.Link,{to:"/another-page/"},"Go to another page")),Object(i.c)("p",null,Object(i.c)(r.Link,{to:"/all/"},"See content generated from Markdown files")))};t.default=function(){return Object(i.c)(l.a,null,Object(i.c)(s,null))}},239:function(e){e.exports={data:{site:{siteMetadata:{title:"TypeScript Gatsby Starter"}}}}},240:function(e,t,n){"use strict";var i=n(1),a=n(239),c=n(0),r=n.n(c),l=n(113),s=n(241),o=n(64),d=(n(242),n(85),n(243)),u={wrapper:{name:"1baulvz",styles:"display:inline-block;"},input:{name:"4bth54",styles:"padding:0.25rem 0.5rem;width:12rem;"},list:Object(i.b)("background-color:#fff;border:1px solid ","#ff5700",";display:block;list-style:none;margin:0;padding:0;position:absolute;width:12rem;z-index:2;"),item:Object(i.b)("border-bottom:1px dotted ","#ff5700",";margin:0;"),link:{name:"154qlor",styles:"display:block;padding:0.25rem 0.5rem;"},footer:{name:"1avdwdz",styles:"font-size:0.75rem;margin:0;padding:0.5rem;border:0;"},hidden:{name:"it8c6v",styles:"position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden;"}},p=function(e){var t=e.limit,n=Object(c.useState)(""),a=n[0],r=n[1],s=Object(c.useState)([]),o=s[0],p=s[1],b=Object(c.useState)(!1),m=b[0],f=b[1],g=Object(d.useOutside)("click",function(){f(!1)});return Object(i.c)("div",{ref:g,css:u.wrapper},Object(i.c)("label",null,Object(i.c)("span",{css:u.hidden},"Search"),Object(i.c)("input",{type:"search",css:u.input,value:a,onChange:function(e){var t,n,i,a;r(e.target.value),p((t=e.target.value,n=window.__LUNR__&&window.__LUNR__.en,i=n.index,a=n.store,t?i.search(t).map(function(e){var t=e.ref;return a[t]}):[])),f(!0)}})),m?Object(i.c)("ul",{css:u.list},o.slice(0,t).map(function(e,t){return Object(i.c)("li",{key:t,css:u.item},Object(i.c)(l.Link,{css:u.link,to:e.path},e.title))}),Object(i.c)("li",{css:u.footer},"Showing ",t?Math.min(t,o.length)+" of":null," ",o.length," ",1===o.length?"result":"results",".")):null)},b={container:{name:"1ef2mo1",styles:"background:#ff5700;margin-bottom:1.45rem;"},wrapper:{name:"99qdpa",styles:"display:grid;grid-template-columns:auto 10rem;grid-template-rows:auto;margin:0 auto;max-width:960px;padding:1.45rem 1.0875rem;"},title:{name:"1rw11fa",styles:"margin:0;display:inline-block;"}},m=Object(o.a)(l.Link,{target:"e11c33z30"})({name:"1bimwvu",styles:"color:#fff;&:active,&:hover{color:#fff;}"}),f=function(e){var t=e.title;return Object(i.c)("div",{css:b.container},Object(i.c)("div",{css:b.wrapper},Object(i.c)("h1",{css:b.title},Object(i.c)(m,{to:"/"},t)),Object(i.c)(p,{limit:10})))};n.d(t,"a",function(){return j});var g={name:"1i5duz1",styles:"margin:0 auto;max-width:960px;padding:0 1.0875rem 1.45rem;"},j=function(e){var t=e.children;return Object(i.c)(l.StaticQuery,{query:"1242692094",render:function(e){return Object(i.c)(r.a.Fragment,null,Object(i.c)(s.Helmet,{titleTemplate:"%s - "+e.site.siteMetadata.title,defaultTitle:e.site.siteMetadata.title,meta:[{name:"description",content:"Demo site for a Gatsby Starter in TypeScript"},{name:"keywords",content:"gatsby, gatsbyjs, sample, demo, typescript"}]}),Object(i.c)(f,{title:e.site.siteMetadata.title}),Object(i.c)("div",{css:g},t))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ec5d0445b23029cc4b4d.js.map