(this.webpackJsonpfoodapp=this.webpackJsonpfoodapp||[]).push([[0],{15:function(e,s,t){},29:function(e,s,t){},37:function(e,s,t){},64:function(e,s,t){},65:function(e,s,t){},66:function(e,s,t){},67:function(e,s,t){},68:function(e,s,t){},69:function(e,s,t){},70:function(e,s,t){},71:function(e,s,t){},72:function(e,s,t){},73:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t.n(a),n=t(30),r=t.n(n),i=(t(37),t(2)),l=t.n(i),j=t(5),o=t(3),d=t(6),b=t.n(d),h=(t(15),t(7)),m=t(0),u=c.a.createContext();function x(){return Object(a.useContext)(u)}var O=function(e){var s=e.children,t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],r=c[1],i=Object(a.useState)(!1),d=Object(o.a)(i,2),h=d[0],x=d[1],O=Object(a.useState)(null),p=Object(o.a)(O,2),v=p[0],N=p[1],f=Object(a.useState)(null),g=Object(o.a)(f,2);function y(){return(y=Object(j.a)(l.a.mark((function e(s,t,a,c){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("signup will be here"),e.next=4,b.a.post("/api/v1/auth/signup",{name:s,password:t,confirmPassword:c,email:a});case 4:n=e.sent,console.log("data",n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("err",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function w(){return(w=Object(j.a)(l.a.mark((function e(s,t){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!0,e.prev=1,x(!0),e.next=5,b.a.post("/api/v1/auth/login",{email:s,password:t});case 5:return c=e.sent,r(c.data.user),x(!1),e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),alert(e.t0.message),x(!1);case 16:console.log("login will be here");case 17:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}var B={user:n,login:function(e,s){return w.apply(this,arguments)},signUp:function(e,s,t,a){return y.apply(this,arguments)},logout:function(){console.log("logout will come here")},resetPassEmail:v,setResetEmail:N,otpPassEmail:g[0],setOtpPassEmail:g[1]};return Object(m.jsx)(u.Provider,{value:B,children:!h&&s})};var p=function(e){var s=Object(h.f)(),t=x().signUp,c=Object(a.useState)(""),n=Object(o.a)(c,2),r=n[0],i=n[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),u=b[0],O=b[1],p=Object(a.useState)(""),v=Object(o.a)(p,2),N=v[0],f=v[1],g=Object(a.useState)(""),y=Object(o.a)(g,2),w=y[0],B=y[1],C=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("sending request"),e.next=4,t(r,u,N,w);case 4:s.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"container-grey",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"SIGN UP"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Name"}),Object(m.jsx)("input",{className:"name input",type:"text",name:"Name",placeholder:"Your Name",required:"",onChange:function(e){return i(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Email"}),Object(m.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return f(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Password"}),Object(m.jsx)("input",{className:"password input",type:"password",name:"Password",placeholder:"**********",onChange:function(e){return O(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Confirm  Password"}),Object(m.jsx)("input",{className:"confirmPassword input",type:"password",name:"ConfirmPassword",placeholder:"**********",onChange:function(e){return B(e.target.value)}})]}),Object(m.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:C,children:"Sign Up"})]})]})})},v=t.p+"static/media/date.fcfd3f00.png",N=t.p+"static/media/carrot.6508ea02.png",f=t.p+"static/media/fast.f1644b7d.png",g=t.p+"static/media/Capture.611de11d.png",y=t.p+"static/media/star.49259244.png";t(64);var w=function(){var e=Object(a.useState)([]),s=Object(o.a)(e,2),t=s[0],c=s[1];return Object(a.useEffect)(Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/top3reviews");case 3:s=e.sent,c(s.data.reviews),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]),Object(m.jsx)("div",{className:"reviewImg",children:Object(m.jsxs)("div",{className:"reviewCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"REVIEWS"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsx)("div",{className:"rDetail",children:t&&(null===t||void 0===t?void 0:t.map((function(e,s){return Object(m.jsxs)("div",{className:"rCard",children:[Object(m.jsx)("div",{className:"rimage",children:Object(m.jsx)("img",{alt:"",src:e.user.profileImage,className:"img"})}),Object(m.jsx)("div",{className:"rheader",children:Object(m.jsx)("h3",{className:"rh3",children:"Shreya Srivastava"})}),Object(m.jsx)("div",{className:"rsummary",children:Object(m.jsx)("p",{className:"para",children:e.review})}),Object(m.jsx)("div",{children:Object(m.jsxs)("h4",{children:["Plan Name : ",e.plan.name]})}),Object(m.jsx)("div",{className:"frate",children:Array.from(Array(e.rating).keys()).map((function(e,s){return Object(m.jsx)("img",{alt:"",src:y,className:"img"})}))})]},s)})))})]})})},B=(t(65),t.p+"static/media/check-mark.1c103279.png");var C=function(){var e=Object(a.useState)([]),s=Object(o.a)(e,2),t=s[0],c=s[1];return Object(a.useEffect)(Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/gettop3");case 3:s=e.sent,c(s.data.data),console.log(s.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(m.jsxs)("div",{className:"plansCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"START EATING HEALTHY TODAY"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsx)("div",{className:"planDetails",children:t&&(null===t||void 0===t?void 0:t.map((function(e,s){return Object(m.jsxs)("div",{className:"pCard",children:[Object(m.jsx)("h3",{className:"h3",children:e.name}),Object(m.jsxs)("div",{className:"pCard1",children:[Object(m.jsxs)("div",{className:"priceBox",children:[Object(m.jsxs)("div",{className:"price",children:["Rs ",e.price]}),Object(m.jsx)("div",{className:"duration",children:"/month"})]}),Object(m.jsx)("p",{className:"point",children:"That\u2019s only 2\u20b9 per meal"})]}),Object(m.jsxs)("div",{className:"pCard2",children:[Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:B,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.duration," meal every day"]})]}),Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:B,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.discount," discount available."]})]}),Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:B,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.ratingsAverage," rated meal."]})]})]}),Object(m.jsx)("button",{className:"btn",children:"I'm Hungry"})]},s)})))})]})},E=(t(29),t.p+"static/media/Avocado.a47677c6.mp4"),S=t(4);var P=function(){return Object(m.jsxs)("div",{className:"contactCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"CONTACT US"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"cDetail",children:[Object(m.jsx)("div",{className:"videoBox",children:Object(m.jsx)("video",{src:E,className:"video",muted:"muted",type:"video/mp4",loop:!0,autoPlay:!0})}),Object(m.jsxs)("div",{className:"contactInfo",children:[Object(m.jsxs)("div",{className:"entry",children:[Object(m.jsx)("div",{className:"entry-text",children:"Name"}),Object(m.jsx)("input",{type:"text",name:"Name",placeholder:"Your Name",required:!0})]}),Object(m.jsxs)("div",{className:"entry",children:[Object(m.jsx)("div",{className:"entry-text",children:"Email"}),Object(m.jsx)("input",{type:"email",name:"email",placeholder:"Your Email"})]}),Object(m.jsxs)("div",{className:"entry",children:[Object(m.jsx)("div",{className:"entry-text",children:"How did you find us"}),Object(m.jsxs)("select",{name:"",id:"",className:"select",children:[Object(m.jsx)("option",{value:"",children:"friends"}),Object(m.jsx)("option",{value:"",children:"search"}),Object(m.jsx)("option",{value:"",children:"advertsiment"}),Object(m.jsx)("option",{value:"",children:"other"})]})]}),Object(m.jsxs)("div",{className:"textBox",children:[Object(m.jsx)("div",{className:"entry-text",children:"Drop us a line"}),Object(m.jsx)("textarea",{name:"",id:"",placeholder:"Your Message"})]}),Object(m.jsxs)("div",{className:"checkbox ",children:[Object(m.jsx)("input",{type:"checkbox",name:"email",className:"checkbox"}),Object(m.jsx)("span",{className:"checkbox-conditions",children:"I have read and agree with all the Privacy Policy and Terms Conditions"})]}),Object(m.jsx)("div",{className:"sendBtn",children:Object(m.jsx)(S.b,{to:"#",className:" btn-full form-button",children:"SEND"})})]})]})]})};t(66);var k=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"bgImageCard",children:Object(m.jsx)("div",{className:"introCard",children:Object(m.jsxs)("div",{className:"iCard",children:[Object(m.jsxs)("div",{className:"headerBox",children:[Object(m.jsx)("div",{className:"header1",children:Object(m.jsx)("h1",{className:"hh1",children:"MEAL PLANS."})}),Object(m.jsxs)("div",{className:"header2",children:[Object(m.jsx)("h1",{className:"hh1",children:"FOR"}),Object(m.jsx)("h1",{className:" animateh1",children:"EVERYONE"})]})]}),Object(m.jsxs)("div",{className:"btnBox",children:[Object(m.jsx)("button",{className:"bookNowBtn btn",children:" Book Now"}),Object(m.jsx)("button",{className:"showMoreBtn btn",children:"Show Me More"})]})]})})}),Object(m.jsxs)("div",{className:"featureCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"AWESOME FEATURES"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"fDetail",children:[Object(m.jsxs)("div",{className:"fCard",children:[Object(m.jsx)("div",{className:"fimage",children:Object(m.jsx)("img",{src:v,className:"fimg",alt:""})}),Object(m.jsx)("div",{className:"fheader",children:Object(m.jsx)("h3",{className:"h3",children:"365 DAYS/YEAR"})}),Object(m.jsx)("div",{className:"fsummary",children:Object(m.jsx)("p",{className:"para",children:"Never cook again! We really mean that. Our subscription plans include up to 365 days/year of coverage and you can also choose to order more flexibly if that is your style."})})]}),Object(m.jsxs)("div",{className:"fCard",children:[Object(m.jsx)("div",{className:"fimage",children:Object(m.jsx)("img",{src:f,alt:"",className:"fimg"})}),Object(m.jsx)("div",{className:"fheader",children:Object(m.jsx)("h3",{className:"h3",children:"30 MINUTES OR FREE"})}),Object(m.jsx)("div",{className:"fsummary",children:Object(m.jsx)("p",{className:"para",children:"You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy."})})]}),Object(m.jsxs)("div",{className:"fCard",children:[Object(m.jsx)("div",{className:"fimage",children:Object(m.jsx)("img",{src:N,alt:"",className:"fimg"})}),Object(m.jsx)("div",{className:"fheader",children:Object(m.jsx)("h3",{className:"h3",children:"100% ORGANIC"})}),Object(m.jsx)("div",{className:"fsummary",children:Object(m.jsx)("p",{className:"para",children:"All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!"})})]})]})]}),Object(m.jsxs)("div",{className:"stepsCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"STEPS TO FOLLOW"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"fDetail",children:[Object(m.jsx)("div",{className:"sbox1",children:Object(m.jsx)("img",{src:g,alt:" ",className:"fimg"})}),Object(m.jsxs)("div",{className:"sbox2",children:[Object(m.jsxs)("div",{className:"stepsBox",children:[Object(m.jsx)("div",{className:"num",children:" 1 "}),Object(m.jsx)("div",{className:"steps",children:Object(m.jsx)("p",{className:"para",children:"Choose the subscription plan that best fits your needs and sign up today."})})]}),Object(m.jsxs)("div",{className:"stepsBox",children:[Object(m.jsx)("div",{className:"num",children:" 2 "}),Object(m.jsx)("div",{className:"steps",children:Object(m.jsx)("p",{className:"para",children:"Order your delicious meal using our mobile app or website. Or you can even call us!"})})]}),Object(m.jsxs)("div",{className:"stepsBox",children:[Object(m.jsx)("div",{className:"num",children:" 3 "}),Object(m.jsx)("div",{className:"steps",children:Object(m.jsx)("p",{className:"para",children:"Enjoy your meal after less than 20 minutes. See you the next time!"})})]})]})]})]}),Object(m.jsx)(w,{}),Object(m.jsx)(C,{}),Object(m.jsx)(P,{})]})};t(67),t(68);var T=function(){var e=x(),s=e.user,t=e.logout;return Object(a.useEffect)((function(){var e=document.querySelector("nav");window.addEventListener("scroll",(function(){window.pageYOffset>0?e.setAttribute("class","activeNavBar"):0===window.pageYOffset&&e.classList.remove("activeNavBar")}))}),[]),Object(m.jsx)("nav",{children:Object(m.jsx)("div",{className:"menu",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(S.b,{to:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(S.b,{to:"/allPlans",children:"Plans"})}),s?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("li",{children:Object(m.jsx)(S.b,{to:"/profilePage",children:null===s||void 0===s?void 0:s.name})}),Object(m.jsx)("li",{children:Object(m.jsx)(S.b,{to:"",onClick:t,children:"Logout"})})]}):Object(m.jsx)("li",{children:Object(m.jsx)(S.b,{to:"/login",children:"Login"})})]})})})};t(69);var A=function(){return Object(m.jsx)("div",{className:"footerImg",children:Object(m.jsxs)("footer",{children:[Object(m.jsxs)("div",{className:"footer-parent",children:[Object(m.jsxs)("ul",{className:"footer-text",children:[Object(m.jsx)("li",{className:"text-value",children:Object(m.jsx)(S.b,{to:"#",children:"About us"})}),Object(m.jsx)("li",{className:"text-value",children:Object(m.jsx)(S.b,{to:"#",children:"ios App"})}),Object(m.jsx)("li",{className:"text-value",children:Object(m.jsx)(S.b,{to:"#",children:"Android App"})})]}),Object(m.jsxs)("ul",{className:"social-link",children:[Object(m.jsx)("li",{children:Object(m.jsx)(S.b,{to:"https://www.facebook.com/foodyy.chaachaa"})}),Object(m.jsx)("li",{children:Object(m.jsx)(S.b,{to:"https://www.instagram.com/foddy_chaachaa"})}),Object(m.jsx)("li",{children:Object(m.jsx)(S.b,{to:"https://twitter.com/ChaaFoody"})}),Object(m.jsx)("li",{children:Object(m.jsx)(S.b,{to:"#"})})]})]}),Object(m.jsx)("p",{className:"footer-p",children:"Copyright \xa9 2019 EVERYONE. All rights reserved."})]})})};var R=function(){var e=Object(h.f)(),s=Object(a.useState)(""),t=Object(o.a)(s,2),c=t[0],n=t[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),d=i[0],b=i[1],x=Object(a.useState)(!1),O=Object(o.a)(x,2),p=(O[0],O[1],Object(a.useContext)(u)),v=p.login,N=(p.user,function(){var s=Object(j.a)(l.a.mark((function s(){return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,v(d,c);case 3:s.sent&&e.push("/"),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.log(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(){return s.apply(this,arguments)}}());return Object(m.jsx)("div",{className:"container-grey",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"LOGIN"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Email"}),Object(m.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return b(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Password"}),Object(m.jsx)("input",{className:"password input",type:"password",name:"Password",placeholder:"**********",onChange:function(e){return n(e.target.value)}})]}),Object(m.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:N,children:"Login"}),Object(m.jsxs)("div",{className:"otherOption",children:[Object(m.jsx)("button",{className:" otherbtns form-button",type:"submit",children:Object(m.jsx)(S.b,{to:"/signup",className:"otherbtns",children:"Sign Up"})}),Object(m.jsx)("button",{className:" otherbtns form-button",type:"submit",children:Object(m.jsx)(S.b,{to:"/forgetPassword",className:"otherbtns",children:"Forget Password"})})]})]})]})})};var D=function(){var e=Object(a.useState)(""),s=Object(o.a)(e,2),t=s[0],c=s[1],n=x().setResetEmail,r=Object(h.f)(),i=function(){var e=Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.patch("/api/v1/auth/forgetPassword",{email:t});case 2:s=e.sent,alert("mail send to your regsitered email"),console.log(s),n(t),r.push("/otp");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"container-grey",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"FORGET PASSWORD"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Email"}),Object(m.jsx)("input",{className:"email input",type:"email",name:"Email",placeholder:"Your Email",required:"",onChange:function(e){return c(e.target.value)}})]}),Object(m.jsx)("button",{className:"loginBtn  form-button",onClick:i,children:"Send Email"})]})]})})};t(70);var I=function(){var e=Object(a.useState)([]),s=Object(o.a)(e,2),t=s[0],c=s[1];return Object(a.useEffect)(Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/v1/plan");case 3:s=e.sent,console.log(s.data),c(s.data.allPlans),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),Object(m.jsxs)("div",{className:"allplansCard",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"START EATING HEALTHY TODAY"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsx)("div",{className:"allplanDetails",children:Object(m.jsx)("div",{className:"planDetails",children:t&&(null===t||void 0===t?void 0:t.map((function(e,s){return Object(m.jsxs)("div",{className:"apCard",children:[Object(m.jsx)("h3",{className:"h3",children:e.name}),Object(m.jsxs)("div",{className:"pCard1",children:[Object(m.jsxs)("div",{className:"priceBox",children:[Object(m.jsxs)("div",{className:"price",children:["Rs ",e.price]}),Object(m.jsx)("div",{className:"duration",children:"/month"})]}),Object(m.jsxs)("p",{className:"point",children:["That\u2019s only ",Math.floor(e.price/e.duration)," per meal"]})]}),Object(m.jsxs)("div",{className:"pCard2",children:[Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:B,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.duration," meal every day"]})]}),Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:B,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.discount," discount available."]})]}),Object(m.jsxs)("div",{className:"ppoints",children:[Object(m.jsx)("img",{src:B,alt:"",className:"img"}),Object(m.jsxs)("p",{className:"point",children:[e.ratingsAverage," rated meal."]})]})]}),Object(m.jsxs)("button",{className:"btn",children:[" ",Object(m.jsx)(S.b,{to:"/planDetail/".concat(e._id),children:"I'm Hungry"})]})]},s)})))})})]})};t(71);var F=function(){var e=x().user,s=Object(a.useState)(e.password),t=Object(o.a)(s,2),c=t[0],n=t[1],r=Object(a.useState)(e.password),i=Object(o.a)(r,2),d=i[0],h=i[1],u=Object(a.useState)(e.email),O=Object(o.a)(u,2),p=O[0],v=O[1],N=Object(a.useState)(e.name),f=Object(o.a)(N,2),g=f[0],y=f[1],w=function(){var s=Object(j.a)(l.a.mark((function s(){return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,console.log(e.user._id),s.next=4,b.a.patch("/api/v1/user/profile"+e.user._id,{headers:{Authorization:"Bearer ".concat(e.token)}},{email:p,name:g,password:c,confirmPassword:d,role:e.user.role,_id:e.user._id});case 4:s.sent,s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),console.log(s.t0);case 10:case"end":return s.stop()}}),s,null,[[0,7]])})));return function(){return s.apply(this,arguments)}}();return console.log(e),Object(m.jsx)("div",{className:"container-grey",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"Profile"}),"\\",Object(m.jsx)("div",{className:"line"}),Object(m.jsx)("div",{className:"profileImage",children:Object(m.jsx)("img",{src:e.profileImage})})]}),Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsx)("div",{className:"entryBox",children:Object(m.jsx)("input",{type:"file"})}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Email"}),Object(m.jsx)("input",{className:"email input",type:"email",value:p,onChange:function(e){return v(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Password"}),Object(m.jsx)("input",{className:"password input",type:"text",value:c,onChange:function(e){return n(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Confirm Password"}),Object(m.jsx)("input",{className:"password input",type:"text",value:d,onChange:function(e){return h(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Name"}),Object(m.jsx)("input",{className:"password input",type:"text",value:g,onChange:function(e){return y(e.target.value)}})]}),Object(m.jsx)("button",{className:"loginBtn  form-button",type:"submit",onClick:w,children:"Update Profile"})]})]})})};t(72);var Y=function(){var e=Object(a.useState)({}),s=Object(o.a)(e,2),t=s[0],c=s[1],n=Object(h.g)().id,r=Object(a.useState)(),i=Object(o.a)(r,2),d=i[0],u=i[1],O=Object(a.useState)(""),p=Object(o.a)(O,2),v=p[0],N=p[1],f=Object(a.useState)(),g=Object(o.a)(f,2),y=g[0],w=g[1],B=x().user;function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}Object(a.useEffect)(Object(j.a)(l.a.mark((function e(){var s,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/v1/plan/".concat(n));case 2:return s=e.sent,console.log(s.data.plan),delete s.data.plan._id,delete s.data.plan.__v,c(s.data.plan),e.next=9,b.a.get("/api/getReview/"+n);case 9:t=e.sent,u(t.data.reviews),console.log(d);case 12:case"end":return e.stop()}}),e)}))),[]),console.log(y);var E=function(){var e=Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(123645),e.next=3,b.a.post("/api/reviews",{review:v,rating:y,user:B.user._id,plan:n});case 3:return e.sent,e.next=6,b.a.get("/api/getReview/"+n);case 6:s=e.sent,u(s.data.reviews);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.delete("/",{id:n});case 3:s=e.sent,alert(s),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"pDetailBox",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"PLAN DETAILS"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsx)("div",{className:"planDetailBox",children:Object(m.jsx)("div",{className:"planDetail",children:Object(m.jsx)("div",{className:"loginBox",children:Object.keys(t).map((function(e,s){return Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:C(e)}),Object(m.jsx)("div",{className:" input",children:C(t[e].toString())})]},s)}))})})}),Object(m.jsxs)("div",{className:"reviewBox",children:[Object(m.jsxs)("div",{className:"reviewEnrty",children:[Object(m.jsx)("input",{type:"text",value:v,onChange:function(e){return N(e.target.value)}}),Object(m.jsxs)("select",{name:"",id:"",className:"select",onChange:function(e){w(e.target.value)},children:[Object(m.jsx)("option",{value:"5",children:"5 Exellent"}),Object(m.jsx)("option",{value:"4",children:"4 Very Good"}),Object(m.jsx)("option",{value:"3",children:"3 Good"}),Object(m.jsx)("option",{value:"2",children:"2 Poor"}),Object(m.jsx)("option",{value:"1",children:"1 Very Poor"})]}),Object(m.jsx)("button",{className:"btn",onClick:E,children:"Submit"})]}),d&&(null===d||void 0===d?void 0:d.map((function(e,s){return Object(m.jsxs)("div",{className:"reviewsCard",children:[Object(m.jsxs)("div",{className:"pdreviews",children:[Object(m.jsxs)("div",{className:"pdrdetail",children:[Object(m.jsx)("h3",{children:e.user.name}),Object(m.jsxs)("div",{className:"input",children:[" ",e.review]})]}),Object(m.jsx)("div",{className:"rate",children:Object(m.jsx)("label",{htmlFor:"star5",title:"text",children:e.rating})})]}),Object(m.jsx)("div",{className:"rcBtn",children:Object(m.jsx)("button",{className:"showMoreBtn btn",onClick:S,children:"Delete"})})]},s)})))]})]})};var L=function(){var e=Object(a.useState)(""),s=Object(o.a)(e,2),t=s[0],c=s[1],n=Object(h.f)(),r=x(),i=r.resetPassEmail,d=r.setOtpPassEmail,b=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(t),n.push("/passwordReset");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:null!=i?Object(m.jsx)("div",{className:"container-grey",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"ENTER OTP"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"OTP"}),Object(m.jsx)("input",{className:"email input",value:t,type:"text",name:"Email",placeholder:"Your OTP",onChange:function(e){return c(e.target.value)}})]}),Object(m.jsx)("button",{className:"loginBtn  form-button",onClick:b,children:"Send OTP"})]})]})}):Object(m.jsx)("h2",{className:"container-grey",children:"First go to your Forget Password"})})};var U=function(){var e=Object(a.useState)(""),s=Object(o.a)(e,2),t=s[0],c=s[1],n=Object(a.useState)(""),r=Object(o.a)(n,2),i=r[0],d=r[1],u=x(),O=u.resetPassEmail,p=u.setResetEmail,v=u.otpPassEmail,N=u.setOtpPassEmail,f=Object(h.f)(),g=function(){var e=Object(j.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("button clicked"),e.prev=1,e.next=4,b.a.patch("/api/v1/auth/resetPassword",{otp:v,email:O,password:t,confirmPassword:i});case 4:s=e.sent,console.log(s),201==s.status?(alert("password changed successfully"),N(null),p(null),f.push("/login")):200==s.status&&(alert(s.data.message),N(null),p(null)),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message),"Request failed with status code 500"==e.t0.message&&alert("Internal server error"),N(null),p(null);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:O&&v?Object(m.jsx)("div",{className:"container-grey",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsxs)("div",{className:"h1Box",children:[Object(m.jsx)("h1",{className:"h1",children:"RESET PASSWORD"}),Object(m.jsx)("div",{className:"line"})]}),Object(m.jsxs)("div",{className:"loginBox",children:[Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Password"}),Object(m.jsx)("input",{className:"password input",type:"text",value:t,onChange:function(e){return c(e.target.value)}})]}),Object(m.jsxs)("div",{className:"entryBox",children:[Object(m.jsx)("div",{className:"entryText",children:"Confirm Password"}),Object(m.jsx)("input",{className:"password input",type:"text",value:i,onChange:function(e){return d(e.target.value)}})]}),Object(m.jsx)("button",{className:"loginBtn  form-button",onClick:g,children:"Send OTP"})]})]})}):Object(m.jsx)("h2",{className:"container-grey",children:"First go to your Forget Password"})})};var _=function(){return Object(m.jsx)(S.a,{children:Object(m.jsxs)(O,{children:[Object(m.jsx)(T,{}),Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/signup",children:Object(m.jsx)(p,{})}),Object(m.jsx)(h.a,{path:"/profilePage",children:Object(m.jsx)(F,{})}),Object(m.jsx)(h.a,{path:"/login",children:Object(m.jsx)(R,{})}),Object(m.jsx)(h.a,{path:"/forgetPassword",children:Object(m.jsx)(D,{})}),Object(m.jsx)(h.a,{path:"/otp",children:Object(m.jsx)(L,{})}),Object(m.jsx)(h.a,{path:"/passwordReset",children:Object(m.jsx)(U,{})}),Object(m.jsx)(h.a,{path:"/allPlans",children:Object(m.jsx)(I,{})}),Object(m.jsx)(h.a,{path:"/planDetail/:id",children:Object(m.jsx)(Y,{})}),Object(m.jsx)(h.a,{path:"/",children:Object(m.jsx)(k,{})})]}),Object(m.jsx)(A,{})]})})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,74)).then((function(s){var t=s.getCLS,a=s.getFID,c=s.getFCP,n=s.getLCP,r=s.getTTFB;t(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(m.jsx)(_,{}),document.getElementById("root")),G()}},[[73,1,2]]]);
//# sourceMappingURL=main.48510475.chunk.js.map