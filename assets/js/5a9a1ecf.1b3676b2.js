"use strict";(self.webpackChunkkolloqe_github_io=self.webpackChunkkolloqe_github_io||[]).push([[8020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6394:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4},l="Markdown Features",i={unversionedId:"dev-console/temp/markdown-features",id:"dev-console/temp/markdown-features",title:"Markdown Features",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/dev-console/temp/markdown-features.mdx",sourceDirName:"dev-console/temp",slug:"/dev-console/temp/markdown-features",permalink:"/dev-console/temp/markdown-features",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a Blog Post",permalink:"/dev-console/temp/create-a-blog-post"},next:{title:"Development API",permalink:"/category/development-api"}},s={},c=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],u=e=>{let{children:t,color:n}=e;return(0,o.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert("You clicked the color "+n+" with label "+t)}},t)},p={toc:c,Highlight:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"markdown-features"},"Markdown Features"),(0,o.kt)("p",null,"Docusaurus supports ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,o.kt)("strong",{parentName:"p"},"additional features"),"."),(0,o.kt)("h2",{id:"front-matter"},"Front Matter"),(0,o.kt)("p",null,"Markdown documents have metadata at the top called ",(0,o.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,o.kt)("h2",{id:"images"},"Images"),(0,o.kt)("p",null,"Regular Markdown images are supported."),(0,o.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,o.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,o.kt)("h2",{id:"admonitions"},"Admonitions"),(0,o.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,o.kt)("admonition",{title:"My tip",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,o.kt)("admonition",{title:"Take care",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This action is dangerous")),(0,o.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,o.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,o.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,o.kt)("p",null,"This is ",(0,o.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,o.kt)("p",null,"This is ",(0,o.kt)(u,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}d.isMDXComponent=!0}}]);