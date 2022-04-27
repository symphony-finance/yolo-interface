"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{65178:function(e,n,r){r.r(n),r.d(n,{default:function(){return Oe}});var t=r(28520),o=r.n(t),i=r(35944),a=r(2593),c=r(67294),u=r(86886),l=r(70917),s=r(15861),d=r(2734),m=r(77044),f=r(94859),p=r(32103),v=r(90948),h=r(41796),g=r(95271),x=r(22038),b=(0,v.ZP)(u.ZP)((function(e){var n=e.theme,r=e.isMobile;return{background:(0,h.Fq)(n.palette.primary.main,(n.palette.mode,.1)),width:"100%",padding:"7px 14px",borderRadius:r?"0px":"8px",position:"relative",fontSize:r?"12px":"14px",lineHeight:r?"initial":1.21,fontWeight:400,color:(0,h.Fq)(x.S.primary,1)}})),y=(0,v.ZP)(p.Tw)((function(e){e.theme;return{position:"absolute",right:"0.75rem",top:"0.4375rem",width:"1.125rem",height:"1.125rem",transform:"scale(1.2)",cursor:"pointer"}})),w=function(e){var n=e.infoText,r=void 0===n?null:n,t=e.showDismissIcon,o=void 0===t||t,a=e.onDismiss,c=(0,g.S)().isMobile;return(0,i.BX)(b,{isMobile:c,children:[(0,i.tZ)(u.ZP,{container:!0,alignItems:"center",children:r}),o&&(0,i.tZ)(y,{onClick:a})]})},Z=r(66242),k=r(83321),A=r(75898),T=r(65748),S=r(99944),O=r(51848),D=r(75447),C=r(26125),B=r(36364),I=r(55692);function P(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void r(l)}c.done?n(u):Promise.resolve(u).then(t,o)}function R(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){P(i,t,o,a,c,"next",e)}function c(e){P(i,t,o,a,c,"throw",e)}a(void 0)}))}}function F(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function E(){var e=F(["\n            text-decoration: underline;\n            cursor: pointer;\n          "]);return E=function(){return e},e}function $(){var e=F(["\n          position: absolute;\n          top: 1rem;\n          right: 0.375rem;\n        "]);return $=function(){return e},e}function z(){var e=F(["\n          width: auto;\n          font-size: 0.875rem;\n          flex-wrap: nowrap;\n        "]);return z=function(){return e},e}function j(){var e=F(["\n            width: 1rem;\n            height: 1rem;\n            border-radius: 50%;\n            margin-right: 0.25rem;\n          "]);return j=function(){return e},e}function L(){var e=F(["\n          line-height: 1.07rem;\n          font-size: 0.875rem;\n        "]);return L=function(){return e},e}function H(){var e=F(["\n                  text-decoration: underline;\n                  color: ",";\n                "]);return H=function(){return e},e}var X,N=(0,A.Z)(Z.Z)((function(e){var n=e.theme;return{width:"320px",minHeight:"170px",padding:"10px",marginBottom:"20px",borderRadius:"1rem",border:"1px solid rgba(1, 121, 111, 0.1)",boxShadow:"none",background:(0,h.Fq)(x.S.background[n.palette.mode],1),"@media (max-width: 960px)":{width:"calc(100% - 2rem)",margin:"0 1rem 1rem 1rem"}}})),_=(0,A.Z)(p.hJ)((function(e){var n=e.theme;return{color:(0,h.Fq)(x.S.text[n.palette.mode],.45),fontSize:"1rem","&:hover":{color:x.S.primary}}})),W=(0,A.Z)("span")((function(e){var n=e.theme;return{fontWeight:500,color:(0,h.Fq)(x.S.text[n.palette.mode],.85)}})),q=(0,A.Z)(u.ZP)((function(e){var n=e.theme;return{background:(0,h.Fq)(n.palette.primary.main,"light"==n.palette.mode?.04:.1),padding:"24px 14px",borderRadius:"12px",position:"relative",color:(0,h.Fq)(x.S.text[n.palette.mode],.85)}})),M=function(e){var n=(0,m.Ge)(),r=n.account,t=n.library,u=e.srcToken,d=e.orderShares,f=e.inputAmount,p=e.srcTokenSymbol,v=e.srcDecimals,h=e.allTokenDetails[u],g=(0,c.useState)(""),x=g[0],b=g[1],y=(0,c.useState)(!1),w=y[0],Z=y[1],k=(0,c.useRef)(!1),A=(0,S.N)(),D=R(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C();case 1:case"end":return e.stop()}}),e)}))),C=R(o().mark((function e(){var n,i,c,l,s,m,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A&&!w){e.next=2;break}return e.abrupt("return");case 2:return X&&clearTimeout(X),Z(!0),e.next=6,(0,T.lN)(u,t,r);case 6:return n=e.sent,e.next=9,n.balanceOf(A.address);case 9:return i=e.sent,e.next=12,A.strategy(u);case 12:return c=e.sent,e.next=15,A.callStatic.getTotalTokens(u,i,c);case 15:return l=e.sent,e.next=18,A.totalTokenShares(u);case 18:s=e.sent,m=Number(l)>0?a.O$.from(d).mul(a.O$.from(l)).div(a.O$.from(s)):a.O$.from("0"),p=m.gt(0)?m.sub(f):a.O$.from("0"),k.current?X=setTimeout((function(){Z(!1)}),1e3):(Z(!1),k.current=!0),p&&b(p.toString());case 23:case"end":return e.stop()}}),e)})));return u&&d&&f&&p&&v?(0,i.BX)(q,{children:[(0,i.tZ)(s.Z,{fontSize:"14px",marginBottom:"10px",lineHeight:"1.21",color:"inherit",children:"Yield Earned"}),x?(0,i.BX)(s.Z,{fontSize:"13px",fontWeight:400,lineHeight:"1.21",color:"inherit",children:[(0,T.QB)(x,v,6)," "," ".concat(p," "),h&&h.extensions.strategyName?"(".concat(h.extensions.strategyName,")"):null]}):(0,i.tZ)(s.Z,{fontSize:"13px",marginBottom:"0px",lineHeight:"1.21",color:"inherit",css:(0,l.iv)(E()),onClick:D,children:w?"Checking.....":"Check Yield"}),(0,i.tZ)("img",{src:"icons/partying_face.svg",css:(0,l.iv)($())}),x?(0,i.tZ)(O.Pp,{container:!0,onClick:D,style:{position:"absolute",bottom:"6px",right:"6px"},children:(0,i.tZ)(O.W_,{shouldrotate:k.current&&w})}):null]}):null},Q=function(e){var n=e.symbol,r=e.logoURI,t=e.amount,o=e.decimals,a=e.alignItems,c=void 0===a?"flex-start":a;return(0,i.BX)(u.ZP,{container:!0,flexDirection:"column",alignItems:c,children:[(0,i.BX)(u.ZP,{container:!0,alignItems:"center",css:(0,l.iv)(z()),children:[(0,i.tZ)("img",{css:(0,l.iv)(j()),src:r}),(0,i.tZ)(W,{children:n})]}),(0,i.tZ)(W,{css:(0,l.iv)(L()),children:(0,T.QB)(t,o,6)})]})},U=function(e){var n,r=e.order,t=e.account,o=e.chainId,a=e.searchQuery,d=e.onModify,m=e.onCancel,p=e.theme,v=(0,D.Lw)(),h=(0,f.z)(r,o,v,"openOrder"),b=((0,g.S)().isMobile,(0,c.useCallback)((function(e){if(h){(0,T.QB)(h.stoplossAmount,h.toDecimals,6);var n,r,o,i=(0,T.QB)(h.inputAmount,h.fromDecimals,6),a=(0,T.QB)(h.inputAmount.sub(h.inputAfterFee),h.fromDecimals,6),c=(0,T.QB)(null===h||void 0===h?void 0:h.rateFromTo,(null===h||void 0===h?void 0:h.fromDecimals)>(null===h||void 0===h?void 0:h.toDecimals)?null===h||void 0===h?void 0:h.fromDecimals:null===h||void 0===h?void 0:h.toDecimals,6),u=(0,T.QB)(null===h||void 0===h?void 0:h.stoplossRateFromTo,(null===h||void 0===h?void 0:h.fromDecimals)>(null===h||void 0===h?void 0:h.toDecimals)?null===h||void 0===h?void 0:h.fromDecimals:null===h||void 0===h?void 0:h.toDecimals,6),l={destTokenAddress:h.toAddress||"",srcTokenAddress:h.fromAddress||"",limitPrice:c,srcTokenCount:i,recipientAddress:h.recipient,showRecipientAddress:h.recipient&&t&&h.recipient!=t.toLowerCase(),stopLossPrice:u,orderEncodedData:null===(n=h.orderInfo)||void 0===n?void 0:n.orderEncodedData,orderId:null===(r=h.orderInfo)||void 0===r?void 0:r.orderId,executionFee:null===(o=h.orderInfo)||void 0===o?void 0:o.executionFee,totalFee:a};d(l)}}),[h,t,d]));if(!(0,c.useMemo)((function(){return h&&!!((null===h||void 0===h?void 0:h.fromSymbol)+" "+(null===h||void 0===h?void 0:h.toSymbol)).match(new RegExp((0,T.JX)(a),"i"))}),[h,a]))return null;var y=(0,T.QB)(null===h||void 0===h?void 0:h.rateFromTo,(null===h||void 0===h?void 0:h.fromDecimals)>(null===h||void 0===h?void 0:h.toDecimals)?null===h||void 0===h?void 0:h.fromDecimals:null===h||void 0===h?void 0:h.toDecimals,6),w=(0,T.QB)(null===h||void 0===h?void 0:h.stoplossRateFromTo,(null===h||void 0===h?void 0:h.fromDecimals)>(null===h||void 0===h?void 0:h.toDecimals)?null===h||void 0===h?void 0:h.fromDecimals:null===h||void 0===h?void 0:h.toDecimals,6);return(0,i.BX)(N,{children:[(0,i.BX)(u.ZP,{container:!0,flexDirection:"row",flexWrap:"nowrap",padding:"0.875rem",alignItems:"center",children:[(0,i.tZ)(Q,{symbol:null===h||void 0===h?void 0:h.fromSymbol,logoURI:null===h||void 0===h?void 0:h.fromlogoURI,amount:null===h||void 0===h?void 0:h.inputAmount,decimals:null===h||void 0===h?void 0:h.fromDecimals}),(0,i.tZ)(u.ZP,{item:!0,children:(0,i.tZ)("img",{src:"icons/order_arrow_".concat(p.palette.mode,".svg")})}),(0,i.tZ)(Q,{alignItems:"flex-end",symbol:null===h||void 0===h?void 0:h.toSymbol,logoURI:null===h||void 0===h?void 0:h.tologoURI,amount:null===h||void 0===h?void 0:h.minReturnAmount,decimals:null===h||void 0===h?void 0:h.toDecimals})]}),(0,i.BX)(u.ZP,{container:!0,padding:"0.875rem",flexDirection:"column",minHeight:"132px",children:[(0,i.BX)(u.ZP,{item:!0,flex:1,fontWeight:400,fontSize:"0.75rem",children:[(0,i.tZ)(B.J7,{srcToken:null===h||void 0===h?void 0:h.fromAddress,srcTokenSymbol:null===h||void 0===h?void 0:h.fromSymbol,destTokenSymbol:null===h||void 0===h?void 0:h.toSymbol,destToken:null===h||void 0===h?void 0:h.toAddress,srcDecimals:null===h||void 0===h?void 0:h.fromDecimals,destDecimals:null===h||void 0===h?void 0:h.toDecimals,chainId:o,showMarketInfo:!1,setGlobalMarketPrice:!0,orderType:I.$.SELL,variant:"openOrderCard",control:null,refreshTimeoutDuration:6e4}),(0,i.BX)(s.Z,{fontWeight:"inherit",fontSize:"inherit",lineHeight:1.21,marginBottom:"0.5rem",children:["Limit price: ",(0,i.tZ)(W,{children:Number(y)?(0,i.tZ)(i.HY,{children:"".concat(y," ").concat(null===h||void 0===h?void 0:h.toSymbol,"/").concat(null===h||void 0===h?void 0:h.fromSymbol)}):"--"})]}),(0,i.BX)(s.Z,{fontWeight:"inherit",fontSize:"inherit",lineHeight:1.21,marginBottom:"0.5rem",children:["Stoploss price: ",(0,i.tZ)(W,{children:Number(w)?(0,i.tZ)(i.HY,{children:"".concat(w," ").concat(null===h||void 0===h?void 0:h.toSymbol,"/").concat(null===h||void 0===h?void 0:h.fromSymbol)}):"--"})]}),(null===h||void 0===h?void 0:h.recipient)&&t&&h.recipient!=t.toLowerCase()?(0,i.BX)(s.Z,{fontWeight:"inherit",fontSize:"inherit",lineHeight:1.21,children:["Recipient: ",(0,i.tZ)("a",{href:(0,T.E8)(o,null===h||void 0===h?void 0:h.recipient,"address"),target:"_blank",rel:"noreferrer",css:(0,l.iv)(H(),x.S.success),children:(0,i.tZ)(W,{children:(0,T.Xn)(null===h||void 0===h?void 0:h.recipient,6)})})]}):null]}),(0,i.BX)(u.ZP,{item:!0,marginTop:"0.75rem",children:[(0,i.tZ)(k.Z,{size:"small",onClick:function(){if(h){var e,n,r={orderId:null===(e=h.orderInfo)||void 0===e?void 0:e.orderId,orderEncodedData:null===(n=h.orderInfo)||void 0===n?void 0:n.orderEncodedData,fromAddress:h.fromAddress};m(r)}},children:"Cancel"}),(0,i.tZ)(k.Z,{size:"small",style:{marginLeft:"0.75rem"},onClick:b,children:"Modify"}),(0,i.tZ)(C.W,{title:"View on Explorer",placement:"top",TransitionProps:{timeout:200},enterDelay:100,children:(0,i.tZ)("a",{style:{marginLeft:"6.2rem"},href:null===h||void 0===h?void 0:h.explorerLink,target:"_blank",rel:"noreferrer",children:(0,i.tZ)(_,{})})})]})]}),(0,i.tZ)(M,{srcToken:null===h||void 0===h?void 0:h.fromAddress,orderShares:null===h||void 0===h||null===(n=h.orderInfo)||void 0===n?void 0:n.orderShares,inputAmount:null===h||void 0===h?void 0:h.inputAmount,srcTokenSymbol:null===h||void 0===h?void 0:h.fromSymbol,srcDecimals:null===h||void 0===h?void 0:h.fromDecimals,allTokenDetails:v})]})},G=r(87357),V=r(30198),Y=r(42877);function J(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function K(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){J(e,n,r[n])}))}return e}var ee={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",bgcolor:"background.paper",borderRadius:"16px",overflow:"hidden"},ne=function(e){var n=e.open,r=e.onDismiss,t=e.modalData,o=(0,g.S)().isMobile;return(0,i.tZ)(V.Z,{open:n,onClose:r,children:(0,i.tZ)(G.Z,{style:K({},ee,o?{width:"100%",borderRadius:"0"}:null),children:(0,i.tZ)(Y.c,{variant:"modify",onDismiss:r,defaultValues:t},"exchange-view-modify")})})},re=r(64239),te=r(70746),oe=r(72132),ie=r(49864),ae=r(93946),ce=r(2903);function ue(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function le(){var e=ue(["\n          padding: 1.5rem 1.25rem;\n          height: 300px;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        "]);return le=function(){return e},e}function se(){var e=ue(["\n              margin-top: 0.5rem;\n            "]);return se=function(){return e},e}var de={cancel:{btnText:"Dismiss"}},me=function(e){var n=e.open,r=e.variant,t=e.modalText,o=e.onClose,a=de[r]||de.cancel;return(0,i.tZ)(ce.Z,{open:n,onClose:o,hideDivider:!0,children:(0,i.BX)(u.ZP,{item:!0,flexGrow:2,css:(0,l.iv)(le()),children:[(0,i.tZ)(ae.Z,{"aria-label":"close",size:"small",onClick:o,sx:{position:"absolute",right:12,top:12,fontSize:"0.875rem",color:function(e){return e.palette.grey[500]}},children:(0,i.tZ)(p.Tw,{})}),(0,i.BX)(u.ZP,{container:!0,flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,children:[(0,i.tZ)("img",{src:"icons/trans_submitted.png"}),(0,i.tZ)(s.Z,{marginTop:"2.75rem",fontSize:"0.975rem",textAlign:"center",children:t})]}),a.btnText&&(0,i.tZ)(k.Z,{fullWidth:!0,css:(0,l.iv)(se()),variant:"contained",onClick:o,children:a.btnText})]})})},fe=r(20345),pe=r(4520),ve=r(44431),he=r.n(ve),ge=r(19335);function xe(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void r(l)}c.done?n(u):Promise.resolve(u).then(t,o)}function be(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(t=(a=c.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(u){o=!0,i=u}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ye(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function we(){var e=ye(["\n        display: flex;\n        align-items: center;\n        min-height: 345px;\n      "]);return we=function(){return e},e}function Ze(){var e=ye(["\n          text-align: center;\n          width: 100%;\n        "]);return Ze=function(){return e},e}function ke(){var e=ye(["\n            font-size: 0.75rem;\n            font-weight: 400;\n            margin-top: 0.5rem;\n          "]);return ke=function(){return e},e}function Ae(){var e=ye(["\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        padding-top: 4px;\n        justify-content: space-between;\n      "]);return Ae=function(){return e},e}function Te(){var e=ye(["\n                  width: 1.125rem;\n                  height: 1.125rem;\n                  transform: scale(1.2);\n                  margin-right: 6px;\n                "]);return Te=function(){return e},e}var Se=function(){return(0,i.tZ)(u.ZP,{item:!0,css:(0,l.iv)(we()),className:"open-orders-wrapper",children:(0,i.BX)("div",{css:(0,l.iv)(Ze()),children:[(0,i.tZ)("img",{src:"icons/orders.svg"}),(0,i.tZ)(s.Z,{css:(0,l.iv)(ke()),children:"In Order funds can earn yield! Why not place one?"})]})})},Oe=function(){var e,n=(0,m.Ge)(),r=n.account,t=n.chainId,p=(0,S.N)(),v=(0,f.d)(r,t,5e3,"open",[]),h=v.orders,g=v.refreshOrders,x=(0,D.Lw)(),b=(0,pe.n)(),y=(0,d.Z)(),Z=(0,c.useState)(""),k=Z[0],A=Z[1],C=(0,c.useState)({open:!1,data:null}),B=C[0],I=C[1],P=(0,c.useState)({open:!1,data:null}),R=P[0],F=P[1],E=be((0,fe.V_)("showYieldInfoTag",!0,(function(e){return"true"===e})),2),$=E[0],z=E[1],j=(0,re.h7)(),L=(0,c.useCallback)((function(e){var n=e.target.value;A(n)}),[]),H=(0,c.useCallback)((function(){g()}),[g]),X=(0,c.useCallback)((function(e){I({open:!0,data:e})}),[]),N=(0,c.useCallback)((e=o().mark((function e(n){var r,c,u,l,s,d,m,f,v,h;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.orderId,c=n.orderEncodedData,u=n.fromAddress,!(p&&r&&c&&t)){e.next=30;break}return e.t0=a.O$,e.next=5,p.estimateGas.cancelOrder(r,c);case 5:e.t1=e.sent,l=e.t0.from.call(e.t0,e.t1),s=null,e.t2=regeneratorRuntime.keys(x);case 9:if((e.t3=e.t2()).done){e.next=16;break}if(d=e.t3.value,!x[d].extensions.isNative){e.next=14;break}return s=d,e.abrupt("break",16);case 14:e.next=9;break;case 16:return m=new(he())(b[s].balance.toString()),f=x[s],e.next=20,(0,ge.o3)(t,p.provider);case 20:if(v=e.sent,!new(he())(l.mul(v).toString()).gt(m)){e.next=27;break}return console.log("Cannot execute transaction"),oe.Am.error("Insufficient ".concat(f.symbol," balance!"),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,progress:void 0}),e.abrupt("return");case 27:(h=x[u])&&h.extensions.isWrappedNativeToken&&F({open:!0,data:"You will receive ".concat(h.symbol," (").concat(h.name,") after cancellation!")}),p.cancelOrder(r,c,{gasLimit:(0,T.yC)(l)}).then((function(e){j(e,{action:te.n.ACTION_CANCEL_ORDER,order:n}),e.wait().then((function(e){var n=e.transactionHash,r=(0,T.E8)(t,n,"transaction");e&&e.status?(0,oe.Am)((0,i.tZ)(ie.F,{message:"Order Cancelled!",explorerLink:r}),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,progress:void 0}):oe.Am.error("Order Cancellation Failed!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,progress:void 0})}))})).catch((function(e){var n,r=e.data?null===(n=e.data)||void 0===n?void 0:n.message:e.message||"Order Cancellation Failed!";oe.Am.error(r,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,progress:void 0})}));case 30:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){xe(i,t,o,a,c,"next",e)}function c(e){xe(i,t,o,a,c,"throw",e)}a(void 0)}))}),[p,t,b,x,j]);return h&&0===h.length?(0,i.tZ)(Se,{}):(0,i.BX)(u.ZP,{item:!0,css:(0,l.iv)(Ae()),className:"open-orders-wrapper",children:[$?(0,i.tZ)(w,{infoText:(0,i.BX)(i.HY,{children:[(0,i.tZ)("img",{src:"icons/partying_face.svg",css:(0,l.iv)(Te())}),(0,i.tZ)(s.Z,{color:"inherit",fontSize:"inherit",lineHeight:1,children:"When the order is filled or cancelled, you will get yield."})]}),onDismiss:function(){z(!1)}}):null,(0,i.tZ)(O.ZP,{value:k,onChange:L,onRefresh:H}),B&&B.open&&B.data?(0,i.tZ)(ne,{open:!0,srcToken:"",onDismiss:function(){I({open:!1,data:null})},modalData:B.data}):null,R&&R.open&&R.data?(0,i.tZ)(me,{open:!0,variant:"cancel",modalText:R.data,onClose:function(){F({open:!1,data:null})}}):null,h&&h.map((function(e){return(0,i.tZ)(U,{order:e,account:r,chainId:t,searchQuery:k,onModify:X,onCancel:N,theme:y},e.id)}))]})}},51848:function(e,n,r){r.d(n,{W_:function(){return g},Pp:function(){return x}});var t=r(35944),o=r(90948),i=r(86886),a=r(41796),c=r(70917),u=r(22038),l=r(32103),s=r(68850),d=r(67294),m=r(95271);function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function p(){var e=f(["\n        flex-direction: row;\n        flex-wrap: nowrap;\n        justify-content: space-between;\n        align-items: center;\n        margin-top: 12px;\n        margin-bottom: 16px;\n        padding: ",";\n      "]);return p=function(){return e},e}function v(){var e=f(["\n          width: 205px;\n        "]);return v=function(){return e},e}var h,g=(0,o.ZP)(l.d7)((function(e){var n=e.theme,r=e.shouldrotate;return{fill:n.palette.text.primary,fontSize:"0.875rem",animation:r?"rotating 1s linear infinite":""}})),x=(0,o.ZP)(i.ZP)((function(e){var n=e.theme;return{width:"24px",height:"24px",cursor:"pointer",borderRadius:"8px",alignItems:"center",justifyContent:"center",background:(0,a.Fq)(u.S.text[n.palette.mode],.04)}}));n.ZP=function(e){var n=e.value,r=e.onChange,o=e.onRefresh,a=(0,d.useState)(!1),u=a[0],l=a[1],f=(0,d.useCallback)((function(){h&&clearTimeout(h),l(!0),o(),h=setTimeout((function(){l(!1)}),2e3)}),[o,l]),b=(0,m.S)().isMobile;return(0,t.BX)(i.ZP,{container:!0,css:(0,c.iv)(p(),b?"0 1rem":"0"),children:[(0,t.tZ)(i.ZP,{item:!0,css:(0,c.iv)(v()),children:(0,t.tZ)(s.b,{value:n,onChange:r,variant:"small",placeholder:"Search tokens name"})}),(0,t.tZ)(x,{container:!0,onClick:f,children:(0,t.tZ)(g,{shouldrotate:u})})]})}},94859:function(e,n,r){r.d(n,{z:function(){return T},d:function(){return A}});var t=r(28520),o=r.n(t),i=r(2593),a=r(19485),c=r(67294),u=r(9669),l=r.n(u),s=r(61407);function d(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void r(l)}c.done?n(u):Promise.resolve(u).then(t,o)}function m(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){d(i,t,o,a,c,"next",e)}function c(e){d(i,t,o,a,c,"throw",e)}a(void 0)}))}}var f=m(o().mark((function e(n,r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{creator:$owner,status:ACTIVE},\n        orderBy: createdAtBlock, \n        orderDirection: desc\n      ) {\n        id\n        orderId\n        recipient {\n          id\n        }\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        orderEncodedData\n        shares\n        executionFee\n        inputAfterFee\n        createdTxHash\n        status\n      }\n    }\n  ",e.prev=1,e.next=4,l().post(s.TL[r],{query:"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{creator:$owner,status:ACTIVE},\n        orderBy: createdAtBlock, \n        orderDirection: desc\n      ) {\n        id\n        orderId\n        recipient {\n          id\n        }\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        orderEncodedData\n        shares\n        executionFee\n        inputAfterFee\n        createdTxHash\n        status\n      }\n    }\n  ",variables:{owner:n.toLowerCase()}});case 4:return t=e.sent.data,e.abrupt("return",t.data.orders||[]);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),p=m(o().mark((function e(n,r){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{creator:$owner,status_not:ACTIVE},\n        orderBy: updatedAt, \n        orderDirection: desc\n      ) {\n        id\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        status\n        updatedAt\n        executedTxHash\n        cancelledTxHash\n        returnAmount\n        inputAfterFee\n      }\n    }\n  ",e.prev=1,e.next=4,l().post(s.TL[r],{query:"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{creator:$owner,status_not:ACTIVE},\n        orderBy: updatedAt, \n        orderDirection: desc\n      ) {\n        id\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        status\n        updatedAt\n        executedTxHash\n        cancelledTxHash\n        returnAmount\n        inputAfterFee\n      }\n    }\n  ",variables:{owner:n.toLowerCase()}});case 4:return t=e.sent.data,e.abrupt("return",t.data.orders);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),v=r(65748);function h(e,n,r,t,o){var a=void 0!==o&&o;try{if(e&&(n||0===n)&&r&&(t||0===t)){var c=n>t?n:t,u=i.O$.from(10).pow(i.O$.from(c));return a?e.mul(u).div(r).mul(i.O$.from(10).pow(i.O$.from(t))).div(i.O$.from(10).pow(i.O$.from(n))):r.mul(u).div(e).mul(i.O$.from(10).pow(i.O$.from(n))).div(i.O$.from(10).pow(i.O$.from(t)))}}catch(l){}}var g=r(34497),x=r(44431),b=r.n(x);function y(e,n,r,t,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void r(l)}c.done?n(u):Promise.resolve(u).then(t,o)}function w(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function a(e){y(i,t,o,a,c,"next",e)}function c(e){y(i,t,o,a,c,"throw",e)}a(void 0)}))}}function Z(e){return function(e){if(Array.isArray(e)){for(var n=0,r=new Array(e.length);n<e.length;n++)r[n]=e[n];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k={open:f,past:p};function A(e,n,r,t,i){var a=void 0===r?3e3:r,u=void 0===i?[]:i,l=(0,c.useState)([]),s=l[0],d=l[1],m=(0,c.useRef)(),f=(0,c.useCallback)(w(o().mark((function r(){var i;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(e&&(0,v.UJ)(e)&&n)){r.next=5;break}return r.next=3,k[t](e,n);case 3:i=r.sent,d(i);case 5:case"end":return r.stop()}}),r)}))),[e,n,t]);return(0,c.useEffect)((function(){d([]);var e=function(n){m.current&&clearTimeout(m.current),m.current=setTimeout(w(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f();case 2:e();case 3:case"end":return n.stop()}}),n)}))),n?0:a||5e3)};return e(!0),function(){m.current&&clearTimeout(m.current)}}),[e,n].concat(Z(u))),{orders:s,refreshOrders:f}}function T(e,n,r,t){if(!e.id)return null;var o=a.getAddress(e.inputToken),c=a.getAddress(e.outputToken),u=r[o],l=r[c];if(!u||!l)return null;if(!r[o]||!r[c])return null;var s=u.symbol,d=u.decimals,m=u.logoURI,f=l.symbol,p=l.decimals,x=l.logoURI,y=i.O$.from("0"===e.inputAmount&&e.creationAmount?e.creationAmount:e.inputAmount),w=i.O$.from(e.minReturnAmount),Z=i.O$.from(e.stoplossAmount),k=i.O$.from(e.inputAfterFee),A="ACTIVE"===e.status,T="CANCELLED"===e.status,S=(0,v.E8)(n,A?e.createdTxHash:T?e.cancelledTxHash:e.executedTxHash,"transaction");if("history"===t){var O="".concat(s," -> ").concat(f),D=i.O$.from(0);return Number(e.returnAmount)&&(D=i.O$.from(e.returnAmount)),{pairs:O,sell:"".concat((0,v.QB)(y,d,6)," ").concat(s),expected:"".concat((0,v.QB)(w,p,6)," ").concat(f),received:D.gt(0)?"".concat((0,v.QB)(D,p,6)," ").concat(f):"CANCELLED",id:e.id,explorerLink:S,dateOfExecution:(0,g.Z)(new Date(1e3*e.updatedAt),"yyyy/MM/dd kk:mm")}}var C=h(k,d,w,p,!1),B=h(k,d,w,p,!0),I=h(k,d,Z,p,!1),P=h(k,d,Z,p,!0);if("openOrder"===t){var R=new(b())(e.executionFee).toString();return{fromSymbol:s,fromlogoURI:m,fromAddress:o,recipient:e.recipient,fromDecimals:d,toSymbol:f,tologoURI:x,toDecimals:p,toAddress:c,inputAmount:y,minReturnAmount:w,stoplossAmount:Z,explorerLink:S,rateFromTo:C,rateToFrom:B,stoplossRateToFrom:P,stoplossRateFromTo:I,inputAfterFee:k,orderInfo:{orderId:e.orderId,orderEncodedData:e.orderEncodedData,orderShares:e.shares,executionFee:R}}}return{fromSymbol:s,fromDecimals:d,toSymbol:f,toDecimals:p,inputAmount:y,minReturnAmount:w,stoplossAmount:Z,explorerLink:S,rateFromTo:C,rateToFrom:B}}}}]);