(this["webpackJsonpreact-pwa"]=this["webpackJsonpreact-pwa"]||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),i=t(13),r=t.n(i),a=(t(18),t(3)),l=t(4),u=t(6),s=t(5),j=(t(19),t(2)),b=t(8),d=t(0),h=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){return Object(a.a)(this,t),console.log("Home.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Home.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Home.componentWillUnmount")}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Home"})})}}]),t}(o.Component),m=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){return Object(a.a)(this,t),console.log("Page1.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Page1.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Page1.componentWillUnmount")}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Page1"})})}}]),t}(o.Component),O=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){return Object(a.a)(this,t),console.log("Me.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Me.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Me.componentWillUnmount")}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Me"})})}}]),t}(o.Component),p=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var o;Object(a.a)(this,t),console.log("Others.constructor");var c=(o=n.call(this,e)).props.params.id;return o.is=c,console.log(c),o}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Others.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Others.componentWillUnmount")}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("h1",{children:["Others ",this.is]})})}}]),t}(o.Component);function f(){var e=Object(j.h)();return Object(d.jsx)(p,{params:e})}var v=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){return Object(a.a)(this,t),console.log("About.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("About.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("About.componentWillUnmount")}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"About"})})}}]),t}(o.Component),g=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){return Object(a.a)(this,t),console.log("Contact.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Contact.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Contact.componentWillUnmount")}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Contact"})})}}]),t}(o.Component),x=t(10),k=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){var o;return Object(a.a)(this,t),console.log("Camera.constructor"),(o=n.call(this,e)).inputFile=c.a.createRef(),o.onChange=o.onChange.bind(Object(x.a)(o)),o}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Camera.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Camera.componentWillUnmount")}},{key:"onChange",value:function(e){console.log("onChange");var n=e.srcElement.files[0],t=new FileReader;t.addEventListener("load",(function(e){var n=t.result;alert(n)})),t.readAsDataURL(n)}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Camera"}),Object(d.jsx)("input",{type:"file",ref:this.inputFile,onChange:this.onChange})]})}}]),t}(o.Component),C=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){return Object(a.a)(this,t),console.log("NotFound.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("NotFound.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("NotFound.componentWillUnmount")}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"NotFound"}),Object(d.jsx)("p",{children:Object(d.jsx)(b.b,{to:"/",children:"Go to the home page"})})]})}}]),t}(o.Component);function y(){var e=Object(j.g)(),n=function(n){"home"===n.target.name?e("/"):"page1"===n.target.name?e("/page1"):"about"===n.target.name?e("/about"):"contact"===n.target.name?e("/contact"):"camera"===n.target.name&&e("/camera")};return Object(d.jsxs)("div",{children:[Object(d.jsxs)("nav",{children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/page1",children:"Page1"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/about",children:"About"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/contact",children:"Contact"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/camera",children:"Camera"})}),Object(d.jsx)("li",{children:Object(d.jsx)(b.b,{to:"/nothing-here",children:"Nothing Here"})})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:n,name:"home",children:"Home"}),Object(d.jsx)("button",{onClick:n,name:"page1",children:"Page1"}),Object(d.jsx)("button",{onClick:n,name:"about",children:"About"}),Object(d.jsx)("button",{onClick:n,name:"contact",children:"Contact"}),Object(d.jsx)("button",{onClick:n,name:"camera",children:"Camera"})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)(j.a,{})]})}var w=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(e){return Object(a.a)(this,t),console.log("App.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("App.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("App.componentWillUnmount")}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Hello React Pwa"}),Object(d.jsx)("div",{}),Object(d.jsx)(j.d,{children:Object(d.jsxs)(j.b,{exact:!0,path:"/",element:Object(d.jsx)(y,{}),children:[Object(d.jsx)(j.b,{index:!0,element:Object(d.jsx)(h,{})}),Object(d.jsx)(j.b,{path:"page1",element:Object(d.jsx)(m,{})}),Object(d.jsx)(j.b,{path:"page1/:id",element:Object(d.jsx)(f,{})}),Object(d.jsx)(j.b,{path:"page1/me",element:Object(d.jsx)(O,{})}),Object(d.jsx)(j.b,{path:"about",element:Object(d.jsx)(v,{})}),Object(d.jsx)(j.b,{path:"contact",element:Object(d.jsx)(g,{})}),Object(d.jsx)(j.b,{path:"camera",element:Object(d.jsx)(k,{})}),Object(d.jsx)(j.b,{path:"*",element:Object(d.jsx)(C,{})})]})})]})}}]),t}(o.Component),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;t(e),o(e),c(e),i(e),r(e)}))};function D(){var e=Object(j.g)();return Object(d.jsx)(w,{navigate:e})}r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(b.a,{basename:"react-pwa",children:Object(d.jsx)(D,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-pwa","/service-worker.js");W?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):M(n,e)}))}}(),U()}},[[21,1,2]]]);
//# sourceMappingURL=main.16e5e77b.chunk.js.map