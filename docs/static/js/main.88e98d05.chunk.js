(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(26),r=a.n(s),l=a(116),i=a(108),o=a(16),j=a(1),d=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{expand:"lg shadow-sm rounded",children:Object(j.jsx)(i.a,{className:"container-lg",children:Object(j.jsx)(l.a.Brand,{as:o.b,to:"/",children:Object(j.jsx)("span",{style:{fontSize:"24px"},children:"LightNovel Reader"})})})}),Object(j.jsx)("hr",{className:"m-0"})]})},h=a(65),b=a.n(h),p=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("hr",{className:"m-0"}),Object(j.jsx)("footer",{className:"".concat(b.a.footer),children:Object(j.jsx)(i.a,{children:Object(j.jsx)("div",{children:Object(j.jsx)("h4",{children:"Light Novel Reader\xa9 2021"})})})})]})},x=a(10),O=a(19),u=a.n(O),m=a(14),v=a(119),_=a(13),g=a(34),f=a.n(g),N=function(e){var t=e.children;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(j.jsx)(j.Fragment,{children:t})},k=function(){var e=Object(_.f)().name,t=Object(c.useState)(),a=Object(x.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(!0),l=Object(x.a)(r,2),d=l[0],h=l[1],b=Object(c.useState)(!1),p=Object(x.a)(b,2),O=p[0],g=p[1];return Object(c.useEffect)((function(){var t=u.a.CancelToken.source();return localStorage.getItem("currentNovelInfo")&&localStorage.getItem("currentNovelName")===e?(s(JSON.parse(localStorage.getItem("currentNovelInfo"))),h(!1)):(h(!0),u.a.get("novel/".concat(e),{cancelToken:t.token}).then((function(t){s(t.data),localStorage.setItem("currentNovelInfo",JSON.stringify(t.data)),localStorage.setItem("currentNovelName",e),h(!1)})).catch((function(e){h(!0),console.log("Error in getNovelInfo :"+e)}))),function(){return t.cancel()}}),[e]),Object(j.jsx)(N,{children:Object(j.jsx)(i.a,{className:"container",children:!d&&n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:f.a.noveldetails__info,children:[Object(j.jsx)("div",{className:f.a.noveldetails__info__img,children:Object(j.jsx)("img",{src:n.imageUrl,alt:n.name.replace(/\n+/g,"")})}),Object(j.jsxs)("div",{className:f.a.noveldetails__info__info,children:[Object(j.jsx)("h3",{children:n.name.replace(/\n+/g,"")}),Object(j.jsxs)("h5",{children:["Author: ",n.author]}),Object(j.jsxs)("h5",{children:["Rating: ",n.rating]}),Object(j.jsxs)("h5",{children:["Geners :"," ",n.geners.map((function(e,t){return Object(j.jsxs)("span",{children:[e,"\xa0"]},t)}))]}),Object(j.jsxs)("h5",{children:["Status: ",n.status.replace(/\n+/,"")]})]})]}),Object(j.jsx)("h3",{children:"Summary"}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:n.summary}}),Object(j.jsxs)("div",{className:"d-flex align-items-center ".concat(f.a.noveldetails__listtitle__flex),children:[Object(j.jsx)("h3",{className:"mb-0 me-auto",children:"Chapters"}),Object(j.jsxs)("span",{onClick:function(){g(!O),document.getElementById("flex-reverse").style.flexDirection=O?"column":"column-reverse"},children:["Reverse ",Object(j.jsx)(j.Fragment,{children:"\u21c5"})]})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("div",{className:f.a.noveldetails__chapterlist,children:Object(j.jsx)(v.a,{id:"flex-reverse",as:"ul",children:n.chaptersListData.map((function(t,a){return Object(j.jsxs)(o.b,{to:"/novel/".concat(e).concat(t.chapterLinkName.replace("http://light-novel-scraper-api.herokuapp.com/novel/".concat(e),"")),children:[Object(j.jsx)("span",{children:t.chapterName}),Object(j.jsx)("span",{children:t.chapterReleaseTime})]},a)}))})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:f.a.noveldetails__info,children:[Object(j.jsx)(m.a,{width:200,height:250,className:"m-2"}),Object(j.jsxs)("div",{className:"flex--fix m-2",children:[Object(j.jsx)("h3",{children:Object(j.jsx)(m.a,{width:"60%"})}),Object(j.jsx)(m.a,{width:"40%",count:4})]})]}),Object(j.jsx)("h3",{children:"Summary"}),Object(j.jsx)("hr",{}),Object(j.jsx)(m.a,{count:6,width:"80%"}),Object(j.jsx)("h3",{children:"Chapters"}),Object(j.jsx)("hr",{}),Object(j.jsx)(m.a,{count:10,height:"25px"}),Object(j.jsx)("div",{className:"mb-3"})]})})})},S=(a(99),a(100),a(101),a(102),a(32)),I=a.n(S),w=function(){var e=Object(c.useState)(),t=Object(x.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),r=Object(x.a)(s,2),l=r[0],d=r[1],h=Object(c.useState)(),b=Object(x.a)(h,2),p=b[0],O=b[1],v=Object(c.useState)(),g=Object(x.a)(v,2),f=g[0],k=g[1],S=Object(_.f)(),w=S.name,C=S.number;return Object(c.useEffect)((function(){var e=u.a.CancelToken.source();return window.scrollTo(0,0),d(!0),u.a.get("novel/".concat(w,"/").concat(C)).then((function(e){n(e.data),d(!1)})).catch((function(e){d(!0),console.log(e)})),function(){return e.cancel()}}),[w,C]),Object(c.useEffect)((function(){var e=u.a.CancelToken.source();return localStorage.getItem("currentNovelInfo")&&localStorage.getItem("currentNovelName")===w?(O(JSON.parse(localStorage.getItem("currentNovelInfo"))),d(!1)):(d(!0),u.a.get("novel/".concat(w),{cancelToken:e.token}).then((function(e){O(e.data),localStorage.setItem("currentNovelInfo",JSON.stringify(e.data)),localStorage.setItem("currentNovelName",w),d(!1)})).catch((function(e){d(!0),console.log("Error in getNovelInfo :"+e)}))),function(){return e.cancel()}}),[w]),Object(c.useEffect)((function(){!function(){if(p)for(var e=0;e<p.chaptersListData.length;e++)if(p.chaptersListData[e].chapterLinkName.replace("http://light-novel-scraper-api.herokuapp.com/novel/".concat(w,"/"),"")===C){k({currentChapterIndex:e,prevChapterIndex:e+1,nextChapterIndex:e-1});break}}()}),[p,w,C]),Object(j.jsx)(N,{children:Object(j.jsx)(i.a,{className:"container",children:!l&&a&&p&&f?Object(j.jsxs)("div",{className:I.a.novelreader__container,children:[Object(j.jsxs)("div",{className:"shadow-sm rounded ".concat(I.a.novelreader__title),children:[Object(j.jsxs)("div",{className:I.a.novelreader__title__links,children:[Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("span",{children:"Home /"})}),Object(j.jsx)(o.b,{to:"/novel/".concat(w),children:Object(j.jsxs)("span",{children:[" ",p.name]})}),Object(j.jsx)("p",{children:p.chaptersListData[f.currentChapterIndex].chapterName})]}),Object(j.jsxs)("div",{children:[f.prevChapterIndex<p.chaptersListData.length?Object(j.jsx)(o.b,{to:"/novel/".concat(w,"/").concat(p.chaptersListData[f.prevChapterIndex].chapterLinkName.replace("http://light-novel-scraper-api.herokuapp.com/novel/".concat(w,"/"),"")),className:"btn btn-primary me-1",children:Object(j.jsx)("span",{children:" \u2190 prev "})}):null,f.nextChapterIndex>=0?Object(j.jsx)(o.b,{to:"/novel/".concat(w,"/").concat(p.chaptersListData[f.nextChapterIndex].chapterLinkName.replace("http://light-novel-scraper-api.herokuapp.com/novel/".concat(w,"/"),"")),className:"btn btn-primary",children:Object(j.jsx)("span",{children:" next \u2192 "})}):null]})]}),Object(j.jsx)("div",{className:"shadow-sm rounded ".concat(I.a.novelreader__view),dangerouslySetInnerHTML:{__html:a.data}}),Object(j.jsxs)("div",{className:"d-flex justify-content-center py-3 shadow-sm rounded",children:[f.prevChapterIndex<p.chaptersListData.length?Object(j.jsx)(o.b,{to:"/novel/".concat(w,"/").concat(p.chaptersListData[f.prevChapterIndex].chapterLinkName.replace("http://light-novel-scraper-api.herokuapp.com/novel/".concat(w,"/"),"")),className:"btn btn-primary me-1",children:Object(j.jsx)("span",{children:" \u2190 prev "})}):null,f.nextChapterIndex>=0?Object(j.jsx)(o.b,{to:"/novel/".concat(w,"/").concat(p.chaptersListData[f.nextChapterIndex].chapterLinkName.replace("http://light-novel-scraper-api.herokuapp.com/novel/".concat(w,"/"),"")),className:"btn btn-primary",children:Object(j.jsx)("span",{children:" next \u2192"})}):null]})]}):Object(j.jsxs)("div",{className:I.a.novelreader__container,children:[Object(j.jsxs)("div",{className:I.a.novelreader__title,children:[Object(j.jsxs)("h6",{children:[Object(j.jsx)(m.a,{width:200}),Object(j.jsx)(m.a,{width:100})]}),Object(j.jsx)("p",{children:Object(j.jsx)(m.a,{width:60,height:30})})]}),Object(j.jsxs)("div",{className:I.a.novelreader__view,children:[Object(j.jsx)(m.a,{count:3}),Object(j.jsx)("br",{}),Object(j.jsx)(m.a,{count:4}),Object(j.jsx)("br",{}),Object(j.jsx)(m.a,{count:3}),Object(j.jsx)("br",{}),Object(j.jsx)(m.a,{count:2})]})]})})})},C=a(70),L=a(117),y=a(109),T=a(71),D=a(66),R=a(67),E=a.n(R),F=a(68),P=a.n(F),J=a(69),M=a.n(J),A=function(){var e=Object(c.useState)(),t=Object(x.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(1),r=Object(x.a)(s,2),l=r[0],d=r[1],h=Object(c.useState)(),b=Object(x.a)(h,2),p=b[0],O=b[1],v=Object(c.useState)(!0),_=Object(x.a)(v,2),g=_[0],f=_[1];Object(c.useEffect)((function(){var e=u.a.CancelToken.source();return f(!0),u.a.get("novel-list/".concat(l,"/").concat(p||"views"),{cancelToken:e.token}).then((function(e){n(e.data),f(!1)})).catch((function(e){f(!0),console.log("Error in getNovelList :"+e)})),function(){e.cancel()}}),[l,p]);return Object(j.jsxs)(i.a,{className:"container section__sortlist",children:[Object(j.jsxs)("div",{className:"d-flex align-items-end",children:[Object(j.jsx)("div",{children:Object(j.jsx)("h3",{children:"All novels"})}),Object(j.jsx)(C.a,{className:"ms-auto",controlId:"floatingSelect",label:"Sort by",children:Object(j.jsxs)(L.a.Select,{disabled:g,onChange:function(e){O(e.target.value)},"aria-label":"Floating label",children:[Object(j.jsx)("option",{value:"views",children:"Most views"}),Object(j.jsx)("option",{value:"trending",children:"Trending"}),Object(j.jsx)("option",{value:"latest",children:"Last updated"}),Object(j.jsx)("option",{value:"new",children:"New"}),Object(j.jsx)("option",{value:"alphabet",children:"A-Z"})]})})]}),Object(j.jsx)("hr",{}),Object(j.jsxs)(i.a,{className:"sortnovellist",children:[Object(j.jsx)(y.a,{children:!g&&a?a.map((function(e,t){return Object(j.jsxs)(T.a,{lg:2,md:3,xs:4,children:[Object(j.jsxs)(o.b,{"data-tip":e.title,to:"/novel".concat(e.link.replace("http://light-novel-scraper-api.herokuapp.com/novel","")),className:M.a.novellist__box,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e.imageUrl,alt:"".concat(e.title)})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h6",{children:e.title}),Object(j.jsxs)("div",{className:"text-muted lh-1",children:[Object(j.jsx)(P.a,{name:"Rating",value:Math.floor(Number(e.score)),starCount:5,editing:!1}),Object(j.jsx)("p",{children:e.score})]}),Object(j.jsx)("p",{className:"text-muted",children:"".concat(e.lastestChapter.replace(/[^0-9]/g,"")," Chapters")})]})]}),Object(j.jsx)(D.a,{})]},t)})):Object(j.jsxs)(T.a,{children:[Object(j.jsx)(m.a,{height:150}),Object(j.jsx)("h6",{children:Object(j.jsx)(m.a,{})}),Object(j.jsx)(m.a,{count:2}),Object(j.jsx)(m.a,{height:150}),Object(j.jsx)("h6",{children:Object(j.jsx)(m.a,{})}),Object(j.jsx)(m.a,{count:2})]})}),Object(j.jsx)("hr",{}),Object(j.jsx)(E.a,{nextLabel:">",marginPagesDisplayed:1,onPageChange:function(e){d(e.selected+1)},pageRangeDisplayed:2,pageCount:82,previousLabel:"<",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null})]})]})},H=a(118),B=a(113),W=a(115),Z=a(110),z=a(111),G=a(112),U=a(114),X=a(25),q=a.n(X);W.a.use([Z.a,z.a,G.a]);var V=function(){var e=Object(c.useState)(),t=Object(x.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(!0),r=Object(x.a)(s,2),l=r[0],d=r[1];return Object(c.useEffect)((function(){var e=u.a.CancelToken.source();return localStorage.getItem("popularNovels")?(n(JSON.parse(localStorage.getItem("popularNovels"))),d(!1)):(d(!0),u.a.get("novel-list/1/views",{cancelToken:e.token}).then((function(e){localStorage.setItem("popularNovels",JSON.stringify(e.data)),n(e.data),d(!1)})).catch((function(e){console.log("Error in slider "+e),d(!0)}))),function(){e.cancel()}}),[]),Object(j.jsxs)(i.a,{className:"section__popular",children:[Object(j.jsx)("h3",{children:"Popular Novels"}),Object(j.jsx)("hr",{}),Object(j.jsx)(H.a,{spaceBetween:20,pagination:{clickable:!0},keyboard:{enabled:!0},autoplay:{delay:5e3,disableOnInteraction:!0},children:!l&&a?a.map((function(e,t){return Object(j.jsxs)(B.a,{className:"".concat(q.a.slider__item," shadow rounded"),children:[Object(j.jsx)("div",{className:q.a.slider__img,children:Object(j.jsx)("img",{src:e.imageUrl,alt:"web novel coverphoto"})}),Object(j.jsxs)("div",{className:q.a.slider__info,children:[Object(j.jsx)("h4",{children:e.title}),Object(j.jsxs)("h6",{children:["Rating : ",e.score]}),Object(j.jsxs)("h6",{children:["Last chapter :",e.lastestChapter]}),Object(j.jsx)(o.b,{className:"".concat(q.a.slider__btn," btn btn-primary"),to:"/novel".concat(e.link.replace("http://light-novel-scraper-api.herokuapp.com/novel","")),children:"View Novel"}),Object(j.jsx)(o.b,{className:"".concat(q.a.slider__btn," btn btn-primary"),to:"/novel".concat(e.link.replace("http://light-novel-scraper-api.herokuapp.com/novel",""),"chapter-1"),children:"Start Reading"})]})]},t)})):Object(j.jsxs)(B.a,{className:"".concat(q.a.slider__item," "),children:[Object(j.jsx)("div",{className:q.a.slider__img,children:Object(j.jsx)(m.a,{width:110,height:150})}),Object(j.jsxs)("div",{className:q.a.slider__info,children:[Object(j.jsx)("h4",{children:Object(j.jsx)(m.a,{width:"70%"})}),Object(j.jsx)(m.a,{count:2,width:"30%"}),Object(j.jsx)(U.a,{disabled:l,className:q.a.slider__btn,variant:"primary",children:"View Novel"}),Object(j.jsx)(U.a,{disabled:l,className:q.a.slider__btn,variant:"primary",children:"Start Reading"})]})]})})]})},Y=function(){return Object(j.jsxs)(N,{children:[Object(j.jsxs)("section",{className:"container shadow-sm p-4 mx-auto my-5",style:{border:"1px solid rgb(77, 74, 74)",borderRadius:"10px"},children:[Object(j.jsx)("h4",{children:"Hey there!"}),Object(j.jsxs)("p",{style:{lineHeight:1.8,fontSize:"18px",fontWeight:500},children:["This site is a part of presonal project development, all the original works belong to the respective authors and translators. This web app is built using react and react-bootstrap, and the data comes from this",Object(j.jsxs)("a",{target:"blank",href:"https://github.com/Manideep519/LightNovelScraper-API",children:[" ","API"," "]}),".The data is fetched(scraped) from the source on every API request, so be patient as it gets the latest data from the source site.",Object(j.jsx)("br",{}),"Project link : ",Object(j.jsx)("a",{href:"https://github.com/Manideep519/Lightnovelreader",children:"github/Lightnovelreader"})]})]}),Object(j.jsx)(V,{}),Object(j.jsx)(A,{})]})};var K=function(){return Object(j.jsxs)(o.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(_.c,{children:[Object(j.jsx)(_.a,{path:"/",component:Y,exact:!0}),Object(j.jsx)(_.a,{path:"/novel/:name",component:k,exact:!0}),Object(j.jsx)(_.a,{path:"/novel/:name/:number",component:w,exact:!0})]}),Object(j.jsx)(p,{})]})};u.a.defaults.baseURL="https://light-novel-scraper-api.herokuapp.com/",r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(K,{})}),document.getElementById("root"))},25:function(e,t,a){e.exports={slider__item:"Slider_slider__item__PWXz3",slider__info:"Slider_slider__info__1XGXG",slider__btn:"Slider_slider__btn__2bRZw"}},32:function(e,t,a){e.exports={novelreader__container:"NovelReader_novelreader__container__3w5WL",novelreader__title:"NovelReader_novelreader__title__2IIRP",novelreader__title__links:"NovelReader_novelreader__title__links__1W8Zg",novelreader__view:"NovelReader_novelreader__view__2iuqM"}},34:function(e,t,a){e.exports={noveldetails__chapterlist:"NovelDetails_noveldetails__chapterlist__3FT8Y",noveldetails__info:"NovelDetails_noveldetails__info__1H_ij",noveldetails__info__img:"NovelDetails_noveldetails__info__img__3Z9lf",noveldetails__info__info:"NovelDetails_noveldetails__info__info__3xG72",noveldetails__listtitle__flex:"NovelDetails_noveldetails__listtitle__flex__20BFs"}},65:function(e,t,a){e.exports={footer:"Footer_footer__1hzW1"}},69:function(e,t,a){e.exports={novellist__box:"AllNovelList_novellist__box__nvpFS"}}},[[103,1,2]]]);
//# sourceMappingURL=main.88e98d05.chunk.js.map