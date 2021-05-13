(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3875],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(n),f=o,b=s["".concat(i,".").concat(f)]||s[f]||p[f]||a;return n?r.createElement(b,u(u({ref:t},l),{},{components:n})):r.createElement(b,u({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var d=2;d<a;d++)u[d]=n[d];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},512:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return i},default:function(){return l}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),u={title:"Frontend Docker Image",hide_title:!0,slug:"/docker/datahub-frontend",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/datahub-frontend/README.md"},c={unversionedId:"docker/datahub-frontend/README",id:"docker/datahub-frontend/README",isDocsHomePage:!1,title:"DataHub Frontend Docker Image",description:"datahub-frontend docker",source:"@site/genDocs/docker/datahub-frontend/README.md",sourceDirName:"docker/datahub-frontend",slug:"/docker/datahub-frontend",permalink:"/docs/docker/datahub-frontend",editUrl:"https://github.com/linkedin/datahub/blob/master/docker/datahub-frontend/README.md",version:"current",frontMatter:{title:"Frontend Docker Image",hide_title:!0,slug:"/docker/datahub-frontend",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docker/datahub-frontend/README.md"}},i=[{value:"Checking out DataHub UI",id:"checking-out-datahub-ui",children:[]}],d={toc:i};function l(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/actions?query=workflow%3A%22datahub-frontend+docker%22"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/linkedin/datahub/workflows/datahub-frontend%20docker/badge.svg",alt:"datahub-frontend docker"}))),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/datahub-frontend"},"DataHub Frontend Service")," to have a quick understanding of the architecture and\nresponsibility of this service for the DataHub."),(0,a.kt)("h2",{id:"checking-out-datahub-ui"},"Checking out DataHub UI"),(0,a.kt)("p",null,"After starting your Docker container, you can connect to it by typing below into your favorite web browser:"),(0,a.kt)("p",null,"If using React app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://localhost:9002\n")),(0,a.kt)("p",null,"If using legacy Ember app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://localhost:9001\n")),(0,a.kt)("p",null,"You can sign in with ",(0,a.kt)("inlineCode",{parentName:"p"},"datahub")," as username and password."))}l.isMDXComponent=!0}}]);