(this["webpackJsonpreact-pwa"]=this["webpackJsonpreact-pwa"]||[]).push([[0],{18:function(e,n,t){},19:function(e,n,t){},21:function(e,n,t){},22:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),a=t(13),i=t.n(a),r=(t(18),t(3)),l=t(4),s=t(6),u=t(5),j=(t(19),t(2)),d=t(8),h=t(0),b=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(r.a)(this,t),console.log("Home.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Home.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Home.componentWillUnmount")}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Home"})})}}]),t}(o.Component),m=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(r.a)(this,t),console.log("Page1.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Page1.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Page1.componentWillUnmount")}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Page1"})})}}]),t}(o.Component),O=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(r.a)(this,t),console.log("Me.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Me.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Me.componentWillUnmount")}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Me"})})}}]),t}(o.Component),f=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var o;Object(r.a)(this,t),console.log("Others.constructor");var c=(o=n.call(this,e)).props.params.id;return o.is=c,console.log(c),o}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Others.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Others.componentWillUnmount")}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("h1",{children:["Others ",this.is]})})}}]),t}(o.Component);function v(){var e=Object(j.h)();return Object(h.jsx)(f,{params:e})}var g=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(r.a)(this,t),console.log("About.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("About.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("About.componentWillUnmount")}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"About"})})}}]),t}(o.Component),p=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(r.a)(this,t),console.log("Contact.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Contact.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Contact.componentWillUnmount")}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Contact"})})}}]),t}(o.Component),x=t(10),k=(t(21),function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var o;return Object(r.a)(this,t),console.log("Camera.constructor"),(o=n.call(this,e)).state={imageLoaded:!1},o.inputFile=c.a.createRef(),o.imgRef=c.a.createRef(),o.onChange=o.onChange.bind(Object(x.a)(o)),o.onClickChoosePhoto=o.onClickChoosePhoto.bind(Object(x.a)(o)),o}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("Camera.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("Camera.componentWillUnmount")}},{key:"onChange",value:function(e){var n=this;if(console.log("onChange"),console.dir(e,{depth:null}),e.target.files.length){var t=e.target.files[0],o=new FileReader;o.addEventListener("load",(function(e){var t=o.result;n.imgRef.current.src=t,n.imgRef.current.width=300,n.imgRef.current.height=300,n.imgRef.current.classList.contains("camera--hidden")&&n.imgRef.current.classList.remove("camera--hidden")})),o.readAsDataURL(t)}}},{key:"onClickChoosePhoto",value:function(e){this.inputFile.current.click()}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Camera"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"file",className:"camera--hidden",ref:this.inputFile,onChange:this.onChange,accept:"image/png , image/jpeg"}),Object(h.jsx)("button",{onClick:this.onClickChoosePhoto,children:"choose photo"})]}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"camera--img camera--hidden",alt:"img",ref:this.imgRef})})]})}}]),t}(o.Component)),C=(t(22),function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var o;return Object(r.a)(this,t),console.log("Camera2.constructor"),(o=n.call(this,e)).videoRef=c.a.createRef(),o.canvasRef=c.a.createRef(),o}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("Camera2.componentDidMount"),this.canvasRef.current.width=640,this.canvasRef.current.height=480,this.videoRef.current.addEventListener("loadedmetadata",(function(e){console.log("loadedmetadata")})),this.videoRef.current.addEventListener("loadeddata",(function(e){console.log("loadeddata")})),navigator.mediaDevices.getUserMedia({audio:!1,video:!0}).then((function(n){console.log("then"),console.dir(n,{depth:null}),e.videoRef.current.srcObj=n,e.videoRef.current.play()})).catch((function(e){console.log(e)}))}},{key:"componentWillUnmount",value:function(){console.log("Camera2.componentWillUnmount")}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Camera2"}),Object(h.jsx)("div",{children:Object(h.jsx)("video",{className:"camer2--video",ref:this.videoRef,autoPlay:!0})}),Object(h.jsx)("div",{children:Object(h.jsx)("canvas",{className:"camer2--canvas camer2--hidden",ref:this.canvasRef})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{children:"\u30b7\u30e3\u30c3\u30bf\u30fc"}),Object(h.jsx)("button",{children:"\u64ae\u308a\u76f4\u3057"})]})]})}}]),t}(o.Component)),y=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(r.a)(this,t),console.log("NotFound.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("NotFound.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("NotFound.componentWillUnmount")}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"NotFound"}),Object(h.jsx)("p",{children:Object(h.jsx)(d.b,{to:"/",children:"Go to the home page"})})]})}}]),t}(o.Component);function w(){var e=Object(j.g)(),n=function(n){"home"===n.target.name?e("/"):"page1"===n.target.name?e("/page1"):"about"===n.target.name?e("/about"):"contact"===n.target.name?e("/contact"):"camera"===n.target.name?e("/camera"):"camera2"===n.target.name&&e("/camera2")};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("nav",{children:[Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/page1",children:"Page1"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/contact",children:"Contact"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/camera",children:"Camera"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/camera2",children:"Camera2"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.b,{to:"/nothing-here",children:"Nothing Here"})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:n,name:"home",children:"Home"}),Object(h.jsx)("button",{onClick:n,name:"page1",children:"Page1"}),Object(h.jsx)("button",{onClick:n,name:"about",children:"About"}),Object(h.jsx)("button",{onClick:n,name:"contact",children:"Contact"}),Object(h.jsx)("button",{onClick:n,name:"camera",children:"Camera"}),Object(h.jsx)("button",{onClick:n,name:"camera2",children:"Camera2"})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)(j.a,{})]})}var W=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){return Object(r.a)(this,t),console.log("App.constructor"),n.call(this,e)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("App.componentDidMount")}},{key:"componentWillUnmount",value:function(){console.log("App.componentWillUnmount")}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Hello React Pwa"}),Object(h.jsx)("div",{}),Object(h.jsx)(j.d,{children:Object(h.jsxs)(j.b,{exact:!0,path:"/",element:Object(h.jsx)(w,{}),children:[Object(h.jsx)(j.b,{index:!0,element:Object(h.jsx)(b,{})}),Object(h.jsx)(j.b,{path:"page1",element:Object(h.jsx)(m,{})}),Object(h.jsx)(j.b,{path:"page1/:id",element:Object(h.jsx)(v,{})}),Object(h.jsx)(j.b,{path:"page1/me",element:Object(h.jsx)(O,{})}),Object(h.jsx)(j.b,{path:"about",element:Object(h.jsx)(g,{})}),Object(h.jsx)(j.b,{path:"contact",element:Object(h.jsx)(p,{})}),Object(h.jsx)(j.b,{path:"camera",element:Object(h.jsx)(k,{})}),Object(h.jsx)(j.b,{path:"camera2",element:Object(h.jsx)(C,{})}),Object(h.jsx)(j.b,{path:"*",element:Object(h.jsx)(y,{})})]})})]})}}]),t}(o.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),o(e),c(e),a(e),i(e)}))};function D(){var e=Object(j.g)();return Object(h.jsx)(W,{navigate:e})}i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(d.a,{basename:"react-pwa",children:Object(h.jsx)(D,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/react-pwa","/service-worker.js");M?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(n,e)}))}}(),U()}},[[23,1,2]]]);
//# sourceMappingURL=main.4ac2ad76.chunk.js.map