(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(6),a=(r(0),r(183)),i={id:"how-do-i-hide-a-story-from-my-main-feed",title:"How do I hide a story from my main feed?",sidebar_label:"Hide a story from main feed"},c={id:"listed/how-do-i-hide-a-story-from-my-main-feed",isDocsHomePage:!1,title:"How do I hide a story from my main feed?",description:"1. Use the following metadata structure at the beginning of your note:",source:"@site/docs/listed/68-how-do-i-hide-a-story-from-my-main-feed.md",permalink:"/listed/how-do-i-hide-a-story-from-my-main-feed",editUrl:"https://github.com/standardnotes/docs/edit/master/docs/listed/68-how-do-i-hide-a-story-from-my-main-feed.md",lastUpdatedAt:1593569680,sidebar_label:"Hide a story from main feed",sidebar:"someSidebar",previous:{title:"How do I specify a custom date for a post, or set the canonical URL?",permalink:"/listed/how-do-i-specify-a-custom-date-for-a-post-or-set-the-canonical-url"},next:{title:"How do I add separate pages to my blog?",permalink:"/listed/how-do-i-add-separate-pages-to-my-blog"}},l=[],s={rightToc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Use the following metadata structure at the beginning of your note:")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"---\nhidden: true\n---\nYour story...\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},"Publish the note to your blog.")),Object(a.b)("p",null,"You can also hide the body of all your stories from the main feed so that only titles show using CSS:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Follow the steps to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/help/66"}),"create a CSS theme")," for your blog.")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Add the following CSS:"))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"---\nmetatype: css\n---\n\n.post-body {\n  display: none;\n}\n\n#single-post-show .post-body {\n  display: inline;\n}\n")))}d.isMDXComponent=!0},183:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return r?o.a.createElement(f,c(c({ref:t},s),{},{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);