(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,r=1;r<s.length;r++){var o=s[r];0!==n[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},n={app:0},i=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"857d9800"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=n[t]=[e,a]}));e.push(s[2]=a);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=r(t);var l=new Error;i=function(e){o.onerror=o.onload=null,clearTimeout(u);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,s[1](l)}n[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"03c0":function(t,e,s){},"0dc6":function(t,e,s){"use strict";var a=s("3a65"),n=s.n(a);n.a},"2ab8":function(t,e,s){"use strict";var a=s("70d5"),n=s.n(a);n.a},"3a65":function(t,e,s){},"48d6":function(t,e,s){"use strict";var a=s("03c0"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("Nav"),s("div",{staticClass:"container"},[s("router-view")],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[s("nav",{staticClass:"navbar container is-fixed-top is-info has-background-grey-dark",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[t._m(0),s("a",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},on:{click:function(e){t.isActive=!t.isActive}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive},attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item has-text-success",attrs:{to:"/"}},[t._v("Home")]),s("router-link",{staticClass:"navbar-item has-text-success",attrs:{to:"/about"}},[t._v("About")]),s("router-link",{staticClass:"navbar-item has-text-success",attrs:{to:"/schedule"}},[t._v("Schedule")]),s("router-link",{staticClass:"navbar-item has-text-success",attrs:{to:"/workouts"}},[t._v("Workouts")]),s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link has-text-success"},[t._v(" More ")]),s("div",{staticClass:"navbar-dropdown"},[s("a",{staticClass:"navbar-item"},[s("router-link",{staticClass:"navbar-item has-text-success",attrs:{to:"/about"}},[t._v("About")])],1),s("a",{staticClass:"navbar-item"},[s("router-link",{staticClass:"navbar-item has-text-success",attrs:{to:"/report"}},[t._v("Report an Issue")])],1)])]),s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link has-text-success"},[t._v(" Admin ")]),s("div",{staticClass:"navbar-dropdown"},[s("a",{staticClass:"navbar-item"},[s("router-link",{staticClass:"navbar-item has-text-success",attrs:{to:"/users"}},[t._v("Users")])],1)])])],1),s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("LoginBadge")],1)])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[a("img",{attrs:{src:s("cf05"),width:"40",height:"28"}})])}],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"LoginBadge"}},[t.session.user?s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"has-text-weight-bold has-text-light has-text-success"},[t._v(t._s(t.session.user.name))]),s("p",{staticClass:"is-size-7 has-text-success"},[t._v("@"+t._s(t.session.user.handle))])])]):s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button has-text-success",attrs:{to:"/signUp"}},[s("strong",[t._v("Sign-Up")])]),s("router-link",{staticClass:"button has-text-success",attrs:{to:"/login"}},[s("strong",[t._v("Log-In")])])],1)])},l=[],u={user:null,notifications:[]},d=u,p={data:function(){return{session:d}}},h=p,m=(s("2ab8"),s("2877")),v=Object(m["a"])(h,o,l,!1,null,null,null),f=v.exports,b={data:function(){return{isActive:!1}},methods:{},components:{LoginBadge:f}},C=b,g=(s("5b49"),Object(m["a"])(C,r,c,!1,null,null,null)),x=g.exports,k={components:{Nav:x}},w=k,_=Object(m["a"])(w,n,i,!1,null,null,null),y=_.exports,A=(s("d3b7"),s("8c4f")),E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("h1",{staticClass:"title is-size-2 has-text-centered has-text-success has-text-weight-bold mb-6"},[t._v(" FIT INC ")]),s("article",{staticClass:"message is-large has-text-centered"},[s("div",{staticClass:"message-header has-text-success"},[s("p",[t._v("Message to our users:")])]),s("div",{staticClass:"message-body"},[t._v(" Here at FIT INC we are committed to bettering your life and getting people just like you moving on a daily basis. We make working out easy by allowing you to schedule which workouts you will do each and every day of the week. Having a schedule will make you more likely to do the exercise and not slack off. We want everyone to lead a healthy and happy life by getting people just like you MOVING! ")])]),s("figure",{staticClass:"image"},[s("img",{attrs:{src:"https://www.mensjournal.com/wp-content/uploads/mf/runner-1280.jpg?w=900&h=506&crop=1&quality=86&strip=all&iswp=1"}})])])}],N={name:"Home",components:{}},T=N,U=Object(m["a"])(T,E,j,!1,null,null,null),O=U.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[t._m(0),t._m(1),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.login(e)}}},[t._v(" Login ")])])])])},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input",attrs:{type:"email",placeholder:"Email"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})]),s("span",{staticClass:"icon is-small is-right"},[s("i",{staticClass:"fas fa-check"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])])])}],M={methods:{login:function(){d.user={name:"Cade Cabrera",handle:"cabreracade",profile:"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21370920_10209622095900406_1558557478066919662_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=SACDV3bx78gAX96KbJb&_nc_ht=scontent-lga3-1.xx&oh=47b81e9ad653b26796e4b0f8c5ccbb91&oe=5FACA43C"},this.$router.push("schedule")}}},R=M,G=(s("d6db"),Object(m["a"])(R,P,S,!1,null,null,null)),Z=G.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[t._m(0),s("h3",{staticClass:"title is-5 has-text-centered has-text-success mb-5"},[t._v(" Select which workouts you wish to do today from the list below. ")]),s("div",[s("div",{staticClass:"list has-text-success"},[t._l(t.listOne,(function(e){return s("div",{key:e.title,staticClass:"innerList"},[s("button",{staticClass:"button is-success",on:{click:function(s){return t.swap(e)}}},[t._v(" "+t._s(e.title)+" ")])])})),t._v(" Selected Workouts Appear Here ")],2),s("h3",{staticClass:"title is-2 has-text-centered has-text-success mb-5"},[t._v("List of Workouts:")]),s("div",{staticClass:"list"},t._l(t.listTwo,(function(e){return s("div",{key:e.title,staticClass:"innerList"},[s("button",{staticClass:"button is-success",on:{click:function(s){return t.swap(e)}}},[t._v(" "+t._s(e.title)+" ")])])})),0)])])},W=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title is-2 is-fluid"},[s("div",{staticClass:"notification has-background-grey-dark has-text-centered has-text-success is-succuss mb-4"},[t._v(" Workout Schedule ")])])}],D=(s("4de4"),{data:function(){return{items:[{id:0,title:"1 Mile Run",list:2},{id:1,title:"Lunges",list:2},{id:2,title:"Push-Ups",list:2},{id:3,title:"Squats",list:2},{id:4,title:"Sit-Ups",list:2},{id:5,title:"Crunches",list:2}]}},computed:{listOne:function(){return this.items.filter((function(t){return 1===t.list}))},listTwo:function(){return this.items.filter((function(t){return 2===t.list}))}},methods:{swap:function(t){1==t.list?t.list=2:t.list=1}}}),F=D,B=(s("48d6"),Object(m["a"])(F,J,W,!1,null,"5e8edb31",null)),Y=B.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"report"},[s("h1",{staticClass:"title is-size-2 has-text-centered has-text-success has-text-weight-bold mb-6"},[t._v(" Report an Issue ")]),s("article",{staticClass:"message is-large has-text-centered"},[s("div",{staticClass:"message-header has-text-centered has-text-success"},[s("p",[t._v("Having a Problem?")])]),s("div",{staticClass:"message-body"},[t._v(" We're here to help! You can report an issue to our owners email address: "),s("strong",[t._v(" [placeholder email] ")])])]),s("figure",{staticClass:"image"},[s("img",{attrs:{src:"data:image/png;base64,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"}})])])}],K={},L=K,X=Object(m["a"])(L,H,I,!1,null,null,null),V=X.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",[s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input",attrs:{type:"username",placeholder:"Username"}})])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input",attrs:{type:"email",placeholder:"Email"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-envelope"})])])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success"},[t._v(" Sign-Up ")])])])])}],Q={methods:{login:function(){d.user={name:"Cade Cabrera",handle:"cabreracade",profile:"https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21370920_10209622095900406_1558557478066919662_n.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=SACDV3bx78gAX96KbJb&_nc_ht=scontent-lga3-1.xx&oh=47b81e9ad653b26796e4b0f8c5ccbb91&oe=5FACA43C"},this.$router.push("schedule")}}},$=Q,tt=(s("0dc6"),Object(m["a"])($,z,q,!1,null,null,null)),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("h2",{staticClass:"title is-2 has-text-centered has-text-success"},[t._v("Workouts")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"card"},t._l(t.workouts,(function(t,e){return s("Workout",{key:e,attrs:{i:e,workout:t}})})),1)])])])},at=[],nt=(s("96cf"),s("1da1")),it=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.workout.FirstName)+" "+t._s(t.workout.LastName))]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.workout.PrimaryEmail))])])]),s("div",{staticClass:"content"},[t._v(" "+t._s(t.workout.Exercise_Type)+" "+t._s(t.workout.Note)+" "),s("time",{attrs:{datetime:"post.created_at"}},[t._v(t._s(t.workout.created_at))])]),t._l(t.post.Comments,(function(e){return s("div",{key:e.id,staticClass:"media"},[s("div",{staticClass:"media-content"},[s("b",[t._v(t._s(e.FirstName)+" "+t._s(e.LastName)+" ")]),s("span",[t._v(t._s(e.Text))])])])}))],2),s("footer",{staticClass:"card-footer"},[s("div",{staticClass:"field has-addons",staticStyle:{width:"100%"}},[s("div",{staticClass:"control  is-expanded"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.commentText,expression:"commentText"}],staticClass:"input",attrs:{type:"text",placeholder:"Add a comment"},domProps:{value:t.commentText},on:{input:function(e){e.target.composing||(t.commentText=e.target.value)}}})]),s("div",{staticClass:"control"},[s("a",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.comment(e)}}},[t._v(" Comment ")])])])]),s("footer",{staticClass:"card-footer"},[t._m(0),s("a",{staticClass:"card-footer-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.react(e)}}},[t._m(1),t._v(" React ")])])])},rt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-reply",attrs:{"aria-hidden":"true"}})]),t._v(" Reply ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-heart",attrs:{"aria-hidden":"true"}})])}],ct=(s("a9e3"),Object({NODE_ENV:"production",BASE_URL:""}).API_ROOT||"http://localhost:3001/");function ot(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return e?fetch(ct+t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()})):fetch(ct+t).then((function(t){return t.json()}))}function lt(t){return ot("reactions",{Workout_id:t,Owner_id:1})}function ut(t,e){return ot("comments",{Workout_id:t,Owner_id:1,Text:e})}var dt={data:function(){return{commentText:""}},props:{workout:Object,i:Number},methods:{react:function(){var t=this;lt(this.workout.id).then((function(e){return t.workout.Reactions+=1})).catch((function(t){return console.error(t)}))},comment:function(){var t=this;return Object(nt["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ut(t.workout.id,t.commentText);case 2:s=e.sent,t.workout.Comments.push(s);case 4:case"end":return e.stop()}}),e)})))()}}},pt=dt,ht=Object(m["a"])(pt,it,rt,!1,null,null,null),mt=ht.exports,vt={data:function(){return{workouts:[]}},created:function(){var t=this;return Object(nt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,getWorkouts();case 2:t.workouts=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{Workout:mt},methods:{}},ft=vt,bt=(s("e78b"),Object(m["a"])(ft,st,at,!1,null,null,null)),Ct=bt.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("h2",{staticClass:"title is-2 has-text-success mb-6 has-text-centered"},[t._v("Users Page")]),s("table",{staticClass:"table is-narrow has-background-grey-light is-hoverable is-fullwidth"},[t._m(0),s("tbody",t._l(t.list,(function(e,a){return s("tr",{key:a,attrs:{i:a,post:e}},[s("th",[t._v(t._s(e.id))]),s("td",[t._v(t._s(e.FirstName))]),s("td",[t._v(t._s(e.LastName))]),s("td",[t._v(t._s(e.Password))]),s("td",[t._v(t._s(e.DOB))]),s("td",[t._v(t._s(e.Type))])])})),0)])])},xt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"has-text-success-dark"},[t._v("id")]),s("th",{staticClass:"has-text-success-dark"},[t._v("First Name")]),s("th",{staticClass:"has-text-success-dark"},[t._v("Last Name")]),s("th",{staticClass:"has-text-success-dark"},[t._v("Password")]),s("th",{staticClass:"has-text-success-dark"},[t._v("DOB")]),s("th",{staticClass:"has-text-success-dark"},[t._v("Type")])])])}];function kt(){return ot("users")}var wt={data:function(){return{list:[]}},created:function(){var t=this;return Object(nt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,kt();case 2:t.list=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{},methods:{}},_t=wt,yt=Object(m["a"])(_t,gt,xt,!1,null,null,null),At=yt.exports;a["a"].use(A["a"]);var Et=[{path:"/",name:"Home",component:O},{path:"/login",name:"Login",component:Z},{path:"/schedule",name:"Schedule",component:Y},{path:"/report",name:"Report",component:V},{path:"/signUp",name:"SignUp",component:et},{path:"/workouts",name:"Workouts",component:Ct},{path:"/users",name:"Users",component:At},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],jt=new A["a"]({mode:"history",base:"",routes:Et}),Nt=jt;s("5abe"),s("15f5");a["a"].config.productionTip=!1,new a["a"]({router:Nt,render:function(t){return t(y)}}).$mount("#app")},5814:function(t,e,s){},"58de":function(t,e,s){},"5b49":function(t,e,s){"use strict";var a=s("58de"),n=s.n(a);n.a},"70d5":function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.82b9c7a5.png"},d6db:function(t,e,s){"use strict";var a=s("e67a"),n=s.n(a);n.a},e67a:function(t,e,s){},e78b:function(t,e,s){"use strict";var a=s("5814"),n=s.n(a);n.a}});
//# sourceMappingURL=app.ad68c74c.js.map