(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{H0SL:function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e("cMU6")}])},cMU6:function(a,t,e){"use strict";e.r(t);var n=e("doui"),o=e("q1tI"),l=e.n(o),i=e("EnUn"),s=e("vDqi"),c=e.n(s),r=(e("V4KW"),l.a.createElement);function m(){return r("nav",{style:{position:"absolute",top:"0",width:"100%"},className:"navbar navbar-expand-md navbar-light bg-light"},r("a",{className:"navbar-brand",href:"/"},"Homvery"),r("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r("span",{className:"navbar-toggler-icon"})),r("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r("form",{className:"form-inline my-2 my-lg-0 ml-auto"},r("button",{className:"btn btn-outline-success my-2 my-sm-0",onClick:function(){localStorage.clear(),location.href="/login"}},"Logout"))))}e.d(t,"default",(function(){return b}));var u=l.a.createElement;function b(){var a=Object(i.a)("login",!1),t=Object(n.a)(a,2),e=t[0],l=(t[1],Object(o.useState)("")),s=(l[0],l[1]),r=Object(i.a)("admin",!1),b=Object(n.a)(r,2),d=b[0];b[1];return Object(o.useEffect)((function(){e&&!d||(location.href="/login"),c.a.get("/api/users").then((function(a){console.log(a.data),s(a.data)}))}),[]),u("section",null,u(m,null),u("section",{style:{width:"100vw",textAlign:"center"},className:"text-center vsc-initialized"},u("form",{className:"form-signin"},u("i",{width:"72",height:"72",className:"mb-4 material-icons"},"home"),u("h1",{className:"h3 mb-3 font-weight-normal"},"Hello User !"),u("p",{className:"mt-5 mb-3 text-muted"},"\xa9 2019 - Homvery"))))}}},[["H0SL",0,1]]]);