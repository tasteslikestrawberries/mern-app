(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(22),s=c.n(a),j=(c(29),c(1)),l=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h1",{children:"My MERN App"})})},i=c(7),o=c(8),u=c.n(o),h=c(56),b=c(55),d=c(23),O=c(9),x=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(i.a)(a,2),l=s[0],o=s[1],x=Object(n.useState)(""),m=Object(i.a)(x,2),p=m[0],f=m[1],g=function(e){e.preventDefault();var t={name:c,surname:l,email:p};u.a.post("http://localhost:4000/users/new",t).then((function(e){r(""),o(""),f(""),console.log(e)})).catch((function(e){alert("Posty went wrong!")}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h.a,{className:"form",onSubmit:g,autoComplete:"false",children:Object(j.jsxs)(b.a,{className:"row",children:[Object(j.jsx)(d.a,{className:"col",xs:"auto",children:Object(j.jsx)(h.a.Control,{type:"text",placeholder:"Type your name",value:c,onChange:function(e){return r(e.target.value)},required:!0})}),Object(j.jsx)(d.a,{className:"col",xs:"auto",children:Object(j.jsx)(h.a.Control,{type:"text",placeholder:"Type your surname",value:l,onChange:function(e){return o(e.target.value)},required:!0})}),Object(j.jsx)(d.a,{className:"col",xs:"auto",children:Object(j.jsx)(h.a.Control,{type:"text",placeholder:"Type your email",value:p,onChange:function(e){return f(e.target.value)},required:!0})})]})}),Object(j.jsx)(O.a,{className:"createBtn",onClick:g,type:"submit",variant:"light",size:"lg",children:"Create user!"})]})},m=c(24),p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){u.a.get("http://localhost:4000/users/get").then((function(e){r(e.data)})).catch((function(e){alert("Getty went wrong!")}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(m.a,{className:"table",size:"sm",striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Surname"}),Object(j.jsx)("th",{children:"Email"}),Object(j.jsx)("th",{children:"Action"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e,t){return Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:[t+1,"."]}),Object(j.jsx)("td",{children:e.name}),Object(j.jsx)("td",{children:e.surname}),Object(j.jsx)("td",{children:e.email}),Object(j.jsx)("td",{children:Object(j.jsx)(O.a,{className:"text-center",variant:"light",size:"sm",children:"Delete"})})]},t)}))})]})})};c(52);var f=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(x,{}),Object(j.jsx)(p,{})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.a378865e.chunk.js.map