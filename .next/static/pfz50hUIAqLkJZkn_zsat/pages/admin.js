(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Egov:function(a,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return t("hp3m")}])},h1bP:function(a,n,t){"use strict";t.d(n,"a",(function(){return i}));var e=t("q1tI"),o=t.n(e).a.createElement;function i(){return o("nav",{style:{position:"absolute",top:"0",width:"100%"},className:"navbar navbar-expand-md navbar-light bg-light"},o("a",{className:"navbar-brand",href:"/admin"},"Homvery"),o("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o("span",{className:"navbar-toggler-icon"})),o("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o("form",{className:"form-inline my-2 my-lg-0 ml-auto"},o("button",{className:"btn btn-outline-success my-2 my-sm-0",onClick:function(){localStorage.clear(),location.href="/admin/login"}},"Logout"))))}},hp3m:function(a,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return u}));var e=t("doui"),o=t("q1tI"),i=t.n(o),s=t("EnUn"),r=t("vDqi"),c=t.n(r),l=(t("V4KW"),t("h1bP")),m=i.a.createElement;function u(){var a=Object(s.a)("login",!1),n=Object(e.a)(a,2),t=n[0],i=(n[1],Object(s.a)("admin",!1)),r=Object(e.a)(i,2),u=r[0],d=(r[1],Object(o.useState)("")),b=d[0],g=d[1];return Object(o.useEffect)((function(){u&&t||(location.href="/admin/login"),c.a.get("/api/users").then((function(a){console.log(a.data),g(a.data)}))}),[]),m("section",null,m(l.a,null),m("section",{style:{width:"100vw",textAlign:"center"},className:"text-center vsc-initialized"},m("form",{className:"form-signin"},m("i",{width:"72",height:"72",className:"mb-4 material-icons"},"home"),m("h1",{className:"h3 mb-3 font-weight-normal"},"Users"),b?b.map((function(a,n){return m("div",{key:n},m("a",{href:"/admin/tasks?id=".concat(n)},a.phone))})):"Loading ...",m("p",{className:"mt-5 mb-3 text-muted"},"\xa9 2019 - Homvery"))))}}},[["Egov",0,1]]]);