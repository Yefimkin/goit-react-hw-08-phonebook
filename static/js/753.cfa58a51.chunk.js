"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[753],{6753:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=n(885),r=n(2791),o=n(9434),i=n(1538),s=n(826),c=n(5984),u=n(4714),l=n(8174),d=n(2859),m=n(184),f=function(){var t=(0,r.useState)(""),e=(0,a.Z)(t,2),n=e[0],f=e[1],h=(0,r.useState)(""),p=(0,a.Z)(h,2),_=p[0],x=p[1],b=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":f(a);break;case"number":x(a)}},g=(0,o.I0)(),v=(0,o.v9)(i.K),C=v.items,j=v.addingLoader,w=function(t,e,n){if(function(t,e){return C.find((function(n){return n.name.toLocaleLowerCase()===t.toLocaleLowerCase()||n.number===e}))}(e,n))return l.Am.error("".concat(e," ").concat(n," is already in Phonebook"));g((0,s.uK)({id:t,name:e,number:n})),f(""),x("")},N=(0,c.x0)(),y=(0,c.x0)();return(0,m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),w((0,c.x0)(),n,_)},children:[(0,m.jsx)("label",{className:d.Z.form,htmlFor:N,children:"Name"}),(0,m.jsx)("input",{id:N,onChange:b,value:n,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:d.Z.input}),(0,m.jsx)("label",{className:d.Z.form,htmlFor:y,children:"Number"}),(0,m.jsx)("input",{id:y,onChange:b,value:_,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:d.Z.input}),j?(0,m.jsx)(u.a,{}):(0,m.jsx)("button",{type:"submit",className:d.Z.addButton,disabled:!_||!n,children:"Add contact"})]})},h=n(6895),p="ContactList_list__cwWB8",_="ContactItem_contact__f9iqC",x="ContactItem_deleteButton__emLr1",b=function(t){var e=t.data,n=(0,o.I0)(),a=e.id,r=e.name,i=e.number;return(0,m.jsxs)("li",{className:_,children:[(0,m.jsxs)("p",{children:[r,": ",i]}),(0,m.jsx)("button",{type:"button",id:a,onClick:function(t){return function(t,e){e===t.target.id&&(t.target.textContent="Deleting...",t.target.setAttribute("disabled","true")),n((0,s.GK)(e))}(t,a)},className:x,children:"Delete"})]})},g=function(){var t=(0,o.I0)();(0,r.useEffect)((function(){t((0,s.yF)())}),[t]);var e=(0,o.v9)(i.K),n=e.items,a=e.error,c=e.isLoading,l=(0,o.v9)(h.zK),d=l?n.filter((function(t){return t.name.toLocaleLowerCase().includes(l.toLocaleLowerCase())})):n;return(0,m.jsxs)("ul",{className:p,children:[c?(0,m.jsx)("div",{children:(0,m.jsx)(u.a,{})}):d.map((function(t){return(0,m.jsx)(b,{data:t},t.id)})),a&&(0,m.jsx)("div",{children:"Something went wrong, please, try again"})]})},v="Filter_input__af3YY";var C=function(){var t=(0,o.I0)(),e=(0,o.v9)((function(t){return t.filter})),n=(0,c.x0)();return(0,m.jsxs)("label",{htmlFor:n,children:["Find contacts by name:",(0,m.jsx)("input",{id:n,onChange:function(e){t((0,h.Tv)(e.currentTarget.value.toLowerCase()))},value:e,type:"text",name:"filter",className:v})]})},j="Application_title__O+NBz",w=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h1",{className:j,children:"Phonebook"}),(0,m.jsx)(f,{}),(0,m.jsx)("h2",{className:j,children:"Contacts"}),(0,m.jsx)(C,{}),(0,m.jsx)(g,{})]})}},2859:function(t,e){e.Z={form:"ContactForm_form__pX6Wt",input:"ContactForm_input__pMd-e",addButton:"ContactForm_addButton__ciT-z","glowing-button-85":"ContactForm_glowing-button-85__A35mE"}},5984:function(t,e,n){n.d(e,{x0:function(){return a}});var a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=753.cfa58a51.chunk.js.map