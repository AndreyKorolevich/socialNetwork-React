(this.webpackJsonpreact1=this.webpackJsonpreact1||[]).push([[4],{295:function(e,t,a){e.exports=a.p+"static/media/Programmyi-dlya-sozdaniya-avatarok.de470447.png"},308:function(e,t,a){e.exports={users:"Users_users__wq2bh"}},309:function(e,t,a){e.exports={user:"User_user__2i00f",avatar:"User_avatar__2F6xN"}},310:function(e,t,a){e.exports={pageNumber:"Paginator_pageNumber__1vMZ-",selectedPage:"Paginator_selectedPage__3dvOt"}},318:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a(39),o=a(95),s=a(94),l=a(0),u=a.n(l),c=a(16),i=a(308),g=a.n(i),f=a(309),p=a.n(f),m=a(295),d=a.n(m),P=a(13),v=function(e){var t=e.state,a=e.followingInProgress,n=e.unfollow,r=e.follow;return u.a.createElement("div",{className:p.a.user},u.a.createElement("div",{className:p.a.photo},u.a.createElement(P.b,{to:"/profile/"+t.id},u.a.createElement("div",{className:p.a.avatar},u.a.createElement("img",{src:null!==t.photos.small?t.photos.small:d.a,alt:"users` avatars"}))),u.a.createElement("div",{className:p.a.button},t.followed?u.a.createElement("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){n(t.id)}},"Unfollow"):u.a.createElement("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Follow"))),u.a.createElement("div",{className:p.a.name},u.a.createElement("div",null,t.name)))},w=a(96),h=a(310),E=a.n(h),b=function(e){for(var t=e.totalItemsCount,a=e.pageSize,n=e.currentPage,r=e.onPageChange,o=e.portionSize,s=void 0===o?8:o,c=Math.ceil(t/a),i=[],g=1;g<=c;g++)i.push(g);var f=Math.ceil(c/s),p=Object(l.useState)(1),m=Object(w.a)(p,2),d=m[0],P=m[1],v=(d-1)*s+1,h=d*s;return u.a.createElement("div",null,d>1&&u.a.createElement("button",{onClick:function(){P(d-1)}},"PREV"),i.filter((function(e){return e>=v&&e<=h})).map((function(e,t){return u.a.createElement("button",{key:t,className:n===e?E.a.selectedPage:void 0,onClick:function(){r(e)}},e)})),f>d&&u.a.createElement("button",{onClick:function(){P(d+1)}},"NEXT"))},C=function(e){var t=e.users,a=e.follow,n=e.unfollow,r=e.followingInProgress,o=e.totalUsersCount,s=e.pageSize,l=e.currentPage,c=e.onPageChange,i=t.map((function(e,t){return u.a.createElement(v,{state:e,follow:a,unfollow:n,followingInProgress:r,key:t})}));return u.a.createElement("div",{className:g.a.usersBlock},u.a.createElement("h3",null,"Users"),u.a.createElement("div",{className:g.a.pageNumber},u.a.createElement(b,{totalItemsCount:o,pageSize:s,currentPage:l,onPageChange:c})),u.a.createElement("div",{className:g.a.users},i))},N=a(86),_=a(133),U=function(e){return e.usersPage.users},k=function(e){return e.usersPage.pageSize},z=function(e){return e.usersPage.totalUsersCount},S=function(e){return e.usersPage.currentPage},I=function(e){return e.usersPage.isFetching},y=function(e){return e.usersPage.followingInProgress},O=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).onPageChange=function(t){var a=e.props;(0,a.getPage)(t,a.pageSize)},e.render=function(){return u.a.createElement(u.a.Fragment,null,e.props.isFetching?u.a.createElement(N.a,null):null,u.a.createElement(C,{users:e.props.users,follow:e.props.follow,unfollow:e.props.unfollow,totalUsersCount:e.props.totalUsersCount,pageSize:e.props.pageSize,currentPage:e.props.currentPage,onPageChange:e.onPageChange,addNewUsers:e.addNewUsers,followingInProgress:e.props.followingInProgress}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,a=e.pageSize;this.props.getUser(t,a)}}]),a}(u.a.Component),j=Object(c.b)((function(e){return{users:U(e),pageSize:k(e),totalUsersCount:z(e),currentPage:S(e),isFetching:I(e),followingInProgress:y(e)}}),{follow:_.b,unfollow:_.f,setTotalCount:_.e,getUser:_.d,getPage:_.c})(O);t.default=j}}]);
//# sourceMappingURL=4.03f4b3c8.chunk.js.map