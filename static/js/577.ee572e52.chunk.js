"use strict";(self.webpackChunktask_pro=self.webpackChunktask_pro||[]).push([[577],{2577:function(n,e,o){o.r(e),o.d(e,{default:function(){return se}});var r,t,i,a,s,c,l,d,u,p,m,h,x,g,f,w,b,Z,P,y,j,v,k,C,z,T,q,I,G,$,N,S,_,A,B,F,R,D,J,L,O,V=o(7689),E=o(2791),U=o(9439),H=o(6727),Y=o(5705),K=o(9434),M=o(9273),Q=o(168),W=o(4894),X=o(9108),nn=(0,W.ZP)(X.Zju)(r||(r=(0,Q.Z)(["\n  fill: ",";\n  opacity: 0.4;\n  cursor: pointer;\n\n  width: 18px;\n  height: 18px;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.greyTextColor})),en=(0,W.ZP)(X.I0d)(t||(t=(0,Q.Z)(["\n  fill: ",";\n  opacity: 0.4;\n  cursor: pointer;\n\n  width: 18px;\n  height: 18px;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.greyTextColor})),on=(0,W.ZP)(Y.l0)(i||(i=(0,Q.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ",";\n  gap: ",";\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(6)})),rn=W.ZP.div(a||(a=(0,Q.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(3.5)})),tn=(0,W.ZP)(Y.gN)(s||(s=(0,Q.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  padding: 14px 18px;\n  border-radius: ",";\n  border: 1px solid ",";\n  background: ",";\n  color: ",";\n  opacity: 0.4;\n  outline: none;\n  box-shadow: 0px 4px 16px 0px ",";\n\n  &::placeholder {\n    font-size: 14px;\n    color: ",";\n  }\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.lightGreen}),(function(n){return n.theme.colors.darkInputBgn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.shadowColor}),(function(n){return n.theme.colors.greyTextColor})),an=W.ZP.button(c||(c=(0,Q.Z)(["\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  bottom: 10px;\n  right: 18px;\n\n  background: none;\n  border: none;\n  cursor: pointer;\n"]))),sn=W.ZP.button(l||(l=(0,Q.Z)(["\n  width: 100%;\n  padding-top: ",";\n  padding-bottom: ",";\n  border: none;\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #9dc888;\n  }\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.darkTextColor}),(function(n){return n.theme.colors.lightGreen})),cn=W.ZP.label(d||(d=(0,Q.Z)(["\n  position: relative;\n"]))),ln=(0,W.ZP)(Y.Bc)(u||(u=(0,Q.Z)(["\n  margin-top: 3px;\n  padding-left: 14px;\n  color: #c04d4d;\n  font-size: 12px;\n"]))),dn=W.ZP.div(p||(p=(0,Q.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]))),un=o(9230),pn=o(184),mn=H.Ry().shape({name:H.Z_().required("Name is required!").min(2,"Name must be at least 2 characters").max(32,"Name must be at most 32 characters"),email:H.Z_().email("Invalid email!").required("Email is required!"),password:H.Z_().min(8,"Password is too short!").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,"The password must contain a minimum of 8 characters, at least one letter, one number, and one special character!").max(64,"Password must be at most 64 characters").required("Password is required!")}),hn={name:"",email:"",password:"",showPassword:!1},xn=function(){var n=(0,un.$G)("global").t,e=(0,V.s0)(),o=(0,K.I0)(),r=(0,E.useState)(!1),t=(0,U.Z)(r,2),i=t[0],a=t[1];return(0,pn.jsx)(Y.J9,{initialValues:hn,validationSchema:mn,onSubmit:function(n,r){var t=r.resetForm,i=n.name,a=n.email,s=n.password;o((0,M.z2)({name:i,email:a,password:s})),e("/home"),t()},children:(0,pn.jsxs)(on,{children:[(0,pn.jsxs)(rn,{children:[(0,pn.jsxs)(cn,{children:[(0,pn.jsx)(tn,{type:"text",id:"name",name:"name",placeholder:n("welcomePage.registration.name"),autoComplete:"off"}),(0,pn.jsx)(ln,{name:"name",component:"div"})]}),(0,pn.jsxs)(cn,{children:[(0,pn.jsx)(tn,{type:"email",id:"email",name:"email",placeholder:n("welcomePage.registration.email"),autoComplete:"off"}),(0,pn.jsx)(ln,{name:"email",component:"div"})]}),(0,pn.jsxs)(cn,{children:[(0,pn.jsxs)(dn,{children:[(0,pn.jsx)(tn,{type:i?"text":"password",id:"password",name:"password",placeholder:n("welcomePage.registration.password"),autoComplete:"off"}),(0,pn.jsx)(an,{type:"button ",onClick:function(n){n.preventDefault(),a(!i)},children:i?(0,pn.jsx)(en,{}):(0,pn.jsx)(nn,{})})]}),(0,pn.jsx)(ln,{name:"password",component:"div"})]})]}),(0,pn.jsx)(sn,{type:"submit",children:n("welcomePage.registration.button")})]})})},gn=o(1087),fn=W.ZP.div(m||(m=(0,Q.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background: linear-gradient(\n    180deg,\n    rgba(196, 196, 196, 0) 25%,"," 92.19%\n  );\n"])),(function(n){return n.theme.colors.lightGreen})),wn=W.ZP.div(h||(h=(0,Q.Z)(["\n  width: calc(100%-84px);\n  background-color: ",";\n  padding: 24px;\n  border-radius: ",";\n  border: 1px solid black;\n\n  @media (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media (min-width: 768px) {\n    border: 1px solid black;\n    padding: 40px;\n    width: 424px;\n  }\n"])),(function(n){return n.theme.colors.darkBgn}),(function(n){return n.theme.radius.m})),bn=W.ZP.div(x||(x=(0,Q.Z)(["\n  display: flex;\n  margin-bottom: 40px;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(3.5)})),Zn=(0,W.ZP)(gn.OL)(g||(g=(0,Q.Z)(["\n  color: rgba(255, 255, 255, 0.3);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: -0.02em;\n  background: none;\n  border: none;\n  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &.active {\n    color: #fff;\n  }\n"]))),Pn=(0,W.ZP)(X.Zju)(f||(f=(0,Q.Z)(["\n  fill: ",";\n  opacity: 0.4;\n  cursor: pointer;\n\n  width: 18px;\n  height: 18px;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.greyTextColor})),yn=(0,W.ZP)(X.I0d)(w||(w=(0,Q.Z)(["\n  fill: ",";\n  opacity: 0.4;\n  cursor: pointer;\n\n  width: 18px;\n  height: 18px;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.greyTextColor})),jn=W.ZP.button(b||(b=(0,Q.Z)(["\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  bottom: 10px;\n  right: 18px;\n\n  background: none;\n  border: none;\n  cursor: pointer;\n"]))),vn=(0,W.ZP)(Y.l0)(Z||(Z=(0,Q.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ",";\n  gap: ",";\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(6)})),kn=W.ZP.div(P||(P=(0,Q.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(3.5)})),Cn=(0,W.ZP)(Y.gN)(y||(y=(0,Q.Z)(["\n  width: 100%;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  padding: 14px 18px;\n  border-radius: ",";\n  border: 1px solid ",";\n  background: ",";\n  color: ",";\n  opacity: 0.4;\n  outline: none;\n  box-shadow: 0px 4px 16px 0px ",";\n  box-sizing: border-box;\n  &::placeholder {\n    font-size: 14px;\n    color: ",";\n  }\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.lightGreen}),(function(n){return n.theme.colors.darkInputBgn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.shadowColor}),(function(n){return n.theme.colors.greyTextColor})),zn=W.ZP.button(j||(j=(0,Q.Z)(["\n  width: 100%;\n  padding-top: ",";\n  padding-bottom: ",";\n  border: none;\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #9dc888;\n  }\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.darkTextColor}),(function(n){return n.theme.colors.lightGreen})),Tn=W.ZP.label(v||(v=(0,Q.Z)(["\n  position: relative;\n"]))),qn=(0,W.ZP)(Y.Bc)(k||(k=(0,Q.Z)(["\n  margin-top: 3px;\n  padding-left: 14px;\n  color: #c04d4d;\n  font-size: 12px;\n"]))),In=W.ZP.div(C||(C=(0,Q.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]))),Gn=(0,W.ZP)(gn.OL)(z||(z=(0,Q.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.lightGreen})),$n=H.Ry().shape({email:H.Z_().email("Invalid email!").required("Email is required!"),password:H.Z_().min(8,"Password is too short!").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,"The password must contain a minimum of 8 characters, at least one letter, one number, and one special character!").max(64,"Password must be at most 64 characters").required("Password is required!")}),Nn={email:"",password:""},Sn=function(){var n=(0,V.s0)(),e=(0,K.I0)(),o=(0,un.$G)("global").t,r=(0,E.useState)(!1),t=(0,U.Z)(r,2),i=t[0],a=t[1];return(0,pn.jsx)(Y.J9,{initialValues:Nn,validationSchema:$n,onSubmit:function(o,r){var t=r.resetForm,i=o.email,a=o.password;e((0,M.x4)({email:i,password:a})),n("/home"),t()},children:(0,pn.jsxs)(vn,{children:[(0,pn.jsxs)(kn,{children:[(0,pn.jsxs)(Tn,{children:[(0,pn.jsx)(Cn,{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:o("welcomePage.login.email")}),(0,pn.jsx)(qn,{name:"email",component:"div"})]}),(0,pn.jsxs)(Tn,{children:[(0,pn.jsxs)(In,{children:[(0,pn.jsx)(Cn,{type:i?"text":"password",id:"password",name:"password",placeholder:o("welcomePage.login.password"),autoComplete:"off"}),(0,pn.jsx)(jn,{type:"button",onClick:function(n){n.preventDefault(),a(!i)},children:i?(0,pn.jsx)(yn,{}):(0,pn.jsx)(Pn,{})})]}),(0,pn.jsx)(qn,{name:"password",component:"div"})]})]}),(0,pn.jsx)(zn,{type:"submit",children:o("welcomePage.login.button")}),(0,pn.jsx)("div",{children:(0,pn.jsx)(Gn,{to:"/auth/forgetPassword",children:o("welcomePage.login.forgot")})})]})})},_n=o(1413),An=(0,W.ZP)(X.Zju)(T||(T=(0,Q.Z)(["\n  fill: ",";\n  opacity: 0.4;\n  cursor: pointer;\n\n  width: 18px;\n  height: 18px;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.greyTextColor})),Bn=(0,W.ZP)(X.I0d)(q||(q=(0,Q.Z)(["\n  fill: ",";\n  opacity: 0.4;\n  cursor: pointer;\n\n  width: 18px;\n  height: 18px;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.greyTextColor})),Fn=(0,W.ZP)(Y.l0)(I||(I=(0,Q.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ",";\n  gap: ",";\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(6)})),Rn=W.ZP.div(G||(G=(0,Q.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(3.5)})),Dn=(0,W.ZP)(Y.gN)($||($=(0,Q.Z)(["\n  width: 100%;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  padding: 14px 18px;\n  border-radius: ",";\n  border: 1px solid ",";\n  background: ",";\n  color: ",";\n  opacity: 0.4;\n  outline: none;\n  box-shadow: 0px 4px 16px 0px ",";\n  box-sizing: border-box;\n  &::placeholder {\n    font-size: 14px;\n    color: ",";\n  }\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.lightGreen}),(function(n){return n.theme.colors.darkInputBgn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.shadowColor}),(function(n){return n.theme.colors.greyTextColor})),Jn=W.ZP.button(N||(N=(0,Q.Z)(["\n  width: 100%;\n  padding-top: ",";\n  padding-bottom: ",";\n  border: none;\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #9dc888;\n  }\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.darkTextColor}),(function(n){return n.theme.colors.lightGreen})),Ln=(0,W.ZP)(Y.Bc)(S||(S=(0,Q.Z)(["\n  margin-top: 3px;\n  padding-left: 14px;\n  color: #c04d4d;\n  font-size: 12px;\n"]))),On=W.ZP.label(_||(_=(0,Q.Z)(["\n  position: relative;\n"]))),Vn=W.ZP.div(A||(A=(0,Q.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]))),En=W.ZP.button(B||(B=(0,Q.Z)(["\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  bottom: 10px;\n  right: 18px;\n\n  background: none;\n  border: none;\n  cursor: pointer;\n"]))),Un=o(5218),Hn=H.Ry().shape({tempraryPassword:H.Z_().matches(/^.{24}$/,"Recovery code must be exactly 12 characters long").required("Recovery code is required!"),newPassword:H.Z_().min(8,"Password is too short!").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,"The password must contain a minimum of 8 characters, at least one letter, one number, and one special character!").max(64,"Password must be at most 64 characters").required("Password is required!"),confirmNewPassword:H.Z_().oneOf([H.iH("newPassword"),null],"Passwords must match").required("Confirm Password is required!")}),Yn={tempraryPassword:"",newPassword:"",confirmNewPassword:""},Kn=function(){var n=(0,un.$G)("global").t,e=(0,K.I0)(),o=(0,E.useState)(!1),r=(0,U.Z)(o,2),t=r[0],i=r[1],a=(0,E.useState)(!1),s=(0,U.Z)(a,2),c=s[0],l=s[1],d=(0,V.s0)();return(0,pn.jsx)(Y.J9,{initialValues:Yn,validationSchema:Hn,onSubmit:function(n,o){var r=o.resetForm,t=n.tempraryPassword,i=n.newPassword;e((0,M.Cp)({resetToken:t,newPassword:i})).then((function(n){"Invalid or expired reset code"===n.payload?Un.ZP.error("Invalid or expired reset code"):(Un.ZP.success("Your password has been successfully changed to a new one. Log in with your new password."),setTimeout((function(){d("/auth/login")}),3e3))})).catch((function(n){console.log(n),Un.ZP.error("An error occurred. Please try again.")})),r()},children:(0,pn.jsxs)(Fn,{children:[(0,pn.jsx)(Rn,{children:(0,pn.jsxs)(On,{children:[(0,pn.jsx)(Vn,{children:(0,pn.jsx)(Dn,{type:"text",id:"tempraryPassword",name:"tempraryPassword",autoComplete:"temprorary-password",placeholder:n("welcomePage.recovery.code")})}),(0,pn.jsx)(Ln,{name:"tempraryPassword",component:"div"})]})}),(0,pn.jsx)(Rn,{children:(0,pn.jsxs)(On,{children:[(0,pn.jsxs)(Vn,{children:[(0,pn.jsx)(Dn,{type:c?"text":"password",id:"newPassword",name:"newPassword",autoComplete:"new-password",placeholder:n("welcomePage.recovery.new")}),(0,pn.jsx)(En,{type:"button ",onClick:function(n){n.preventDefault(),l(!c)},children:t?(0,pn.jsx)(Bn,{}):(0,pn.jsx)(An,{})})]}),(0,pn.jsx)(Ln,{name:"newPassword",component:"div"})]})}),(0,pn.jsx)(Rn,{children:(0,pn.jsxs)(On,{children:[(0,pn.jsxs)(Vn,{children:[(0,pn.jsx)(Y.gN,{id:"confirmNewPassword",name:"confirmNewPassword",placeholder:n("welcomePage.recovery.confirm"),render:function(e){var o=e.field;return(0,pn.jsx)(Dn,(0,_n.Z)((0,_n.Z)({},o),{},{type:t?"text":"password",autoComplete:"new-password",onPaste:function(n){return n.preventDefault()},placeholder:n("welcomePage.recovery.code")}))}}),";",(0,pn.jsx)(En,{type:"button ",onClick:function(n){n.preventDefault(),i(!t)},children:t?(0,pn.jsx)(Bn,{}):(0,pn.jsx)(An,{})})]}),(0,pn.jsx)(Ln,{name:"confirmNewPassword",component:"div"}),";"]})}),(0,pn.jsx)(Jn,{type:"submit",children:n("welcomePage.recovery.change")})]})})},Mn=(0,W.ZP)(Y.l0)(F||(F=(0,Q.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: ",";\n  gap: ",";\n"])),(function(n){return n.theme.spacing(10)}),(function(n){return n.theme.spacing(6)})),Qn=W.ZP.div(R||(R=(0,Q.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(3.5)})),Wn=(0,W.ZP)(Y.gN)(D||(D=(0,Q.Z)(["\n  width: 100%;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  padding: 14px 18px;\n  border-radius: ",";\n  border: 1px solid ",";\n  background: ",";\n  color: ",";\n  opacity: 0.4;\n  outline: none;\n  box-shadow: 0px 4px 16px 0px ",";\n  box-sizing: border-box;\n  &::placeholder {\n    font-size: 14px;\n    color: ",";\n  }\n  &:focus {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.lightGreen}),(function(n){return n.theme.colors.darkInputBgn}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.shadowColor}),(function(n){return n.theme.colors.greyTextColor})),Xn=W.ZP.button(J||(J=(0,Q.Z)(["\n  width: 100%;\n  padding-top: ",";\n  padding-bottom: ",";\n  border: none;\n  border-radius: ",";\n  color: ",";\n  background: ",";\n  line-height: 21px;\n  letter-spacing: -0.02em;\n  transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);\n\n  &:hover,\n  &:focus {\n    background-color: #9dc888;\n  }\n"])),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.spacing(3.5)}),(function(n){return n.theme.radius.m}),(function(n){return n.theme.colors.darkTextColor}),(function(n){return n.theme.colors.lightGreen})),ne=(0,W.ZP)(Y.Bc)(L||(L=(0,Q.Z)(["\n  margin-top: 3px;\n  padding-left: 14px;\n  color: #c04d4d;\n  font-size: 12px;\n"]))),ee=W.ZP.label(O||(O=(0,Q.Z)(["\n  position: relative;\n"]))),oe=H.Ry().shape({email:H.Z_().email("Invalid email!").required("Email is required!")}),re={email:""},te=function(){var n=(0,un.$G)("global").t,e=(0,K.I0)(),o=(0,V.s0)();return(0,pn.jsx)(Y.J9,{initialValues:re,validationSchema:oe,onSubmit:function(n,r){var t=r.resetForm,i=n.email;e((0,M.o9)({email:i})).then((function(n){"User not found"===n.payload?Un.ZP.error("User not found. Please check your email."):(Un.ZP.success("Temporary password sent to ".concat(i," successfully!")),setTimeout((function(){o("/auth/changePassword")}),3e3))})).catch((function(n){console.log(n),Un.ZP.error("An error occurred. Please try again.")})),t()},children:(0,pn.jsxs)(Mn,{children:[(0,pn.jsx)(Qn,{children:(0,pn.jsxs)(ee,{children:[(0,pn.jsx)(Wn,{type:"text",id:"email",name:"email",autoComplete:"off",placeholder:n("welcomePage.forgot.email")}),(0,pn.jsx)(ne,{name:"email",component:"div"})]})}),(0,pn.jsx)(Xn,{type:"submit",children:n("welcomePage.forgot.send")})]})})},ie=o(4270),ae=function(){var n=(0,V.UO)().id,e=(0,un.$G)("global").t;return(0,pn.jsx)(fn,{children:(0,pn.jsxs)(wn,{children:[(0,pn.jsxs)(bn,{children:[(0,pn.jsxs)(Zn,{to:"/auth/register",children:[(0,pn.jsx)(ie.q,{children:(0,pn.jsx)("title",{children:"Authorization"})}),e("welcomePage.welcome.registration")]}),(0,pn.jsx)(Zn,{to:"/auth/login",children:e("welcomePage.welcome.login")})]}),"login"===n&&(0,pn.jsx)(Sn,{}),"register"===n&&(0,pn.jsx)(xn,{}),"forgetPassword"===n&&(0,pn.jsx)(te,{}),"changePassword"===n&&(0,pn.jsx)(Kn,{}),(0,pn.jsx)(E.Suspense,{fallback:(0,pn.jsx)(pn.Fragment,{children:"Login..."}),children:(0,pn.jsx)(V.j3,{})})]})})};function se(){return(0,pn.jsx)(pn.Fragment,{children:(0,pn.jsx)(ae,{})})}}}]);
//# sourceMappingURL=577.ee572e52.chunk.js.map