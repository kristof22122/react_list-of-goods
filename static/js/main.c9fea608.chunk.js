(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(4),r=s.n(n),i=s(3),o=s(5),a=s(6),c=s(8),l=s(7),b=s(1),u=s.n(b),h=(s(13),s(14),s(0)),d=function(t){var e=t.goods;return Object(h.jsx)("ul",{className:"list-group",children:e.map((function(t){return Object(h.jsx)("li",{className:"list-group-item list-group-item-primary",children:t},t)}))})},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(c.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={isVisible:!0,isReversed:!1,sortBy:"",goodsList:[].concat(p)},t.showGoods=function(){t.setState({isVisible:!1})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.getVisibleGoods=function(){var e=t.state,s=e.isReversed,n=e.goodsList,r=e.sortBy,o=n;return r&&(o=Object(i.a)(o).sort((function(t,e){switch(r){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}}))),s&&(o=Object(i.a)(o).reverse()),o},t.sortByAlphabetically=function(){t.setState({sortBy:"alphabet"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.reset=function(){t.setState({isReversed:!1,sortBy:"",goodsList:[].concat(p)})},t}return Object(a.a)(s,[{key:"render",value:function(){var t=this.state.isVisible,e=this.getVisibleGoods();return Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsxs)("div",{className:"App",children:[t&&Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:this.showGoods,children:"Start"}),!t&&Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"d-grid gap-2 col-6 mx-auto",children:[Object(h.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.sortByAlphabetically,children:"Sort alphabetically"}),Object(h.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.reset,children:"Reset"}),Object(h.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.sortByLength,children:"Sort by length"})]}),0!==e.length&&Object(h.jsx)(d,{goods:e})]})]})})}}]),s}(u.a.Component);r.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c9fea608.chunk.js.map