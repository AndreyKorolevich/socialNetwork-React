(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[0],{109:function(e,t,n){e.exports={checkbox:"LoginForm_checkbox__2Bi_b",error:"LoginForm_error__c3s36"}},11:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l}));var a=n(31),r=n(40),c=n(137),i=c.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9db4e204-2315-467d-bda4-460db7f8a440"}}),o=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"getUsers",value:function(e,t){return i.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},{key:"unfollow",value:function(e){return i.delete("follow/".concat(e)).then((function(e){return e.data}))}},{key:"follow",value:function(e){return i.post("follow/".concat(e)).then((function(e){return e.data}))}}]),e}(),s=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"getProfile",value:function(e){return i.get("profile/".concat(e))}},{key:"getStatus",value:function(e){return i.get("profile/status/".concat(e))}},{key:"updateStatus",value:function(e){return i.put("profile/status",{status:e})}},{key:"setPhoto",value:function(e){var t=new FormData;return t.append("image",e),i.put("profile/photo",t,{headers:{"Content-type":"multipart/form-data"}})}},{key:"saveProfile",value:function(e){return i.put("profile",e)}}]),e}(),u=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"autMe",value:function(){return i.get("auth/me").then((function(e){return e.data}))}},{key:"login",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return i.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return i.delete("auth/login").then((function(e){return e.data}))}}]),e}(),l=function(){function e(){Object(a.a)(this,e)}return Object(r.a)(e,null,[{key:"getCaptchaUrl",value:function(){return i.get("security/get-captcha-url").then((function(e){return e.data}))}}]),e}()},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(36),r=n(4),c=n(24),i={messages:{my:[{id:112,message:"Oh, it cool!"}],friends:[{id:1,message:"Hello. How are you? I`ve heard you`re looking for a new job as a Developer? I want to offer you some work :)"}]},dialogs:[{id:1,name:"Andrew",img:"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"},{id:2,name:"Kristina",img:"https://pm1.narvii.com/6960/b96261428e66115921eb208de561af56232f451br1-400-400v2_uhq.jpg"},{id:3,name:"Stas",img:"https://pristor.ru/wp-content/uploads/2019/09/%D0%A4%D0%BE%D1%82%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-%D0%B2-%D0%92%D0%9A011.jpg"},{id:4,name:"Sasha",img:"https://avatars.mds.yandex.net/get-pdb/2497678/8a0d8782-6444-499a-b7c2-da531ff44941/s600"},{id:5,name:"Katja",img:"https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1"}]},o=function(e){return function(t){t({type:"dialogs/ADD-MESSAGE",newMessage:e}),t(Object(c.a)("message"))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{messages:Object(r.a)(Object(r.a)({},e.messages),{},{my:[].concat(Object(a.a)(e.messages.my),[{id:112,message:t.newMessage}])})});default:return e}}},134:function(e,t,n){"use strict";var a=n(7),r=n.n(a),c=n(12),i=n(36),o=n(4),s=n(11),u=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),a):e}))};n.d(t,"e",(function(){return d})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return E})),n.d(t,"b",(function(){return O}));var l={users:[],pageSize:50,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},m=function(e){return{type:"user/FOLLOW",id:e}},f=function(e){return{type:"user/SET-USERS",users:e}},p=function(e){return{type:"user/UNFOLLOW",id:e}},d=function(e){return{type:"user/SET_TOTAL_COUNT",totalCount:e}},g=function(e){return{type:"user/CHANGE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"user/DISABLE_BUTTON",isFetching:e,id:t}},v=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(g(!0)),n.next=3,s.d.getUsers(e,t);case 3:c=n.sent,a(g(!1)),a(f(c.items)),a(d(c.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(e,t){return function(){var n=Object(c.a)(r.a.mark((function n(a){var c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(g(!0)),a({type:"user/SET_CURRENT_PAGE",currentPage:e}),n.next=4,s.d.getUsers(e,t);case 4:c=n.sent,a(g(!1)),a(f(c.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(c.a)(r.a.mark((function e(t,n,a,c){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(b(!0,t)),e.next=3,a(t);case 3:0===e.sent.resultCode&&n(c(t)),n(b(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),E=function(e){return function(t){_(e,t,s.d.unfollow.bind(s.d),p)}},O=function(e){return function(t){_(e,t,s.d.follow.bind(s.d),m)}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user/FOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:u(e.users,t.id,"id",{followed:!0})});case"user/UNFOLLOW":return Object(o.a)(Object(o.a)({},e),{},{users:u(e.users,t.id,"id",{followed:!1})});case"user/SET-USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"user/SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case"user/SET_TOTAL_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalCount});case"user/CHANGE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"user/DISABLE_BUTTON":return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(i.a)(e.followingInProgress),[t.id]):e.followingInProgress.filter((function(e){return e!==t.id}))});default:return e}}},135:function(e,t,n){e.exports={name:"NavbarFirends_name__336hg"}},138:function(e,t,n){e.exports={error:"FormControl_error__3thCB"}},140:function(e,t,n){e.exports={lds:"Preloader_lds__3yXX9"}},168:function(e,t,n){e.exports=n(294)},21:function(e,t,n){e.exports={navigator:"Navbar_navigator__1-Q5M",active:"Navbar_active__ua9__",friendsName:"Navbar_friendsName__1jYyu",activeButton:"Navbar_activeButton__1BI1a"}},292:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),c=n(64),i=n.n(c),o=n(34),s=n(96),u=n(52),l=n.n(u),m=n(10),f=n(21),p=n.n(f),d=n(13),g=n(135),b=n.n(g),v=n(99),h=function(e){return r.a.createElement("div",{className:b.a.name},r.a.createElement(v.a,{img:e.img}),e.name)},_=n(55),E=n.n(_),O=function(e){var t=e.friends,n=e.editMode,a=t.slice(0,3).map((function(e){return r.a.createElement(h,{name:e.name,key:e.id,id:e.id,img:e.img})}));return r.a.createElement("div",{className:E()(p.a.navigator,Object(o.a)({},p.a.active,n))},r.a.createElement("ul",{className:"nav flex-column"},r.a.createElement("li",{className:"nav-item g"},r.a.createElement(d.b,{className:"nav-link",to:"/profile",activeClassName:p.a.activeButton},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:"/dialogs",activeClassName:p.a.activeButton},"Messages")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:"/users",activeClassName:p.a.activeButton},"Users")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:"/news",activeClassName:p.a.activeButton},"News")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:"/music",activeClassName:p.a.activeButton},"Music")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link",to:"/settings",activeClassName:p.a.activeButton},"Settings")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.b,{className:"nav-link active",to:"/friends",activeClassName:p.a.activeButton},"Friends"),r.a.createElement("div",{className:p.a.friendsName},a))))},j=n(16),w=Object(j.b)((function(e){return{friends:e.sidebar.friends}}),(function(e){return{}}))(O),y=n(31),N=n(95),k=n(94),S=n(90),D=n.n(S),x=function(e){return r.a.createElement("header",{className:D.a.header},r.a.createElement("button",{type:"button",className:"btn rounded-pill shadow-sm px-2 mb-2",onClick:e.toggleMobileView},r.a.createElement("small",{className:"text-uppercase font-weight-bold"},"Toggle")),r.a.createElement("img",{src:"https://media.istockphoto.com/illustrations/cartoon-spaceman-looks-a-cute-illustration-id516985444",alt:"logo"}),r.a.createElement("span",null,"Space Network"),r.a.createElement("div",{className:D.a.login},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{className:"btn btn-outline-info",onClick:e.logout},"Log Out")):r.a.createElement(d.b,{to:"/login"},"Log In")))},C=n(7),T=n.n(C),A=n(12),U=n(4),B=n(11),P=n(24),I={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},F=function(e,t,n,a){return{type:"auth/SET_USER_DATA",data:{id:e,email:t,login:n,isAuth:a}}},L=function(e){return{type:"auth/GET_CAPTCHA_URL",captchaUrl:e}},M=function(){return function(){var e=Object(A.a)(T.a.mark((function e(t){var n,a,r,c,i;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.autMe();case 2:return 0===(n=e.sent).resultCode&&(a=n.data,r=a.id,c=a.email,i=a.login,t(F(r,c,i,!0))),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(U.a)(Object(U.a)({},e),t.data);case"auth/GET_CAPTCHA_URL":return Object(U.a)(Object(U.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},z=function(e){Object(N.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(y.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).render=function(){return r.a.createElement(x,e.props)},e}return n}(r.a.Component),H=Object(j.b)((function(e){return{isAuth:e.authUser.isAuth,login:e.authUser.login}}),{logout:function(){return function(){var e=Object(A.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.logout();case 2:0===e.sent.resultCode&&t(F(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(z),W=n(91),G=n.n(W),q=n(131),Q=n(132),X=n(43),J=n(44),K=n(109),V=n.n(K),Y=Object(J.a)(25),Z=Object(Q.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement(q.a,{className:"form-control",placeholder:"email",name:"email",element:"input",component:X.a,validate:[J.b,Y]}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement(q.a,{className:"form-control",placeholder:"password",name:"password",type:"password",element:"input",component:X.a,validate:[J.b,Y]})),r.a.createElement("div",{className:V.a.error},n&&r.a.createElement("div",null,n)),r.a.createElement("div",{className:"form-group form-check"},r.a.createElement(q.a,{className:"form-check-input",type:"checkbox",name:"rememberMe",element:"input",component:X.a}),r.a.createElement("label",{className:"form-check-label",htmlFor:"exampleCheck1"},"remember Me")),r.a.createElement("div",null,r.a.createElement("img",{src:a,alt:""}),a&&r.a.createElement(q.a,{placeholder:"captcha",name:"captcha",element:"input",component:X.a,validate:[J.b]})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-outline-primary",type:"submit"},"Login")))})),$=Object(j.b)((function(e){return{isAuth:e.authUser.isAuth,captchaUrl:e.authUser.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(A.a)(T.a.mark((function r(c){var i;return T.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,B.a.login(e,t,n,a);case 2:0===(i=r.sent).resultCode?(c(M()),c(L(null))):(10===i.resultCode&&c(function(){var e=Object(A.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.c.getCaptchaUrl();case 2:n=e.sent,t(L(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c(Object(P.b)("login",{_error:i.messages})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=e.login,a=e.captchaUrl;return t?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",{className:G.a.wrapper},r.a.createElement("div",{className:G.a.login},r.a.createElement("h1",{className:"container"},"Login"),r.a.createElement(Z,{onSubmit:function(e){n(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:a})))})),ee=n(9),te={initialize:!1},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS ":return Object(U.a)(Object(U.a)({},e),{},{initialize:!0});default:return e}},ae=n(86),re=r.a.lazy((function(){return n.e(5).then(n.bind(null,317))})),ce=r.a.lazy((function(){return n.e(9).then(n.bind(null,319))})),ie=r.a.lazy((function(){return n.e(3).then(n.bind(null,316))})),oe=r.a.lazy((function(){return n.e(4).then(n.bind(null,318))})),se=r.a.lazy((function(){return n.e(7).then(n.bind(null,313))})),ue=r.a.lazy((function(){return n.e(6).then(n.bind(null,314))})),le=r.a.lazy((function(){return n.e(8).then(n.bind(null,315))}));var me=Object(ee.d)(m.g,Object(j.b)((function(e){return{initialize:e.app.initialize}}),{initialized:function(){return function(){var e=Object(A.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t(M()),e.next=3,Promise.all([n]);case 3:t({type:"app/INITIALIZED_SUCCESS "});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))((function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){e.initialized()})),e.initialize?r.a.createElement("div",{className:l.a.appWrapper},r.a.createElement(H,{toggleMobileView:function(){i(!c)}}),r.a.createElement("div",{className:l.a.main},r.a.createElement(w,{editMode:c}),r.a.createElement("div",{className:E()(l.a.appWrapperContent,Object(o.a)({},l.a.active,c))},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ae.a,null)},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/"},r.a.createElement(m.a,{to:"/profile"})),r.a.createElement(m.b,{path:"/dialogs",render:function(){return r.a.createElement(re,null)}}),r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(ie,null)}}),r.a.createElement(m.b,{path:"/friends",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(oe,null)}}),r.a.createElement(m.b,{path:"/news",render:function(){return r.a.createElement(se,null)}}),r.a.createElement(m.b,{path:"/music",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(m.b,{path:"/settings",render:function(){return r.a.createElement(le,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement($,null)}}),r.a.createElement(m.b,{path:"*",render:function(){return r.a.createElement("div",null," 404 NOT FOUND")}})))))):r.a.createElement(ae.a,null)})),fe=(n(292),n(130)),pe=n(97),de={friends:[{id:1,name:"Andrew",img:"https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"},{id:2,name:"Kristina",img:"https://pm1.narvii.com/6960/b96261428e66115921eb208de561af56232f451br1-400-400v2_uhq.jpg"},{id:3,name:"Stas",img:"https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg"},{id:4,name:"Sasha",img:"https://avatars.mds.yandex.net/get-pdb/2497678/8a0d8782-6444-499a-b7c2-da531ff44941/s600"},{id:5,name:"Katja",img:"https://lh3.googleusercontent.com/proxy/WXHSEScu6kZ8jdFP3HJuwQ2ogjsIi04FNCSkXbva1zykTRIprR0CTqI4v8ikkCmxN66Ok4ilb7gZhC0T2nQQKfqhhQDC3JhMu37v1GXElrVYrA0jkjtWaJ8VQTljt7Q8Rec3j1SOSVFk5jpiEMx-HZSW9j7ooqTIGvfl8vwdV-4"}]},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=Object(U.a)({},e);return t},be=n(134),ve=n(141),he=n(133),_e=Object(ee.c)({profilePage:pe.b,dialogsPage:fe.b,usersPage:be.a,sidebar:ge,authUser:R,app:ne,form:he.a}),Ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,Oe=Object(ee.e)(_e,Ee(Object(ee.a)(ve.a)));n(293);i.a.render(r.a.createElement(d.a,null,r.a.createElement(j.a,{store:Oe},r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(4),r=n(142),c=n(0),i=n.n(c),o=n(138),s=n.n(o),u=function(e){var t=e.input,n=e.meta,c=n.touched,o=n.error,u=n.warning,l=Object(r.a)(e,["input","meta"]);return i.a.createElement("div",{className:s.a.error},i.a.createElement(l.element,Object(a.a)(Object(a.a)({},t),l)),c&&(o&&i.a.createElement("span",null,o)||u&&i.a.createElement("span",null,u)))}},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));n(0);var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},52:function(e,t,n){e.exports={appWrapper:"App_appWrapper__7id4c",main:"App_main__34kA7",appWrapperContent:"App_appWrapperContent__3H1U2",active:"App_active__3gPx3"}},54:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__3ckfq",users:"Dialogs_users__vI1P7",name:"Dialogs_name__1AL6Y",dialogsItems:"Dialogs_dialogsItems__2rgKA",dialog:"Dialogs_dialog__2WzTE",active:"Dialogs_active__2W3di",messages:"Dialogs_messages__2IBnS",message:"Dialogs_message__12OyC",myMessage:"Dialogs_myMessage__AWN1H",postForm:"Dialogs_postForm__2TlLq",textarea:"Dialogs_textarea__1bBDt",item:"Dialogs_item__24zBk",userAvatar:"Dialogs_userAvatar__16lDL",posts:"Dialogs_posts__2Fzxa",postBlock:"Dialogs_postBlock__2_6v_",newPost:"Dialogs_newPost__3sdQt",newPostBox:"Dialogs_newPostBox__2FlBT",figure:"Dialogs_figure__30_Hw",newPostInput:"Dialogs_newPostInput__1vGU-"}},86:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(140),i=n.n(c);t.a=function(){return r.a.createElement("div",{className:i.a.lds})}},90:function(e,t,n){e.exports={header:"Header_header__2Lu4_",login:"Header_login__1xCbv"}},91:function(e,t,n){e.exports={wrapper:"Login_wrapper__2wWUb",login:"Login_login__m9X_Y"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return v})),n.d(t,"d",(function(){return h})),n.d(t,"g",(function(){return _}));var a=n(7),r=n.n(a),c=n(12),i=n(36),o=n(4),s=n(11),u=n(24),l="profile/ADD_POST",m={posts:[{id:1,message:"It is me  first post",likeCount:"15",views:"110",comments:"8",dislike:"2"},{id:2,message:"Hello Friends ",likeCount:"20",views:"80",comments:"2",dislike:"1"}],profile:{aboutMe:null,lookingForAJob:!0,lookingForAJobDescription:null,fullName:null,photos:{small:null,large:null},contacts:{facebook:null,github:null,instagram:null,mainLink:null,twitter:null,vk:null,website:null,youtube:null}},status:""},f=function(e){return{type:"profile/SET_USER_STATUS",status:e}},p=function(e){return function(t){t({type:l,newPost:e}),t(Object(u.a)("post"))}},d=function(e){return{type:"profile/SET_USER_PHOTO",photo:e}},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getProfile(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,i,o,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().authUser.id,t.next=3,s.b.saveProfile(e);case 3:return 0===(i=t.sent).data.resultCode?n(g(c)):(o=i.data.messages[0].slice(i.data.messages[0].indexOf(">")+1,i.data.messages[0].length-1).toLowerCase(),(l={}).contacts={},l.contacts[o]=i.data.messages[0].slice(0,i.data.messages[0].indexOf("(")-1),n(Object(u.b)("profile",l))),t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.setPhoto(e);case 2:a=t.sent,n(d(a.data.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[{id:3,message:t.newPost,likeCount:"0",views:"0",comments:"0",dislike:"0"}])});case"profile/SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"profile/SET_USER_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"profile/DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"profile/SET_USER_PHOTO":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photo})});default:return e}}},99:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(54),i=n.n(c),o=n(13);t.a=function(e){var t=e.img,n=e.id,a=e.name;return r.a.createElement("div",{className:i.a.dialog},r.a.createElement("div",{className:i.a.item},r.a.createElement("img",{src:t,alt:"user`s avatar"})),r.a.createElement(o.b,{to:"/dialogs/"+n,activeClassName:i.a.active},a," "))}}},[[168,1,2]]]);
//# sourceMappingURL=main.96ac90fd.chunk.js.map