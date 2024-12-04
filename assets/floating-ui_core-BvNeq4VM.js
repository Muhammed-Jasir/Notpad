import{g as V,a as z,b as j,e as E,c as J,r as _,d as K,f as X,h as Z,i as ee,j as te,k as ne,m as $,l as W,n as N,o as Q,s as ie}from"./floating-ui_utils-DbgHXlWd.js";function I(t,e,d){let{reference:a,floating:r}=t;const n=j(e),o=N(e),m=Q(o),u=V(e),h=n==="y",c=a.x+a.width/2-r.width/2,s=a.y+a.height/2-r.height/2,f=a[m]/2-r[m]/2;let i;switch(u){case"top":i={x:c,y:a.y-r.height};break;case"bottom":i={x:c,y:a.y+a.height};break;case"right":i={x:a.x+a.width,y:s};break;case"left":i={x:a.x-r.width,y:s};break;default:i={x:a.x,y:a.y}}switch(z(e)){case"start":i[o]-=f*(d&&h?-1:1);break;case"end":i[o]+=f*(d&&h?-1:1);break}return i}const ae=async(t,e,d)=>{const{placement:a="bottom",strategy:r="absolute",middleware:n=[],platform:o}=d,m=n.filter(Boolean),u=await(o.isRTL==null?void 0:o.isRTL(e));let h=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:c,y:s}=I(h,a,u),f=a,i={},l=0;for(let g=0;g<m.length;g++){const{name:x,fn:y}=m[g],{x:A,y:p,data:v,reset:w}=await y({x:c,y:s,initialPlacement:a,placement:f,strategy:r,middlewareData:i,rects:h,platform:o,elements:{reference:t,floating:e}});c=A??c,s=p??s,i={...i,[x]:{...i[x],...v}},w&&l<=50&&(l++,typeof w=="object"&&(w.placement&&(f=w.placement),w.rects&&(h=w.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):w.rects),{x:c,y:s}=I(h,f,u)),g=-1)}return{x:c,y:s,placement:f,strategy:r,middlewareData:i}};async function Y(t,e){var d;e===void 0&&(e={});const{x:a,y:r,platform:n,rects:o,elements:m,strategy:u}=t,{boundary:h="clippingAncestors",rootBoundary:c="viewport",elementContext:s="floating",altBoundary:f=!1,padding:i=0}=E(e,t),l=J(i),x=m[f?s==="floating"?"reference":"floating":s],y=_(await n.getClippingRect({element:(d=await(n.isElement==null?void 0:n.isElement(x)))==null||d?x:x.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(m.floating)),boundary:h,rootBoundary:c,strategy:u})),A=s==="floating"?{x:a,y:r,width:o.floating.width,height:o.floating.height}:o.reference,p=await(n.getOffsetParent==null?void 0:n.getOffsetParent(m.floating)),v=await(n.isElement==null?void 0:n.isElement(p))?await(n.getScale==null?void 0:n.getScale(p))||{x:1,y:1}:{x:1,y:1},w=_(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:m,rect:A,offsetParent:p,strategy:u}):A);return{top:(y.top-w.top+l.top)/v.y,bottom:(w.bottom-y.bottom+l.bottom)/v.y,left:(y.left-w.left+l.left)/v.x,right:(w.right-y.right+l.right)/v.x}}const ce=t=>({name:"arrow",options:t,async fn(e){const{x:d,y:a,placement:r,rects:n,platform:o,elements:m,middlewareData:u}=e,{element:h,padding:c=0}=E(t,e)||{};if(h==null)return{};const s=J(c),f={x:d,y:a},i=N(r),l=Q(i),g=await o.getDimensions(h),x=i==="y",y=x?"top":"left",A=x?"bottom":"right",p=x?"clientHeight":"clientWidth",v=n.reference[l]+n.reference[i]-f[i]-n.floating[l],w=f[i]-n.reference[i],O=await(o.getOffsetParent==null?void 0:o.getOffsetParent(h));let P=O?O[p]:0;(!P||!await(o.isElement==null?void 0:o.isElement(O)))&&(P=m.floating[p]||n.floating[l]);const D=v/2-w/2,R=P/2-g[l]/2-1,C=$(s[y],R),T=$(s[A],R),S=C,L=P-g[l]-T,b=P/2-g[l]/2+D,B=X(S,b,L),M=!u.arrow&&z(r)!=null&&b!==B&&n.reference[l]/2-(b<S?C:T)-g[l]/2<0,k=M?b<S?b-S:b-L:0;return{[i]:f[i]+k,data:{[i]:B,centerOffset:b-B-k,...M&&{alignmentOffset:k}},reset:M}}}),le=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var d,a;const{placement:r,middlewareData:n,rects:o,initialPlacement:m,platform:u,elements:h}=e,{mainAxis:c=!0,crossAxis:s=!0,fallbackPlacements:f,fallbackStrategy:i="bestFit",fallbackAxisSideDirection:l="none",flipAlignment:g=!0,...x}=E(t,e);if((d=n.arrow)!=null&&d.alignmentOffset)return{};const y=V(r),A=j(m),p=V(m)===m,v=await(u.isRTL==null?void 0:u.isRTL(h.floating)),w=f||(p||!g?[Z(m)]:ee(m)),O=l!=="none";!f&&O&&w.push(...te(m,g,l,v));const P=[m,...w],D=await Y(e,x),R=[];let C=((a=n.flip)==null?void 0:a.overflows)||[];if(c&&R.push(D[y]),s){const b=ne(r,o,v);R.push(D[b[0]],D[b[1]])}if(C=[...C,{placement:r,overflows:R}],!R.every(b=>b<=0)){var T,S;const b=(((T=n.flip)==null?void 0:T.index)||0)+1,B=P[b];if(B)return{data:{index:b,overflows:C},reset:{placement:B}};let M=(S=C.filter(k=>k.overflows[0]<=0).sort((k,H)=>k.overflows[1]-H.overflows[1])[0])==null?void 0:S.placement;if(!M)switch(i){case"bestFit":{var L;const k=(L=C.filter(H=>{if(O){const F=j(H.placement);return F===A||F==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(F=>F>0).reduce((F,U)=>F+U,0)]).sort((H,F)=>H[1]-F[1])[0])==null?void 0:L[0];k&&(M=k);break}case"initialPlacement":M=m;break}if(r!==M)return{reset:{placement:M}}}return{}}}};function q(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function G(t){return ie.some(e=>t[e]>=0)}const re=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:d}=e,{strategy:a="referenceHidden",...r}=E(t,e);switch(a){case"referenceHidden":{const n=await Y(e,{...r,elementContext:"reference"}),o=q(n,d.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:G(o)}}}case"escaped":{const n=await Y(e,{...r,altBoundary:!0}),o=q(n,d.floating);return{data:{escapedOffsets:o,escaped:G(o)}}}default:return{}}}}};async function se(t,e){const{placement:d,platform:a,elements:r}=t,n=await(a.isRTL==null?void 0:a.isRTL(r.floating)),o=V(d),m=z(d),u=j(d)==="y",h=["left","top"].includes(o)?-1:1,c=n&&u?-1:1,s=E(e,t);let{mainAxis:f,crossAxis:i,alignmentAxis:l}=typeof s=="number"?{mainAxis:s,crossAxis:0,alignmentAxis:null}:{mainAxis:s.mainAxis||0,crossAxis:s.crossAxis||0,alignmentAxis:s.alignmentAxis};return m&&typeof l=="number"&&(i=m==="end"?l*-1:l),u?{x:i*c,y:f*h}:{x:f*h,y:i*c}}const fe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var d,a;const{x:r,y:n,placement:o,middlewareData:m}=e,u=await se(e,t);return o===((d=m.offset)==null?void 0:d.placement)&&(a=m.arrow)!=null&&a.alignmentOffset?{}:{x:r+u.x,y:n+u.y,data:{...u,placement:o}}}}},me=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:d,y:a,placement:r}=e,{mainAxis:n=!0,crossAxis:o=!1,limiter:m={fn:x=>{let{x:y,y:A}=x;return{x:y,y:A}}},...u}=E(t,e),h={x:d,y:a},c=await Y(e,u),s=j(V(r)),f=K(s);let i=h[f],l=h[s];if(n){const x=f==="y"?"top":"left",y=f==="y"?"bottom":"right",A=i+c[x],p=i-c[y];i=X(A,i,p)}if(o){const x=s==="y"?"top":"left",y=s==="y"?"bottom":"right",A=l+c[x],p=l-c[y];l=X(A,l,p)}const g=m.fn({...e,[f]:i,[s]:l});return{...g,data:{x:g.x-d,y:g.y-a,enabled:{[f]:n,[s]:o}}}}}},de=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:d,y:a,placement:r,rects:n,middlewareData:o}=e,{offset:m=0,mainAxis:u=!0,crossAxis:h=!0}=E(t,e),c={x:d,y:a},s=j(r),f=K(s);let i=c[f],l=c[s];const g=E(m,e),x=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(u){const p=f==="y"?"height":"width",v=n.reference[f]-n.floating[p]+x.mainAxis,w=n.reference[f]+n.reference[p]-x.mainAxis;i<v?i=v:i>w&&(i=w)}if(h){var y,A;const p=f==="y"?"width":"height",v=["top","left"].includes(V(r)),w=n.reference[s]-n.floating[p]+(v&&((y=o.offset)==null?void 0:y[s])||0)+(v?0:x.crossAxis),O=n.reference[s]+n.reference[p]+(v?0:((A=o.offset)==null?void 0:A[s])||0)-(v?x.crossAxis:0);l<w?l=w:l>O&&(l=O)}return{[f]:i,[s]:l}}}},xe=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var d,a;const{placement:r,rects:n,platform:o,elements:m}=e,{apply:u=()=>{},...h}=E(t,e),c=await Y(e,h),s=V(r),f=z(r),i=j(r)==="y",{width:l,height:g}=n.floating;let x,y;s==="top"||s==="bottom"?(x=s,y=f===(await(o.isRTL==null?void 0:o.isRTL(m.floating))?"start":"end")?"left":"right"):(y=s,x=f==="end"?"top":"bottom");const A=g-c.top-c.bottom,p=l-c.left-c.right,v=$(g-c[x],A),w=$(l-c[y],p),O=!e.middlewareData.shift;let P=v,D=w;if((d=e.middlewareData.shift)!=null&&d.enabled.x&&(D=p),(a=e.middlewareData.shift)!=null&&a.enabled.y&&(P=A),O&&!f){const C=W(c.left,0),T=W(c.right,0),S=W(c.top,0),L=W(c.bottom,0);i?D=l-2*(C!==0||T!==0?C+T:W(c.left,c.right)):P=g-2*(S!==0||L!==0?S+L:W(c.top,c.bottom))}await u({...e,availableWidth:D,availableHeight:P});const R=await o.getDimensions(m.floating);return l!==R.width||g!==R.height?{reset:{rects:!0}}:{}}}};export{xe as a,ce as b,ae as c,le as f,re as h,de as l,fe as o,me as s};
