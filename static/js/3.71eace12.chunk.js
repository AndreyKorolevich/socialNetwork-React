(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[3],{295:function(e,t,a){e.exports=a.p+"static/media/Programmyi-dlya-sozdaniya-avatarok.de470447.png"},296:function(e,t,a){e.exports={postForm:"PostForm_postForm__39sdv",textarea:"PostForm_textarea__39Ned"}},298:function(e,t,a){"use strict";var n=a(31),r=a(39),s=a(95),o=a(94);var l=a(10).a,i=a(0),c=a.n(i),m=a(16);a.d(t,"a",(function(){return p}));var u=function(e){return{isAuth:e.authUser.isAuth}},p=function(e){var t=function(t){Object(s.a)(i,t);var a=Object(o.a)(i);function i(){return Object(n.a)(this,i),a.apply(this,arguments)}return Object(r.a)(i,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(l,{to:"/login"})}}]),i}(c.a.Component);return Object(m.b)(u)(t)}},300:function(e,t,a){e.exports={profile:"ProfileInfo_profile__2YVng",fonImg:"ProfileInfo_fonImg__3qBVd",main:"ProfileInfo_main__hq9nl",description:"ProfileInfo_description__2v61e",userPhoto:"ProfileInfo_userPhoto__3Z3Ti",editPhoto:"ProfileInfo_editPhoto__3B1TL",camera:"ProfileInfo_camera__2OaG-",fileContainer:"ProfileInfo_fileContainer__1LjS4",containerFluid:"ProfileInfo_containerFluid__3zECY",wrapper:"ProfileInfo_wrapper__3FG7l",name:"ProfileInfo_name__39fqP",avatar:"ProfileInfo_avatar__3V2C4"}},301:function(e,t,a){},302:function(e,t,a){e.exports={contacts:"ProfileData_contacts__1h6B1",information:"ProfileData_information__1GMRa",info:"ProfileData_info__2BLK_",field:"ProfileData_field__3s2nG",socials:"ProfileData_socials__1Zsma"}},303:function(e,t,a){e.exports=a.p+"static/media/fon640.309080d5.png"},304:function(e,t,a){e.exports=a.p+"static/media/fon960.3209c9b7.png"},305:function(e,t,a){e.exports=a.p+"static/media/max.71362c1f.png"},306:function(e,t,a){e.exports={posts:"MyPosts_posts__3aRgL",postBlock:"MyPosts_postBlock__3sWli",newPost:"MyPosts_newPost__1IrtY",newPostBox:"MyPosts_newPostBox__2klU1",figure:"MyPosts_figure__2Dhf5",newPostInput:"MyPosts_newPostInput__1mTc6"}},307:function(e,t,a){e.exports={item:"Post_item__3_r1G",like:"Post_like__1_u8j",me:"Post_me__oDg5q",name:"Post_name__3QQ5z",postText:"Post_postText__1H7wj",list:"Post_list__2lo25"}},316:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a(39),s=a(95),o=a(94),l=a(0),i=a.n(l),c=a(16),m=a(34),u=a(96),p=a(300),f=a.n(p),d=a(86),E=a(301),v=a.n(E),_=function(e){var t=Object(l.useState)(!1),a=Object(u.a)(t,2),n=a[0],r=a[1],s=Object(l.useState)(e.status),o=Object(u.a)(s,2),c=o[0],m=o[1];Object(l.useEffect)((function(){m(e.status)}),[e.status]);var p=function(t){r(!n),"INPUT"===t.target.tagName&&e.updateUserStatus(c)};return i.a.createElement("div",{className:v.a.aboutMe},!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:p},""!==c?c:"status")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.currentTarget.value)},autoFocus:!0,onBlur:p,value:c})))},h=a(295),b=a.n(h),P=a(302),g=a.n(P),N=function(e){var t=e.contact,a=e.value;return i.a.createElement("div",null,i.a.createElement("b",null,t)," : ",a)},k=function(e){var t=e.lookingForAJob,a=e.lookingForAJobDescription,n=e.aboutMe,r=e.contacts,s=e.isOwner,o=e.onEditMode;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:g.a.information},s&&i.a.createElement("div",null,i.a.createElement("button",{className:"btn btn-outline-primary",onClick:o},"Edit")),i.a.createElement("div",{className:g.a.field},i.a.createElement("div",{className:g.a.job},i.a.createElement("div",null," ",i.a.createElement("span",{className:g.a.info},"Looking for a job:")," ",t?"Yes":"No")),i.a.createElement("div",{className:g.a.jobDescription},t&&i.a.createElement("div",null,i.a.createElement("span",{className:g.a.info},"My skills:")," ",a)),i.a.createElement("div",{className:g.a.aboutMe},i.a.createElement("span",{className:g.a.info},"About me:")," ",n))),i.a.createElement("div",{className:g.a.contacts},i.a.createElement("b",null,"Contacts"),i.a.createElement("div",{className:g.a.socials},Object.keys(r).map((function(e){return i.a.createElement(N,{key:e,value:r[e],contact:e})})))))},j=a(130),O=a(131),w=a(42),y=a(43),x=a(87),I=a.n(x),S=Object(O.a)({form:"profile"})((function(e){var t=e.handleSubmit,a=e.contacts,n=e.error;return i.a.createElement("form",{onSubmit:t},i.a.createElement("div",{className:I.a.error},n&&i.a.createElement("div",null,n)),i.a.createElement("div",null,"My name is ",i.a.createElement(j.a,{type:"input",name:"fullName",element:"input",component:w.a})),i.a.createElement("div",null,"Looking for a job: ",i.a.createElement(j.a,{type:"checkbox",name:"lookingForAJob",element:"input",component:w.a})),i.a.createElement("div",null,"Describe your skills: ",i.a.createElement(j.a,{placeholder:"input",name:"lookingForAJobDescription",element:"input",component:w.a,validate:[y.b]})),i.a.createElement("div",null,"About me: ",i.a.createElement(j.a,{placeholder:"textarea",name:"aboutMe",element:"textarea",component:w.a,validate:[y.b]})),i.a.createElement("div",null,i.a.createElement("b",null,"Contacts"),Object.keys(a).map((function(e){return i.a.createElement("div",{key:e},e," ",i.a.createElement(j.a,{placeholder:"input",name:"contacts."+e,element:"input",component:w.a}))}))),i.a.createElement("div",null,i.a.createElement("button",{type:"submit"},"Save")))})),U=a(303),C=a.n(U),D=a(304),M=a.n(D),F=a(305),A=a.n(F),B=a(63),T=a.n(B),J=a(65),L=a(306),G=a.n(L),q=a(307),V=a.n(q),Y=function(e){return i.a.createElement("div",{className:V.a.item},i.a.createElement("div",{className:V.a.post},i.a.createElement("div",{className:V.a.me},i.a.createElement("img",{src:e.photo||b.a,alt:"person`s avatar"}),i.a.createElement("div",{className:V.a.name},e.name)),i.a.createElement("div",{className:V.a.postText},e.message),i.a.createElement("ul",{className:V.a.list},i.a.createElement("li",null,i.a.createElement("span",{className:"views","data-toggle":"tooltip",title:"","data-original-title":"views"},i.a.createElement("i",{className:"fa fa-eye"}),i.a.createElement("ins",null,e.views))),i.a.createElement("li",null,i.a.createElement("span",{className:"comment","data-toggle":"tooltip",title:"","data-original-title":"Comments"},i.a.createElement("i",{className:"fa fa-comments-o"}),i.a.createElement("ins",null,e.comments))),i.a.createElement("li",null,i.a.createElement("span",{className:"like","data-toggle":"tooltip",title:"","data-original-title":"like"},i.a.createElement("i",{className:"fa fa-heart","aria-hidden":"true"}),i.a.createElement("ins",null," ",e.likeCount))),i.a.createElement("li",null,i.a.createElement("span",{className:"dislike","data-toggle":"tooltip",title:"","data-original-title":"dislike"},i.a.createElement("i",{className:"fa fa-thumbs-down","aria-hidden":"true"}),i.a.createElement("ins",null,e.dislike))))))},z=a(296),Q=a.n(z),R=Object(y.a)(50),W=Object(O.a)({form:"post"})((function(e){var t=e.handleSubmit;return i.a.createElement("form",{className:Q.a.postForm,onSubmit:t},i.a.createElement("div",null,i.a.createElement(j.a,{className:Q.a.textarea,placeholder:"Write something",element:"textarea",name:"post",component:w.a,validate:[y.b,R]})),i.a.createElement("div",{className:Q.a.button},i.a.createElement("button",{type:"submit",className:"btn btn-outline-primary"},"Publish")))}));var Z=function(e){var t=Object(J.a)(e.posts).reverse().map((function(t,a){return i.a.createElement(Y,{name:e.name,message:t.message,photo:e.photo,key:a,likeCount:t.likeCount,id:t.id,views:t.views,comments:t.comments,dislike:t.dislike})}));return i.a.createElement("div",{className:G.a.postBlock},i.a.createElement("div",{className:G.a.newPost},i.a.createElement("div",{className:G.a.newPostBox},i.a.createElement("figure",{className:G.a.figure},i.a.createElement("img",{src:e.photo||b.a,alt:"person`s avatar"})),i.a.createElement("div",{className:G.a.newPostInput},i.a.createElement(W,{onSubmit:function(t){e.addNewPost(t.post)}})))),i.a.createElement("div",{className:G.a.posts},t))},H=a(97),K=function(e){return e.profilePage.profile},X=function(e){return e.profilePage.status},$=function(e){return e.authUser.id},ee=function(e){return e.authUser.isAuth},te=function(e){return e.profilePage.posts},ae=function(e){return e.profilePage.profile.photos.small},ne=function(e){return e.profilePage.profile.fullName},re=Object(c.b)((function(e){return{posts:te(e),photo:ae(e),name:ne(e)}}),{addNewPost:H.a})(Z),se=function(e){var t=e.profile,a=e.status,n=e.updateUserStatus,r=e.isOwner,s=e.savePhoto,o=e.saveProfile,c=Object(l.useState)(!1),p=Object(u.a)(c,2),E=p[0],v=p[1];if(!t)return i.a.createElement(d.a,null);return i.a.createElement("div",{className:f.a.profile},i.a.createElement("div",{className:f.a.fon},i.a.createElement("picture",null,i.a.createElement("source",{srcSet:C.a,media:"(max-width: 640px)"}),i.a.createElement("source",{srcSet:M.a,media:"(max-width: 960px)"}),i.a.createElement("source",{srcSet:A.a,media:"(min-width: 961px)"}),i.a.createElement("img",{className:f.a.fonImg,srcSet:C.a,src:C.a,alt:"fon"}))),i.a.createElement("div",{className:f.a.photo},i.a.createElement("div",{className:f.a.userPhoto},i.a.createElement("img",{src:t.photos.large||b.a,className:f.a.avatar,alt:"person`s avatar"})),r&&i.a.createElement("form",{className:f.a.editPhoto},i.a.createElement("i",{className:T()("fa",Object(m.a)({},"fa-camera-retro",!0))}," "),i.a.createElement("label",{className:f.a.fileContainer},"Edit Cover Photo",i.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&s(e.target.files[0])}})))),i.a.createElement("div",{className:f.a.containerFluid},i.a.createElement("div",{className:f.a.wrapper},i.a.createElement("div",{className:f.a.name},t.fullName),i.a.createElement("div",{className:f.a.status},i.a.createElement(_,{status:a,updateUserStatus:n})))),i.a.createElement("div",{className:f.a.main},i.a.createElement("div",{className:f.a.data},E?i.a.createElement(S,Object.assign({},t,{initialValues:t,onSubmit:function(e){o(e).then((function(e){0===e.data.resultCode&&v(!1)}))}})):i.a.createElement(k,Object.assign({},t,{isOwner:r,onEditMode:function(){return v(!0)}}))),i.a.createElement(re,null)))},oe=function(e){var t=e.profile,a=e.status,n=e.updateUserStatus,r=e.isOwner,s=e.savePhoto,o=e.saveProfile;return i.a.createElement("div",null,i.a.createElement(se,{saveProfile:o,savePhoto:s,isOwner:r,profile:t,status:a,updateUserStatus:n}))},le=a(10),ie=a(298),ce=a(9),me=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"getUserData",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.getUserData()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.getUserData()}},{key:"render",value:function(){return i.a.createElement(oe,{savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus})}}]),a}(i.a.Component);t.default=Object(ce.d)(Object(c.b)((function(e){return{profile:K(e),status:X(e),authUserId:$(e),isAuth:ee(e)}}),{getUserProfile:H.c,getUserStatus:H.d,updateUserStatus:H.g,savePhoto:H.e,saveProfile:H.f}),le.g,ie.a)(me)}}]);
//# sourceMappingURL=3.71eace12.chunk.js.map