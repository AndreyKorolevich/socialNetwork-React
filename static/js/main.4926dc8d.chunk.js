(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return l}));var a=n(31),r=n(40),i=n(136),c=i.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9db4e204-2315-467d-bda4-460db7f8a440"}}),o=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"getUsers",value:function(e,t){return c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},{key:"unfollow",value:function(e){return c.delete("follow/".concat(e)).then((function(e){return e.data}))}},{key:"follow",value:function(e){return c.post("follow/".concat(e)).then((function(e){return e.data}))}}]),e}(),u=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"getProfile",value:function(e){return c.get("profile/".concat(e))}},{key:"getStatus",value:function(e){return c.get("profile/status/".concat(e))}},{key:"updateStatus",value:function(e){return c.put("profile/status",{status:e})}},{key:"setPhoto",value:function(e){var t=new FormData;return t.append("image",e),c.put("profile/photo",t,{headers:{"Content-type":"multipart/form-data"}})}},{key:"saveProfile",value:function(e){return c.put("profile",e)}}]),e}(),s=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"autMe",value:function(){return c.get("auth/me").then((function(e){return e.data}))}},{key:"login",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return c.delete("auth/login").then((function(e){return e.data}))}}]),e}(),l=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"getCaptchaUrl",value:function(){return c.get("security/get-captcha-url").then((function(e){return e.data}))}}]),e}()},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(36),r=n(4),i=n(24),c={messages:{my:[{id:112,message:"Oh, it cool!"}],friends:[{id:1,message:"Hello. How are you? I`ve heard you`re looking for a new job as a Developer? I want to offer you some work :)"}]},dialogs:[{id:1,name:"Andrew",img:"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"},{id:2,name:"Kristina",img:"https://pm1.narvii.com/6960/b96261428e66115921eb208de561af56232f451br1-400-400v2_uhq.jpg"},{id:3,name:"Stas",img:"https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-%D0%B2-%D0%92%D0%9A011.jpg"},{id:4,name:"Sasha",img:"https://avatars.mds.yandex.net/get-pdb/2497678/8a0d8782-6444-499a-b7c2-da531ff44941/s600"},{id:5,name:"Katja",img:"https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1"}]},o=function(e){return function(t){t({type:"dialogs/ADD-MESSAGE",newMessage:e}),t(Object(i.a)("message"))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:Object(r.a)(Object(r.a)({},e.messages),{},{my:[].concat(Object(a.a)(e.messages.my),[{id:112,message:t.newMessage}])})});default:return e}}},133:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(12),c=n(36),o=n(4),u=n(11),s=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),a):e}))};n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return E})),n.d(t,"b",(function(){return O}));var l={users:[],pageSize:50,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},m=function(e){return{type:"user/FOLLOW",id:e}},f=function(e){return{type:"user/SET-USERS",users:e}},p=function(e){return{type:"user/UNFOLLOW",id:e}},d=function(e){return{type:"user/SET_TOTAL_COUNT",totalCount:e}},g=function(e){return{type:"user/CHANGE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"user/DISABLE_BUTTON",isFetching:e,id:t}},v=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(g(!0)),n.next=3,u.d.getUsers(e,t);case 3:i=n.sent,a(g(!1)),a(f(i.items)),a(d(i.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(g(!0)),a({type:"user/SET_CURRENT_PAGE",currentPage:e}),n.next=4,u.d.getUsers(e,t);case 4:i=n.sent,a(g(!1)),a(f(i.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(b(!0,t)),e.next=3,a(t);case 3:0===e.sent.resultCode&&n(i(t)),n(b(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),E=function(e){return function(t){_(e,t,u.d.unfollow.bind(u.d),p)}},O=function(e){return function(t){_(e,t,u.d.follow.bind(u.d),m)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user/FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:s(e.users,t.id,"id",{followed:!0})});case"user/UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:s(e.users,t.id,"id",{followed:!1})});case"user/SET-USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"user/SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"user/SET_TOTAL_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalCount});case"user/CHANGE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"user/DISABLE_BUTTON":return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!==t.id}))});default:return e}}},134:function(e,t,n){e.exports={name:"NavbarFirends_name__336hg"}},137:function(e,t,n){e.exports={error:"FormControl_error__3thCB"}},139:function(e,t,n){e.exports={lds:"Preloader_lds__3yXX9"}},167:function(e,t,n){e.exports=n(294)},194:function(e,t,n){e.exports={login:"Login_login__m9X_Y"}},21:function(e,t,n){e.exports={navigator:"Navbar_navigator__1-Q5M",active:"Navbar_active__ua9__",friendsName:"Navbar_friendsName__1jYyu",activeButton:"Navbar_activeButton__1BI1a"}},292:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),i=n(64),c=n.n(i),o=n(34),u=n(96),s=n(52),l=n.n(s),m=n(10),f=n(21),p=n.n(f),d=n(13),g=n(134),b=n.n(g),v=n(99),h=function(e){return r.a.createElement("div",{className:b.a.name},r.a.createElement(v.a,{img:e.img}),e.name)},_=n(55),E=n.n(_),O=function(e){var t=e.friends,n=e.editMode,a=t.slice(0,3).map((function(e){return r.a.createElement(h,{name:e.name,key:e.id,id:e.id,img:e.img})}));return r.a.createElement("div",{className:E()(p.a.navigator,Object(o.a)({},p.a.active,n))},r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item g"},r.a.createElement(d.b,{className:"nav-link",to:"/profile",activeClassName:p.a.activeButton},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:"/dialogs",activeClassName:p.a.activeButton},"Messages")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:"/users",activeClassName:p.a.activeButton},"Users")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:"/news",activeClassName:p.a.activeButton},"News")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:"/music",activeClassName:p.a.activeButton},"Music")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:"/settings",activeClassName:p.a.activeButton},"Settings")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link active",to:"/friends",activeClassName:p.a.activeButton},"Friends"),r.a.createElement("div",{className:p.a.friendsName},a))))},j=n(16),w=Object(j.b)((function(e){return{friends:e.sidebar.friends}}),(function(e){return{}}))(O),y=n(31),k=n(95),N=n(94),S=n(91),D=n.n(S),C=function(e){return r.a.createElement("header",{className:D.a.header},r.a.createElement("button",{type:"button",className:"btn rounded-pill shadow-sm px-2 mb-2",onClick:e.toggleMobileView},r.a.createElement("small",{className:"text-uppercase font-weight-bold"},"Toggle")),r.a.createElement("img",{src:"https://media.istockphoto.com/illustrations/cartoon-spaceman-looks-a-cute-illustration-id516985444",alt:"logo"}),r.a.createElement("span",null,"Space Network"),r.a.createElement("div",{className:D.a.login},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{className:"btn btn-outline-info",onClick:e.logout},"Log Out")):r.a.createElement(d.b,{to:"/login"},"Log In")))},x=n(7),T=n.n(x),A=n(12),U=n(4),B=n(11),P=n(24),I={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},F=function(e,t,n,a){return{type:"auth/SET_USER_DATA",data:{id:e,email:t,login:n,isAuth:a}}},L=function(e){return{type:"auth/GET_CAPTCHA_URL",captchaUrl:e}},M=function(){return function(){var e=Object(A.a)(T.a.mark((function e(t){var n,a,r,i,c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.autMe();case 2:return 0===(n=e.sent).resultCode&&(a=n.data,r=a.id,i=a.email,c=a.login,t(F(r,i,c,!0))),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(U.a)(Object(U.a)({},e),t.data);case"auth/GET_CAPTCHA_URL":return Object(U.a)(Object(U.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},z=function(e){Object(k.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).render=function(){return r.a.createElement(C,e.props)},e}return n}(r.a.Component),H=Object(j.b)((function(e){return{isAuth:e.authUser.isAuth,login:e.authUser.login}}),{logout:function(){return function(){var e=Object(A.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.logout();case 2:0===e.sent.resultCode&&t(F(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(z),W=(n(194),n(130)),G=n(131),q=n(43),Q=n(44),X=n(87),J=n.n(X),K=Object(Q.a)(25),V=Object(G.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement(W.a,{placeholder:"email",name:"email",element:"input",component:q.a,validate:[Q.b,K]})),r.a.createElement("div",null,r.a.createElement(W.a,{placeholder:"password",name:"password",type:"password",element:"input",component:q.a,validate:[Q.b,K]})),r.a.createElement("div",{className:J.a.error},n&&r.a.createElement("div",null,n)),r.a.createElement("div",{className:J.a.checkbox},r.a.createElement(W.a,{type:"checkbox",name:"rememberMe",element:"input",component:q.a})," remember Me"),r.a.createElement("div",null,r.a.createElement("img",{src:a,alt:""}),a&&r.a.createElement(W.a,{placeholder:"captcha",name:"captcha",element:"input",component:q.a,validate:[Q.b]})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Login")))})),Y=Object(j.b)((function(e){return{isAuth:e.authUser.isAuth,captchaUrl:e.authUser.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(A.a)(T.a.mark((function r(i){var c;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,B.a.login(e,t,n,a);case 2:0===(c=r.sent).resultCode?(i(M()),i(L(null))):(10===c.resultCode&&i(function(){var e=Object(A.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.c.getCaptchaUrl();case 2:n=e.sent,t(L(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i(Object(P.b)("login",{_error:c.messages})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=e.login,a=e.captchaUrl;return t?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",{className:"container"},"Login"),r.a.createElement(V,{onSubmit:function(e){n(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:a}))})),Z=n(9),$={initialize:!1},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS ":return Object(U.a)(Object(U.a)({},e),{},{initialize:!0});default:return e}},te=n(86),ne=r.a.lazy((function(){return n.e(5).then(n.bind(null,317))})),ae=r.a.lazy((function(){return n.e(9).then(n.bind(null,319))})),re=r.a.lazy((function(){return n.e(3).then(n.bind(null,316))})),ie=r.a.lazy((function(){return n.e(4).then(n.bind(null,318))})),ce=r.a.lazy((function(){return n.e(7).then(n.bind(null,313))})),oe=r.a.lazy((function(){return n.e(6).then(n.bind(null,314))})),ue=r.a.lazy((function(){return n.e(8).then(n.bind(null,315))}));var se=Object(Z.d)(m.g,Object(j.b)((function(e){return{initialize:e.app.initialize}}),{initialized:function(){return function(){var e=Object(A.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(M()),e.next=3,Promise.all([n]);case 3:t({type:"app/INITIALIZED_SUCCESS "});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))((function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){e.initialized()})),e.initialize?r.a.createElement("div",{className:l.a.appWrapper},r.a.createElement(H,{toggleMobileView:function(){c(!i)}}),r.a.createElement("div",{className:l.a.main},r.a.createElement(w,{editMode:i}),r.a.createElement("div",{className:E()(l.a.appWrapperContent,Object(o.a)({},l.a.active,i))},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(te.a,null)},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(m.a,{to:"/profile"})),r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(re,null)}}),r.a.createElement(m.b,{path:"/friends",render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(ie,null)}}),r.a.createElement(m.b,{path:"/news",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(m.b,{path:"/music",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(m.b,{path:"/settings",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(m.b,{path:"*",render:function(){return r.a.createElement("div",null," 404 NOT FOUND")}})))))):r.a.createElement(te.a,null)})),le=(n(292),n(129)),me=n(97),fe={friends:[{id:1,name:"Andrew",img:"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"},{id:2,name:"Kristina",img:"https://pm1.narvii.com/6960/b96261428e66115921eb208de561af56232f451br1-400-400v2_uhq.jpg"},{id:3,name:"Stas",img:"https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"},{id:4,name:"Sasha",img:"https://avatars.mds.yandex.net/get-pdb/2497678/8a0d8782-6444-499a-b7c2-da531ff44941/s600"},{id:5,name:"Katja",img:"https://lh3.googleusercontent.com/proxy/WXHSEScu6kZ8jdFP3HJuwQ2ogjsIi04FNCSkXbva1zykTRIprR0CTqI4v8ikkCmxN66Ok4ilb7gZhC0T2nQQKfqhhQDC3JhMu37v1GXElrVYrA0jkjtWaJ8VQTljt7Q8Rec3j1SOSVFk5jpiEMx-HZSW9j7ooqTIGvfl8vwdV-4"}]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=Object(U.a)({},e);return t},de=n(133),ge=n(140),be=n(132),ve=Object(Z.c)({profilePage:me.b,dialogsPage:le.b,usersPage:de.a,sidebar:pe,authUser:R,app:ee,form:be.a}),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,_e=Object(Z.e)(ve,he(Object(Z.a)(ge.a)));n(293);c.a.render(r.a.createElement(d.a,null,r.a.createElement(j.a,{store:_e},r.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(4),r=n(141),i=n(0),c=n.n(i),o=n(137),u=n.n(o),s=function(e){var t=e.input,n=e.meta,i=n.touched,o=n.error,s=n.warning,l=Object(r.a)(e,["input","meta"]);return c.a.createElement("div",{className:u.a.error},c.a.createElement(l.element,Object(a.a)(Object(a.a)({},t),l)),i&&(o&&c.a.createElement("span",null,o)||s&&c.a.createElement("span",null,s)))}},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));n(0);var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},52:function(e,t,n){e.exports={appWrapper:"App_appWrapper__7id4c",main:"App_main__34kA7",appWrapperContent:"App_appWrapperContent__3H1U2",active:"App_active__3gPx3"}},54:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3ckfq",users:"Dialogs_users__vI1P7",name:"Dialogs_name__1AL6Y",dialogsItems:"Dialogs_dialogsItems__2rgKA",dialog:"Dialogs_dialog__2WzTE",active:"Dialogs_active__2W3di",messages:"Dialogs_messages__2IBnS",message:"Dialogs_message__12OyC",myMessage:"Dialogs_myMessage__AWN1H",postForm:"Dialogs_postForm__2TlLq",textarea:"Dialogs_textarea__1bBDt",item:"Dialogs_item__24zBk",userAvatar:"Dialogs_userAvatar__16lDL",posts:"Dialogs_posts__2Fzxa",postBlock:"Dialogs_postBlock__2_6v_",newPost:"Dialogs_newPost__3sdQt",newPostBox:"Dialogs_newPostBox__2FlBT",figure:"Dialogs_figure__30_Hw",newPostInput:"Dialogs_newPostInput__1vGU-"}},86:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(139),c=n.n(i);t.a=function(){return r.a.createElement("div",{className:c.a.lds})}},87:function(e,t,n){e.exports={checkbox:"LoginForm_checkbox__2Bi_b",error:"LoginForm_error__c3s36"}},91:function(e,t,n){e.exports={header:"Header_header__2Lu4_",login:"Header_login__1xCbv"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return h})),n.d(t,"g",(function(){return _}));var a=n(7),r=n.n(a),i=n(12),c=n(36),o=n(4),u=n(11),s=n(24),l="profile/ADD_POST",m={posts:[{id:1,message:"It is me  first post",likeCount:"15",views:"110",comments:"8",dislike:"2"},{id:2,message:"Hello Friends ",likeCount:"20",views:"80",comments:"2",dislike:"1"}],profile:{aboutMe:null,lookingForAJob:!0,lookingForAJobDescription:null,fullName:null,photos:{small:null,large:null},contacts:{facebook:null,github:null,instagram:null,mainLink:null,twitter:null,vk:null,website:null,youtube:null}},status:""},f=function(e){return{type:"profile/SET_USER_STATUS",status:e}},p=function(e){return function(t){t({type:l,newPost:e}),t(Object(s.a)("post"))}},d=function(e){return{type:"profile/SET_USER_PHOTO",photo:e}},g=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n,a){var i,c,o,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a().authUser.id,t.next=3,u.b.saveProfile(e);case 3:return 0===(c=t.sent).data.resultCode?n(g(i)):(o=c.data.messages[0].slice(c.data.messages[0].indexOf(">")+1,c.data.messages[0].length-1).toLowerCase(),(l={}).contacts={},l.contacts[o]=c.data.messages[0].slice(0,c.data.messages[0].indexOf("(")-1),n(Object(s.b)("profile",l))),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.setPhoto(e);case 2:a=t.sent,n(d(a.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:3,message:t.newPost,likeCount:"0",views:"0",comments:"0",dislike:"0"}])});case"profile/SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"profile/SET_USER_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"profile/DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"profile/SET_USER_PHOTO":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photo})});default:return e}}},99:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(54),c=n.n(i),o=n(13);t.a=function(e){var t=e.img,n=e.id,a=e.name;return r.a.createElement("div",{className:c.a.dialog},r.a.createElement("div",{className:c.a.item},r.a.createElement("img",{src:t,alt:"user`s avatar"})),r.a.createElement(o.b,{to:"/dialogs/"+n,activeClassName:c.a.active},a," "))}}},[[167,1,2]]]);
//# sourceMappingURL=main.4926dc8d.chunk.js.map