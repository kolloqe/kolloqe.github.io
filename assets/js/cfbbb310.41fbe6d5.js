"use strict";(self.webpackChunkkolloqe_github_io=self.webpackChunkkolloqe_github_io||[]).push([[4758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=l,k=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var m=2;m<o;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7294),l=n(6010),o=n(5281),r=n(5999);const i="admonition_LlT9",s="admonitionHeading_tbUL",m="admonitionIcon_kALy",c="admonitionContent_S0QG";const u={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},p={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){var t;const{mdxAdmonitionTitle:n,rest:l}=function(e){const t=a.Children.toArray(e),n=t.find((e=>{var t;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:null!=(t=e.title)?t:n,children:l}}function k(e){const{children:t,type:n,title:r,icon:k}=d(e),h=function(e){var t;const n=null!=(t=p[e])?t:e;return u[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),u.info)}(n),b=null!=r?r:h.label,{iconComponent:f}=h,g=null!=k?k:a.createElement(f,null);return a.createElement("div",{className:(0,l.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert","alert--"+h.infimaClassName,i)},a.createElement("div",{className:s},a.createElement("span",{className:m},g),b),a.createElement("div",{className:c},t))}},4210:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>T,assets:()=>N,contentTitle:()=>v,default:()=>x,frontMatter:()=>g,metadata:()=>y,toc:()=>w});var a=n(7462),l=n(7294),o=n(3905),r=n(6010),i=n(2389),s=n(7392),m=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:i,defaultValue:d,values:k,groupId:h,className:b}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=k?k:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:T}=(0,m.U)(),[w,C]=(0,l.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=h){const e=N[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==w&&(E(t),C(a),null!=h&&T(h,String(a)))},q=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var l;const t=x.indexOf(e.currentTarget)-1;n=null!=(l=x[t])?l:x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},b)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:q,onFocus:O,onClick:O},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function k(e){const t=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}const h="tabItem_Ymn6";function b(e){let{children:t,hidden:n,className:a}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(h,a),hidden:n},t)}var f=n(3612);const g={slug:"kolloqe-101",title:"Kolloqe 101",authors:["ishara"],tags:["kolloqe","basics"]},v=void 0,y={permalink:"/blog/kolloqe-101",source:"@site/blog/2022-07-29-Kolloqe-101/index.mdx",title:"Kolloqe 101",description:"Kolloqe101",date:"2022-07-29T00:00:00.000Z",formattedDate:"July 29, 2022",tags:[{label:"kolloqe",permalink:"/blog/tags/kolloqe"},{label:"basics",permalink:"/blog/tags/basics"}],readingTime:1.745,hasTruncateMarker:!0,authors:[{name:"Ishara Dissanayake",title:"ML Engineer @ Kolloqe",url:"https://github.com/thisisishara",imageURL:"https://github.com/thisisishara.png",key:"ishara"}],frontMatter:{slug:"kolloqe-101",title:"Kolloqe 101",authors:["ishara"],tags:["kolloqe","basics"]},prevItem:{title:"Let's train a chatbot, shall we?",permalink:"/blog/kolloqe-training-a-model"},nextItem:{title:"Welcome to Kolloqe",permalink:"/blog/welcometokolloqe"}},N={authorsImageUrls:[void 0]};(0,o.kt)(f.Z,{type:"tip",icon:"\ud83d\udca1",title:"Did you know..."},(0,o.kt)("p",null,"Use plugins to introduce shorter syntax for the most commonly used JSX elements in your project."));const T=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},w=[{value:"Two number signs\u2026",id:"two-number-signs",level:2},{value:"Six number signs\u2026",id:"six-number-signs",level:6},{value:"Details element example",id:"details-element-example",level:3}],C={Highlight:T,toc:w};function x(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},C,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Kolloqe101",src:n(8195).Z,width:"1500",height:"500"})),(0,o.kt)("p",null,"Summary"),(0,o.kt)("p",null,"[to be published...]"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com",title:"title"},"MDX")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A greater than\u2026")),(0,o.kt)("p",null,"A backslash \\ before a line break\u2026"),(0,o.kt)("p",null,"Some ",(0,o.kt)("inlineCode",{parentName:"p"},"backticks")," for inline."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'backtick.fences("for blocks");\n')),(0,o.kt)("p",null,"Some ",(0,o.kt)("em",{parentName:"p"},"asterisks")," for emphasis."),(0,o.kt)("h1",{id:"one-number-sign"},"One number sign\u2026"),(0,o.kt)("h2",{id:"two-number-signs"},"Two number signs\u2026"),(0,o.kt)("h6",{id:"six-number-signs"},"Six number signs\u2026"),(0,o.kt)("p",null,"Three asterisks for a thematic break:"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"asterisks for unordered items")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"decimals and a dot for ordered items")),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'backtick.fences("for blocks");\n')),(0,o.kt)("p",null,"Two ",(0,o.kt)("strong",{parentName:"p"},"asterisks")," for strong."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Easy to maintain open source documentation websites."),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Docusaurus")),(0,o.kt)("h3",{id:"details-element-example"},"Details element example"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Toggle me!"),(0,o.kt)("div",null,(0,o.kt)("div",null,"This is the detailed content"),(0,o.kt)("br",null),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Nested toggle! Some surprise inside..."),(0,o.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32")))),(0,o.kt)(T,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",(0,o.kt)(T,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,o.kt)("p",null,"I can write ",(0,o.kt)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,o.kt)("em",{parentName:"p"},"JSX"),"!"),(0,o.kt)("p",null,"Tabs"),(0,o.kt)(k,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,o.kt)(b,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,o.kt)(b,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,o.kt)(b,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,o.kt)("p",null,"Syncing choice"),(0,o.kt)(k,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(b,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + C to copy."),(0,o.kt)(b,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + C to copy.")),(0,o.kt)(k,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(b,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + V to paste."),(0,o.kt)(b,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + V to paste.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Some ",(0,o.kt)("strong",{parentName:"p"},"content")," with ",(0,o.kt)("em",{parentName:"p"},"Markdown")," ",(0,o.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,o.kt)("a",{parentName:"p",href:"#"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"api")),".")))}x.isMDXComponent=!0},8195:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kolloqe-101-c62953d20de7e3040b008d35aecfc139.png"}}]);