(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(t,e,n){t.exports=n(96)},60:function(t,e,n){},96:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(44),c=n.n(r);n(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(6),l=n(4),i=n(8),u=n(50),p=n.n(u),m=n(12),d=n(24),h=n(54),b=n(19),f=n.n(b),v="fetch_posts",y="create_post",g="fetch_single_post",E="delete_post",j="http://reduxblog.herokuapp.com/api/",O="?key=Mariusz071";var k=n(18),w=n.n(k),P=Object(l.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return w.a.mapKeys(e.payload.data,"id");case g:return e.payload.data,Object(h.a)({},t,Object(d.a)({},e.payload.data.id,e.payload.data));case E:return w.a.omit(t,e.payload);default:return t}},form:m.b}),N=n(13),C=n(14),S=n(16),x=n(15),D=n(17),F=function(t){function e(){return Object(N.a)(this,e),Object(S.a)(this,Object(x.a)(e).apply(this,arguments))}return Object(D.a)(e,t),Object(C.a)(e,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"renderPosts",value:function(){return w.a.map(this.props.posts,function(t){return o.a.createElement("li",{className:"list-group-item",key:t.id},o.a.createElement(i.b,{to:"/posts/".concat(t.id)},t.title))})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"text-right"},o.a.createElement(i.b,{className:"btn btn-primary",to:"/posts/new"},"Add a Post")),o.a.createElement("h3",null,"Posts"),o.a.createElement("ul",{className:"list-group"},this.renderPosts()))}}]),e}(a.Component);var _=Object(s.b)(function(t){return{posts:t.posts}},{fetchPosts:function(){var t=f.a.get("".concat(j,"/posts").concat(O));return{type:v,payload:t}}})(F),B=function(t){function e(){return Object(N.a)(this,e),Object(S.a)(this,Object(x.a)(e).apply(this,arguments))}return Object(D.a)(e,t),Object(C.a)(e,[{key:"renderField",value:function(t){var e=t.meta,n=e.touched,a=e.error,r="form-control ".concat(n&&a?"is-invalid":"");return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,t.label),o.a.createElement("input",Object.assign({className:r,type:"text"},t.input)),o.a.createElement("div",{className:"text-danger"},n?a:""))}},{key:"onSubmit",value:function(t){var e=this;this.props.createPost(t,function(){e.props.history.push("/")})}},{key:"render",value:function(){var t=this.props.handleSubmit;return o.a.createElement("form",{onSubmit:t(this.onSubmit.bind(this))},o.a.createElement(m.a,{name:"title",component:this.renderField,label:"Title"}),o.a.createElement(m.a,{name:"categories",component:this.renderField,label:"Categories"}),o.a.createElement(m.a,{name:"content",component:this.renderField,label:"Post Content"}),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit your post"),o.a.createElement(i.b,{to:"/",className:"btn btn-danger"},"Cancel"))}}]),e}(a.Component);var M=Object(m.c)({validate:function(t){var e={};return(!t.title||t.title.length<3)&&(e.title="Enter a valid title! (must be longer than 3 characters)"),(!t.categories||t.categories.length<3)&&(e.categories="Enter a valid category! (must be longer than 3 characters)"),(!t.content||t.content.length<6)&&(e.content="Enter some content! (at least 6 characters)"),e},form:"PostsNewForm"})(Object(s.b)(null,{createPost:function(t,e){var n=f.a.post("".concat(j,"/posts").concat(O),t).then(function(){return e()});return{type:y,payload:n}}})(B)),H=function(t){function e(){return Object(N.a)(this,e),Object(S.a)(this,Object(x.a)(e).apply(this,arguments))}return Object(D.a)(e,t),Object(C.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;this.props.fetchSinglePost(t)}},{key:"onClickDeleteHandler",value:function(t){var e=this,n=this.props.match.params.id;this.props.deletePost(n,function(){e.props.history.push("/")})}},{key:"render",value:function(){var t=this,e=this.props.post;return e?o.a.createElement("div",null,o.a.createElement(i.b,{to:"/",className:"btn btn-warning"},"Back to main page"),o.a.createElement("button",{className:"btn btn-danger",onClick:function(e){return t.onClickDeleteHandler(e)}},"Delete post"),o.a.createElement("h3",null,e.title),o.a.createElement("h6",null,"Categories: ",e.categories),o.a.createElement("p",null,e.content)):o.a.createElement("div",null,"Loading post...")}}]),e}(a.Component);var J=Object(s.b)(function(t,e){return{post:t.posts[e.match.params.id]}},{fetchSinglePost:function(t){var e=f.a.get("".concat(j,"/posts/").concat(t).concat(O));return{type:g,payload:e}},deletePost:function(t,e){return f.a.delete("".concat(j,"/posts/").concat(t).concat(O)).then(function(){return e()}),{type:E,payload:t}}})(H);"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()});var W=Object(l.a)(p.a)(l.d);c.a.render(o.a.createElement(s.a,{store:W(P)},o.a.createElement(i.a,null,o.a.createElement("div",null,o.a.createElement(i.d,null,o.a.createElement(i.c,{path:"/posts/new",component:M}),o.a.createElement(i.c,{path:"/posts/:id",component:J}),o.a.createElement(i.c,{path:"/",component:_}))))),document.getElementById("root"))}},[[55,2,1]]]);
//# sourceMappingURL=main.78a8eed1.chunk.js.map