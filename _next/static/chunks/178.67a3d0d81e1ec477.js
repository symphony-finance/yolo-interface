"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{65178:function(n,e,r){r.r(e),r.d(e,{default:function(){return vn}});var t=r(28520),o=r.n(t),i=r(35944),a=r(2593),c=r(67294),u=r(86886),s=r(70917),l=r(15861),d=r(2734),m=r(77044),f=r(94859),p=r(32103),v=r(90948),h=r(41796),g=r(22038),x=(0,v.ZP)(u.ZP)((function(n){var e=n.theme;return{background:(0,h.Fq)(e.palette.primary.main,(e.palette.mode,.1)),width:"100%",padding:"7px 14px",borderRadius:"8px",position:"relative",fontSize:"14px",lineHeight:1.21,fontWeight:400,color:(0,h.Fq)(g.S.primary,1)}})),w=(0,v.ZP)(p.Tw)((function(n){n.theme;return{position:"absolute",right:"1.5rem",top:"0.4375rem",width:"1.125rem",height:"1.125rem",transform:"scale(1.2)",cursor:"pointer"}})),b=function(n){var e=n.infoText,r=void 0===e?null:e,t=n.showDismissIcon,o=void 0===t||t,a=n.onDismiss;return(0,i.BX)(x,{children:[(0,i.tZ)(u.ZP,{container:!0,children:r}),o&&(0,i.tZ)(w,{onClick:a})]})},Z=r(66242),y=r(83321),k=r(75898),A=r(65748),T=r(99944),S=r(51848),O=r(75447);function B(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(t,o)}function C(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){B(i,t,o,a,c,"next",n)}function c(n){B(i,t,o,a,c,"throw",n)}a(void 0)}))}}function D(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function P(){var n=D(["\n            text-decoration: underline;\n            cursor: pointer;\n          "]);return P=function(){return n},n}function I(){var n=D(["\n          position: absolute;\n          top: 1rem;\n          right: 0.375rem;\n        "]);return I=function(){return n},n}function R(){var n=D(["\n          width: auto;\n          font-size: 0.875rem;\n          flex-wrap: nowrap;\n        "]);return R=function(){return n},n}function z(){var n=D(["\n            width: 1rem;\n            height: 1rem;\n            border-radius: 50%;\n            margin-right: 0.25rem;\n          "]);return z=function(){return n},n}function $(){var n=D(["\n          line-height: 1.07rem;\n          font-size: 0.875rem;\n        "]);return $=function(){return n},n}var E,X=(0,k.Z)(Z.Z)((function(n){var e=n.theme;return{width:"320px",minHeight:"170px",padding:"10px",marginBottom:"20px",borderRadius:"1rem",border:"1px solid rgba(1, 121, 111, 0.1)",boxShadow:"none",background:(0,h.Fq)(g.S.background[e.palette.mode],1)}})),H=(0,k.Z)("span")((function(n){var e=n.theme;return{fontWeight:500,color:(0,h.Fq)(g.S.text[e.palette.mode],.85)}})),j=(0,k.Z)(u.ZP)((function(n){var e=n.theme;return{background:(0,h.Fq)(e.palette.primary.main,"light"==e.palette.mode?.04:.1),padding:"24px 14px",borderRadius:"12px",position:"relative",color:(0,h.Fq)(g.S.text[e.palette.mode],.85)}})),L=function(n){var e=(0,m.Ge)(),r=e.account,t=e.library,u=n.srcToken,d=n.orderShares,f=n.inputAmount,p=n.srcTokenSymbol,v=n.srcDecimals,h=(0,c.useState)(""),g=h[0],x=h[1],w=(0,c.useState)(!1),b=w[0],Z=w[1],y=(0,c.useRef)(!1),k=(0,T.N)(),O=C(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:B();case 1:case"end":return n.stop()}}),n)}))),B=C(o().mark((function n(){var e,i,c,s,l,m,p;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(k&&!b){n.next=2;break}return n.abrupt("return");case 2:return E&&clearTimeout(E),Z(!0),n.next=6,(0,A.lN)(u,t,r);case 6:return e=n.sent,n.next=9,e.balanceOf(k.address);case 9:return i=n.sent,n.next=12,k.strategy(u);case 12:return c=n.sent,n.next=15,k.callStatic.getTotalTokens(u,i,c);case 15:return s=n.sent,n.next=18,k.totalTokenShares(u);case 18:l=n.sent,m=Number(s)>0?a.O$.from(d).mul(a.O$.from(s)).div(a.O$.from(l)):a.O$.from("0"),p=m.gt(0)?m.sub(f):a.O$.from("0"),y.current?E=setTimeout((function(){Z(!1)}),1e3):(Z(!1),y.current=!0),p&&x(p.toString());case 23:case"end":return n.stop()}}),n)})));return u&&d&&f&&p&&v?(0,i.BX)(j,{children:[(0,i.tZ)(l.Z,{fontSize:"14px",marginBottom:"10px",lineHeight:"1.21",color:"inherit",children:"Yield Earned"}),g?(0,i.BX)(l.Z,{fontSize:"13px",fontWeight:400,lineHeight:"1.21",color:"inherit",children:[(0,A.QB)(g,v,6)," "," ".concat(p," (Aave)")]}):(0,i.tZ)(l.Z,{fontSize:"13px",marginBottom:"0px",lineHeight:"1.21",color:"inherit",css:(0,s.iv)(P()),onClick:O,children:b?"Checking.....":"Check Yield"}),(0,i.tZ)("img",{src:"icons/partying_face.svg",css:(0,s.iv)(I())}),g?(0,i.tZ)(S.Pp,{container:!0,onClick:O,style:{position:"absolute",bottom:"6px",right:"6px"},children:(0,i.tZ)(S.W_,{shouldrotate:y.current&&b})}):null]}):null},N=function(n){var e=n.symbol,r=n.logoURI,t=n.amount,o=n.decimals,a=n.alignItems,c=void 0===a?"flex-start":a;return(0,i.BX)(u.ZP,{container:!0,flexDirection:"column",alignItems:c,children:[(0,i.BX)(u.ZP,{container:!0,alignItems:"center",css:(0,s.iv)(R()),children:[(0,i.tZ)("img",{css:(0,s.iv)(z()),src:r}),(0,i.tZ)(H,{children:e})]}),(0,i.tZ)(H,{css:(0,s.iv)($()),children:(0,A.QB)(t,o,6)})]})},_=function(n){var e,r=n.order,t=n.account,o=n.chainId,a=n.searchQuery,s=n.onModify,d=n.onCancel,m=n.theme,p=(0,O.Lw)(),v=(0,f.z)(r,o,p,"openOrder");console.log(v);var h=(0,c.useCallback)((function(n){if(v){var e,r,o=(0,A.QB)(v.stoplossAmount,v.toDecimals,6),i=(0,A.QB)(v.inputAmount,v.fromDecimals,6),a=o?o/i:0,c=(0,A.QB)(v.minReturnAmount,v.toDecimals,6)/i,u={destTokenAddress:v.toAddress||"",srcTokenAddress:v.fromAddress||"",limitPrice:c,srcTokenCount:i,recipientAddress:v.recipient,showRecipientAddress:v.recipient&&t&&v.recipient!=t.toLowerCase(),stopLossPrice:a,orderEncodedData:null===(e=v.orderInfo)||void 0===e?void 0:e.orderEncodedData,orderId:null===(r=v.orderInfo)||void 0===r?void 0:r.orderId};s(u)}}),[v,t,s]);if(!(0,c.useMemo)((function(){return v&&!!((null===v||void 0===v?void 0:v.fromSymbol)+" "+(null===v||void 0===v?void 0:v.toSymbol)).match(new RegExp((0,A.JX)(a),"i"))}),[v,a]))return null;var g=(0,A.QB)(null===v||void 0===v?void 0:v.stoplossAmount,null===v||void 0===v?void 0:v.toDecimals,6),x=(0,A.QB)(null===v||void 0===v?void 0:v.rateFromTo,null===v||void 0===v?void 0:v.toDecimals,6);return(0,i.BX)(X,{children:[(0,i.BX)(u.ZP,{container:!0,flexDirection:"row",flexWrap:"nowrap",padding:"0.875rem",alignItems:"center",children:[(0,i.tZ)(N,{symbol:null===v||void 0===v?void 0:v.fromSymbol,logoURI:null===v||void 0===v?void 0:v.fromlogoURI,amount:null===v||void 0===v?void 0:v.inputAmount,decimals:null===v||void 0===v?void 0:v.fromDecimals}),(0,i.tZ)(u.ZP,{item:!0,children:(0,i.tZ)("img",{src:"icons/order_arrow_".concat(m.palette.mode,".svg")})}),(0,i.tZ)(N,{alignItems:"flex-end",symbol:null===v||void 0===v?void 0:v.toSymbol,logoURI:null===v||void 0===v?void 0:v.tologoURI,amount:null===v||void 0===v?void 0:v.minReturnAmount,decimals:null===v||void 0===v?void 0:v.toDecimals})]}),(0,i.BX)(u.ZP,{container:!0,padding:"0.875rem",flexDirection:"column",minHeight:"132px",children:[(0,i.BX)(u.ZP,{item:!0,flex:1,fontWeight:400,fontSize:"0.75rem",children:[(0,i.BX)(l.Z,{fontWeight:"inherit",fontSize:"inherit",lineHeight:1.21,marginBottom:"0.5rem",children:["Limit price: ",(0,i.tZ)(H,{children:Number(x)?(0,i.tZ)(i.HY,{children:"".concat(x," ").concat(null===v||void 0===v?void 0:v.toSymbol,"/").concat(null===v||void 0===v?void 0:v.fromSymbol)}):"--"})]}),(0,i.BX)(l.Z,{fontWeight:"inherit",fontSize:"inherit",lineHeight:1.21,marginBottom:"0.5rem",children:["Stop loss: ",(0,i.tZ)(H,{children:Number(g)?(0,i.tZ)(i.HY,{children:"".concat(g," ").concat(null===v||void 0===v?void 0:v.toSymbol,"/").concat(null===v||void 0===v?void 0:v.fromSymbol)}):"--"})]}),(0,i.BX)(l.Z,{fontWeight:"inherit",fontSize:"inherit",lineHeight:1.21,marginBottom:"0.5rem",children:["Least receive: ",(0,i.BX)(H,{children:[(0,A.QB)(null===v||void 0===v?void 0:v.minReturnAmount,null===v||void 0===v?void 0:v.toDecimals,6)," ",null===v||void 0===v?void 0:v.toSymbol]})]}),(null===v||void 0===v?void 0:v.recipient)&&t&&v.recipient!=t.toLowerCase()?(0,i.BX)(l.Z,{fontWeight:"inherit",fontSize:"inherit",lineHeight:1.21,children:["Recipient: ",(0,i.tZ)(H,{children:null===v||void 0===v?void 0:v.recipient})]}):null]}),(0,i.BX)(u.ZP,{item:!0,marginTop:"0.75rem",children:[(0,i.tZ)(y.Z,{size:"small",onClick:function(){if(v){var n,e,r={orderId:null===(n=v.orderInfo)||void 0===n?void 0:n.orderId,orderEncodedData:null===(e=v.orderInfo)||void 0===e?void 0:e.orderEncodedData,fromAddress:v.fromAddress};d(r)}},children:"Cancel"}),(0,i.tZ)(y.Z,{size:"small",style:{marginLeft:"0.75rem"},onClick:h,children:"Modify"})]})]}),(0,i.tZ)(L,{srcToken:null===v||void 0===v?void 0:v.fromAddress,orderShares:null===v||void 0===v||null===(e=v.orderInfo)||void 0===e?void 0:e.orderShares,inputAmount:null===v||void 0===v?void 0:v.inputAmount,srcTokenSymbol:null===v||void 0===v?void 0:v.fromSymbol,srcDecimals:null===v||void 0===v?void 0:v.fromDecimals})]})},F=r(87357),W=r(30198),q=r(86973),Q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"400px",bgcolor:"background.paper",borderRadius:"16px",overflow:"hidden"},U=function(n){var e=n.open,r=n.onDismiss,t=(n.srcToken,n.modalData);return(0,i.tZ)(W.Z,{open:e,onClose:r,children:(0,i.tZ)(F.Z,{style:Q,children:(0,i.tZ)(q.c,{variant:"modify",onDismiss:r,defaultValues:t},"exchange-view-modify")})})},G=r(64239),M=r(70746),Y=r(72132),V=r(49864),J=r(19335),K=r(93946),nn=r(2903);function en(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function rn(){var n=en(["\n          padding: 1.5rem 1.25rem;\n          height: 300px;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        "]);return rn=function(){return n},n}function tn(){var n=en(["\n              margin-top: 0.5rem;\n            "]);return tn=function(){return n},n}var on={cancel:{btnText:"Dismiss"}},an=function(n){var e=n.open,r=n.variant,t=n.modalText,o=n.onClose,a=on[r]||on.cancel;return(0,i.tZ)(nn.Z,{open:e,onClose:o,hideDivider:!0,children:(0,i.BX)(u.ZP,{item:!0,flexGrow:2,css:(0,s.iv)(rn()),children:[(0,i.tZ)(K.Z,{"aria-label":"close",size:"small",onClick:o,sx:{position:"absolute",right:12,top:12,fontSize:"0.875rem",color:function(n){return n.palette.grey[500]}},children:(0,i.tZ)(p.Tw,{})}),(0,i.BX)(u.ZP,{container:!0,flexDirection:"column",alignItems:"center",justifyContent:"center",flex:1,children:[(0,i.tZ)("img",{src:"icons/trans_submitted.png"}),(0,i.tZ)(l.Z,{marginTop:"2.75rem",fontSize:"0.875rem",children:t})]}),a.btnText&&(0,i.tZ)(y.Z,{fullWidth:!0,css:(0,s.iv)(tn()),variant:"contained",onClick:o,children:a.btnText})]})})};function cn(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(t,o)}function un(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function sn(){var n=un(["\n        display: flex;\n        align-items: center;\n        min-height: 345px;\n      "]);return sn=function(){return n},n}function ln(){var n=un(["\n          text-align: center;\n          width: 100%;\n        "]);return ln=function(){return n},n}function dn(){var n=un(["\n            font-size: 0.75rem;\n            font-weight: 400;\n            margin-top: 0.5rem;\n          "]);return dn=function(){return n},n}function mn(){var n=un(["\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        padding-top: 4px;\n        justify-content: space-between;\n      "]);return mn=function(){return n},n}function fn(){var n=un(["\n                  width: 1.125rem;\n                  height: 1.125rem;\n                  transform: scale(1.2);\n                  margin-right: 6px;\n                "]);return fn=function(){return n},n}var pn=function(){return(0,i.tZ)(u.ZP,{item:!0,css:(0,s.iv)(sn()),className:"open-orders-wrapper",children:(0,i.BX)("div",{css:(0,s.iv)(ln()),children:[(0,i.tZ)("img",{src:"icons/orders.svg"}),(0,i.tZ)(l.Z,{css:(0,s.iv)(dn()),children:"In Order funds can earn yield! Why not place one?"})]})})},vn=function(){var n,e=(0,m.Ge)(),r=e.account,t=e.chainId,p=(0,T.N)(),v=(0,f.d)(r,t,5e3,"open",[]),h=v.orders,g=v.refreshOrders,x=(0,O.Lw)(),w=(0,d.Z)(),Z=(0,c.useState)(""),y=Z[0],k=Z[1],B=(0,c.useState)({open:!1,data:null}),C=B[0],D=B[1],P=(0,c.useState)({open:!1,data:null}),I=P[0],R=P[1],z=(0,c.useState)(!0),$=z[0],E=z[1],X=(0,G.h7)(),H=(0,c.useCallback)((function(n){var e=n.target.value;k(e)}),[]),j=(0,c.useCallback)((function(){g()}),[g]),L=(0,c.useCallback)((function(n){D({open:!0,data:n})}),[]),N=(0,c.useCallback)((n=o().mark((function n(e){var r,c,u,s,l,d,m;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.orderId,c=e.orderEncodedData,u=e.fromAddress,!(p&&r&&c&&t)){n.next=17;break}return n.next=4,(0,J.o)(t);case 4:if(s=n.sent,0!==Number(s)){n.next=9;break}return n.next=8,p.provider.getGasPrice();case 8:s=n.sent;case 9:return n.t0=a.O$,n.next=12,p.estimateGas.cancelOrder(r,c,{gasPrice:s});case 12:n.t1=n.sent,l=n.t0.from.call(n.t0,n.t1).add(5e4),(d=x[u])&&d.isNative&&(m=x[d.wrappedToken],R({open:!0,data:"You will receive ".concat(m.symbol," after cancellation!")})),p.cancelOrder(r,c,{gasLimit:l,gasPrice:s}).then((function(n){X(n,{action:M.n.ACTION_CANCEL_ORDER,order:e}),n.wait().then((function(n){var e=n.transactionHash,r=(0,A.E8)(t,e,"transaction");n&&n.status?(0,Y.Am)((0,i.tZ)(V.F,{message:"Order Cancelled!",explorerLink:r}),{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,progress:void 0}):(0,Y.Am)("Order Cancellation Failed!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,progress:void 0})}))}));case 17:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){cn(i,t,o,a,c,"next",n)}function c(n){cn(i,t,o,a,c,"throw",n)}a(void 0)}))}),[p,t,x,X]);return h&&0===h.length?(0,i.tZ)(pn,{}):(0,i.BX)(u.ZP,{item:!0,css:(0,s.iv)(mn()),className:"open-orders-wrapper",children:[$?(0,i.tZ)(b,{infoText:(0,i.BX)(i.HY,{children:[(0,i.tZ)("img",{src:"icons/partying_face.svg",css:(0,s.iv)(fn())}),(0,i.tZ)(l.Z,{color:"inherit",fontSize:"inherit",lineHeight:1.2,children:"When the order is filled or cancelled, you will get yield."})]}),onDismiss:function(){E(!1)}}):null,(0,i.tZ)(S.ZP,{value:y,onChange:H,onRefresh:j}),C&&C.open&&C.data?(0,i.tZ)(U,{open:!0,srcToken:"",onDismiss:function(){D({open:!1,data:null})},modalData:C.data}):null,I&&I.open&&I.data?(0,i.tZ)(an,{open:!0,variant:"cancel",modalText:I.data,onClose:function(){R({open:!1,data:null})}}):null,h&&h.map((function(n){return(0,i.tZ)(_,{order:n,account:r,chainId:t,searchQuery:y,onModify:L,onCancel:N,theme:w},n.id)}))]})}},51848:function(n,e,r){r.d(e,{W_:function(){return h},Pp:function(){return g}});var t=r(35944),o=r(90948),i=r(86886),a=r(41796),c=r(70917),u=r(22038),s=r(32103),l=r(68850),d=r(67294);function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function f(){var n=m(["\n        flex-direction: row;\n        flex-wrap: nowrap;\n        justify-content: space-between;\n        align-items: center;\n        margin-top: 12px;\n        margin-bottom: 16px;\n      "]);return f=function(){return n},n}function p(){var n=m(["\n          width: 205px;\n        "]);return p=function(){return n},n}var v,h=(0,o.ZP)(s.d7)((function(n){var e=n.theme,r=n.shouldrotate;return{fill:e.palette.text.primary,fontSize:"0.875rem",animation:r?"rotating 1s linear infinite":""}})),g=(0,o.ZP)(i.ZP)((function(n){var e=n.theme;return{width:"24px",height:"24px",cursor:"pointer",borderRadius:"8px",alignItems:"center",justifyContent:"center",background:(0,a.Fq)(u.S.text[e.palette.mode],.04)}}));e.ZP=function(n){var e=n.value,r=n.onChange,o=n.onRefresh,a=(0,d.useState)(!1),u=a[0],s=a[1],m=(0,d.useCallback)((function(){v&&clearTimeout(v),s(!0),o(),v=setTimeout((function(){s(!1)}),2e3)}),[o,s]);return(0,t.BX)(i.ZP,{container:!0,css:(0,c.iv)(f()),children:[(0,t.tZ)(i.ZP,{item:!0,css:(0,c.iv)(p()),children:(0,t.tZ)(l.b,{value:e,onChange:r,variant:"small",placeholder:"Search tokens name"})}),(0,t.tZ)(g,{container:!0,onClick:m,children:(0,t.tZ)(h,{shouldrotate:u})})]})}},94859:function(n,e,r){r.d(e,{z:function(){return k},d:function(){return y}});var t=r(28520),o=r.n(t),i=r(2593),a=r(19485),c=r(67294),u=r(9669),s=r.n(u),l=r(61407);function d(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(t,o)}function m(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){d(i,t,o,a,c,"next",n)}function c(n){d(i,t,o,a,c,"throw",n)}a(void 0)}))}}var f=m(o().mark((function n(e,r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{recipient:$owner,status:ACTIVE},\n        orderBy: createdAtBlock, \n        orderDirection: desc\n      ) {\n        id\n        orderId\n        recipient {\n          id\n        }\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        orderEncodedData\n        shares\n        createdAtBlock\n      }\n    }\n  ",n.prev=1,n.next=4,s().post(l.TL[r],{query:"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{recipient:$owner,status:ACTIVE},\n        orderBy: createdAtBlock, \n        orderDirection: desc\n      ) {\n        id\n        orderId\n        recipient {\n          id\n        }\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        orderEncodedData\n        shares\n        createdAtBlock\n      }\n    }\n  ",variables:{owner:e.toLowerCase()}});case 4:return t=n.sent.data,n.abrupt("return",t.data.orders||[]);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",[]);case 11:case"end":return n.stop()}}),n,null,[[1,8]])}))),p=m(o().mark((function n(e,r){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{recipient:$owner,status_not:ACTIVE},\n        orderBy: updatedAt, \n        orderDirection: desc\n      ) {\n        id\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        status\n        updatedAt\n        executedTxHash\n        cancelledTxHash\n      }\n    }\n  ",n.prev=1,n.next=4,s().post(l.TL[r],{query:"\n    query GetOrdersByOwner($owner: String) {\n      orders(\n        where:{recipient:$owner,status_not:ACTIVE},\n        orderBy: updatedAt, \n        orderDirection: desc\n      ) {\n        id\n        inputToken\n        outputToken\n        inputAmount\n        minReturnAmount\n        stoplossAmount\n        status\n        updatedAt\n        executedTxHash\n        cancelledTxHash\n      }\n    }\n  ",variables:{owner:e.toLowerCase()}});case 4:return t=n.sent.data,n.abrupt("return",t.data.orders);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",[]);case 11:case"end":return n.stop()}}),n,null,[[1,8]])}))),v=r(65748);function h(n,e,r,t,o){var a=void 0!==o&&o;try{if(n&&(e||0===e)&&r&&(t||0===t)){var c=i.O$.from(10).pow(i.O$.from(18));return a?n.mul(c).div(r).mul(i.O$.from(10).pow(i.O$.from(t))).div(i.O$.from(10).pow(i.O$.from(e))):r.mul(c).div(n).mul(i.O$.from(10).pow(i.O$.from(e))).div(i.O$.from(10).pow(i.O$.from(t)))}}catch(u){}}var g=r(34497);function x(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(t,o)}function w(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){x(i,t,o,a,c,"next",n)}function c(n){x(i,t,o,a,c,"throw",n)}a(void 0)}))}}function b(n){return function(n){if(Array.isArray(n)){for(var e=0,r=new Array(n.length);e<n.length;e++)r[e]=n[e];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Z={open:f,past:p};function y(n,e,r,t,i){var a=void 0===r?3e3:r,u=void 0===i?[]:i,s=(0,c.useState)([]),l=s[0],d=s[1],m=(0,c.useRef)(),f=(0,c.useCallback)(w(o().mark((function r(){var i;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!(n&&(0,v.UJ)(n)&&e)){r.next=5;break}return r.next=3,Z[t](n,e);case 3:i=r.sent,d(i);case 5:case"end":return r.stop()}}),r)}))),[n,e,t]);return(0,c.useEffect)((function(){d([]);var n=function(e){m.current&&clearTimeout(m.current),m.current=setTimeout(w(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:n();case 3:case"end":return e.stop()}}),e)}))),e?0:a||5e3)};return n(!0),function(){m.current&&clearTimeout(m.current)}}),[n,e].concat(b(u))),{orders:l,refreshOrders:f}}function k(n,e,r,t){if(!n.id)return null;var o=a.getAddress(n.inputToken),c=a.getAddress(n.outputToken),u=r[o],s=r[c];if(!u||!s)return null;if(!r[o]||!r[c])return null;var l=u.symbol,d=u.decimals,m=u.logoURI,f=s.symbol,p=s.decimals,x=s.logoURI,w=i.O$.from("0"===n.inputAmount&&n.creationAmount?n.creationAmount:n.inputAmount),b=i.O$.from(n.minReturnAmount),Z=i.O$.from(n.stoplossAmount),y="CANCELLED"===n.status,k=(0,v.E8)(e,y?n.cancelledTxHash:n.executedTxHash,"transaction");if("history"===t)return{pairs:"".concat(l," -> ").concat(f),sell:"".concat((0,v.QB)(w,d,6)," ").concat(l),expected:"".concat((0,v.QB)(b,p,6)," ").concat(f),id:n.id,explorerLink:k,dateOfExecution:(0,g.Z)(new Date(1e3*n.updatedAt),"yyyy/MM/dd kk:mm")};var A,T=h(w,d,b,p,!1),S=h(w,d,b,p,!0);return"openOrder"===t?{fromSymbol:l,fromlogoURI:m,fromAddress:o,recipient:null===(A=n.recipient)||void 0===A?void 0:A.id,fromDecimals:d,toSymbol:f,tologoURI:x,toDecimals:p,toAddress:c,inputAmount:w,minReturnAmount:b,stoplossAmount:Z,explorerLink:k,rateFromTo:T,rateToFrom:S,orderInfo:{orderId:n.orderId,orderEncodedData:n.orderEncodedData,orderShares:n.shares}}:{fromSymbol:l,fromDecimals:d,toSymbol:f,toDecimals:p,inputAmount:w,minReturnAmount:b,stoplossAmount:Z,explorerLink:k,rateFromTo:T,rateToFrom:S}}}}]);