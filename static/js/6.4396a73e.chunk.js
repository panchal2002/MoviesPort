(this.webpackJsonpmoviesport=this.webpackJsonpmoviesport||[]).push([[6],{103:function(e,t,i){"use strict";t.a=function(e,t,i){return null==t&&(t=150),null==i&&(i="..."),e.length>t?e.substring(0,t-i.length)+i:e}},108:function(e,t,i){},109:function(e,t,i){},110:function(e,t,i){},111:function(e,t,i){"use strict";var c=i(4),n=i(31),o=(i(2),i(50)),s=i(1),a=["isTVGridLoading","isTVOverviewLoading"];t.a=function(e){return function(t){var i=t.isTVGridLoading,r=t.isTVOverviewLoading,l=Object(n.a)(t,a);return i?Object(s.jsx)(o.a,{}):r?null:Object(s.jsx)(e,Object(c.a)({},l))}}},112:function(e,t,i){"use strict";var c=i(2),n=i.n(c),o=(i(108),i(14)),s=i(15),a=i(17),r=i(16),l=i(33),m=i.n(l),u=(i(109),i(3)),v=(i(110),i(103)),d=i(8),j=i(30),h=i(51),b=i(1),f=Object(d.g)((function(e){var t=e.item,i=e.movies,c=e.tvshow,n=e.history,o=t.title,s=t.overview,a=t.backdrop_path,r=t.name,l=Object(v.a)(s,150," ..read more"),m=i?Object(j.a)(o):null,d=c?Object(j.a)(r):null;return Object(b.jsx)(b.Fragment,{children:a&&Object(b.jsxs)("div",{className:"collection-item",children:[Object(b.jsxs)("div",{onClick:function(){return i?n.push("/movies/".concat(m)):n.push("/tvshows/".concat(d))},children:[Object(b.jsx)("img",{src:"".concat(u.e).concat(u.d).concat(a),alt:"movie",className:"collection-item__movie-image"}),Object(b.jsxs)("div",{className:"collection-item__text",children:[Object(b.jsx)("h1",{className:"collection-item__title",children:o}),Object(b.jsx)("h1",{className:"collection-item__title",children:r}),Object(b.jsx)("span",{className:"collection-item__overview",children:l})]})]}),Object(b.jsx)("div",{className:"collection-item__addtolist",children:Object(b.jsx)(h.a,{item:t})})]})})})),O=i(9),p=i(21),w=i(29),x=i(23),_=i(19),g=i(104),N=i.n(g),L=i(52),k=i.n(L),y=function(e){Object(a.a)(i,e);var t=Object(r.a)(i);function i(){var e;return Object(o.a)(this,i),(e=t.call(this)).onLeftClick=function(){!function(e){var t=e.current,i=parseInt(N()(t).css("margin-left"));console.log(i),window.matchMedia("(min-width: 768px)").matches&&i<0&&N()(t).animate({marginLeft:"+=330px"},"slow"),window.matchMedia("(max-width: 768px)").matches&&i<0&&N()(t).animate({marginLeft:"+=275px"},"slow")}(e.divRef)},e.onRightClick=function(){!function(e){var t=e.current,i=parseInt(N()(t).css("margin-left"));console.log(i),window.matchMedia("(min-width: 768px)").matches&&i>-1650&&N()(t).animate({marginLeft:"-=330px"},"slow"),window.matchMedia("(max-width: 768px)").matches&&i>-1800&&N()(t).animate({marginLeft:"-=275px"},"slow")}(e.divRef)},e.divRef=n.a.createRef(),e}return Object(s.a)(i,[{key:"componentDidMount",value:function(){!function(e){var t=e.querySelector("h1"),i=e.querySelector(".collection-item");i&&i.addEventListener("mouseover",(function(){setTimeout((function(){t.setAttribute("style","opacity:0; ")}),250)})),i&&i.addEventListener("mouseleave",(function(){setTimeout((function(){t.setAttribute("style","opacity:1; ")}),250)}))}(m.a.findDOMNode(this))}},{key:"render",value:function(){var e=this.props,t=e.title,i=e.movieItems,c=e.tvItems,n=e.start,o=e.end,s=e.movies,a=e.tvshow,r=i.slice(n,o),l=c.slice(n,o);return Object(b.jsx)(k.a,{children:Object(b.jsxs)("div",{className:"collection-preview",children:[Object(b.jsx)("h1",{className:"collection-preview__title",children:t.toUpperCase()}),Object(b.jsxs)("div",{className:"collection-preview__box",children:[Object(b.jsx)("span",{className:"collection-preview__left-arrow",children:Object(b.jsx)(_.a,{icon:x.c,className:"collection-preview__left-arrow-icon",onClick:this.onLeftClick})}),Object(b.jsx)("span",{className:"collection-preview__right-arrow",children:Object(b.jsx)(_.a,{icon:x.d,className:"collection-preview__right-arrow-icon",onClick:this.onRightClick})}),Object(b.jsxs)("div",{className:"collection-preview__inner",ref:this.divRef,children:[s?r.map((function(e){return Object(b.jsx)(f,{item:e,movies:s,tvshow:a},e.id)})):null,a?l.map((function(e){return Object(b.jsx)(f,{item:e,movies:s,tvshow:a},e.id)})):null]})]})]})})}}]),i}(n.a.Component),C=Object(O.b)((function(e){return{movieItems:Object(p.e)(e),tvItems:Object(w.e)(e)}}))(y),R=i(10),T=Object(R.a)([function(e){return e.collection}],(function(e){return e.collection}));t.a=Object(O.b)((function(e){return{collection:T(e)}}))((function(e){var t=e.movies,i=e.tvshow,c=e.collection;return Object(b.jsx)("div",{className:"collection-overview",children:c.map((function(e){return Object(b.jsx)(C,{title:e.title,start:e.start,end:e.end,movies:t,tvshow:i},e.id)}))})}))},118:function(e,t,i){"use strict";i.r(t);var c=i(9),n=i(10),o=i(12),s=i(29),a=i(111),r=i(112),l=Object(n.b)({isTVOverviewLoading:s.a}),m=Object(o.c)(Object(c.b)(l),a.a)(r.a);t.default=m}}]);
//# sourceMappingURL=6.4396a73e.chunk.js.map