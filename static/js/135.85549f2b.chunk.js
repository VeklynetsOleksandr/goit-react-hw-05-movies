"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{135:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var i=t(861),s=t(885),a=t(757),o=t.n(a),r=t(673),c=t(791),l={movieContainer:"MovieDetails_movieContainer__ilr3m",movieImg:"MovieDetails_movieImg__5UJtY",link:"MovieDetails_link__U+v+7",button:"MovieDetails_button__uXZxd"},v=t(87),h=t(689),d=t(997),m=t(184);function u(){var e=(0,c.useState)(null),n=(0,s.Z)(e,2),t=n[0],a=n[1],u=(0,h.UO)().movieId,x=(0,h.s0)(),j=(0,h.TH)(),p=(0,h.bS)("/movies/:movieId/*").pathname.match(/^(\/movies\/\d+)/)[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.TP)(u);case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[u]),(0,m.jsxs)(m.Fragment,{children:[t?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{type:"button",onClick:function(){x(-1)},className:l.button,children:"Go back"}),(0,m.jsxs)("div",{className:l.movieContainer,children:[(0,m.jsx)("div",{className:l.movieImg,children:(0,m.jsx)("img",{src:t.poster_path?d.yA+t.poster_path:"https://bitsofco.de/content/images/2018/12/broken-1.png",alt:t.title,widht:"",height:""})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:t.title}),(0,m.jsxs)("p",{children:["User Score: ","".concat((10*t.vote_average).toFixed(1)),"%"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:"".concat(t.overview)}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:"".concat(t.genres.map((function(e){return e.name})).join(" / "))})]})]})]}):(0,m.jsx)("div",{className:l.notFound,children:"Movie is not found"}),(0,m.jsx)("hr",{}),(0,m.jsx)("p",{children:"Additional information"}),(0,m.jsxs)("nav",{children:[(0,m.jsx)(v.OL,{to:{pathname:"".concat(p,"/cast")},className:l.link,state:{location:j},replace:!0,children:"Cast"}),(0,m.jsx)(v.OL,{to:{pathname:"".concat(p,"/reviews")},className:l.link,state:{location:j},replace:!0,children:"Reviews"})]}),(0,m.jsxs)(c.Suspense,{fallback:(0,m.jsx)(r.Z,{}),children:[(0,m.jsx)(v.rU,{to:"/movies/cast"}),(0,m.jsx)(v.rU,{to:"/movies/reviews"}),(0,m.jsx)(h.j3,{})]})]})}}}]);
//# sourceMappingURL=135.85549f2b.chunk.js.map