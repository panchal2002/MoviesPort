(this.webpackJsonpmoviesport=this.webpackJsonpmoviesport||[]).push([[7],{103:function(e,t,i){"use strict";t.a=function(e,t,i){return null==t&&(t=150),null==i&&(i="..."),e.length>t?e.substring(0,t-i.length)+i:e}},105:function(e,t,i){"use strict";var c=i(4),n=i(31),r=(i(2),i(50)),s=i(1),a=["isMovieGridLoading","isMovieOverviewLoading"];t.a=function(e){return function(t){var i=t.isMovieGridLoading,o=t.isMovieOverviewLoading,l=Object(n.a)(t,a);return i?Object(s.jsx)(r.a,{}):o?null:Object(s.jsx)(e,Object(c.a)({},l))}}},106:function(e,t,i){},107:function(e,t,i){},113:function(e,t,i){"use strict";var c=i(14),n=i(15),r=i(17),s=i(16),a=i(2),o=i.n(a),l=(i(106),i(3)),d=(i(107),i(51)),m=i(103),j=i(1),u=function(e){var t=e.item,i=(e.listItems,e.addItem,t.title),c=t.overview,n=t.backdrop_path,r=t.poster_path,s=t.name,a=Object(m.a)(c,200," ...");return Object(j.jsxs)("div",{className:"grid-item",children:[Object(j.jsx)("img",{src:"".concat(l.e).concat(l.c).concat(n),alt:"movie",className:"grid-item__img"}),Object(j.jsx)("img",{src:"".concat(l.e).concat(l.c).concat(r),alt:"movie",className:"grid-item__img grid-item__mobile-img"}),Object(j.jsxs)("div",{className:"".concat(i?"grid-item__movie-text":"grid-item__tv-text"),children:[Object(j.jsx)("h1",{className:"grid-item__title",children:i}),Object(j.jsx)("h1",{className:"grid-item__title",children:s}),Object(j.jsx)("span",{className:"grid-item__overview",children:a}),Object(j.jsx)(d.a,{item:t})]}),Object(j.jsx)("div",{className:"grid-item__fade"})]})},v=i(9),b=i(21),g=i(29),O=i(23),f=i(19),_=i(104),h=i.n(_),x=function(e){Object(r.a)(i,e);var t=Object(s.a)(i);function i(){var e;return Object(c.a)(this,i),(e=t.call(this)).gridRef=o.a.createRef(),e}return Object(n.a)(i,[{key:"render",value:function(){var e=this,t=this.props,i=t.movieGridItems,c=t.tvShowGridItems,n=t.movies,r=t.tvshow;return Object(j.jsxs)("div",{className:"collection-grid",children:[Object(j.jsx)("span",{className:"collection-grid__left-arrow",children:Object(j.jsx)(f.a,{icon:O.c,className:"collection-grid__left-arrow--icon",onClick:function(){return function(e){var t=e.current,i=window.innerWidth+"px";console.log(i),h()(t).animate({scrollLeft:"-="+i},"slow")}(e.gridRef)}})}),Object(j.jsxs)("div",{className:"collection-grid__outer",ref:this.gridRef,children:[Object(j.jsxs)("div",{className:"collection-grid__inner",children:[n?i.map((function(e){return Object(j.jsx)(u,{item:e},e.id)})):null,r?c.map((function(e){return Object(j.jsx)(u,{item:e},e.id)})):null]}),Object(j.jsx)("span",{className:"collection-grid__right-arrow",children:Object(j.jsx)(f.a,{icon:O.d,className:"collection-grid__right-arrow--icon",onClick:function(){return function(e){var t=e.current,i=window.innerWidth+"px";h()(t).animate({scrollLeft:"+="+i},"slow")}(e.gridRef)}})})]})]})}}]),i}(o.a.Component);t.a=Object(v.b)((function(e){return{movieGridItems:Object(b.d)(e),tvShowGridItems:Object(g.d)(e)}}))(x)},115:function(e,t,i){"use strict";i.r(t);var c=i(9),n=i(10),r=i(12),s=i(21),a=i(105),o=i(113),l=Object(n.b)({isMovieGridLoading:s.a}),d=Object(r.c)(Object(c.b)(l),a.a)(o.a);t.default=d}}]);
//# sourceMappingURL=7.abe2ca77.chunk.js.map