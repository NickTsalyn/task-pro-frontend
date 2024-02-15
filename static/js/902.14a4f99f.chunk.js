"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[902,737],{6942:function(n,e,t){t.r(e),t.d(e,{default:function(){return jt}});var r,i,o,a,c,s,l,d,u,p,h,m,x,f,g,b,j,v,Z,w,k,y,P,T,C,S,H,z,I,L,R,_,F,N,B,U,E,A,G,M,O,q,$,D,V,J,W,Y,K,Q,X,nn,en,tn,rn,on,an,cn,sn=t(9439),ln=t(2791),dn=t(9230),un=t(1413),pn=t(4899),hn=t(6646),mn=t(629),xn=(t(8719),t(184)),fn=function(){return(0,xn.jsx)(mn.MGB,{})},gn={DropdownIndicator:function(n){return(0,xn.jsx)(pn.c.DropdownIndicator,(0,un.Z)((0,un.Z)({},n),{},{children:(0,xn.jsx)(fn,{width:"32",height:"32"})}))}},bn=[{value:"ua",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-ua"})," Ukraine"]})},{value:"en",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-gb"})," UK"]})},{value:"cn",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-cn"})," China"]})},{value:"he",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-il"})," Israel"]})},{value:"de",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-de"})," Germany"]})},{value:"es",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-es"})," Spain"]})},{value:"ita",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-it"})," Italy"]})},{value:"fr",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-fr"})," France"]})},{value:"jp",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-jp"})," Japan"]})},{value:"pl",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-pl"})," Poland"]})},{value:"ro",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-ro"})," Romania"]})},{value:"ar",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-sa"})," Saudi Arabia"]})},{value:"gr",label:(0,xn.jsxs)("span",{children:[(0,xn.jsx)("span",{class:"fi fi-gr"})," Greece"]})}],jn={control:function(n,e){return(0,un.Z)((0,un.Z)({},n),{},{color:e.isFocused?"rgba(22, 22, 22)":"rgba(22, 22, 22, 0.8)",border:"none ",boxShadow:"none",display:"flex",margin:"auto 0",padding:"0",minHeight:"0",lineHeight:"1",backgroundColor:"transparent"})},downChevron:function(n){return(0,un.Z)((0,un.Z)({},n),{},{width:"32px",height:"32px",padding:"0",color:"white"})},IndicatorContainer:function(n){return(0,un.Z)((0,un.Z)({},n),{},{display:"none"})},indicatorSeparator:function(n){return(0,un.Z)((0,un.Z)({},n),{},{display:"none"})},input:function(n){return(0,un.Z)((0,un.Z)({},n),{},{display:"none"})},dropdownIndicator:function(n){return(0,un.Z)((0,un.Z)({},n),{},{padding:"0",stroke:"".concat((function(n){return n.theme.currentTheme.mainText})),"&:hover, &:focus":{color:"#5255bc"},"&::before":{content:"none"}})},option:function(n,e){return(0,un.Z)((0,un.Z)({},n),{},{backgroundColor:"#fff",color:e.isSelected?"#5255BC":"rgb(22, 22, 22)","&:hover":{backgroundColor:"#FCFCFC",color:"#5255BC"}})},placeholder:function(n){return(0,un.Z)((0,un.Z)({},n),{},{display:"none"})},menu:function(n){return(0,un.Z)((0,un.Z)({},n),{},{maxHeight:"120px",width:"120px",backgroundColor:"white",borderRadius:"8px",overflowY:"auto","&::-webkit-scrollbar":{width:"4px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgba(22, 22, 22, 0.2)",borderRadius:"8px"},"&::-webkit-scrollbar-track":{backgroundColor:"transparent"}})},menuList:function(n){return(0,un.Z)((0,un.Z)({},n),{},{overflowY:"none"})}},vn=function(){var n=(0,dn.$G)("global").i18n,e=(0,ln.useState)(!1),t=(0,sn.Z)(e,2),r=t[0],i=t[1],o=(0,ln.useRef)(null),a=function(n){o.current&&!o.current.contains(n.target)&&i(!1)},c=function(){i(!r)};return(0,ln.useEffect)((function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}),[]),(0,xn.jsxs)("div",{ref:o,children:[(0,xn.jsx)(hn.ZP,{components:gn,options:bn,styles:jn,onChange:function(e){n.changeLanguage(e.value),i(!1)},placeholder:"",menuIsOpen:r,onMenuOpen:c,onMenuClose:c})," "]})},Zn=function(){var n=(0,dn.$G)("global").i18n,e=function(e){n.changeLanguage(e)};return(0,xn.jsx)(vn,{handleChangeLanguage:function(n){var t=n.target.value;e(t)},handleChange:e})},wn=t(3439),kn=t(168),yn=t(4894),Pn=yn.ZP.div(r||(r=(0,kn.Z)(["\n  display: flex;\n  /* @media screen and (max-width: 375px) {\n    padding-left: ",";\n  } */\n"])),(function(n){return n.theme.spacing(5)})),Tn=yn.ZP.button(i||(i=(0,kn.Z)(["\n  width: 24px;\n  height: 24px;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  justify-content: center;\n  margin: auto 0;\n  padding: 0;\n  position: relative;\n  display: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 32px;\n    height: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    display: none;\n  }\n"])),(function(n){return n.isOpen?"display: flex;":""})),Cn=yn.ZP.svg(o||(o=(0,kn.Z)(["\n  stroke: ",";\n  width: 100%;\n  height: 100%;\n"])),(function(n){return n.theme.currentTheme.mainText})),Sn=yn.ZP.div(a||(a=(0,kn.Z)(["\n  display: flex;\n  gap: ",";\n  padding: 14px 14px 0 14px;\n\n  @media screen and (min-width: 768px) {\n   padding: 24px 24px 0 24px;\n }\n"])),(function(n){return n.theme.spacing(2)})),Hn=yn.ZP.span(c||(c=(0,kn.Z)(["\n  display: flex;\n  border-radius: ",";\n  width: 32px;\n  height: 32px;\n  background-color: ",";\n"])),(function(n){return n.theme.radius.m}),(function(n){return n.theme.currentTheme.needHelpBgn})),zn=yn.ZP.p(s||(s=(0,kn.Z)(["\n  display: flex;\n  margin: auto 0;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.currentTheme.iconNeedHelp})),In=yn.ZP.svg(l||(l=(0,kn.Z)(["\n  fill: ",";\n"])),(function(n){return n.theme.currentTheme.logo})),Ln=function(){return(0,xn.jsxs)(Sn,{children:[(0,xn.jsx)(Hn,{children:(0,xn.jsx)(In,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-logo2")})})}),(0,xn.jsx)(zn,{children:"Task Pro"})]})},Rn=t(9434),_n=t(7689),Fn=t(2314),Nn=t(7146),Bn=(t(1174),yn.ZP.ul(d||(d=(0,kn.Z)(["\n  height: 126px;\n  overflow-y: scroll;\n  margin: 0 -14px;\n\n  &::-webkit-scrollbar {\n    width: 4px;\n    height: 60px;\n    border-radius: 4px 0 0 4px;\n    margin-left: ",";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #fff;\n    border-radius: 4px 0 0 4px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin: 0 -24px;\n  }\n \n"])),(function(n){return n.theme.spacing(3.5)}))),Un=t(1087),En=t(7948),An=t.n(En),Gn=(0,yn.ZP)(An())(u||(u=(0,kn.Z)(["\n    position: relative;\n    width: 100%;\n    height: fit-content;\n    /* max-height: 433px; */\n    max-width: 350px;\n    background-color: ",";\n    border-radius: 8px;\n    box-shadow: 0px 4px 16px 0px ",";\n    z-index: 3000;\n    transition: transform 0.3s;\n"])),(function(n){return n.theme.currentTheme.modalBgn}),(function(n){return n.theme.currentTheme.grayText})),Mn=yn.ZP.form(p||(p=(0,kn.Z)(["\n    display: flex;\n    flex-direction: column;\n    padding: 24px;\n"]))),On=yn.ZP.button(h||(h=(0,kn.Z)(["\n    position: absolute;\n    background-color: transparent;\n    top: 14px;\n    right: 14px;\n    width: 20px;\n    height: 20px;\n    border: none;\n"]))),qn=yn.ZP.svg(m||(m=(0,kn.Z)(["\n    width: 18px;\n    height: 18px;\n    stroke: ",";\n"])),(function(n){return n.theme.currentTheme.mainText})),$n=yn.ZP.p(x||(x=(0,kn.Z)(["\n    color: ",";\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 27px;\n    letter-spacing: 0.02em;\n"])),(function(n){return n.theme.currentTheme.mainText})),Dn=yn.ZP.input(f||(f=(0,kn.Z)(["\n    margin: 24px 0;\n    height: 49px;\n    max-width: 302px;\n    background-color: transparent;\n    border: 1px "," solid;\n    border-radius: 8px;\n    padding: 0 18px;\n    color: ",";\n    font-family: inherit;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    outline: none;\n    opacity: 0.4;\n\n    &::placeholder {\n        color: ",";\n        font-family: inherit;\n        line-height: 21px;\n        letter-spacing: 0.02em;\n    }\n\n    &:hover, &:focus {\n        opacity: 1;\n    }\n"])),(function(n){return n.theme.currentTheme.accent}),(function(n){return n.theme.currentTheme.mainText}),(function(n){return n.theme.currentTheme.mainText})),Vn=yn.ZP.p(g||(g=(0,kn.Z)(["\n    color: ",";\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    letter-spacing: -2%;\n    padding-bottom: 14px;\n"])),(function(n){return n.theme.currentTheme.mainText})),Jn=yn.ZP.label(b||(b=(0,kn.Z)(["\n    width: 270px;\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    column-gap: 4px;\n    row-gap: 4px;\n    margin-bottom: 24px;\n"]))),Wn=yn.ZP.input(j||(j=(0,kn.Z)(["\n    display: none;\n\n    &:checked + svg {\n        stroke: ",";\n        cursor: default;\n    }\n\n    &:checked + span {\n        border-color: ",";\n        cursor: default;\n    }\n"])),(function(n){return n.theme.currentTheme.mainText}),(function(n){return n.theme.currentTheme.accent})),Yn=yn.ZP.svg(v||(v=(0,kn.Z)(["\n    display: inline-block;\n    vertical-align: middle;\n    stroke: ",";\n    cursor: pointer;\n    fill: transparent;\n    width: 18px;\n    height: 18px;\n"])),(function(n){return n.theme.currentTheme.iconStroke})),Kn=yn.ZP.span(Z||(Z=(0,kn.Z)(["\n    display: inline-block;\n    border: 1px transparent solid;\n    background-color: transparent;\n    z-index: 10;\n    cursor: pointer;\n    border-radius: 8px;\n    width: 28px;\n    height: 28px;\n\n    & > img {\n        border-radius: 6px;\n    }\n"]))),Qn=yn.ZP.button(w||(w=(0,kn.Z)(["\n    display: flex;\n    max-width: 100%;\n    height: 49px;\n    color: ",";\n    border-radius: 8px;\n    border-color: transparent;\n    font-weight: 500;\n    background-color: ",";\n    font-family: inherit;\n    font-size: 14px;\n    line-height: 21px;\n    letter-spacing: 0.02em;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    column-gap: 9px;\n    margin-top: 16px;\n\n    &:hover {\n        background-color: ",";\n    }\n\n    & > span {\n        display: flex;\n        width: 28px;\n        height: 28px;\n        background-color: ",";\n        border-radius: 8px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    & > span > svg {\n        width: 14px;\n        height: 14px;\n        stroke: ",";\n    }\n"])),(function(n){return n.theme.currentTheme.plusIconFill}),(function(n){return n.theme.currentTheme.accent}),(function(n){return n.theme.currentTheme.hoverButton}),(function(n){return n.theme.currentTheme.plusIconFill}),(function(n){return n.theme.currentTheme.plusIconStroke})),Xn={p0:t.p+"static/media/mini_0.aeacba2585f76274939e.webp",p1:t.p+"static/media/mini_1.f092300de7d6bea7cae6.webp",p2:t.p+"static/media/mini_2.2dfccdf65e06cbdede21.webp",p3:t.p+"static/media/mini_3.2fc334200d7c6cb5dfe8.webp",p4:t.p+"static/media/mini_4.135db9a9e029a1c8d87e.webp",p5:t.p+"static/media/mini_5.d75351eaaa3509db4f48.webp",p6:t.p+"static/media/mini_6.e4f43d2b0bac09144cc6.webp",p7:t.p+"static/media/mini_7.6f11c40c99178e734f3a.webp",p8:t.p+"static/media/mini_8.87f2590af789a6e635e6.webp",p9:t.p+"static/media/mini_9.6230b599d2f6fb899b40.webp",p10:t.p+"static/media/mini_10.3ddfdfe6ed9d0b89b675.webp",p11:t.p+"static/media/mini_11.434fec68766892de114f.webp",p12:t.p+"static/media/mini_12.0c1996661452d8fb4448.webp",p13:t.p+"static/media/mini_13.5d5d53ccd18367a5f1f5.webp",p14:t.p+"static/media/mini_14.70ef1a0d1bb88a4fd0bf.webp",p15:t.p+"static/media/mini_15.4f1507a5d8f865a8dd2a.webp"},ne=function(n){var e=n.isModalOpen,t=n.info,r=n.onCloseModal,i=n.action,o=n.SubmitForm,a=(0,dn.$G)("global").t,c=(0,ln.useState)(t.title),s=(0,sn.Z)(c,2),l=s[0],d=s[1],u=(0,ln.useState)(t.iconURL),p=(0,sn.Z)(u,2),h=p[0],m=p[1],x=(0,ln.useState)(t.backgroundURL),f=(0,sn.Z)(x,2),g=f[0],b=f[1];function j(){r(),d(t.title),m(t.iconURL),b(t.backgroundURL)}return(0,xn.jsxs)(Gn,{isOpen:e,overlayClassName:"modal-overlay",className:"modal-content",onRequestClose:j,ariaHideApp:!1,children:[(0,xn.jsx)(On,{onClick:j,children:(0,xn.jsx)(qn,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-x-close")})})}),(0,xn.jsxs)(Mn,{onSubmit:function(n){return function(n){n.preventDefault(),o({title:l,iconURL:h,backgroundURL:g}),d(t.title),m(t.iconURL),b(t.backgroundURL)}(n)},children:[(0,xn.jsx)($n,{children:a("add"===i?"screenPage.render.modal.board.titleNew":"screenPage.render.modal.board.titleEdit")}),(0,xn.jsx)(Dn,{id:"title",name:"title",placeholder:"Title",value:l,onChange:function(n){return function(n){d(n.target.value)}(n)},required:!0}),(0,xn.jsx)(Vn,{children:a("screenPage.render.modal.board.icons")}),(0,xn.jsx)(Jn,{children:[{value:"icon-Project"},{value:"icon-star-04"},{value:"icon-loading-03"},{value:"icon-puzzle-piece-02"},{value:"icon-container"},{value:"icon-lightning-02"},{value:"icon-colors"},{value:"icon-hexagon-01"}].map((function(n,e){return(0,xn.jsxs)("label",{children:[(0,xn.jsx)(Wn,{type:"radio",name:"icon",value:n.value,checked:n.value===h,onChange:function(){return m(n.value)}}),(0,xn.jsx)(Yn,{"aria-hidden":"true",children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#").concat(n.value)})})]},e)}))}),(0,xn.jsx)(Vn,{children:a("screenPage.render.modal.board.backgr")}),(0,xn.jsx)(Jn,{children:[{value:"p0"},{value:"p1"},{value:"p2"},{value:"p3"},{value:"p4"},{value:"p5"},{value:"p6"},{value:"p7"},{value:"p8"},{value:"p9"},{value:"p10"},{value:"p11"},{value:"p12"},{value:"p13"},{value:"p14"},{value:"p15"}].map((function(n,e){return(0,xn.jsxs)("label",{children:[(0,xn.jsx)(Wn,{type:"radio",name:"background",value:n.value,checked:n.value===g,onChange:function(){return b(n.value)}}),(0,xn.jsx)(Kn,{children:(0,xn.jsx)("img",{alt:"icon_option",src:Xn["".concat(n.value)]})})]},e)}))}),(0,xn.jsxs)(Qn,{type:"submit",children:[(0,xn.jsx)("span",{children:(0,xn.jsx)("svg",{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-plus")})})}),a("add"===i?"screenPage.render.modal.board.add-btn":"screenPage.render.modal.board.edit-btn")]})]})]})},ee=yn.ZP.div(k||(k=(0,kn.Z)(["\n  display: flex;\n  padding: 22px 18px 22px 14px;\n  margin: 0 auto;\n  justify-content: space-between;\n  background-color: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    stroke: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 21px 24px;\n  }\n"])),(function(n){return n.isActive?"rgba(255, 255, 255, 0.2)":"transparent"}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.white})),te=yn.ZP.button(y||(y=(0,kn.Z)(["\n  border: none;\n  background: transparent;\n  font-weight: 500;\n  line-height: 1.5;\n  text-align: start;\n  padding: 0;\n  display: flex;\n  gap: 4px;\n  color: ",";\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    color: ",";\n   \n  }\n  svg {\n    width: 18px;\n    height: 18px;\n    fill: transparent;\n    stroke: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n  }\n"])),(function(n){var e=n.isActive,t=n.theme;return e?t.currentTheme.iconNeedHelp:t.currentTheme.greySubtitle}),(function(n){return n.theme.currentTheme.iconNeedHelp}),(function(n){var e=n.isActive,t=n.theme;return e?t.currentTheme.iconNeedHelp:t.currentTheme.greySubtitle})),re=yn.ZP.svg(P||(P=(0,kn.Z)(["\n  fill: transparent;\n  stroke:  ",";\n  width: 16px;\n  height: 16px;\n  &:hover,\n  &:focus {\n    stroke: ",";\n  }\n"])),(function(n){return n.theme.currentTheme.iconNeedHelp}),(function(n){return n.theme.currentTheme.accent})),ie=yn.ZP.svg(T||(T=(0,kn.Z)(["\n  fill: transparent;\n  stroke: ",";\n\n  width: 16px;\n  height: 16px;\n  &:hover,\n  &:focus {\n    stroke: ",";\n  }\n"])),(function(n){return n.theme.currentTheme.iconNeedHelp}),(function(n){return n.theme.currentTheme.accent})),oe=yn.ZP.button(C||(C=(0,kn.Z)(["\n  border: none;\n  background-color: transparent;\n  display: flex;\n\n  margin: 0;\n  padding: 0;\n"]))),ae=yn.ZP.div(S||(S=(0,kn.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  display: ",";\n"])),(function(n){return n.isActive?"flex":"none"})),ce=function(n){var e=n.board,t=n.isActive,r=n.onClick,i=(0,Rn.I0)(),o=(0,_n.s0)(),a=(0,ln.useState)(!1),c=(0,sn.Z)(a,2),s=c[0],l=c[1];return(0,xn.jsxs)(ee,{isActive:t,onClick:r,children:[(0,xn.jsxs)(te,{type:"button",isActive:t,onClick:function(){r(),i((0,Fn.WU)(e._id))},children:[(0,xn.jsx)("svg",{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#").concat(e.iconURL)})}),(0,xn.jsx)(Un.rU,{to:"/home/".concat(e._id),children:e.title})]}),(0,xn.jsxs)(ae,{isActive:t,onClick:r,children:[(0,xn.jsx)(oe,{onClick:function(){l(!0)},type:"button",children:(0,xn.jsx)(re,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-pencil-01")})})}),(0,xn.jsx)(oe,{onClick:function(){i((0,Fn.L1)(e._id)),o("/home")},type:"button",children:(0,xn.jsx)(ie,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-trash-04")})})})]}),(0,xn.jsx)(ne,{isModalOpen:s,info:e,onCloseModal:function(){l(!1)},action:"edit",SubmitForm:function(n){var t=e._id;i((0,Fn.Vq)({_id:t,info:n})),l(!1)}})]})},se=function(n){var e=n.onItemClick,t=(0,Rn.I0)(),r=(0,Rn.v9)(Nn.nE);(0,ln.useEffect)((function(){t((0,Fn.Po)())}),[t]);var i=(0,ln.useState)(null),o=(0,sn.Z)(i,2),a=o[0],c=o[1];return(0,xn.jsx)(xn.Fragment,{children:r.length>0&&(0,xn.jsx)(Bn,{children:r.map((function(n){return(0,xn.jsx)("li",{children:(0,xn.jsx)(ce,{board:n,isActive:n===a,onClick:function(){return function(n){c(n),e()}(n)}})},n._id)}))})})},le=yn.ZP.svg(H||(H=(0,kn.Z)(["\n  stroke:  ",";\n  width: 20px;\n  height: 20px;\n"])),(function(n){return n.theme.currentTheme.plusIconFill})),de=yn.ZP.span(z||(z=(0,kn.Z)(["\n  width: 40px;\n  height: 36px;\n  border-radius: 6px;\n  background-color:",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.currentTheme.btnPlusFill}),(function(n){return n.theme.currentTheme.hoverBtnPlusFill})),ue=yn.ZP.button(I||(I=(0,kn.Z)(["\n    border: none;\n    background-color: transparent;\n    width: 100%;\n    font-weight: 500;\n    line-height: 1.5;\n    text-align: start;\n\n    color:  ",";\n    padding: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"])),(function(n){return n.theme.currentTheme.mainText})),pe=function(n){var e=n.onClick,t=(0,dn.$G)("global").t;return(0,xn.jsxs)(ue,{onClick:e,children:[t("screenPage.static.addBoard"),(0,xn.jsx)(de,{children:(0,xn.jsx)(le,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-plus")})})})]})},he=function(){var n=(0,Rn.I0)(),e=(0,ln.useState)(!1),t=(0,sn.Z)(e,2),r=t[0],i=t[1];return(0,xn.jsxs)(xn.Fragment,{children:[(0,xn.jsx)(pe,{onClick:function(n){return function(n){n.stopPropagation(),i(!0)}(n)}}),(0,xn.jsx)(ne,{isModalOpen:r,info:{title:"",iconURL:"icon-Project",backgroundURL:"0"},onCloseModal:function(){i(!1)},action:"add",SubmitForm:function(e){n((0,Fn.JU)(e)),i(!1)}})]})},me=yn.ZP.div(L||(L=(0,kn.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 70px 14px 14px;\n  height: 100%;\n  @media screen and (min-width: 768px) {\n    padding: 60px 24px 24px;\n  }\n"]))),xe=yn.ZP.p(R||(R=(0,kn.Z)(["\n  font-size: 12px;\n  color: ",";\n  padding-bottom: ",";\n  letter-spacing: -0.02em;\n"])),(function(n){return n.theme.currentTheme.greySubtitle}),(function(n){return n.theme.spacing(2)})),fe=yn.ZP.div(_||(_=(0,kn.Z)(["\n  padding: "," 0;\n  border-top: 1px solid ",";\n  border-bottom: 1px solid ",";\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.currentTheme.line}),(function(n){return n.theme.currentTheme.line})),ge=yn.ZP.button(F||(F=(0,kn.Z)(["\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n\n  color: ",";\n  padding: 0;\n  display: flex;\n  gap: ",";\n  align-items: center;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"])),(function(n){return n.theme.currentTheme.iconNeedHelp}),(function(n){return n.theme.spacing(3.5)})),be=yn.ZP.svg(N||(N=(0,kn.Z)(["\n  fill: transparent;\n  stroke: ",";\n\n  width: 32px;\n  height: 32px;\n  &:hover,\n  &:focus {\n    stroke: ",";;\n    opacity: 0.5;\n  }\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n"])),(function(n){return n.theme.currentTheme.iconLogout}),(function(n){return n.theme.currentTheme.hoverIconLogout})),je=yn.ZP.div(B||(B=(0,kn.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: auto;\n  gap: 24px;\n"]))),ve=yn.ZP.div(U||(U=(0,kn.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n"]))),Ze=t(9273),we=t(4165),ke=t(5861),ye=t(6864),Pe=t(6727),Te=yn.ZP.div(E||(E=(0,kn.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 100%;\n  max-width: 335px;\n  min-width: 320px;\n  height: 355px;  \n  background: ",";\n  border-radius: ",";\n  border: none;\n  padding: 24px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n\n  @media (min-width: 768px) {\n    width: 400px;\n  }\n  @media (min-width: 335px) {\n    width: 335px;\n  }\n"])),(function(n){return n.theme.currentTheme.modalBgn}),(function(n){return n.theme.radius.m})),Ce=yn.ZP.h2(A||(A=(0,kn.Z)(["\n  font-family: Poppins;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  text-align: left;\n  margin-bottom: ",";\n  color:  ",";\n"])),(function(n){return n.theme.spacing(6)}),(function(n){return n.theme.currentTheme.mainText})),Se=yn.ZP.button(G||(G=(0,kn.Z)(["\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  top: 14px;\n  right: 14px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n"]))),He=(0,yn.ZP)(ye.gN)(M||(M=(0,kn.Z)(["\n  width: 100%;\n  height: 49px;\n  padding: 14px 18px;\n  border: 1px solid ",";\n  border-radius: ",";\n  box-sizing: border-box;\n  opacity: 0.4;\n  margin-bottom: 14px; \n  letter-spacing: -0.02em;  \n  outline: none;\n  background: ",";\n  color:  ",";\n  &:placeholder {\n    font-size: 14px;\n\n  }\n\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.currentTheme.accent}),(function(n){return n.theme.radius.m}),(function(n){return n.theme.currentTheme.inputBgn}),(function(n){return n.theme.currentTheme.maintext})),ze=yn.ZP.textarea(O||(O=(0,kn.Z)(["\n  width: 100%;\n  height: 120px;   \n  padding: 14px 18px; \n  border: 1px solid  ",";\n  border-radius: ",";\n  box-sizing: border-box;\n  resize: none;\n  opacity: 0.4;    \n  letter-spacing: -0.02em;\n  margin-bottom: 24px;\n  outline: none; \n  background: ",";\n  color:  ",";\n  &:placeholder {\n    font-size: 14px;    \n  }\n   &:focus {\n    opacity: 1;\n  } \n\n"])),(function(n){return n.theme.currentTheme.accent}),(function(n){return n.theme.radius.m}),(function(n){return n.theme.currentTheme.inputBgn}),(function(n){return n.theme.currentTheme.maintext})),Ie=yn.ZP.button(q||(q=(0,kn.Z)(["\n  width: 100%;  \n  padding: 14px;\n  border: none;\n  border-radius: ",";\n  cursor: pointer;\n  background-color: ",";\n color:",";\n  font-weight: 500;  \n  letter-spacing: -0.02em;\n  text-align: center;\n\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n&:hover {\n  background-color: ",";\n}\n"])),(function(n){return n.theme.radius.m}),(function(n){return n.theme.currentTheme.accent}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.currentTheme.hoverButton})),Le=yn.ZP.svg($||($=(0,kn.Z)(["\n  fill:  ",";\n  stroke: ",";\n  display: flex;\n  position: absolute;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  top: 50%;\n  right: 50%;\n  transform: translate(50%, -50%);\n  border: none;\n  transition: background-color 0.3s ease;\n  @media (min-width: 768px) {\n    width: 18px;\n    height: 18px;\n  }\n"])),(function(n){return n.theme.currentTheme.modalBgn}),(function(n){return n.theme.currentTheme.mainText})),Re=Pe.Ry({email:Pe.Z_().email("Please enter a valid email address").required(""),comment:Pe.Z_().required("")}),_e=function(n){var e=n.isOpen,t=n.onClose,r=n.onItemClick,i=(0,Rn.I0)(),o=(0,dn.$G)("global").t,a=function(){var n=(0,ke.Z)((0,we.Z)().mark((function n(e){var r,o;return(0,we.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e.email,o=e.comment,i((0,Ze.nj)({email:r,comment:o})).then((function(){console.log("Request sent successfully"),t()})).catch((function(n){console.error("Error sending request:",n)}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,xn.jsx)(An(),{isOpen:e,overlayClassName:"modal-overlay",className:"modal-content",onRequestClose:t,ariaHideApp:!1,children:(0,xn.jsxs)(Te,{children:[(0,xn.jsx)(Se,{onClick:t,children:(0,xn.jsx)(Le,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-x-close")})})}),(0,xn.jsx)(Ce,{children:o("screenPage.static.needHelp")}),(0,xn.jsx)(ye.J9,{initialValues:{email:"",comment:""},validationSchema:Re,onSubmit:a,children:function(n){n.isSubmitting;return(0,xn.jsxs)(ye.l0,{children:[(0,xn.jsx)(He,{type:"email",name:"email",placeholder:o("screenPage.render.modal.help.email"),as:ye.gN}),(0,xn.jsx)(ye.Bc,{name:"email",component:"div",className:"error-message"}),(0,xn.jsx)(ye.gN,{type:"text",name:"comment",placeholder:o("screenPage.render.modal.help.text"),as:ze}),(0,xn.jsx)(ye.Bc,{name:"comment",component:"div",className:"error-message"}),(0,xn.jsx)(Ie,{type:"submit",onClick:r,children:o("screenPage.render.modal.profile.send")})]})}})]})})},Fe=yn.ZP.div(D||(D=(0,kn.Z)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n  width: 197px;\n  padding: 14px;\n  background-color: ",";\n  border-radius: ",";\n\n  @media (min-width: 768px) {\n    width: 212px;\n    padding: 20px;\n  }\n"])),(function(n){return n.theme.currentTheme.needHelpBgn}),(function(n){return n.theme.radius.m})),Ne=yn.ZP.img(V||(V=(0,kn.Z)(["\n  max-width: 54px;\n  height: 78px;\n  margin-bottom: 14px;\n  margin-right: 100px;\n"]))),Be=yn.ZP.p(J||(J=(0,kn.Z)(["\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: -0.02em;\n  text-align: left;\n  color: ",";\n  margin-bottom: 18px;\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 20px;\n  }\n"])),(function(n){return n.theme.currentTheme.iconNeedHelp})),Ue=yn.ZP.button(W||(W=(0,kn.Z)(["\n  width: 20px;\n  height: 20px;\n  display: flex;\n  border-radius: 50%;\n  border: none;\n  color: ",";\n  cursor: pointer;\n  margin-right: 11px;\n  padding: 0;\n  position: relative;\n  background: transparent;\n"])),(function(n){return n.theme.currentTheme.iconNeedHelp})),Ee=yn.ZP.div(Y||(Y=(0,kn.Z)(["\n  display: flex;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: -0.02em;\n  text-align: left;\n  align-items: center;\n  cursor: pointer;\n  color: ",";\n"])),(function(n){return n.theme.currentTheme.iconNeedHelp})),Ae=yn.ZP.div(K||(K=(0,kn.Z)(["\n  font-size: 1.7em;\n\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  transform: translate(-10%, -10%);\n"]))),Ge=yn.ZP.span(Q||(Q=(0,kn.Z)(["\n  color: ",";\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: -0.02em;\n  text-align: left;\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n  }\n"])),(function(n){return n.theme.currentTheme.accent})),Me=t.p+"static/media/flower.52ac3474d4db6a9d74ba.png",Oe=t(4869),qe=function(n){var e=n.onItemClick,t=(0,ln.useState)(!1),r=(0,sn.Z)(t,2),i=r[0],o=r[1],a=(0,dn.$G)("global").t,c=function(){o(!0)};return(0,xn.jsxs)(Fe,{children:[(0,xn.jsx)(Ne,{src:Me,alt:"flower"}),(0,xn.jsxs)(Be,{children:[a("screenPage.static.help")," ",(0,xn.jsx)(Ge,{children:"TaskPro"}),a("screenPage.static.help2")]}),(0,xn.jsx)(Ue,{onClick:c,children:(0,xn.jsx)(Ae,{children:(0,xn.jsx)(Oe.RNg,{})})}),(0,xn.jsx)(Ee,{onClick:c,children:a("screenPage.static.needHelp")}),i&&(0,xn.jsx)(_e,{isOpen:i,onClose:function(){o(!1)},onItemClick:e})]})},$e=function(n){var e=n.onItemClick,t=(0,Rn.I0)(),r=(0,_n.s0)(),i=function(){e()},o=(0,dn.$G)("global").t;return(0,xn.jsxs)(me,{children:[(0,xn.jsx)(xe,{children:o("screenPage.static.my-boards")}),(0,xn.jsxs)(ve,{children:[(0,xn.jsx)(fe,{children:(0,xn.jsx)(he,{onItemClick:i})}),(0,xn.jsx)(se,{onItemClick:i})]}),(0,xn.jsxs)(je,{children:[(0,xn.jsx)(qe,{onItemClick:i}),(0,xn.jsxs)(ge,{type:"button",onClick:function(){t((0,Ze.kS)()),r("/")},children:[(0,xn.jsx)(be,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-login")})}),o("screenPage.static.logout")]})]})]})},De=yn.ZP.div(X||(X=(0,kn.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(21, 21, 21, 0.3);\n  z-index: 999;\n"]))),Ve=yn.ZP.aside(nn||(nn=(0,kn.Z)(["\n  width: 225px;\n  height: 100vh;\n  background-color: ",";\n  z-index: 999;\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 768px) {\n    width: 260px;\n  }\n  ","\n  @media screen and (min-width: 1440px) {\n    z-index: 0;\n    position: static;\n    top: 0;\n    left: 0;\n  }\n"])),(function(n){return n.theme.currentTheme.sidebarBgn}),(function(){var n=(0,dn.$G)("global").i18n;return"rtl"===n.dir(n.language)?"\n        right: 0;\n        left: auto;\n      ":"\n        left: 0;\n        right: auto;\n      "})),Je=(0,ln.forwardRef)((function(n,e){return(0,xn.jsxs)(Ve,{ref:e,children:[(0,xn.jsx)(Ln,{}),(0,xn.jsx)($e,{onItemClick:n.onItemClick})]})})),We=function(){var n=(0,ln.useState)(!1),e=(0,sn.Z)(n,2),t=e[0],r=e[1],i=(0,ln.useRef)(null),o=(0,ln.useRef)(null),a=function(){r(!1)};return(0,xn.jsxs)(Pn,{children:[(0,xn.jsx)(Tn,{type:"button",onClick:function(){r(!t)},ref:i,children:(0,xn.jsx)(Cn,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-menu-01")})})}),t&&(0,xn.jsxs)("div",{children:[(0,xn.jsx)(De,{onClick:a}),(0,xn.jsx)(Je,{ref:o,onItemClick:a})]})]})},Ye=yn.ZP.header(en||(en=(0,kn.Z)(["\nbackground-color: "," ;\n  display: flex;\n  justify-content: space-between;\n\n  padding: "," ",";\n@media screen and (min-width: 768px) {\n    padding: "," ",";\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin: 0;\n    padding: 18px 24px;\n  }\n"])),(function(n){return n.theme.currentTheme.headerBgn}),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.spacing(5)}),(function(n){return n.theme.spacing(4.5)}),(function(n){return n.theme.spacing(8)})),Ke=yn.ZP.div(tn||(tn=(0,kn.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  justify-content: center;\n \n"]))),Qe=[{value:"light",label:"Light"},{value:"dark",label:"Dark"},{value:"violet",label:"Violet"}],Xe={control:function(n,e){return(0,un.Z)((0,un.Z)({},n),{},{backgroundColor:"transparent",color:e.isFocused?"rgba(22, 22, 22)":"rgba(22, 22, 22, 0.8)",border:"none ",boxShadow:"none",display:"flex",margin:"auto 0",padding:"0",minHeight:"0",lineHeight:"1"})},downChevron:function(n){return(0,un.Z)((0,un.Z)({},n),{},{width:"16px",height:"16px",padding:"0",margin:"0 auto"})},indicatorSeparator:function(n){return(0,un.Z)((0,un.Z)({},n),{},{display:"none"})},input:function(n){return(0,un.Z)((0,un.Z)({},n),{},{display:"none"})},dropdownIndicator:function(n){return(0,un.Z)((0,un.Z)({},n),{},{padding:"0",margin:"auto 0","&::before":{content:"none"}})},option:function(n,e){return(0,un.Z)((0,un.Z)({},n),{},{backgroundColor:"#fff",color:e.isSelected?"#5255BC":"rgb(22, 22, 22)","&:hover, &:focus":{color:"#5255bc"}})},placeholder:function(n){return(0,un.Z)((0,un.Z)({},n),{},{fontWeight:"500",fontSize:"14px",letterSpacing:"-0.02em",color:"".concat((function(n){return n.theme.currentTheme.mainText}))})}},nt=function(){var n=(0,dn.$G)("global").t,e=(0,Rn.I0)(),t=(0,ln.useState)(!1),r=(0,sn.Z)(t,2),i=r[0],o=r[1],a=(0,ln.useRef)(null),c=function(n){a.current&&!a.current.contains(n.target)&&o(!1)},s=function(){o(!i)};return(0,ln.useEffect)((function(){return document.addEventListener("click",c),function(){document.removeEventListener("click",c)}}),[]),(0,xn.jsxs)("div",{ref:a,children:[(0,xn.jsx)(hn.ZP,{options:Qe,styles:Xe,onChange:function(n){var t=n.value;e((0,Ze.Lr)({theme:t})),o(!1)},menuIsOpen:i,onMenuOpen:s,onMenuClose:s,placeholder:n("screenPage.static.theme")})," "]})},et=yn.ZP.div(rn||(rn=(0,kn.Z)(["\n  padding: 0;\n  display: flex;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),tt=yn.ZP.button(on||(on=(0,kn.Z)(["\n  width: 32px;\n  height: 32px;\n  background-color: transparent;\n  border: none;\n  border-radius: ",";\n  padding: 0;\n"])),(function(n){return n.theme.radius.m})),rt=yn.ZP.p(an||(an=(0,kn.Z)(["\n  color: ",";\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n  margin: auto 0;\n"])),(function(n){return n.theme.currentTheme.mainText})),it=yn.ZP.img(cn||(cn=(0,kn.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: ",";\n"])),(function(n){return n.theme.radius.m})),ot=t(3414),at=function(n){var e=n.avatar;return(0,xn.jsx)(xn.Fragment,{children:e?(0,xn.jsx)("img",{src:e.href,alt:"user-avatar"}):(0,xn.jsx)(ot.f7,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-user")})})})},ct=function(n){var e=n.file,t=(0,ln.useState)(null),r=(0,sn.Z)(t,2),i=r[0],o=r[1],a=new FileReader;return a.readAsDataURL(e),a.onload=function(){o(a.result)},(0,xn.jsx)(xn.Fragment,{children:i&&(0,xn.jsx)(ot.zv,{src:i,alt:"user-avatar"})})},st=Pe.Ry().shape({name:Pe.Z_().min(3,"To short").max(30,"To long"),email:Pe.Z_().email("Please enter a valid email address"),password:Pe.Z_().min(5,"The password should be at least 5 characters long").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),lt=function(n){var e=n.onCloseModal,t=n.avatar,r=(0,dn.$G)("global").t,i=(0,Rn.I0)(),o=(0,ln.useState)(!1),a=(0,sn.Z)(o,2),c=a[0],s=a[1],l=function(){s(!c)},d=(0,ln.useRef)(null);return(0,xn.jsxs)(ot.nP,{children:[(0,xn.jsx)(ot.SB,{children:r("screenPage.render.modal.profile.title")}),(0,xn.jsx)(ot.Lj,{onClick:e,children:(0,xn.jsx)(ot.bM,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-x-close")})})}),(0,xn.jsx)(ye.J9,{initialValues:{name:"",email:"",password:"",avatar:null},validationSchema:st,onSubmit:function(n,e){var t;t=n,i((0,Ze.ck)(t)),e.resetForm()},children:function(n){var i=n.values,o=n.setFieldValue;return(0,xn.jsxs)(ot.Gq,{children:[(0,xn.jsxs)(ot.yF,{children:[(0,xn.jsxs)(ot.bU,{children:[(0,xn.jsx)("input",{hidden:!0,ref:d,type:"file",name:"avatar",onChange:function(n){o("avatar",n.target.files[0])}}),i.avatar?(0,xn.jsx)(ct,{file:i.avatar}):(0,xn.jsx)(at,{avatar:t})]}),(0,xn.jsx)(ot.HS,{type:"button",onClick:function(){return d.current.click()},children:(0,xn.jsx)(ot.SC,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-plus")})})})]}),(0,xn.jsxs)(ot.ar,{htmlFor:"name",children:[(0,xn.jsx)(ot.ob,{type:"text",name:"name",placeholder:r("screenPage.render.modal.profile.name")}),(0,xn.jsx)(ot.xm,{component:"span",name:"name"})]}),(0,xn.jsxs)(ot.ar,{htmlFor:"email",children:[(0,xn.jsx)(ot.ob,{type:"email",name:"email",placeholder:r("screenPage.render.modal.profile.email")}),(0,xn.jsx)(ot.xm,{component:"span",name:"email"})]}),(0,xn.jsxs)(ot.ar,{htmlFor:"password",children:[(0,xn.jsx)(ot.ob,{type:c?"text":"password",name:"password",placeholder:r("screenPage.render.modal.profile.password")}),(0,xn.jsx)(ot.xm,{component:"span",name:"password"}),(0,xn.jsx)(ot.gU,{type:"button",onClick:l,children:(0,xn.jsx)(ot.tC,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-eye")})})})]}),(0,xn.jsx)(ot.zx,{type:"submit",onClick:e,children:r("screenPage.render.modal.profile.send")})]})}})]})},dt=t(4217);An().setAppElement("#root");var ut,pt,ht=function(){var n=(0,Rn.v9)(dt.dy),e=(0,Rn.v9)(dt.SL),t=(0,ln.useState)(!1),r=(0,sn.Z)(t,2),i=r[0],o=r[1],a=e&&new URL(e,"https://task-pro-backend-a1c2.onrender.com/public"),c=function(){o(!1)};return(0,xn.jsxs)(et,{children:[(0,xn.jsx)(rt,{children:n.name}),(0,xn.jsx)(tt,{type:"button",onClick:function(){o(!0)},children:e?(0,xn.jsx)(it,{src:a,alt:"user_photo",width:32,height:32}):(0,xn.jsx)(ot.RY,{children:(0,xn.jsx)("use",{xlinkHref:"".concat(wn.Z,"#icon-user")})})}),(0,xn.jsx)(An(),{isOpen:i,onRequestClose:c,overlayClassName:"modal-overlay",className:"modal-content",closeTimeoutMS:300,children:(0,xn.jsx)(lt,{onCloseModal:c,avatar:a})})]})},mt=function(){return(0,xn.jsxs)(Ye,{children:[(0,xn.jsx)(We,{}),(0,xn.jsxs)(Ke,{children:[(0,xn.jsx)(Zn,{}),(0,xn.jsx)(nt,{}),(0,xn.jsx)(ht,{})]})]})},xt=t(4270),ft=yn.ZP.div(ut||(ut=(0,kn.Z)(["\n  min-height: 100vh;    \n  min-width: 320px;\n  margin: 0 auto; \n  display: flex;\n  justify-content: center;\n  @media only screen and (min-width: 375px) {\n     min-width: 375px;\n  }\n\n  @media screen and (min-width: 768px) {\n    min-width: 768px;\n  }\n\n  @media screen and (min-width: 1440px) {\n   min-width: 1440px;\n  }\n"]))),gt=yn.ZP.div(pt||(pt=(0,kn.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),bt=t(4355);function jt(){var n=(0,ln.useState)(window.innerWidth>=1440),e=(0,sn.Z)(n,2),t=e[0],r=e[1],i=(0,dn.$G)("global").i18n;return(0,ln.useEffect)((function(){var n=i.dir(i.language);document.documentElement.dir=n}),[i,i.language]),(0,ln.useEffect)((function(){var n=function(){r(window.innerWidth>=1440)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),(0,xn.jsxs)(ft,{children:[(0,xn.jsx)(xt.q,{children:(0,xn.jsx)("title",{children:"Boards"})}),t&&(0,xn.jsx)(Je,{}),(0,xn.jsxs)(gt,{children:[(0,xn.jsx)(mt,{}),(0,xn.jsx)(bt.default,{})]})]})}}}]);
//# sourceMappingURL=902.14a4f99f.chunk.js.map