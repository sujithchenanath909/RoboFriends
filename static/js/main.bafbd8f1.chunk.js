(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),o=(n(13),n(5)),a=n(6),i=n(8),h=n(7),l=(n(3),n(0)),u=function(e){e.searchFeild;var t=e.searchChange,n=e.searchClick;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"tc pa3 ba b--green bg-lightest-blue ",type:"search",placeholder:"search robots",onChange:t,onClick:n})})},b=function(e){return Object(l.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robo",src:"https://robohash.org/".concat(e.id,"?200x200")}),Object(l.jsx)("h2",{children:e.name}),Object(l.jsx)("h3",{children:e.email})]})},d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(l.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(l.jsx)("div",{children:n})},j=(n(15),function(e){return Object(l.jsx)("div",{className:"scroll",children:e.children})}),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))},g=(n(16),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfeild:t.target.value})},e.state={robots:[],searchfeild:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"onsearchClick",value:function(e){console.log("clicked"),console.log(e.target.value)}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfeild.toLowerCase())}));return 0===this.state.robots.length?Object(l.jsx)("h1",{children:"loading.."}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{children:"RoboFriends"}),Object(l.jsx)(u,{searchChange:this.onSearchChange,searchClick:this.onsearchClick}),Object(l.jsx)(j,{children:Object(l.jsx)(d,{robots:t})})]})}}]),n}(c.Component));s.a.render(Object(l.jsx)(g,{}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.bafbd8f1.chunk.js.map