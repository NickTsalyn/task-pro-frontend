"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[577],{3439:function(n,e,o){o(2791);e.Z=o.p+"static/media/icons.d2e1021fcf4687730adfca29d9de45b5.svg"},2577:function(n,e,o){o.r(e),o.d(e,{default:function(){return ne}});var r,t,i,a,s,c,l,d,u,p,m,h,x,g,f,w,b,Z,P,j,y,v,k,C,z,q,T,N,$,G,I,S,B,_,A,F,R,H,D=o(7689),J=o(2791),O=o(9439),V=o(6727),E=o(5705),L=o(9434),U=o(9273),K=o(168),M=o(4894),Q=M.ZP.svg(r||(r=(0,K.Z)(["\n  stroke: ",";\n  fill: ",";\n  opacity: 0.4;\n  cursor: pointer;\n\n  width: 18px;\n  height: 18px;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.greyTextColor}),(function(n){return n.theme.colors.darkInputBgn})),W=(0,M.ZP)(E.l0)(t||(t=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ",";\n  gap: ",";\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(6)})),X=M.ZP.div(i||(i=(0,K.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(3.5)})),Y=(0,M.ZP)(E.gN)(a||(a=(0,K.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  padding: 14px 18px;\n  border-radius: ",";\n  border: 1px solid ",";\n  background: ",";\n  color: ",";\n  opacity: 0.4;\n  outline: none;\n  box-shadow: 0px 4px 16px 0px ",";\n\n  &::placeholder {\n    font-size: 14px;\n    color: ",";\n  }\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.lightGreen}),(function(n){return n.theme.colors.darkInputBgn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.shadowColor}),(function(n){return n.theme.colors.greyTextColor})),nn=M.ZP.button(s||(s=(0,K.Z)(["\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  bottom: 10px;\n  right: 18px;\n\n  background: none;\n  border: none;\n  cursor: pointer;\n"]))),en=M.ZP.button(c||(c=(0,K.Z)(["\n  width: 100%;\n  padding-top: ",";\n  padding-bottom: ",";\n  border: none;\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #9dc888;\n  }\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.darkTextColor}),(function(n){return n.theme.colors.lightGreen})),on=M.ZP.label(l||(l=(0,K.Z)(["\n  position: relative;\n"]))),rn=(0,M.ZP)(E.Bc)(d||(d=(0,K.Z)(["\n  margin-top: 3px;\n  padding-left: 14px;\n  color: #c04d4d;\n  font-size: 12px;\n"]))),tn=M.ZP.div(u||(u=(0,K.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]))),an=o(3439),sn=o(9230),cn=o(184),ln=V.Ry().shape({name:V.Z_().required("Name is required!").min(2,"Name must be at least 2 characters").max(32,"Name must be at most 32 characters"),email:V.Z_().email("Invalid email!").required("Email is required!"),password:V.Z_().min(8,"Password is too short!").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,"The password must contain a minimum of 8 characters, at least one letter, one number, and one special character!").max(64,"Password must be at most 64 characters").required("Password is required!")}),dn={name:"",email:"",password:"",showPassword:!1},un=function(){var n=(0,sn.$G)("global").t,e=(0,D.s0)(),o=(0,L.I0)(),r=(0,J.useState)(!1),t=(0,O.Z)(r,2),i=t[0],a=t[1];return(0,cn.jsx)(E.J9,{initialValues:dn,validationSchema:ln,onSubmit:function(n,r){var t=r.resetForm,i=n.name,a=n.email,s=n.password;o((0,U.z2)({name:i,email:a,password:s})),e("/home"),t()},children:(0,cn.jsxs)(W,{children:[(0,cn.jsxs)(X,{children:[(0,cn.jsxs)(on,{children:[(0,cn.jsx)(Y,{type:"text",id:"name",name:"name",placeholder:n("welcomePage.registration.name"),autoComplete:"off"}),(0,cn.jsx)(rn,{name:"name",component:"div"})]}),(0,cn.jsxs)(on,{children:[(0,cn.jsx)(Y,{type:"email",id:"email",name:"email",placeholder:n("welcomePage.registration.email"),autoComplete:"off"}),(0,cn.jsx)(rn,{name:"email",component:"div"})]}),(0,cn.jsxs)(on,{children:[(0,cn.jsxs)(tn,{children:[(0,cn.jsx)(Y,{type:i?"text":"password",id:"password",name:"password",placeholder:n("welcomePage.registration.password"),autoComplete:"off"}),(0,cn.jsx)(nn,{type:"button ",onClick:function(n){n.preventDefault(),a(!i)},children:(0,cn.jsx)(Q,{children:(0,cn.jsx)("use",{xlinkHref:"".concat(an.Z,"#icon-eye")})})})]}),(0,cn.jsx)(rn,{name:"password",component:"div"})]})]}),(0,cn.jsx)(en,{type:"submit",children:n("welcomePage.registration.button")})]})})},pn=o(1087),mn=M.ZP.div(p||(p=(0,K.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background: linear-gradient(\n    180deg,\n    rgba(196, 196, 196, 0) 25%,\n    #bedbb0 92.19%\n  );\n"]))),hn=M.ZP.div(m||(m=(0,K.Z)(["\n  width: calc(100%-84px);\n  background-color: #151515;\n  padding: 24px;\n  border-radius: 8px;\n  border: 1px solid black;\n\n  @media (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media (min-width: 768px) {\n    border: 1px solid black;\n    padding: 40px;\n    width: 424px;\n  }\n"]))),xn=M.ZP.div(h||(h=(0,K.Z)(["\n  display: flex;\n  margin-bottom: 40px;\n  gap: 14px;\n"]))),gn=(0,M.ZP)(pn.OL)(x||(x=(0,K.Z)(["\n  color: rgba(255, 255, 255, 0.3);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  background: none;\n  border: none;\n  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &.active {\n    color: #fff;\n  }\n"]))),fn=M.ZP.svg(g||(g=(0,K.Z)(["\n  stroke: ",";\n  fill: ",";\n  opacity: 0.4;\n  cursor: pointer;\n\n  width: 18px;\n  height: 18px;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.greyTextColor}),(function(n){return n.theme.colors.darkInputBgn})),wn=M.ZP.button(f||(f=(0,K.Z)(["\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  bottom: 10px;\n  right: 18px;\n\n  background: none;\n  border: none;\n  cursor: pointer;\n"]))),bn=(0,M.ZP)(E.l0)(w||(w=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ",";\n  gap: ",";\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(6)})),Zn=M.ZP.div(b||(b=(0,K.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(3.5)})),Pn=(0,M.ZP)(E.gN)(Z||(Z=(0,K.Z)(["\n  width: 100%;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  padding: 14px 18px;\n  border-radius: ",";\n  border: 1px solid ",";\n  background: ",";\n  color: ",";\n  opacity: 0.4;\n  outline: none;\n  box-shadow: 0px 4px 16px 0px ",";\n  box-sizing: border-box;\n  &::placeholder {\n    font-size: 14px;\n    color: ",";\n  }\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.lightGreen}),(function(n){return n.theme.colors.darkInputBgn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.shadowColor}),(function(n){return n.theme.colors.greyTextColor})),jn=M.ZP.button(P||(P=(0,K.Z)(["\n  width: 100%;\n  padding-top: ",";\n  padding-bottom: ",";\n  border: none;\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #9dc888;\n  }\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.darkTextColor}),(function(n){return n.theme.colors.lightGreen})),yn=M.ZP.label(j||(j=(0,K.Z)(["\n  position: relative;\n"]))),vn=(0,M.ZP)(E.Bc)(y||(y=(0,K.Z)(["\n  margin-top: 3px;\n  padding-left: 14px;\n  color: #c04d4d;\n  font-size: 12px;\n"]))),kn=M.ZP.div(v||(v=(0,K.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]))),Cn=(0,M.ZP)(pn.OL)(k||(k=(0,K.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.lightGreen})),zn=V.Ry().shape({email:V.Z_().email("Invalid email!").required("Email is required!"),password:V.Z_().min(8,"Password is too short!").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,"The password must contain a minimum of 8 characters, at least one letter, one number, and one special character!").max(64,"Password must be at most 64 characters").required("Password is required!")}),qn={email:"",password:""},Tn=function(){var n=(0,D.s0)(),e=(0,L.I0)(),o=(0,sn.$G)("global").t,r=(0,J.useState)(!1),t=(0,O.Z)(r,2),i=t[0],a=t[1];return(0,cn.jsx)(E.J9,{initialValues:qn,validationSchema:zn,onSubmit:function(o,r){var t=r.resetForm,i=o.email,a=o.password;e((0,U.x4)({email:i,password:a})),n("/home"),t()},children:(0,cn.jsxs)(bn,{children:[(0,cn.jsxs)(Zn,{children:[(0,cn.jsxs)(yn,{children:[(0,cn.jsx)(Pn,{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:o("welcomePage.login.email")}),(0,cn.jsx)(vn,{name:"email",component:"div"})]}),(0,cn.jsxs)(yn,{children:[(0,cn.jsxs)(kn,{children:[(0,cn.jsx)(Pn,{type:i?"text":"password",id:"password",name:"password",placeholder:o("welcomePage.login.password"),autoComplete:"off"}),(0,cn.jsx)(wn,{type:"button ",onClick:function(n){n.preventDefault(),a(!i)},children:(0,cn.jsx)(fn,{children:(0,cn.jsx)("use",{xlinkHref:"".concat(an.Z,"#icon-eye")})})})]}),(0,cn.jsx)(vn,{name:"password",component:"div"})]})]}),(0,cn.jsx)(jn,{type:"submit",children:o("welcomePage.login.button")}),(0,cn.jsx)("div",{children:(0,cn.jsx)(Cn,{to:"/auth/forgetPassword",children:o("welcomePage.login.forgot")})})]})})},Nn=o(1413),$n=(0,M.ZP)(E.l0)(C||(C=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ",";\n  gap: ",";\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(6)})),Gn=M.ZP.div(z||(z=(0,K.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(3.5)})),In=(0,M.ZP)(E.gN)(q||(q=(0,K.Z)(["\n  width: 100%;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  padding: 14px 18px;\n  border-radius: ",";\n  border: 1px solid ",";\n  background: ",";\n  color: ",";\n  opacity: 0.4;\n  outline: none;\n  box-shadow: 0px 4px 16px 0px ",";\n  box-sizing: border-box;\n  &::placeholder {\n    font-size: 14px;\n    color: ",";\n  }\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.lightGreen}),(function(n){return n.theme.colors.darkInputBgn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.shadowColor}),(function(n){return n.theme.colors.greyTextColor})),Sn=M.ZP.button(T||(T=(0,K.Z)(["\n  width: 100%;\n  padding-top: ",";\n  padding-bottom: ",";\n  border: none;\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #9dc888;\n  }\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.darkTextColor}),(function(n){return n.theme.colors.lightGreen})),Bn=(0,M.ZP)(E.Bc)(N||(N=(0,K.Z)(["\n  margin-top: 3px;\n  padding-left: 14px;\n  color: #c04d4d;\n  font-size: 12px;\n"]))),_n=M.ZP.label($||($=(0,K.Z)(["\n  position: relative;\n"]))),An=M.ZP.div(G||(G=(0,K.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]))),Fn=M.ZP.svg(I||(I=(0,K.Z)(["\n  stroke: ",";\n  fill: ",";\n  opacity: 0.4;\n  cursor: pointer;\n\n  width: 18px;\n  height: 18px;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.greyTextColor}),(function(n){return n.theme.colors.darkInputBgn})),Rn=M.ZP.button(S||(S=(0,K.Z)(["\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  bottom: 10px;\n  right: 18px;\n\n  background: none;\n  border: none;\n  cursor: pointer;\n"]))),Hn=V.Ry().shape({tempraryPassword:V.Z_().matches(/^.{24}$/,"Recovery code must be exactly 12 characters long").required("Recovery code is required!"),newPassword:V.Z_().min(8,"Password is too short!").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,"The password must contain a minimum of 8 characters, at least one letter, one number, and one special character!").max(64,"Password must be at most 64 characters").required("Password is required!"),confirmNewPassword:V.Z_().oneOf([V.iH("newPassword"),null],"Passwords must match").required("Confirm Password is required!")}),Dn={tempraryPassword:"",newPassword:"",confirmNewPassword:""},Jn=function(){var n=(0,sn.$G)("global").t,e=(0,L.I0)(),o=(0,J.useState)(!1),r=(0,O.Z)(o,2),t=r[0],i=r[1],a=function(n){n.preventDefault(),i(!t)},s=(0,D.s0)();return(0,cn.jsx)(E.J9,{initialValues:Dn,validationSchema:Hn,onSubmit:function(n,o){var r=o.resetForm,t=n.tempraryPassword,i=n.newPassword,a=n.confirmNewPassword;e((0,U.Cp)({tempraryPassword:t,newPassword:i,confirmNewPassword:a})),r(),setTimeout((function(){s("/auth/login")}),3e3)},children:(0,cn.jsxs)($n,{children:[(0,cn.jsx)(Gn,{children:(0,cn.jsxs)(_n,{children:[(0,cn.jsx)(An,{children:(0,cn.jsx)(In,{type:"text",id:"tempraryPassword",name:"tempraryPassword",autoComplete:"temprorary-password",placeholder:n("welcomePage.recovery.code")})}),(0,cn.jsx)(Bn,{name:"tempraryPassword",component:"div"})]})}),(0,cn.jsx)(Gn,{children:(0,cn.jsxs)(_n,{children:[(0,cn.jsxs)(An,{children:[(0,cn.jsx)(In,{type:t?"text":"password",id:"newPassword",name:"newPassword",autoComplete:"new-password",placeholder:n("welcomePage.recovery.new")}),(0,cn.jsx)(Rn,{type:"button ",onClick:a,children:(0,cn.jsx)(Fn,{children:(0,cn.jsx)("use",{xlinkHref:"".concat(an.Z,"#icon-eye")})})})]}),(0,cn.jsx)(Bn,{name:"newPassword",component:"div"})]})}),(0,cn.jsx)(Gn,{children:(0,cn.jsxs)(_n,{children:[(0,cn.jsxs)(An,{children:[(0,cn.jsx)(E.gN,{id:"confirmNewPassword",name:"confirmNewPassword",placeholder:n("welcomePage.recovery.confirm"),render:function(e){var o=e.field;return(0,cn.jsx)(In,(0,Nn.Z)((0,Nn.Z)({},o),{},{type:t?"text":"password",autoComplete:"new-password",onPaste:function(n){return n.preventDefault()},placeholder:n("welcomePage.recovery.code")}))}}),";",(0,cn.jsx)(Rn,{type:"button ",onClick:a,children:(0,cn.jsx)(Fn,{children:(0,cn.jsx)("use",{xlinkHref:"".concat(an.Z,"#icon-eye")})})})]}),(0,cn.jsx)(Bn,{name:"confirmNewPassword",component:"div"}),";"]})}),(0,cn.jsx)(Sn,{type:"submit",children:n("welcomePage.recovery.change")})]})})},On=(0,M.ZP)(E.l0)(B||(B=(0,K.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ",";\n  gap: ",";\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(6)})),Vn=M.ZP.div(_||(_=(0,K.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(3.5)})),En=(0,M.ZP)(E.gN)(A||(A=(0,K.Z)(["\n  width: 100%;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  padding: 14px 18px;\n  border-radius: ",";\n  border: 1px solid ",";\n  background: ",";\n  color: ",";\n  opacity: 0.4;\n  outline: none;\n  box-shadow: 0px 4px 16px 0px ",";\n  box-sizing: border-box;\n  &::placeholder {\n    font-size: 14px;\n    color: ",";\n  }\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.lightGreen}),(function(n){return n.theme.colors.darkInputBgn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.shadowColor}),(function(n){return n.theme.colors.greyTextColor})),Ln=M.ZP.button(F||(F=(0,K.Z)(["\n  width: 100%;\n  padding-top: ",";\n  padding-bottom: ",";\n  border: none;\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #9dc888;\n  }\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.darkTextColor}),(function(n){return n.theme.colors.lightGreen})),Un=(0,M.ZP)(E.Bc)(R||(R=(0,K.Z)(["\n  margin-top: 3px;\n  padding-left: 14px;\n  color: #c04d4d;\n  font-size: 12px;\n"]))),Kn=M.ZP.label(H||(H=(0,K.Z)(["\n  position: relative;\n"]))),Mn=o(5218),Qn=V.Ry().shape({email:V.Z_().email("Invalid email!").required("Email is required!")}),Wn={email:""},Xn=function(){var n=(0,sn.$G)("global").t,e=(0,L.I0)(),o=(0,D.s0)();return(0,cn.jsx)(E.J9,{initialValues:Wn,validationSchema:Qn,onSubmit:function(n,r){var t=r.resetForm,i=n.email;e((0,U.o9)({email:i})).then((function(n){"User not found"===n.payload?Mn.ZP.error("User not found. Please check your email."):Mn.ZP.success("Temporary password sent to ".concat(i," successfully!"))})).catch((function(n){console.log(n),Mn.ZP.error("An error occurred. Please try again.")})),setTimeout((function(){o("/auth/changePassword")}),3e3),t()},children:(0,cn.jsxs)(On,{children:[(0,cn.jsx)(Vn,{children:(0,cn.jsxs)(Kn,{children:[(0,cn.jsx)(En,{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:n("welcomePage.forgot.email")}),(0,cn.jsx)(Un,{name:"email",component:"div"})]})}),(0,cn.jsx)(Ln,{type:"submit",children:n("welcomePage.forgot.send")})]})})},Yn=function(){var n=(0,D.UO)().id,e=(0,sn.$G)("global").t;return(0,cn.jsx)(mn,{children:(0,cn.jsxs)(hn,{children:[(0,cn.jsxs)(xn,{children:[(0,cn.jsx)(gn,{to:"/auth/register",children:e("welcomePage.welcome.registration")}),(0,cn.jsx)(gn,{to:"/auth/login",children:e("welcomePage.welcome.login")})]}),"login"===n&&(0,cn.jsx)(Tn,{}),"register"===n&&(0,cn.jsx)(un,{}),"forgetPassword"===n&&(0,cn.jsx)(Xn,{}),"changePassword"===n&&(0,cn.jsx)(Jn,{}),(0,cn.jsx)(J.Suspense,{fallback:(0,cn.jsx)(cn.Fragment,{children:"Login..."}),children:(0,cn.jsx)(D.j3,{})})]})})};function ne(){return(0,cn.jsx)(cn.Fragment,{children:(0,cn.jsx)(Yn,{})})}}}]);
//# sourceMappingURL=577.b8165357.chunk.js.map