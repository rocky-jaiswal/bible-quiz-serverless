(this["webpackJsonpsample-app"]=this["webpackJsonpsample-app"]||[]).push([[0],{18:function(e,n,t){e.exports={note_area:"styles_note_area__9UdUp",next_question:"styles_next_question__3Hbad",note_wrapper:"styles_note_wrapper__2C9q1",svg_image:"styles_svg_image__2fqsI",outer_success:"styles_outer_success___y9ll",show100:"styles_show100__21Kp_",outer_wrong:"styles_outer_wrong__XLSGa"}},28:function(e,n,t){e.exports={spinner_wrapper:"styles_spinner_wrapper__1kZww",spinner:"styles_spinner__3kNkA","rotate-forever":"styles_rotate-forever__2eqwq",spinner_wrapper_small:"styles_spinner_wrapper_small__1jn-s",spinner_small:"styles_spinner_small__1qPNx"}},33:function(e){e.exports=JSON.parse('{"app.welcome":"Welcome from CF - v4!","app.about":"About"}')},36:function(e,n,t){e.exports={main_container:"styles_main_container__2lY8x",page:"styles_page__2lrFz",main:"styles_main__S9urJ"}},43:function(e,n,t){e.exports={header:"styles_header__2dQfB",header_content:"styles_header_content__3o0rK"}},46:function(e,n,t){e.exports={timer_bar:"styles_timer_bar__1L_aS",timer:"styles_timer__3eBXQ"}},47:function(e,n,t){e.exports={options_area:"styles_options_area__5ooLb",option:"styles_option__2Xxh1"}},51:function(e,n,t){e.exports={footer:"styles_footer__2jx7K"}},52:function(e,n,t){e.exports={question_area:"styles_question_area__QD-w9"}},53:function(e,n,t){e.exports={questions_container:"styles_questions_container__3QTBM"}},55:function(e,n,t){e.exports={container:"styles_container__3kWrL"}},77:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var r=t(0),s=t(30),c=t(7),o=t(41),a=t(22),i=t(83),u=t(8),l=t(35),d=(t(82),t(33));var p,j=t(51),x=t.n(j),_=t(2),b=function(e){return Object(_.jsxs)("div",{className:x.a.footer,children:[Object(_.jsxs)("p",{children:["Correct: ",e.score.correct]}),Object(_.jsxs)("p",{children:["Incorrect: ",e.score.incorrect]})]})},f=t(43),O=t.n(f),h=function(e){return Object(_.jsx)("div",{className:O.a.header,children:Object(_.jsx)("div",{className:O.a.header_content,children:Object(_.jsx)(l.b,{to:"/",children:"Bible Quiz"})})})},m=t(36),y=t.n(m),v=function(e){return Object(_.jsxs)("div",{className:y.a.main_container,children:[Object(_.jsx)(h,{switchLocale:e.switchLocale}),Object(_.jsx)("div",{className:y.a.page,children:Object(_.jsx)("div",{className:y.a.main,children:r.Children.toArray(e.children)})}),Object(_.jsx)(b,{score:e.score})]})},q=t(3);!function(e){e.en="en",e.de="de"}(p||(p={}));var g={question:{currentIndex:0,currentId:null,timerActive:!0},note:{text:null},response:{id:null,questionIndex:0,result:"unselected"},score:{correct:0,incorrect:0},lang:p.en},I=Object(q.d)({name:"app",initialState:g,reducers:{incrementIndex:function(e){e.question.currentIndex+=1,e.response={id:null,questionIndex:e.question.currentIndex,result:"unselected"},e.note={text:null}},decrementIndex:function(e){e.question.currentIndex-=1,e.response={id:null,questionIndex:e.question.currentIndex,result:"unselected"},e.note={text:null}},resetIndex:function(e){e.question.currentIndex=0,e.response={id:null,questionIndex:e.question.currentIndex,result:"unselected"},e.note={text:null}},setResponse:function(e,n){n.payload.result&&(e.response={id:n.payload.selectedOption,questionIndex:e.question.currentIndex,result:n.payload.result.correct?"correct":"wrong"},e.note={text:n.payload.result.note},e.score={correct:n.payload.result.correct?e.score.correct+1:e.score.correct,incorrect:n.payload.result.correct?e.score.incorrect:e.score.incorrect+1})},switchLocale:function(e,n){e.lang=n.payload}}}),w=I.actions,N=w.incrementIndex,Q=(w.decrementIndex,w.resetIndex),k=w.setResponse,R=w.switchLocale,C=I.reducer,S=t(21),L=t.n(S),A=t(27);var E,P,T,B=function(e,n){var t=Object(r.useRef)();Object(r.useEffect)((function(){t.current=e}),[e]),Object(r.useEffect)((function(){var e=setInterval((function(){t.current()}),n);return function(){return clearInterval(e)}}),[n])},J=t(46),U=t.n(J),z=function(e){var n=Object(r.useState)(0),t=Object(a.a)(n,2),s=t[0],c=t[1];return B((function(){e.pause?c(0):s<100?c(s+.13333333333333333):(c(0),e.onComplete(99))}),20),Object(_.jsx)("div",{className:U.a.timer_bar,children:Object(_.jsx)("div",{className:U.a.timer,style:{width:"".concat(s,"%")}})})},K=t(52),M=t.n(K),X=function(e){return Object(_.jsx)("div",{className:M.a.question_area,children:Object(_.jsx)("p",{children:e.questionText})})},F=t(28),G=t.n(F),W=function(e){return Object(_.jsx)("div",{className:e.small?G.a.spinner_wrapper_small:G.a.spinner_wrapper,children:Object(_.jsx)("div",{className:e.small?G.a.spinner_small:G.a.spinner})})},D=t(47),H=t.n(D),V=function(e){var n=Object(r.useState)(null),t=Object(a.a)(n,2),s=t[0],c=t[1];return Object(_.jsx)("div",{className:H.a.options_area,children:e.options.map((function(n){return Object(_.jsxs)("div",{className:H.a.option,children:[Object(_.jsx)("button",{disabled:e.isCheckingResponse,onClick:Object(A.a)(L.a.mark((function t(){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c(n.id),e.handleSelection(n.id);case 2:case"end":return t.stop()}}),t)}))),children:e.isCheckingResponse&&s===n.id?Object(_.jsx)(W,{small:!0}):Object(_.jsx)("span",{children:n.id})}),Object(_.jsx)("span",{children:n.text})]},"".concat(e.currentQuestionId,"-").concat(n.id))}))})},Y=t(18),Z=t.n(Y),$=function(){return Object(_.jsx)("div",{className:Z.a.svg_image,children:Object(_.jsx)("svg",{width:"200",height:"200",children:Object(_.jsxs)("g",{children:[Object(_.jsx)("ellipse",{className:Z.a.outer_success,ry:"81.75",rx:"78.5",id:"svg_1",cy:"99.75",cx:"101.5",fill:"none"}),Object(_.jsx)("line",{y2:"144.5",x2:"58",y1:"109",x1:"37",className:Z.a.outer_success}),Object(_.jsx)("line",{y2:"71.62385",x2:"164.16489",y1:"143",x1:"51.7",className:Z.a.outer_success})]})})})},ee=function(){return Object(_.jsx)("div",{className:Z.a.svg_image,children:Object(_.jsx)("svg",{width:"200",height:"200",children:Object(_.jsxs)("g",{children:[Object(_.jsx)("ellipse",{className:Z.a.outer_wrong,ry:"81.75",rx:"78.5",id:"svg_1",cy:"99.75",cx:"101.5",fill:"none"}),Object(_.jsx)("line",{y2:"150",x2:"144",y1:"50",x1:"55",className:Z.a.outer_wrong}),Object(_.jsx)("line",{transform:"rotate(82 105 100)",y2:"155",x2:"144",y1:"60",x1:"55",className:Z.a.outer_wrong})]})})})},ne=function(e){return Object(_.jsx)("div",{className:Z.a.note_area,children:Object(_.jsxs)("div",{className:Z.a.note_wrapper,children:["correct"===e.responseResult?Object(_.jsx)($,{}):Object(_.jsx)(ee,{}),Object(_.jsx)("p",{children:e.noteText}),Object(_.jsx)("button",{className:Z.a.next_question,onClick:function(){return e.changeQuestion()},children:Object(_.jsx)("span",{children:"Next Question"})})]})})},te=t(53),re=t.n(te),se=function(e){var n=function(){var n=Object(A.a)(L.a.mark((function n(t){var r;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.handleSelection({selectedOption:t,questionId:e.currentQuestionId});case 2:r=n.sent,e.setResponse({result:r.data,selectedOption:t});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:re.a.questions_container,children:[Object(_.jsx)(z,{pause:e.isCheckingResponse,onComplete:n}),Object(_.jsx)(X,{questionText:e.questions[e.currentQuestionIndex].question}),"unselected"!==e.responseResult?Object(_.jsx)(ne,{noteText:e.noteText||"",responseResult:e.responseResult,changeQuestion:function(){e.currentQuestionIndex<e.questions.length-1?e.incrementIndex():e.resetIndex()}}):Object(_.jsx)(V,{options:e.questions[e.currentQuestionIndex].options,currentQuestionIndex:e.currentQuestionIndex,currentQuestionId:e.currentQuestionId,isCheckingResponse:e.isCheckingResponse,handleSelection:n})]})},ce=t(48),oe=t(29),ae=t(54),ie=Object(ae.a)({baseQuery:function(e){var n=e.baseUrl;return function(){var e=Object(A.a)(L.a.mark((function e(t){var r,s;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.body,e.prev=1,e.next=4,Object(oe.request)(n,r);case 4:return s=e.sent,e.abrupt("return",{data:s});case 8:if(e.prev=8,e.t0=e.catch(1),!(e.t0 instanceof oe.ClientError)){e.next=12;break}return e.abrupt("return",{error:{status:e.t0.response.status,data:e.t0}});case 12:return e.abrupt("return",{error:{status:500,data:e.t0}});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}()}({baseUrl:"https://py7jcbc8i4.execute-api.eu-central-1.amazonaws.com/prod/"}),reducerPath:"questionsAPI",endpoints:function(e){return{getQuestions:e.query({query:function(){return{body:Object(oe.gql)(E||(E=Object(ce.a)(["\n          query {\n            allQuestions {\n              id\n              question\n              type\n              options {\n                id\n                text\n              }\n            }\n          }\n        "])))}},transformResponse:function(e){return e.allQuestions}}),validateResponse:e.mutation({query:function(e){return{body:Object(oe.gql)(P||(P=Object(ce.a)(['\n          query {\n            validateAnswer(questionId: "','", selectedOption: ',") {\n              note\n              correct\n            }\n          }\n        "])),e.questionId,e.selectedOption)}},transformResponse:function(e){return e.validateAnswer}})}}}),ue=t(55),le=t.n(ue),de={root:{sequence:1,component:(T=function(){var e=Object(c.d)(),n=Object(c.e)((function(e){return e.app.question.currentIndex})),t=Object(c.e)((function(e){return e.app.note.text})),r=Object(c.e)((function(e){return e.app.response.result})),s=ie.useGetQuestionsQuery(null),o=s.data,i=s.error,u=s.isLoading,l=ie.useValidateResponseMutation(),d=Object(a.a)(l,2),p=d[0],j=d[1],x=j.isLoading,b=j.error;return i||b?Object(_.jsx)("div",{children:"Error! Please try again later."}):u?Object(_.jsx)(W,{}):Object(_.jsx)("div",{className:le.a.container,children:Object(_.jsx)(se,{questions:o,currentQuestionIndex:n,currentQuestionId:o[n].id,isCheckingResponse:x||null!==t,noteText:t,responseResult:r,incrementIndex:function(){return e(N())},resetIndex:function(){return e(Q())},setResponse:function(n){return e(k(n))},handleSelection:p})})},function(){var e=Object(c.d)(),n=Object(c.e)((function(e){return e.app.score}));return Object(_.jsx)(v,{switchLocale:function(n){return e(R(n))},score:n,children:Object(_.jsx)(T,{})})}),exact:!0,path:"/"}},pe=function(){var e=Object(c.e)((function(e){return e.app.lang})),n=r.useState(d),s=Object(a.a)(n,2),p=s[0],j=s[1];return r.useEffect((function(){(function(e){switch(e){case"en":return Promise.resolve().then(t.t.bind(null,33,3));case"de":return t.e(3).then(t.t.bind(null,84,3));default:return Promise.resolve({default:d})}})(e).then((function(e){return j(e.default)}))}),[e]),Object(_.jsx)(i.a,{locale:e,messages:p,children:Object(_.jsx)(l.a,{children:Object(_.jsx)(u.c,{children:Object.keys(de).map((function(e){return Object(r.createElement)(u.a,Object(o.a)(Object(o.a)({},de[e]),{},{key:de[e].sequence}))}))})})})},je=t(32),xe=t(56),_e=[],be=Object(xe.a)();_e.map((function(e){return be.run(e)}));var fe=Object(q.a)({reducer:Object(je.a)({app:C},ie.reducerPath,ie.reducer),middleware:function(e){return e().concat(be).concat(ie.middleware)}});t(76),t(77);s.render(Object(_.jsx)(c.a,{store:fe,children:Object(_.jsx)(r.StrictMode,{children:Object(_.jsx)(pe,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.b64f8252.chunk.js.map