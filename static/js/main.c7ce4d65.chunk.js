(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[1],{138:function(e,t,n){e.exports=n(226)},143:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),i=n(44),u=n.n(i),c=n(20),s=n(25),o=n(35),l=n(34),f=(n(143),n(6)),d=n(8),p=n.n(d),m=n(13),b=n(83),g=n.n(b),h=n(66),v=function(e){return r.a.createElement("div",{className:g.a.name},r.a.createElement(h.a,{img:e.img}),e.name)},E=function(e){var t=e.friends.slice(0,3).map((function(e){return r.a.createElement(v,{name:e.name,key:e.id,id:e.id,img:e.img})}));return r.a.createElement("nav",{className:p.a.nav},r.a.createElement("div",{className:p.a.item},r.a.createElement(m.b,{to:"/profile",activeClassName:p.a.active},"Profile")),r.a.createElement("div",{className:p.a.item},r.a.createElement(m.b,{to:"/dialogs",activeClassName:p.a.active},"Messages")),r.a.createElement("div",{className:p.a.item},r.a.createElement(m.b,{to:"/users",activeClassName:p.a.active},"Users")),r.a.createElement("div",{className:p.a.item},r.a.createElement(m.b,{to:"/news",activeClassName:p.a.active},"News")),r.a.createElement("div",{className:p.a.item},r.a.createElement(m.b,{to:"/music",activeClassName:p.a.active},"Music")),r.a.createElement("div",{className:p.a.item},r.a.createElement(m.b,{to:"/settings",activeClassName:p.a.active},"Settings")),r.a.createElement("div",{className:p.a.item},r.a.createElement(m.b,{to:"/friends",activeClassName:p.a.active},"Friends"),r.a.createElement("div",{className:p.a.friendsName},t)))},O=n(18),j=Object(O.b)((function(e){return{friends:e.sidebar.friends}}),(function(e){return{}}))(E),w=n(56),_=n.n(w),y=function(e){return r.a.createElement("header",{className:_.a.header},r.a.createElement("img",{src:"https://media.istockphoto.com/illustrations/cartoon-spaceman-looks-a-cute-illustration-id516985444"}),r.a.createElement("div",{className:_.a.login},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(m.b,{to:"/login"},"Login")))},S=n(26),N=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(e=t.call.apply(t,[this].concat(i))).render=function(){return r.a.createElement(y,e.props)},e}return n}(r.a.Component),T=Object(O.b)((function(e){return{isAuth:e.authUser.isAuth,login:e.authUser.login}}),{logout:S.d})(N),k=n(17),C=n(5),D=n.n(C),x=n(10),P=n(2),A={initialize:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS ":return Object(P.a)(Object(P.a)({},e),{},{initialize:!0});default:return e}},I=n(50),B=r.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,311))})),F=r.a.lazy((function(){return n.e(8).then(n.bind(null,307))})),L=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,310))})),R=r.a.lazy((function(){return n.e(7).then(n.bind(null,312))})),z=r.a.lazy((function(){return n.e(10).then(n.bind(null,308))})),H=r.a.lazy((function(){return n.e(9).then(n.bind(null,256))})),M=r.a.lazy((function(){return n.e(11).then(n.bind(null,309))})),G=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,313))})),W=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initialized()}},{key:"render",value:function(){return this.props.initialize?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(T,null),r.a.createElement(j,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(I.a,null)},r.a.createElement(f.b,{path:"/dialogs",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(f.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(f.b,{path:"/friends",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(f.b,{path:"/users",render:function(){return r.a.createElement(R,null)}}),r.a.createElement(f.b,{path:"/news",render:function(){return r.a.createElement(z,null)}}),r.a.createElement(f.b,{path:"/music",render:function(){return r.a.createElement(H,null)}}),r.a.createElement(f.b,{path:"/settings",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(f.b,{path:"/login",render:function(){return r.a.createElement(G,null)}})))):r.a.createElement(I.a,null)}}]),n}(r.a.Component),Q=Object(k.d)(f.f,Object(O.b)((function(e){return{initialize:e.app.initialize}}),{initialized:function(){return function(){var e=Object(x.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(Object(S.a)()),e.next=3,Promise.all([n]);case 3:t({type:"app/INITIALIZED_SUCCESS "});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(W),X=n(75),K=n(60),Z={friends:[{id:1,name:"Andrew",img:"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"},{id:2,name:"Kristina",img:"https://pm1.narvii.com/6960/b96261428e66115921eb208de561af56232f451br1-400-400v2_uhq.jpg"},{id:3,name:"Stas",img:"https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"},{id:4,name:"Sasha",img:"https://avatars.mds.yandex.net/get-pdb/2497678/8a0d8782-6444-499a-b7c2-da531ff44941/s600"},{id:5,name:"Katja",img:"https://lh3.googleusercontent.com/proxy/WXHSEScu6kZ8jdFP3HJuwQ2ogjsIi04FNCSkXbva1zykTRIprR0CTqI4v8ikkCmxN66Ok4ilb7gZhC0T2nQQKfqhhQDC3JhMu37v1GXElrVYrA0jkjtWaJ8VQTljt7Q8Rec3j1SOSVFk5jpiEMx-HZSW9j7ooqTIGvfl8vwdV-4"}]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=Object(P.a)({},e);return t},J=n(82),V=n(88),Y=n(81),$=Object(k.c)({profilePage:K.b,dialogsPage:X.b,usersPage:J.a,sidebar:q,authUser:S.b,app:U,form:Y.a}),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,te=Object(k.e)($,ee(Object(k.a)(V.a)));u.a.render(r.a.createElement(m.a,null,r.a.createElement(O.a,{store:te},r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return p}));var a=n(5),r=n.n(a),i=n(10),u=n(2),c=n(7),s=n(29),o={id:null,email:null,login:null,isAuth:!1},l=function(e,t,n,a){return{type:"auth/SET_USER_DATA",data:{id:e,email:t,login:n,isAuth:a}}},f=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,u,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.autMe();case 2:return 0===(n=e.sent).resultCode&&(a=n.data,i=a.id,u=a.email,s=a.login,t(l(i,u,s,!0))),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var a=Object(i.a)(r.a.mark((function a(i){var u;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.a.login(e,t,n);case 2:0===(u=a.sent).resultCode?i(f()):i(Object(s.a)("login",{_error:u.messages}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.logout();case 2:0===e.sent.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(u.a)(Object(u.a)({},e),t.data);default:return e}}},50:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(87),u=n.n(i);t.a=function(){return r.a.createElement("div",{className:u.a.lds})}},56:function(e,t,n){e.exports={header:"Header_header__2Lu4_",login:"Header_login__1xCbv"}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return E}));var a=n(5),r=n.n(a),i=n(10),u=n(27),c=n(2),s=n(7),o=n(29),l="profile/ADD_POST",f={posts:[{id:1,message:"hi how are you?",likeCount:"15"},{id:2,message:"It is me  first post",likeCount:"20"}],profile:null,status:""},d=function(e){return{type:"profile/SET_USER_STATUS",status:e}},p=function(e){return{type:l,newPost:e}},m=function(e){return{type:"profile/SET_USER_PHOTO",photo:e}},b=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfile(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n,a){var i,u,c,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a().authUser.id,t.next=3,s.b.saveProfile(e);case 3:return 0===(u=t.sent).data.resultCode?n(b(i)):(c=u.data.messages[0].slice(u.data.messages[0].indexOf(">")+1,u.data.messages[0].length-1).toLowerCase(),(l={}).contacts={},l.contacts[c]=u.data.messages[0].slice(0,u.data.messages[0].indexOf("(")-1),n(Object(o.a)("profile",l))),t.abrupt("return",u);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.setPhoto(e);case 2:a=t.sent,n(m(a.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:a=t.sent,n(d(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[{id:3,message:t.newPost,likeCount:"0"}])});case"profile/SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"profile/SET_USER_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"profile/DELETE_POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"profile/SET_USER_PHOTO":return Object(c.a)(Object(c.a)({},e),{},{profile:Object(c.a)(Object(c.a)({},e.profile),{},{photos:t.photo})});default:return e}}},66:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(84),u=n.n(i);t.a=function(e){var t=e.img;return r.a.createElement("div",{className:u.a.item},r.a.createElement("img",{src:t}))}},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var a=n(20),r=n(25),i=n(86),u=i.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9db4e204-2315-467d-bda4-460db7f8a440"}}),c=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"getUsers",value:function(e,t){return u.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},{key:"unfollow",value:function(e){return u.delete("follow/".concat(e)).then((function(e){return e.data}))}},{key:"follow",value:function(e){return u.post("follow/".concat(e)).then((function(e){return e.data}))}}]),e}(),s=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"getProfile",value:function(e){return u.get("profile/".concat(e))}},{key:"getStatus",value:function(e){return u.get("profile/status/".concat(e))}},{key:"updateStatus",value:function(e){return u.put("profile/status",{status:e})}},{key:"setPhoto",value:function(e){var t=new FormData;return t.append("image",e),u.put("profile/photo",t,{headers:{"Content-type":"multipart/form-data"}})}},{key:"saveProfile",value:function(e){return u.put("profile",e)}}]),e}(),o=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"autMe",value:function(){return u.get("auth/me").then((function(e){return e.data}))}},{key:"login",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return u.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))}},{key:"logout",value:function(){return u.delete("auth/login").then((function(e){return e.data}))}}]),e}()},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(27),r=n(2),i={messages:[{id:1,message:"Hello"},{id:2,message:"How are you doing?"},{id:3,message:"Hi"},{id:4,message:"Bye"},{id:5,message:"It is ok"}],dialogs:[{id:1,name:"Andrew"},{id:2,name:"Kristina"},{id:3,name:"Stas"},{id:4,name:"Sasha"},{id:5,name:"Katja"}],avatars:[{id:1,img:"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"},{id:2,img:"https://pm1.narvii.com/6960/b96261428e66115921eb208de561af56232f451br1-400-400v2_uhq.jpg"},{id:3,img:"https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-%D0%B2-%D0%92%D0%9A011.jpg"},{id:4,img:"https://avatars.mds.yandex.net/get-pdb/2497678/8a0d8782-6444-499a-b7c2-da531ff44941/s600"},{id:5,img:"https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1"}]},u=function(e){return{type:"dialogs/ADD-MESSAGE",newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:t.newMessage}])});default:return e}}},8:function(e,t,n){e.exports={nav:"Navbar_nav__24QFt",item:"Navbar_item__T7coa",active:"Navbar_active__ua9__",friendsName:"Navbar_friendsName__1jYyu"}},82:function(e,t,n){"use strict";var a=n(5),r=n.n(a),i=n(10),u=n(27),c=n(2),s=n(7),o=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(c.a)(Object(c.a)({},e),a):e}))};n.d(t,"e",(function(){return m})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return v})),n.d(t,"f",(function(){return O})),n.d(t,"b",(function(){return j}));var l={users:[],pageSize:50,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f=function(e){return{type:"user/FOLLOW",id:e}},d=function(e){return{type:"user/SET-USERS",users:e}},p=function(e){return{type:"user/UNFOLLOW",id:e}},m=function(e){return{type:"user/SET_TOTAL_COUNT",totalCount:e}},b=function(e){return{type:"user/CHANGE_IS_FETCHING",isFetching:e}},g=function(e,t){return{type:"user/DISABLE_BUTTON",isFetching:e,id:t}},h=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(b(!0)),n.next=3,s.c.getUsers(e,t);case 3:i=n.sent,a(b(!1)),a(d(i.items)),a(m(i.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(b(!0)),a({type:"user/SET_CURRENT_PAGE",currentPage:e}),n.next=4,s.c.getUsers(e,t);case 4:i=n.sent,a(b(!1)),a(d(i.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(g(!0,t)),e.next=3,a(t);case 3:0===e.sent.resultCode&&n(i(t)),n(g(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),O=function(e){return function(t){E(e,t,s.c.unfollow.bind(s.c),p)}},j=function(e){return function(t){E(e,t,s.c.follow.bind(s.c),f)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user/FOLLOW":return Object(c.a)(Object(c.a)({},e),{},{users:o(e.users,t.id,"id",{followed:!0})});case"user/UNFOLLOW":return Object(c.a)(Object(c.a)({},e),{},{users:o(e.users,t.id,"id",{followed:!1})});case"user/SET-USERS":return Object(c.a)(Object(c.a)({},e),{},{users:t.users});case"user/SET_CURRENT_PAGE":return Object(c.a)(Object(c.a)({},e),{},{currentPage:t.currentPage});case"user/SET_TOTAL_COUNT":return Object(c.a)(Object(c.a)({},e),{},{totalUsersCount:t.totalCount});case"user/CHANGE_IS_FETCHING":return Object(c.a)(Object(c.a)({},e),{},{isFetching:t.isFetching});case"user/DISABLE_BUTTON":return Object(c.a)(Object(c.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(u.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!==t.id}))});default:return e}}},83:function(e,t,n){e.exports={name:"NavbarFirends_name__336hg"}},84:function(e,t,n){e.exports={item:"Avatar_item__1cUZs"}},87:function(e,t,n){e.exports={lds:"Preloader_lds__3yXX9"}}},[[138,2,3]]]);
//# sourceMappingURL=main.c7ce4d65.chunk.js.map