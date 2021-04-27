(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{68:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){},72:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),u=n(12),s=n(13),i=n(16),b=n(14),l=n(4),j=n(6),d=n(8),f=n.n(d),h=n(2),O=Object(h.b)("contacts/fetchContactRequest"),m=Object(h.b)("contacts / fetchContactSuccess"),p=Object(h.b)("contacts/fetchContactError"),C=Object(h.b)("contacts/addContactRequest"),x=Object(h.b)("contacts / addContactSuccess"),g=Object(h.b)("contacts/addContactError"),v=Object(h.b)("contacts/deleteContactRequest"),k=Object(h.b)("contacts / deleteContactSuccess"),y=Object(h.b)("contacts/deleteContactError"),N=Object(h.b)("contacts/changeFilter");f.a.defaults.baseURL="http://localhost:3000/";var I,T,F=function(){return function(t){t(O()),f.a.get("./contacts").then((function(e){var n=e.data;return t(m(n))})).catch((function(e){return t(p(e))}))}},S=function(t,e){return function(n){var c={name:t,number:e};n(C()),f.a.post("/contacts",c).then((function(t){var e=t.data;return n(x(e))})).catch((function(t){return n(g(t))}))}},A=function(t){return function(e){e(v()),f.a.delete("/contacts/".concat(t)).then((function(){return e(k(t))})).catch((function(t){return e(y(t))}))}},E=n(11),_=function(t){return t.contacts.filter},w=function(t){return t.contacts.items},L={getFilter:_,getAllContacts:w,getVisibleContacts:Object(E.a)([w,_],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},q=n(17),z=n.n(q),D=(n(68),n(1)),R=function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.nameInputId=z.a.generate(),t.numberInputId=z.a.generate(),t.findInput=z.a.generate(),t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(l.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.contacts.map((function(t){return t.name})).includes(t.state.name)?alert("".concat(t.state.name," is already in contacts")):(t.props.onSubmit(t.state.name,t.state.number),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("form",{className:"TaskEditor",onSubmit:this.handleSubmit,children:[Object(D.jsx)("label",{className:"TaskEditor_label",htmlFor:this.nameInputId,children:"Name"}),Object(D.jsx)("br",{}),Object(D.jsx)("input",{className:"TaskEditor_input",type:"text",value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.nameInputId}),Object(D.jsx)("br",{}),Object(D.jsx)("label",{className:"TaskEditor_label",htmlFor:this.numberInputId,children:"Number"}),Object(D.jsx)("br",{}),Object(D.jsx)("input",{className:"TaskEditor_input",type:"text",value:this.state.number,name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,id:this.numberInputId}),Object(D.jsx)("br",{}),Object(D.jsx)("button",{className:"TaskEditor_button",type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),J=Object(j.b)((function(t){return{contacts:L.getAllContacts(t)}}),(function(t){return{fetchContacts:function(){return t(F())},onSubmit:function(e,n){return t(S(e,n))}}}))(R),M=(n(70),Object(j.b)((function(t){return{value:L.getFilter(t)}}),(function(t){return{onChangeFilter:function(e){return t(N(e.target.value))}}}))((function(t){var e=t.value,n=t.onChangeFilter;return Object(D.jsxs)("div",{children:[Object(D.jsx)("p",{className:"Filter_text",children:"Find contacts by name"}),Object(D.jsx)("br",{}),Object(D.jsx)("input",{className:"Filter_input",type:"text",value:e,onChange:n})]})}))),Z=(n(71),Object(j.b)((function(t){return{contacts:L.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(A(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(D.jsxs)("ul",{className:"TaskList",children:[" ",e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(D.jsxs)("li",{className:"TaskList_item",children:[Object(D.jsxs)("p",{className:"TaskList_text",children:[c,": ",a]}),Object(D.jsx)("button",{className:"TaskList_button",type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))]})}))),B=(n(72),function(t){Object(i.a)(n,t);var e=Object(b.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h1",{className:"Title",children:"Phonebook"}),Object(D.jsx)(J,{}),Object(D.jsx)("h2",{className:"Title",children:"Contacts"}),Object(D.jsx)(M,{}),Object(D.jsx)(Z,{})]})}}]),n}(c.Component)),V=n(15),P=n(32),U=n.n(P),$=n(7),G=n(3),H=Object(h.c)([],(I={},Object(l.a)(I,m,(function(t,e){return e.payload})),Object(l.a)(I,x,(function(t,e){var n=e.payload;return[].concat(Object(V.a)(t),[n])})),Object(l.a)(I,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),I)),K=Object(h.c)(!1,(T={},Object(l.a)(T,O,(function(){return!0})),Object(l.a)(T,m,(function(){return!1})),Object(l.a)(T,p,(function(){return!1})),Object(l.a)(T,C,(function(){return!0})),Object(l.a)(T,x,(function(){return!1})),Object(l.a)(T,g,(function(){return!1})),Object(l.a)(T,v,(function(){return!0})),Object(l.a)(T,k,(function(){return!1})),Object(l.a)(T,y,(function(){return!1})),T)),Q=Object(h.c)("",Object(l.a)({},N,(function(t,e){return e.payload}))),W=Object(G.c)({items:H,filter:Q,loading:K}),X=[].concat(Object(V.a)(Object(h.d)({serializableCheck:{ignoredActions:[$.a,$.f,$.b,$.c,$.d,$.e]}})),[U.a]),Y=Object(h.a)({reducer:{contacts:W},middleware:X,devTools:!1});n(73);o.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(j.a,{store:Y,children:Object(D.jsx)(B,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.db8d00d8.chunk.js.map