(this["webpackJsonpchallenge-aerolab"]=this["webpackJsonpchallenge-aerolab"]||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(29),a=c.n(r),o=c(3),i=c(13),l=c.n(i),j={"Content-Type":"application/json",Accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4M2E0OWYxYzA1YTAwMWE5YmUyNzkiLCJpYXQiOjE2MzEwNzQ4ODl9.rWn5BlnvNFgTJxaZs4ApttJe9z9ejphgYzUGc6qw3HQ"},d=l.a.get("https://coding-challenge-api.aerolab.co/products",{headers:j}),u=c(0),b=Object(s.createContext)({}),O=function(e){var t=e.children,c=Object(s.useState)([]),n=Object(o.a)(c,2),r=n[0],a=n[1],i=Object(s.useState)(!1),l=Object(o.a)(i,2),j=l[0],O=l[1];Object(s.useEffect)((function(){!function(){try{d.then((function(e){var t=e.data;a(t),O(!0)})).catch((function(e){return console.log(e)}))}catch(e){console.log(e)}}()}),[]);var p={products:r,laodProducts:j};return Object(u.jsx)(b.Provider,{value:p,children:t})},p=c(10),h={"Content-Type":"application/json",Accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4M2E0OWYxYzA1YTAwMWE5YmUyNzkiLCJpYXQiOjE2MzEwNzQ4ODl9.rWn5BlnvNFgTJxaZs4ApttJe9z9ejphgYzUGc6qw3HQ"},x=l.a.get("https://coding-challenge-api.aerolab.co/user/me",{headers:h}),m=Object(s.createContext)({}),v=function(e){var t=e.children,c=Object(s.useState)({}),n=Object(o.a)(c,2),r=n[0],a=n[1],i=Object(s.useState)(!1),l=Object(o.a)(i,2),j=l[0],d=l[1];Object(s.useEffect)((function(){!function(){try{x.then((function(e){a(e.data),d(!0)})).catch((function(e){return console.log(e)}))}catch(e){console.log(e)}}()}),[]);var b={user:r,loadComplete:j,addPoint:function(){var e;r.points>15e3||(e=1e3,fetch("https://coding-challenge-api.aerolab.co/user/points",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4M2E0OWYxYzA1YTAwMWE5YmUyNzkiLCJpYXQiOjE2MzEwNzQ4ODl9.rWn5BlnvNFgTJxaZs4ApttJe9z9ejphgYzUGc6qw3HQ"},body:JSON.stringify({amount:e})}).then((function(e){return e.json()}))).then((function(e){var t=Object(p.a)(Object(p.a)({},r),{},{points:e["New Points"]});a(t)}))},setUser:a};return Object(u.jsx)(m.Provider,{value:b,children:t})},_=c(19),g=c(2),f=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h1",{children:"Electronics"})})},N=c(14),y="lower_price",C="higher_price",P="most_recent",w=function(e){var t=Object(s.useState)(e),c=Object(o.a)(t,2),n=c[0],r=c[1],a=Object(s.useState)(0),i=Object(o.a)(a,2),l=i[0],j=i[1];return Object(s.useEffect)((function(){var t=e.slice(l,l+16);r(t)}),[l,e]),{productsFiltered:n,currentPage:l,prevPage:function(){l>0&&j(l-16)},nextPage:function(){if(e.length>l+16)return j(l+16)},setCurrentPage:j}},z=c.p+"static/media/arrow-left.e6eb9be1.svg",J=c.p+"static/media/arrow-right.3306c112.svg",I=function(e){var t=e.setFiltered,c=e.products,n=e.filtered,r=e.currentPage,a=e.prevPage,i=e.nextPage,l=e.productsFiltered,j=y,d=C,b=P,O=Object(s.useState)(!1),p=Object(o.a)(O,2),h=p[0],x=p[1];return Object(u.jsxs)("nav",{className:"products-nav",children:[Object(u.jsxs)("div",{className:"products-nav__left",children:[Object(u.jsxs)("p",{className:"products-nav__left__text",children:[0===l.length?0:l.length<16?l.length>16||c.length<16?l.length:l.length+16:r+16," of ",c.length," products"]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"products-nav__left__controls",children:[Object(u.jsx)("p",{onClick:function(){return x(!h)},className:"products-nav__left__controls__menu",children:"Sort by:"}),Object(u.jsxs)("div",{className:"products-nav__left__controls__grid ".concat(h?"products-nav__left__controls__grid-active":""),children:[Object(u.jsx)("button",{className:n===b?"active":"",onClick:function(){t(b),x(!1)},children:"Most recent"}),Object(u.jsx)("button",{className:n===j?"active":"",onClick:function(){t(j),x(!1)},children:"Lower price"}),Object(u.jsx)("button",{className:n===d?"active":"",onClick:function(){t(d),x(!1)},children:"Highest price"})]})]})]}),Object(u.jsxs)("div",{className:"products-nav__move-pages",children:[0!==r&&Object(u.jsx)("img",{src:z,alt:"arrow-left",onClick:a}),c.length>16&&Object(u.jsx)("img",{src:J,alt:"arrow-right",onClick:i})]})]})},k=c.p+"static/media/coin.b8bc711d.svg",E=function(e){var t=e.product,c=Object(s.useContext)(m),n=c.user,r=c.setUser,a=Object(s.useState)(!1),i=Object(o.a)(a,2),d=i[0],b=i[1],O=Object(s.useState)(!0),h=Object(o.a)(O,2),x=h[0],v=h[1];Object(s.useEffect)((function(){n.points>t.cost?b(!0):b(!1)}),[n,t]);var _=function(e){var t;v(!1),null===(t=function(e){try{return l.a.post("https://coding-challenge-api.aerolab.co/redeem",{productId:e},{headers:j})}catch(t){console.log(t)}}(e._id))||void 0===t||t.then((function(){r(Object(p.a)(Object(p.a)({},n),{},{points:n.points-e.cost,redeemHistory:[].concat(Object(N.a)(n.redeemHistory),[e])})),v(!0)})).catch((function(){return v(!0)}))};return Object(u.jsxs)("div",{className:"product-card",style:{cursor:d?"pointer":void 0},children:[d?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"product-card__available"}),Object(u.jsxs)("div",{className:"product-card__hover",children:[Object(u.jsxs)("div",{className:"product-card__hover__price",children:[Object(u.jsx)("h1",{children:t.cost}),Object(u.jsx)("img",{src:k,alt:"coin"})]}),Object(u.jsx)("button",{onClick:function(){return _(t)},disabled:!x,style:{cursor:x?void 0:"default"},children:x?"Redeen now":Object(u.jsx)("div",{className:"loader product-card__loader"})})]})]}):Object(u.jsxs)("div",{className:"product-card__not-available",children:[Object(u.jsxs)("p",{children:["You need ",t.cost-n.points]}),Object(u.jsx)("img",{src:k,alt:"coin"})]}),Object(u.jsxs)("div",{className:"product-card__main",children:[Object(u.jsx)("img",{src:t.img.url,alt:""}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{className:"product-card__main__category",children:t.category}),Object(u.jsx)("p",{className:"product-card__main__name",children:t.name})]})]})},M=function(e){var t=e.productsFiltered;return e.laodProducts?0===t.length?Object(u.jsx)("div",{className:"products-grid",children:Object(u.jsx)("p",{children:"Not found products"})}):Object(u.jsx)("div",{className:"products-grid",children:t.map((function(e){return Object(u.jsx)(E,{product:e},e._id)}))}):Object(u.jsx)("div",{className:"products-grid",children:Object(u.jsx)("div",{className:"loader",children:"Loading..."})})},S=function(){var e=Object(s.useContext)(b),t=e.products,c=e.laodProducts,n=Object(s.useState)(t),r=Object(o.a)(n,2),a=r[0],i=r[1],l=Object(s.useState)(""),j=Object(o.a)(l,2),d=j[0],O=j[1],p=Object(s.useState)(P),h=Object(o.a)(p,2),x=h[0],m=h[1],v=Object(s.useState)([]),_=Object(o.a)(v,2),g=_[0],f=_[1];Object(s.useEffect)((function(){f(a),Y(0),m(P)}),[t,d,a]),Object(s.useMemo)((function(){if(0!==d.length){var e=t.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));return i(e)}i(t)}),[d,t]),Object(s.useMemo)((function(){switch(x){case y:var e=Object(N.a)(a).sort((function(e,t){return e.cost-t.cost}));return f(e);case C:var t=Object(N.a)(a).sort((function(e,t){return t.cost-e.cost}));return f(t);default:return f(a)}}),[x,a,d]);var z=w(g),J=z.productsFiltered,k=z.currentPage,E=z.prevPage,S=z.nextPage,Y=z.setCurrentPage;return Object(u.jsxs)("div",{className:"product-section",children:[Object(u.jsx)(I,{nextPage:S,prevPage:E,currentPage:k,products:a,productsFiltered:J,filtered:x,setFiltered:m}),Object(u.jsx)("input",{className:"product-section__search",placeholder:"Search products...",value:d,onChange:function(e){return O(e.target.value)}}),Object(u.jsx)("hr",{className:"product-section__hr"}),Object(u.jsx)(M,{productsFiltered:J,laodProducts:c})]})},Y=function(){return Object(s.useContext)(m).loadComplete?Object(u.jsxs)("main",{className:"Content",children:[Object(u.jsx)(f,{}),Object(u.jsx)(S,{})]}):Object(u.jsx)("div",{className:"loader",children:"Loading..."})},A=c.p+"static/media/aerolab-logo.0a8fb170.svg",F=function(){var e=Object(g.g)(),t=Object(s.useContext)(m),c=t.user,n=t.addPoint,r=t.loadComplete,a=c.name,o=c.points;return r?Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsx)("img",{src:A,alt:"aerolab-logo",onClick:function(){e.push("/")}}),Object(u.jsxs)("section",{className:"navbar__section",children:[Object(u.jsx)("p",{className:"navbar__section__user",onClick:function(){e.push("/user")},title:"history",children:a}),Object(u.jsxs)("div",{className:"navbar__section__points",onClick:n,title:"Add 1000 points",children:[Object(u.jsx)("p",{children:o}),Object(u.jsx)("img",{src:k,alt:"coin-icon"})]})]})]}):Object(u.jsx)("div",{})},T=function(e){var t,c=e.product;return Object(u.jsxs)("div",{className:"history-product",children:[Object(u.jsx)("img",{src:c.img.url,alt:c.name}),Object(u.jsxs)("div",{className:"history-product__content",children:[Object(u.jsx)("h2",{className:"history-product__content__name",children:c.name}),Object(u.jsx)("p",{className:"history-product__content__category",children:c.category}),Object(u.jsx)("p",{className:"history-product__content__category",children:null===(t=c.createDate)||void 0===t?void 0:t.slice(0,10)}),Object(u.jsxs)("p",{className:"history-product__content__price",children:["Price: ",Object(u.jsx)("span",{className:"c-primary",children:c.cost})]})]})]})},Q=function(){var e=Object(s.useContext)(m),t=e.user,c=e.loadComplete,n=Object(s.useState)([]),r=Object(o.a)(n,2),a=r[0],i=r[1];Object(s.useEffect)((function(){c&&i(t.redeemHistory.reverse())}),[t,c]);var l=w(a),j=l.productsFiltered,d=l.prevPage,b=l.nextPage;return c?Object(u.jsxs)("div",{className:"history",children:[Object(u.jsx)("h1",{className:"history__title",children:"Remeen history"}),Object(u.jsx)("div",{className:"history__grid",children:void 0!==a?j.reverse().map((function(e,t){return Object(u.jsx)(T,{product:e},t)})):Object(u.jsx)("p",{children:"Not products"})}),Object(u.jsxs)("div",{className:"history__controls",children:[Object(u.jsx)("img",{src:z,onClick:d,alt:"arrowLeft"}),Object(u.jsx)("img",{src:J,onClick:b,alt:"arrowRight"})]})]}):Object(u.jsx)("div",{className:"loader",children:"Loading..."})},W=function(){return Object(u.jsxs)(_.a,{children:[Object(u.jsx)(F,{}),Object(u.jsxs)(g.d,{children:[Object(u.jsx)(g.b,{exact:!0,path:"/user",component:Q}),Object(u.jsx)(g.b,{exact:!0,path:"/",component:Y}),Object(u.jsx)(g.a,{to:"/"})]})]})},U=function(){return Object(u.jsx)(v,{children:Object(u.jsx)(O,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(W,{})})})})};c(64),c(65);a.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(U,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d34b5ff0.chunk.js.map