(this["webpackJsonpstolen-dad"]=this["webpackJsonpstolen-dad"]||[]).push([[0],{26:function(e,t,n){e.exports=n(38)},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(21),r=n.n(a),o=(n(31),n(17)),c=n(25),l=n(12),u=n(0),i=n.n(u);n(32);var s=function(){return i.a.createElement("h1",null,"Home")};var m=function(){return i.a.createElement("h1",null,"About Us")},f=n(6),d=n(13);function p(){var e=Object(l.a)(["\n        width:10em;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: space-between;\n        flex: 1;\n      "]);return p=function(){return e},e}var v=function(){var e=d.a.div(p());return i.a.createElement(e,null,i.a.createElement(f.b,{to:"/"},"Home "),i.a.createElement(f.b,{to:"/about"},"About Us "),i.a.createElement(f.b,{to:"/shop"},"Shop Now "))};var E=function(){return i.a.createElement("h1",null,"Page not found!")},h=n(1),b=n(7),g=n.n(b);function w(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;"]);return w=function(){return e},e}function O(){if(g.a&&g.a.currentUser()){var e=g.a.currentUser(),t=e.app_metadata,n=e.created_at,a=e.confirmed_at,r=e.email,c=e.id,l=e.user_metadata;localStorage.setItem("currentOpenSaucedUser",JSON.stringify(Object(o.a)(Object(o.a)({},t),{},{created_at:n,confirmed_at:a,email:r,id:c},l)))}}var S=function(){var e=d.a.div(w()),t=Object(u.useState)(null),n=Object(c.a)(t,2),a=n[0],r=n[1];return Object(u.useEffect)((function(){g.a.init();var e=localStorage.getItem("currentOpenSaucedUser");e?r({user:JSON.parse(e)}):O(),g.a.on("login",(function(e){return r({user:e},O())})),g.a.on("logout",(function(e){return r({user:null},void localStorage.removeItem("currentOpenSaucedUser"))}))})),i.a.createElement(e,null,i.a.createElement("span",null,a),i.a.createElement("button",{onClick:function(){g.a.open()}},"Log in with netlify"),i.a.createElement(v,null),i.a.createElement("div",null,i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/",component:s,exact:!0}),i.a.createElement(h.a,{path:"/about",component:m}),i.a.createElement(h.a,{component:E}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f.a,null,i.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.5f2f44a1.chunk.js.map