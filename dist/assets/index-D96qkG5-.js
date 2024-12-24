const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./browserAll-D1j-9pyT.js","./webworkerAll-E1Cep3h_.js","./colorToUniform-KTpA7KSL.js","./WebGPURenderer-_leae0GY.js","./SharedSystems-DR_4Zv7V.js","./WebGLRenderer-DsPhQlTT.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const zl="modulepreload",Il=function(n,t){return new URL(n,t).href},Bi={},Mn=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(u=>{if(u=Il(u,r),u in Bi)return;Bi[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(!!r)for(let p=o.length-1;p>=0;p--){const g=o[p];if(g.href===u&&(!c||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":zl,c||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};var M=(n=>(n.Application="application",n.WebGLPipes="webgl-pipes",n.WebGLPipesAdaptor="webgl-pipes-adaptor",n.WebGLSystem="webgl-system",n.WebGPUPipes="webgpu-pipes",n.WebGPUPipesAdaptor="webgpu-pipes-adaptor",n.WebGPUSystem="webgpu-system",n.CanvasSystem="canvas-system",n.CanvasPipesAdaptor="canvas-pipes-adaptor",n.CanvasPipes="canvas-pipes",n.Asset="asset",n.LoadParser="load-parser",n.ResolveParser="resolve-parser",n.CacheParser="cache-parser",n.DetectionParser="detection-parser",n.MaskEffect="mask-effect",n.BlendMode="blend-mode",n.TextureSource="texture-source",n.Environment="environment",n.ShapeBuilder="shape-builder",n.Batcher="batcher",n))(M||{});const Ir=n=>{if(typeof n=="function"||typeof n=="object"&&n.extension){if(!n.extension)throw new Error("Extension class must have an extension object");n={...typeof n.extension!="object"?{type:n.extension}:n.extension,ref:n}}if(typeof n=="object")n={...n};else throw new Error("Invalid extension type");return typeof n.type=="string"&&(n.type=[n.type]),n},rn=(n,t)=>Ir(n).priority??t,ft={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...n){return n.map(Ir).forEach(t=>{t.type.forEach(e=>{var r,i;return(i=(r=this._removeHandlers)[e])==null?void 0:i.call(r,t)})}),this},add(...n){return n.map(Ir).forEach(t=>{t.type.forEach(e=>{var s,o;const r=this._addHandlers,i=this._queue;r[e]?(o=r[e])==null||o.call(r,t):(i[e]=i[e]||[],(s=i[e])==null||s.push(t))})}),this},handle(n,t,e){var o;const r=this._addHandlers,i=this._removeHandlers;if(r[n]||i[n])throw new Error(`Extension type ${n} already has a handler`);r[n]=t,i[n]=e;const s=this._queue;return s[n]&&((o=s[n])==null||o.forEach(a=>t(a)),delete s[n]),this},handleByMap(n,t){return this.handle(n,e=>{e.name&&(t[e.name]=e.ref)},e=>{e.name&&delete t[e.name]})},handleByNamedList(n,t,e=-1){return this.handle(n,r=>{t.findIndex(s=>s.name===r.name)>=0||(t.push({name:r.name,value:r.ref}),t.sort((s,o)=>rn(o.value,e)-rn(s.value,e)))},r=>{const i=t.findIndex(s=>s.name===r.name);i!==-1&&t.splice(i,1)})},handleByList(n,t,e=-1){return this.handle(n,r=>{t.includes(r.ref)||(t.push(r.ref),t.sort((i,s)=>rn(s,e)-rn(i,e)))},r=>{const i=t.indexOf(r.ref);i!==-1&&t.splice(i,1)})}},Ol={extension:{type:M.Environment,name:"browser",priority:-1},test:()=>!0,load:async()=>{await Mn(()=>import("./browserAll-D1j-9pyT.js"),__vite__mapDeps([0,1,2]),import.meta.url)}},Rl={extension:{type:M.Environment,name:"webworker",priority:0},test:()=>typeof self<"u"&&self.WorkerGlobalScope!==void 0,load:async()=>{await Mn(()=>import("./webworkerAll-E1Cep3h_.js"),__vite__mapDeps([1,2]),import.meta.url)}};class et{constructor(t,e,r){this._x=e||0,this._y=r||0,this._observer=t}clone(t){return new et(t??this._observer,this._x,this._y)}set(t=0,e=t){return(this._x!==t||this._y!==e)&&(this._x=t,this._y=e,this._observer._onUpdate(this)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this._observer._onUpdate(this)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}toString(){return`[pixi.js/math:ObservablePoint x=0 y=0 scope=${this._observer}]`}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this._observer._onUpdate(this))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this._observer._onUpdate(this))}}function fi(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ks={exports:{}};(function(n){var t=Object.prototype.hasOwnProperty,e="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(e=!1));function i(l,u,c){this.fn=l,this.context=u,this.once=c||!1}function s(l,u,c,h,d){if(typeof c!="function")throw new TypeError("The listener must be a function");var f=new i(c,h||l,d),p=e?e+u:u;return l._events[p]?l._events[p].fn?l._events[p]=[l._events[p],f]:l._events[p].push(f):(l._events[p]=f,l._eventsCount++),l}function o(l,u){--l._eventsCount===0?l._events=new r:delete l._events[u]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],c,h;if(this._eventsCount===0)return u;for(h in c=this._events)t.call(c,h)&&u.push(e?h.slice(1):h);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(c)):u},a.prototype.listeners=function(u){var c=e?e+u:u,h=this._events[c];if(!h)return[];if(h.fn)return[h.fn];for(var d=0,f=h.length,p=new Array(f);d<f;d++)p[d]=h[d].fn;return p},a.prototype.listenerCount=function(u){var c=e?e+u:u,h=this._events[c];return h?h.fn?1:h.length:0},a.prototype.emit=function(u,c,h,d,f,p){var g=e?e+u:u;if(!this._events[g])return!1;var m=this._events[g],x=arguments.length,y,v;if(m.fn){switch(m.once&&this.removeListener(u,m.fn,void 0,!0),x){case 1:return m.fn.call(m.context),!0;case 2:return m.fn.call(m.context,c),!0;case 3:return m.fn.call(m.context,c,h),!0;case 4:return m.fn.call(m.context,c,h,d),!0;case 5:return m.fn.call(m.context,c,h,d,f),!0;case 6:return m.fn.call(m.context,c,h,d,f,p),!0}for(v=1,y=new Array(x-1);v<x;v++)y[v-1]=arguments[v];m.fn.apply(m.context,y)}else{var _=m.length,w;for(v=0;v<_;v++)switch(m[v].once&&this.removeListener(u,m[v].fn,void 0,!0),x){case 1:m[v].fn.call(m[v].context);break;case 2:m[v].fn.call(m[v].context,c);break;case 3:m[v].fn.call(m[v].context,c,h);break;case 4:m[v].fn.call(m[v].context,c,h,d);break;default:if(!y)for(w=1,y=new Array(x-1);w<x;w++)y[w-1]=arguments[w];m[v].fn.apply(m[v].context,y)}}return!0},a.prototype.on=function(u,c,h){return s(this,u,c,h,!1)},a.prototype.once=function(u,c,h){return s(this,u,c,h,!0)},a.prototype.removeListener=function(u,c,h,d){var f=e?e+u:u;if(!this._events[f])return this;if(!c)return o(this,f),this;var p=this._events[f];if(p.fn)p.fn===c&&(!d||p.once)&&(!h||p.context===h)&&o(this,f);else{for(var g=0,m=[],x=p.length;g<x;g++)(p[g].fn!==c||d&&!p[g].once||h&&p[g].context!==h)&&m.push(p[g]);m.length?this._events[f]=m.length===1?m[0]:m:o(this,f)}return this},a.prototype.removeAllListeners=function(u){var c;return u?(c=e?e+u:u,this._events[c]&&o(this,c)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=e,a.EventEmitter=a,n.exports=a})(Ks);var El=Ks.exports;const ut=fi(El),kl=Math.PI*2,Ul=180/Math.PI,ge=Math.PI/180;class at{constructor(t=0,e=0){this.x=0,this.y=0,this.x=t,this.y=e}clone(){return new at(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,e=t){return this.x=t,this.y=e,this}toString(){return`[pixi.js/math:Point x=${this.x} y=${this.y}]`}static get shared(){return qn.x=0,qn.y=0,qn}}const qn=new at;class D{constructor(t=1,e=0,r=0,i=1,s=0,o=0){this.array=null,this.a=t,this.b=e,this.c=r,this.d=i,this.tx=s,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,e,r,i,s,o){return this.a=t,this.b=e,this.c=r,this.d=i,this.tx=s,this.ty=o,this}toArray(t,e){this.array||(this.array=new Float32Array(9));const r=e||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r}apply(t,e){e=e||new at;const r=t.x,i=t.y;return e.x=this.a*r+this.c*i+this.tx,e.y=this.b*r+this.d*i+this.ty,e}applyInverse(t,e){e=e||new at;const r=this.a,i=this.b,s=this.c,o=this.d,a=this.tx,l=this.ty,u=1/(r*o+s*-i),c=t.x,h=t.y;return e.x=o*u*c+-s*u*h+(l*s-a*o)*u,e.y=r*u*h+-i*u*c+(-l*r+a*i)*u,e}translate(t,e){return this.tx+=t,this.ty+=e,this}scale(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this}rotate(t){const e=Math.cos(t),r=Math.sin(t),i=this.a,s=this.c,o=this.tx;return this.a=i*e-this.b*r,this.b=i*r+this.b*e,this.c=s*e-this.d*r,this.d=s*r+this.d*e,this.tx=o*e-this.ty*r,this.ty=o*r+this.ty*e,this}append(t){const e=this.a,r=this.b,i=this.c,s=this.d;return this.a=t.a*e+t.b*i,this.b=t.a*r+t.b*s,this.c=t.c*e+t.d*i,this.d=t.c*r+t.d*s,this.tx=t.tx*e+t.ty*i+this.tx,this.ty=t.tx*r+t.ty*s+this.ty,this}appendFrom(t,e){const r=t.a,i=t.b,s=t.c,o=t.d,a=t.tx,l=t.ty,u=e.a,c=e.b,h=e.c,d=e.d;return this.a=r*u+i*h,this.b=r*c+i*d,this.c=s*u+o*h,this.d=s*c+o*d,this.tx=a*u+l*h+e.tx,this.ty=a*c+l*d+e.ty,this}setTransform(t,e,r,i,s,o,a,l,u){return this.a=Math.cos(a+u)*s,this.b=Math.sin(a+u)*s,this.c=-Math.sin(a-l)*o,this.d=Math.cos(a-l)*o,this.tx=t-(r*this.a+i*this.c),this.ty=e-(r*this.b+i*this.d),this}prepend(t){const e=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const r=this.a,i=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this}decompose(t){const e=this.a,r=this.b,i=this.c,s=this.d,o=t.pivot,a=-Math.atan2(-i,s),l=Math.atan2(r,e),u=Math.abs(a+l);return u<1e-5||Math.abs(kl-u)<1e-5?(t.rotation=l,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=a,t.skew.y=l),t.scale.x=Math.sqrt(e*e+r*r),t.scale.y=Math.sqrt(i*i+s*s),t.position.x=this.tx+(o.x*e+o.y*i),t.position.y=this.ty+(o.x*r+o.y*s),t}invert(){const t=this.a,e=this.b,r=this.c,i=this.d,s=this.tx,o=t*i-e*r;return this.a=i/o,this.b=-e/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-i*s)/o,this.ty=-(t*this.ty-e*s)/o,this}isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new D;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}equals(t){return t.a===this.a&&t.b===this.b&&t.c===this.c&&t.d===this.d&&t.tx===this.tx&&t.ty===this.ty}toString(){return`[pixi.js:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`}static get IDENTITY(){return Ll.identity()}static get shared(){return Bl.identity()}}const Bl=new D,Ll=new D,Wt=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],Xt=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],Yt=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],Ht=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Or=[],Zs=[],sn=Math.sign;function Dl(){for(let n=0;n<16;n++){const t=[];Or.push(t);for(let e=0;e<16;e++){const r=sn(Wt[n]*Wt[e]+Yt[n]*Xt[e]),i=sn(Xt[n]*Wt[e]+Ht[n]*Xt[e]),s=sn(Wt[n]*Yt[e]+Yt[n]*Ht[e]),o=sn(Xt[n]*Yt[e]+Ht[n]*Ht[e]);for(let a=0;a<16;a++)if(Wt[a]===r&&Xt[a]===i&&Yt[a]===s&&Ht[a]===o){t.push(a);break}}}for(let n=0;n<16;n++){const t=new D;t.set(Wt[n],Xt[n],Yt[n],Ht[n],0,0),Zs.push(t)}}Dl();const q={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>Wt[n],uY:n=>Xt[n],vX:n=>Yt[n],vY:n=>Ht[n],inv:n=>n&8?n&15:-n&7,add:(n,t)=>Or[n][t],sub:(n,t)=>Or[n][q.inv(t)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,t)=>Math.abs(n)*2<=Math.abs(t)?t>=0?q.S:q.N:Math.abs(t)*2<=Math.abs(n)?n>0?q.E:q.W:t>0?n>0?q.SE:q.SW:n>0?q.NE:q.NW,matrixAppendRotationInv:(n,t,e=0,r=0)=>{const i=Zs[q.inv(t)];i.tx=e,i.ty=r,n.append(i)}},on=[new at,new at,new at,new at];class nt{constructor(t=0,e=0,r=0,i=0){this.type="rectangle",this.x=Number(t),this.y=Number(e),this.width=Number(r),this.height=Number(i)}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}isEmpty(){return this.left===this.right||this.top===this.bottom}static get EMPTY(){return new nt(0,0,0,0)}clone(){return new nt(this.x,this.y,this.width,this.height)}copyFromBounds(t){return this.x=t.minX,this.y=t.minY,this.width=t.maxX-t.minX,this.height=t.maxY-t.minY,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height}strokeContains(t,e,r,i=.5){const{width:s,height:o}=this;if(s<=0||o<=0)return!1;const a=this.x,l=this.y,u=r*(1-i),c=r-u,h=a-u,d=a+s+u,f=l-u,p=l+o+u,g=a+c,m=a+s-c,x=l+c,y=l+o-c;return t>=h&&t<=d&&e>=f&&e<=p&&!(t>g&&t<m&&e>x&&e<y)}intersects(t,e){if(!e){const I=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=I)return!1;const T=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>T}const r=this.left,i=this.right,s=this.top,o=this.bottom;if(i<=r||o<=s)return!1;const a=on[0].set(t.left,t.top),l=on[1].set(t.left,t.bottom),u=on[2].set(t.right,t.top),c=on[3].set(t.right,t.bottom);if(u.x<=a.x||l.y<=a.y)return!1;const h=Math.sign(e.a*e.d-e.b*e.c);if(h===0||(e.apply(a,a),e.apply(l,l),e.apply(u,u),e.apply(c,c),Math.max(a.x,l.x,u.x,c.x)<=r||Math.min(a.x,l.x,u.x,c.x)>=i||Math.max(a.y,l.y,u.y,c.y)<=s||Math.min(a.y,l.y,u.y,c.y)>=o))return!1;const d=h*(l.y-a.y),f=h*(a.x-l.x),p=d*r+f*s,g=d*i+f*s,m=d*r+f*o,x=d*i+f*o;if(Math.max(p,g,m,x)<=d*a.x+f*a.y||Math.min(p,g,m,x)>=d*c.x+f*c.y)return!1;const y=h*(a.y-u.y),v=h*(u.x-a.x),_=y*r+v*s,w=y*i+v*s,b=y*r+v*o,S=y*i+v*o;return!(Math.max(_,w,b,S)<=y*a.x+v*a.y||Math.min(_,w,b,S)>=y*c.x+v*c.y)}pad(t=0,e=t){return this.x-=t,this.y-=e,this.width+=t*2,this.height+=e*2,this}fit(t){const e=Math.max(this.x,t.x),r=Math.min(this.x+this.width,t.x+t.width),i=Math.max(this.y,t.y),s=Math.min(this.y+this.height,t.y+t.height);return this.x=e,this.width=Math.max(r-e,0),this.y=i,this.height=Math.max(s-i,0),this}ceil(t=1,e=.001){const r=Math.ceil((this.x+this.width-e)*t)/t,i=Math.ceil((this.y+this.height-e)*t)/t;return this.x=Math.floor((this.x+e)*t)/t,this.y=Math.floor((this.y+e)*t)/t,this.width=r-this.x,this.height=i-this.y,this}enlarge(t){const e=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),i=Math.min(this.y,t.y),s=Math.max(this.y+this.height,t.y+t.height);return this.x=e,this.width=r-e,this.y=i,this.height=s-i,this}getBounds(t){return t||(t=new nt),t.copyFrom(this),t}toString(){return`[pixi.js/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`}}const Kn={default:-1};function rt(n="default"){return Kn[n]===void 0&&(Kn[n]=-1),++Kn[n]}const Li={},N="8.0.0",Gl="8.3.4";function F(n,t,e=3){if(Li[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`):(r=r.split(`
`).splice(e).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${n}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${n}`),console.warn(r))),Li[t]=!0}const Qs=()=>{};function zn(n){return n+=n===0?1:0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1}function Di(n){return!(n&n-1)&&!!n}function Nl(n){const t={};for(const e in n)n[e]!==void 0&&(t[e]=n[e]);return t}const Gi=Object.create(null);function $l(n){const t=Gi[n];return t===void 0&&(Gi[n]=rt("resource")),t}const Js=class to extends ut{constructor(t={}){super(),this._resourceType="textureSampler",this._touched=0,this._maxAnisotropy=1,this.destroyed=!1,t={...to.defaultOptions,...t},this.addressMode=t.addressMode,this.addressModeU=t.addressModeU??this.addressModeU,this.addressModeV=t.addressModeV??this.addressModeV,this.addressModeW=t.addressModeW??this.addressModeW,this.scaleMode=t.scaleMode,this.magFilter=t.magFilter??this.magFilter,this.minFilter=t.minFilter??this.minFilter,this.mipmapFilter=t.mipmapFilter??this.mipmapFilter,this.lodMinClamp=t.lodMinClamp,this.lodMaxClamp=t.lodMaxClamp,this.compare=t.compare,this.maxAnisotropy=t.maxAnisotropy??1}set addressMode(t){this.addressModeU=t,this.addressModeV=t,this.addressModeW=t}get addressMode(){return this.addressModeU}set wrapMode(t){F(N,"TextureStyle.wrapMode is now TextureStyle.addressMode"),this.addressMode=t}get wrapMode(){return this.addressMode}set scaleMode(t){this.magFilter=t,this.minFilter=t,this.mipmapFilter=t}get scaleMode(){return this.magFilter}set maxAnisotropy(t){this._maxAnisotropy=Math.min(t,16),this._maxAnisotropy>1&&(this.scaleMode="linear")}get maxAnisotropy(){return this._maxAnisotropy}get _resourceId(){return this._sharedResourceId||this._generateResourceId()}update(){this.emit("change",this),this._sharedResourceId=null}_generateResourceId(){const t=`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`;return this._sharedResourceId=$l(t),this._resourceId}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this.removeAllListeners()}};Js.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};let Vl=Js;const eo=class no extends ut{constructor(t={}){super(),this.options=t,this.uid=rt("textureSource"),this._resourceType="textureSource",this._resourceId=rt("resource"),this.uploadMethodId="unknown",this._resolution=1,this.pixelWidth=1,this.pixelHeight=1,this.width=1,this.height=1,this.sampleCount=1,this.mipLevelCount=1,this.autoGenerateMipmaps=!1,this.format="rgba8unorm",this.dimension="2d",this.antialias=!1,this._touched=0,this._batchTick=-1,this._textureBindLocation=-1,t={...no.defaultOptions,...t},this.label=t.label??"",this.resource=t.resource,this.autoGarbageCollect=t.autoGarbageCollect,this._resolution=t.resolution,t.width?this.pixelWidth=t.width*this._resolution:this.pixelWidth=this.resource?this.resourceWidth??1:1,t.height?this.pixelHeight=t.height*this._resolution:this.pixelHeight=this.resource?this.resourceHeight??1:1,this.width=this.pixelWidth/this._resolution,this.height=this.pixelHeight/this._resolution,this.format=t.format,this.dimension=t.dimensions,this.mipLevelCount=t.mipLevelCount,this.autoGenerateMipmaps=t.autoGenerateMipmaps,this.sampleCount=t.sampleCount,this.antialias=t.antialias,this.alphaMode=t.alphaMode,this.style=new Vl(Nl(t)),this.destroyed=!1,this._refreshPOT()}get source(){return this}get style(){return this._style}set style(t){var e,r;this.style!==t&&((e=this._style)==null||e.off("change",this._onStyleChange,this),this._style=t,(r=this._style)==null||r.on("change",this._onStyleChange,this),this._onStyleChange())}get addressMode(){return this._style.addressMode}set addressMode(t){this._style.addressMode=t}get repeatMode(){return this._style.addressMode}set repeatMode(t){this._style.addressMode=t}get magFilter(){return this._style.magFilter}set magFilter(t){this._style.magFilter=t}get minFilter(){return this._style.minFilter}set minFilter(t){this._style.minFilter=t}get mipmapFilter(){return this._style.mipmapFilter}set mipmapFilter(t){this._style.mipmapFilter=t}get lodMinClamp(){return this._style.lodMinClamp}set lodMinClamp(t){this._style.lodMinClamp=t}get lodMaxClamp(){return this._style.lodMaxClamp}set lodMaxClamp(t){this._style.lodMaxClamp=t}_onStyleChange(){this.emit("styleChange",this)}update(){if(this.resource){const t=this._resolution;if(this.resize(this.resourceWidth/t,this.resourceHeight/t))return}this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._style&&(this._style.destroy(),this._style=null),this.uploadMethodId=null,this.resource=null,this.removeAllListeners()}unload(){this._resourceId=rt("resource"),this.emit("change",this),this.emit("unload",this)}get resourceWidth(){const{resource:t}=this;return t.naturalWidth||t.videoWidth||t.displayWidth||t.width}get resourceHeight(){const{resource:t}=this;return t.naturalHeight||t.videoHeight||t.displayHeight||t.height}get resolution(){return this._resolution}set resolution(t){this._resolution!==t&&(this._resolution=t,this.width=this.pixelWidth/t,this.height=this.pixelHeight/t)}resize(t,e,r){r||(r=this._resolution),t||(t=this.width),e||(e=this.height);const i=Math.round(t*r),s=Math.round(e*r);return this.width=i/r,this.height=s/r,this._resolution=r,this.pixelWidth===i&&this.pixelHeight===s?!1:(this._refreshPOT(),this.pixelWidth=i,this.pixelHeight=s,this.emit("resize",this),this._resourceId=rt("resource"),this.emit("change",this),!0)}updateMipmaps(){this.autoGenerateMipmaps&&this.mipLevelCount>1&&this.emit("updateMipmaps",this)}set wrapMode(t){this._style.wrapMode=t}get wrapMode(){return this._style.wrapMode}set scaleMode(t){this._style.scaleMode=t}get scaleMode(){return this._style.scaleMode}_refreshPOT(){this.isPowerOfTwo=Di(this.pixelWidth)&&Di(this.pixelHeight)}static test(t){throw new Error("Unimplemented")}};eo.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};let vt=eo;class di extends vt{constructor(t){const e=t.resource||new Float32Array(t.width*t.height*4);let r=t.format;r||(e instanceof Float32Array?r="rgba32float":e instanceof Int32Array||e instanceof Uint32Array?r="rgba32uint":e instanceof Int16Array||e instanceof Uint16Array?r="rgba16uint":(e instanceof Int8Array,r="bgra8unorm")),super({...t,resource:e,format:r}),this.uploadMethodId="buffer"}static test(t){return t instanceof Int8Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array}}di.extension=M.TextureSource;const Ni=new D;class Wl{constructor(t,e){this.mapCoord=new D,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,typeof e>"u"?this.clampMargin=t.width<10?0:.5:this.clampMargin=e,this.isSimple=!1,this.texture=t}get texture(){return this._texture}set texture(t){var e;this.texture!==t&&((e=this._texture)==null||e.removeListener("update",this.update,this),this._texture=t,this._texture.addListener("update",this.update,this),this.update())}multiplyUvs(t,e){e===void 0&&(e=t);const r=this.mapCoord;for(let i=0;i<t.length;i+=2){const s=t[i],o=t[i+1];e[i]=s*r.a+o*r.c+r.tx,e[i+1]=s*r.b+o*r.d+r.ty}return e}update(){const t=this._texture;this._updateID++;const e=t.uvs;this.mapCoord.set(e.x1-e.x0,e.y1-e.y0,e.x3-e.x0,e.y3-e.y0,e.x0,e.y0);const r=t.orig,i=t.trim;i&&(Ni.set(r.width/i.width,0,0,r.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(Ni));const s=t.source,o=this.uClampFrame,a=this.clampMargin/s._resolution,l=this.clampOffset/s._resolution;return o[0]=(t.frame.x+a+l)/s.width,o[1]=(t.frame.y+a+l)/s.height,o[2]=(t.frame.x+t.frame.width-a+l)/s.width,o[3]=(t.frame.y+t.frame.height-a+l)/s.height,this.uClampOffset[0]=this.clampOffset/s.pixelWidth,this.uClampOffset[1]=this.clampOffset/s.pixelHeight,this.isSimple=t.frame.width===s.width&&t.frame.height===s.height&&t.rotate===0,!0}}class O extends ut{constructor({source:t,label:e,frame:r,orig:i,trim:s,defaultAnchor:o,defaultBorders:a,rotate:l,dynamic:u}={}){if(super(),this.uid=rt("texture"),this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0},this.frame=new nt,this.noFrame=!1,this.dynamic=!1,this.isTexture=!0,this.label=e,this.source=(t==null?void 0:t.source)??new vt,this.noFrame=!r,r)this.frame.copyFrom(r);else{const{width:c,height:h}=this._source;this.frame.width=c,this.frame.height=h}this.orig=i||this.frame,this.trim=s,this.rotate=l??0,this.defaultAnchor=o,this.defaultBorders=a,this.destroyed=!1,this.dynamic=u||!1,this.updateUvs()}set source(t){this._source&&this._source.off("resize",this.update,this),this._source=t,t.on("resize",this.update,this),this.emit("update",this)}get source(){return this._source}get textureMatrix(){return this._textureMatrix||(this._textureMatrix=new Wl(this)),this._textureMatrix}get width(){return this.orig.width}get height(){return this.orig.height}updateUvs(){const{uvs:t,frame:e}=this,{width:r,height:i}=this._source,s=e.x/r,o=e.y/i,a=e.width/r,l=e.height/i;let u=this.rotate;if(u){const c=a/2,h=l/2,d=s+c,f=o+h;u=q.add(u,q.NW),t.x0=d+c*q.uX(u),t.y0=f+h*q.uY(u),u=q.add(u,2),t.x1=d+c*q.uX(u),t.y1=f+h*q.uY(u),u=q.add(u,2),t.x2=d+c*q.uX(u),t.y2=f+h*q.uY(u),u=q.add(u,2),t.x3=d+c*q.uX(u),t.y3=f+h*q.uY(u)}else t.x0=s,t.y0=o,t.x1=s+a,t.y1=o,t.x2=s+a,t.y2=o+l,t.x3=s,t.y3=o+l}destroy(t=!1){this._source&&t&&(this._source.destroy(),this._source=null),this._textureMatrix=null,this.destroyed=!0,this.emit("destroy",this),this.removeAllListeners()}update(){this.noFrame&&(this.frame.width=this._source.width,this.frame.height=this._source.height),this.updateUvs(),this.emit("update",this)}get baseTexture(){return F(N,"Texture.baseTexture is now Texture.source"),this._source}}O.EMPTY=new O({label:"EMPTY",source:new vt({label:"EMPTY"})});O.EMPTY.destroy=Qs;O.WHITE=new O({source:new di({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});O.WHITE.destroy=Qs;function Xl(n,t,e,r){const{width:i,height:s}=e.orig,o=e.trim;if(o){const a=o.width,l=o.height;n.minX=o.x-t._x*i-r,n.maxX=n.minX+a,n.minY=o.y-t._y*s-r,n.maxY=n.minY+l}else n.minX=-t._x*i-r,n.maxX=n.minX+i,n.minY=-t._y*s-r,n.maxY=n.minY+s}const $i=new D;class Ot{constructor(t=1/0,e=1/0,r=-1/0,i=-1/0){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=$i,this.minX=t,this.minY=e,this.maxX=r,this.maxY=i}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}get rectangle(){this._rectangle||(this._rectangle=new nt);const t=this._rectangle;return this.minX>this.maxX||this.minY>this.maxY?(t.x=0,t.y=0,t.width=0,t.height=0):t.copyFromBounds(this),t}clear(){return this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.matrix=$i,this}set(t,e,r,i){this.minX=t,this.minY=e,this.maxX=r,this.maxY=i}addFrame(t,e,r,i,s){s||(s=this.matrix);const o=s.a,a=s.b,l=s.c,u=s.d,c=s.tx,h=s.ty;let d=this.minX,f=this.minY,p=this.maxX,g=this.maxY,m=o*t+l*e+c,x=a*t+u*e+h;m<d&&(d=m),x<f&&(f=x),m>p&&(p=m),x>g&&(g=x),m=o*r+l*e+c,x=a*r+u*e+h,m<d&&(d=m),x<f&&(f=x),m>p&&(p=m),x>g&&(g=x),m=o*t+l*i+c,x=a*t+u*i+h,m<d&&(d=m),x<f&&(f=x),m>p&&(p=m),x>g&&(g=x),m=o*r+l*i+c,x=a*r+u*i+h,m<d&&(d=m),x<f&&(f=x),m>p&&(p=m),x>g&&(g=x),this.minX=d,this.minY=f,this.maxX=p,this.maxY=g}addRect(t,e){this.addFrame(t.x,t.y,t.x+t.width,t.y+t.height,e)}addBounds(t,e){this.addFrame(t.minX,t.minY,t.maxX,t.maxY,e)}addBoundsMask(t){this.minX=this.minX>t.minX?this.minX:t.minX,this.minY=this.minY>t.minY?this.minY:t.minY,this.maxX=this.maxX<t.maxX?this.maxX:t.maxX,this.maxY=this.maxY<t.maxY?this.maxY:t.maxY}applyMatrix(t){const e=this.minX,r=this.minY,i=this.maxX,s=this.maxY,{a:o,b:a,c:l,d:u,tx:c,ty:h}=t;let d=o*e+l*r+c,f=a*e+u*r+h;this.minX=d,this.minY=f,this.maxX=d,this.maxY=f,d=o*i+l*r+c,f=a*i+u*r+h,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY,d=o*e+l*s+c,f=a*e+u*s+h,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY,d=o*i+l*s+c,f=a*i+u*s+h,this.minX=d<this.minX?d:this.minX,this.minY=f<this.minY?f:this.minY,this.maxX=d>this.maxX?d:this.maxX,this.maxY=f>this.maxY?f:this.maxY}fit(t){return this.minX<t.left&&(this.minX=t.left),this.maxX>t.right&&(this.maxX=t.right),this.minY<t.top&&(this.minY=t.top),this.maxY>t.bottom&&(this.maxY=t.bottom),this}fitBounds(t,e,r,i){return this.minX<t&&(this.minX=t),this.maxX>e&&(this.maxX=e),this.minY<r&&(this.minY=r),this.maxY>i&&(this.maxY=i),this}pad(t,e=t){return this.minX-=t,this.maxX+=t,this.minY-=e,this.maxY+=e,this}ceil(){return this.minX=Math.floor(this.minX),this.minY=Math.floor(this.minY),this.maxX=Math.ceil(this.maxX),this.maxY=Math.ceil(this.maxY),this}clone(){return new Ot(this.minX,this.minY,this.maxX,this.maxY)}scale(t,e=t){return this.minX*=t,this.minY*=e,this.maxX*=t,this.maxY*=e,this}get x(){return this.minX}set x(t){const e=this.maxX-this.minX;this.minX=t,this.maxX=t+e}get y(){return this.minY}set y(t){const e=this.maxY-this.minY;this.minY=t,this.maxY=t+e}get width(){return this.maxX-this.minX}set width(t){this.maxX=this.minX+t}get height(){return this.maxY-this.minY}set height(t){this.maxY=this.minY+t}get left(){return this.minX}get right(){return this.maxX}get top(){return this.minY}get bottom(){return this.maxY}get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}get isValid(){return this.minX+this.minY!==1/0}addVertexData(t,e,r,i){let s=this.minX,o=this.minY,a=this.maxX,l=this.maxY;i||(i=this.matrix);const u=i.a,c=i.b,h=i.c,d=i.d,f=i.tx,p=i.ty;for(let g=e;g<r;g+=2){const m=t[g],x=t[g+1],y=u*m+h*x+f,v=c*m+d*x+p;s=y<s?y:s,o=v<o?v:o,a=y>a?y:a,l=v>l?v:l}this.minX=s,this.minY=o,this.maxX=a,this.maxY=l}containsPoint(t,e){return this.minX<=t&&this.minY<=e&&this.maxX>=t&&this.maxY>=e}toString(){return`[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}copyFrom(t){return this.minX=t.minX,this.minY=t.minY,this.maxX=t.maxX,this.maxY=t.maxY,this}}var Yl={grad:.9,turn:360,rad:360/(2*Math.PI)},Rt=function(n){return typeof n=="string"?n.length>0:typeof n=="number"},st=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=Math.pow(10,t)),Math.round(e*n)/e+0},wt=function(n,t,e){return t===void 0&&(t=0),e===void 0&&(e=1),n>e?e:n>t?n:t},ro=function(n){return(n=isFinite(n)?n%360:0)>0?n:n+360},Vi=function(n){return{r:wt(n.r,0,255),g:wt(n.g,0,255),b:wt(n.b,0,255),a:wt(n.a)}},Zn=function(n){return{r:st(n.r),g:st(n.g),b:st(n.b),a:st(n.a,3)}},Hl=/^#([0-9a-f]{3,8})$/i,an=function(n){var t=n.toString(16);return t.length<2?"0"+t:t},io=function(n){var t=n.r,e=n.g,r=n.b,i=n.a,s=Math.max(t,e,r),o=s-Math.min(t,e,r),a=o?s===t?(e-r)/o:s===e?2+(r-t)/o:4+(t-e)/o:0;return{h:60*(a<0?a+6:a),s:s?o/s*100:0,v:s/255*100,a:i}},so=function(n){var t=n.h,e=n.s,r=n.v,i=n.a;t=t/360*6,e/=100,r/=100;var s=Math.floor(t),o=r*(1-e),a=r*(1-(t-s)*e),l=r*(1-(1-t+s)*e),u=s%6;return{r:255*[r,a,o,o,l,r][u],g:255*[l,r,r,a,o,o][u],b:255*[o,o,l,r,r,a][u],a:i}},Wi=function(n){return{h:ro(n.h),s:wt(n.s,0,100),l:wt(n.l,0,100),a:wt(n.a)}},Xi=function(n){return{h:st(n.h),s:st(n.s),l:st(n.l),a:st(n.a,3)}},Yi=function(n){return so((e=(t=n).s,{h:t.h,s:(e*=((r=t.l)<50?r:100-r)/100)>0?2*e/(r+e)*100:0,v:r+e,a:t.a}));var t,e,r},ke=function(n){return{h:(t=io(n)).h,s:(i=(200-(e=t.s))*(r=t.v)/100)>0&&i<200?e*r/100/(i<=100?i:200-i)*100:0,l:i/2,a:t.a};var t,e,r,i},jl=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,ql=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Kl=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Zl=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,Rr={string:[[function(n){var t=Hl.exec(n);return t?(n=t[1]).length<=4?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?st(parseInt(n[3]+n[3],16)/255,2):1}:n.length===6||n.length===8?{r:parseInt(n.substr(0,2),16),g:parseInt(n.substr(2,2),16),b:parseInt(n.substr(4,2),16),a:n.length===8?st(parseInt(n.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(n){var t=Kl.exec(n)||Zl.exec(n);return t?t[2]!==t[4]||t[4]!==t[6]?null:Vi({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):null},"rgb"],[function(n){var t=jl.exec(n)||ql.exec(n);if(!t)return null;var e,r,i=Wi({h:(e=t[1],r=t[2],r===void 0&&(r="deg"),Number(e)*(Yl[r]||1)),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)});return Yi(i)},"hsl"]],object:[[function(n){var t=n.r,e=n.g,r=n.b,i=n.a,s=i===void 0?1:i;return Rt(t)&&Rt(e)&&Rt(r)?Vi({r:Number(t),g:Number(e),b:Number(r),a:Number(s)}):null},"rgb"],[function(n){var t=n.h,e=n.s,r=n.l,i=n.a,s=i===void 0?1:i;if(!Rt(t)||!Rt(e)||!Rt(r))return null;var o=Wi({h:Number(t),s:Number(e),l:Number(r),a:Number(s)});return Yi(o)},"hsl"],[function(n){var t=n.h,e=n.s,r=n.v,i=n.a,s=i===void 0?1:i;if(!Rt(t)||!Rt(e)||!Rt(r))return null;var o=function(a){return{h:ro(a.h),s:wt(a.s,0,100),v:wt(a.v,0,100),a:wt(a.a)}}({h:Number(t),s:Number(e),v:Number(r),a:Number(s)});return so(o)},"hsv"]]},Hi=function(n,t){for(var e=0;e<t.length;e++){var r=t[e][0](n);if(r)return[r,t[e][1]]}return[null,void 0]},Ql=function(n){return typeof n=="string"?Hi(n.trim(),Rr.string):typeof n=="object"&&n!==null?Hi(n,Rr.object):[null,void 0]},Qn=function(n,t){var e=ke(n);return{h:e.h,s:wt(e.s+100*t,0,100),l:e.l,a:e.a}},Jn=function(n){return(299*n.r+587*n.g+114*n.b)/1e3/255},ji=function(n,t){var e=ke(n);return{h:e.h,s:e.s,l:wt(e.l+100*t,0,100),a:e.a}},Er=function(){function n(t){this.parsed=Ql(t)[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return n.prototype.isValid=function(){return this.parsed!==null},n.prototype.brightness=function(){return st(Jn(this.rgba),2)},n.prototype.isDark=function(){return Jn(this.rgba)<.5},n.prototype.isLight=function(){return Jn(this.rgba)>=.5},n.prototype.toHex=function(){return t=Zn(this.rgba),e=t.r,r=t.g,i=t.b,o=(s=t.a)<1?an(st(255*s)):"","#"+an(e)+an(r)+an(i)+o;var t,e,r,i,s,o},n.prototype.toRgb=function(){return Zn(this.rgba)},n.prototype.toRgbString=function(){return t=Zn(this.rgba),e=t.r,r=t.g,i=t.b,(s=t.a)<1?"rgba("+e+", "+r+", "+i+", "+s+")":"rgb("+e+", "+r+", "+i+")";var t,e,r,i,s},n.prototype.toHsl=function(){return Xi(ke(this.rgba))},n.prototype.toHslString=function(){return t=Xi(ke(this.rgba)),e=t.h,r=t.s,i=t.l,(s=t.a)<1?"hsla("+e+", "+r+"%, "+i+"%, "+s+")":"hsl("+e+", "+r+"%, "+i+"%)";var t,e,r,i,s},n.prototype.toHsv=function(){return t=io(this.rgba),{h:st(t.h),s:st(t.s),v:st(t.v),a:st(t.a,3)};var t},n.prototype.invert=function(){return Mt({r:255-(t=this.rgba).r,g:255-t.g,b:255-t.b,a:t.a});var t},n.prototype.saturate=function(t){return t===void 0&&(t=.1),Mt(Qn(this.rgba,t))},n.prototype.desaturate=function(t){return t===void 0&&(t=.1),Mt(Qn(this.rgba,-t))},n.prototype.grayscale=function(){return Mt(Qn(this.rgba,-1))},n.prototype.lighten=function(t){return t===void 0&&(t=.1),Mt(ji(this.rgba,t))},n.prototype.darken=function(t){return t===void 0&&(t=.1),Mt(ji(this.rgba,-t))},n.prototype.rotate=function(t){return t===void 0&&(t=15),this.hue(this.hue()+t)},n.prototype.alpha=function(t){return typeof t=="number"?Mt({r:(e=this.rgba).r,g:e.g,b:e.b,a:t}):st(this.rgba.a,3);var e},n.prototype.hue=function(t){var e=ke(this.rgba);return typeof t=="number"?Mt({h:t,s:e.s,l:e.l,a:e.a}):st(e.h)},n.prototype.isEqual=function(t){return this.toHex()===Mt(t).toHex()},n}(),Mt=function(n){return n instanceof Er?n:new Er(n)},qi=[],Jl=function(n){n.forEach(function(t){qi.indexOf(t)<0&&(t(Er,Rr),qi.push(t))})};function tu(n,t){var e={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},r={};for(var i in e)r[e[i]]=i;var s={};n.prototype.toName=function(o){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var a,l,u=r[this.toHex()];if(u)return u;if(o!=null&&o.closest){var c=this.toRgb(),h=1/0,d="black";if(!s.length)for(var f in e)s[f]=new n(e[f]).toRgb();for(var p in e){var g=(a=c,l=s[p],Math.pow(a.r-l.r,2)+Math.pow(a.g-l.g,2)+Math.pow(a.b-l.b,2));g<h&&(h=g,d=p)}return d}},t.string.push([function(o){var a=o.toLowerCase(),l=a==="transparent"?"#0000":e[a];return l?new n(l).toRgb():null},"name"])}Jl([tu]);const xe=class Oe{constructor(t=16777215){this._value=null,this._components=new Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof Oe)this._value=this._cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t===null)throw new Error("Cannot set Color#value to null");(this._value===null||!this._isSourceEqual(this._value,t))&&(this._value=this._cloneSource(t),this._normalize(this._value))}}get value(){return this._value}_cloneSource(t){return typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?{...t}:t}_isSourceEqual(t,e){const r=typeof t;if(r!==typeof e)return!1;if(r==="number"||r==="string"||t instanceof Number)return t===e;if(Array.isArray(t)&&Array.isArray(e)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(e))return t.length!==e.length?!1:t.every((s,o)=>s===e[o]);if(t!==null&&e!==null){const s=Object.keys(t),o=Object.keys(e);return s.length!==o.length?!1:s.every(a=>t[a]===e[a])}return t===e}toRgba(){const[t,e,r,i]=this._components;return{r:t,g:e,b:r,a:i}}toRgb(){const[t,e,r]=this._components;return{r:t,g:e,b:r}}toRgbaString(){const[t,e,r]=this.toUint8RgbArray();return`rgba(${t},${e},${r},${this.alpha})`}toUint8RgbArray(t){const[e,r,i]=this._components;return this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb),t[0]=Math.round(e*255),t[1]=Math.round(r*255),t[2]=Math.round(i*255),t}toArray(t){this._arrayRgba||(this._arrayRgba=[]),t||(t=this._arrayRgba);const[e,r,i,s]=this._components;return t[0]=e,t[1]=r,t[2]=i,t[3]=s,t}toRgbArray(t){this._arrayRgb||(this._arrayRgb=[]),t||(t=this._arrayRgb);const[e,r,i]=this._components;return t[0]=e,t[1]=r,t[2]=i,t}toNumber(){return this._int}toBgrNumber(){const[t,e,r]=this.toUint8RgbArray();return(r<<16)+(e<<8)+t}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t){const[e,r,i,s]=Oe._temp.setValue(t)._components;return this._components[0]*=e,this._components[1]*=r,this._components[2]*=i,this._components[3]*=s,this._refreshInt(),this._value=null,this}premultiply(t,e=!0){return e&&(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this._refreshInt(),this._value=null,this}toPremultiplied(t,e=!0){if(t===1)return(255<<24)+this._int;if(t===0)return e?0:this._int;let r=this._int>>16&255,i=this._int>>8&255,s=this._int&255;return e&&(r=r*t+.5|0,i=i*t+.5|0,s=s*t+.5|0),(t*255<<24)+(r<<16)+(i<<8)+s}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-t.length)+t}`}toHexa(){const e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}setAlpha(t){return this._components[3]=this._clamp(t),this}_normalize(t){let e,r,i,s;if((typeof t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;e=(o>>16&255)/255,r=(o>>8&255)/255,i=(o&255)/255,s=1}else if((Array.isArray(t)||t instanceof Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[e,r,i,s=1]=t;else if((t instanceof Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),[e,r,i,s=255]=t,e/=255,r/=255,i/=255,s/=255;else if(typeof t=="string"||typeof t=="object"){if(typeof t=="string"){const a=Oe.HEX_PATTERN.exec(t);a&&(t=`#${a[2]}`)}const o=Mt(t);o.isValid()&&({r:e,g:r,b:i,a:s}=o.rgba,e/=255,r/=255,i/=255)}if(e!==void 0)this._components[0]=e,this._components[1]=r,this._components[2]=i,this._components[3]=s,this._refreshInt();else throw new Error(`Unable to convert color ${t}`)}_refreshInt(){this._clamp(this._components);const[t,e,r]=this._components;this._int=(t*255<<16)+(e*255<<8)+(r*255|0)}_clamp(t,e=0,r=1){return typeof t=="number"?Math.min(Math.max(t,e),r):(t.forEach((i,s)=>{t[s]=Math.min(Math.max(i,e),r)}),t)}static isColorLike(t){return typeof t=="number"||typeof t=="string"||t instanceof Number||t instanceof Oe||Array.isArray(t)||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Float32Array||t.r!==void 0&&t.g!==void 0&&t.b!==void 0||t.r!==void 0&&t.g!==void 0&&t.b!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0||t.h!==void 0&&t.s!==void 0&&t.l!==void 0&&t.a!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0||t.h!==void 0&&t.s!==void 0&&t.v!==void 0&&t.a!==void 0}};xe.shared=new xe;xe._temp=new xe;xe.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let G=xe;const eu={cullArea:null,cullable:!1,cullableChildren:!0};class pi{constructor(t,e){this._pool=[],this._count=0,this._index=0,this._classType=t,e&&this.prepopulate(e)}prepopulate(t){for(let e=0;e<t;e++)this._pool[this._index++]=new this._classType;this._count+=t}get(t){var r;let e;return this._index>0?e=this._pool[--this._index]:e=new this._classType,(r=e.init)==null||r.call(e,t),e}return(t){var e;(e=t.reset)==null||e.call(t),this._pool[this._index++]=t}get totalSize(){return this._count}get totalFree(){return this._index}get totalUsed(){return this._count-this._index}clear(){this._pool.length=0,this._index=0}}class nu{constructor(){this._poolsByClass=new Map}prepopulate(t,e){this.getPool(t).prepopulate(e)}get(t,e){return this.getPool(t).get(e)}return(t){this.getPool(t.constructor).return(t)}getPool(t){return this._poolsByClass.has(t)||this._poolsByClass.set(t,new pi(t)),this._poolsByClass.get(t)}stats(){const t={};return this._poolsByClass.forEach(e=>{const r=t[e._classType.name]?e._classType.name+e._classType.ID:e._classType.name;t[r]={free:e.totalFree,used:e.totalUsed,size:e.totalSize}}),t}}const kt=new nu,ru={get isCachedAsTexture(){var n;return!!((n=this.renderGroup)!=null&&n.isCachedAsTexture)},cacheAsTexture(n){typeof n=="boolean"&&n===!1?this.disableRenderGroup():(this.enableRenderGroup(),this.renderGroup.enableCacheAsTexture(n===!0?{}:n))},updateCacheTexture(){var n;(n=this.renderGroup)==null||n.updateCacheTexture()},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(n){F("v8.6.0","cacheAsBitmap is deprecated, use cacheAsTexture instead."),this.cacheAsTexture(n)}};function iu(n,t,e){const r=n.length;let i;if(t>=r||e===0)return;e=t+e>r?r-t:e;const s=r-e;for(i=t;i<s;++i)n[i]=n[i+e];n.length=s}const su={allowChildren:!0,removeChildren(n=0,t){const e=t??this.children.length,r=e-n,i=[];if(r>0&&r<=e){for(let o=e-1;o>=n;o--){const a=this.children[o];a&&(i.push(a),a.parent=null)}iu(this.children,n,e);const s=this.renderGroup||this.parentRenderGroup;s&&s.removeChildren(i);for(let o=0;o<i.length;++o)this.emit("childRemoved",i[o],this,o),i[o].emit("removed",this);return i}else if(r===0&&this.children.length===0)return i;throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(n){const t=this.getChildAt(n);return this.removeChild(t)},getChildAt(n){if(n<0||n>=this.children.length)throw new Error(`getChildAt: Index (${n}) does not exist.`);return this.children[n]},setChildIndex(n,t){if(t<0||t>=this.children.length)throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);this.getChildIndex(n),this.addChildAt(n,t)},getChildIndex(n){const t=this.children.indexOf(n);if(t===-1)throw new Error("The supplied Container must be a child of the caller");return t},addChildAt(n,t){this.allowChildren||F(N,"addChildAt: Only Containers will be allowed to add children in v8.0.0");const{children:e}=this;if(t<0||t>e.length)throw new Error(`${n}addChildAt: The index ${t} supplied is out of bounds ${e.length}`);if(n.parent){const i=n.parent.children.indexOf(n);if(n.parent===this&&i===t)return n;i!==-1&&n.parent.children.splice(i,1)}t===e.length?e.push(n):e.splice(t,0,n),n.parent=this,n.didChange=!0,n._updateFlags=15;const r=this.renderGroup||this.parentRenderGroup;return r&&r.addChild(n),this.sortableChildren&&(this.sortDirty=!0),this.emit("childAdded",n,this,t),n.emit("added",this),n},swapChildren(n,t){if(n===t)return;const e=this.getChildIndex(n),r=this.getChildIndex(t);this.children[e]=t,this.children[r]=n;const i=this.renderGroup||this.parentRenderGroup;i&&(i.structureDidChange=!0),this._didContainerChangeTick++},removeFromParent(){var n;(n=this.parent)==null||n.removeChild(this)},reparentChild(...n){return n.length===1?this.reparentChildAt(n[0],this.children.length):(n.forEach(t=>this.reparentChildAt(t,this.children.length)),n[0])},reparentChildAt(n,t){if(n.parent===this)return this.setChildIndex(n,t),n;const e=n.worldTransform.clone();n.removeFromParent(),this.addChildAt(n,t);const r=this.worldTransform.clone();return r.invert(),e.prepend(r),n.setFromMatrix(e),n}};class Ki{constructor(){this.pipe="filter",this.priority=1}destroy(){for(let t=0;t<this.filters.length;t++)this.filters[t].destroy();this.filters=null,this.filterArea=null}}class ou{constructor(){this._effectClasses=[],this._tests=[],this._initialized=!1}init(){this._initialized||(this._initialized=!0,this._effectClasses.forEach(t=>{this.add({test:t.test,maskClass:t})}))}add(t){this._tests.push(t)}getMaskEffect(t){this._initialized||this.init();for(let e=0;e<this._tests.length;e++){const r=this._tests[e];if(r.test(t))return kt.get(r.maskClass,t)}return t}returnMaskEffect(t){kt.return(t)}}const kr=new ou;ft.handleByList(M.MaskEffect,kr._effectClasses);const au={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){const n=this.renderGroup||this.parentRenderGroup;n&&(n.structureDidChange=!0)},addEffect(n){this.effects.indexOf(n)===-1&&(this.effects.push(n),this.effects.sort((e,r)=>e.priority-r.priority),this._markStructureAsChanged(),this._updateIsSimple())},removeEffect(n){const t=this.effects.indexOf(n);t!==-1&&(this.effects.splice(t,1),this._markStructureAsChanged(),this._updateIsSimple())},set mask(n){const t=this._maskEffect;(t==null?void 0:t.mask)!==n&&(t&&(this.removeEffect(t),kr.returnMaskEffect(t),this._maskEffect=null),n!=null&&(this._maskEffect=kr.getMaskEffect(n),this.addEffect(this._maskEffect)))},setMask(n){this._maskOptions={...this._maskOptions,...n},n.mask&&(this.mask=n.mask),this._markStructureAsChanged()},get mask(){var n;return(n=this._maskEffect)==null?void 0:n.mask},set filters(n){var s;!Array.isArray(n)&&n&&(n=[n]);const t=this._filterEffect||(this._filterEffect=new Ki);n=n;const e=(n==null?void 0:n.length)>0,r=((s=t.filters)==null?void 0:s.length)>0,i=e!==r;n=Array.isArray(n)?n.slice(0):n,t.filters=Object.freeze(n),i&&(e?this.addEffect(t):(this.removeEffect(t),t.filters=n??null))},get filters(){var n;return(n=this._filterEffect)==null?void 0:n.filters},set filterArea(n){this._filterEffect||(this._filterEffect=new Ki),this._filterEffect.filterArea=n},get filterArea(){var n;return(n=this._filterEffect)==null?void 0:n.filterArea}},lu={label:null,get name(){return F(N,"Container.name property has been removed, use Container.label instead"),this.label},set name(n){F(N,"Container.name property has been removed, use Container.label instead"),this.label=n},getChildByName(n,t=!1){return this.getChildByLabel(n,t)},getChildByLabel(n,t=!1){const e=this.children;for(let r=0;r<e.length;r++){const i=e[r];if(i.label===n||n instanceof RegExp&&n.test(i.label))return i}if(t)for(let r=0;r<e.length;r++){const s=e[r].getChildByLabel(n,!0);if(s)return s}return null},getChildrenByLabel(n,t=!1,e=[]){const r=this.children;for(let i=0;i<r.length;i++){const s=r[i];(s.label===n||n instanceof RegExp&&n.test(s.label))&&e.push(s)}if(t)for(let i=0;i<r.length;i++)r[i].getChildrenByLabel(n,!0,e);return e}},pt=new pi(D),ve=new pi(Ot);function oo(n,t,e){e.clear();let r,i;return n.parent?t?r=n.parent.worldTransform:(i=pt.get().identity(),r=mi(n,i)):r=D.IDENTITY,ao(n,e,r,t),i&&pt.return(i),e.isValid||e.set(0,0,0,0),e}function ao(n,t,e,r){var a,l;if(!n.visible||!n.measurable)return;let i;r?i=n.worldTransform:(n.updateLocalTransform(),i=pt.get(),i.appendFrom(n.localTransform,e));const s=t,o=!!n.effects.length;if(o&&(t=ve.get().clear()),n.boundsArea)t.addRect(n.boundsArea,i);else{n.bounds&&(t.matrix=i,t.addBounds(n.bounds));for(let u=0;u<n.children.length;u++)ao(n.children[u],t,i,r)}if(o){for(let u=0;u<n.effects.length;u++)(l=(a=n.effects[u]).addBounds)==null||l.call(a,t);s.addBounds(t,D.IDENTITY),ve.return(t)}r||pt.return(i)}function mi(n,t){const e=n.parent;return e&&(mi(e,t),e.updateLocalTransform(),t.append(e.localTransform)),t}function lo(n,t){if(n===16777215||!t)return t;if(t===16777215||!n)return n;const e=n>>16&255,r=n>>8&255,i=n&255,s=t>>16&255,o=t>>8&255,a=t&255,l=e*s/255|0,u=r*o/255|0,c=i*a/255|0;return(l<<16)+(u<<8)+c}const Zi=16777215;function Qi(n,t){return n===Zi?t:t===Zi?n:lo(n,t)}function gn(n){return((n&255)<<16)+(n&65280)+(n>>16&255)}const uu={getGlobalAlpha(n){if(n)return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha;let t=this.alpha,e=this.parent;for(;e;)t*=e.alpha,e=e.parent;return t},getGlobalTransform(n,t){if(t)return n.copyFrom(this.worldTransform);this.updateLocalTransform();const e=mi(this,pt.get().identity());return n.appendFrom(this.localTransform,e),pt.return(e),n},getGlobalTint(n){if(n)return this.renderGroup?gn(this.renderGroup.worldColor):this.parentRenderGroup?gn(Qi(this.localColor,this.parentRenderGroup.worldColor)):this.tint;let t=this.localColor,e=this.parent;for(;e;)t=Qi(t,e.localColor),e=e.parent;return gn(t)}};let tr=0;const Ji=500;function tt(...n){tr!==Ji&&(tr++,tr===Ji?console.warn("PixiJS Warning: too many warnings, no more warnings will be reported to the console by PixiJS."):console.warn("PixiJS Warning: ",...n))}function uo(n,t,e){return t.clear(),e||(e=D.IDENTITY),co(n,t,e,n,!0),t.isValid||t.set(0,0,0,0),t}function co(n,t,e,r,i){var l,u;let s;if(i)s=pt.get(),s=e.copyTo(s);else{if(!n.visible||!n.measurable)return;n.updateLocalTransform();const c=n.localTransform;s=pt.get(),s.appendFrom(c,e)}const o=t,a=!!n.effects.length;if(a&&(t=ve.get().clear()),n.boundsArea)t.addRect(n.boundsArea,s);else{n.renderPipeId&&(t.matrix=s,t.addBounds(n.bounds));const c=n.children;for(let h=0;h<c.length;h++)co(c[h],t,s,r,!1)}if(a){for(let c=0;c<n.effects.length;c++)(u=(l=n.effects[c]).addLocalBounds)==null||u.call(l,t,r);o.addBounds(t,D.IDENTITY),ve.return(t)}pt.return(s)}function ho(n,t){const e=n.children;for(let r=0;r<e.length;r++){const i=e[r],s=i.uid,o=(i._didViewChangeTick&65535)<<16|i._didContainerChangeTick&65535,a=t.index;(t.data[a]!==s||t.data[a+1]!==o)&&(t.data[t.index]=s,t.data[t.index+1]=o,t.didChange=!0),t.index=a+2,i.children.length&&ho(i,t)}return t.didChange}const cu=new D,hu={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(n,t){const e=Math.sign(this.scale.x)||1;t!==0?this.scale.x=n/t*e:this.scale.x=e},_setHeight(n,t){const e=Math.sign(this.scale.y)||1;t!==0?this.scale.y=n/t*e:this.scale.y=e},getLocalBounds(){this._localBoundsCacheData||(this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Ot});const n=this._localBoundsCacheData;return n.index=1,n.didChange=!1,n.data[0]!==this._didViewChangeTick&&(n.didChange=!0,n.data[0]=this._didViewChangeTick),ho(this,n),n.didChange&&uo(this,n.localBounds,cu),n.localBounds},getBounds(n,t){return oo(this,n,t||new Ot)}},fu={_onRender:null,set onRender(n){const t=this.renderGroup||this.parentRenderGroup;if(!n){this._onRender&&(t==null||t.removeOnRender(this)),this._onRender=null;return}this._onRender||t==null||t.addOnRender(this),this._onRender=n},get onRender(){return this._onRender}},du={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(n){this._zIndex!==n&&(this._zIndex=n,this.depthOfChildModified())},depthOfChildModified(){this.parent&&(this.parent.sortableChildren=!0,this.parent.sortDirty=!0),this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0)},sortChildren(){this.sortDirty&&(this.sortDirty=!1,this.children.sort(pu))}};function pu(n,t){return n._zIndex-t._zIndex}const mu={getGlobalPosition(n=new at,t=!1){return this.parent?this.parent.toGlobal(this._position,n,t):(n.x=this._position.x,n.y=this._position.y),n},toGlobal(n,t,e=!1){const r=this.getGlobalTransform(pt.get(),e);return t=r.apply(n,t),pt.return(r),t},toLocal(n,t,e,r){t&&(n=t.toGlobal(n,e,r));const i=this.getGlobalTransform(pt.get(),r);return e=i.applyInverse(n,e),pt.return(i),e}};class fo{constructor(){this.uid=rt("instructionSet"),this.instructions=[],this.instructionSize=0,this.renderables=[],this.gcTick=0}reset(){this.instructionSize=0}add(t){this.instructions[this.instructionSize++]=t}log(){this.instructions.length=this.instructionSize,console.table(this.instructions,["type","action"])}}let gu=0;class xu{constructor(t){this._poolKeyHash=Object.create(null),this._texturePool={},this.textureOptions=t||{},this.enableFullScreen=!1}createTexture(t,e,r){const i=new vt({...this.textureOptions,width:t,height:e,resolution:1,antialias:r,autoGarbageCollect:!0});return new O({source:i,label:`texturePool_${gu++}`})}getOptimalTexture(t,e,r=1,i){let s=Math.ceil(t*r-1e-6),o=Math.ceil(e*r-1e-6);s=zn(s),o=zn(o);const a=(s<<17)+(o<<1)+(i?1:0);this._texturePool[a]||(this._texturePool[a]=[]);let l=this._texturePool[a].pop();return l||(l=this.createTexture(s,o,i)),l.source._resolution=r,l.source.width=s/r,l.source.height=o/r,l.source.pixelWidth=s,l.source.pixelHeight=o,l.frame.x=0,l.frame.y=0,l.frame.width=t,l.frame.height=e,l.updateUvs(),this._poolKeyHash[l.uid]=a,l}getSameSizeTexture(t,e=!1){const r=t.source;return this.getOptimalTexture(t.width,t.height,r._resolution,e)}returnTexture(t){const e=this._poolKeyHash[t.uid];this._texturePool[e].push(t)}clear(t){if(t=t!==!1,t)for(const e in this._texturePool){const r=this._texturePool[e];if(r)for(let i=0;i<r.length;i++)r[i].destroy(!0)}this._texturePool={}}}const bt=new xu;class vu{constructor(){this.renderPipeId="renderGroup",this.root=null,this.canBundle=!1,this.renderGroupParent=null,this.renderGroupChildren=[],this.worldTransform=new D,this.worldColorAlpha=4294967295,this.worldColor=16777215,this.worldAlpha=1,this.childrenToUpdate=Object.create(null),this.updateTick=0,this.gcTick=0,this.childrenRenderablesToUpdate={list:[],index:0},this.structureDidChange=!0,this.instructionSet=new fo,this._onRenderContainers=[],this.textureNeedsUpdate=!0,this.isCachedAsTexture=!1,this._matrixDirty=7}init(t){this.root=t,t._onRender&&this.addOnRender(t),t.didChange=!0;const e=t.children;for(let r=0;r<e.length;r++){const i=e[r];i._updateFlags=15,this.addChild(i)}}enableCacheAsTexture(t={}){this.textureOptions=t,this.isCachedAsTexture=!0,this.textureNeedsUpdate=!0}disableCacheAsTexture(){this.isCachedAsTexture=!1,this.texture&&(bt.returnTexture(this.texture),this.texture=null)}updateCacheTexture(){this.textureNeedsUpdate=!0}reset(){this.renderGroupChildren.length=0;for(const t in this.childrenToUpdate){const e=this.childrenToUpdate[t];e.list.fill(null),e.index=0}this.childrenRenderablesToUpdate.index=0,this.childrenRenderablesToUpdate.list.fill(null),this.root=null,this.updateTick=0,this.structureDidChange=!0,this._onRenderContainers.length=0,this.renderGroupParent=null,this.disableCacheAsTexture()}get localTransform(){return this.root.localTransform}addRenderGroupChild(t){t.renderGroupParent&&t.renderGroupParent._removeRenderGroupChild(t),t.renderGroupParent=this,this.renderGroupChildren.push(t)}_removeRenderGroupChild(t){const e=this.renderGroupChildren.indexOf(t);e>-1&&this.renderGroupChildren.splice(e,1),t.renderGroupParent=null}addChild(t){if(this.structureDidChange=!0,t.parentRenderGroup=this,t.updateTick=-1,t.parent===this.root?t.relativeRenderGroupDepth=1:t.relativeRenderGroupDepth=t.parent.relativeRenderGroupDepth+1,t.didChange=!0,this.onChildUpdate(t),t.renderGroup){this.addRenderGroupChild(t.renderGroup);return}t._onRender&&this.addOnRender(t);const e=t.children;for(let r=0;r<e.length;r++)this.addChild(e[r])}removeChild(t){if(this.structureDidChange=!0,t._onRender&&(t.renderGroup||this.removeOnRender(t)),t.parentRenderGroup=null,t.renderGroup){this._removeRenderGroupChild(t.renderGroup);return}const e=t.children;for(let r=0;r<e.length;r++)this.removeChild(e[r])}removeChildren(t){for(let e=0;e<t.length;e++)this.removeChild(t[e])}onChildUpdate(t){let e=this.childrenToUpdate[t.relativeRenderGroupDepth];e||(e=this.childrenToUpdate[t.relativeRenderGroupDepth]={index:0,list:[]}),e.list[e.index++]=t}updateRenderable(t){t.globalDisplayStatus<7||(this.instructionSet.renderPipes[t.renderPipeId].updateRenderable(t),t.didViewUpdate=!1)}onChildViewUpdate(t){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=t}get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}addOnRender(t){this._onRenderContainers.push(t)}removeOnRender(t){this._onRenderContainers.splice(this._onRenderContainers.indexOf(t),1)}runOnRender(){for(let t=0;t<this._onRenderContainers.length;t++)this._onRenderContainers[t]._onRender()}destroy(){this.disableCacheAsTexture(),this.renderGroupParent=null,this.root=null,this.childrenRenderablesToUpdate=null,this.childrenToUpdate=null,this.renderGroupChildren=null,this._onRenderContainers=null,this.instructionSet=null}getChildren(t=[]){const e=this.root.children;for(let r=0;r<e.length;r++)this._getChildren(e[r],t);return t}_getChildren(t,e=[]){if(e.push(t),t.renderGroup)return e;const r=t.children;for(let i=0;i<r.length;i++)this._getChildren(r[i],e);return e}invalidateMatrices(){this._matrixDirty=7}get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new D),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new D),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}get inverseParentTextureTransform(){if(!(this._matrixDirty&4))return this._inverseParentTextureTransform;this._matrixDirty&=-5;const t=this._parentCacheAsTextureRenderGroup;return t?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new D),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(t.inverseWorldTransform).translate(-t._textureBounds.x,-t._textureBounds.y)):this.worldTransform}get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}}function yu(n,t,e={}){for(const r in t)!e[r]&&t[r]!==void 0&&(n[r]=t[r])}const er=new et(null),nr=new et(null),rr=new et(null,1,1),ts=1,_u=2,ir=4;class J extends ut{constructor(t={}){var e,r;super(),this.uid=rt("renderable"),this._updateFlags=15,this.renderGroup=null,this.parentRenderGroup=null,this.parentRenderGroupIndex=0,this.didChange=!1,this.didViewUpdate=!1,this.relativeRenderGroupDepth=0,this.children=[],this.parent=null,this.includeInBuild=!0,this.measurable=!0,this.isSimple=!0,this.updateTick=-1,this.localTransform=new D,this.relativeGroupTransform=new D,this.groupTransform=this.relativeGroupTransform,this.destroyed=!1,this._position=new et(this,0,0),this._scale=rr,this._pivot=nr,this._skew=er,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._rotation=0,this.localColor=16777215,this.localAlpha=1,this.groupAlpha=1,this.groupColor=16777215,this.groupColorAlpha=4294967295,this.localBlendMode="inherit",this.groupBlendMode="normal",this.localDisplayStatus=7,this.globalDisplayStatus=7,this._didContainerChangeTick=0,this._didViewChangeTick=0,this._didLocalTransformChangeId=-1,this.effects=[],yu(this,t,{children:!0,parent:!0,effects:!0}),(e=t.children)==null||e.forEach(i=>this.addChild(i)),(r=t.parent)==null||r.addChild(this)}static mixin(t){Object.defineProperties(J.prototype,Object.getOwnPropertyDescriptors(t))}set _didChangeId(t){this._didViewChangeTick=t>>12&4095,this._didContainerChangeTick=t&4095}get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}addChild(...t){if(this.allowChildren||F(N,"addChild: Only Containers will be allowed to add children in v8.0.0"),t.length>1){for(let i=0;i<t.length;i++)this.addChild(t[i]);return t[0]}const e=t[0],r=this.renderGroup||this.parentRenderGroup;return e.parent===this?(this.children.splice(this.children.indexOf(e),1),this.children.push(e),r&&(r.structureDidChange=!0),e):(e.parent&&e.parent.removeChild(e),this.children.push(e),this.sortableChildren&&(this.sortDirty=!0),e.parent=this,e.didChange=!0,e._updateFlags=15,r&&r.addChild(e),this.emit("childAdded",e,this,this.children.length-1),e.emit("added",this),this._didViewChangeTick++,e._zIndex!==0&&e.depthOfChildModified(),e)}removeChild(...t){if(t.length>1){for(let i=0;i<t.length;i++)this.removeChild(t[i]);return t[0]}const e=t[0],r=this.children.indexOf(e);return r>-1&&(this._didViewChangeTick++,this.children.splice(r,1),this.renderGroup?this.renderGroup.removeChild(e):this.parentRenderGroup&&this.parentRenderGroup.removeChild(e),e.parent=null,this.emit("childRemoved",e,this,r),e.emit("removed",this)),e}_onUpdate(t){t&&t===this._skew&&this._updateSkew(),this._didContainerChangeTick++,!this.didChange&&(this.didChange=!0,this.parentRenderGroup&&this.parentRenderGroup.onChildUpdate(this))}set isRenderGroup(t){!!this.renderGroup!==t&&(t?this.enableRenderGroup():this.disableRenderGroup())}get isRenderGroup(){return!!this.renderGroup}enableRenderGroup(){if(this.renderGroup)return;const t=this.parentRenderGroup;t==null||t.removeChild(this),this.renderGroup=kt.get(vu,this),this.groupTransform=D.IDENTITY,t==null||t.addChild(this),this._updateIsSimple()}disableRenderGroup(){if(!this.renderGroup)return;const t=this.parentRenderGroup;t==null||t.removeChild(this),kt.return(this.renderGroup),this.renderGroup=null,this.groupTransform=this.relativeGroupTransform,t==null||t.addChild(this),this._updateIsSimple()}_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}get worldTransform(){return this._worldTransform||(this._worldTransform=new D),this.renderGroup?this._worldTransform.copyFrom(this.renderGroup.worldTransform):this.parentRenderGroup&&this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform),this._worldTransform}get x(){return this._position.x}set x(t){this._position.x=t}get y(){return this._position.y}set y(t){this._position.y=t}get position(){return this._position}set position(t){this._position.copyFrom(t)}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this._skew))}get angle(){return this.rotation*Ul}set angle(t){this.rotation=t*ge}get pivot(){return this._pivot===nr&&(this._pivot=new et(this,0,0)),this._pivot}set pivot(t){this._pivot===nr&&(this._pivot=new et(this,0,0)),typeof t=="number"?this._pivot.set(t):this._pivot.copyFrom(t)}get skew(){return this._skew===er&&(this._skew=new et(this,0,0)),this._skew}set skew(t){this._skew===er&&(this._skew=new et(this,0,0)),this._skew.copyFrom(t)}get scale(){return this._scale===rr&&(this._scale=new et(this,1,1)),this._scale}set scale(t){this._scale===rr&&(this._scale=new et(this,0,0)),typeof t=="number"?this._scale.set(t):this._scale.copyFrom(t)}get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}set width(t){const e=this.getLocalBounds().width;this._setWidth(t,e)}get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}set height(t){const e=this.getLocalBounds().height;this._setHeight(t,e)}getSize(t){t||(t={});const e=this.getLocalBounds();return t.width=Math.abs(this.scale.x*e.width),t.height=Math.abs(this.scale.y*e.height),t}setSize(t,e){const r=this.getLocalBounds();typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,r.width),e!==void 0&&this._setHeight(e,r.height)}_updateSkew(){const t=this._rotation,e=this._skew;this._cx=Math.cos(t+e._y),this._sx=Math.sin(t+e._y),this._cy=-Math.sin(t-e._x),this._sy=Math.cos(t-e._x)}updateTransform(t){return this.position.set(typeof t.x=="number"?t.x:this.position.x,typeof t.y=="number"?t.y:this.position.y),this.scale.set(typeof t.scaleX=="number"?t.scaleX||1:this.scale.x,typeof t.scaleY=="number"?t.scaleY||1:this.scale.y),this.rotation=typeof t.rotation=="number"?t.rotation:this.rotation,this.skew.set(typeof t.skewX=="number"?t.skewX:this.skew.x,typeof t.skewY=="number"?t.skewY:this.skew.y),this.pivot.set(typeof t.pivotX=="number"?t.pivotX:this.pivot.x,typeof t.pivotY=="number"?t.pivotY:this.pivot.y),this}setFromMatrix(t){t.decompose(this)}updateLocalTransform(){const t=this._didContainerChangeTick;if(this._didLocalTransformChangeId===t)return;this._didLocalTransformChangeId=t;const e=this.localTransform,r=this._scale,i=this._pivot,s=this._position,o=r._x,a=r._y,l=i._x,u=i._y;e.a=this._cx*o,e.b=this._sx*o,e.c=this._cy*a,e.d=this._sy*a,e.tx=s._x-(l*e.a+u*e.c),e.ty=s._y-(l*e.b+u*e.d)}set alpha(t){t!==this.localAlpha&&(this.localAlpha=t,this._updateFlags|=ts,this._onUpdate())}get alpha(){return this.localAlpha}set tint(t){const r=G.shared.setValue(t??16777215).toBgrNumber();r!==this.localColor&&(this.localColor=r,this._updateFlags|=ts,this._onUpdate())}get tint(){return gn(this.localColor)}set blendMode(t){this.localBlendMode!==t&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=_u,this.localBlendMode=t,this._onUpdate())}get blendMode(){return this.localBlendMode}get visible(){return!!(this.localDisplayStatus&2)}set visible(t){const e=t?2:0;(this.localDisplayStatus&2)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=ir,this.localDisplayStatus^=2,this._onUpdate())}get culled(){return!(this.localDisplayStatus&4)}set culled(t){const e=t?0:4;(this.localDisplayStatus&4)!==e&&(this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._updateFlags|=ir,this.localDisplayStatus^=4,this._onUpdate())}get renderable(){return!!(this.localDisplayStatus&1)}set renderable(t){const e=t?1:0;(this.localDisplayStatus&1)!==e&&(this._updateFlags|=ir,this.localDisplayStatus^=1,this.parentRenderGroup&&(this.parentRenderGroup.structureDidChange=!0),this._onUpdate())}get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}destroy(t=!1){var i;if(this.destroyed)return;this.destroyed=!0;let e;if(this.children.length&&(e=this.removeChildren(0,this.children.length)),this.removeFromParent(),this.parent=null,this._maskEffect=null,this._filterEffect=null,this.effects=null,this._position=null,this._scale=null,this._pivot=null,this._skew=null,this.emit("destroyed",this),this.removeAllListeners(),(typeof t=="boolean"?t:t==null?void 0:t.children)&&e)for(let s=0;s<e.length;++s)e[s].destroy(t);(i=this.renderGroup)==null||i.destroy(),this.renderGroup=null}}J.mixin(su);J.mixin(mu);J.mixin(fu);J.mixin(hu);J.mixin(au);J.mixin(lu);J.mixin(du);J.mixin(eu);J.mixin(ru);J.mixin(uu);class Gn extends J{constructor(){super(...arguments),this.canBundle=!0,this.allowChildren=!1,this._roundPixels=0,this._lastUsed=-1,this._bounds=new Ot(0,1,0,0),this._boundsDirty=!0}get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}get roundPixels(){return!!this._roundPixels}set roundPixels(t){this._roundPixels=t?1:0}containsPoint(t){const e=this.bounds,{x:r,y:i}=t;return r>=e.minX&&r<=e.maxX&&i>=e.minY&&i<=e.maxY}onViewUpdate(){if(this._didViewChangeTick++,this._boundsDirty=!0,this.didViewUpdate)return;this.didViewUpdate=!0;const t=this.renderGroup||this.parentRenderGroup;t&&t.onChildViewUpdate(this)}destroy(t){super.destroy(t),this._bounds=null}}class At extends Gn{constructor(t=O.EMPTY){t instanceof O&&(t={texture:t});const{texture:e=O.EMPTY,anchor:r,roundPixels:i,width:s,height:o,...a}=t;super({label:"Sprite",...a}),this.renderPipeId="sprite",this.batched=!0,this._visualBounds={minX:0,maxX:1,minY:0,maxY:0},this._anchor=new et({_onUpdate:()=>{this.onViewUpdate()}}),r?this.anchor=r:e.defaultAnchor&&(this.anchor=e.defaultAnchor),this.texture=e,this.allowChildren=!1,this.roundPixels=i??!1,s!==void 0&&(this.width=s),o!==void 0&&(this.height=o)}static from(t,e=!1){return t instanceof O?new At(t):new At(O.from(t,e))}set texture(t){t||(t=O.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this._width&&this._setWidth(this._width,this._texture.orig.width),this._height&&this._setHeight(this._height,this._texture.orig.height),this.onViewUpdate())}get texture(){return this._texture}get visualBounds(){return Xl(this._visualBounds,this._anchor,this._texture,0),this._visualBounds}get sourceBounds(){return F("8.6.1","Sprite.sourceBounds is deprecated, use visualBounds instead."),this.visualBounds}updateBounds(){const t=this._anchor,e=this._texture,r=this._bounds,{width:i,height:s}=e.orig;r.minX=-t._x*i,r.maxX=r.minX+i,r.minY=-t._y*s,r.maxY=r.minY+s}destroy(t=!1){if(super.destroy(t),typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(r)}this._texture=null,this._visualBounds=null,this._bounds=null,this._anchor=null}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this._setWidth(t,this._texture.orig.width),this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this._setHeight(t,this._texture.orig.height),this._height=t}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this._texture.orig.width,t.height=Math.abs(this.scale.y)*this._texture.orig.height,t}setSize(t,e){typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,this._texture.orig.width),e!==void 0&&this._setHeight(e,this._texture.orig.height)}}const bu=new Ot;function po(n,t,e){const r=bu;n.measurable=!0,oo(n,e,r),t.addBoundsMask(r),n.measurable=!1}function mo(n,t,e){const r=ve.get();n.measurable=!0;const i=pt.get().identity(),s=go(n,e,i);uo(n,r,s),n.measurable=!1,t.addBoundsMask(r),pt.return(i),ve.return(r)}function go(n,t,e){return n?(n!==t&&(go(n.parent,t,e),n.updateLocalTransform(),e.append(n.localTransform)),e):(tt("Mask bounds, renderable is not inside the root container"),e)}class xo{constructor(t){this.priority=0,this.inverse=!1,this.pipe="alphaMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.renderMaskToTexture=!(t instanceof At),this.mask.renderable=this.renderMaskToTexture,this.mask.includeInBuild=!this.renderMaskToTexture,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask=null}addBounds(t,e){this.inverse||po(this.mask,t,e)}addLocalBounds(t,e){mo(this.mask,t,e)}containsPoint(t,e){const r=this.mask;return e(r,t)}destroy(){this.reset()}static test(t){return t instanceof At}}xo.extension=M.MaskEffect;class vo{constructor(t){this.priority=0,this.pipe="colorMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t}destroy(){}static test(t){return typeof t=="number"}}vo.extension=M.MaskEffect;class yo{constructor(t){this.priority=0,this.pipe="stencilMask",t!=null&&t.mask&&this.init(t.mask)}init(t){this.mask=t,this.mask.includeInBuild=!1,this.mask.measurable=!1}reset(){this.mask.measurable=!0,this.mask.includeInBuild=!0,this.mask=null}addBounds(t,e){po(this.mask,t,e)}addLocalBounds(t,e){mo(this.mask,t,e)}containsPoint(t,e){const r=this.mask;return e(r,t)}destroy(){this.reset()}static test(t){return t instanceof J}}yo.extension=M.MaskEffect;const Su={createCanvas:(n,t)=>{const e=document.createElement("canvas");return e.width=n,e.height=t,e},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>document.baseURI??window.location.href,getFontFaceSet:()=>document.fonts,fetch:(n,t)=>fetch(n,t),parseXML:n=>new DOMParser().parseFromString(n,"text/xml")};let es=Su;const j={get(){return es},set(n){es=n}};class gi extends vt{constructor(t){t.resource||(t.resource=j.get().createCanvas()),t.width||(t.width=t.resource.width,t.autoDensity||(t.width/=t.resolution)),t.height||(t.height=t.resource.height,t.autoDensity||(t.height/=t.resolution)),super(t),this.uploadMethodId="image",this.autoDensity=t.autoDensity,this.resizeCanvas(),this.transparent=!!t.transparent}resizeCanvas(){this.autoDensity&&(this.resource.style.width=`${this.width}px`,this.resource.style.height=`${this.height}px`),(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight)&&(this.resource.width=this.pixelWidth,this.resource.height=this.pixelHeight)}resize(t=this.width,e=this.height,r=this._resolution){const i=super.resize(t,e,r);return i&&this.resizeCanvas(),i}static test(t){return globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&t instanceof OffscreenCanvas}get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}}gi.extension=M.TextureSource;class re extends vt{constructor(t){if(t.resource&&globalThis.HTMLImageElement&&t.resource instanceof HTMLImageElement){const e=j.get().createCanvas(t.resource.width,t.resource.height);e.getContext("2d").drawImage(t.resource,0,0,t.resource.width,t.resource.height),t.resource=e,tt("ImageSource: Image element passed, converting to canvas. Use CanvasSource instead.")}super(t),this.uploadMethodId="image",this.autoGarbageCollect=!0}static test(t){return globalThis.HTMLImageElement&&t instanceof HTMLImageElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap||globalThis.VideoFrame&&t instanceof VideoFrame}}re.extension=M.TextureSource;var In=(n=>(n[n.INTERACTION=50]="INTERACTION",n[n.HIGH=25]="HIGH",n[n.NORMAL=0]="NORMAL",n[n.LOW=-25]="LOW",n[n.UTILITY=-50]="UTILITY",n))(In||{});class sr{constructor(t,e=null,r=0,i=!1){this.next=null,this.previous=null,this._destroyed=!1,this._fn=t,this._context=e,this.priority=r,this._once=i}match(t,e=null){return this._fn===t&&this._context===e}emit(t){this._fn&&(this._context?this._fn.call(this._context,t):this._fn(t));const e=this.next;return this._once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this._fn=null,this._context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const _o=class yt{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new sr(null,null,1/0),this.deltaMS=1/yt.targetFPMS,this.elapsedMS=1/yt.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,r=In.NORMAL){return this._addListener(new sr(t,e,r))}addOnce(t,e,r=In.NORMAL){return this._addListener(new sr(t,e,r,!0))}_addListener(t){let e=this._head.next,r=this._head;if(!e)t.connect(r);else{for(;e;){if(t.priority>e.priority){t.connect(r);break}r=e,e=e.next}t.previous||t.connect(r)}return this._startIfPossible(),this}remove(t,e){let r=this._head.next;for(;r;)r.match(t,e)?r=r.destroy():r=r.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const s=t-this._lastFrame|0;if(s<this._minElapsedMS)return;this._lastFrame=t-s%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*yt.targetFPMS;const r=this._head;let i=r.next;for(;i;)i=i.emit(this);r.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),r=Math.min(Math.max(0,e)/1e3,yt.targetFPMS);this._maxElapsedMS=1/r}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!yt._shared){const t=yt._shared=new yt;t.autoStart=!0,t._protected=!0}return yt._shared}static get system(){if(!yt._system){const t=yt._system=new yt;t.autoStart=!0,t._protected=!0}return yt._system}};_o.targetFPMS=.06;let St=_o,or;async function bo(){return or??(or=(async()=>{var o;const t=document.createElement("canvas").getContext("webgl");if(!t)return"premultiply-alpha-on-upload";const e=await new Promise(a=>{const l=document.createElement("video");l.onloadeddata=()=>a(l),l.onerror=()=>a(null),l.autoplay=!1,l.crossOrigin="anonymous",l.preload="auto",l.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",l.load()});if(!e)return"premultiply-alpha-on-upload";const r=t.createTexture();t.bindTexture(t.TEXTURE_2D,r);const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,r,0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e);const s=new Uint8Array(4);return t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,s),t.deleteFramebuffer(i),t.deleteTexture(r),(o=t.getExtension("WEBGL_lose_context"))==null||o.loseContext(),s[0]<=s[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()),or}const Nn=class So extends vt{constructor(t){super(t),this.isReady=!1,this.uploadMethodId="video",t={...So.defaultOptions,...t},this._autoUpdate=!0,this._isConnectedToTicker=!1,this._updateFPS=t.updateFPS||0,this._msToNextUpdate=0,this.autoPlay=t.autoPlay!==!1,this.alphaMode=t.alphaMode??"premultiply-alpha-on-upload",this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this),this._videoFrameRequestCallbackHandle=null,this._load=null,this._resolve=null,this._reject=null,this._onCanPlay=this._onCanPlay.bind(this),this._onCanPlayThrough=this._onCanPlayThrough.bind(this),this._onError=this._onError.bind(this),this._onPlayStart=this._onPlayStart.bind(this),this._onPlayStop=this._onPlayStop.bind(this),this._onSeeked=this._onSeeked.bind(this),t.autoLoad!==!1&&this.load()}updateFrame(){if(!this.destroyed){if(this._updateFPS){const t=St.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-t)}(!this._updateFPS||this._msToNextUpdate<=0)&&(this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0),this.isValid&&this.update()}}_videoFrameRequestCallback(){this.updateFrame(),this.destroyed?this._videoFrameRequestCallbackHandle=null:this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}async load(){if(this._load)return this._load;const t=this.resource,e=this.options;return(t.readyState===t.HAVE_ENOUGH_DATA||t.readyState===t.HAVE_FUTURE_DATA)&&t.width&&t.height&&(t.complete=!0),t.addEventListener("play",this._onPlayStart),t.addEventListener("pause",this._onPlayStop),t.addEventListener("seeked",this._onSeeked),this._isSourceReady()?this._mediaReady():(e.preload||t.addEventListener("canplay",this._onCanPlay),t.addEventListener("canplaythrough",this._onCanPlayThrough),t.addEventListener("error",this._onError,!0)),this.alphaMode=await bo(),this._load=new Promise((r,i)=>{this.isValid?r(this):(this._resolve=r,this._reject=i,e.preloadTimeoutMs!==void 0&&(this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${e.preloadTimeoutMs}ms`))})),t.load())}),this._load}_onError(t){this.resource.removeEventListener("error",this._onError,!0),this.emit("error",t),this._reject&&(this._reject(t),this._reject=null,this._resolve=null)}_isSourcePlaying(){const t=this.resource;return!t.paused&&!t.ended}_isSourceReady(){return this.resource.readyState>2}_onPlayStart(){this.isValid||this._mediaReady(),this._configureAutoUpdate()}_onPlayStop(){this._configureAutoUpdate()}_onSeeked(){this._autoUpdate&&!this._isSourcePlaying()&&(this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0)}_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay),this._mediaReady()}_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay),this._preloadTimeout&&(clearTimeout(this._preloadTimeout),this._preloadTimeout=void 0),this._mediaReady()}_mediaReady(){const t=this.resource;this.isValid&&(this.isReady=!0,this.resize(t.videoWidth,t.videoHeight)),this._msToNextUpdate=0,this.updateFrame(),this._msToNextUpdate=0,this._resolve&&(this._resolve(this),this._resolve=null,this._reject=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.resource.play()}destroy(){this._configureAutoUpdate();const t=this.resource;t&&(t.removeEventListener("play",this._onPlayStart),t.removeEventListener("pause",this._onPlayStop),t.removeEventListener("seeked",this._onSeeked),t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlayThrough),t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),super.destroy()}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,this._configureAutoUpdate())}get updateFPS(){return this._updateFPS}set updateFPS(t){t!==this._updateFPS&&(this._updateFPS=t,this._configureAutoUpdate())}_configureAutoUpdate(){this._autoUpdate&&this._isSourcePlaying()?!this._updateFPS&&this.resource.requestVideoFrameCallback?(this._isConnectedToTicker&&(St.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0),this._videoFrameRequestCallbackHandle===null&&(this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback))):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker||(St.shared.add(this.updateFrame,this),this._isConnectedToTicker=!0,this._msToNextUpdate=0)):(this._videoFrameRequestCallbackHandle!==null&&(this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),this._videoFrameRequestCallbackHandle=null),this._isConnectedToTicker&&(St.shared.remove(this.updateFrame,this),this._isConnectedToTicker=!1,this._msToNextUpdate=0))}static test(t){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement}};Nn.extension=M.TextureSource;Nn.defaultOptions={...vt.defaultOptions,autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1};Nn.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};let xn=Nn;const Pt=(n,t,e=!1)=>(Array.isArray(n)||(n=[n]),t?n.map(r=>typeof r=="string"||e?t(r):r):n);class Cu{constructor(){this._parsers=[],this._cache=new Map,this._cacheMap=new Map}reset(){this._cacheMap.clear(),this._cache.clear()}has(t){return this._cache.has(t)}get(t){const e=this._cache.get(t);return e||tt(`[Assets] Asset id ${t} was not found in the Cache`),e}set(t,e){const r=Pt(t);let i;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.test(e)){i=u.getCacheableAssets(r,e);break}}const s=new Map(Object.entries(i||{}));i||r.forEach(l=>{s.set(l,e)});const o=[...s.keys()],a={cacheKeys:o,keys:r};r.forEach(l=>{this._cacheMap.set(l,a)}),o.forEach(l=>{const u=i?i[l]:e;this._cache.has(l)&&this._cache.get(l)!==u&&tt("[Cache] already has key:",l),this._cache.set(l,s.get(l))})}remove(t){if(!this._cacheMap.has(t)){tt(`[Assets] Asset id ${t} was not found in the Cache`);return}const e=this._cacheMap.get(t);e.cacheKeys.forEach(i=>{this._cache.delete(i)}),e.keys.forEach(i=>{this._cacheMap.delete(i)})}get parsers(){return this._parsers}}const K=new Cu,Ur=[];ft.handleByList(M.TextureSource,Ur);function Co(n={}){const t=n&&n.resource,e=t?n.resource:n,r=t?n:{resource:n};for(let i=0;i<Ur.length;i++){const s=Ur[i];if(s.test(e))return new s(r)}throw new Error(`Could not find a source type for resource: ${r.resource}`)}function wu(n={},t=!1){const e=n&&n.resource,r=e?n.resource:n,i=e?n:{resource:n};if(!t&&K.has(r))return K.get(r);const s=new O({source:Co(i)});return s.on("destroy",()=>{K.has(r)&&K.remove(r)}),t||K.set(r,s),s}function Au(n,t=!1){return typeof n=="string"?K.get(n):n instanceof vt?new O({source:n}):wu(n,t)}O.from=Au;vt.from=Co;ft.add(xo,vo,yo,xn,re,gi,di);var Ut=(n=>(n[n.Low=0]="Low",n[n.Normal=1]="Normal",n[n.High=2]="High",n))(Ut||{});function Tt(n){if(typeof n!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(n)}`)}function Te(n){return n.split("?")[0].split("#")[0]}function Tu(n){return n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Pu(n,t,e){return n.replace(new RegExp(Tu(t),"g"),e)}function Fu(n,t){let e="",r=0,i=-1,s=0,o=-1;for(let a=0;a<=n.length;++a){if(a<n.length)o=n.charCodeAt(a);else{if(o===47)break;o=47}if(o===47){if(!(i===a-1||s===1))if(i!==a-1&&s===2){if(e.length<2||r!==2||e.charCodeAt(e.length-1)!==46||e.charCodeAt(e.length-2)!==46){if(e.length>2){const l=e.lastIndexOf("/");if(l!==e.length-1){l===-1?(e="",r=0):(e=e.slice(0,l),r=e.length-1-e.lastIndexOf("/")),i=a,s=0;continue}}else if(e.length===2||e.length===1){e="",r=0,i=a,s=0;continue}}}else e.length>0?e+=`/${n.slice(i+1,a)}`:e=n.slice(i+1,a),r=a-i-1;i=a,s=0}else o===46&&s!==-1?++s:s=-1}return e}const lt={toPosix(n){return Pu(n,"\\","/")},isUrl(n){return/^https?:/.test(this.toPosix(n))},isDataUrl(n){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(n)},isBlobUrl(n){return n.startsWith("blob:")},hasProtocol(n){return/^[^/:]+:/.test(this.toPosix(n))},getProtocol(n){Tt(n),n=this.toPosix(n);const t=/^file:\/\/\//.exec(n);if(t)return t[0];const e=/^[^/:]+:\/{0,2}/.exec(n);return e?e[0]:""},toAbsolute(n,t,e){if(Tt(n),this.isDataUrl(n)||this.isBlobUrl(n))return n;const r=Te(this.toPosix(t??j.get().getBaseUrl())),i=Te(this.toPosix(e??this.rootname(r)));return n=this.toPosix(n),n.startsWith("/")?lt.join(i,n.slice(1)):this.isAbsolute(n)?n:this.join(r,n)},normalize(n){if(Tt(n),n.length===0)return".";if(this.isDataUrl(n)||this.isBlobUrl(n))return n;n=this.toPosix(n);let t="";const e=n.startsWith("/");this.hasProtocol(n)&&(t=this.rootname(n),n=n.slice(t.length));const r=n.endsWith("/");return n=Fu(n),n.length>0&&r&&(n+="/"),e?`/${n}`:t+n},isAbsolute(n){return Tt(n),n=this.toPosix(n),this.hasProtocol(n)?!0:n.startsWith("/")},join(...n){if(n.length===0)return".";let t;for(let e=0;e<n.length;++e){const r=n[e];if(Tt(r),r.length>0)if(t===void 0)t=r;else{const i=n[e-1]??"";this.joinExtensions.includes(this.extname(i).toLowerCase())?t+=`/../${r}`:t+=`/${r}`}}return t===void 0?".":this.normalize(t)},dirname(n){if(Tt(n),n.length===0)return".";n=this.toPosix(n);let t=n.charCodeAt(0);const e=t===47;let r=-1,i=!0;const s=this.getProtocol(n),o=n;n=n.slice(s.length);for(let a=n.length-1;a>=1;--a)if(t=n.charCodeAt(a),t===47){if(!i){r=a;break}}else i=!1;return r===-1?e?"/":this.isUrl(o)?s+n:s:e&&r===1?"//":s+n.slice(0,r)},rootname(n){Tt(n),n=this.toPosix(n);let t="";if(n.startsWith("/")?t="/":t=this.getProtocol(n),this.isUrl(n)){const e=n.indexOf("/",t.length);e!==-1?t=n.slice(0,e):t=n,t.endsWith("/")||(t+="/")}return t},basename(n,t){Tt(n),t&&Tt(t),n=Te(this.toPosix(n));let e=0,r=-1,i=!0,s;if(t!==void 0&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";let o=t.length-1,a=-1;for(s=n.length-1;s>=0;--s){const l=n.charCodeAt(s);if(l===47){if(!i){e=s+1;break}}else a===-1&&(i=!1,a=s+1),o>=0&&(l===t.charCodeAt(o)?--o===-1&&(r=s):(o=-1,r=a))}return e===r?r=a:r===-1&&(r=n.length),n.slice(e,r)}for(s=n.length-1;s>=0;--s)if(n.charCodeAt(s)===47){if(!i){e=s+1;break}}else r===-1&&(i=!1,r=s+1);return r===-1?"":n.slice(e,r)},extname(n){Tt(n),n=Te(this.toPosix(n));let t=-1,e=0,r=-1,i=!0,s=0;for(let o=n.length-1;o>=0;--o){const a=n.charCodeAt(o);if(a===47){if(!i){e=o+1;break}continue}r===-1&&(i=!1,r=o+1),a===46?t===-1?t=o:s!==1&&(s=1):t!==-1&&(s=-1)}return t===-1||r===-1||s===0||s===1&&t===r-1&&t===e+1?"":n.slice(t,r)},parse(n){Tt(n);const t={root:"",dir:"",base:"",ext:"",name:""};if(n.length===0)return t;n=Te(this.toPosix(n));let e=n.charCodeAt(0);const r=this.isAbsolute(n);let i;t.root=this.rootname(n),r||this.hasProtocol(n)?i=1:i=0;let s=-1,o=0,a=-1,l=!0,u=n.length-1,c=0;for(;u>=i;--u){if(e=n.charCodeAt(u),e===47){if(!l){o=u+1;break}continue}a===-1&&(l=!1,a=u+1),e===46?s===-1?s=u:c!==1&&(c=1):s!==-1&&(c=-1)}return s===-1||a===-1||c===0||c===1&&s===a-1&&s===o+1?a!==-1&&(o===0&&r?t.base=t.name=n.slice(1,a):t.base=t.name=n.slice(o,a)):(o===0&&r?(t.name=n.slice(1,s),t.base=n.slice(1,a)):(t.name=n.slice(o,s),t.base=n.slice(o,a)),t.ext=n.slice(s,a)),t.dir=this.dirname(n),t},sep:"/",delimiter:":",joinExtensions:[".html"]};function wo(n,t,e,r,i){const s=t[e];for(let o=0;o<s.length;o++){const a=s[o];e<t.length-1?wo(n.replace(r[e],a),t,e+1,r,i):i.push(n.replace(r[e],a))}}function Mu(n){const t=/\{(.*?)\}/g,e=n.match(t),r=[];if(e){const i=[];e.forEach(s=>{const o=s.substring(1,s.length-1).split(",");i.push(o)}),wo(n,i,0,e,r)}else r.push(n);return r}const On=n=>!Array.isArray(n);class _e{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(t,e)=>`${t}${this._bundleIdConnector}${e}`,extractAssetIdFromBundle:(t,e)=>e.replace(`${t}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles={}}setBundleIdentifier(t){if(this._bundleIdConnector=t.connector??this._bundleIdConnector,this._createBundleAssetId=t.createBundleAssetId??this._createBundleAssetId,this._extractAssetIdFromBundle=t.extractAssetIdFromBundle??this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}prefer(...t){t.forEach(e=>{this._preferredOrder.push(e),e.priority||(e.priority=Object.keys(e.params))}),this._resolverHash={}}set basePath(t){this._basePath=t}get basePath(){return this._basePath}set rootPath(t){this._rootPath=t}get rootPath(){return this._rootPath}get parsers(){return this._parsers}reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap={},this._preferredOrder=[],this._resolverHash={},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles={},this._defaultSearchParams=null}setDefaultSearchParams(t){if(typeof t=="string")this._defaultSearchParams=t;else{const e=t;this._defaultSearchParams=Object.keys(e).map(r=>`${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`).join("&")}}getAlias(t){const{alias:e,src:r}=t;return Pt(e||r,s=>typeof s=="string"?s:Array.isArray(s)?s.map(o=>(o==null?void 0:o.src)??o):s!=null&&s.src?s.src:s,!0)}addManifest(t){this._manifest&&tt("[Resolver] Manifest already exists, this will be overwritten"),this._manifest=t,t.bundles.forEach(e=>{this.addBundle(e.name,e.assets)})}addBundle(t,e){const r=[];let i=e;Array.isArray(e)||(i=Object.entries(e).map(([s,o])=>typeof o=="string"||Array.isArray(o)?{alias:s,src:o}:{alias:s,...o})),i.forEach(s=>{const o=s.src,a=s.alias;let l;if(typeof a=="string"){const u=this._createBundleAssetId(t,a);r.push(u),l=[a,u]}else{const u=a.map(c=>this._createBundleAssetId(t,c));r.push(...u),l=[...a,...u]}this.add({...s,alias:l,src:o})}),this._bundles[t]=r}add(t){const e=[];Array.isArray(t)?e.push(...t):e.push(t);let r;r=s=>{this.hasKey(s)&&tt(`[Resolver] already has key: ${s} overwriting`)},Pt(e).forEach(s=>{const{src:o}=s;let{data:a,format:l,loadParser:u}=s;const c=Pt(o).map(f=>typeof f=="string"?Mu(f):Array.isArray(f)?f:[f]),h=this.getAlias(s);Array.isArray(h)?h.forEach(r):r(h);const d=[];c.forEach(f=>{f.forEach(p=>{let g={};if(typeof p!="object"){g.src=p;for(let m=0;m<this._parsers.length;m++){const x=this._parsers[m];if(x.test(p)){g=x.parse(p);break}}}else a=p.data??a,l=p.format??l,u=p.loadParser??u,g={...g,...p};if(!h)throw new Error(`[Resolver] alias is undefined for this asset: ${g.src}`);g=this._buildResolvedAsset(g,{aliases:h,data:a,format:l,loadParser:u}),d.push(g)})}),h.forEach(f=>{this._assetMap[f]=d})})}resolveBundle(t){const e=On(t);t=Pt(t);const r={};return t.forEach(i=>{const s=this._bundles[i];if(s){const o=this.resolve(s),a={};for(const l in o){const u=o[l];a[this._extractAssetIdFromBundle(i,l)]=u}r[i]=a}}),e?r[t[0]]:r}resolveUrl(t){const e=this.resolve(t);if(typeof t!="string"){const r={};for(const i in e)r[i]=e[i].src;return r}return e.src}resolve(t){const e=On(t);t=Pt(t);const r={};return t.forEach(i=>{if(!this._resolverHash[i])if(this._assetMap[i]){let s=this._assetMap[i];const o=this._getPreferredOrder(s);o==null||o.priority.forEach(a=>{o.params[a].forEach(l=>{const u=s.filter(c=>c[a]?c[a]===l:!1);u.length&&(s=u)})}),this._resolverHash[i]=s[0]}else this._resolverHash[i]=this._buildResolvedAsset({alias:[i],src:i},{});r[i]=this._resolverHash[i]}),e?r[t[0]]:r}hasKey(t){return!!this._assetMap[t]}hasBundle(t){return!!this._bundles[t]}_getPreferredOrder(t){for(let e=0;e<t.length;e++){const r=t[0],i=this._preferredOrder.find(s=>s.params.format.includes(r.format));if(i)return i}return this._preferredOrder[0]}_appendDefaultSearchParams(t){if(!this._defaultSearchParams)return t;const e=/\?/.test(t)?"&":"?";return`${t}${e}${this._defaultSearchParams}`}_buildResolvedAsset(t,e){const{aliases:r,data:i,loadParser:s,format:o}=e;return(this._basePath||this._rootPath)&&(t.src=lt.toAbsolute(t.src,this._basePath,this._rootPath)),t.alias=r??t.alias??[t.src],t.src=this._appendDefaultSearchParams(t.src),t.data={...i||{},...t.data},t.loadParser=s??t.loadParser,t.format=o??t.format??zu(t.src),t}}_e.RETINA_PREFIX=/@([0-9\.]+)x/;function zu(n){return n.split(".").pop().split("?").shift().split("#").shift()}const Br=(n,t)=>{const e=t.split("?")[1];return e&&(n+=`?${e}`),n},Ao=class Re{constructor(t,e){this.linkedSheets=[],this._texture=t instanceof O?t:null,this.textureSource=t.source,this.textures={},this.animations={},this.data=e;const r=parseFloat(e.meta.scale);r?(this.resolution=r,t.source.resolution=this.resolution):this.resolution=t.source._resolution,this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=Re.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let e=t;const r=Re.BATCH_SIZE;for(;e-t<r&&e<this._frameKeys.length;){const i=this._frameKeys[e],s=this._frames[i],o=s.frame;if(o){let a=null,l=null;const u=s.trimmed!==!1&&s.sourceSize?s.sourceSize:s.frame,c=new nt(0,0,Math.floor(u.w)/this.resolution,Math.floor(u.h)/this.resolution);s.rotated?a=new nt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.h)/this.resolution,Math.floor(o.w)/this.resolution):a=new nt(Math.floor(o.x)/this.resolution,Math.floor(o.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution),s.trimmed!==!1&&s.spriteSourceSize&&(l=new nt(Math.floor(s.spriteSourceSize.x)/this.resolution,Math.floor(s.spriteSourceSize.y)/this.resolution,Math.floor(o.w)/this.resolution,Math.floor(o.h)/this.resolution)),this.textures[i]=new O({source:this.textureSource,frame:a,orig:c,trim:l,rotate:s.rotated?2:0,defaultAnchor:s.anchor,defaultBorders:s.borders,label:i.toString()})}e++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let r=0;r<t[e].length;r++){const i=t[e][r];this.animations[e].push(this.textures[i])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*Re.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*Re.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var e;for(const r in this.textures)this.textures[r].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)==null||e.destroy(),this.textureSource.destroy()),this._texture=null,this.textureSource=null,this.linkedSheets=[]}};Ao.BATCH_SIZE=1e3;let ns=Ao;const Iu=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function To(n,t,e){const r={};if(n.forEach(i=>{r[i]=t}),Object.keys(t.textures).forEach(i=>{r[i]=t.textures[i]}),!e){const i=lt.dirname(n[0]);t.linkedSheets.forEach((s,o)=>{const a=To([`${i}/${t.data.meta.related_multi_packs[o]}`],s,!0);Object.assign(r,a)})}return r}const Ou={extension:M.Asset,cache:{test:n=>n instanceof ns,getCacheableAssets:(n,t)=>To(n,t,!1)},resolver:{extension:{type:M.ResolveParser,name:"resolveSpritesheet"},test:n=>{const e=n.split("?")[0].split("."),r=e.pop(),i=e.pop();return r==="json"&&Iu.includes(i)},parse:n=>{var e;const t=n.split(".");return{resolution:parseFloat(((e=_e.RETINA_PREFIX.exec(n))==null?void 0:e[1])??"1"),format:t[t.length-2],src:n}}},loader:{name:"spritesheetLoader",extension:{type:M.LoadParser,priority:Ut.Normal,name:"spritesheetLoader"},async testParse(n,t){return lt.extname(t.src).toLowerCase()===".json"&&!!n.frames},async parse(n,t,e){var u,c;const{texture:r,imageFilename:i}=(t==null?void 0:t.data)??{};let s=lt.dirname(t.src);s&&s.lastIndexOf("/")!==s.length-1&&(s+="/");let o;if(r instanceof O)o=r;else{const h=Br(s+(i??n.meta.image),t.src);o=(await e.load([h]))[h]}const a=new ns(o.source,n);await a.parse();const l=(u=n==null?void 0:n.meta)==null?void 0:u.related_multi_packs;if(Array.isArray(l)){const h=[];for(const f of l){if(typeof f!="string")continue;let p=s+f;(c=t.data)!=null&&c.ignoreMultiPack||(p=Br(p,t.src),h.push(e.load({src:p,data:{ignoreMultiPack:!0}})))}const d=await Promise.all(h);a.linkedSheets=d,d.forEach(f=>{f.linkedSheets=[a].concat(a.linkedSheets.filter(p=>p!==f))})}return a},async unload(n,t,e){await e.unload(n.textureSource._sourceOrigin),n.destroy(!1)}}};ft.add(Ou);const ar=Object.create(null),rs=Object.create(null);function xi(n,t){let e=rs[n];return e===void 0&&(ar[t]===void 0&&(ar[t]=1),rs[n]=e=ar[t]++),e}let se;function Po(){return(!se||se!=null&&se.isContextLost())&&(se=j.get().createCanvas().getContext("webgl",{})),se}let ln;function Ru(){if(!ln){ln="mediump";const n=Po();n&&n.getShaderPrecisionFormat&&(ln=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision?"highp":"mediump")}return ln}function Eu(n,t,e){return t?n:e?(n=n.replace("out vec4 finalColor;",""),`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in varying
        #define finalColor gl_FragColor
        #define texture texture2D
        #endif
        ${n}
        `):`
        
        #ifdef GL_ES // This checks if it is WebGL1
        #define in attribute
        #define out varying
        #endif
        ${n}
        `}function ku(n,t,e){const r=e?t.maxSupportedFragmentPrecision:t.maxSupportedVertexPrecision;if(n.substring(0,9)!=="precision"){let i=e?t.requestedFragmentPrecision:t.requestedVertexPrecision;return i==="highp"&&r!=="highp"&&(i="mediump"),`precision ${i} float;
${n}`}else if(r!=="highp"&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}function Uu(n,t){return t?`#version 300 es
${n}`:n}const Bu={},Lu={};function Du(n,{name:t="pixi-program"},e=!0){t=t.replace(/\s+/g,"-"),t+=e?"-fragment":"-vertex";const r=e?Bu:Lu;return r[t]?(r[t]++,t+=`-${r[t]}`):r[t]=1,n.indexOf("#define SHADER_NAME")!==-1?n:`${`#define SHADER_NAME ${t}`}
${n}`}function Gu(n,t){return t?n.replace("#version 300 es",""):n}const lr={stripVersion:Gu,ensurePrecision:ku,addProgramDefines:Eu,setProgramName:Du,insertVersion:Uu},ur=Object.create(null),Fo=class Lr{constructor(t){t={...Lr.defaultOptions,...t};const e=t.fragment.indexOf("#version 300 es")!==-1,r={stripVersion:e,ensurePrecision:{requestedFragmentPrecision:t.preferredFragmentPrecision,requestedVertexPrecision:t.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:Ru()},setProgramName:{name:t.name},addProgramDefines:e,insertVersion:e};let i=t.fragment,s=t.vertex;Object.keys(lr).forEach(o=>{const a=r[o];i=lr[o](i,a,!0),s=lr[o](s,a,!1)}),this.fragment=i,this.vertex=s,this.transformFeedbackVaryings=t.transformFeedbackVaryings,this._key=xi(`${this.vertex}:${this.fragment}`,"gl-program")}destroy(){this.fragment=null,this.vertex=null,this._attributeData=null,this._uniformData=null,this._uniformBlockData=null,this.transformFeedbackVaryings=null}static from(t){const e=`${t.vertex}:${t.fragment}`;return ur[e]||(ur[e]=new Lr(t)),ur[e]}};Fo.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};let U=Fo;const is={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Nu(n){return is[n]??is.float32}const $u={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function Vu({source:n,entryPoint:t}){const e={},r=n.indexOf(`fn ${t}`);if(r!==-1){const i=n.indexOf("->",r);if(i!==-1){const s=n.substring(r,i),o=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let a;for(;(a=o.exec(s))!==null;){const l=$u[a[3]]??"float32";e[a[2]]={location:parseInt(a[1],10),format:l,stride:Nu(l).stride,offset:0,instance:!1,start:0}}}}return e}function cr(n){var h,d;const t=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g,e=/@group\((\d+)\)/,r=/@binding\((\d+)\)/,i=/var(<[^>]+>)? (\w+)/,s=/:\s*(\w+)/,o=/struct\s+(\w+)\s*{([^}]+)}/g,a=/(\w+)\s*:\s*([\w\<\>]+)/g,l=/struct\s+(\w+)/,u=(h=n.match(t))==null?void 0:h.map(f=>({group:parseInt(f.match(e)[1],10),binding:parseInt(f.match(r)[1],10),name:f.match(i)[2],isUniform:f.match(i)[1]==="<uniform>",type:f.match(s)[1]}));if(!u)return{groups:[],structs:[]};const c=((d=n.match(o))==null?void 0:d.map(f=>{const p=f.match(l)[1],g=f.match(a).reduce((m,x)=>{const[y,v]=x.split(":");return m[y.trim()]=v.trim(),m},{});return g?{name:p,members:g}:null}).filter(({name:f})=>u.some(p=>p.type===f)))??[];return{groups:u,structs:c}}var Ee=(n=>(n[n.VERTEX=1]="VERTEX",n[n.FRAGMENT=2]="FRAGMENT",n[n.COMPUTE=4]="COMPUTE",n))(Ee||{});function Wu({groups:n}){const t=[];for(let e=0;e<n.length;e++){const r=n[e];t[r.group]||(t[r.group]=[]),r.isUniform?t[r.group].push({binding:r.binding,visibility:Ee.VERTEX|Ee.FRAGMENT,buffer:{type:"uniform"}}):r.type==="sampler"?t[r.group].push({binding:r.binding,visibility:Ee.FRAGMENT,sampler:{type:"filtering"}}):r.type==="texture_2d"&&t[r.group].push({binding:r.binding,visibility:Ee.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}return t}function Xu({groups:n}){const t=[];for(let e=0;e<n.length;e++){const r=n[e];t[r.group]||(t[r.group]={}),t[r.group][r.name]=r.binding}return t}function Yu(n,t){const e=new Set,r=new Set,i=[...n.structs,...t.structs].filter(o=>e.has(o.name)?!1:(e.add(o.name),!0)),s=[...n.groups,...t.groups].filter(o=>{const a=`${o.name}-${o.binding}`;return r.has(a)?!1:(r.add(a),!0)});return{structs:i,groups:s}}const hr=Object.create(null);class k{constructor(t){var a,l;this._layoutKey=0,this._attributeLocationsKey=0;const{fragment:e,vertex:r,layout:i,gpuLayout:s,name:o}=t;if(this.name=o,this.fragment=e,this.vertex=r,e.source===r.source){const u=cr(e.source);this.structsAndGroups=u}else{const u=cr(r.source),c=cr(e.source);this.structsAndGroups=Yu(u,c)}this.layout=i??Xu(this.structsAndGroups),this.gpuLayout=s??Wu(this.structsAndGroups),this.autoAssignGlobalUniforms=((a=this.layout[0])==null?void 0:a.globalUniforms)!==void 0,this.autoAssignLocalUniforms=((l=this.layout[1])==null?void 0:l.localUniforms)!==void 0,this._generateProgramKey()}_generateProgramKey(){const{vertex:t,fragment:e}=this,r=t.source+e.source+t.entryPoint+e.entryPoint;this._layoutKey=xi(r,"program")}get attributeData(){return this._attributeData??(this._attributeData=Vu(this.vertex)),this._attributeData}destroy(){this.gpuLayout=null,this.layout=null,this.structsAndGroups=null,this.fragment=null,this.vertex=null}static from(t){const e=`${t.vertex.source}:${t.fragment.source}:${t.fragment.entryPoint}:${t.vertex.entryPoint}`;return hr[e]||(hr[e]=new k(t)),hr[e]}}const Mo=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"],Hu=Mo.reduce((n,t)=>(n[t]=!0,n),{});function ju(n,t){switch(n){case"f32":return 0;case"vec2<f32>":return new Float32Array(2*t);case"vec3<f32>":return new Float32Array(3*t);case"vec4<f32>":return new Float32Array(4*t);case"mat2x2<f32>":return new Float32Array([1,0,0,1]);case"mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const zo=class Io{constructor(t,e){this._touched=0,this.uid=rt("uniform"),this._resourceType="uniformGroup",this._resourceId=rt("resource"),this.isUniformGroup=!0,this._dirtyId=0,this.destroyed=!1,e={...Io.defaultOptions,...e},this.uniformStructures=t;const r={};for(const i in t){const s=t[i];if(s.name=i,s.size=s.size??1,!Hu[s.type])throw new Error(`Uniform type ${s.type} is not supported. Supported uniform types are: ${Mo.join(", ")}`);s.value??(s.value=ju(s.type,s.size)),r[i]=s.value}this.uniforms=r,this._dirtyId=1,this.ubo=e.ubo,this.isStatic=e.isStatic,this._signature=xi(Object.keys(r).map(i=>`${i}-${t[i].type}`).join("-"),"uniform-group")}update(){this._dirtyId++}};zo.defaultOptions={ubo:!1,isStatic:!1};let $n=zo;class vn{constructor(t){this.resources=Object.create(null),this._dirty=!0;let e=0;for(const r in t){const i=t[r];this.setResource(i,e++)}this._updateKey()}_updateKey(){if(!this._dirty)return;this._dirty=!1;const t=[];let e=0;for(const r in this.resources)t[e++]=this.resources[r]._resourceId;this._key=t.join("|")}setResource(t,e){var i,s;const r=this.resources[e];t!==r&&(r&&((i=t.off)==null||i.call(t,"change",this.onResourceChange,this)),(s=t.on)==null||s.call(t,"change",this.onResourceChange,this),this.resources[e]=t,this._dirty=!0)}getResource(t){return this.resources[t]}_touch(t){const e=this.resources;for(const r in e)e[r]._touched=t}destroy(){var e;const t=this.resources;for(const r in t){const i=t[r];(e=i.off)==null||e.call(i,"change",this.onResourceChange,this)}this.resources=null}onResourceChange(t){if(this._dirty=!0,t.destroyed){const e=this.resources;for(const r in e)e[r]===t&&(e[r]=null)}else this._updateKey()}}var Rn=(n=>(n[n.WEBGL=1]="WEBGL",n[n.WEBGPU=2]="WEBGPU",n[n.BOTH=3]="BOTH",n))(Rn||{});class Vn extends ut{constructor(t){super(),this._uniformBindMap=Object.create(null),this._ownedBindGroups=[];let{gpuProgram:e,glProgram:r,groups:i,resources:s,compatibleRenderers:o,groupMap:a}=t;this.gpuProgram=e,this.glProgram=r,o===void 0&&(o=0,e&&(o|=Rn.WEBGPU),r&&(o|=Rn.WEBGL)),this.compatibleRenderers=o;const l={};if(!s&&!i&&(s={}),s&&i)throw new Error("[Shader] Cannot have both resources and groups");if(!e&&i&&!a)throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.");if(!e&&i&&a)for(const u in a)for(const c in a[u]){const h=a[u][c];l[h]={group:u,binding:c,name:h}}else if(e&&i&&!a){const u=e.structsAndGroups.groups;a={},u.forEach(c=>{a[c.group]=a[c.group]||{},a[c.group][c.binding]=c.name,l[c.name]=c})}else if(s){i={},a={},e&&e.structsAndGroups.groups.forEach(h=>{a[h.group]=a[h.group]||{},a[h.group][h.binding]=h.name,l[h.name]=h});let u=0;for(const c in s)l[c]||(i[99]||(i[99]=new vn,this._ownedBindGroups.push(i[99])),l[c]={group:99,binding:u,name:c},a[99]=a[99]||{},a[99][u]=c,u++);for(const c in s){const h=c;let d=s[c];!d.source&&!d._resourceType&&(d=new $n(d));const f=l[h];f&&(i[f.group]||(i[f.group]=new vn,this._ownedBindGroups.push(i[f.group])),i[f.group].setResource(d,f.binding))}}this.groups=i,this._uniformBindMap=a,this.resources=this._buildResourceAccessor(i,l)}addResource(t,e,r){var i,s;(i=this._uniformBindMap)[e]||(i[e]={}),(s=this._uniformBindMap[e])[r]||(s[r]=t),this.groups[e]||(this.groups[e]=new vn,this._ownedBindGroups.push(this.groups[e]))}_buildResourceAccessor(t,e){const r={};for(const i in e){const s=e[i];Object.defineProperty(r,s.name,{get(){return t[s.group].getResource(s.binding)},set(o){t[s.group].setResource(o,s.binding)}})}return r}destroy(t=!1){var e,r;this.emit("destroy",this),t&&((e=this.gpuProgram)==null||e.destroy(),(r=this.glProgram)==null||r.destroy()),this.gpuProgram=null,this.glProgram=null,this.removeAllListeners(),this._uniformBindMap=null,this._ownedBindGroups.forEach(i=>{i.destroy()}),this._ownedBindGroups=null,this.resources=null,this.groups=null}static from(t){const{gpu:e,gl:r,...i}=t;let s,o;return e&&(s=k.from(e)),r&&(o=U.from(r)),new Vn({gpuProgram:s,glProgram:o,...i})}}const qu={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10},fr=0,dr=1,pr=2,mr=3,gr=4,xr=5,Dr=class Oo{constructor(){this.data=0,this.blendMode="normal",this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<fr)}set blend(t){!!(this.data&1<<fr)!==t&&(this.data^=1<<fr)}get offsets(){return!!(this.data&1<<dr)}set offsets(t){!!(this.data&1<<dr)!==t&&(this.data^=1<<dr)}set cullMode(t){if(t==="none"){this.culling=!1;return}this.culling=!0,this.clockwiseFrontFace=t==="front"}get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}get culling(){return!!(this.data&1<<pr)}set culling(t){!!(this.data&1<<pr)!==t&&(this.data^=1<<pr)}get depthTest(){return!!(this.data&1<<mr)}set depthTest(t){!!(this.data&1<<mr)!==t&&(this.data^=1<<mr)}get depthMask(){return!!(this.data&1<<xr)}set depthMask(t){!!(this.data&1<<xr)!==t&&(this.data^=1<<xr)}get clockwiseFrontFace(){return!!(this.data&1<<gr)}set clockwiseFrontFace(t){!!(this.data&1<<gr)!==t&&(this.data^=1<<gr)}get blendMode(){return this._blendMode}set blendMode(t){this.blend=t!=="none",this._blendMode=t,this._blendModeId=qu[t]||0}get polygonOffset(){return this._polygonOffset}set polygonOffset(t){this.offsets=!!t,this._polygonOffset=t}toString(){return`[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`}static for2d(){const t=new Oo;return t.depthTest=!1,t.blend=!0,t}};Dr.default2d=Dr.for2d();let Ku=Dr;const Ro=class Gr extends Vn{constructor(t){t={...Gr.defaultOptions,...t},super(t),this.enabled=!0,this._state=Ku.for2d(),this.blendMode=t.blendMode,this.padding=t.padding,typeof t.antialias=="boolean"?this.antialias=t.antialias?"on":"off":this.antialias=t.antialias,this.resolution=t.resolution,this.blendRequired=t.blendRequired,this.clipToViewport=t.clipToViewport,this.addResource("uTexture",0,1)}apply(t,e,r,i){t.applyFilter(this,e,r,i)}get blendMode(){return this._state.blendMode}set blendMode(t){this._state.blendMode=t}static from(t){const{gpu:e,gl:r,...i}=t;let s,o;return e&&(s=k.from(e)),r&&(o=U.from(r)),new Gr({gpuProgram:s,glProgram:o,...i})}};Ro.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};let L=Ro;const Nr=[];ft.handleByNamedList(M.Environment,Nr);async function Zu(n){if(!n)for(let t=0;t<Nr.length;t++){const e=Nr[t];if(e.value.test()){await e.value.load();return}}}let Pe;function Qu(){if(typeof Pe=="boolean")return Pe;try{Pe=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Pe=!1}return Pe}var vi={exports:{}};vi.exports=Wn;vi.exports.default=Wn;function Wn(n,t,e){e=e||2;var r=t&&t.length,i=r?t[0]*e:n.length,s=Eo(n,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;var a,l,u,c,h,d,f;if(r&&(s=rc(n,t,s,e)),n.length>80*e){a=u=n[0],l=c=n[1];for(var p=e;p<i;p+=e)h=n[p],d=n[p+1],h<a&&(a=h),d<l&&(l=d),h>u&&(u=h),d>c&&(c=d);f=Math.max(u-a,c-l),f=f!==0?32767/f:0}return De(s,o,e,a,l,f,0),o}function Eo(n,t,e,r,i){var s,o;if(i===Wr(n,t,e,r)>0)for(s=t;s<e;s+=r)o=ss(s,n[s],n[s+1],o);else for(s=e-r;s>=t;s-=r)o=ss(s,n[s],n[s+1],o);return o&&Xn(o,o.next)&&(Ne(o),o=o.next),o}function ne(n,t){if(!n)return n;t||(t=n);var e=n,r;do if(r=!1,!e.steiner&&(Xn(e,e.next)||Q(e.prev,e,e.next)===0)){if(Ne(e),e=t=e.prev,e===e.next)break;r=!0}else e=e.next;while(r||e!==t);return t}function De(n,t,e,r,i,s,o){if(n){!o&&s&&lc(n,r,i,s);for(var a=n,l,u;n.prev!==n.next;){if(l=n.prev,u=n.next,s?tc(n,r,i,s):Ju(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(u.i/e|0),Ne(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=ec(ne(n),t,e),De(n,t,e,r,i,s,2)):o===2&&nc(n,t,e,r,i,s):De(ne(n),t,e,r,i,s,1);break}}}}function Ju(n){var t=n.prev,e=n,r=n.next;if(Q(t,e,r)>=0)return!1;for(var i=t.x,s=e.x,o=r.x,a=t.y,l=e.y,u=r.y,c=i<s?i<o?i:o:s<o?s:o,h=a<l?a<u?a:u:l<u?l:u,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>u?a:u:l>u?l:u,p=r.next;p!==t;){if(p.x>=c&&p.x<=d&&p.y>=h&&p.y<=f&&de(i,a,s,l,o,u,p.x,p.y)&&Q(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function tc(n,t,e,r){var i=n.prev,s=n,o=n.next;if(Q(i,s,o)>=0)return!1;for(var a=i.x,l=s.x,u=o.x,c=i.y,h=s.y,d=o.y,f=a<l?a<u?a:u:l<u?l:u,p=c<h?c<d?c:d:h<d?h:d,g=a>l?a>u?a:u:l>u?l:u,m=c>h?c>d?c:d:h>d?h:d,x=$r(f,p,t,e,r),y=$r(g,m,t,e,r),v=n.prevZ,_=n.nextZ;v&&v.z>=x&&_&&_.z<=y;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&de(a,c,l,h,u,d,v.x,v.y)&&Q(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=g&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&de(a,c,l,h,u,d,_.x,_.y)&&Q(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=x;){if(v.x>=f&&v.x<=g&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&de(a,c,l,h,u,d,v.x,v.y)&&Q(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=g&&_.y>=p&&_.y<=m&&_!==i&&_!==o&&de(a,c,l,h,u,d,_.x,_.y)&&Q(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ec(n,t,e){var r=n;do{var i=r.prev,s=r.next.next;!Xn(i,s)&&ko(i,r,r.next,s)&&Ge(i,s)&&Ge(s,i)&&(t.push(i.i/e|0),t.push(r.i/e|0),t.push(s.i/e|0),Ne(r),Ne(r.next),r=n=s),r=r.next}while(r!==n);return ne(r)}function nc(n,t,e,r,i,s){var o=n;do{for(var a=o.next.next;a!==o.prev;){if(o.i!==a.i&&hc(o,a)){var l=Uo(o,a);o=ne(o,o.next),l=ne(l,l.next),De(o,t,e,r,i,s,0),De(l,t,e,r,i,s,0);return}a=a.next}o=o.next}while(o!==n)}function rc(n,t,e,r){var i=[],s,o,a,l,u;for(s=0,o=t.length;s<o;s++)a=t[s]*r,l=s<o-1?t[s+1]*r:n.length,u=Eo(n,a,l,r,!1),u===u.next&&(u.steiner=!0),i.push(cc(u));for(i.sort(ic),s=0;s<i.length;s++)e=sc(i[s],e);return e}function ic(n,t){return n.x-t.x}function sc(n,t){var e=oc(n,t);if(!e)return t;var r=Uo(e,n);return ne(r,r.next),ne(e,e.next)}function oc(n,t){var e=t,r=n.x,i=n.y,s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){var a=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(a<=r&&a>s&&(s=a,o=e.x<e.next.x?e:e.next,a===r))return o}e=e.next}while(e!==t);if(!o)return null;var l=o,u=o.x,c=o.y,h=1/0,d;e=o;do r>=e.x&&e.x>=u&&r!==e.x&&de(i<c?r:s,i,u,c,i<c?s:r,i,e.x,e.y)&&(d=Math.abs(i-e.y)/(r-e.x),Ge(e,n)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&ac(o,e)))&&(o=e,h=d)),e=e.next;while(e!==l);return o}function ac(n,t){return Q(n.prev,n,t.prev)<0&&Q(t.next,n,n.next)<0}function lc(n,t,e,r){var i=n;do i.z===0&&(i.z=$r(i.x,i.y,t,e,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==n);i.prevZ.nextZ=null,i.prevZ=null,uc(i)}function uc(n){var t,e,r,i,s,o,a,l,u=1;do{for(e=n,n=null,s=null,o=0;e;){for(o++,r=e,a=0,t=0;t<u&&(a++,r=r.nextZ,!!r);t++);for(l=u;a>0||l>0&&r;)a!==0&&(l===0||!r||e.z<=r.z)?(i=e,e=e.nextZ,a--):(i=r,r=r.nextZ,l--),s?s.nextZ=i:n=i,i.prevZ=s,s=i;e=r}s.nextZ=null,u*=2}while(o>1);return n}function $r(n,t,e,r,i){return n=(n-e)*i|0,t=(t-r)*i|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function cc(n){var t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function de(n,t,e,r,i,s,o,a){return(i-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(r-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(r-a)}function hc(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!fc(n,t)&&(Ge(n,t)&&Ge(t,n)&&dc(n,t)&&(Q(n.prev,n,t.prev)||Q(n,t.prev,t))||Xn(n,t)&&Q(n.prev,n,n.next)>0&&Q(t.prev,t,t.next)>0)}function Q(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Xn(n,t){return n.x===t.x&&n.y===t.y}function ko(n,t,e,r){var i=cn(Q(n,t,e)),s=cn(Q(n,t,r)),o=cn(Q(e,r,n)),a=cn(Q(e,r,t));return!!(i!==s&&o!==a||i===0&&un(n,e,t)||s===0&&un(n,r,t)||o===0&&un(e,n,r)||a===0&&un(e,t,r))}function un(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function cn(n){return n>0?1:n<0?-1:0}function fc(n,t){var e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ko(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ge(n,t){return Q(n.prev,n,n.next)<0?Q(n,t,n.next)>=0&&Q(n,n.prev,t)>=0:Q(n,t,n.prev)<0||Q(n,n.next,t)<0}function dc(n,t){var e=n,r=!1,i=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(r=!r),e=e.next;while(e!==n);return r}function Uo(n,t){var e=new Vr(n.i,n.x,n.y),r=new Vr(t.i,t.x,t.y),i=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=i,i.prev=e,r.next=e,e.prev=r,s.next=r,r.prev=s,r}function ss(n,t,e,r){var i=new Vr(n,t,e);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ne(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vr(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}Wn.deviation=function(n,t,e,r){var i=t&&t.length,s=i?t[0]*e:n.length,o=Math.abs(Wr(n,0,s,e));if(i)for(var a=0,l=t.length;a<l;a++){var u=t[a]*e,c=a<l-1?t[a+1]*e:n.length;o-=Math.abs(Wr(n,u,c,e))}var h=0;for(a=0;a<r.length;a+=3){var d=r[a]*e,f=r[a+1]*e,p=r[a+2]*e;h+=Math.abs((n[d]-n[p])*(n[f+1]-n[d+1])-(n[d]-n[f])*(n[p+1]-n[d+1]))}return o===0&&h===0?0:Math.abs((h-o)/o)};function Wr(n,t,e,r){for(var i=0,s=t,o=e-r;s<e;s+=r)i+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return i}Wn.flatten=function(n){for(var t=n[0][0].length,e={vertices:[],holes:[],dimensions:t},r=0,i=0;i<n.length;i++){for(var s=0;s<n[i].length;s++)for(var o=0;o<t;o++)e.vertices.push(n[i][s][o]);i>0&&(r+=n[i-1].length,e.holes.push(r))}return e};var pc=vi.exports;const mc=fi(pc);var Bo=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=16384]="COLOR",n[n.STENCIL=1024]="STENCIL",n[n.DEPTH=256]="DEPTH",n[n.COLOR_DEPTH=16640]="COLOR_DEPTH",n[n.COLOR_STENCIL=17408]="COLOR_STENCIL",n[n.DEPTH_STENCIL=1280]="DEPTH_STENCIL",n[n.ALL=17664]="ALL",n))(Bo||{});class gc{constructor(t){this.items=[],this._name=t}emit(t,e,r,i,s,o,a,l){const{name:u,items:c}=this;for(let h=0,d=c.length;h<d;h++)c[h][u](t,e,r,i,s,o,a,l);return this}add(t){return t[this._name]&&(this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&this.items.splice(e,1),this}contains(t){return this.items.indexOf(t)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const xc=["init","destroy","contextChange","resolutionChange","reset","renderEnd","renderStart","render","update","postrender","prerender"],Lo=class Do extends ut{constructor(t){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=t.type,this.name=t.name,this.config=t;const e=[...xc,...this.config.runners??[]];this._addRunners(...e),this._unsafeEvalCheck()}async init(t={}){const e=t.skipExtensionImports===!0?!0:t.manageImports===!1;await Zu(e),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)t={...this._systemsHash[r].constructor.defaultOptions,...t};t={...Do.defaultOptions,...t},this._roundPixels=t.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(t);this._initOptions=t}render(t,e){let r=t;if(r instanceof J&&(r={container:r},e&&(F(N,"passing a second argument is deprecated, please use render options instead"),r.target=e.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor=this.background.colorRgba),r.clearColor){const i=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=i?r.clearColor:G.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(t,e,r){const i=this.view.resolution;this.view.resize(t,e,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==i&&this.runners.resolutionChange.emit(r)}clear(t={}){const e=this;t.target||(t.target=e.renderTarget.renderTarget),t.clearColor||(t.clearColor=this.background.colorRgba),t.clear??(t.clear=Bo.ALL);const{clear:r,clearColor:i,target:s}=t;G.shared.setValue(i??this.background.colorRgba),e.renderTarget.clear(s,r,G.shared.toArray())}get resolution(){return this.view.resolution}set resolution(t){this.view.resolution=t,this.runners.resolutionChange.emit(t)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...t){t.forEach(e=>{this.runners[e]=new gc(e)})}_addSystems(t){let e;for(e in t){const r=t[e];this._addSystem(r.value,r.name)}}_addSystem(t,e){const r=new t(this);if(this[e])throw new Error(`Whoops! The name "${e}" is already in use`);this[e]=r,this._systemsHash[e]=r;for(const i in this.runners)this.runners[i].add(r);return this}_addPipes(t,e){const r=e.reduce((i,s)=>(i[s.name]=s.value,i),{});t.forEach(i=>{const s=i.value,o=i.name,a=r[o];this.renderPipes[o]=new s(this,a?new a:null)})}destroy(t=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(t),Object.values(this.runners).forEach(e=>{e.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(t){return this.textureGenerator.generateTexture(t)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Qu())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}};Lo.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Go=Lo,hn;function vc(n){return hn!==void 0||(hn=(()=>{var e;const t={stencil:!0,failIfMajorPerformanceCaveat:n??Go.defaultOptions.failIfMajorPerformanceCaveat};try{if(!j.get().getWebGLRenderingContext())return!1;let i=j.get().createCanvas().getContext("webgl",t);const s=!!((e=i==null?void 0:i.getContextAttributes())!=null&&e.stencil);if(i){const o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,s}catch{return!1}})()),hn}let fn;async function yc(n={}){return fn!==void 0||(fn=await(async()=>{const t=j.get().getNavigator().gpu;if(!t)return!1;try{return await(await t.requestAdapter(n)).requestDevice(),!0}catch{return!1}})()),fn}const os=["webgl","webgpu","canvas"];async function _c(n){let t=[];n.preference?(t.push(n.preference),os.forEach(s=>{s!==n.preference&&t.push(s)})):t=os.slice();let e,r={};for(let s=0;s<t.length;s++){const o=t[s];if(o==="webgpu"&&await yc()){const{WebGPURenderer:a}=await Mn(async()=>{const{WebGPURenderer:l}=await import("./WebGPURenderer-_leae0GY.js");return{WebGPURenderer:l}},__vite__mapDeps([3,2,4]),import.meta.url);e=a,r={...n,...n.webgpu};break}else if(o==="webgl"&&vc(n.failIfMajorPerformanceCaveat??Go.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:a}=await Mn(async()=>{const{WebGLRenderer:l}=await import("./WebGLRenderer-DsPhQlTT.js");return{WebGLRenderer:l}},__vite__mapDeps([5,2,4]),import.meta.url);e=a,r={...n,...n.webgl};break}else if(o==="canvas")throw r={...n},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!e)throw new Error("No available renderer for the current environment");const i=new e;return await i.init(r),i}const No="8.6.6";class $o{static init(){var t;(t=globalThis.__PIXI_APP_INIT__)==null||t.call(globalThis,this,No)}static destroy(){}}$o.extension=M.Application;class bc{constructor(t){this._renderer=t}init(){var t;(t=globalThis.__PIXI_RENDERER_INIT__)==null||t.call(globalThis,this._renderer,No)}destroy(){this._renderer=null}}bc.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"initHook",priority:-10};const Vo=class Xr{constructor(...t){this.stage=new J,t[0]!==void 0&&F(N,"Application constructor options are deprecated, please use Application.init() instead.")}async init(t){t={...t},this.renderer=await _c(t),Xr._plugins.forEach(e=>{e.init.call(this,t)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return F(N,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(t=!1,e=!1){const r=Xr._plugins.slice(0);r.reverse(),r.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null}};Vo._plugins=[];let Wo=Vo;ft.handleByList(M.Application,Wo._plugins);ft.add($o);class Xo extends ut{constructor(){super(...arguments),this.chars=Object.create(null),this.lineHeight=0,this.fontFamily="",this.fontMetrics={fontSize:0,ascent:0,descent:0},this.baseLineOffset=0,this.distanceField={type:"none",range:0},this.pages=[],this.applyFillAsTint=!0,this.baseMeasurementFontSize=100,this.baseRenderedFontSize=100}get font(){return F(N,"BitmapFont.font is deprecated, please use BitmapFont.fontFamily instead."),this.fontFamily}get pageTextures(){return F(N,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}get size(){return F(N,"BitmapFont.size is deprecated, please use BitmapFont.fontMetrics.fontSize instead."),this.fontMetrics.fontSize}get distanceFieldRange(){return F(N,"BitmapFont.distanceFieldRange is deprecated, please use BitmapFont.distanceField.range instead."),this.distanceField.range}get distanceFieldType(){return F(N,"BitmapFont.distanceFieldType is deprecated, please use BitmapFont.distanceField.type instead."),this.distanceField.type}destroy(t=!1){var e;this.emit("destroy",this),this.removeAllListeners();for(const r in this.chars)(e=this.chars[r].texture)==null||e.destroy();this.chars=null,t&&(this.pages.forEach(r=>r.texture.destroy(!0)),this.pages=null)}}const Yo=class Yr{constructor(t,e,r,i){this.uid=rt("fillGradient"),this.type="linear",this.gradientStops=[],this._styleKey=null,this.x0=t,this.y0=e,this.x1=r,this.y1=i}addColorStop(t,e){return this.gradientStops.push({offset:t,color:G.shared.setValue(e).toHexa()}),this._styleKey=null,this}buildLinearGradient(){if(this.texture)return;const t=Yr.defaultTextureSize,{gradientStops:e}=this,r=j.get().createCanvas();r.width=t,r.height=t;const i=r.getContext("2d"),s=i.createLinearGradient(0,0,Yr.defaultTextureSize,1);for(let g=0;g<e.length;g++){const m=e[g];s.addColorStop(m.offset,m.color)}i.fillStyle=s,i.fillRect(0,0,t,t),this.texture=new O({source:new re({resource:r,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});const{x0:o,y0:a,x1:l,y1:u}=this,c=new D,h=l-o,d=u-a,f=Math.sqrt(h*h+d*d),p=Math.atan2(d,h);c.translate(-o,-a),c.scale(1/t,1/t),c.rotate(-p),c.scale(256/f,1),this.transform=c,this._styleKey=null}get styleKey(){if(this._styleKey)return this._styleKey;const t=this.gradientStops.map(i=>`${i.offset}-${i.color}`).join("-"),e=this.texture.uid,r=this.transform.toArray().join("-");return`fill-gradient-${this.uid}-${t}-${e}-${r}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};Yo.defaultTextureSize=256;let $e=Yo;const as={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};class Yn{constructor(t,e){this.uid=rt("fillPattern"),this.transform=new D,this._styleKey=null,this.texture=t,this.transform.scale(1/t.frame.width,1/t.frame.height),e&&(t.source.style.addressModeU=as[e].addressModeU,t.source.style.addressModeV=as[e].addressModeV)}setTransform(t){const e=this.texture;this.transform.copyFrom(t),this.transform.invert(),this.transform.scale(1/e.frame.width,1/e.frame.height),this._styleKey=null}get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}}var Sc=wc,vr={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Cc=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function wc(n){var t=[];return n.replace(Cc,function(e,r,i){var s=r.toLowerCase();for(i=Tc(i),s=="m"&&i.length>2&&(t.push([r].concat(i.splice(0,2))),s="l",r=r=="m"?"l":"L");;){if(i.length==vr[s])return i.unshift(r),t.push(i);if(i.length<vr[s])throw new Error("malformed path data");t.push([r].concat(i.splice(0,vr[s])))}}),t}var Ac=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function Tc(n){var t=n.match(Ac);return t?t.map(Number):[]}const Pc=fi(Sc);function Fc(n,t){const e=Pc(n),r=[];let i=null,s=0,o=0;for(let a=0;a<e.length;a++){const l=e[a],u=l[0],c=l;switch(u){case"M":s=c[1],o=c[2],t.moveTo(s,o);break;case"m":s+=c[1],o+=c[2],t.moveTo(s,o);break;case"H":s=c[1],t.lineTo(s,o);break;case"h":s+=c[1],t.lineTo(s,o);break;case"V":o=c[1],t.lineTo(s,o);break;case"v":o+=c[1],t.lineTo(s,o);break;case"L":s=c[1],o=c[2],t.lineTo(s,o);break;case"l":s+=c[1],o+=c[2],t.lineTo(s,o);break;case"C":s=c[5],o=c[6],t.bezierCurveTo(c[1],c[2],c[3],c[4],s,o);break;case"c":t.bezierCurveTo(s+c[1],o+c[2],s+c[3],o+c[4],s+c[5],o+c[6]),s+=c[5],o+=c[6];break;case"S":s=c[3],o=c[4],t.bezierCurveToShort(c[1],c[2],s,o);break;case"s":t.bezierCurveToShort(s+c[1],o+c[2],s+c[3],o+c[4]),s+=c[3],o+=c[4];break;case"Q":s=c[3],o=c[4],t.quadraticCurveTo(c[1],c[2],s,o);break;case"q":t.quadraticCurveTo(s+c[1],o+c[2],s+c[3],o+c[4]),s+=c[3],o+=c[4];break;case"T":s=c[1],o=c[2],t.quadraticCurveToShort(s,o);break;case"t":s+=c[1],o+=c[2],t.quadraticCurveToShort(s,o);break;case"A":s=c[6],o=c[7],t.arcToSvg(c[1],c[2],c[3],c[4],c[5],s,o);break;case"a":s+=c[6],o+=c[7],t.arcToSvg(c[1],c[2],c[3],c[4],c[5],s,o);break;case"Z":case"z":t.closePath(),r.length>0&&(i=r.pop(),i?(s=i.startX,o=i.startY):(s=0,o=0)),i=null;break;default:tt(`Unknown SVG path command: ${u}`)}u!=="Z"&&u!=="z"&&i===null&&(i={startX:s,startY:o},r.push(i))}return t}class yi{constructor(t=0,e=0,r=0){this.type="circle",this.x=t,this.y=e,this.radius=r}clone(){return new yi(this.x,this.y,this.radius)}contains(t,e){if(this.radius<=0)return!1;const r=this.radius*this.radius;let i=this.x-t,s=this.y-e;return i*=i,s*=s,i+s<=r}strokeContains(t,e,r,i=.5){if(this.radius===0)return!1;const s=this.x-t,o=this.y-e,a=this.radius,l=(1-i)*r,u=Math.sqrt(s*s+o*o);return u<=a+l&&u>a-(r-l)}getBounds(t){return t||(t=new nt),t.x=this.x-this.radius,t.y=this.y-this.radius,t.width=this.radius*2,t.height=this.radius*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.radius=t.radius,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`}}class _i{constructor(t=0,e=0,r=0,i=0){this.type="ellipse",this.x=t,this.y=e,this.halfWidth=r,this.halfHeight=i}clone(){return new _i(this.x,this.y,this.halfWidth,this.halfHeight)}contains(t,e){if(this.halfWidth<=0||this.halfHeight<=0)return!1;let r=(t-this.x)/this.halfWidth,i=(e-this.y)/this.halfHeight;return r*=r,i*=i,r+i<=1}strokeContains(t,e,r,i=.5){const{halfWidth:s,halfHeight:o}=this;if(s<=0||o<=0)return!1;const a=r*(1-i),l=r-a,u=s-l,c=o-l,h=s+a,d=o+a,f=t-this.x,p=e-this.y,g=f*f/(u*u)+p*p/(c*c),m=f*f/(h*h)+p*p/(d*d);return g>1&&m<=1}getBounds(t){return t||(t=new nt),t.x=this.x-this.halfWidth,t.y=this.y-this.halfHeight,t.width=this.halfWidth*2,t.height=this.halfHeight*2,t}copyFrom(t){return this.x=t.x,this.y=t.y,this.halfWidth=t.halfWidth,this.halfHeight=t.halfHeight,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:Ellipse x=${this.x} y=${this.y} halfWidth=${this.halfWidth} halfHeight=${this.halfHeight}]`}}function Mc(n,t,e,r,i,s){const o=n-e,a=t-r,l=i-e,u=s-r,c=o*l+a*u,h=l*l+u*u;let d=-1;h!==0&&(d=c/h);let f,p;d<0?(f=e,p=r):d>1?(f=i,p=s):(f=e+d*l,p=r+d*u);const g=n-f,m=t-p;return g*g+m*m}class Ue{constructor(...t){this.type="polygon";let e=Array.isArray(t[0])?t[0]:t;if(typeof e[0]!="number"){const r=[];for(let i=0,s=e.length;i<s;i++)r.push(e[i].x,e[i].y);e=r}this.points=e,this.closePath=!0}clone(){const t=this.points.slice(),e=new Ue(t);return e.closePath=this.closePath,e}contains(t,e){let r=!1;const i=this.points.length/2;for(let s=0,o=i-1;s<i;o=s++){const a=this.points[s*2],l=this.points[s*2+1],u=this.points[o*2],c=this.points[o*2+1];l>e!=c>e&&t<(u-a)*((e-l)/(c-l))+a&&(r=!r)}return r}strokeContains(t,e,r,i=.5){const s=r*r,o=s*(1-i),a=s-o,{points:l}=this,u=l.length-(this.closePath?0:2);for(let c=0;c<u;c+=2){const h=l[c],d=l[c+1],f=l[(c+2)%l.length],p=l[(c+3)%l.length],g=Mc(t,e,h,d,f,p),m=Math.sign((f-h)*(e-d)-(p-d)*(t-h));if(g<=(m<0?a:o))return!0}return!1}getBounds(t){t||(t=new nt);const e=this.points;let r=1/0,i=-1/0,s=1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=2){const u=e[a],c=e[a+1];r=u<r?u:r,i=u>i?u:i,s=c<s?c:s,o=c>o?c:o}return t.x=r,t.width=i-r,t.y=s,t.height=o-s,t}copyFrom(t){return this.points=t.points.slice(),this.closePath=t.closePath,this}copyTo(t){return t.copyFrom(this),t}toString(){return`[pixi.js/math:PolygoncloseStroke=${this.closePath}points=${this.points.reduce((t,e)=>`${t}, ${e}`,"")}]`}get lastX(){return this.points[this.points.length-2]}get lastY(){return this.points[this.points.length-1]}get x(){return this.points[this.points.length-2]}get y(){return this.points[this.points.length-1]}}const dn=(n,t,e,r,i,s,o)=>{const a=n-e,l=t-r,u=Math.sqrt(a*a+l*l);return u>=i-s&&u<=i+o};class bi{constructor(t=0,e=0,r=0,i=0,s=20){this.type="roundedRectangle",this.x=t,this.y=e,this.width=r,this.height=i,this.radius=s}getBounds(t){return t||(t=new nt),t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}clone(){return new bi(this.x,this.y,this.width,this.height,this.radius)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.copyFrom(this),t}contains(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){const r=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(e>=this.y+r&&e<=this.y+this.height-r||t>=this.x+r&&t<=this.x+this.width-r)return!0;let i=t-(this.x+r),s=e-(this.y+r);const o=r*r;if(i*i+s*s<=o||(i=t-(this.x+this.width-r),i*i+s*s<=o)||(s=e-(this.y+this.height-r),i*i+s*s<=o)||(i=t-(this.x+r),i*i+s*s<=o))return!0}return!1}strokeContains(t,e,r,i=.5){const{x:s,y:o,width:a,height:l,radius:u}=this,c=r*(1-i),h=r-c,d=s+u,f=o+u,p=a-u*2,g=l-u*2,m=s+a,x=o+l;return(t>=s-c&&t<=s+h||t>=m-h&&t<=m+c)&&e>=f&&e<=f+g||(e>=o-c&&e<=o+h||e>=x-h&&e<=x+c)&&t>=d&&t<=d+p?!0:t<d&&e<f&&dn(t,e,d,f,u,h,c)||t>m-u&&e<f&&dn(t,e,m-u,f,u,h,c)||t>m-u&&e>x-u&&dn(t,e,m-u,x-u,u,h,c)||t<d&&e>x-u&&dn(t,e,d,x-u,u,h,c)}toString(){return`[pixi.js/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`}}const zc=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function Ic(n){let t="";for(let e=0;e<n;++e)e>0&&(t+=`
else `),e<n-1&&(t+=`if(test == ${e}.0){}`);return t}function Oc(n,t){if(n===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const e=t.createShader(t.FRAGMENT_SHADER);try{for(;;){const r=zc.replace(/%forloop%/gi,Ic(n));if(t.shaderSource(e,r),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))n=n/2|0;else break}}finally{t.deleteShader(e)}return n}let oe=null;function Ho(){var t;if(oe)return oe;const n=Po();return oe=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),oe=Oc(oe,n),(t=n.getExtension("WEBGL_lose_context"))==null||t.loseContext(),oe}const jo={};function Rc(n,t){let e=2166136261;for(let r=0;r<t;r++)e^=n[r].uid,e=Math.imul(e,16777619),e>>>=0;return jo[e]||Ec(n,t,e)}let yr=0;function Ec(n,t,e){const r={};let i=0;yr||(yr=Ho());for(let o=0;o<yr;o++){const a=o<t?n[o]:O.EMPTY.source;r[i++]=a.source,r[i++]=a.style}const s=new vn(r);return jo[e]=s,s}class ls{constructor(t){typeof t=="number"?this.rawBinaryData=new ArrayBuffer(t):t instanceof Uint8Array?this.rawBinaryData=t.buffer:this.rawBinaryData=t,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData),this.size=this.rawBinaryData.byteLength}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}get float64View(){return this._float64Array||(this._float64Array=new Float64Array(this.rawBinaryData)),this._float64Array}get bigUint64View(){return this._bigUint64Array||(this._bigUint64Array=new BigUint64Array(this.rawBinaryData)),this._bigUint64Array}view(t){return this[`${t}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this.uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(t){switch(t){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${t} isn't a valid view type`)}}}function us(n,t){const e=n.byteLength/8|0,r=new Float64Array(n,0,e);new Float64Array(t,0,e).set(r);const s=n.byteLength-e*8;if(s>0){const o=new Uint8Array(n,e*8,s);new Uint8Array(t,e*8,s).set(o)}}const kc={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Uc=(n=>(n[n.DISABLED=0]="DISABLED",n[n.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",n[n.MASK_ACTIVE=2]="MASK_ACTIVE",n[n.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",n[n.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",n[n.NONE=5]="NONE",n))(Uc||{});function cs(n,t){return t.alphaMode==="no-premultiply-alpha"&&kc[n]||n}class Bc{constructor(){this.ids=Object.create(null),this.textures=[],this.count=0}clear(){for(let t=0;t<this.count;t++){const e=this.textures[t];this.textures[t]=null,this.ids[e.uid]=null}this.count=0}}class Lc{constructor(){this.renderPipeId="batch",this.action="startBatch",this.start=0,this.size=0,this.textures=new Bc,this.blendMode="normal",this.topology="triangle-strip",this.canBundle=!0}destroy(){this.textures=null,this.gpuBindGroup=null,this.bindGroup=null,this.batcher=null}}const qo=[];let Hr=0;function hs(){return Hr>0?qo[--Hr]:new Lc}function fs(n){qo[Hr++]=n}let Fe=0;const Ko=class yn{constructor(t={}){this.uid=rt("batcher"),this.dirty=!0,this.batchIndex=0,this.batches=[],this._elements=[],yn.defaultOptions.maxTextures=yn.defaultOptions.maxTextures??Ho(),t={...yn.defaultOptions,...t};const{maxTextures:e,attributesInitialSize:r,indicesInitialSize:i}=t;this.attributeBuffer=new ls(r*4),this.indexBuffer=new Uint16Array(i),this.maxTextures=e}begin(){this.elementSize=0,this.elementStart=0,this.indexSize=0,this.attributeSize=0;for(let t=0;t<this.batchIndex;t++)fs(this.batches[t]);this.batchIndex=0,this._batchIndexStart=0,this._batchIndexSize=0,this.dirty=!0}add(t){this._elements[this.elementSize++]=t,t._indexStart=this.indexSize,t._attributeStart=this.attributeSize,t._batcher=this,this.indexSize+=t.indexSize,this.attributeSize+=t.attributeSize*this.vertexSize}checkAndUpdateTexture(t,e){const r=t._batch.textures.ids[e._source.uid];return!r&&r!==0?!1:(t._textureId=r,t.texture=e,!0)}updateElement(t){this.dirty=!0;const e=this.attributeBuffer;t.packAsQuad?this.packQuadAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId):this.packAttributes(t,e.float32View,e.uint32View,t._attributeStart,t._textureId)}break(t){const e=this._elements;if(!e[this.elementStart])return;let r=hs(),i=r.textures;i.clear();const s=e[this.elementStart];let o=cs(s.blendMode,s.texture._source),a=s.topology;this.attributeSize*4>this.attributeBuffer.size&&this._resizeAttributeBuffer(this.attributeSize*4),this.indexSize>this.indexBuffer.length&&this._resizeIndexBuffer(this.indexSize);const l=this.attributeBuffer.float32View,u=this.attributeBuffer.uint32View,c=this.indexBuffer;let h=this._batchIndexSize,d=this._batchIndexStart,f="startBatch";const p=this.maxTextures;for(let g=this.elementStart;g<this.elementSize;++g){const m=e[g];e[g]=null;const y=m.texture._source,v=cs(m.blendMode,y),_=o!==v||a!==m.topology;if(y._batchTick===Fe&&!_){m._textureId=y._textureBindLocation,h+=m.indexSize,m.packAsQuad?(this.packQuadAttributes(m,l,u,m._attributeStart,m._textureId),this.packQuadIndex(c,m._indexStart,m._attributeStart/this.vertexSize)):(this.packAttributes(m,l,u,m._attributeStart,m._textureId),this.packIndex(m,c,m._indexStart,m._attributeStart/this.vertexSize)),m._batch=r;continue}y._batchTick=Fe,(i.count>=p||_)&&(this._finishBatch(r,d,h-d,i,o,a,t,f),f="renderBatch",d=h,o=v,a=m.topology,r=hs(),i=r.textures,i.clear(),++Fe),m._textureId=y._textureBindLocation=i.count,i.ids[y.uid]=i.count,i.textures[i.count++]=y,m._batch=r,h+=m.indexSize,m.packAsQuad?(this.packQuadAttributes(m,l,u,m._attributeStart,m._textureId),this.packQuadIndex(c,m._indexStart,m._attributeStart/this.vertexSize)):(this.packAttributes(m,l,u,m._attributeStart,m._textureId),this.packIndex(m,c,m._indexStart,m._attributeStart/this.vertexSize))}i.count>0&&(this._finishBatch(r,d,h-d,i,o,a,t,f),d=h,++Fe),this.elementStart=this.elementSize,this._batchIndexStart=d,this._batchIndexSize=h}_finishBatch(t,e,r,i,s,o,a,l){t.gpuBindGroup=null,t.bindGroup=null,t.action=l,t.batcher=this,t.textures=i,t.blendMode=s,t.topology=o,t.start=e,t.size=r,++Fe,this.batches[this.batchIndex++]=t,a.add(t)}finish(t){this.break(t)}ensureAttributeBuffer(t){t*4<=this.attributeBuffer.size||this._resizeAttributeBuffer(t*4)}ensureIndexBuffer(t){t<=this.indexBuffer.length||this._resizeIndexBuffer(t)}_resizeAttributeBuffer(t){const e=Math.max(t,this.attributeBuffer.size*2),r=new ls(e);us(this.attributeBuffer.rawBinaryData,r.rawBinaryData),this.attributeBuffer=r}_resizeIndexBuffer(t){const e=this.indexBuffer;let r=Math.max(t,e.length*1.5);r+=r%2;const i=r>65535?new Uint32Array(r):new Uint16Array(r);if(i.BYTES_PER_ELEMENT!==e.BYTES_PER_ELEMENT)for(let s=0;s<e.length;s++)i[s]=e[s];else us(e.buffer,i.buffer);this.indexBuffer=i}packQuadIndex(t,e,r){t[e]=r+0,t[e+1]=r+1,t[e+2]=r+2,t[e+3]=r+0,t[e+4]=r+2,t[e+5]=r+3}packIndex(t,e,r,i){const s=t.indices,o=t.indexSize,a=t.indexOffset,l=t.attributeOffset;for(let u=0;u<o;u++)e[r++]=i+s[u+a]-l}destroy(){for(let t=0;t<this.batches.length;t++)fs(this.batches[t]);this.batches=null;for(let t=0;t<this._elements.length;t++)this._elements[t]._batch=null;this._elements=null,this.indexBuffer=null,this.attributeBuffer.destroy(),this.attributeBuffer=null}};Ko.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};let Dc=Ko;var xt=(n=>(n[n.MAP_READ=1]="MAP_READ",n[n.MAP_WRITE=2]="MAP_WRITE",n[n.COPY_SRC=4]="COPY_SRC",n[n.COPY_DST=8]="COPY_DST",n[n.INDEX=16]="INDEX",n[n.VERTEX=32]="VERTEX",n[n.UNIFORM=64]="UNIFORM",n[n.STORAGE=128]="STORAGE",n[n.INDIRECT=256]="INDIRECT",n[n.QUERY_RESOLVE=512]="QUERY_RESOLVE",n[n.STATIC=1024]="STATIC",n))(xt||{});class Ve extends ut{constructor(t){let{data:e,size:r}=t;const{usage:i,label:s,shrinkToFit:o}=t;super(),this.uid=rt("buffer"),this._resourceType="buffer",this._resourceId=rt("resource"),this._touched=0,this._updateID=1,this._dataInt32=null,this.shrinkToFit=!0,this.destroyed=!1,e instanceof Array&&(e=new Float32Array(e)),this._data=e,r??(r=e==null?void 0:e.byteLength);const a=!!e;this.descriptor={size:r,usage:i,mappedAtCreation:a,label:s},this.shrinkToFit=o??!0}get data(){return this._data}set data(t){this.setDataWithSize(t,t.length,!0)}get dataInt32(){return this._dataInt32||(this._dataInt32=new Int32Array(this.data.buffer)),this._dataInt32}get static(){return!!(this.descriptor.usage&xt.STATIC)}set static(t){t?this.descriptor.usage|=xt.STATIC:this.descriptor.usage&=~xt.STATIC}setDataWithSize(t,e,r){if(this._updateID++,this._updateSize=e*t.BYTES_PER_ELEMENT,this._data===t){r&&this.emit("update",this);return}const i=this._data;if(this._data=t,this._dataInt32=null,!i||i.length!==t.length){!this.shrinkToFit&&i&&t.byteLength<i.byteLength?r&&this.emit("update",this):(this.descriptor.size=t.byteLength,this._resourceId=rt("resource"),this.emit("change",this));return}r&&this.emit("update",this)}update(t){this._updateSize=t??this._updateSize,this._updateID++,this.emit("update",this)}destroy(){this.destroyed=!0,this.emit("destroy",this),this.emit("change",this),this._data=null,this.descriptor=null,this.removeAllListeners()}}function Zo(n,t){if(!(n instanceof Ve)){let e=t?xt.INDEX:xt.VERTEX;n instanceof Array&&(t?(n=new Uint32Array(n),e=xt.INDEX|xt.COPY_DST):(n=new Float32Array(n),e=xt.VERTEX|xt.COPY_DST)),n=new Ve({data:n,label:t?"index-mesh-buffer":"vertex-mesh-buffer",usage:e})}return n}function Gc(n,t,e){const r=n.getAttribute(t);if(!r)return e.minX=0,e.minY=0,e.maxX=0,e.maxY=0,e;const i=r.buffer.data;let s=1/0,o=1/0,a=-1/0,l=-1/0;const u=i.BYTES_PER_ELEMENT,c=(r.offset||0)/u,h=(r.stride||2*4)/u;for(let d=c;d<i.length;d+=h){const f=i[d],p=i[d+1];f>a&&(a=f),p>l&&(l=p),f<s&&(s=f),p<o&&(o=p)}return e.minX=s,e.minY=o,e.maxX=a,e.maxY=l,e}function Nc(n){return(n instanceof Ve||Array.isArray(n)||n.BYTES_PER_ELEMENT)&&(n={buffer:n}),n.buffer=Zo(n.buffer,!1),n}class $c extends ut{constructor(t={}){super(),this.uid=rt("geometry"),this._layoutKey=0,this.instanceCount=1,this._bounds=new Ot,this._boundsDirty=!0;const{attributes:e,indexBuffer:r,topology:i}=t;if(this.buffers=[],this.attributes={},e)for(const s in e)this.addAttribute(s,e[s]);this.instanceCount=t.instanceCount??1,r&&this.addIndex(r),this.topology=i||"triangle-list"}onBufferUpdate(){this._boundsDirty=!0,this.emit("update",this)}getAttribute(t){return this.attributes[t]}getIndex(){return this.indexBuffer}getBuffer(t){return this.getAttribute(t).buffer}getSize(){for(const t in this.attributes){const e=this.attributes[t];return e.buffer.data.length/(e.stride/4||e.size)}return 0}addAttribute(t,e){const r=Nc(e);this.buffers.indexOf(r.buffer)===-1&&(this.buffers.push(r.buffer),r.buffer.on("update",this.onBufferUpdate,this),r.buffer.on("change",this.onBufferUpdate,this)),this.attributes[t]=r}addIndex(t){this.indexBuffer=Zo(t,!0),this.buffers.push(this.indexBuffer)}get bounds(){return this._boundsDirty?(this._boundsDirty=!1,Gc(this,"aPosition",this._bounds)):this._bounds}destroy(t=!1){this.emit("destroy",this),this.removeAllListeners(),t&&this.buffers.forEach(e=>e.destroy()),this.attributes=null,this.buffers=null,this.indexBuffer=null,this._bounds=null}}const Vc=new Float32Array(1),Wc=new Uint32Array(1);class Xc extends $c{constructor(){const e=new Ve({data:Vc,label:"attribute-batch-buffer",usage:xt.VERTEX|xt.COPY_DST,shrinkToFit:!1}),r=new Ve({data:Wc,label:"index-batch-buffer",usage:xt.INDEX|xt.COPY_DST,shrinkToFit:!1}),i=6*4;super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:i,offset:0},aUV:{buffer:e,format:"float32x2",stride:i,offset:2*4},aColor:{buffer:e,format:"unorm8x4",stride:i,offset:4*4},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:i,offset:5*4}},indexBuffer:r})}}function ds(n,t,e){if(n)for(const r in n){const i=r.toLocaleLowerCase(),s=t[i];if(s){let o=n[r];r==="header"&&(o=o.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")),e&&s.push(`//----${e}----//`),s.push(o)}else tt(`${r} placement hook does not exist in shader`)}}const Yc=/\{\{(.*?)\}\}/g;function ps(n){var r;const t={};return(((r=n.match(Yc))==null?void 0:r.map(i=>i.replace(/[{()}]/g,"")))??[]).forEach(i=>{t[i]=[]}),t}function ms(n,t){let e;const r=/@in\s+([^;]+);/g;for(;(e=r.exec(n))!==null;)t.push(e[1])}function gs(n,t,e=!1){const r=[];ms(t,r),n.forEach(a=>{a.header&&ms(a.header,r)});const i=r;e&&i.sort();const s=i.map((a,l)=>`       @location(${l}) ${a},`).join(`
`);let o=t.replace(/@in\s+[^;]+;\s*/g,"");return o=o.replace("{{in}}",`
${s}
`),o}function xs(n,t){let e;const r=/@out\s+([^;]+);/g;for(;(e=r.exec(n))!==null;)t.push(e[1])}function Hc(n){const e=/\b(\w+)\s*:/g.exec(n);return e?e[1]:""}function jc(n){const t=/@.*?\s+/g;return n.replace(t,"")}function qc(n,t){const e=[];xs(t,e),n.forEach(l=>{l.header&&xs(l.header,e)});let r=0;const i=e.sort().map(l=>l.indexOf("builtin")>-1?l:`@location(${r++}) ${l}`).join(`,
`),s=e.sort().map(l=>`       var ${jc(l)};`).join(`
`),o=`return VSOutput(
            ${e.sort().map(l=>` ${Hc(l)}`).join(`,
`)});`;let a=t.replace(/@out\s+[^;]+;\s*/g,"");return a=a.replace("{{struct}}",`
${i}
`),a=a.replace("{{start}}",`
${s}
`),a=a.replace("{{return}}",`
${o}
`),a}function vs(n,t){let e=n;for(const r in t){const i=t[r];i.join(`
`).length?e=e.replace(`{{${r}}}`,`//-----${r} START-----//
${i.join(`
`)}
//----${r} FINISH----//`):e=e.replace(`{{${r}}}`,"")}return e}const Lt=Object.create(null),_r=new Map;let Kc=0;function Zc({template:n,bits:t}){const e=Qo(n,t);if(Lt[e])return Lt[e];const{vertex:r,fragment:i}=Jc(n,t);return Lt[e]=Jo(r,i,t),Lt[e]}function Qc({template:n,bits:t}){const e=Qo(n,t);return Lt[e]||(Lt[e]=Jo(n.vertex,n.fragment,t)),Lt[e]}function Jc(n,t){const e=t.map(o=>o.vertex).filter(o=>!!o),r=t.map(o=>o.fragment).filter(o=>!!o);let i=gs(e,n.vertex,!0);i=qc(e,i);const s=gs(r,n.fragment,!0);return{vertex:i,fragment:s}}function Qo(n,t){return t.map(e=>(_r.has(e)||_r.set(e,Kc++),_r.get(e))).sort((e,r)=>e-r).join("-")+n.vertex+n.fragment}function Jo(n,t,e){const r=ps(n),i=ps(t);return e.forEach(s=>{ds(s.vertex,r,s.name),ds(s.fragment,i,s.name)}),{vertex:vs(n,r),fragment:vs(t,i)}}const th=`
    @in aPosition: vec2<f32>;
    @in aUV: vec2<f32>;

    @out @builtin(position) vPosition: vec4<f32>;
    @out vUV : vec2<f32>;
    @out vColor : vec4<f32>;

    {{header}}

    struct VSOutput {
        {{struct}}
    };

    @vertex
    fn main( {{in}} ) -> VSOutput {

        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
        var modelMatrix = mat3x3<f32>(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        var position = aPosition;
        var uv = aUV;

        {{start}}
        
        vColor = vec4<f32>(1., 1., 1., 1.);

        {{main}}

        vUV = uv;

        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);
       
        vColor *= globalUniforms.uWorldColorAlpha;

        {{end}}

        {{return}}
    };
`,eh=`
    @in vUV : vec2<f32>;
    @in vColor : vec4<f32>;
   
    {{header}}

    @fragment
    fn main(
        {{in}}
      ) -> @location(0) vec4<f32> {
        
        {{start}}

        var outColor:vec4<f32>;
      
        {{main}}
        
        var finalColor:vec4<f32> = outColor * vColor;

        {{end}}

        return finalColor;
      };
`,nh=`
    in vec2 aPosition;
    in vec2 aUV;

    out vec4 vColor;
    out vec2 vUV;

    {{header}}

    void main(void){

        mat3 worldTransformMatrix = uWorldTransformMatrix;
        mat3 modelMatrix = mat3(
            1.0, 0.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 0.0, 1.0
          );
        vec2 position = aPosition;
        vec2 uv = aUV;
        
        {{start}}
        
        vColor = vec4(1.);
        
        {{main}}
        
        vUV = uv;
        
        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

        vColor *= uWorldColorAlpha;

        {{end}}
    }
`,rh=`
   
    in vec4 vColor;
    in vec2 vUV;

    out vec4 finalColor;

    {{header}}

    void main(void) {
        
        {{start}}

        vec4 outColor;
      
        {{main}}
        
        finalColor = outColor * vColor;
        
        {{end}}
    }
`,ih={name:"global-uniforms-bit",vertex:{header:`
        struct GlobalUniforms {
            uProjectionMatrix:mat3x3<f32>,
            uWorldTransformMatrix:mat3x3<f32>,
            uWorldColorAlpha: vec4<f32>,
            uResolution: vec2<f32>,
        }

        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
        `}},sh={name:"global-uniforms-bit",vertex:{header:`
          uniform mat3 uProjectionMatrix;
          uniform mat3 uWorldTransformMatrix;
          uniform vec4 uWorldColorAlpha;
          uniform vec2 uResolution;
        `}};function oh({bits:n,name:t}){const e=Zc({template:{fragment:eh,vertex:th},bits:[ih,...n]});return k.from({name:t,vertex:{source:e.vertex,entryPoint:"main"},fragment:{source:e.fragment,entryPoint:"main"}})}function ah({bits:n,name:t}){return new U({name:t,...Qc({template:{vertex:nh,fragment:rh},bits:[sh,...n]})})}const lh={name:"color-bit",vertex:{header:`
            @in aColor: vec4<f32>;
        `,main:`
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
        `}},uh={name:"color-bit",vertex:{header:`
            in vec4 aColor;
        `,main:`
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
        `}},br={};function ch(n){const t=[];if(n===1)t.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;"),t.push("@group(1) @binding(1) var textureSampler1: sampler;");else{let e=0;for(let r=0;r<n;r++)t.push(`@group(1) @binding(${e++}) var textureSource${r+1}: texture_2d<f32>;`),t.push(`@group(1) @binding(${e++}) var textureSampler${r+1}: sampler;`)}return t.join(`
`)}function hh(n){const t=[];if(n===1)t.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");else{t.push("switch vTextureId {");for(let e=0;e<n;e++)e===n-1?t.push("  default:{"):t.push(`  case ${e}:{`),t.push(`      outColor = textureSampleGrad(textureSource${e+1}, textureSampler${e+1}, vUV, uvDx, uvDy);`),t.push("      break;}");t.push("}")}return t.join(`
`)}function fh(n){return br[n]||(br[n]={name:"texture-batch-bit",vertex:{header:`
                @in aTextureIdAndRound: vec2<u32>;
                @out @interpolate(flat) vTextureId : u32;
            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1)
                {
                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
                }
            `},fragment:{header:`
                @in @interpolate(flat) vTextureId: u32;

                ${ch(n)}
            `,main:`
                var uvDx = dpdx(vUV);
                var uvDy = dpdy(vUV);

                ${hh(n)}
            `}}),br[n]}const Sr={};function dh(n){const t=[];for(let e=0;e<n;e++)e>0&&t.push("else"),e<n-1&&t.push(`if(vTextureId < ${e}.5)`),t.push("{"),t.push(`	outColor = texture(uTextures[${e}], vUV);`),t.push("}");return t.join(`
`)}function ph(n){return Sr[n]||(Sr[n]={name:"texture-batch-bit",vertex:{header:`
                in vec2 aTextureIdAndRound;
                out float vTextureId;

            `,main:`
                vTextureId = aTextureIdAndRound.y;
            `,end:`
                if(aTextureIdAndRound.x == 1.)
                {
                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
                }
            `},fragment:{header:`
                in float vTextureId;

                uniform sampler2D uTextures[${n}];

            `,main:`

                ${dh(n)}
            `}}),Sr[n]}const mh={name:"round-pixels-bit",vertex:{header:`
            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
            {
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},gh={name:"round-pixels-bit",vertex:{header:`   
            vec2 roundPixels(vec2 position, vec2 targetSize)
            {       
                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
            }
        `}},ys={};function xh(n){let t=ys[n];if(t)return t;const e=new Int32Array(n);for(let r=0;r<n;r++)e[r]=r;return t=ys[n]=new $n({uTextures:{value:e,type:"i32",size:n}},{isStatic:!0}),t}class vh extends Vn{constructor(t){const e=ah({name:"batch",bits:[uh,ph(t),gh]}),r=oh({name:"batch",bits:[lh,fh(t),mh]});super({glProgram:e,gpuProgram:r,resources:{batchSamplers:xh(t)}})}}let _s=null;const ta=class ea extends Dc{constructor(){super(...arguments),this.geometry=new Xc,this.shader=_s||(_s=new vh(this.maxTextures)),this.name=ea.extension.name,this.vertexSize=6}packAttributes(t,e,r,i,s){const o=s<<16|t.roundPixels&65535,a=t.transform,l=a.a,u=a.b,c=a.c,h=a.d,d=a.tx,f=a.ty,{positions:p,uvs:g}=t,m=t.color,x=t.attributeOffset,y=x+t.attributeSize;for(let v=x;v<y;v++){const _=v*2,w=p[_],b=p[_+1];e[i++]=l*w+c*b+d,e[i++]=h*b+u*w+f,e[i++]=g[_],e[i++]=g[_+1],r[i++]=m,r[i++]=o}}packQuadAttributes(t,e,r,i,s){const o=t.texture,a=t.transform,l=a.a,u=a.b,c=a.c,h=a.d,d=a.tx,f=a.ty,p=t.bounds,g=p.maxX,m=p.minX,x=p.maxY,y=p.minY,v=o.uvs,_=t.color,w=s<<16|t.roundPixels&65535;e[i+0]=l*m+c*y+d,e[i+1]=h*y+u*m+f,e[i+2]=v.x0,e[i+3]=v.y0,r[i+4]=_,r[i+5]=w,e[i+6]=l*g+c*y+d,e[i+7]=h*y+u*g+f,e[i+8]=v.x1,e[i+9]=v.y1,r[i+10]=_,r[i+11]=w,e[i+12]=l*g+c*x+d,e[i+13]=h*x+u*g+f,e[i+14]=v.x2,e[i+15]=v.y2,r[i+16]=_,r[i+17]=w,e[i+18]=l*m+c*x+d,e[i+19]=h*x+u*m+f,e[i+20]=v.x3,e[i+21]=v.y3,r[i+22]=_,r[i+23]=w}};ta.extension={type:[M.Batcher],name:"default"};let yh=ta;function _h(n,t,e,r,i,s,o,a=null){let l=0;e*=t,i*=s;const u=a.a,c=a.b,h=a.c,d=a.d,f=a.tx,p=a.ty;for(;l<o;){const g=n[e],m=n[e+1];r[i]=u*g+h*m+f,r[i+1]=c*g+d*m+p,i+=s,e+=t,l++}}function bh(n,t,e,r){let i=0;for(t*=e;i<r;)n[t]=0,n[t+1]=0,t+=e,i++}function na(n,t,e,r,i){const s=t.a,o=t.b,a=t.c,l=t.d,u=t.tx,c=t.ty;e||(e=0),r||(r=2),i||(i=n.length/r-e);let h=e*r;for(let d=0;d<i;d++){const f=n[h],p=n[h+1];n[h]=s*f+a*p+u,n[h+1]=o*f+l*p+c,h+=r}}const Sh=new D;class ra{constructor(){this.packAsQuad=!1,this.batcherName="default",this.topology="triangle-list",this.applyTransform=!0,this.roundPixels=0,this._batcher=null,this._batch=null}get uvs(){return this.geometryData.uvs}get positions(){return this.geometryData.vertices}get indices(){return this.geometryData.indices}get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}get color(){const t=this.baseColor,e=t>>16|t&65280|(t&255)<<16,r=this.renderable;return r?lo(e,r.groupColor)+(this.alpha*r.groupAlpha*255<<24):e+(this.alpha*255<<24)}get transform(){var t;return((t=this.renderable)==null?void 0:t.groupTransform)||Sh}copyTo(t){t.indexOffset=this.indexOffset,t.indexSize=this.indexSize,t.attributeOffset=this.attributeOffset,t.attributeSize=this.attributeSize,t.baseColor=this.baseColor,t.alpha=this.alpha,t.texture=this.texture,t.geometryData=this.geometryData,t.topology=this.topology}reset(){this.applyTransform=!0,this.renderable=null,this.topology="triangle-list"}}const We={extension:{type:M.ShapeBuilder,name:"circle"},build(n,t){let e,r,i,s,o,a;if(n.type==="circle"){const _=n;e=_.x,r=_.y,o=a=_.radius,i=s=0}else if(n.type==="ellipse"){const _=n;e=_.x,r=_.y,o=_.halfWidth,a=_.halfHeight,i=s=0}else{const _=n,w=_.width/2,b=_.height/2;e=_.x+w,r=_.y+b,o=a=Math.max(0,Math.min(_.radius,Math.min(w,b))),i=w-o,s=b-a}if(!(o>=0&&a>=0&&i>=0&&s>=0))return t;const l=Math.ceil(2.3*Math.sqrt(o+a)),u=l*8+(i?4:0)+(s?4:0);if(u===0)return t;if(l===0)return t[0]=t[6]=e+i,t[1]=t[3]=r+s,t[2]=t[4]=e-i,t[5]=t[7]=r-s,t;let c=0,h=l*4+(i?2:0)+2,d=h,f=u,p=i+o,g=s,m=e+p,x=e-p,y=r+g;if(t[c++]=m,t[c++]=y,t[--h]=y,t[--h]=x,s){const _=r-g;t[d++]=x,t[d++]=_,t[--f]=_,t[--f]=m}for(let _=1;_<l;_++){const w=Math.PI/2*(_/l),b=i+Math.cos(w)*o,S=s+Math.sin(w)*a,I=e+b,B=e-b,T=r+S,A=r-S;t[c++]=I,t[c++]=T,t[--h]=T,t[--h]=B,t[d++]=B,t[d++]=A,t[--f]=A,t[--f]=I}p=i,g=s+a,m=e+p,x=e-p,y=r+g;const v=r-g;return t[c++]=m,t[c++]=y,t[--f]=v,t[--f]=m,i&&(t[c++]=x,t[c++]=y,t[--f]=v,t[--f]=x),t},triangulate(n,t,e,r,i,s){if(n.length===0)return;let o=0,a=0;for(let c=0;c<n.length;c+=2)o+=n[c],a+=n[c+1];o/=n.length/2,a/=n.length/2;let l=r;t[l*e]=o,t[l*e+1]=a;const u=l++;for(let c=0;c<n.length;c+=2)t[l*e]=n[c],t[l*e+1]=n[c+1],c>0&&(i[s++]=l,i[s++]=u,i[s++]=l-1),l++;i[s++]=u+1,i[s++]=u,i[s++]=l-1}},Ch={...We,extension:{...We.extension,name:"ellipse"}},wh={...We,extension:{...We.extension,name:"roundedRectangle"}},ia=1e-4,bs=1e-4;function Ah(n){const t=n.length;if(t<6)return 1;let e=0;for(let r=0,i=n[t-2],s=n[t-1];r<t;r+=2){const o=n[r],a=n[r+1];e+=(o-i)*(a+s),i=o,s=a}return e<0?-1:1}function Ss(n,t,e,r,i,s,o,a){const l=n-e*i,u=t-r*i,c=n+e*s,h=t+r*s;let d,f;o?(d=r,f=-e):(d=-r,f=e);const p=l+d,g=u+f,m=c+d,x=h+f;return a.push(p,g),a.push(m,x),2}function Vt(n,t,e,r,i,s,o,a){const l=e-n,u=r-t;let c=Math.atan2(l,u),h=Math.atan2(i-n,s-t);a&&c<h?c+=Math.PI*2:!a&&c>h&&(h+=Math.PI*2);let d=c;const f=h-c,p=Math.abs(f),g=Math.sqrt(l*l+u*u),m=(15*p*Math.sqrt(g)/Math.PI>>0)+1,x=f/m;if(d+=x,a){o.push(n,t),o.push(e,r);for(let y=1,v=d;y<m;y++,v+=x)o.push(n,t),o.push(n+Math.sin(v)*g,t+Math.cos(v)*g);o.push(n,t),o.push(i,s)}else{o.push(e,r),o.push(n,t);for(let y=1,v=d;y<m;y++,v+=x)o.push(n+Math.sin(v)*g,t+Math.cos(v)*g),o.push(n,t);o.push(i,s),o.push(n,t)}return m*2}function Th(n,t,e,r,i,s){const o=ia;if(n.length===0)return;const a=t;let l=a.alignment;if(t.alignment!==.5){let E=Ah(n);l=(l-.5)*E+.5}const u=new at(n[0],n[1]),c=new at(n[n.length-2],n[n.length-1]),h=r,d=Math.abs(u.x-c.x)<o&&Math.abs(u.y-c.y)<o;if(h){n=n.slice(),d&&(n.pop(),n.pop(),c.set(n[n.length-2],n[n.length-1]));const E=(u.x+c.x)*.5,ot=(c.y+u.y)*.5;n.unshift(E,ot),n.push(E,ot)}const f=i,p=n.length/2;let g=n.length;const m=f.length/2,x=a.width/2,y=x*x,v=a.miterLimit*a.miterLimit;let _=n[0],w=n[1],b=n[2],S=n[3],I=0,B=0,T=-(w-S),A=_-b,X=0,Y=0,H=Math.sqrt(T*T+A*A);T/=H,A/=H,T*=x,A*=x;const mt=l,R=(1-mt)*2,C=mt*2;h||(a.cap==="round"?g+=Vt(_-T*(R-C)*.5,w-A*(R-C)*.5,_-T*R,w-A*R,_+T*C,w+A*C,f,!0)+2:a.cap==="square"&&(g+=Ss(_,w,T,A,R,C,!0,f))),f.push(_-T*R,w-A*R),f.push(_+T*C,w+A*C);for(let E=1;E<p-1;++E){_=n[(E-1)*2],w=n[(E-1)*2+1],b=n[E*2],S=n[E*2+1],I=n[(E+1)*2],B=n[(E+1)*2+1],T=-(w-S),A=_-b,H=Math.sqrt(T*T+A*A),T/=H,A/=H,T*=x,A*=x,X=-(S-B),Y=b-I,H=Math.sqrt(X*X+Y*Y),X/=H,Y/=H,X*=x,Y*=x;const ot=b-_,Bt=w-S,Ce=b-I,we=B-S,Ri=ot*Ce+Bt*we,tn=Bt*Ce-we*ot,Ae=tn<0;if(Math.abs(tn)<.001*Math.abs(Ri)){f.push(b-T*R,S-A*R),f.push(b+T*C,S+A*C),Ri>=0&&(a.join==="round"?g+=Vt(b,S,b-T*R,S-A*R,b-X*R,S-Y*R,f,!1)+4:g+=2,f.push(b-X*C,S-Y*C),f.push(b+X*R,S+Y*R));continue}const Ei=(-T+_)*(-A+S)-(-T+b)*(-A+w),ki=(-X+I)*(-Y+S)-(-X+b)*(-Y+B),en=(ot*ki-Ce*Ei)/tn,nn=(we*Ei-Bt*ki)/tn,jn=(en-b)*(en-b)+(nn-S)*(nn-S),Dt=b+(en-b)*R,Gt=S+(nn-S)*R,Nt=b-(en-b)*C,$t=S-(nn-S)*C,Fl=Math.min(ot*ot+Bt*Bt,Ce*Ce+we*we),Ui=Ae?R:C,Ml=Fl+Ui*Ui*y;jn<=Ml?a.join==="bevel"||jn/y>v?(Ae?(f.push(Dt,Gt),f.push(b+T*C,S+A*C),f.push(Dt,Gt),f.push(b+X*C,S+Y*C)):(f.push(b-T*R,S-A*R),f.push(Nt,$t),f.push(b-X*R,S-Y*R),f.push(Nt,$t)),g+=2):a.join==="round"?Ae?(f.push(Dt,Gt),f.push(b+T*C,S+A*C),g+=Vt(b,S,b+T*C,S+A*C,b+X*C,S+Y*C,f,!0)+4,f.push(Dt,Gt),f.push(b+X*C,S+Y*C)):(f.push(b-T*R,S-A*R),f.push(Nt,$t),g+=Vt(b,S,b-T*R,S-A*R,b-X*R,S-Y*R,f,!1)+4,f.push(b-X*R,S-Y*R),f.push(Nt,$t)):(f.push(Dt,Gt),f.push(Nt,$t)):(f.push(b-T*R,S-A*R),f.push(b+T*C,S+A*C),a.join==="round"?Ae?g+=Vt(b,S,b+T*C,S+A*C,b+X*C,S+Y*C,f,!0)+2:g+=Vt(b,S,b-T*R,S-A*R,b-X*R,S-Y*R,f,!1)+2:a.join==="miter"&&jn/y<=v&&(Ae?(f.push(Nt,$t),f.push(Nt,$t)):(f.push(Dt,Gt),f.push(Dt,Gt)),g+=2),f.push(b-X*R,S-Y*R),f.push(b+X*C,S+Y*C),g+=2)}_=n[(p-2)*2],w=n[(p-2)*2+1],b=n[(p-1)*2],S=n[(p-1)*2+1],T=-(w-S),A=_-b,H=Math.sqrt(T*T+A*A),T/=H,A/=H,T*=x,A*=x,f.push(b-T*R,S-A*R),f.push(b+T*C,S+A*C),h||(a.cap==="round"?g+=Vt(b-T*(R-C)*.5,S-A*(R-C)*.5,b-T*R,S-A*R,b+T*C,S+A*C,f,!1)+2:a.cap==="square"&&(g+=Ss(b,S,T,A,R,C,!1,f)));const W=bs*bs;for(let E=m;E<g+m-2;++E)_=f[E*2],w=f[E*2+1],b=f[(E+1)*2],S=f[(E+1)*2+1],I=f[(E+2)*2],B=f[(E+2)*2+1],!(Math.abs(_*(S-B)+b*(B-w)+I*(w-S))<W)&&s.push(E,E+1,E+2)}function Ph(n,t,e,r){const i=ia;if(n.length===0)return;const s=n[0],o=n[1],a=n[n.length-2],l=n[n.length-1],u=t||Math.abs(s-a)<i&&Math.abs(o-l)<i,c=e,h=n.length/2,d=c.length/2;for(let f=0;f<h;f++)c.push(n[f*2]),c.push(n[f*2+1]);for(let f=0;f<h-1;f++)r.push(d+f,d+f+1);u&&r.push(d+h-1,d)}function sa(n,t,e,r,i,s,o){const a=mc(n,t,2);if(!a)return;for(let u=0;u<a.length;u+=3)s[o++]=a[u]+i,s[o++]=a[u+1]+i,s[o++]=a[u+2]+i;let l=i*r;for(let u=0;u<n.length;u+=2)e[l]=n[u],e[l+1]=n[u+1],l+=r}const Fh=[],Mh={extension:{type:M.ShapeBuilder,name:"polygon"},build(n,t){for(let e=0;e<n.points.length;e++)t[e]=n.points[e];return t},triangulate(n,t,e,r,i,s){sa(n,Fh,t,e,r,i,s)}},zh={extension:{type:M.ShapeBuilder,name:"rectangle"},build(n,t){const e=n,r=e.x,i=e.y,s=e.width,o=e.height;return s>=0&&o>=0&&(t[0]=r,t[1]=i,t[2]=r+s,t[3]=i,t[4]=r+s,t[5]=i+o,t[6]=r,t[7]=i+o),t},triangulate(n,t,e,r,i,s){let o=0;r*=e,t[r+o]=n[0],t[r+o+1]=n[1],o+=e,t[r+o]=n[2],t[r+o+1]=n[3],o+=e,t[r+o]=n[6],t[r+o+1]=n[7],o+=e,t[r+o]=n[4],t[r+o+1]=n[5],o+=e;const a=r/e;i[s++]=a,i[s++]=a+1,i[s++]=a+2,i[s++]=a+1,i[s++]=a+3,i[s++]=a+2}},Ih={extension:{type:M.ShapeBuilder,name:"triangle"},build(n,t){return t[0]=n.x,t[1]=n.y,t[2]=n.x2,t[3]=n.y2,t[4]=n.x3,t[5]=n.y3,t},triangulate(n,t,e,r,i,s){let o=0;r*=e,t[r+o]=n[0],t[r+o+1]=n[1],o+=e,t[r+o]=n[2],t[r+o+1]=n[3],o+=e,t[r+o]=n[4],t[r+o+1]=n[5];const a=r/e;i[s++]=a,i[s++]=a+1,i[s++]=a+2}},Hn={};ft.handleByMap(M.ShapeBuilder,Hn);ft.add(zh,Mh,Ih,We,Ch,wh);const Oh=new nt;function Rh(n,t){const{geometryData:e,batches:r}=t;r.length=0,e.indices.length=0,e.vertices.length=0,e.uvs.length=0;for(let i=0;i<n.instructions.length;i++){const s=n.instructions[i];if(s.action==="texture")Eh(s.data,r,e);else if(s.action==="fill"||s.action==="stroke"){const o=s.action==="stroke",a=s.data.path.shapePath,l=s.data.style,u=s.data.hole;o&&u&&Cs(u.shapePath,l,null,!0,r,e),Cs(a,l,u,o,r,e)}}}function Eh(n,t,e){const{vertices:r,uvs:i,indices:s}=e,o=s.length,a=r.length/2,l=[],u=Hn.rectangle,c=Oh,h=n.image;c.x=n.dx,c.y=n.dy,c.width=n.dw,c.height=n.dh;const d=n.transform;u.build(c,l),d&&na(l,d),u.triangulate(l,r,2,a,s,o);const f=h.uvs;i.push(f.x0,f.y0,f.x1,f.y1,f.x3,f.y3,f.x2,f.y2);const p=kt.get(ra);p.indexOffset=o,p.indexSize=s.length-o,p.attributeOffset=a,p.attributeSize=r.length/2-a,p.baseColor=n.style,p.alpha=n.alpha,p.texture=h,p.geometryData=e,t.push(p)}function Cs(n,t,e,r,i,s){const{vertices:o,uvs:a,indices:l}=s,u=n.shapePrimitives.length-1;n.shapePrimitives.forEach(({shape:c,transform:h},d)=>{const f=l.length,p=o.length/2,g=[],m=Hn[c.type];let x="triangle-list";if(m.build(c,g),h&&na(g,h),r){const w=c.closePath??!0,b=t;b.pixelLine?(Ph(g,w,o,l),x="line-list"):Th(g,b,!1,w,o,l)}else if(e&&u===d){u!==0&&console.warn("[Pixi Graphics] only the last shape have be cut out");const w=[],b=g.slice();kh(e.shapePath).forEach(I=>{w.push(b.length/2),b.push(...I)}),sa(b,w,o,2,p,l,f)}else m.triangulate(g,o,2,p,l,f);const y=a.length/2,v=t.texture;if(v!==O.WHITE){const w=t.matrix;w&&(h&&w.append(h.clone().invert()),_h(o,2,p,a,y,2,o.length/2-p,w))}else bh(a,y,2,o.length/2-p);const _=kt.get(ra);_.indexOffset=f,_.indexSize=l.length-f,_.attributeOffset=p,_.attributeSize=o.length/2-p,_.baseColor=t.color,_.alpha=t.alpha,_.texture=v,_.geometryData=s,_.topology=x,i.push(_)})}function kh(n){if(!n)return[];const t=n.shapePrimitives,e=[];for(let r=0;r<t.length;r++){const i=t[r].shape,s=[];Hn[i.type].build(i,s),e.push(s)}return e}class Uh{constructor(){this.batches=[],this.geometryData={vertices:[],uvs:[],indices:[]}}}class Bh{constructor(){this.batcher=new yh,this.instructions=new fo}init(){this.instructions.reset()}get geometry(){return F(Gl,"GraphicsContextRenderData#geometry is deprecated, please use batcher.geometry instead."),this.batcher.geometry}}const Si=class jr{constructor(t){this._gpuContextHash={},this._graphicsDataContextHash=Object.create(null),t.renderableGC.addManagedHash(this,"_gpuContextHash"),t.renderableGC.addManagedHash(this,"_graphicsDataContextHash")}init(t){jr.defaultOptions.bezierSmoothness=(t==null?void 0:t.bezierSmoothness)??jr.defaultOptions.bezierSmoothness}getContextRenderData(t){return this._graphicsDataContextHash[t.uid]||this._initContextRenderData(t)}updateGpuContext(t){let e=this._gpuContextHash[t.uid]||this._initContext(t);if(t.dirty){e?this._cleanGraphicsContextData(t):e=this._initContext(t),Rh(t,e);const r=t.batchMode;t.customShader||r==="no-batch"?e.isBatchable=!1:r==="auto"&&(e.isBatchable=e.geometryData.vertices.length<400),t.dirty=!1}return e}getGpuContext(t){return this._gpuContextHash[t.uid]||this._initContext(t)}_initContextRenderData(t){const e=kt.get(Bh),{batches:r,geometryData:i}=this._gpuContextHash[t.uid],s=i.vertices.length,o=i.indices.length;for(let c=0;c<r.length;c++)r[c].applyTransform=!1;const a=e.batcher;a.ensureAttributeBuffer(s),a.ensureIndexBuffer(o),a.begin();for(let c=0;c<r.length;c++){const h=r[c];a.add(h)}a.finish(e.instructions);const l=a.geometry;l.indexBuffer.setDataWithSize(a.indexBuffer,a.indexSize,!0),l.buffers[0].setDataWithSize(a.attributeBuffer.float32View,a.attributeSize,!0);const u=a.batches;for(let c=0;c<u.length;c++){const h=u[c];h.bindGroup=Rc(h.textures.textures,h.textures.count)}return this._graphicsDataContextHash[t.uid]=e,e}_initContext(t){const e=new Uh;return e.context=t,this._gpuContextHash[t.uid]=e,t.on("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]}onGraphicsContextDestroy(t){this._cleanGraphicsContextData(t),t.off("destroy",this.onGraphicsContextDestroy,this),this._gpuContextHash[t.uid]=null}_cleanGraphicsContextData(t){const e=this._gpuContextHash[t.uid];e.isBatchable||this._graphicsDataContextHash[t.uid]&&(kt.return(this.getContextRenderData(t)),this._graphicsDataContextHash[t.uid]=null),e.batches&&e.batches.forEach(r=>{kt.return(r)})}destroy(){for(const t in this._gpuContextHash)this._gpuContextHash[t]&&this.onGraphicsContextDestroy(this._gpuContextHash[t].context)}};Si.extension={type:[M.WebGLSystem,M.WebGPUSystem,M.CanvasSystem],name:"graphicsContext"};Si.defaultOptions={bezierSmoothness:.5};let oa=Si;const Lh=8,pn=11920929e-14,Dh=1;function aa(n,t,e,r,i,s,o,a,l,u){const h=Math.min(.99,Math.max(0,u??oa.defaultOptions.bezierSmoothness));let d=(Dh-h)/1;return d*=d,Gh(t,e,r,i,s,o,a,l,n,d),n}function Gh(n,t,e,r,i,s,o,a,l,u){qr(n,t,e,r,i,s,o,a,l,u,0),l.push(o,a)}function qr(n,t,e,r,i,s,o,a,l,u,c){if(c>Lh)return;const h=(n+e)/2,d=(t+r)/2,f=(e+i)/2,p=(r+s)/2,g=(i+o)/2,m=(s+a)/2,x=(h+f)/2,y=(d+p)/2,v=(f+g)/2,_=(p+m)/2,w=(x+v)/2,b=(y+_)/2;if(c>0){let S=o-n,I=a-t;const B=Math.abs((e-o)*I-(r-a)*S),T=Math.abs((i-o)*I-(s-a)*S);if(B>pn&&T>pn){if((B+T)*(B+T)<=u*(S*S+I*I)){l.push(w,b);return}}else if(B>pn){if(B*B<=u*(S*S+I*I)){l.push(w,b);return}}else if(T>pn){if(T*T<=u*(S*S+I*I)){l.push(w,b);return}}else if(S=w-(n+o)/2,I=b-(t+a)/2,S*S+I*I<=u){l.push(w,b);return}}qr(n,t,h,d,x,y,w,b,l,u,c+1),qr(w,b,v,_,g,m,o,a,l,u,c+1)}const Nh=8,$h=11920929e-14,Vh=1;function Wh(n,t,e,r,i,s,o,a){const u=Math.min(.99,Math.max(0,a??oa.defaultOptions.bezierSmoothness));let c=(Vh-u)/1;return c*=c,Xh(t,e,r,i,s,o,n,c),n}function Xh(n,t,e,r,i,s,o,a){Kr(o,n,t,e,r,i,s,a,0),o.push(i,s)}function Kr(n,t,e,r,i,s,o,a,l){if(l>Nh)return;const u=(t+r)/2,c=(e+i)/2,h=(r+s)/2,d=(i+o)/2,f=(u+h)/2,p=(c+d)/2;let g=s-t,m=o-e;const x=Math.abs((r-s)*m-(i-o)*g);if(x>$h){if(x*x<=a*(g*g+m*m)){n.push(f,p);return}}else if(g=f-(t+s)/2,m=p-(e+o)/2,g*g+m*m<=a){n.push(f,p);return}Kr(n,t,e,u,c,f,p,a,l+1),Kr(n,f,p,h,d,s,o,a,l+1)}function la(n,t,e,r,i,s,o,a){let l=Math.abs(i-s);(!o&&i>s||o&&s>i)&&(l=2*Math.PI-l),a||(a=Math.max(6,Math.floor(6*Math.pow(r,1/3)*(l/Math.PI)))),a=Math.max(a,3);let u=l/a,c=i;u*=o?-1:1;for(let h=0;h<a+1;h++){const d=Math.cos(c),f=Math.sin(c),p=t+d*r,g=e+f*r;n.push(p,g),c+=u}}function Yh(n,t,e,r,i,s){const o=n[n.length-2],l=n[n.length-1]-e,u=o-t,c=i-e,h=r-t,d=Math.abs(l*h-u*c);if(d<1e-8||s===0){(n[n.length-2]!==t||n[n.length-1]!==e)&&n.push(t,e);return}const f=l*l+u*u,p=c*c+h*h,g=l*c+u*h,m=s*Math.sqrt(f)/d,x=s*Math.sqrt(p)/d,y=m*g/f,v=x*g/p,_=m*h+x*u,w=m*c+x*l,b=u*(x+y),S=l*(x+y),I=h*(m+v),B=c*(m+v),T=Math.atan2(S-w,b-_),A=Math.atan2(B-w,I-_);la(n,_+t,w+e,s,T,A,u*c>h*l)}const Be=Math.PI*2,Cr={centerX:0,centerY:0,ang1:0,ang2:0},wr=({x:n,y:t},e,r,i,s,o,a,l)=>{n*=e,t*=r;const u=i*n-s*t,c=s*n+i*t;return l.x=u+o,l.y=c+a,l};function Hh(n,t){const e=t===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(t/4),r=t===1.5707963267948966?.551915024494:e,i=Math.cos(n),s=Math.sin(n),o=Math.cos(n+t),a=Math.sin(n+t);return[{x:i-s*r,y:s+i*r},{x:o+a*r,y:a-o*r},{x:o,y:a}]}const ws=(n,t,e,r)=>{const i=n*r-t*e<0?-1:1;let s=n*e+t*r;return s>1&&(s=1),s<-1&&(s=-1),i*Math.acos(s)},jh=(n,t,e,r,i,s,o,a,l,u,c,h,d)=>{const f=Math.pow(i,2),p=Math.pow(s,2),g=Math.pow(c,2),m=Math.pow(h,2);let x=f*p-f*m-p*g;x<0&&(x=0),x/=f*m+p*g,x=Math.sqrt(x)*(o===a?-1:1);const y=x*i/s*h,v=x*-s/i*c,_=u*y-l*v+(n+e)/2,w=l*y+u*v+(t+r)/2,b=(c-y)/i,S=(h-v)/s,I=(-c-y)/i,B=(-h-v)/s,T=ws(1,0,b,S);let A=ws(b,S,I,B);a===0&&A>0&&(A-=Be),a===1&&A<0&&(A+=Be),d.centerX=_,d.centerY=w,d.ang1=T,d.ang2=A};function qh(n,t,e,r,i,s,o,a=0,l=0,u=0){if(s===0||o===0)return;const c=Math.sin(a*Be/360),h=Math.cos(a*Be/360),d=h*(t-r)/2+c*(e-i)/2,f=-c*(t-r)/2+h*(e-i)/2;if(d===0&&f===0)return;s=Math.abs(s),o=Math.abs(o);const p=Math.pow(d,2)/Math.pow(s,2)+Math.pow(f,2)/Math.pow(o,2);p>1&&(s*=Math.sqrt(p),o*=Math.sqrt(p)),jh(t,e,r,i,s,o,l,u,c,h,d,f,Cr);let{ang1:g,ang2:m}=Cr;const{centerX:x,centerY:y}=Cr;let v=Math.abs(m)/(Be/4);Math.abs(1-v)<1e-7&&(v=1);const _=Math.max(Math.ceil(v),1);m/=_;let w=n[n.length-2],b=n[n.length-1];const S={x:0,y:0};for(let I=0;I<_;I++){const B=Hh(g,m),{x:T,y:A}=wr(B[0],s,o,h,c,x,y,S),{x:X,y:Y}=wr(B[1],s,o,h,c,x,y,S),{x:H,y:mt}=wr(B[2],s,o,h,c,x,y,S);aa(n,w,b,T,A,X,Y,H,mt),w=H,b=mt,g+=m}}function Kh(n,t,e){const r=(o,a)=>{const l=a.x-o.x,u=a.y-o.y,c=Math.sqrt(l*l+u*u),h=l/c,d=u/c;return{len:c,nx:h,ny:d}},i=(o,a)=>{o===0?n.moveTo(a.x,a.y):n.lineTo(a.x,a.y)};let s=t[t.length-1];for(let o=0;o<t.length;o++){const a=t[o%t.length],l=a.radius??e;if(l<=0){i(o,a),s=a;continue}const u=t[(o+1)%t.length],c=r(a,s),h=r(a,u);if(c.len<1e-4||h.len<1e-4){i(o,a),s=a;continue}let d=Math.asin(c.nx*h.ny-c.ny*h.nx),f=1,p=!1;c.nx*h.nx-c.ny*-h.ny<0?d<0?d=Math.PI+d:(d=Math.PI-d,f=-1,p=!0):d>0&&(f=-1,p=!0);const g=d/2;let m,x=Math.abs(Math.cos(g)*l/Math.sin(g));x>Math.min(c.len/2,h.len/2)?(x=Math.min(c.len/2,h.len/2),m=Math.abs(x*Math.sin(g)/Math.cos(g))):m=l;const y=a.x+h.nx*x+-h.ny*m*f,v=a.y+h.ny*x+h.nx*m*f,_=Math.atan2(c.ny,c.nx)+Math.PI/2*f,w=Math.atan2(h.ny,h.nx)-Math.PI/2*f;o===0&&n.moveTo(y+Math.cos(_)*m,v+Math.sin(_)*m),n.arc(y,v,m,_,w,p),s=a}}function Zh(n,t,e,r){const i=(a,l)=>Math.sqrt((a.x-l.x)**2+(a.y-l.y)**2),s=(a,l,u)=>({x:a.x+(l.x-a.x)*u,y:a.y+(l.y-a.y)*u}),o=t.length;for(let a=0;a<o;a++){const l=t[(a+1)%o],u=l.radius??e;if(u<=0){a===0?n.moveTo(l.x,l.y):n.lineTo(l.x,l.y);continue}const c=t[a],h=t[(a+2)%o],d=i(c,l);let f;if(d<1e-4)f=l;else{const m=Math.min(d/2,u);f=s(l,c,m/d)}const p=i(h,l);let g;if(p<1e-4)g=l;else{const m=Math.min(p/2,u);g=s(l,h,m/p)}a===0?n.moveTo(f.x,f.y):n.lineTo(f.x,f.y),n.quadraticCurveTo(l.x,l.y,g.x,g.y,r)}}const Qh=new nt;class Jh{constructor(t){this.shapePrimitives=[],this._currentPoly=null,this._bounds=new Ot,this._graphicsPath2D=t}moveTo(t,e){return this.startPoly(t,e),this}lineTo(t,e){this._ensurePoly();const r=this._currentPoly.points,i=r[r.length-2],s=r[r.length-1];return(i!==t||s!==e)&&r.push(t,e),this}arc(t,e,r,i,s,o){this._ensurePoly(!1);const a=this._currentPoly.points;return la(a,t,e,r,i,s,o),this}arcTo(t,e,r,i,s){this._ensurePoly();const o=this._currentPoly.points;return Yh(o,t,e,r,i,s),this}arcToSvg(t,e,r,i,s,o,a){const l=this._currentPoly.points;return qh(l,this._currentPoly.lastX,this._currentPoly.lastY,o,a,t,e,r,i,s),this}bezierCurveTo(t,e,r,i,s,o,a){this._ensurePoly();const l=this._currentPoly;return aa(this._currentPoly.points,l.lastX,l.lastY,t,e,r,i,s,o,a),this}quadraticCurveTo(t,e,r,i,s){this._ensurePoly();const o=this._currentPoly;return Wh(this._currentPoly.points,o.lastX,o.lastY,t,e,r,i,s),this}closePath(){return this.endPoly(!0),this}addPath(t,e){this.endPoly(),e&&!e.isIdentity()&&(t=t.clone(!0),t.transform(e));for(let r=0;r<t.instructions.length;r++){const i=t.instructions[r];this[i.action](...i.data)}return this}finish(t=!1){this.endPoly(t)}rect(t,e,r,i,s){return this.drawShape(new nt(t,e,r,i),s),this}circle(t,e,r,i){return this.drawShape(new yi(t,e,r),i),this}poly(t,e,r){const i=new Ue(t);return i.closePath=e,this.drawShape(i,r),this}regularPoly(t,e,r,i,s=0,o){i=Math.max(i|0,3);const a=-1*Math.PI/2+s,l=Math.PI*2/i,u=[];for(let c=0;c<i;c++){const h=a-c*l;u.push(t+r*Math.cos(h),e+r*Math.sin(h))}return this.poly(u,!0,o),this}roundPoly(t,e,r,i,s,o=0,a){if(i=Math.max(i|0,3),s<=0)return this.regularPoly(t,e,r,i,o);const l=r*Math.sin(Math.PI/i)-.001;s=Math.min(s,l);const u=-1*Math.PI/2+o,c=Math.PI*2/i,h=(i-2)*Math.PI/i/2;for(let d=0;d<i;d++){const f=d*c+u,p=t+r*Math.cos(f),g=e+r*Math.sin(f),m=f+Math.PI+h,x=f-Math.PI-h,y=p+s*Math.cos(m),v=g+s*Math.sin(m),_=p+s*Math.cos(x),w=g+s*Math.sin(x);d===0?this.moveTo(y,v):this.lineTo(y,v),this.quadraticCurveTo(p,g,_,w,a)}return this.closePath()}roundShape(t,e,r=!1,i){return t.length<3?this:(r?Zh(this,t,e,i):Kh(this,t,e),this.closePath())}filletRect(t,e,r,i,s){if(s===0)return this.rect(t,e,r,i);const o=Math.min(r,i)/2,a=Math.min(o,Math.max(-o,s)),l=t+r,u=e+i,c=a<0?-a:0,h=Math.abs(a);return this.moveTo(t,e+h).arcTo(t+c,e+c,t+h,e,h).lineTo(l-h,e).arcTo(l-c,e+c,l,e+h,h).lineTo(l,u-h).arcTo(l-c,u-c,t+r-h,u,h).lineTo(t+h,u).arcTo(t+c,u-c,t,u-h,h).closePath()}chamferRect(t,e,r,i,s,o){if(s<=0)return this.rect(t,e,r,i);const a=Math.min(s,Math.min(r,i)/2),l=t+r,u=e+i,c=[t+a,e,l-a,e,l,e+a,l,u-a,l-a,u,t+a,u,t,u-a,t,e+a];for(let h=c.length-1;h>=2;h-=2)c[h]===c[h-2]&&c[h-1]===c[h-3]&&c.splice(h-1,2);return this.poly(c,!0,o)}ellipse(t,e,r,i,s){return this.drawShape(new _i(t,e,r,i),s),this}roundRect(t,e,r,i,s,o){return this.drawShape(new bi(t,e,r,i,s),o),this}drawShape(t,e){return this.endPoly(),this.shapePrimitives.push({shape:t,transform:e}),this}startPoly(t,e){let r=this._currentPoly;return r&&this.endPoly(),r=new Ue,r.points.push(t,e),this._currentPoly=r,this}endPoly(t=!1){const e=this._currentPoly;return e&&e.points.length>2&&(e.closePath=t,this.shapePrimitives.push({shape:e})),this._currentPoly=null,this}_ensurePoly(t=!0){if(!this._currentPoly&&(this._currentPoly=new Ue,t)){const e=this.shapePrimitives[this.shapePrimitives.length-1];if(e){let r=e.shape.x,i=e.shape.y;if(e.transform&&!e.transform.isIdentity()){const s=e.transform,o=r;r=s.a*r+s.c*i+s.tx,i=s.b*o+s.d*i+s.ty}this._currentPoly.points.push(r,i)}else this._currentPoly.points.push(0,0)}}buildPath(){const t=this._graphicsPath2D;this.shapePrimitives.length=0,this._currentPoly=null;for(let e=0;e<t.instructions.length;e++){const r=t.instructions[e];this[r.action](...r.data)}this.finish()}get bounds(){const t=this._bounds;t.clear();const e=this.shapePrimitives;for(let r=0;r<e.length;r++){const i=e[r],s=i.shape.getBounds(Qh);i.transform?t.addRect(s,i.transform):t.addRect(s)}return t}}class ye{constructor(t){this.instructions=[],this.uid=rt("graphicsPath"),this._dirty=!0,typeof t=="string"?Fc(t,this):this.instructions=(t==null?void 0:t.slice())??[]}get shapePath(){return this._shapePath||(this._shapePath=new Jh(this)),this._dirty&&(this._dirty=!1,this._shapePath.buildPath()),this._shapePath}addPath(t,e){return t=t.clone(),this.instructions.push({action:"addPath",data:[t,e]}),this._dirty=!0,this}arc(...t){return this.instructions.push({action:"arc",data:t}),this._dirty=!0,this}arcTo(...t){return this.instructions.push({action:"arcTo",data:t}),this._dirty=!0,this}arcToSvg(...t){return this.instructions.push({action:"arcToSvg",data:t}),this._dirty=!0,this}bezierCurveTo(...t){return this.instructions.push({action:"bezierCurveTo",data:t}),this._dirty=!0,this}bezierCurveToShort(t,e,r,i,s){const o=this.instructions[this.instructions.length-1],a=this.getLastPoint(at.shared);let l=0,u=0;if(!o||o.action!=="bezierCurveTo")l=a.x,u=a.y;else{l=o.data[2],u=o.data[3];const c=a.x,h=a.y;l=c+(c-l),u=h+(h-u)}return this.instructions.push({action:"bezierCurveTo",data:[l,u,t,e,r,i,s]}),this._dirty=!0,this}closePath(){return this.instructions.push({action:"closePath",data:[]}),this._dirty=!0,this}ellipse(...t){return this.instructions.push({action:"ellipse",data:t}),this._dirty=!0,this}lineTo(...t){return this.instructions.push({action:"lineTo",data:t}),this._dirty=!0,this}moveTo(...t){return this.instructions.push({action:"moveTo",data:t}),this}quadraticCurveTo(...t){return this.instructions.push({action:"quadraticCurveTo",data:t}),this._dirty=!0,this}quadraticCurveToShort(t,e,r){const i=this.instructions[this.instructions.length-1],s=this.getLastPoint(at.shared);let o=0,a=0;if(!i||i.action!=="quadraticCurveTo")o=s.x,a=s.y;else{o=i.data[0],a=i.data[1];const l=s.x,u=s.y;o=l+(l-o),a=u+(u-a)}return this.instructions.push({action:"quadraticCurveTo",data:[o,a,t,e,r]}),this._dirty=!0,this}rect(t,e,r,i,s){return this.instructions.push({action:"rect",data:[t,e,r,i,s]}),this._dirty=!0,this}circle(t,e,r,i){return this.instructions.push({action:"circle",data:[t,e,r,i]}),this._dirty=!0,this}roundRect(...t){return this.instructions.push({action:"roundRect",data:t}),this._dirty=!0,this}poly(...t){return this.instructions.push({action:"poly",data:t}),this._dirty=!0,this}regularPoly(...t){return this.instructions.push({action:"regularPoly",data:t}),this._dirty=!0,this}roundPoly(...t){return this.instructions.push({action:"roundPoly",data:t}),this._dirty=!0,this}roundShape(...t){return this.instructions.push({action:"roundShape",data:t}),this._dirty=!0,this}filletRect(...t){return this.instructions.push({action:"filletRect",data:t}),this._dirty=!0,this}chamferRect(...t){return this.instructions.push({action:"chamferRect",data:t}),this._dirty=!0,this}star(t,e,r,i,s,o,a){s||(s=i/2);const l=-1*Math.PI/2+o,u=r*2,c=Math.PI*2/u,h=[];for(let d=0;d<u;d++){const f=d%2?s:i,p=d*c+l;h.push(t+f*Math.cos(p),e+f*Math.sin(p))}return this.poly(h,!0,a),this}clone(t=!1){const e=new ye;if(!t)e.instructions=this.instructions.slice();else for(let r=0;r<this.instructions.length;r++){const i=this.instructions[r];e.instructions.push({action:i.action,data:i.data.slice()})}return e}clear(){return this.instructions.length=0,this._dirty=!0,this}transform(t){if(t.isIdentity())return this;const e=t.a,r=t.b,i=t.c,s=t.d,o=t.tx,a=t.ty;let l=0,u=0,c=0,h=0,d=0,f=0,p=0,g=0;for(let m=0;m<this.instructions.length;m++){const x=this.instructions[m],y=x.data;switch(x.action){case"moveTo":case"lineTo":l=y[0],u=y[1],y[0]=e*l+i*u+o,y[1]=r*l+s*u+a;break;case"bezierCurveTo":c=y[0],h=y[1],d=y[2],f=y[3],l=y[4],u=y[5],y[0]=e*c+i*h+o,y[1]=r*c+s*h+a,y[2]=e*d+i*f+o,y[3]=r*d+s*f+a,y[4]=e*l+i*u+o,y[5]=r*l+s*u+a;break;case"quadraticCurveTo":c=y[0],h=y[1],l=y[2],u=y[3],y[0]=e*c+i*h+o,y[1]=r*c+s*h+a,y[2]=e*l+i*u+o,y[3]=r*l+s*u+a;break;case"arcToSvg":l=y[5],u=y[6],p=y[0],g=y[1],y[0]=e*p+i*g,y[1]=r*p+s*g,y[5]=e*l+i*u+o,y[6]=r*l+s*u+a;break;case"circle":y[4]=Me(y[3],t);break;case"rect":y[4]=Me(y[4],t);break;case"ellipse":y[8]=Me(y[8],t);break;case"roundRect":y[5]=Me(y[5],t);break;case"addPath":y[0].transform(t);break;case"poly":y[2]=Me(y[2],t);break;default:tt("unknown transform action",x.action);break}}return this._dirty=!0,this}get bounds(){return this.shapePath.bounds}getLastPoint(t){let e=this.instructions.length-1,r=this.instructions[e];if(!r)return t.x=0,t.y=0,t;for(;r.action==="closePath";){if(e--,e<0)return t.x=0,t.y=0,t;r=this.instructions[e]}switch(r.action){case"moveTo":case"lineTo":t.x=r.data[0],t.y=r.data[1];break;case"quadraticCurveTo":t.x=r.data[2],t.y=r.data[3];break;case"bezierCurveTo":t.x=r.data[4],t.y=r.data[5];break;case"arc":case"arcToSvg":t.x=r.data[5],t.y=r.data[6];break;case"addPath":r.data[0].getLastPoint(t);break}return t}}function Me(n,t){return n?n.prepend(t):t.clone()}function tf(n,t){if(typeof n=="string"){const r=document.createElement("div");r.innerHTML=n.trim(),n=r.querySelector("svg")}const e={context:t,path:new ye};return ua(n,e,null,null),t}function ua(n,t,e,r){const i=n.children,{fillStyle:s,strokeStyle:o}=ef(n);s&&e?e={...e,...s}:s&&(e=s),o&&r?r={...r,...o}:o&&(r=o),t.context.fillStyle=e,t.context.strokeStyle=r;let a,l,u,c,h,d,f,p,g,m,x,y,v,_,w,b,S;switch(n.nodeName.toLowerCase()){case"path":_=n.getAttribute("d"),w=new ye(_),t.context.path(w),e&&t.context.fill(),r&&t.context.stroke();break;case"circle":f=it(n,"cx",0),p=it(n,"cy",0),g=it(n,"r",0),t.context.ellipse(f,p,g,g),e&&t.context.fill(),r&&t.context.stroke();break;case"rect":a=it(n,"x",0),l=it(n,"y",0),b=it(n,"width",0),S=it(n,"height",0),m=it(n,"rx",0),x=it(n,"ry",0),m||x?t.context.roundRect(a,l,b,S,m||x):t.context.rect(a,l,b,S),e&&t.context.fill(),r&&t.context.stroke();break;case"ellipse":f=it(n,"cx",0),p=it(n,"cy",0),m=it(n,"rx",0),x=it(n,"ry",0),t.context.beginPath(),t.context.ellipse(f,p,m,x),e&&t.context.fill(),r&&t.context.stroke();break;case"line":u=it(n,"x1",0),c=it(n,"y1",0),h=it(n,"x2",0),d=it(n,"y2",0),t.context.beginPath(),t.context.moveTo(u,c),t.context.lineTo(h,d),r&&t.context.stroke();break;case"polygon":v=n.getAttribute("points"),y=v.match(/\d+/g).map(I=>parseInt(I,10)),t.context.poly(y,!0),e&&t.context.fill(),r&&t.context.stroke();break;case"polyline":v=n.getAttribute("points"),y=v.match(/\d+/g).map(I=>parseInt(I,10)),t.context.poly(y,!1),r&&t.context.stroke();break;case"g":case"svg":break;default:{console.info(`[SVG parser] <${n.nodeName}> elements unsupported`);break}}for(let I=0;I<i.length;I++)ua(i[I],t,e,r)}function it(n,t,e){const r=n.getAttribute(t);return r?Number(r):e}function ef(n){const t=n.getAttribute("style"),e={},r={};let i=!1,s=!1;if(t){const o=t.split(";");for(let a=0;a<o.length;a++){const l=o[a],[u,c]=l.split(":");switch(u){case"stroke":c!=="none"&&(e.color=G.shared.setValue(c).toNumber(),s=!0);break;case"stroke-width":e.width=Number(c);break;case"fill":c!=="none"&&(i=!0,r.color=G.shared.setValue(c).toNumber());break;case"fill-opacity":r.alpha=Number(c);break;case"stroke-opacity":e.alpha=Number(c);break;case"opacity":r.alpha=Number(c),e.alpha=Number(c);break}}}else{const o=n.getAttribute("stroke");o&&o!=="none"&&(s=!0,e.color=G.shared.setValue(o).toNumber(),e.width=it(n,"stroke-width",1));const a=n.getAttribute("fill");a&&a!=="none"&&(i=!0,r.color=G.shared.setValue(a).toNumber())}return{strokeStyle:s?e:null,fillStyle:i?r:null}}function nf(n){return G.isColorLike(n)}function As(n){return n instanceof Yn}function Ts(n){return n instanceof $e}function rf(n,t,e){const r=G.shared.setValue(t??0);return n.color=r.toNumber(),n.alpha=r.alpha===1?e.alpha:r.alpha,n.texture=O.WHITE,{...e,...n}}function Ps(n,t,e){return n.fill=t,n.color=16777215,n.texture=t.texture,n.matrix=t.transform,{...e,...n}}function Fs(n,t,e){return t.buildLinearGradient(),n.fill=t,n.color=16777215,n.texture=t.texture,n.matrix=t.transform,{...e,...n}}function sf(n,t){var i;const e={...t,...n};if(e.texture){if(e.texture!==O.WHITE){const o=((i=e.matrix)==null?void 0:i.clone().invert())||new D;o.translate(e.texture.frame.x,e.texture.frame.y),o.scale(1/e.texture.source.width,1/e.texture.source.height),e.matrix=o}const s=e.texture.source.style;s.addressMode==="clamp-to-edge"&&(s.addressMode="repeat",s.update())}const r=G.shared.setValue(e.color);return e.alpha*=r.alpha,e.color=r.toNumber(),e.matrix=e.matrix?e.matrix.clone():null,e}function Kt(n,t){if(n==null)return null;const e={},r=n;return nf(n)?rf(e,n,t):As(n)?Ps(e,n,t):Ts(n)?Fs(e,n,t):r.fill&&As(r.fill)?Ps(r,r.fill,t):r.fill&&Ts(r.fill)?Fs(r,r.fill,t):sf(r,t)}function En(n,t){const{width:e,alignment:r,miterLimit:i,cap:s,join:o,pixelLine:a,...l}=t,u=Kt(n,l);return u?{width:e,alignment:r,miterLimit:i,cap:s,join:o,pixelLine:a,...u}:null}const of=new at,Ms=new D,Ci=class zt extends ut{constructor(){super(...arguments),this.uid=rt("graphicsContext"),this.dirty=!0,this.batchMode="auto",this.instructions=[],this._activePath=new ye,this._transform=new D,this._fillStyle={...zt.defaultFillStyle},this._strokeStyle={...zt.defaultStrokeStyle},this._stateStack=[],this._tick=0,this._bounds=new Ot,this._boundsDirty=!0}clone(){const t=new zt;return t.batchMode=this.batchMode,t.instructions=this.instructions.slice(),t._activePath=this._activePath.clone(),t._transform=this._transform.clone(),t._fillStyle={...this._fillStyle},t._strokeStyle={...this._strokeStyle},t._stateStack=this._stateStack.slice(),t._bounds=this._bounds.clone(),t._boundsDirty=!0,t}get fillStyle(){return this._fillStyle}set fillStyle(t){this._fillStyle=Kt(t,zt.defaultFillStyle)}get strokeStyle(){return this._strokeStyle}set strokeStyle(t){this._strokeStyle=En(t,zt.defaultStrokeStyle)}setFillStyle(t){return this._fillStyle=Kt(t,zt.defaultFillStyle),this}setStrokeStyle(t){return this._strokeStyle=Kt(t,zt.defaultStrokeStyle),this}texture(t,e,r,i,s,o){return this.instructions.push({action:"texture",data:{image:t,dx:r||0,dy:i||0,dw:s||t.frame.width,dh:o||t.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:e?G.shared.setValue(e).toNumber():16777215}}),this.onUpdate(),this}beginPath(){return this._activePath=new ye,this}fill(t,e){let r;const i=this.instructions[this.instructions.length-1];return this._tick===0&&i&&i.action==="stroke"?r=i.data.path:r=this._activePath.clone(),r?(t!=null&&(e!==void 0&&typeof t=="number"&&(F(N,"GraphicsContext.fill(color, alpha) is deprecated, use GraphicsContext.fill({ color, alpha }) instead"),t={color:t,alpha:e}),this._fillStyle=Kt(t,zt.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:r}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}_initNextPathLocation(){const{x:t,y:e}=this._activePath.getLastPoint(at.shared);this._activePath.clear(),this._activePath.moveTo(t,e)}stroke(t){let e;const r=this.instructions[this.instructions.length-1];return this._tick===0&&r&&r.action==="fill"?e=r.data.path:e=this._activePath.clone(),e?(t!=null&&(this._strokeStyle=En(t,zt.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:e}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}cut(){for(let t=0;t<2;t++){const e=this.instructions[this.instructions.length-1-t],r=this._activePath.clone();if(e&&(e.action==="stroke"||e.action==="fill"))if(e.data.hole)e.data.hole.addPath(r);else{e.data.hole=r;break}}return this._initNextPathLocation(),this}arc(t,e,r,i,s,o){this._tick++;const a=this._transform;return this._activePath.arc(a.a*t+a.c*e+a.tx,a.b*t+a.d*e+a.ty,r,i,s,o),this}arcTo(t,e,r,i,s){this._tick++;const o=this._transform;return this._activePath.arcTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}arcToSvg(t,e,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.arcToSvg(t,e,r,i,s,l.a*o+l.c*a+l.tx,l.b*o+l.d*a+l.ty),this}bezierCurveTo(t,e,r,i,s,o,a){this._tick++;const l=this._transform;return this._activePath.bezierCurveTo(l.a*t+l.c*e+l.tx,l.b*t+l.d*e+l.ty,l.a*r+l.c*i+l.tx,l.b*r+l.d*i+l.ty,l.a*s+l.c*o+l.tx,l.b*s+l.d*o+l.ty,a),this}closePath(){var t;return this._tick++,(t=this._activePath)==null||t.closePath(),this}ellipse(t,e,r,i){return this._tick++,this._activePath.ellipse(t,e,r,i,this._transform.clone()),this}circle(t,e,r){return this._tick++,this._activePath.circle(t,e,r,this._transform.clone()),this}path(t){return this._tick++,this._activePath.addPath(t,this._transform.clone()),this}lineTo(t,e){this._tick++;const r=this._transform;return this._activePath.lineTo(r.a*t+r.c*e+r.tx,r.b*t+r.d*e+r.ty),this}moveTo(t,e){this._tick++;const r=this._transform,i=this._activePath.instructions,s=r.a*t+r.c*e+r.tx,o=r.b*t+r.d*e+r.ty;return i.length===1&&i[0].action==="moveTo"?(i[0].data[0]=s,i[0].data[1]=o,this):(this._activePath.moveTo(s,o),this)}quadraticCurveTo(t,e,r,i,s){this._tick++;const o=this._transform;return this._activePath.quadraticCurveTo(o.a*t+o.c*e+o.tx,o.b*t+o.d*e+o.ty,o.a*r+o.c*i+o.tx,o.b*r+o.d*i+o.ty,s),this}rect(t,e,r,i){return this._tick++,this._activePath.rect(t,e,r,i,this._transform.clone()),this}roundRect(t,e,r,i,s){return this._tick++,this._activePath.roundRect(t,e,r,i,s,this._transform.clone()),this}poly(t,e){return this._tick++,this._activePath.poly(t,e,this._transform.clone()),this}regularPoly(t,e,r,i,s=0,o){return this._tick++,this._activePath.regularPoly(t,e,r,i,s,o),this}roundPoly(t,e,r,i,s,o){return this._tick++,this._activePath.roundPoly(t,e,r,i,s,o),this}roundShape(t,e,r,i){return this._tick++,this._activePath.roundShape(t,e,r,i),this}filletRect(t,e,r,i,s){return this._tick++,this._activePath.filletRect(t,e,r,i,s),this}chamferRect(t,e,r,i,s,o){return this._tick++,this._activePath.chamferRect(t,e,r,i,s,o),this}star(t,e,r,i,s=0,o=0){return this._tick++,this._activePath.star(t,e,r,i,s,o,this._transform.clone()),this}svg(t){return this._tick++,tf(t,this),this}restore(){const t=this._stateStack.pop();return t&&(this._transform=t.transform,this._fillStyle=t.fillStyle,this._strokeStyle=t.strokeStyle),this}save(){return this._stateStack.push({transform:this._transform.clone(),fillStyle:{...this._fillStyle},strokeStyle:{...this._strokeStyle}}),this}getTransform(){return this._transform}resetTransform(){return this._transform.identity(),this}rotate(t){return this._transform.rotate(t),this}scale(t,e=t){return this._transform.scale(t,e),this}setTransform(t,e,r,i,s,o){return t instanceof D?(this._transform.set(t.a,t.b,t.c,t.d,t.tx,t.ty),this):(this._transform.set(t,e,r,i,s,o),this)}transform(t,e,r,i,s,o){return t instanceof D?(this._transform.append(t),this):(Ms.set(t,e,r,i,s,o),this._transform.append(Ms),this)}translate(t,e=t){return this._transform.translate(t,e),this}clear(){return this._activePath.clear(),this.instructions.length=0,this.resetTransform(),this.onUpdate(),this}onUpdate(){this.dirty||(this.emit("update",this,16),this.dirty=!0,this._boundsDirty=!0)}get bounds(){if(!this._boundsDirty)return this._bounds;const t=this._bounds;t.clear();for(let e=0;e<this.instructions.length;e++){const r=this.instructions[e],i=r.action;if(i==="fill"){const s=r.data;t.addBounds(s.path.bounds)}else if(i==="texture"){const s=r.data;t.addFrame(s.dx,s.dy,s.dx+s.dw,s.dy+s.dh,s.transform)}if(i==="stroke"){const s=r.data,o=s.style.alignment,a=s.style.width*(1-o),l=s.path.bounds;t.addFrame(l.minX-a,l.minY-a,l.maxX+a,l.maxY+a)}}return t}containsPoint(t){var i;if(!this.bounds.containsPoint(t.x,t.y))return!1;const e=this.instructions;let r=!1;for(let s=0;s<e.length;s++){const o=e[s],a=o.data,l=a.path;if(!o.action||!l)continue;const u=a.style,c=l.shapePath.shapePrimitives;for(let h=0;h<c.length;h++){const d=c[h].shape;if(!u||!d)continue;const f=c[h].transform,p=f?f.applyInverse(t,of):t;if(o.action==="fill")r=d.contains(p.x,p.y);else{const m=u;r=d.strokeContains(p.x,p.y,m.width,m.alignment)}const g=a.hole;if(g){const m=(i=g.shapePath)==null?void 0:i.shapePrimitives;if(m)for(let x=0;x<m.length;x++)m[x].shape.contains(p.x,p.y)&&(r=!1)}if(r)return!0}}return r}destroy(t=!1){if(this._stateStack.length=0,this._transform=null,this.emit("destroy",this),this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._fillStyle.texture&&this._fillStyle.texture.destroy(r),this._strokeStyle.texture&&this._strokeStyle.texture.destroy(r)}this._fillStyle=null,this._strokeStyle=null,this.instructions=null,this._activePath=null,this._bounds=null,this._stateStack=null,this.customShader=null,this._transform=null}};Ci.defaultFillStyle={color:16777215,alpha:1,texture:O.WHITE,matrix:null,fill:null};Ci.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:O.WHITE,matrix:null,fill:null,pixelLine:!1};let Ct=Ci;const zs=["align","breakWords","cssOverrides","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth","fontFamily","fontStyle","fontSize"];function af(n){const t=[];let e=0;for(let r=0;r<zs.length;r++){const i=`_${zs[r]}`;t[e++]=n[i]}return e=ca(n._fill,t,e),e=lf(n._stroke,t,e),e=uf(n.dropShadow,t,e),t.join("-")}function ca(n,t,e){var r;return n&&(t[e++]=n.color,t[e++]=n.alpha,t[e++]=(r=n.fill)==null?void 0:r.styleKey),e}function lf(n,t,e){return n&&(e=ca(n,t,e),t[e++]=n.width,t[e++]=n.alignment,t[e++]=n.cap,t[e++]=n.join,t[e++]=n.miterLimit),e}function uf(n,t,e){return n&&(t[e++]=n.alpha,t[e++]=n.angle,t[e++]=n.blur,t[e++]=n.distance,t[e++]=G.shared.setValue(n.color).toNumber()),e}const wi=class ae extends ut{constructor(t={}){super(),cf(t);const e={...ae.defaultTextStyle,...t};for(const r in e){const i=r;this[i]=e[r]}this.update()}get align(){return this._align}set align(t){this._align=t,this.update()}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords=t,this.update()}get dropShadow(){return this._dropShadow}set dropShadow(t){t!==null&&typeof t=="object"?this._dropShadow=this._createProxy({...ae.defaultDropShadow,...t}):this._dropShadow=t?this._createProxy({...ae.defaultDropShadow}):null,this.update()}get fontFamily(){return this._fontFamily}set fontFamily(t){this._fontFamily=t,this.update()}get fontSize(){return this._fontSize}set fontSize(t){typeof t=="string"?this._fontSize=parseInt(t,10):this._fontSize=t,this.update()}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle=t.toLowerCase(),this.update()}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant=t,this.update()}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight=t,this.update()}get leading(){return this._leading}set leading(t){this._leading=t,this.update()}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing=t,this.update()}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight=t,this.update()}get padding(){return this._padding}set padding(t){this._padding=t,this.update()}get trim(){return this._trim}set trim(t){this._trim=t,this.update()}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline=t,this.update()}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace=t,this.update()}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap=t,this.update()}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth=t,this.update()}get fill(){return this._originalFill}set fill(t){t!==this._originalFill&&(this._originalFill=t,this._isFillStyle(t)&&(this._originalFill=this._createProxy({...Ct.defaultFillStyle,...t},()=>{this._fill=Kt({...this._originalFill},Ct.defaultFillStyle)})),this._fill=Kt(t===0?"black":t,Ct.defaultFillStyle),this.update())}get stroke(){return this._originalStroke}set stroke(t){t!==this._originalStroke&&(this._originalStroke=t,this._isFillStyle(t)&&(this._originalStroke=this._createProxy({...Ct.defaultStrokeStyle,...t},()=>{this._stroke=En({...this._originalStroke},Ct.defaultStrokeStyle)})),this._stroke=En(t,Ct.defaultStrokeStyle),this.update())}_generateKey(){return this._styleKey=af(this),this._styleKey}update(){this._styleKey=null,this.emit("update",this)}reset(){const t=ae.defaultTextStyle;for(const e in t)this[e]=t[e]}get styleKey(){return this._styleKey||this._generateKey()}clone(){return new ae({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?{...this._dropShadow}:null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}destroy(t=!1){var r,i,s,o;if(this.removeAllListeners(),typeof t=="boolean"?t:t==null?void 0:t.texture){const a=typeof t=="boolean"?t:t==null?void 0:t.textureSource;(r=this._fill)!=null&&r.texture&&this._fill.texture.destroy(a),(i=this._originalFill)!=null&&i.texture&&this._originalFill.texture.destroy(a),(s=this._stroke)!=null&&s.texture&&this._stroke.texture.destroy(a),(o=this._originalStroke)!=null&&o.texture&&this._originalStroke.texture.destroy(a)}this._fill=null,this._stroke=null,this.dropShadow=null,this._originalStroke=null,this._originalFill=null}_createProxy(t,e){return new Proxy(t,{set:(r,i,s)=>(r[i]=s,e==null||e(i,s),this.update(),!0)})}_isFillStyle(t){return(t??null)!==null&&!(G.isColorLike(t)||t instanceof $e||t instanceof Yn)}};wi.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};wi.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let ct=wi;function cf(n){const t=n;if(typeof t.dropShadow=="boolean"&&t.dropShadow){const e=ct.defaultDropShadow;n.dropShadow={alpha:t.dropShadowAlpha??e.alpha,angle:t.dropShadowAngle??e.angle,blur:t.dropShadowBlur??e.blur,color:t.dropShadowColor??e.color,distance:t.dropShadowDistance??e.distance}}if(t.strokeThickness!==void 0){F(N,"strokeThickness is now a part of stroke");const e=t.stroke;let r={};if(G.isColorLike(e))r.color=e;else if(e instanceof $e||e instanceof Yn)r.fill=e;else if(Object.hasOwnProperty.call(e,"color")||Object.hasOwnProperty.call(e,"fill"))r=e;else throw new Error("Invalid stroke value.");n.stroke={...r,width:t.strokeThickness}}if(Array.isArray(t.fillGradientStops)){F(N,"gradient fill is now a fill pattern: `new FillGradient(...)`");let e;n.fontSize==null?n.fontSize=ct.defaultTextStyle.fontSize:typeof n.fontSize=="string"?e=parseInt(n.fontSize,10):e=n.fontSize;const r=new $e(0,0,0,e*1.7),i=t.fillGradientStops.map(s=>G.shared.setValue(s).toNumber());i.forEach((s,o)=>{const a=o/(i.length-1);r.addColorStop(a,s)}),n.fill={fill:r}}}class hf{constructor(t){this._canvasPool=Object.create(null),this.canvasOptions=t||{},this.enableFullScreen=!1}_createCanvasAndContext(t,e){const r=j.get().createCanvas();r.width=t,r.height=e;const i=r.getContext("2d");return{canvas:r,context:i}}getOptimalCanvasAndContext(t,e,r=1){t=Math.ceil(t*r-1e-6),e=Math.ceil(e*r-1e-6),t=zn(t),e=zn(e);const i=(t<<17)+(e<<1);this._canvasPool[i]||(this._canvasPool[i]=[]);let s=this._canvasPool[i].pop();return s||(s=this._createCanvasAndContext(t,e)),s}returnCanvasAndContext(t){const e=t.canvas,{width:r,height:i}=e,s=(r<<17)+(i<<1);t.context.clearRect(0,0,r,i),this._canvasPool[s].push(t)}clear(){this._canvasPool={}}}const Is=new hf,ff=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function Zr(n){const t=typeof n.fontSize=="number"?`${n.fontSize}px`:n.fontSize;let e=n.fontFamily;Array.isArray(n.fontFamily)||(e=n.fontFamily.split(","));for(let r=e.length-1;r>=0;r--){let i=e[r].trim();!/([\"\'])[^\'\"]+\1/.test(i)&&!ff.includes(i)&&(i=`"${i}"`),e[r]=i}return`${n.fontStyle} ${n.fontVariant} ${n.fontWeight} ${t} ${e.join(",")}`}const Ar={willReadFrequently:!0},Ft=class z{static get experimentalLetterSpacingSupported(){let t=z._experimentalLetterSpacingSupported;if(t!==void 0){const e=j.get().getCanvasRenderingContext2D().prototype;t=z._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,r,i,s,o,a,l,u){this.text=t,this.style=e,this.width=r,this.height=i,this.lines=s,this.lineWidths=o,this.lineHeight=a,this.maxLineWidth=l,this.fontProperties=u}static measureText(t=" ",e,r=z._canvas,i=e.wordWrap){var y;const s=`${t}:${e.styleKey}`;if(z._measurementCache[s])return z._measurementCache[s];const o=Zr(e),a=z.measureFont(o);a.fontSize===0&&(a.fontSize=e.fontSize,a.ascent=e.fontSize);const l=z.__context;l.font=o;const c=(i?z._wordWrap(t,e,r):t).split(/(?:\r\n|\r|\n)/),h=new Array(c.length);let d=0;for(let v=0;v<c.length;v++){const _=z._measureText(c[v],e.letterSpacing,l);h[v]=_,d=Math.max(d,_)}const f=((y=e._stroke)==null?void 0:y.width)||0;let p=d+f;e.dropShadow&&(p+=e.dropShadow.distance);const g=e.lineHeight||a.fontSize;let m=Math.max(g,a.fontSize+f)+(c.length-1)*(g+e.leading);return e.dropShadow&&(m+=e.dropShadow.distance),new z(t,e,p,m,c,h,g+e.leading,d,a)}static _measureText(t,e,r){let i=!1;z.experimentalLetterSpacingSupported&&(z.experimentalLetterSpacing?(r.letterSpacing=`${e}px`,r.textLetterSpacing=`${e}px`,i=!0):(r.letterSpacing="0px",r.textLetterSpacing="0px"));const s=r.measureText(t);let o=s.width;const a=-s.actualBoundingBoxLeft;let u=s.actualBoundingBoxRight-a;if(o>0)if(i)o-=e,u-=e;else{const c=(z.graphemeSegmenter(t).length-1)*e;o+=c,u+=c}return Math.max(o,u)}static _wordWrap(t,e,r=z._canvas){const i=r.getContext("2d",Ar);let s=0,o="",a="";const l=Object.create(null),{letterSpacing:u,whiteSpace:c}=e,h=z._collapseSpaces(c),d=z._collapseNewlines(c);let f=!h;const p=e.wordWrapWidth+u,g=z._tokenize(t);for(let m=0;m<g.length;m++){let x=g[m];if(z._isNewline(x)){if(!d){a+=z._addLine(o),f=!h,o="",s=0;continue}x=" "}if(h){const v=z.isBreakingSpace(x),_=z.isBreakingSpace(o[o.length-1]);if(v&&_)continue}const y=z._getFromCache(x,u,l,i);if(y>p)if(o!==""&&(a+=z._addLine(o),o="",s=0),z.canBreakWords(x,e.breakWords)){const v=z.wordWrapSplit(x);for(let _=0;_<v.length;_++){let w=v[_],b=w,S=1;for(;v[_+S];){const B=v[_+S];if(!z.canBreakChars(b,B,x,_,e.breakWords))w+=B;else break;b=B,S++}_+=S-1;const I=z._getFromCache(w,u,l,i);I+s>p&&(a+=z._addLine(o),f=!1,o="",s=0),o+=w,s+=I}}else{o.length>0&&(a+=z._addLine(o),o="",s=0);const v=m===g.length-1;a+=z._addLine(x,!v),f=!1,o="",s=0}else y+s>p&&(f=!1,a+=z._addLine(o),o="",s=0),(o.length>0||!z.isBreakingSpace(x)||f)&&(o+=x,s+=y)}return a+=z._addLine(o,!1),a}static _addLine(t,e=!0){return t=z._trimRight(t),t=e?`${t}
`:t,t}static _getFromCache(t,e,r,i){let s=r[t];return typeof s!="number"&&(s=z._measureText(t,e,i)+e,r[t]=s),s}static _collapseSpaces(t){return t==="normal"||t==="pre-line"}static _collapseNewlines(t){return t==="normal"}static _trimRight(t){if(typeof t!="string")return"";for(let e=t.length-1;e>=0;e--){const r=t[e];if(!z.isBreakingSpace(r))break;t=t.slice(0,-1)}return t}static _isNewline(t){return typeof t!="string"?!1:z._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,e){return typeof t!="string"?!1:z._breakingSpaces.includes(t.charCodeAt(0))}static _tokenize(t){const e=[];let r="";if(typeof t!="string")return e;for(let i=0;i<t.length;i++){const s=t[i],o=t[i+1];if(z.isBreakingSpace(s,o)||z._isNewline(s)){r!==""&&(e.push(r),r=""),e.push(s);continue}r+=s}return r!==""&&e.push(r),e}static canBreakWords(t,e){return e}static canBreakChars(t,e,r,i,s){return!0}static wordWrapSplit(t){return z.graphemeSegmenter(t)}static measureFont(t){if(z._fonts[t])return z._fonts[t];const e=z._context;e.font=t;const r=e.measureText(z.METRICS_STRING+z.BASELINE_SYMBOL),i={ascent:r.actualBoundingBoxAscent,descent:r.actualBoundingBoxDescent,fontSize:r.actualBoundingBoxAscent+r.actualBoundingBoxDescent};return z._fonts[t]=i,i}static clearMetrics(t=""){t?delete z._fonts[t]:z._fonts={}}static get _canvas(){if(!z.__canvas){let t;try{const e=new OffscreenCanvas(0,0),r=e.getContext("2d",Ar);if(r!=null&&r.measureText)return z.__canvas=e,e;t=j.get().createCanvas()}catch{t=j.get().createCanvas()}t.width=t.height=10,z.__canvas=t}return z.__canvas}static get _context(){return z.__context||(z.__context=z._canvas.getContext("2d",Ar)),z.__context}};Ft.METRICS_STRING="|ÉqÅ";Ft.BASELINE_SYMBOL="M";Ft.BASELINE_MULTIPLIER=1.4;Ft.HEIGHT_MULTIPLIER=2;Ft.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const n=new Intl.Segmenter;return t=>[...n.segment(t)].map(e=>e.segment)}return n=>[...n]})();Ft.experimentalLetterSpacing=!1;Ft._fonts={};Ft._newlines=[10,13];Ft._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];Ft._measurementCache={};let Qr=Ft;function Os(n,t){if(n.texture===O.WHITE&&!n.fill)return G.shared.setValue(n.color).setAlpha(n.alpha??1).toHexa();if(n.fill){if(n.fill instanceof Yn){const e=n.fill,r=t.createPattern(e.texture.source.resource,"repeat"),i=e.transform.copyTo(D.shared);return i.scale(e.texture.frame.width,e.texture.frame.height),r.setTransform(i),r}else if(n.fill instanceof $e){const e=n.fill;if(e.type==="linear"){const r=t.createLinearGradient(e.x0,e.y0,e.x1,e.y1);return e.gradientStops.forEach(i=>{r.addColorStop(i.offset,G.shared.setValue(i.color).toHex())}),r}}}else{const e=t.createPattern(n.texture.source.resource,"repeat"),r=n.matrix.copyTo(D.shared);return r.scale(n.texture.frame.width,n.texture.frame.height),e.setTransform(r),e}return tt("FillStyle not recognised",n),"red"}function ha(n){if(n==="")return[];typeof n=="string"&&(n=[n]);const t=[];for(let e=0,r=n.length;e<r;e++){const i=n[e];if(Array.isArray(i)){if(i.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${i.length}.`);if(i[0].length===0||i[1].length===0)throw new Error("[BitmapFont]: Invalid character delimiter.");const s=i[0].charCodeAt(0),o=i[1].charCodeAt(0);if(o<s)throw new Error("[BitmapFont]: Invalid character range.");for(let a=s,l=o;a<=l;a++)t.push(String.fromCharCode(a))}else t.push(...Array.from(i))}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}const fa=class da extends Xo{constructor(t){super(),this.resolution=1,this.pages=[],this._padding=0,this._measureCache=Object.create(null),this._currentChars=[],this._currentX=0,this._currentY=0,this._currentPageIndex=-1,this._skipKerning=!1;const e={...da.defaultOptions,...t};this._textureSize=e.textureSize,this._mipmap=e.mipmap;const r=e.style.clone();e.overrideFill&&(r._fill.color=16777215,r._fill.alpha=1,r._fill.texture=O.WHITE,r._fill.fill=null),this.applyFillAsTint=e.overrideFill;const i=r.fontSize;r.fontSize=this.baseMeasurementFontSize;const s=Zr(r);e.overrideSize?r._stroke&&(r._stroke.width*=this.baseRenderedFontSize/i):r.fontSize=this.baseRenderedFontSize=i,this._style=r,this._skipKerning=e.skipKerning??!1,this.resolution=e.resolution??1,this._padding=e.padding??4,this.fontMetrics=Qr.measureFont(s),this.lineHeight=r.lineHeight||this.fontMetrics.fontSize||r.fontSize}ensureCharacters(t){var m,x;const e=ha(t).filter(y=>!this._currentChars.includes(y)).filter((y,v,_)=>_.indexOf(y)===v);if(!e.length)return;this._currentChars=[...this._currentChars,...e];let r;this._currentPageIndex===-1?r=this._nextPage():r=this.pages[this._currentPageIndex];let{canvas:i,context:s}=r.canvasAndContext,o=r.texture.source;const a=this._style;let l=this._currentX,u=this._currentY;const c=this.baseRenderedFontSize/this.baseMeasurementFontSize,h=this._padding*c;let d=0,f=!1;const p=i.width/this.resolution,g=i.height/this.resolution;for(let y=0;y<e.length;y++){const v=e[y],_=Qr.measureText(v,a,i,!1);_.lineHeight=_.height;const w=_.width*c,b=Math.ceil((a.fontStyle==="italic"?2:1)*w),S=_.height*c,I=b+h*2,B=S+h*2;if(f=!1,v!==`
`&&v!=="\r"&&v!=="	"&&v!==" "&&(f=!0,d=Math.ceil(Math.max(B,d))),l+I>p&&(u+=d,d=B,l=0,u+d>g)){o.update();const A=this._nextPage();i=A.canvasAndContext.canvas,s=A.canvasAndContext.context,o=A.texture.source,u=0}const T=w/c-(((m=a.dropShadow)==null?void 0:m.distance)??0)-(((x=a._stroke)==null?void 0:x.width)??0);if(this.chars[v]={id:v.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:T,kerning:{}},f){this._drawGlyph(s,_,l+h,u+h,c,a);const A=o.width*c,X=o.height*c,Y=new nt(l/A*o.width,u/X*o.height,I/A*o.width,B/X*o.height);this.chars[v].texture=new O({source:o,frame:Y}),l+=Math.ceil(I)}}o.update(),this._currentX=l,this._currentY=u,this._skipKerning&&this._applyKerning(e,s)}get pageTextures(){return F(N,"BitmapFont.pageTextures is deprecated, please use BitmapFont.pages instead."),this.pages}_applyKerning(t,e){const r=this._measureCache;for(let i=0;i<t.length;i++){const s=t[i];for(let o=0;o<this._currentChars.length;o++){const a=this._currentChars[o];let l=r[s];l||(l=r[s]=e.measureText(s).width);let u=r[a];u||(u=r[a]=e.measureText(a).width);let c=e.measureText(s+a).width,h=c-(l+u);h&&(this.chars[s].kerning[a]=h),c=e.measureText(s+a).width,h=c-(l+u),h&&(this.chars[a].kerning[s]=h)}}}_nextPage(){this._currentPageIndex++;const t=this.resolution,e=Is.getOptimalCanvasAndContext(this._textureSize,this._textureSize,t);this._setupContext(e.context,this._style,t);const r=t*(this.baseRenderedFontSize/this.baseMeasurementFontSize),i=new O({source:new re({resource:e.canvas,resolution:r,alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:this._mipmap})}),s={canvasAndContext:e,texture:i};return this.pages[this._currentPageIndex]=s,s}_setupContext(t,e,r){e.fontSize=this.baseRenderedFontSize,t.scale(r,r),t.font=Zr(e),e.fontSize=this.baseMeasurementFontSize,t.textBaseline=e.textBaseline;const i=e._stroke,s=(i==null?void 0:i.width)??0;if(i&&(t.lineWidth=s,t.lineJoin=i.join,t.miterLimit=i.miterLimit,t.strokeStyle=Os(i,t)),e._fill&&(t.fillStyle=Os(e._fill,t)),e.dropShadow){const o=e.dropShadow,a=G.shared.setValue(o.color).toArray(),l=o.blur*r,u=o.distance*r;t.shadowColor=`rgba(${a[0]*255},${a[1]*255},${a[2]*255},${o.alpha})`,t.shadowBlur=l,t.shadowOffsetX=Math.cos(o.angle)*u,t.shadowOffsetY=Math.sin(o.angle)*u}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0}_drawGlyph(t,e,r,i,s,o){const a=e.text,l=e.fontProperties,u=o._stroke,c=((u==null?void 0:u.width)??0)*s,h=r+c/2,d=i-c/2,f=l.descent*s,p=e.lineHeight*s;o.stroke&&c&&t.strokeText(a,h,d+p-f),o._fill&&t.fillText(a,h,d+p-f)}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{canvasAndContext:e,texture:r}=this.pages[t];Is.returnCanvasAndContext(e),r.destroy(!0)}this.pages=null}};fa.defaultOptions={textureSize:512,style:new ct,mipmap:!0};let Rs=fa;function df(n,t,e,r){const i={width:0,height:0,offsetY:0,scale:t.fontSize/e.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};i.offsetY=e.baseLineOffset;let s=i.lines[0],o=null,a=!0;const l={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]},u=p=>{const g=s.width;for(let m=0;m<l.index;m++){const x=p.positions[m];s.chars.push(p.chars[m]),s.charPositions.push(x+g)}s.width+=p.width,a=!1,l.width=0,l.index=0,l.chars.length=0},c=()=>{let p=s.chars.length-1;if(r){let g=s.chars[p];for(;g===" ";)s.width-=e.chars[g].xAdvance,g=s.chars[--p]}i.width=Math.max(i.width,s.width),s={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]},a=!0,i.lines.push(s),i.height+=e.lineHeight},h=e.baseMeasurementFontSize/t.fontSize,d=t.letterSpacing*h,f=t.wordWrapWidth*h;for(let p=0;p<n.length+1;p++){let g;const m=p===n.length;m||(g=n[p]);const x=e.chars[g]||e.chars[" "];if(/(?:\s)/.test(g)||g==="\r"||g===`
`||m){if(!a&&t.wordWrap&&s.width+l.width-d>f?(c(),u(l),m||s.charPositions.push(0)):(l.start=s.width,u(l),m||s.charPositions.push(0)),g==="\r"||g===`
`)s.width!==0&&c();else if(!m){const w=x.xAdvance+(x.kerning[o]||0)+d;s.width+=w,s.spaceWidth=w,s.spacesIndex.push(s.charPositions.length),s.chars.push(g)}}else{const _=x.kerning[o]||0,w=x.xAdvance+_+d;l.positions[l.index++]=l.width+_,l.chars.push(g),l.width+=w}o=g}return c(),t.align==="center"?pf(i):t.align==="right"?mf(i):t.align==="justify"&&gf(i),i}function pf(n){for(let t=0;t<n.lines.length;t++){const e=n.lines[t],r=n.width/2-e.width/2;for(let i=0;i<e.charPositions.length;i++)e.charPositions[i]+=r}}function mf(n){for(let t=0;t<n.lines.length;t++){const e=n.lines[t],r=n.width-e.width;for(let i=0;i<e.charPositions.length;i++)e.charPositions[i]+=r}}function gf(n){const t=n.width;for(let e=0;e<n.lines.length;e++){const r=n.lines[e];let i=0,s=r.spacesIndex[i++],o=0;const a=r.spacesIndex.length,u=(t-r.width)/a;for(let c=0;c<r.charPositions.length;c++)c===s&&(s=r.spacesIndex[i++],o+=u),r.charPositions[c]+=o}}let mn=0;class xf{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "],this.NUMERIC=[["0","9"]],this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],this.ASCII=[[" ","~"]],this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}getFont(t,e){var o;let r=`${e.fontFamily}-bitmap`,i=!0;if(e._fill.fill&&!e._stroke)r+=e._fill.fill.styleKey,i=!1;else if(e._stroke||e.dropShadow){let a=e.styleKey;a=a.substring(0,a.lastIndexOf("-")),r=`${a}-bitmap`,i=!1}if(!K.has(r)){const a=new Rs({style:e,overrideFill:i,overrideSize:!0,...this.defaultOptions});mn++,mn>50&&tt("BitmapText",`You have dynamically created ${mn} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``),a.once("destroy",()=>{mn--,K.remove(r)}),K.set(r,a)}const s=K.get(r);return(o=s.ensureCharacters)==null||o.call(s,t),s}getLayout(t,e,r=!0){const i=this.getFont(t,e);return df([...t],e,i,r)}measureText(t,e,r=!0){return this.getLayout(t,e,r)}install(...t){var u,c,h,d;let e=t[0];typeof e=="string"&&(e={name:e,style:t[1],chars:(u=t[2])==null?void 0:u.chars,resolution:(c=t[2])==null?void 0:c.resolution,padding:(h=t[2])==null?void 0:h.padding,skipKerning:(d=t[2])==null?void 0:d.skipKerning},F(N,"BitmapFontManager.install(name, style, options) is deprecated, use BitmapFontManager.install({name, style, ...options})"));const r=e==null?void 0:e.name;if(!r)throw new Error("[BitmapFontManager] Property `name` is required.");e={...this.defaultOptions,...e};const i=e.style,s=i instanceof ct?i:new ct(i),o=s._fill.fill!==null&&s._fill.fill!==void 0,a=new Rs({style:s,overrideFill:o,skipKerning:e.skipKerning,padding:e.padding,resolution:e.resolution,overrideSize:!1}),l=ha(e.chars);return a.ensureCharacters(l.join("")),K.set(`${r}-bitmap`,a),a.once("destroy",()=>K.remove(`${r}-bitmap`)),a}uninstall(t){const e=`${t}-bitmap`,r=K.get(e);r&&r.destroy()}}const Es=new xf;class pa extends Xo{constructor(t,e){super();const{textures:r,data:i}=t;Object.keys(i.pages).forEach(s=>{const o=i.pages[parseInt(s,10)],a=r[o.id];this.pages.push({texture:a})}),Object.keys(i.chars).forEach(s=>{const o=i.chars[s],{frame:a,source:l}=r[o.page],u=new nt(o.x+a.x,o.y+a.y,o.width,o.height),c=new O({source:l,frame:u});this.chars[s]={id:s.codePointAt(0),xOffset:o.xOffset,yOffset:o.yOffset,xAdvance:o.xAdvance,kerning:o.kerning??{},texture:c}}),this.baseRenderedFontSize=i.fontSize,this.baseMeasurementFontSize=i.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:i.fontSize},this.baseLineOffset=i.baseLineOffset,this.lineHeight=i.lineHeight,this.fontFamily=i.fontFamily,this.distanceField=i.distanceField??{type:"none",range:0},this.url=e}destroy(){super.destroy();for(let t=0;t<this.pages.length;t++){const{texture:e}=this.pages[t];e.destroy(!0)}this.pages=null}static install(t){Es.install(t)}static uninstall(t){Es.uninstall(t)}}const Tr={test(n){return typeof n=="string"&&n.startsWith("info face=")},parse(n){const t=n.match(/^[a-z]+\s+.+$/gm),e={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in t){const d=t[h].match(/^[a-z]+/gm)[0],f=t[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),p={};for(const g in f){const m=f[g].split("="),x=m[0],y=m[1].replace(/"/gm,""),v=parseFloat(y),_=isNaN(v)?y:v;p[x]=_}e[d].push(p)}const r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[i]=e.info,[s]=e.common,[o]=e.distanceField??[];o&&(r.distanceField={range:parseInt(o.distanceRange,10),type:o.fieldType}),r.fontSize=parseInt(i.size,10),r.fontFamily=i.face,r.lineHeight=parseInt(s.lineHeight,10);const a=e.page;for(let h=0;h<a.length;h++)r.pages.push({id:parseInt(a[h].id,10)||0,file:a[h].file});const l={};r.baseLineOffset=r.lineHeight-parseInt(s.base,10);const u=e.char;for(let h=0;h<u.length;h++){const d=u[h],f=parseInt(d.id,10);let p=d.letter??d.char??String.fromCharCode(f);p==="space"&&(p=" "),l[f]=p,r.chars[p]={id:f,page:parseInt(d.page,10)||0,x:parseInt(d.x,10),y:parseInt(d.y,10),width:parseInt(d.width,10),height:parseInt(d.height,10),xOffset:parseInt(d.xoffset,10),yOffset:parseInt(d.yoffset,10),xAdvance:parseInt(d.xadvance,10),kerning:{}}}const c=e.kerning||[];for(let h=0;h<c.length;h++){const d=parseInt(c[h].first,10),f=parseInt(c[h].second,10),p=parseInt(c[h].amount,10);r.chars[l[f]].kerning[l[d]]=p}return r}},ks={test(n){const t=n;return typeof t!="string"&&"getElementsByTagName"in t&&t.getElementsByTagName("page").length&&t.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(n){const t={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},e=n.getElementsByTagName("info")[0],r=n.getElementsByTagName("common")[0],i=n.getElementsByTagName("distanceField")[0];i&&(t.distanceField={type:i.getAttribute("fieldType"),range:parseInt(i.getAttribute("distanceRange"),10)});const s=n.getElementsByTagName("page"),o=n.getElementsByTagName("char"),a=n.getElementsByTagName("kerning");t.fontSize=parseInt(e.getAttribute("size"),10),t.fontFamily=e.getAttribute("face"),t.lineHeight=parseInt(r.getAttribute("lineHeight"),10);for(let u=0;u<s.length;u++)t.pages.push({id:parseInt(s[u].getAttribute("id"),10)||0,file:s[u].getAttribute("file")});const l={};t.baseLineOffset=t.lineHeight-parseInt(r.getAttribute("base"),10);for(let u=0;u<o.length;u++){const c=o[u],h=parseInt(c.getAttribute("id"),10);let d=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(h);d==="space"&&(d=" "),l[h]=d,t.chars[d]={id:h,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<a.length;u++){const c=parseInt(a[u].getAttribute("first"),10),h=parseInt(a[u].getAttribute("second"),10),d=parseInt(a[u].getAttribute("amount"),10);t.chars[l[h]].kerning[l[c]]=d}return t}},Us={test(n){return typeof n=="string"&&n.includes("<font>")?ks.test(j.get().parseXML(n)):!1},parse(n){return ks.parse(j.get().parseXML(n))}},vf=[".xml",".fnt"],yf={extension:{type:M.CacheParser,name:"cacheBitmapFont"},test:n=>n instanceof pa,getCacheableAssets(n,t){const e={};return n.forEach(r=>{e[r]=t,e[`${r}-bitmap`]=t}),e[`${t.fontFamily}-bitmap`]=t,e}},_f={extension:{type:M.LoadParser,priority:Ut.Normal},name:"loadBitmapFont",test(n){return vf.includes(lt.extname(n).toLowerCase())},async testParse(n){return Tr.test(n)||Us.test(n)},async parse(n,t,e){const r=Tr.test(n)?Tr.parse(n):Us.parse(n),{src:i}=t,{pages:s}=r,o=[],a=r.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<s.length;++h){const d=s[h].file;let f=lt.join(lt.dirname(i),d);f=Br(f,i),o.push({src:f,data:a})}const l=await e.load(o),u=o.map(h=>l[h.src]);return new pa({data:r,textures:u},i)},async load(n,t){return await(await j.get().fetch(n)).text()},async unload(n,t,e){await Promise.all(n.pages.map(r=>e.unload(r.texture.source._sourceOrigin))),n.destroy()}};class bf{constructor(t,e=!1){this._loader=t,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=e}add(t){t.forEach(e=>{this._assetList.push(e)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const t=[],e=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<e;r++)t.push(this._assetList.pop());await this._loader.load(t),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(t){this._isActive!==t&&(this._isActive=t,t&&!this._isLoading&&this._next())}}const Sf={extension:{type:M.CacheParser,name:"cacheTextureArray"},test:n=>Array.isArray(n)&&n.every(t=>t instanceof O),getCacheableAssets:(n,t)=>{const e={};return n.forEach(r=>{t.forEach((i,s)=>{e[r+(s===0?"":s+1)]=i})}),e}};async function ma(n){if("Image"in globalThis)return new Promise(t=>{const e=new Image;e.onload=()=>{t(!0)},e.onerror=()=>{t(!1)},e.src=n});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const t=await(await fetch(n)).blob();await createImageBitmap(t)}catch{return!1}return!0}return!1}const Cf={extension:{type:M.DetectionParser,priority:1},test:async()=>ma("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async n=>[...n,"avif"],remove:async n=>n.filter(t=>t!=="avif")},Bs=["png","jpg","jpeg"],wf={extension:{type:M.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async n=>[...n,...Bs],remove:async n=>n.filter(t=>!Bs.includes(t))},Af="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Ai(n){return Af?!1:document.createElement("video").canPlayType(n)!==""}const Tf={extension:{type:M.DetectionParser,priority:0},test:async()=>Ai("video/mp4"),add:async n=>[...n,"mp4","m4v"],remove:async n=>n.filter(t=>t!=="mp4"&&t!=="m4v")},Pf={extension:{type:M.DetectionParser,priority:0},test:async()=>Ai("video/ogg"),add:async n=>[...n,"ogv"],remove:async n=>n.filter(t=>t!=="ogv")},Ff={extension:{type:M.DetectionParser,priority:0},test:async()=>Ai("video/webm"),add:async n=>[...n,"webm"],remove:async n=>n.filter(t=>t!=="webm")},Mf={extension:{type:M.DetectionParser,priority:0},test:async()=>ma("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async n=>[...n,"webp"],remove:async n=>n.filter(t=>t!=="webp")};class zf{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(t,e,r)=>(this._parsersValidated=!1,t[e]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(t,e){const r={promise:null,parser:null};return r.promise=(async()=>{var o,a;let i=null,s=null;if(e.loadParser&&(s=this._parserHash[e.loadParser],s||tt(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)),!s){for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];if(u.load&&((o=u.test)!=null&&o.call(u,t,e,this))){s=u;break}}if(!s)return tt(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await s.load(t,e,this),r.parser=s;for(let l=0;l<this.parsers.length;l++){const u=this.parsers[l];u.parse&&u.parse&&await((a=u.testParse)==null?void 0:a.call(u,i,e,this))&&(i=await u.parse(i,e,this)||i,r.parser=u)}return i})(),r}async load(t,e){this._parsersValidated||this._validateParsers();let r=0;const i={},s=On(t),o=Pt(t,u=>({alias:[u],src:u,data:{}})),a=o.length,l=o.map(async u=>{const c=lt.toAbsolute(u.src);if(!i[u.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,u)),i[u.src]=await this.promiseCache[c].promise,e&&e(++r/a)}catch(h){throw delete this.promiseCache[c],delete i[u.src],new Error(`[Loader.load] Failed to load ${c}.
${h}`)}});return await Promise.all(l),s?i[o[0].src]:i}async unload(t){const r=Pt(t,i=>({alias:[i],src:i})).map(async i=>{var a,l;const s=lt.toAbsolute(i.src),o=this.promiseCache[s];if(o){const u=await o.promise;delete this.promiseCache[s],await((l=(a=o.parser)==null?void 0:a.unload)==null?void 0:l.call(a,u,i,this))}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(t=>t.name).reduce((t,e)=>(e.name?t[e.name]&&tt(`[Assets] loadParser name conflict "${e.name}"`):tt("[Assets] loadParser should have a name"),{...t,[e.name]:e}),{})}}function be(n,t){if(Array.isArray(t)){for(const e of t)if(n.startsWith(`data:${e}`))return!0;return!1}return n.startsWith(`data:${t}`)}function Se(n,t){const e=n.split("?")[0],r=lt.extname(e).toLowerCase();return Array.isArray(t)?t.includes(r):r===t}const If=".json",Of="application/json",Rf={extension:{type:M.LoadParser,priority:Ut.Low},name:"loadJson",test(n){return be(n,Of)||Se(n,If)},async load(n){return await(await j.get().fetch(n)).json()}},Ef=".txt",kf="text/plain",Uf={name:"loadTxt",extension:{type:M.LoadParser,priority:Ut.Low,name:"loadTxt"},test(n){return be(n,kf)||Se(n,Ef)},async load(n){return await(await j.get().fetch(n)).text()}},Bf=["normal","bold","100","200","300","400","500","600","700","800","900"],Lf=[".ttf",".otf",".woff",".woff2"],Df=["font/ttf","font/otf","font/woff","font/woff2"],Gf=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Nf(n){const t=lt.extname(n),i=lt.basename(n,t).replace(/(-|_)/g," ").toLowerCase().split(" ").map(a=>a.charAt(0).toUpperCase()+a.slice(1));let s=i.length>0;for(const a of i)if(!a.match(Gf)){s=!1;break}let o=i.join(" ");return s||(o=`"${o.replace(/[\\"]/g,"\\$&")}"`),o}const $f=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Vf(n){return $f.test(n)?n:encodeURI(n)}const Wf={extension:{type:M.LoadParser,priority:Ut.Low},name:"loadWebFont",test(n){return be(n,Df)||Se(n,Lf)},async load(n,t){var r,i,s;const e=j.get().getFontFaceSet();if(e){const o=[],a=((r=t.data)==null?void 0:r.family)??Nf(n),l=((s=(i=t.data)==null?void 0:i.weights)==null?void 0:s.filter(c=>Bf.includes(c)))??["normal"],u=t.data??{};for(let c=0;c<l.length;c++){const h=l[c],d=new FontFace(a,`url(${Vf(n)})`,{...u,weight:h});await d.load(),e.add(d),o.push(d)}return K.set(`${a}-and-url`,{url:n,fontFaces:o}),o.length===1?o[0]:o}return tt("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(n){(Array.isArray(n)?n:[n]).forEach(t=>{K.remove(`${t.family}-and-url`),j.get().getFontFaceSet().delete(t)})}};function Ti(n,t=1){var r;const e=(r=_e.RETINA_PREFIX)==null?void 0:r.exec(n);return e?parseFloat(e[1]):t}function Pi(n,t,e){n.label=e,n._sourceOrigin=e;const r=new O({source:n,label:e}),i=()=>{delete t.promiseCache[e],K.has(e)&&K.remove(e)};return r.source.once("destroy",()=>{t.promiseCache[e]&&(tt("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),r.once("destroy",()=>{n.destroyed||(tt("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),r}const Xf=".svg",Yf="image/svg+xml",Hf={extension:{type:M.LoadParser,priority:Ut.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(n){return be(n,Yf)||Se(n,Xf)},async load(n,t,e){return t.data.parseAsGraphicsContext??this.config.parseAsGraphicsContext?qf(n):jf(n,t,e,this.config.crossOrigin)},unload(n){n.destroy(!0)}};async function jf(n,t,e,r){var m,x,y;const s=await(await j.get().fetch(n)).blob(),o=URL.createObjectURL(s),a=new Image;a.src=o,a.crossOrigin=r,await a.decode(),URL.revokeObjectURL(o);const l=document.createElement("canvas"),u=l.getContext("2d"),c=((m=t.data)==null?void 0:m.resolution)||Ti(n),h=((x=t.data)==null?void 0:x.width)??a.width,d=((y=t.data)==null?void 0:y.height)??a.height;l.width=h*c,l.height=d*c,u.drawImage(a,0,0,h*c,d*c);const{parseAsGraphicsContext:f,...p}=t.data,g=new re({resource:l,alphaMode:"premultiply-alpha-on-upload",resolution:c,...p});return Pi(g,e,n)}async function qf(n){const e=await(await j.get().fetch(n)).text(),r=new Ct;return r.svg(e),r}const Kf=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let pe=null,Jr=class{constructor(){pe||(pe=URL.createObjectURL(new Blob([Kf],{type:"application/javascript"}))),this.worker=new Worker(pe)}};Jr.revokeObjectURL=function(){pe&&(URL.revokeObjectURL(pe),pe=null)};const Zf=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let me=null;class ga{constructor(){me||(me=URL.createObjectURL(new Blob([Zf],{type:"application/javascript"}))),this.worker=new Worker(me)}}ga.revokeObjectURL=function(){me&&(URL.revokeObjectURL(me),me=null)};let Ls=0,Pr;class Qf{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(t=>{const{worker:e}=new Jr;e.addEventListener("message",r=>{e.terminate(),Jr.revokeObjectURL(),t(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(t,e){var r;return this._run("loadImageBitmap",[t,(r=e==null?void 0:e.data)==null?void 0:r.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Pr===void 0&&(Pr=navigator.hardwareConcurrency||4);let t=this._workerPool.pop();return!t&&this._createdWorkers<Pr&&(this._createdWorkers++,t=new ga().worker,t.addEventListener("message",e=>{this._complete(e.data),this._returnWorker(e.target),this._next()})),t}_returnWorker(t){this._workerPool.push(t)}_complete(t){t.error!==void 0?this._resolveHash[t.uuid].reject(t.error):this._resolveHash[t.uuid].resolve(t.data),this._resolveHash[t.uuid]=null}async _run(t,e){await this._initWorkers();const r=new Promise((i,s)=>{this._queue.push({id:t,arguments:e,resolve:i,reject:s})});return this._next(),r}_next(){if(!this._queue.length)return;const t=this._getWorker();if(!t)return;const e=this._queue.pop(),r=e.id;this._resolveHash[Ls]={resolve:e.resolve,reject:e.reject},t.postMessage({data:e.arguments,uuid:Ls++,id:r})}}const Ds=new Qf,Jf=[".jpeg",".jpg",".png",".webp",".avif"],td=["image/jpeg","image/png","image/webp","image/avif"];async function ed(n,t){var i;const e=await j.get().fetch(n);if(!e.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${n}: ${e.status} ${e.statusText}`);const r=await e.blob();return((i=t==null?void 0:t.data)==null?void 0:i.alphaMode)==="premultiplied-alpha"?createImageBitmap(r,{premultiplyAlpha:"none"}):createImageBitmap(r)}const xa={name:"loadTextures",extension:{type:M.LoadParser,priority:Ut.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(n){return be(n,td)||Se(n,Jf)},async load(n,t,e){var s;let r=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Ds.isImageBitmapSupported()?r=await Ds.loadImageBitmap(n,t):r=await ed(n,t):r=await new Promise(o=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=n,r.complete?o(r):r.onload=()=>{o(r)}});const i=new re({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:((s=t.data)==null?void 0:s.resolution)||Ti(n),...t.data});return Pi(i,e,n)},unload(n){n.destroy(!0)}},va=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],nd=va.map(n=>`video/${n.substring(1)}`);function rd(n,t,e){e===void 0&&!t.startsWith("data:")?n.crossOrigin=sd(t):e!==!1&&(n.crossOrigin=typeof e=="string"?e:"anonymous")}function id(n){return new Promise((t,e)=>{n.addEventListener("canplaythrough",r),n.addEventListener("error",i),n.load();function r(){s(),t()}function i(o){s(),e(o)}function s(){n.removeEventListener("canplaythrough",r),n.removeEventListener("error",i)}})}function sd(n,t=globalThis.location){if(n.startsWith("data:"))return"";t||(t=globalThis.location);const e=new URL(n,document.baseURI);return e.hostname!==t.hostname||e.port!==t.port||e.protocol!==t.protocol?"anonymous":""}const od={name:"loadVideo",extension:{type:M.LoadParser,name:"loadVideo"},test(n){const t=be(n,nd),e=Se(n,va);return t||e},async load(n,t,e){var l,u;const r={...xn.defaultOptions,resolution:((l=t.data)==null?void 0:l.resolution)||Ti(n),alphaMode:((u=t.data)==null?void 0:u.alphaMode)||await bo(),...t.data},i=document.createElement("video"),s={preload:r.autoLoad!==!1?"auto":void 0,"webkit-playsinline":r.playsinline!==!1?"":void 0,playsinline:r.playsinline!==!1?"":void 0,muted:r.muted===!0?"":void 0,loop:r.loop===!0?"":void 0,autoplay:r.autoPlay!==!1?"":void 0};Object.keys(s).forEach(c=>{const h=s[c];h!==void 0&&i.setAttribute(c,h)}),r.muted===!0&&(i.muted=!0),rd(i,n,r.crossorigin);const o=document.createElement("source");let a;if(n.startsWith("data:"))a=n.slice(5,n.indexOf(";"));else if(!n.startsWith("blob:")){const c=n.split("?")[0].slice(n.lastIndexOf(".")+1).toLowerCase();a=xn.MIME_TYPES[c]||`video/${c}`}return o.src=n,a&&(o.type=a),new Promise(c=>{const h=async()=>{const d=new xn({...r,resource:i});i.removeEventListener("canplay",h),t.data.preload&&await id(i),c(Pi(d,e,n))};i.addEventListener("canplay",h),i.appendChild(o)})},unload(n){n.destroy(!0)}},ya={extension:{type:M.ResolveParser,name:"resolveTexture"},test:xa.test,parse:n=>{var t;return{resolution:parseFloat(((t=_e.RETINA_PREFIX.exec(n))==null?void 0:t[1])??"1"),format:n.split(".").pop(),src:n}}},ad={extension:{type:M.ResolveParser,priority:-2,name:"resolveJson"},test:n=>_e.RETINA_PREFIX.test(n)&&n.endsWith(".json"),parse:ya.parse};class ld{constructor(){this._detections=[],this._initialized=!1,this.resolver=new _e,this.loader=new zf,this.cache=K,this._backgroundLoader=new bf(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(t={}){var s,o;if(this._initialized){tt("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,t.defaultSearchParams&&this.resolver.setDefaultSearchParams(t.defaultSearchParams),t.basePath&&(this.resolver.basePath=t.basePath),t.bundleIdentifier&&this.resolver.setBundleIdentifier(t.bundleIdentifier),t.manifest){let a=t.manifest;typeof a=="string"&&(a=await this.load(a)),this.resolver.addManifest(a)}const e=((s=t.texturePreference)==null?void 0:s.resolution)??1,r=typeof e=="number"?[e]:e,i=await this._detectFormats({preferredFormats:(o=t.texturePreference)==null?void 0:o.format,skipDetections:t.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:r}}),t.preferences&&this.setPreferences(t.preferences)}add(t){this.resolver.add(t)}async load(t,e){this._initialized||await this.init();const r=On(t),i=Pt(t).map(a=>{if(typeof a!="string"){const l=this.resolver.getAlias(a);return l.some(u=>!this.resolver.hasKey(u))&&this.add(a),Array.isArray(l)?l[0]:l}return this.resolver.hasKey(a)||this.add({alias:a,src:a}),a}),s=this.resolver.resolve(i),o=await this._mapLoadToResolve(s,e);return r?o[i[0]]:o}addBundle(t,e){this.resolver.addBundle(t,e)}async loadBundle(t,e){this._initialized||await this.init();let r=!1;typeof t=="string"&&(r=!0,t=[t]);const i=this.resolver.resolveBundle(t),s={},o=Object.keys(i);let a=0,l=0;const u=()=>{e==null||e(++a/l)},c=o.map(h=>{const d=i[h];return l+=Object.keys(d).length,this._mapLoadToResolve(d,u).then(f=>{s[h]=f})});return await Promise.all(c),r?s[t[0]]:s}async backgroundLoad(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolve(t);this._backgroundLoader.add(Object.values(e))}async backgroundLoadBundle(t){this._initialized||await this.init(),typeof t=="string"&&(t=[t]);const e=this.resolver.resolveBundle(t);Object.values(e).forEach(r=>{this._backgroundLoader.add(Object.values(r))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(t){if(typeof t=="string")return K.get(t);const e={};for(let r=0;r<t.length;r++)e[r]=K.get(t[r]);return e}async _mapLoadToResolve(t,e){const r=[...new Set(Object.values(t))];this._backgroundLoader.active=!1;const i=await this.loader.load(r,e);this._backgroundLoader.active=!0;const s={};return r.forEach(o=>{const a=i[o.src],l=[o.src];o.alias&&l.push(...o.alias),l.forEach(u=>{s[u]=a}),K.set(l,a)}),s}async unload(t){this._initialized||await this.init();const e=Pt(t).map(i=>typeof i!="string"?i.src:i),r=this.resolver.resolve(e);await this._unloadFromResolved(r)}async unloadBundle(t){this._initialized||await this.init(),t=Pt(t);const e=this.resolver.resolveBundle(t),r=Object.keys(e).map(i=>this._unloadFromResolved(e[i]));await Promise.all(r)}async _unloadFromResolved(t){const e=Object.values(t);e.forEach(r=>{K.remove(r.src)}),await this.loader.unload(e)}async _detectFormats(t){let e=[];t.preferredFormats&&(e=Array.isArray(t.preferredFormats)?t.preferredFormats:[t.preferredFormats]);for(const r of t.detections)t.skipDetections||await r.test()?e=await r.add(e):t.skipDetections||(e=await r.remove(e));return e=e.filter((r,i)=>e.indexOf(r)===i),e}get detections(){return this._detections}setPreferences(t){this.loader.parsers.forEach(e=>{e.config&&Object.keys(e.config).filter(r=>r in t).forEach(r=>{e.config[r]=t[r]})})}}const gt=new ld;ft.handleByList(M.LoadParser,gt.loader.parsers).handleByList(M.ResolveParser,gt.resolver.parsers).handleByList(M.CacheParser,gt.cache.parsers).handleByList(M.DetectionParser,gt.detections);ft.add(Sf,wf,Cf,Mf,Tf,Pf,Ff,Rf,Uf,Wf,Hf,xa,od,_f,yf,ya,ad);const Gs={loader:M.LoadParser,resolver:M.ResolveParser,cache:M.CacheParser,detection:M.DetectionParser};ft.handle(M.Asset,n=>{const t=n.ref;Object.entries(Gs).filter(([e])=>!!t[e]).forEach(([e,r])=>ft.add(Object.assign(t[e],{extension:t[e].extension??r})))},n=>{const t=n.ref;Object.keys(Gs).filter(e=>!!t[e]).forEach(e=>ft.remove(t[e]))});var ud=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,cd=`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
    finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,Ns=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
  uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
 
    var sample = textureSample(uTexture, uSampler, uv);
    
    return sample * alphaUniforms.uAlpha;
}`;const _a=class ba extends L{constructor(t){t={...ba.defaultOptions,...t};const e=k.from({vertex:{source:Ns,entryPoint:"mainVertex"},fragment:{source:Ns,entryPoint:"mainFragment"}}),r=U.from({vertex:ud,fragment:cd,name:"alpha-filter"}),{alpha:i,...s}=t,o=new $n({uAlpha:{value:i,type:"f32"}});super({...s,gpuProgram:e,glProgram:r,resources:{alphaUniforms:o}})}get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}set alpha(t){this.resources.alphaUniforms.uniforms.uAlpha=t}};_a.defaultOptions={alpha:1};let hd=_a;const Sa={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},fd=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function dd(n){const t=Sa[n],e=t.length;let r=fd,i="";const s="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;";let o;for(let a=0;a<n;a++){let l=s.replace("%index%",a.toString());o=a,a>=e&&(o=n-a-1),l=l.replace("%value%",t[o].toString()),i+=l,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r}const pd=`
    in vec2 aPosition;

    uniform float uStrength;

    out vec2 vBlurTexCoords[%size%];

    uniform vec4 uInputSize;
    uniform vec4 uOutputFrame;
    uniform vec4 uOutputTexture;

    vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

    vec2 filterTextureCoord( void )
    {
        return aPosition * (uOutputFrame.zw * uInputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        float pixelStrength = uInputSize.%dimension% * uStrength;

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function md(n,t){const e=Math.ceil(n/2);let r=pd,i="",s;t?s="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);":s="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);";for(let o=0;o<n;o++){let a=s.replace("%index%",o.toString());a=a.replace("%sampleIndex%",`${o-(e-1)}.0`),i+=a,i+=`
`}return r=r.replace("%blur%",i),r=r.replace("%size%",n.toString()),r=r.replace("%dimension%",t?"z":"w"),r}function gd(n,t){const e=md(t,n),r=dd(t);return U.from({vertex:e,fragment:r,name:`blur-${n?"horizontal":"vertical"}-pass-filter`})}var xd=`

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
  uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
    @builtin(position) position: vec4<f32>,
    %blur-struct%
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {

  let filteredCord = filterTextureCoord(aPosition);

  let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

  return VSOutput(
   filterVertexPosition(aPosition),
    %blur-vertex-out%
  );
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  %blur-fragment-in%
) -> @location(0) vec4<f32> {

    var   finalColor = vec4(0.0);

    %blur-sampling%

    return finalColor;
}`;function vd(n,t){const e=Sa[t],r=e.length,i=[],s=[],o=[];for(let h=0;h<t;h++){i[h]=`@location(${h}) offset${h}: vec2<f32>,`,n?s[h]=`filteredCord + vec2(${h-r+1} * pixelStrength, 0.0),`:s[h]=`filteredCord + vec2(0.0, ${h-r+1} * pixelStrength),`;const d=h<r?h:t-h-1,f=e[d].toString();o[h]=`finalColor += textureSample(uTexture, uSampler, offset${h}) * ${f};`}const a=i.join(`
`),l=s.join(`
`),u=o.join(`
`),c=xd.replace("%blur-struct%",a).replace("%blur-vertex-out%",l).replace("%blur-fragment-in%",a).replace("%blur-sampling%",u).replace("%dimension%",n?"z":"w");return k.from({vertex:{source:c,entryPoint:"mainVertex"},fragment:{source:c,entryPoint:"mainFragment"}})}const Ca=class wa extends L{constructor(t){t={...wa.defaultOptions,...t};const e=gd(t.horizontal,t.kernelSize),r=vd(t.horizontal,t.kernelSize);super({glProgram:e,gpuProgram:r,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}},...t}),this.horizontal=t.horizontal,this._quality=0,this.quality=t.quality,this.blur=t.strength,this._uniforms=this.resources.blurUniforms.uniforms}apply(t,e,r,i){if(this._uniforms.uStrength=this.strength/this.passes,this.passes===1)t.applyFilter(this,e,r,i);else{const s=bt.getSameSizeTexture(e);let o=e,a=s;this._state.blend=!1;const l=t.renderer.type===Rn.WEBGPU;for(let u=0;u<this.passes-1;u++){t.applyFilter(this,o,a,u===0?!0:l);const c=a;a=o,o=c}this._state.blend=!0,t.applyFilter(this,o,r,i),bt.returnTexture(s)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}};Ca.defaultOptions={strength:8,quality:4,kernelSize:5};let $s=Ca;var yd=`
in vec2 vTextureCoord;
in vec2 vFilterUv;

out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;

uniform vec4 uInputClamp;
uniform highp vec4 uInputSize;
uniform mat2 uRotation;
uniform vec2 uScale;

void main()
{
    vec4 map = texture(uMapTexture, vFilterUv);
    
    vec2 offset = uInputSize.zw * (uRotation * (map.xy - 0.5)) * uScale; 

    finalColor = texture(uTexture, clamp(vTextureCoord + offset, uInputClamp.xy, uInputClamp.zw));
}
`,_d=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterUv;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

uniform mat3 uFilterMatrix;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( void )
{
  return ( uFilterMatrix * vec3( filterTextureCoord(), 1.0)  ).xy;
}


void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterUv = getFilterCoord();
}
`,Vs=`
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

struct DisplacementUniforms {
  uFilterMatrix:mat3x3<f32>,
  uScale:vec2<f32>,
  uRotation:mat2x2<f32>
};



@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : DisplacementUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler : sampler;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>,
    @location(1) filterUv : vec2<f32>,
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{

  
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition),
   getFilterCoord(aPosition)
  );
}

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @location(1) filterUv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

    var map = textureSample(uMapTexture, uMapSampler, filterUv);

    var offset =  gfu.uInputSize.zw * (filterUniforms.uRotation * (map.xy - 0.5)) * filterUniforms.uScale; 
   
    return textureSample(uTexture, uSampler, clamp(uv + offset, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
}`;class bd extends L{constructor(...t){let e=t[0];e instanceof At&&(t[1]&&F(N,"DisplacementFilter now uses options object instead of params. {sprite, scale}"),e={sprite:e,scale:t[1]});const{sprite:r,scale:i,...s}=e;let o=i??20;typeof o=="number"&&(o=new at(o,o));const a=new $n({uFilterMatrix:{value:new D,type:"mat3x3<f32>"},uScale:{value:o,type:"vec2<f32>"},uRotation:{value:new Float32Array([0,0,0,0]),type:"mat2x2<f32>"}}),l=U.from({vertex:_d,fragment:yd,name:"displacement-filter"}),u=k.from({vertex:{source:Vs,entryPoint:"mainVertex"},fragment:{source:Vs,entryPoint:"mainFragment"}}),c=r.texture.source;super({...s,gpuProgram:u,glProgram:l,resources:{filterUniforms:a,uMapTexture:c,uMapSampler:c.style}}),this._sprite=e.sprite,this._sprite.renderable=!1}apply(t,e,r,i){const s=this.resources.filterUniforms.uniforms;t.calculateSpriteMatrix(s.uFilterMatrix,this._sprite);const o=this._sprite.worldTransform,a=Math.sqrt(o.a*o.a+o.b*o.b),l=Math.sqrt(o.c*o.c+o.d*o.d);a!==0&&l!==0&&(s.uRotation[0]=o.a/a,s.uRotation[1]=o.b/a,s.uRotation[2]=o.c/l,s.uRotation[3]=o.d/l),this.resources.uMapTexture=this._sprite.texture.source,t.applyFilter(this,e,r,i)}get scale(){return this.resources.filterUniforms.uniforms.uScale}}class Xe extends Gn{constructor(t){t instanceof Ct&&(t={context:t});const{context:e,roundPixels:r,...i}=t||{};super({label:"Graphics",...i}),this.renderPipeId="graphics",e?this._context=e:this._context=this._ownedContext=new Ct,this._context.on("update",this.onViewUpdate,this),this.allowChildren=!1,this.roundPixels=r??!1}set context(t){t!==this._context&&(this._context.off("update",this.onViewUpdate,this),this._context=t,this._context.on("update",this.onViewUpdate,this),this.onViewUpdate())}get context(){return this._context}get bounds(){return this._context.bounds}updateBounds(){}containsPoint(t){return this._context.containsPoint(t)}destroy(t){this._ownedContext&&!t?this._ownedContext.destroy(t):(t===!0||(t==null?void 0:t.context)===!0)&&this._context.destroy(t),this._ownedContext=null,this._context=null,super.destroy(t)}_callContextMethod(t,e){return this.context[t](...e),this}setFillStyle(...t){return this._callContextMethod("setFillStyle",t)}setStrokeStyle(...t){return this._callContextMethod("setStrokeStyle",t)}fill(...t){return this._callContextMethod("fill",t)}stroke(...t){return this._callContextMethod("stroke",t)}texture(...t){return this._callContextMethod("texture",t)}beginPath(){return this._callContextMethod("beginPath",[])}cut(){return this._callContextMethod("cut",[])}arc(...t){return this._callContextMethod("arc",t)}arcTo(...t){return this._callContextMethod("arcTo",t)}arcToSvg(...t){return this._callContextMethod("arcToSvg",t)}bezierCurveTo(...t){return this._callContextMethod("bezierCurveTo",t)}closePath(){return this._callContextMethod("closePath",[])}ellipse(...t){return this._callContextMethod("ellipse",t)}circle(...t){return this._callContextMethod("circle",t)}path(...t){return this._callContextMethod("path",t)}lineTo(...t){return this._callContextMethod("lineTo",t)}moveTo(...t){return this._callContextMethod("moveTo",t)}quadraticCurveTo(...t){return this._callContextMethod("quadraticCurveTo",t)}rect(...t){return this._callContextMethod("rect",t)}roundRect(...t){return this._callContextMethod("roundRect",t)}poly(...t){return this._callContextMethod("poly",t)}regularPoly(...t){return this._callContextMethod("regularPoly",t)}roundPoly(...t){return this._callContextMethod("roundPoly",t)}roundShape(...t){return this._callContextMethod("roundShape",t)}filletRect(...t){return this._callContextMethod("filletRect",t)}chamferRect(...t){return this._callContextMethod("chamferRect",t)}star(...t){return this._callContextMethod("star",t)}svg(...t){return this._callContextMethod("svg",t)}restore(...t){return this._callContextMethod("restore",t)}save(){return this._callContextMethod("save",[])}getTransform(){return this.context.getTransform()}resetTransform(){return this._callContextMethod("resetTransform",[])}rotateTransform(...t){return this._callContextMethod("rotate",t)}scaleTransform(...t){return this._callContextMethod("scale",t)}setTransform(...t){return this._callContextMethod("setTransform",t)}transform(...t){return this._callContextMethod("transform",t)}translateTransform(...t){return this._callContextMethod("translate",t)}clear(){return this._callContextMethod("clear",[])}get fillStyle(){return this._context.fillStyle}set fillStyle(t){this._context.fillStyle=t}get strokeStyle(){return this._context.strokeStyle}set strokeStyle(t){this._context.strokeStyle=t}clone(t=!1){return t?new Xe(this._context.clone()):(this._ownedContext=null,new Xe(this._context))}lineStyle(t,e,r){F(N,"Graphics#lineStyle is no longer needed. Use Graphics#setStrokeStyle to set the stroke style.");const i={};return t&&(i.width=t),e&&(i.color=e),r&&(i.alpha=r),this.context.strokeStyle=i,this}beginFill(t,e){F(N,"Graphics#beginFill is no longer needed. Use Graphics#fill to fill the shape with the desired style.");const r={};return t!==void 0&&(r.color=t),e!==void 0&&(r.alpha=e),this.context.fillStyle=r,this}endFill(){F(N,"Graphics#endFill is no longer needed. Use Graphics#fill to fill the shape with the desired style."),this.context.fill();const t=this.context.strokeStyle;return(t.width!==Ct.defaultStrokeStyle.width||t.color!==Ct.defaultStrokeStyle.color||t.alpha!==Ct.defaultStrokeStyle.alpha)&&this.context.stroke(),this}drawCircle(...t){return F(N,"Graphics#drawCircle has been renamed to Graphics#circle"),this._callContextMethod("circle",t)}drawEllipse(...t){return F(N,"Graphics#drawEllipse has been renamed to Graphics#ellipse"),this._callContextMethod("ellipse",t)}drawPolygon(...t){return F(N,"Graphics#drawPolygon has been renamed to Graphics#poly"),this._callContextMethod("poly",t)}drawRect(...t){return F(N,"Graphics#drawRect has been renamed to Graphics#rect"),this._callContextMethod("rect",t)}drawRoundedRect(...t){return F(N,"Graphics#drawRoundedRect has been renamed to Graphics#roundRect"),this._callContextMethod("roundRect",t)}drawStar(...t){return F(N,"Graphics#drawStar has been renamed to Graphics#star"),this._callContextMethod("star",t)}}class Ye extends At{constructor(...t){let e=t[0];Array.isArray(t[0])&&(e={textures:t[0],autoUpdate:t[1]});const{textures:r,autoUpdate:i,...s}=e,[o]=r;super({...s,texture:o instanceof O?o:o.texture}),this._textures=null,this._durations=null,this._autoUpdate=i??!0,this._isConnectedToTicker=!1,this.animationSpeed=1,this.loop=!0,this.updateAnchor=!1,this.onComplete=null,this.onFrameChange=null,this.onLoop=null,this._currentTime=0,this._playing=!1,this._previousFrame=null,this.textures=r}stop(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(St.shared.remove(this.update,this),this._isConnectedToTicker=!1))}play(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(St.shared.add(this.update,this,In.HIGH),this._isConnectedToTicker=!0))}gotoAndStop(t){this.stop(),this.currentFrame=t}gotoAndPlay(t){this.currentFrame=t,this.play()}update(t){if(!this._playing)return;const e=t.deltaTime,r=this.animationSpeed*e,i=this.currentFrame;if(this._durations!==null){let s=this._currentTime%1*this._durations[this.currentFrame];for(s+=r/60*1e3;s<0;)this._currentTime--,s+=this._durations[this.currentFrame];const o=Math.sign(this.animationSpeed*e);for(this._currentTime=Math.floor(this._currentTime);s>=this._durations[this.currentFrame];)s-=this._durations[this.currentFrame]*o,this._currentTime+=o;this._currentTime+=s/this._durations[this.currentFrame]}else this._currentTime+=r;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):i!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<i||this.animationSpeed<0&&this.currentFrame>i)&&this.onLoop(),this._updateTexture())}_updateTexture(){const t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this.texture=this._textures[t],this.updateAnchor&&this.anchor.copyFrom(this.texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))}destroy(){this.stop(),super.destroy(),this.onComplete=null,this.onFrameChange=null,this.onLoop=null}static fromFrames(t){const e=[];for(let r=0;r<t.length;++r)e.push(O.from(t[r]));return new Ye(e)}static fromImages(t){const e=[];for(let r=0;r<t.length;++r)e.push(O.from(t[r]));return new Ye(e)}get totalFrames(){return this._textures.length}get textures(){return this._textures}set textures(t){if(t[0]instanceof O)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(let e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)}this._previousFrame=null,this.gotoAndStop(0),this._updateTexture()}get currentFrame(){let t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t}set currentFrame(t){if(t<0||t>this.totalFrames-1)throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);const e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this._updateTexture()}get playing(){return this._playing}get autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(St.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(St.shared.add(this.update,this),this._isConnectedToTicker=!0))}}class Sd{constructor({matrix:t,observer:e}={}){this.dirty=!0,this._matrix=t??new D,this.observer=e,this.position=new et(this,0,0),this.scale=new et(this,1,1),this.pivot=new et(this,0,0),this.skew=new et(this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1}get matrix(){const t=this._matrix;return this.dirty&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this.dirty=!1),t}_onUpdate(t){var e;this.dirty=!0,t===this.skew&&this.updateSkew(),(e=this.observer)==null||e._onUpdate(this)}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this.dirty=!0}toString(){return`[pixi.js/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`}setFromMatrix(t){t.decompose(this),this.dirty=!0}get rotation(){return this._rotation}set rotation(t){this._rotation!==t&&(this._rotation=t,this._onUpdate(this.skew))}}const Aa=class _n extends Gn{constructor(...t){let e=t[0]||{};e instanceof O&&(e={texture:e}),t.length>1&&(F(N,"use new TilingSprite({ texture, width:100, height:100 }) instead"),e.width=t[1],e.height=t[2]),e={..._n.defaultOptions,...e};const{texture:r,anchor:i,tilePosition:s,tileScale:o,tileRotation:a,width:l,height:u,applyAnchorToTexture:c,roundPixels:h,...d}=e??{};super({label:"TilingSprite",...d}),this.renderPipeId="tilingSprite",this.batched=!0,this.allowChildren=!1,this._anchor=new et({_onUpdate:()=>{this.onViewUpdate()}}),this.applyAnchorToTexture=c,this.texture=r,this._width=l??r.width,this._height=u??r.height,this._tileTransform=new Sd({observer:{_onUpdate:()=>this.onViewUpdate()}}),i&&(this.anchor=i),this.tilePosition=s,this.tileScale=o,this.tileRotation=a,this.roundPixels=h??!1}static from(t,e={}){return typeof t=="string"?new _n({texture:K.get(t),...e}):new _n({texture:t,...e})}get uvRespectAnchor(){return tt("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture}set uvRespectAnchor(t){tt("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead"),this.applyAnchorToTexture=t}get clampMargin(){return this._texture.textureMatrix.clampMargin}set clampMargin(t){this._texture.textureMatrix.clampMargin=t}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get tilePosition(){return this._tileTransform.position}set tilePosition(t){this._tileTransform.position.copyFrom(t)}get tileScale(){return this._tileTransform.scale}set tileScale(t){typeof t=="number"?this._tileTransform.scale.set(t):this._tileTransform.scale.copyFrom(t)}set tileRotation(t){this._tileTransform.rotation=t}get tileRotation(){return this._tileTransform.rotation}get tileTransform(){return this._tileTransform}set texture(t){t||(t=O.EMPTY);const e=this._texture;e!==t&&(e&&e.dynamic&&e.off("update",this.onViewUpdate,this),t.dynamic&&t.on("update",this.onViewUpdate,this),this._texture=t,this.onViewUpdate())}get texture(){return this._texture}set width(t){this._width=t,this.onViewUpdate()}get width(){return this._width}set height(t){this._height=t,this.onViewUpdate()}get height(){return this._height}setSize(t,e){typeof t=="object"&&(e=t.height??t.width,t=t.width),this._width=t,this._height=e??t,this.onViewUpdate()}getSize(t){return t||(t={}),t.width=this._width,t.height=this._height,t}updateBounds(){const t=this._bounds,e=this._anchor,r=this._width,i=this._height;t.maxX=-e._x*r,t.minX=t.maxX+r,t.maxY=-e._y*i,t.minY=t.maxY+i}containsPoint(t){const e=this._width,r=this._height,i=-e*this._anchor._x;let s=0;return t.x>=i&&t.x<=i+e&&(s=-r*this._anchor._y,t.y>=s&&t.y<=s+r)}destroy(t=!1){if(super.destroy(t),this._anchor=null,this._tileTransform=null,this._bounds=null,typeof t=="boolean"?t:t==null?void 0:t.texture){const r=typeof t=="boolean"?t:t==null?void 0:t.textureSource;this._texture.destroy(r)}this._texture=null}};Aa.defaultOptions={texture:O.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};let Cd=Aa;class wd extends Gn{constructor(t,e){const{text:r,resolution:i,style:s,anchor:o,width:a,height:l,roundPixels:u,...c}=t;super({...c}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=e,this.text=r??"",this.style=s,this.resolution=i??null,this.allowChildren=!1,this._anchor=new et({_onUpdate:()=>{this.onViewUpdate()}}),o&&(this.anchor=o),this.roundPixels=u??!1,a!==void 0&&(this.width=a),l!==void 0&&(this.height=l)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}set text(t){t=t.toString(),this._text!==t&&(this._text=t,this.onViewUpdate())}get text(){return this._text}set resolution(t){this._autoResolution=t===null,this._resolution=t,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(t){var e;t||(t={}),(e=this._style)==null||e.off("update",this.onViewUpdate,this),t instanceof this._styleClass?this._style=t:this._style=new this._styleClass(t),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(t){this._setWidth(t,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(t){this._setHeight(t,this.bounds.height)}getSize(t){return t||(t={}),t.width=Math.abs(this.scale.x)*this.bounds.width,t.height=Math.abs(this.scale.y)*this.bounds.height,t}setSize(t,e){typeof t=="object"?(e=t.height??t.width,t=t.width):e??(e=t),t!==void 0&&this._setWidth(t,this.bounds.width),e!==void 0&&this._setHeight(e,this.bounds.height)}containsPoint(t){const e=this.bounds.width,r=this.bounds.height,i=-e*this.anchor.x;let s=0;return t.x>=i&&t.x<=i+e&&(s=-r*this.anchor.y,t.y>=s&&t.y<=s+r)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(t=!1){super.destroy(t),this.owner=null,this._bounds=null,this._anchor=null,(typeof t=="boolean"?t:t!=null&&t.style)&&this._style.destroy(t),this._style=null,this._text=null}}function Ad(n,t){let e=n[0]??{};return(typeof e=="string"||n[1])&&(F(N,`use new ${t}({ text: "hi!", style }) instead`),e={text:e,style:n[1]}),e}class Td extends wd{constructor(...t){const e=Ad(t,"Text");super(e,ct),this.renderPipeId="text"}updateBounds(){const t=this._bounds,e=this._anchor,r=Qr.measureText(this._text,this._style),{width:i,height:s}=r;t.minX=-e._x*i,t.maxX=t.minX+i,t.minY=-e._y*s,t.maxY=t.minY+s}}const ze=new Map;function Pd(n,t){if(!ze.has(n)){const e=new O({source:new gi({resource:n,...t})}),r=()=>{ze.get(n)===e&&ze.delete(n)};e.once("destroy",r),e.source.once("destroy",r),ze.set(n,e)}return ze.get(n)}const Ta=class Pa{constructor(t={}){if(this.uid=rt("renderTarget"),this.colorTextures=[],this.dirtyId=0,this.isRoot=!1,this._size=new Float32Array(2),this._managedColorTextures=!1,t={...Pa.defaultOptions,...t},this.stencil=t.stencil,this.depth=t.depth,this.isRoot=t.isRoot,typeof t.colorTextures=="number"){this._managedColorTextures=!0;for(let e=0;e<t.colorTextures;e++)this.colorTextures.push(new vt({width:t.width,height:t.height,resolution:t.resolution,antialias:t.antialias}))}else{this.colorTextures=[...t.colorTextures.map(r=>r.source)];const e=this.colorTexture.source;this.resize(e.width,e.height,e._resolution)}this.colorTexture.source.on("resize",this.onSourceResize,this),(t.depthStencilTexture||this.stencil)&&(t.depthStencilTexture instanceof O||t.depthStencilTexture instanceof vt?this.depthStencilTexture=t.depthStencilTexture.source:this.ensureDepthStencilTexture())}get size(){const t=this._size;return t[0]=this.pixelWidth,t[1]=this.pixelHeight,t}get width(){return this.colorTexture.source.width}get height(){return this.colorTexture.source.height}get pixelWidth(){return this.colorTexture.source.pixelWidth}get pixelHeight(){return this.colorTexture.source.pixelHeight}get resolution(){return this.colorTexture.source._resolution}get colorTexture(){return this.colorTextures[0]}onSourceResize(t){this.resize(t.width,t.height,t._resolution,!0)}ensureDepthStencilTexture(){this.depthStencilTexture||(this.depthStencilTexture=new vt({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1}))}resize(t,e,r=this.resolution,i=!1){this.dirtyId++,this.colorTextures.forEach((s,o)=>{i&&o===0||s.source.resize(t,e,r)}),this.depthStencilTexture&&this.depthStencilTexture.source.resize(t,e,r)}destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this),this._managedColorTextures&&this.colorTextures.forEach(t=>{t.destroy()}),this.depthStencilTexture&&(this.depthStencilTexture.destroy(),delete this.depthStencilTexture)}};Ta.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};let Fd=Ta;const Fi=class Fa{get autoDensity(){return this.texture.source.autoDensity}set autoDensity(t){this.texture.source.autoDensity=t}get resolution(){return this.texture.source._resolution}set resolution(t){this.texture.source.resize(this.texture.source.width,this.texture.source.height,t)}init(t){t={...Fa.defaultOptions,...t},t.view&&(F(N,"ViewSystem.view has been renamed to ViewSystem.canvas"),t.canvas=t.view),this.screen=new nt(0,0,t.width,t.height),this.canvas=t.canvas||j.get().createCanvas(),this.antialias=!!t.antialias,this.texture=Pd(this.canvas,t),this.renderTarget=new Fd({colorTextures:[this.texture],depth:!!t.depth,isRoot:!0}),this.texture.source.transparent=t.backgroundAlpha<1,this.resolution=t.resolution}resize(t,e,r){this.texture.source.resize(t,e,r),this.screen.width=this.texture.frame.width,this.screen.height=this.texture.frame.height}destroy(t=!1){(typeof t=="boolean"?t:!!(t!=null&&t.removeView))&&this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas)}};Fi.extension={type:[M.WebGLSystem,M.WebGPUSystem,M.CanvasSystem],name:"view",priority:0};Fi.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};let Md=Fi;ft.add(Ol,Rl);let Ma=null;function zd(){Ma={loading:new ct({fontFamily:dt.normal,fontSize:80,fill:"#00ff00",dropShadow:!0,dropShadowColor:"#777777",dropShadowBlur:4,dropShadowAngle:0,dropShadowDistance:0}),level:new ct({fontFamily:dt.normal,fontSize:32,fill:"#ffff00",align:"center"}),score:new ct({fontFamily:dt.normal,fontSize:38,fill:"#00ff00",align:"center"}),infoBonus:new ct({fontFamily:dt.normal,fontSize:24,fill:"#00ff00",align:"center"}),label:new ct({fontFamily:dt.bold,fontSize:26,fill:"#ffff00",align:"center"}),infoPrice:new ct({fontFamily:dt.normal,fontSize:20,fill:"#ffffff",align:"center"}),message:new ct({fontFamily:dt.normal,fontSize:36,fill:"#ff0000",align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:6,dropShadowAngle:0,dropShadowDistance:0}),mobileMessage:new ct({fontFamily:dt.normal,fontSize:32,fill:"#ff0000",align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:4,dropShadowAngle:0,dropShadowDistance:0}),adResultMessage:new ct({fontFamily:dt.normal,fontSize:24,fill:"#000000",align:"center",dropShadow:!0,dropShadowColor:"#00ff00",dropShadowBlur:6,dropShadowAngle:0,dropShadowDistance:0,wordWrap:!0,wordWrapWidth:300}),adResultButton:new ct({fontFamily:dt.normal,fontSize:24,fill:"#ffffff",align:"center",dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:6,dropShadowAngle:0,dropShadowDistance:0})}}let za;function Id(n){return za=n,n}function He(){return za}class ti{static setParamValue(t,e){if(t.setValueAtTime){const r=He().context;t.setValueAtTime(e,r.audioContext.currentTime)}else t.value=e;return e}}class Od extends ut{constructor(){super(...arguments),this.speed=1,this.muted=!1,this.volume=1,this.paused=!1}refresh(){this.emit("refresh")}refreshPaused(){this.emit("refreshPaused")}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(t){console.warn("HTML Audio does not support filters")}get audioContext(){return console.warn("HTML Audio does not support audioContext"),null}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this.paused}destroy(){this.removeAllListeners()}}let Rd=0;const ei=class extends ut{constructor(n){super(),this.id=Rd++,this.init(n)}set(n,t){if(this[n]===void 0)throw new Error(`Property with name ${n} does not exist.`);switch(n){case"speed":this.speed=t;break;case"volume":this.volume=t;break;case"paused":this.paused=t;break;case"loop":this.loop=t;break;case"muted":this.muted=t;break}return this}get progress(){const{currentTime:n}=this._source;return n/this._duration}get paused(){return this._paused}set paused(n){this._paused=n,this.refreshPaused()}_onPlay(){this._playing=!0}_onPause(){this._playing=!1}init(n){this._playing=!1,this._duration=n.source.duration;const t=this._source=n.source.cloneNode(!1);t.src=n.parent.url,t.onplay=this._onPlay.bind(this),t.onpause=this._onPause.bind(this),n.context.on("refresh",this.refresh,this),n.context.on("refreshPaused",this.refreshPaused,this),this._media=n}_internalStop(){this._source&&this._playing&&(this._source.onended=null,this._source.pause())}stop(){this._internalStop(),this._source&&this.emit("stop")}get speed(){return this._speed}set speed(n){this._speed=n,this.refresh()}get volume(){return this._volume}set volume(n){this._volume=n,this.refresh()}get loop(){return this._loop}set loop(n){this._loop=n,this.refresh()}get muted(){return this._muted}set muted(n){this._muted=n,this.refresh()}get filters(){return console.warn("HTML Audio does not support filters"),null}set filters(n){console.warn("HTML Audio does not support filters")}refresh(){const n=this._media.context,t=this._media.parent;this._source.loop=this._loop||t.loop;const e=n.volume*(n.muted?0:1),r=t.volume*(t.muted?0:1),i=this._volume*(this._muted?0:1);this._source.volume=i*e*r,this._source.playbackRate=this._speed*n.speed*t.speed}refreshPaused(){const n=this._media.context,t=this._media.parent,e=this._paused||t.paused||n.paused;e!==this._pausedReal&&(this._pausedReal=e,e?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._source.currentTime,end:this._end,volume:this._volume,speed:this._speed,loop:this._loop})),this.emit("pause",e))}play(n){const{start:t,end:e,speed:r,loop:i,volume:s,muted:o}=n;e&&console.assert(e>t,"End time is before start time"),this._speed=r,this._volume=s,this._loop=!!i,this._muted=o,this.refresh(),this.loop&&e!==null&&(console.warn('Looping not support when specifying an "end" time'),this.loop=!1),this._start=t,this._end=e||this._duration,this._start=Math.max(0,this._start-ei.PADDING),this._end=Math.min(this._end+ei.PADDING,this._duration),this._source.onloadedmetadata=()=>{this._source&&(this._source.currentTime=t,this._source.onloadedmetadata=null,this.emit("progress",t/this._duration,this._duration),St.shared.add(this._onUpdate,this))},this._source.onended=this._onComplete.bind(this),this._source.play(),this.emit("start")}_onUpdate(){this.emit("progress",this.progress,this._duration),this._source.currentTime>=this._end&&!this._source.loop&&this._onComplete()}_onComplete(){St.shared.remove(this._onUpdate,this),this._internalStop(),this.emit("progress",1,this._duration),this.emit("end",this)}destroy(){St.shared.remove(this._onUpdate,this),this.removeAllListeners();const n=this._source;n&&(n.onended=null,n.onplay=null,n.onpause=null,this._internalStop()),this._source=null,this._speed=1,this._volume=1,this._loop=!1,this._end=null,this._start=0,this._duration=0,this._playing=!1,this._pausedReal=!1,this._paused=!1,this._muted=!1,this._media&&(this._media.context.off("refresh",this.refresh,this),this._media.context.off("refreshPaused",this.refreshPaused,this),this._media=null)}toString(){return`[HTMLAudioInstance id=${this.id}]`}};let Ia=ei;Ia.PADDING=.1;class Ed extends ut{init(t){this.parent=t,this._source=t.options.source||new Audio,t.url&&(this._source.src=t.url)}create(){return new Ia(this)}get isPlayable(){return!!this._source&&this._source.readyState===4}get duration(){return this._source.duration}get context(){return this.parent.context}get filters(){return null}set filters(t){console.warn("HTML Audio does not support filters")}destroy(){this.removeAllListeners(),this.parent=null,this._source&&(this._source.src="",this._source.load(),this._source=null)}get source(){return this._source}load(t){const e=this._source,r=this.parent;if(e.readyState===4){r.isLoaded=!0;const l=r.autoPlayStart();t&&setTimeout(()=>{t(null,r,l)},0);return}if(!r.url){t(new Error("sound.url or sound.source must be set"));return}e.src=r.url;const i=()=>{a(),r.isLoaded=!0;const l=r.autoPlayStart();t&&t(null,r,l)},s=()=>{a(),t&&t(new Error("Sound loading has been aborted"))},o=()=>{a();const l=`Failed to load audio element (code: ${e.error.code})`;t?t(new Error(l)):console.error(l)},a=()=>{e.removeEventListener("canplaythrough",i),e.removeEventListener("load",i),e.removeEventListener("abort",s),e.removeEventListener("error",o)};e.addEventListener("canplaythrough",i,!1),e.addEventListener("load",i,!1),e.addEventListener("abort",s,!1),e.addEventListener("error",o,!1),e.load()}}class kd{constructor(t,e){this.parent=t,Object.assign(this,e),this.duration=this.end-this.start,console.assert(this.duration>0,"End time must be after start time")}play(t){return this.parent.play({complete:t,speed:this.speed||this.parent.speed,end:this.end,start:this.start,loop:this.loop})}destroy(){this.parent=null}}const kn=["ogg","oga","opus","m4a","mp3","mpeg","wav","aiff","wma","mid","caf"],Ud=["audio/mpeg","audio/ogg"],Un={};function Bd(n){const t={m4a:"audio/mp4",oga:"audio/ogg",opus:'audio/ogg; codecs="opus"',caf:'audio/x-caf; codecs="opus"'},e=document.createElement("audio"),r={},i=/^no$/;kn.forEach(s=>{const o=e.canPlayType(`audio/${s}`).replace(i,""),a=t[s]?e.canPlayType(t[s]).replace(i,""):"";r[s]=!!o||!!a}),Object.assign(Un,r)}Bd();let Ld=0;class Dd extends ut{constructor(t){super(),this.id=Ld++,this._media=null,this._paused=!1,this._muted=!1,this._elapsed=0,this.init(t)}set(t,e){if(this[t]===void 0)throw new Error(`Property with name ${t} does not exist.`);switch(t){case"speed":this.speed=e;break;case"volume":this.volume=e;break;case"muted":this.muted=e;break;case"loop":this.loop=e;break;case"paused":this.paused=e;break}return this}stop(){this._source&&(this._internalStop(),this.emit("stop"))}get speed(){return this._speed}set speed(t){this._speed=t,this.refresh(),this._update(!0)}get volume(){return this._volume}set volume(t){this._volume=t,this.refresh()}get muted(){return this._muted}set muted(t){this._muted=t,this.refresh()}get loop(){return this._loop}set loop(t){this._loop=t,this.refresh()}get filters(){return this._filters}set filters(t){var e;this._filters&&((e=this._filters)==null||e.filter(r=>r).forEach(r=>r.disconnect()),this._filters=null,this._source.connect(this._gain)),this._filters=t!=null&&t.length?t.slice(0):null,this.refresh()}refresh(){if(!this._source)return;const t=this._media.context,e=this._media.parent;this._source.loop=this._loop||e.loop;const r=t.volume*(t.muted?0:1),i=e.volume*(e.muted?0:1),s=this._volume*(this._muted?0:1);ti.setParamValue(this._gain.gain,s*i*r),ti.setParamValue(this._source.playbackRate,this._speed*e.speed*t.speed),this.applyFilters()}applyFilters(){var t;if((t=this._filters)!=null&&t.length){this._source.disconnect();let e=this._source;this._filters.forEach(r=>{e.connect(r.destination),e=r}),e.connect(this._gain)}}refreshPaused(){const t=this._media.context,e=this._media.parent,r=this._paused||e.paused||t.paused;r!==this._pausedReal&&(this._pausedReal=r,r?(this._internalStop(),this.emit("paused")):(this.emit("resumed"),this.play({start:this._elapsed%this._duration,end:this._end,speed:this._speed,loop:this._loop,volume:this._volume})),this.emit("pause",r))}play(t){const{start:e,end:r,speed:i,loop:s,volume:o,muted:a,filters:l}=t;r&&console.assert(r>e,"End time is before start time"),this._paused=!1;const{source:u,gain:c}=this._media.nodes.cloneBufferSource();this._source=u,this._gain=c,this._speed=i,this._volume=o,this._loop=!!s,this._muted=a,this._filters=l,this.refresh();const h=this._source.buffer.duration;this._duration=h,this._end=r,this._lastUpdate=this._now(),this._elapsed=e,this._source.onended=this._onComplete.bind(this),this._loop?(this._source.loopEnd=r,this._source.loopStart=e,this._source.start(0,e)):r?this._source.start(0,e,r-e):this._source.start(0,e),this.emit("start"),this._update(!0),this.enableTicker(!0)}enableTicker(t){St.shared.remove(this._updateListener,this),t&&St.shared.add(this._updateListener,this)}get progress(){return this._progress}get paused(){return this._paused}set paused(t){this._paused=t,this.refreshPaused()}destroy(){var t;this.removeAllListeners(),this._internalStop(),this._gain&&(this._gain.disconnect(),this._gain=null),this._media&&(this._media.context.events.off("refresh",this.refresh,this),this._media.context.events.off("refreshPaused",this.refreshPaused,this),this._media=null),(t=this._filters)==null||t.forEach(e=>e.disconnect()),this._filters=null,this._end=null,this._speed=1,this._volume=1,this._loop=!1,this._elapsed=0,this._duration=0,this._paused=!1,this._muted=!1,this._pausedReal=!1}toString(){return`[WebAudioInstance id=${this.id}]`}_now(){return this._media.context.audioContext.currentTime}_updateListener(){this._update()}_update(t=!1){if(this._source){const e=this._now(),r=e-this._lastUpdate;if(r>0||t){const i=this._source.playbackRate.value;this._elapsed+=r*i,this._lastUpdate=e;const s=this._duration;let o;if(this._source.loopStart){const a=this._source.loopEnd-this._source.loopStart;o=(this._source.loopStart+this._elapsed%a)/s}else o=this._elapsed%s/s;this._progress=o,this.emit("progress",this._progress,s)}}}init(t){this._media=t,t.context.events.on("refresh",this.refresh,this),t.context.events.on("refreshPaused",this.refreshPaused,this)}_internalStop(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.stop(0),this._source.disconnect();try{this._source.buffer=null}catch(t){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",t)}this._source=null}}_onComplete(){if(this._source){this.enableTicker(!1),this._source.onended=null,this._source.disconnect();try{this._source.buffer=null}catch(t){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",t)}}this._source=null,this._progress=1,this.emit("progress",1,this._duration),this.emit("end",this)}}class Oa{constructor(t,e){this._output=e,this._input=t}get destination(){return this._input}get filters(){return this._filters}set filters(t){if(this._filters&&(this._filters.forEach(e=>{e&&e.disconnect()}),this._filters=null,this._input.connect(this._output)),t&&t.length){this._filters=t.slice(0),this._input.disconnect();let e=null;t.forEach(r=>{e===null?this._input.connect(r.destination):e.connect(r.destination),e=r}),e.connect(this._output)}}destroy(){this.filters=null,this._input=null,this._output=null}}const Ra=class extends Oa{constructor(n){const t=n.audioContext,e=t.createBufferSource(),r=t.createGain(),i=t.createAnalyser();e.connect(i),i.connect(r),r.connect(n.destination),super(i,r),this.context=n,this.bufferSource=e,this.gain=r,this.analyser=i}get script(){return this._script||(this._script=this.context.audioContext.createScriptProcessor(Ra.BUFFER_SIZE),this._script.connect(this.context.destination)),this._script}destroy(){super.destroy(),this.bufferSource.disconnect(),this._script&&this._script.disconnect(),this.gain.disconnect(),this.analyser.disconnect(),this.bufferSource=null,this._script=null,this.gain=null,this.analyser=null,this.context=null}cloneBufferSource(){const n=this.bufferSource,t=this.context.audioContext.createBufferSource();t.buffer=n.buffer,ti.setParamValue(t.playbackRate,n.playbackRate.value),t.loop=n.loop;const e=this.context.audioContext.createGain();return t.connect(e),e.connect(this.destination),{source:t,gain:e}}get bufferSize(){return this.script.bufferSize}};let Ea=Ra;Ea.BUFFER_SIZE=0;class Gd{init(t){this.parent=t,this._nodes=new Ea(this.context),this._source=this._nodes.bufferSource,this.source=t.options.source}destroy(){this.parent=null,this._nodes.destroy(),this._nodes=null;try{this._source.buffer=null}catch(t){console.warn("Failed to set AudioBufferSourceNode.buffer to null:",t)}this._source=null,this.source=null}create(){return new Dd(this)}get context(){return this.parent.context}get isPlayable(){return!!this._source&&!!this._source.buffer}get filters(){return this._nodes.filters}set filters(t){this._nodes.filters=t}get duration(){return console.assert(this.isPlayable,"Sound not yet playable, no duration"),this._source.buffer.duration}get buffer(){return this._source.buffer}set buffer(t){this._source.buffer=t}get nodes(){return this._nodes}load(t){this.source?this._decode(this.source,t):this.parent.url?this._loadUrl(t):t?t(new Error("sound.url or sound.source must be set")):console.error("sound.url or sound.source must be set")}async _loadUrl(t){const e=this.parent.url,r=await j.get().fetch(e);this._decode(await r.arrayBuffer(),t)}_decode(t,e){const r=(i,s)=>{if(i)e&&e(i);else{this.parent.isLoaded=!0,this.buffer=s;const o=this.parent.autoPlayStart();e&&e(null,this.parent,o)}};t instanceof AudioBuffer?r(null,t):this.parent.context.decode(t,r)}}const le=class{static from(n){let t={};typeof n=="string"?t.url=n:n instanceof ArrayBuffer||n instanceof AudioBuffer||n instanceof HTMLAudioElement?t.source=n:Array.isArray(n)?t.url=n:t=n,t={autoPlay:!1,singleInstance:!1,url:null,source:null,preload:!1,volume:1,speed:1,complete:null,loaded:null,loop:!1,...t},Object.freeze(t);const e=He().useLegacy?new Ed:new Gd;return new le(e,t)}constructor(n,t){this.media=n,this.options=t,this._instances=[],this._sprites={},this.media.init(this);const e=t.complete;this._autoPlayOptions=e?{complete:e}:null,this.isLoaded=!1,this._preloadQueue=null,this.isPlaying=!1,this.autoPlay=t.autoPlay,this.singleInstance=t.singleInstance,this.preload=t.preload||this.autoPlay,this.url=Array.isArray(t.url)?this.preferUrl(t.url):t.url,this.speed=t.speed,this.volume=t.volume,this.loop=t.loop,t.sprites&&this.addSprites(t.sprites),this.preload&&this._preload(t.loaded)}preferUrl(n){const[t]=n.map(e=>({url:e,ext:lt.extname(e).slice(1)})).filter(({ext:e})=>Un[e]).sort((e,r)=>kn.indexOf(e.ext)-kn.indexOf(r.ext));if(!t)throw new Error("No supported file type found");return t.url}get context(){return He().context}pause(){return this.isPlaying=!1,this.paused=!0,this}resume(){return this.isPlaying=this._instances.length>0,this.paused=!1,this}get paused(){return this._paused}set paused(n){this._paused=n,this.refreshPaused()}get speed(){return this._speed}set speed(n){this._speed=n,this.refresh()}get filters(){return this.media.filters}set filters(n){this.media.filters=n}addSprites(n,t){if(typeof n=="object"){const r={};for(const i in n)r[i]=this.addSprites(i,n[i]);return r}console.assert(!this._sprites[n],`Alias ${n} is already taken`);const e=new kd(this,t);return this._sprites[n]=e,e}destroy(){this._removeInstances(),this.removeSprites(),this.media.destroy(),this.media=null,this._sprites=null,this._instances=null}removeSprites(n){if(n){const t=this._sprites[n];t!==void 0&&(t.destroy(),delete this._sprites[n])}else for(const t in this._sprites)this.removeSprites(t);return this}get isPlayable(){return this.isLoaded&&this.media&&this.media.isPlayable}stop(){if(!this.isPlayable)return this.autoPlay=!1,this._autoPlayOptions=null,this;this.isPlaying=!1;for(let n=this._instances.length-1;n>=0;n--)this._instances[n].stop();return this}play(n,t){let e;if(typeof n=="string"?e={sprite:n,loop:this.loop,complete:t}:typeof n=="function"?(e={},e.complete=n):e=n,e={complete:null,loaded:null,sprite:null,end:null,start:0,volume:1,speed:1,muted:!1,loop:!1,...e||{}},e.sprite){const i=e.sprite;console.assert(!!this._sprites[i],`Alias ${i} is not available`);const s=this._sprites[i];e.start=s.start+(e.start||0),e.end=s.end,e.speed=s.speed||1,e.loop=s.loop||e.loop,delete e.sprite}if(e.offset&&(e.start=e.offset),!this.isLoaded)return this._preloadQueue?new Promise(i=>{this._preloadQueue.push(()=>{i(this.play(e))})}):(this._preloadQueue=[],this.autoPlay=!0,this._autoPlayOptions=e,new Promise((i,s)=>{this._preload((o,a,l)=>{this._preloadQueue.forEach(u=>u()),this._preloadQueue=null,o?s(o):(e.loaded&&e.loaded(o,a,l),i(l))})}));(this.singleInstance||e.singleInstance)&&this._removeInstances();const r=this._createInstance();return this._instances.push(r),this.isPlaying=!0,r.once("end",()=>{e.complete&&e.complete(this),this._onComplete(r)}),r.once("stop",()=>{this._onComplete(r)}),r.play(e),r}refresh(){const n=this._instances.length;for(let t=0;t<n;t++)this._instances[t].refresh()}refreshPaused(){const n=this._instances.length;for(let t=0;t<n;t++)this._instances[t].refreshPaused()}get volume(){return this._volume}set volume(n){this._volume=n,this.refresh()}get muted(){return this._muted}set muted(n){this._muted=n,this.refresh()}get loop(){return this._loop}set loop(n){this._loop=n,this.refresh()}_preload(n){this.media.load(n)}get instances(){return this._instances}get sprites(){return this._sprites}get duration(){return this.media.duration}autoPlayStart(){let n;return this.autoPlay&&(n=this.play(this._autoPlayOptions)),n}_removeInstances(){for(let n=this._instances.length-1;n>=0;n--)this._poolInstance(this._instances[n]);this._instances.length=0}_onComplete(n){if(this._instances){const t=this._instances.indexOf(n);t>-1&&this._instances.splice(t,1),this.isPlaying=this._instances.length>0}this._poolInstance(n)}_createInstance(){if(le._pool.length>0){const n=le._pool.pop();return n.init(this.media),n}return this.media.create()}_poolInstance(n){n.destroy(),le._pool.indexOf(n)<0&&le._pool.push(n)}};let Bn=le;Bn._pool=[];class je extends Oa{constructor(){const t=window,e=new je.AudioContext,r=e.createDynamicsCompressor(),i=e.createAnalyser();i.connect(r),r.connect(e.destination),super(i,r),this.autoPause=!0,this._ctx=e,this._offlineCtx=new je.OfflineAudioContext(1,2,t.OfflineAudioContext?Math.max(8e3,Math.min(96e3,e.sampleRate)):44100),this.compressor=r,this.analyser=i,this.events=new ut,this.volume=1,this.speed=1,this.muted=!1,this.paused=!1,this._locked=e.state==="suspended"&&("ontouchstart"in globalThis||"onclick"in globalThis),this._locked&&(this._unlock(),this._unlock=this._unlock.bind(this),document.addEventListener("mousedown",this._unlock,!0),document.addEventListener("touchstart",this._unlock,!0),document.addEventListener("touchend",this._unlock,!0)),this.onFocus=this.onFocus.bind(this),this.onBlur=this.onBlur.bind(this),globalThis.addEventListener("focus",this.onFocus),globalThis.addEventListener("blur",this.onBlur)}onFocus(){if(!this.autoPause)return;const t=this._ctx.state;(t==="suspended"||t==="interrupted"||!this._locked)&&(this.paused=this._pausedOnBlur,this.refreshPaused())}onBlur(){this.autoPause&&(this._locked||(this._pausedOnBlur=this._paused,this.paused=!0,this.refreshPaused()))}_unlock(){this._locked&&(this.playEmptySound(),this._ctx.state==="running"&&(document.removeEventListener("mousedown",this._unlock,!0),document.removeEventListener("touchend",this._unlock,!0),document.removeEventListener("touchstart",this._unlock,!0),this._locked=!1))}playEmptySound(){const t=this._ctx.createBufferSource();t.buffer=this._ctx.createBuffer(1,1,22050),t.connect(this._ctx.destination),t.start(0,0,0),t.context.state==="suspended"&&t.context.resume()}static get AudioContext(){const t=window;return t.AudioContext||t.webkitAudioContext||null}static get OfflineAudioContext(){const t=window;return t.OfflineAudioContext||t.webkitOfflineAudioContext||null}destroy(){super.destroy();const t=this._ctx;typeof t.close<"u"&&t.close(),globalThis.removeEventListener("focus",this.onFocus),globalThis.removeEventListener("blur",this.onBlur),this.events.removeAllListeners(),this.analyser.disconnect(),this.compressor.disconnect(),this.analyser=null,this.compressor=null,this.events=null,this._offlineCtx=null,this._ctx=null}get audioContext(){return this._ctx}get offlineContext(){return this._offlineCtx}set paused(t){t&&this._ctx.state==="running"?this._ctx.suspend():!t&&this._ctx.state==="suspended"&&this._ctx.resume(),this._paused=t}get paused(){return this._paused}refresh(){this.events.emit("refresh")}refreshPaused(){this.events.emit("refreshPaused")}toggleMute(){return this.muted=!this.muted,this.refresh(),this.muted}togglePause(){return this.paused=!this.paused,this.refreshPaused(),this._paused}decode(t,e){const r=s=>{e(new Error((s==null?void 0:s.message)||"Unable to decode file"))},i=this._offlineCtx.decodeAudioData(t,s=>{e(null,s)},r);i&&i.catch(r)}}class Nd{constructor(){this.init()}init(){return this.supported&&(this._webAudioContext=new je),this._htmlAudioContext=new Od,this._sounds={},this.useLegacy=!this.supported,this}get context(){return this._context}get filtersAll(){return this.useLegacy?[]:this._context.filters}set filtersAll(t){this.useLegacy||(this._context.filters=t)}get supported(){return je.AudioContext!==null}add(t,e){if(typeof t=="object"){const s={};for(const o in t){const a=this._getOptions(t[o],e);s[o]=this.add(o,a)}return s}if(console.assert(!this._sounds[t],`Sound with alias ${t} already exists.`),e instanceof Bn)return this._sounds[t]=e,e;const r=this._getOptions(e),i=Bn.from(r);return this._sounds[t]=i,i}_getOptions(t,e){let r;return typeof t=="string"?r={url:t}:Array.isArray(t)?r={url:t}:t instanceof ArrayBuffer||t instanceof AudioBuffer||t instanceof HTMLAudioElement?r={source:t}:r=t,r={...r,...e||{}},r}get useLegacy(){return this._useLegacy}set useLegacy(t){this._useLegacy=t,this._context=!t&&this.supported?this._webAudioContext:this._htmlAudioContext}get disableAutoPause(){return!this._webAudioContext.autoPause}set disableAutoPause(t){this._webAudioContext.autoPause=!t}remove(t){return this.exists(t,!0),this._sounds[t].destroy(),delete this._sounds[t],this}get volumeAll(){return this._context.volume}set volumeAll(t){this._context.volume=t,this._context.refresh()}get speedAll(){return this._context.speed}set speedAll(t){this._context.speed=t,this._context.refresh()}togglePauseAll(){return this._context.togglePause()}pauseAll(){return this._context.paused=!0,this._context.refreshPaused(),this}resumeAll(){return this._context.paused=!1,this._context.refreshPaused(),this}toggleMuteAll(){return this._context.toggleMute()}muteAll(){return this._context.muted=!0,this._context.refresh(),this}unmuteAll(){return this._context.muted=!1,this._context.refresh(),this}removeAll(){for(const t in this._sounds)this._sounds[t].destroy(),delete this._sounds[t];return this}stopAll(){for(const t in this._sounds)this._sounds[t].stop();return this}exists(t,e=!1){const r=!!this._sounds[t];return e&&console.assert(r,`No sound matching alias '${t}'.`),r}isPlaying(){for(const t in this._sounds)if(this._sounds[t].isPlaying)return!0;return!1}find(t){return this.exists(t,!0),this._sounds[t]}play(t,e){return this.find(t).play(e)}stop(t){return this.find(t).stop()}pause(t){return this.find(t).pause()}resume(t){return this.find(t).resume()}volume(t,e){const r=this.find(t);return e!==void 0&&(r.volume=e),r.volume}speed(t,e){const r=this.find(t);return e!==void 0&&(r.speed=e),r.speed}duration(t){return this.find(t).duration}close(){return this.removeAll(),this._sounds=null,this._webAudioContext&&(this._webAudioContext.destroy(),this._webAudioContext=null),this._htmlAudioContext&&(this._htmlAudioContext.destroy(),this._htmlAudioContext=null),this._context=null,this}}const Ws=n=>{var r;const t=n.src;let e=(r=n==null?void 0:n.alias)==null?void 0:r[0];return(!e||n.src===e)&&(e=lt.basename(t,lt.extname(t))),e},$d={extension:M.Asset,detection:{test:async()=>!0,add:async n=>[...n,...kn.filter(t=>Un[t])],remove:async n=>n.filter(t=>n.includes(t))},loader:{name:"sound",extension:{type:[M.LoadParser],priority:Ut.High},test(n){const t=lt.extname(n).slice(1);return!!Un[t]||Ud.some(e=>n.startsWith(`data:${e}`))},async load(n,t){const e=await new Promise((r,i)=>Bn.from({...t.data,url:n,preload:!0,loaded(s,o){var a,l;s?i(s):r(o),(l=(a=t.data)==null?void 0:a.loaded)==null||l.call(a,s,o)}}));return He().add(Ws(t),e),e},async unload(n,t){He().remove(Ws(t))}}};ft.add($d);const ka=Id(new Nd);let Xs=!0,qe=null,Le=0,Qt=null;function Ua(){Qt&&Qt.pause()}function Mi(){if(Qt)return Qt.isPlaying?null:Qt.resume();qe||(qe=Object.values(bn)),Ba()}function Ba(){Xs&&(Xs=!1,Le=Math.floor(Math.random()*qe.length)),Qt=ka.add("bgm",qe[Le]),Qt.play({volume:.36}).then(n=>n.on("end",Vd))}function Vd(){Le++,Le===qe.length&&(Le=0),ka.remove("bgm"),Ba()}const Ze=new ut,Qe={screenResize:"screenResize",pointerMove:"pointerMove",needVoiceDoIt:"needVoiceDoIt",getClick:"getClick",setAutoCharge:"setAutoCharge",setTurboCharge:"setTurboCharge",requestAD:"requestAD",requestUpgradeClick:"requestUpgradeClick",requestUpgradeAuto:"requestUpgradeAuto",requestStartTurbo:"requestStartTurbo",responseStopTurbo:"responseStopTurbo",updateUILevel:"updateUILevel",updateUIPoints:"updateUIPoints",updateUIClickPanel:"updateUIClickPanel",updateUIAutoPanel:"updateUIAutoPanel",updateUITurboPanel:"updateUITurboPanel",updateUITurboTimeout:"updateUITurboTimeout",updateBuildingAuto:"updateBuildingAuto",updateBuildingTurbo:"updateBuildingTurbo",updateTowerTurbo:"updateTowerTurbo",updateTowerAuto:"updateTowerAuto",updateTowerClick:"updateTowerClick",spyBotGetDamage:"spyBotGetDamage",showBonusUI:"showBonusUI",drawCharge:"drawCharge",drawSkyCharge:"drawSkyCharge",timeAcceleration:"timeAcceleration",setAdButtonAvailable:"setAdButtonAvailable",getADBonusUI:"getADBonusUI"};function Wd(n){Ze.emit(Qe.screenResize,n)}function Xd(n){Ze.emit(Qe.pointerMove,n)}const ht=new Wo,Yd={background:0,antialias:!0,resolution:2,resizeTo:window};Promise.all([ht.init(Yd)]).then(Hd);function Hd(){ht.ticker.add(n=>Zd(n)),document.body.append(ht.canvas),ht.canvas.oncontextmenu=n=>n.preventDefault(),zi(),ht.stage.eventMode="static",ht.stage.on("pointermove",n=>Xd(n))}let Ln=[];const _t={};function zi(){_t.width=ht.screen.width,_t.height=ht.screen.height,_t.centerX=ht.screen.width/2,_t.centerY=ht.screen.height/2,_t.minSize=ht.screen.width>ht.screen.height?ht.screen.height:ht.screen.width,_t.offsetX=(_t.width-_t.minSize)/2,_t.offsetY=(_t.height-_t.minSize)/2,Wd(_t)}function La(){return _t}function ni(n){ht.stage.addChild(n)}function jd(n){ht.stage.removeChild(n)}let qd=window.matchMedia("(orientation: portrait)");qd.addEventListener("change",()=>setTimeout(zi,0));window.addEventListener("resize",()=>setTimeout(zi,0));window.addEventListener("focus",Mi);window.addEventListener("blur",Ua);"hidden"in document&&document.addEventListener("visibilitychange",Kd);function Kd(n){n?Ua():Mi()}function Zd(n){Ln.forEach(t=>t.tick(n))}function Ii(n){"tick"in n?Ln.push(n):console.warn("TRY TO ADD ELEMENT IN TICKER WITHOUT .tick() METHOD:",n)}function Da(n){Ln=Ln.filter(t=>t!==n)}class Qd extends J{constructor(){super(),this.text=new Td({text:"0 %",style:Ma.loading}),this.text.anchor.set(.5,1),this.text.position.y=10,this.addChild(this.text),this.screenResize(La()),ni(this)}delete(){this.removeAllListeners(),jd(this),this.destroy()}screenResize(t){this.position.x=t.centerX,this.position.y=t.centerY}update(t){const e=Math.round(t);this.text.text=e+" %"}}const Je={sprites:"./sprites/",sounds:"./sounds/",music:"./music/",voices:"./voices/",fonts:"./fonts/"},Z={bg_1:"bg_1_1040x720px.png",bg_2:"bg_2_960x720px.png",bg_3:"bg_3_948x594px.png",bg_4:"bg_4_948x594px.png",bg_5:"bg_5_126x166px.png",bg_6:"bg_6_408x588px.png",bg_7:"bg_7_470x120px.png",bg_8:"bg_8_586x586px.png",bg_9:"bg_9_692x543px.png",bg_10:"bg_10_626x400px.png",bg_11:"bg_11_828x502px.png",bg_12:"bg_12_540x832px.png",dpf_1:"dp_filter_tile_416x416px.png",dpf_2:"dp_filter_tile_225x225px.png",platform:"platform.json",bricks:"bricks.json",bonuses:"bonuses.json",side:"side.json",bullet:"bullet_32x32px.png"},Jd=Object.keys(Z).length;for(let n in Z)Z[n]=Je.sprites+Z[n];const Jt={upgrade:"se_upgrade.mp3"},tp=Object.keys(Jt).length;for(let n in Jt)Jt[n]=Je.sounds+Jt[n];const te={en_start_first:"voice_en_start_first.mp3",ru_start_first:"voice_ru_start_first.mp3"},ep=Object.keys(te).length;for(let n in te)te[n]=Je.voices+te[n];const bn={bgm0:"bgm_0.mp3"};for(let n in bn)bn[n]=Je.music+bn[n];const dt={bold:"Play-Bold.ttf",normal:"Play-Regular.ttf"};for(let n in dt)dt[n]=Je.fonts+dt[n];function np(n){const t=Jd+tp+ep;let e=0,r=100/t;const i=new Qd,s=new Map;function o(l,u){for(let c in Z[l].animations)Z[l].animations[c].forEach((h,d)=>{if(h)return;const f=gt.cache.get(u[c][d]);Z[l].animations[c][d]=f})}const a=()=>{e++,i.update(r*e),e===t&&(s.forEach((l,u)=>o(u,l)),s.clear(),i.delete(),n())};for(let l in Z)gt.add({alias:l,src:Z[l]}),gt.load(l).then(u=>{"data"in u&&"related_multi_packs"in u.data.meta&&"animations"in u.data&&s.set(l,u.data.animations),Z[l]=u,a()});for(let l in Jt)gt.add({alias:l,src:Jt[l]}),gt.load(l).then(u=>{Jt[l]=u,a()});for(let l in te)gt.add({alias:l,src:te[l]}),gt.load(l).then(u=>{te[l]=u,a()})}function Ys(n){let t="";for(let e=0;e<n.length;e++){let r=n.charCodeAt(e).toString(16);t+=("000"+r).slice(-4)}return t}function rp(n){let t=n.match(/.{1,4}/g)||[],e="";for(let r=0;r<t.length;r++)e+=String.fromCharCode(parseInt(t[r],16));return e}const ip=!1,Ie=4e3;class sp{constructor(){this.SDK=null,this.player=null,this.leaderboard=null,this.autoSaveCallback=null,this.lastSaveEncodedString="",this.requestTimeStamp=Date.now(),this.isReady=!1,this.isGetReword=!1,this.isLangRu=!0,this.isRealYandex=ip,this.isSoundOnBeforeAD=!0,this.initSDK()}initSDK(){return this.SDK={features:{LoadingAPI:{ready:()=>console.log("test ready")},GameplayAPI:{start:()=>console.log("test start"),stop:()=>console.log("test stop")}}},this.player={},this.lastSaveEncodedString=localStorage.getItem("save"),this.isReady=!0,console.log("!!! NOT REAL YANDEX !!!")}initPlayer(){this.SDK.getPlayer().then(t=>{this.player=t,this.player.getData().then(e=>{"save"in e&&(this.lastSaveEncodedString=e.save),this.isReady=!0})})}getSave(){if(!this.lastSaveEncodedString)return null;let t;try{t=JSON.parse(rp(this.lastSaveEncodedString))}catch{console.warn("ERROR in state decode")}if(this.lastSaveEncodedString)return t}saveData(t){if(!this.player||this.autoSaveCallback)return;t&&(this.lastSaveEncodedString=Ys(JSON.stringify(t)));const e=Date.now();e-Ie>this.requestTimeStamp?(this.requestTimeStamp=e,localStorage.setItem("save",this.lastSaveEncodedString)):setTimeout(()=>this.setData(),Ie)}startAutoSave(t){this.autoSaveCallback=t,setTimeout(()=>this.autoSave(),Ie)}stopAutoSave(){this.autoSaveCallback=null}autoSave(){if(!this.autoSaveCallback)return;const t=this.autoSaveCallback(),e=Ys(JSON.stringify(t));localStorage.setItem("save",e),setTimeout(()=>this.autoSave(),Ie)}clearSave(t){localStorage.setItem("save",null),setTimeout(()=>t(),Ie)}addDataToLeaderboard(t){}showRewordAd(t){return this.SDK?t(!0):t(!1)}showBannerAd(t){if(!this.SDK)return t();this.SDK.adv.showFullscreenAdv({callbacks:{onClose:function(e){t()},onOffline:function(e){t()},onError:function(e){t()}}})}}let Dn=new sp;const Fr=24;class op extends J{constructor(t){super(),this.image=new Cd(Z.bg_8),this.image.anchor.set(.5,.5),this.image.alpha=.25,this.addChild(this.image),this.filterSprite=new At(Z.dpf_1),this.filterSprite.scale=1,this.filterSprite.texture.source.style.addressMode="repeat",this.addChild(this.filterSprite),this.waterEffectFilter=new bd(this.filterSprite),this.waterEffectFilter.padding=Fr*.5,this.filters=[this.waterEffectFilter],this.screenResize(t),Ze.on(Qe.screenResize,this.screenResize.bind(this)),Ii(this)}screenResize(t){this.position.x=t.centerX,this.position.y=t.centerY,this.image.width=t.width+Fr,this.image.height=t.height+Fr}tick(t){this.filterSprite.position.x+=t.elapsedMS*.025,this.filterSprite.position.y+=t.elapsedMS*.025,this.image.tilePosition.y+=t.elapsedMS*.03}}var $=`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,V=`struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}`,ap=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uGamma;
uniform float uContrast;
uniform float uSaturation;
uniform float uBrightness;
uniform vec4 uColor;

void main()
{
    vec4 c = texture(uTexture, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / uGamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, uSaturation), uContrast);
        rgb.r *= uColor.r;
        rgb.g *= uColor.g;
        rgb.b *= uColor.b;
        c.rgb = rgb * uBrightness;

        c.rgb *= c.a;
    }

    finalColor = c * uColor.a;
}
`,lp=`struct AdjustmentUniforms {
  uGamma: f32,
  uContrast: f32,
  uSaturation: f32,
  uBrightness: f32,
  uColor: vec4<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> adjustmentUniforms : AdjustmentUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  var sample = textureSample(uTexture, uSampler, uv);
  let color = adjustmentUniforms.uColor;

  if (sample.a > 0.0) 
  {
    sample = vec4<f32>(sample.rgb / sample.a, sample.a);
    var rgb: vec3<f32> = pow(sample.rgb, vec3<f32>(1. / adjustmentUniforms.uGamma));
    rgb = mix(vec3<f32>(.5), mix(vec3<f32>(dot(vec3<f32>(.2125, .7154, .0721), rgb)), rgb, adjustmentUniforms.uSaturation), adjustmentUniforms.uContrast);
    rgb.r *= color.r;
    rgb.g *= color.g;
    rgb.b *= color.b;
    sample = vec4<f32>(rgb.rgb * adjustmentUniforms.uBrightness, sample.a);
    sample = vec4<f32>(sample.rgb * sample.a, sample.a);
  }

  return sample * color.a;
}`,up=Object.defineProperty,cp=(n,t,e)=>t in n?up(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Ga=(n,t,e)=>(cp(n,typeof t!="symbol"?t+"":t,e),e);const hp=class Na extends L{constructor(t){t={...Na.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:lp,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:ap,name:"adjustment-filter"});super({gpuProgram:e,glProgram:r,resources:{adjustmentUniforms:{uGamma:{value:t.gamma,type:"f32"},uContrast:{value:t.contrast,type:"f32"},uSaturation:{value:t.saturation,type:"f32"},uBrightness:{value:t.brightness,type:"f32"},uColor:{value:[t.red,t.green,t.blue,t.alpha],type:"vec4<f32>"}}}}),Ga(this,"uniforms"),this.uniforms=this.resources.adjustmentUniforms.uniforms}get gamma(){return this.uniforms.uGamma}set gamma(t){this.uniforms.uGamma=t}get contrast(){return this.uniforms.uContrast}set contrast(t){this.uniforms.uContrast=t}get saturation(){return this.uniforms.uSaturation}set saturation(t){this.uniforms.uSaturation=t}get brightness(){return this.uniforms.uBrightness}set brightness(t){this.uniforms.uBrightness=t}get red(){return this.uniforms.uColor[0]}set red(t){this.uniforms.uColor[0]=t}get green(){return this.uniforms.uColor[1]}set green(t){this.uniforms.uColor[1]=t}get blue(){return this.uniforms.uColor[2]}set blue(t){this.uniforms.uColor[2]=t}get alpha(){return this.uniforms.uColor[3]}set alpha(t){this.uniforms.uColor[3]=t}};Ga(hp,"DEFAULT_OPTIONS",{gamma:1,contrast:1,saturation:1,brightness:1,red:1,green:1,blue:1,alpha:1});var fp=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture(uTexture, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture(uTexture, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    finalColor = color;
}`,dp=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4<f32>(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y));
  // Average
  color *= 0.25;

  return color;
}`,pp=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uOffset;

uniform vec4 uInputClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample top right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom right pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Sample bottom left pixel
    color += texture(uTexture, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), uInputClamp.xy, uInputClamp.zw));

    // Average
    color *= 0.25;

    finalColor = color;
}
`,mp=`struct KawaseBlurUniforms {
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> kawaseBlurUniforms : KawaseBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOffset = kawaseBlurUniforms.uOffset;
  var color: vec4<f32> = vec4(0.0);

  // Sample top left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample top right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y + uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom right pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x + uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Sample bottom left pixel
  color += textureSample(uTexture, uSampler, clamp(vec2<f32>(uv.x - uOffset.x, uv.y - uOffset.y), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
  // Average
  color *= 0.25;
    
  return color;
}`,gp=Object.defineProperty,xp=(n,t,e)=>t in n?gp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,jt=(n,t,e)=>(xp(n,typeof t!="symbol"?t+"":t,e),e);const $a=class Va extends L{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e))&&(F("6.0.0","KawaseBlurFilter constructor params are now options object. See params: { strength, quality, clamp, pixelSize }"),e={strength:e},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.clamp=t[2])),e={...Va.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:e!=null&&e.clamp?mp:dp,entryPoint:"mainFragment"}}),i=U.from({vertex:$,fragment:e!=null&&e.clamp?pp:fp,name:"kawase-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{kawaseBlurUniforms:{uOffset:{value:new Float32Array(2),type:"vec2<f32>"}}}}),jt(this,"uniforms"),jt(this,"_pixelSize",{x:0,y:0}),jt(this,"_clamp"),jt(this,"_kernels",[]),jt(this,"_blur"),jt(this,"_quality"),this.uniforms=this.resources.kawaseBlurUniforms.uniforms,this.pixelSize=e.pixelSize??{x:1,y:1},Array.isArray(e.strength)?this.kernels=e.strength:typeof e.strength=="number"&&(this._blur=e.strength,this.quality=e.quality??3),this._clamp=!!e.clamp}apply(t,e,r,i){const s=this.pixelSizeX/e.source.width,o=this.pixelSizeY/e.source.height;let a;if(this._quality===1||this._blur===0)a=this._kernels[0]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,e,r,i);else{const l=bt.getSameSizeTexture(e);let u=e,c=l,h;const d=this._quality-1;for(let f=0;f<d;f++)a=this._kernels[f]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,u,c,!0),h=u,u=c,c=h;a=this._kernels[d]+.5,this.uniforms.uOffset[0]=a*s,this.uniforms.uOffset[1]=a*o,t.applyFilter(this,u,r,i),bt.returnTexture(l)}}get strength(){return this._blur}set strength(t){this._blur=t,this._generateKernels()}get quality(){return this._quality}set quality(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()}get kernels(){return this._kernels}set kernels(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max(...t)):(this._kernels=[0],this._quality=1)}get pixelSize(){return this._pixelSize}set pixelSize(t){if(typeof t=="number"){this.pixelSizeX=this.pixelSizeY=t;return}if(Array.isArray(t)){this.pixelSizeX=t[0],this.pixelSizeY=t[1];return}this._pixelSize=t}get pixelSizeX(){return this.pixelSize.x}set pixelSizeX(t){this.pixelSize.x=t}get pixelSizeY(){return this.pixelSize.y}set pixelSizeY(t){this.pixelSize.y=t}get clamp(){return this._clamp}_updatePadding(){this.padding=Math.ceil(this._kernels.reduce((t,e)=>t+e+.5,0))}_generateKernels(){const t=this._blur,e=this._quality,r=[t];if(t>0){let i=t;const s=t/e;for(let o=1;o<e;o++)i-=s,r.push(i)}this._kernels=r,this._updatePadding()}};jt($a,"DEFAULT_OPTIONS",{strength:4,quality:3,clamp:!1,pixelSize:{x:1,y:1}});let Wa=$a;var vp=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uBloomScale;
uniform float uBrightness;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);
    color.rgb *= uBrightness;
    vec4 bloomColor = vec4(texture(uMapTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= uBloomScale;
    finalColor = color + bloomColor;
}
`,yp=`struct AdvancedBloomUniforms {
  uBloomScale: f32,
  uBrightness: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> advancedBloomUniforms : AdvancedBloomUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color = textureSample(uTexture, uSampler, uv);
  color = vec4<f32>(color.rgb * advancedBloomUniforms.uBrightness, color.a);

  var bloomColor = vec4<f32>(textureSample(uMapTexture, uSampler, uv).rgb, 0.0);
  bloomColor = vec4<f32>(bloomColor.rgb * advancedBloomUniforms.uBloomScale, bloomColor.a);
  
  return color + bloomColor;
}
`,_p=`
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uThreshold;

void main() {
    vec4 color = texture(uTexture, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > uThreshold) {
        finalColor = color;
    } else {
        finalColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,bp=`struct ExtractBrightnessUniforms {
  uThreshold: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> extractBrightnessUniforms : ExtractBrightnessUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // A simple & fast algorithm for getting brightness.
  // It's inaccurate, but good enough for this feature.
  let max: f32 = max(max(color.r, color.g), color.b);
  let min: f32 = min(min(color.r, color.g), color.b);
  let brightness: f32 = (max + min) * 0.5;

  return select(vec4<f32>(0.), color, brightness > extractBrightnessUniforms.uThreshold);
}
`,Sp=Object.defineProperty,Cp=(n,t,e)=>t in n?Sp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Xa=(n,t,e)=>(Cp(n,typeof t!="symbol"?t+"":t,e),e);const Ya=class Ha extends L{constructor(t){t={...Ha.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:bp,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:_p,name:"extract-brightness-filter"});super({gpuProgram:e,glProgram:r,resources:{extractBrightnessUniforms:{uThreshold:{value:t.threshold,type:"f32"}}}}),Xa(this,"uniforms"),this.uniforms=this.resources.extractBrightnessUniforms.uniforms}get threshold(){return this.uniforms.uThreshold}set threshold(t){this.uniforms.uThreshold=t}};Xa(Ya,"DEFAULT_OPTIONS",{threshold:.5});let wp=Ya;var Ap=Object.defineProperty,Tp=(n,t,e)=>t in n?Ap(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ue=(n,t,e)=>(Tp(n,typeof t!="symbol"?t+"":t,e),e);const Pp=class ja extends L{constructor(t){t={...ja.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:yp,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:vp,name:"advanced-bloom-filter"});super({gpuProgram:e,glProgram:r,resources:{advancedBloomUniforms:{uBloomScale:{value:t.bloomScale,type:"f32"},uBrightness:{value:t.brightness,type:"f32"}},uMapTexture:O.WHITE}}),ue(this,"uniforms"),ue(this,"bloomScale",1),ue(this,"brightness",1),ue(this,"_extractFilter"),ue(this,"_blurFilter"),this.uniforms=this.resources.advancedBloomUniforms.uniforms,this._extractFilter=new wp({threshold:t.threshold}),this._blurFilter=new Wa({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),Object.assign(this,t)}apply(t,e,r,i){const s=bt.getSameSizeTexture(e);this._extractFilter.apply(t,e,s,!0);const o=bt.getSameSizeTexture(e);this._blurFilter.apply(t,s,o,!0),this.uniforms.uBloomScale=this.bloomScale,this.uniforms.uBrightness=this.brightness,this.resources.uMapTexture=o.source,t.applyFilter(this,e,r,i),bt.returnTexture(o),bt.returnTexture(s)}get threshold(){return this._extractFilter.threshold}set threshold(t){this._extractFilter.threshold=t}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}};ue(Pp,"DEFAULT_OPTIONS",{threshold:.5,bloomScale:1,brightness:1,blur:8,quality:4,pixelSize:{x:1,y:1}});var Fp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSize;
uniform vec3 uColor;
uniform float uReplaceColor;

uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor(coord / size) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod(coord, size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, 4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the grid position
    vec2 pixCoord = pixelate(coord, vec2(uSize));
    pixCoord = unmapCoord(pixCoord);

    // sample the color at grid position
    vec4 color = texture(uTexture, pixCoord);

    // brightness of the color as it's perceived by the human eye
    float gray = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;

    // determine the character to use
    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(uSize));

    finalColor = (uReplaceColor > 0.5 ? vec4(uColor, 1.) : color) * character( n, vec2(-1.0) + modd * 2.0);
}
`,Mp=`struct AsciiUniforms {
    uSize: f32,
    uColor: vec3<f32>,
    uReplaceColor: f32,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> asciiUniforms : AsciiUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let pixelSize: f32 = asciiUniforms.uSize;
    let coord: vec2<f32> = mapCoord(uv);

    // get the rounded color..
    var pixCoord: vec2<f32> = pixelate(coord, vec2<f32>(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    var color = textureSample(uTexture, uSampler, pixCoord);

    // determine the character to use
    let gray: f32 = 0.3 * color.r + 0.59 * color.g + 0.11 * color.b;
    
    var n: f32 = 65536.0; // .
    if (gray > 0.2) {
        n = 65600.0;    // :
    }
    if (gray > 0.3) {
        n = 332772.0;   // *
    }
    if (gray > 0.4) {
        n = 15255086.0; // o
    }
    if (gray > 0.5) {
        n = 23385164.0; // &
    }
    if (gray > 0.6) {
        n = 15252014.0; // 8
    }
    if (gray > 0.7) {
        n = 13199452.0; // @
    }
    if (gray > 0.8) {
        n = 11512810.0; // #
    }

    // get the mod..
    let modd: vec2<f32> = getMod(coord, vec2<f32>(pixelSize));
    return select(color, vec4<f32>(asciiUniforms.uColor, 1.), asciiUniforms.uReplaceColor > 0.5) * character(n, vec2<f32>(-1.0) + modd * 2.0);
}

fn pixelate(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return floor( coord / size ) * size;
}

fn getMod(coord: vec2<f32>, size: vec2<f32>) -> vec2<f32>
{
    return moduloVec2( coord , size) / size;
}

fn character(n: f32, p: vec2<f32>) -> f32
{
    var q: vec2<f32> = floor(p*vec2<f32>(4.0, 4.0) + 2.5);

    if (clamp(q.x, 0.0, 4.0) == q.x)
    {
        if (clamp(q.y, 0.0, 4.0) == q.y)
        {
        if (i32(modulo(n/exp2(q.x + 5.0*q.y), 2.0)) == 1)
        {
            return 1.0;
        }
        }
    }

    return 0.0;
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn moduloVec2(x: vec2<f32>, y: vec2<f32>) -> vec2<f32>
{
  return x - y * floor(x/y);
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord *= gfu.uInputSize.xy;
    mappedCoord += gfu.uOutputFrame.xy;
    return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
    var mappedCoord: vec2<f32> = coord;
    mappedCoord -= gfu.uOutputFrame.xy;
    mappedCoord /= gfu.uInputSize.xy;
    return mappedCoord;
}`,zp=Object.defineProperty,Ip=(n,t,e)=>t in n?zp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ri=(n,t,e)=>(Ip(n,typeof t!="symbol"?t+"":t,e),e);const Op=class qa extends L{constructor(...t){let e=t[0]??{};typeof e=="number"&&(F("6.0.0","AsciiFilter constructor params are now options object. See params: { size, color, replaceColor }"),e={size:e});const r=(e==null?void 0:e.color)&&e.replaceColor!==!1;e={...qa.DEFAULT_OPTIONS,...e};const i=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Mp,entryPoint:"mainFragment"}}),s=U.from({vertex:$,fragment:Fp,name:"ascii-filter"});super({gpuProgram:i,glProgram:s,resources:{asciiUniforms:{uSize:{value:e.size,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uReplaceColor:{value:Number(r),type:"f32"}}}}),ri(this,"uniforms"),ri(this,"_color"),this.uniforms=this.resources.asciiUniforms.uniforms,this._color=new G,this.color=e.color??16777215}get size(){return this.uniforms.uSize}set size(t){this.uniforms.uSize=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get replaceColor(){return this.uniforms.uReplaceColor>.5}set replaceColor(t){this.uniforms.uReplaceColor=t?1:0}};ri(Op,"DEFAULT_OPTIONS",{size:8,color:16777215,replaceColor:!1});var Rp=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTransform;
uniform vec3 uLightColor;
uniform float uLightAlpha;
uniform vec3 uShadowColor;
uniform float uShadowAlpha;

uniform vec4 uInputSize;

void main(void) {
    vec2 transform = vec2(1.0 / uInputSize) * vec2(uTransform.x, uTransform.y);
    vec4 color = texture(uTexture, vTextureCoord);
    float light = texture(uTexture, vTextureCoord - transform).a;
    float shadow = texture(uTexture, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, uLightColor, clamp((color.a - light) * uLightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, uShadowColor, clamp((color.a - shadow) * uShadowAlpha, 0.0, 1.0));
    finalColor = vec4(color.rgb * color.a, color.a);
}
`,Ep=`struct BevelUniforms {
  uLightColor: vec3<f32>,
  uLightAlpha: f32,
  uShadowColor: vec3<f32>,
  uShadowAlpha: f32,
  uTransform: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bevelUniforms : BevelUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let transform = vec2<f32>(1.0 / gfu.uInputSize.xy) * vec2<f32>(bevelUniforms.uTransform.x, bevelUniforms.uTransform.y);
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightSample: f32 = textureSample(uTexture, uSampler, uv - transform).a;
  let shadowSample: f32 = textureSample(uTexture, uSampler, uv + transform).a;

  let light = vec4<f32>(bevelUniforms.uLightColor, bevelUniforms.uLightAlpha);
  let shadow = vec4<f32>(bevelUniforms.uShadowColor, bevelUniforms.uShadowAlpha);

  color = vec4<f32>(mix(color.rgb, light.rgb, clamp((color.a - lightSample) * light.a, 0.0, 1.0)), color.a);
  color = vec4<f32>(mix(color.rgb, shadow.rgb, clamp((color.a - shadowSample) * shadow.a, 0.0, 1.0)), color.a);
  
  return vec4<f32>(color.rgb * color.a, color.a);
}`,kp=Object.defineProperty,Up=(n,t,e)=>t in n?kp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ce=(n,t,e)=>(Up(n,typeof t!="symbol"?t+"":t,e),e);const Bp=class Ka extends L{constructor(t){t={...Ka.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Ep,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:Rp,name:"bevel-filter"});super({gpuProgram:e,glProgram:r,resources:{bevelUniforms:{uLightColor:{value:new Float32Array(3),type:"vec3<f32>"},uLightAlpha:{value:t.lightAlpha,type:"f32"},uShadowColor:{value:new Float32Array(3),type:"vec3<f32>"},uShadowAlpha:{value:t.shadowAlpha,type:"f32"},uTransform:{value:new Float32Array(2),type:"vec2<f32>"}}},padding:1}),ce(this,"uniforms"),ce(this,"_thickness"),ce(this,"_rotation"),ce(this,"_lightColor"),ce(this,"_shadowColor"),this.uniforms=this.resources.bevelUniforms.uniforms,this._lightColor=new G,this._shadowColor=new G,this.lightColor=t.lightColor??16777215,this.shadowColor=t.shadowColor??0,Object.assign(this,t)}get rotation(){return this._rotation/ge}set rotation(t){this._rotation=t*ge,this._updateTransform()}get thickness(){return this._thickness}set thickness(t){this._thickness=t,this._updateTransform()}get lightColor(){return this._lightColor.value}set lightColor(t){this._lightColor.setValue(t);const[e,r,i]=this._lightColor.toArray();this.uniforms.uLightColor[0]=e,this.uniforms.uLightColor[1]=r,this.uniforms.uLightColor[2]=i}get lightAlpha(){return this.uniforms.uLightAlpha}set lightAlpha(t){this.uniforms.uLightAlpha=t}get shadowColor(){return this._shadowColor.value}set shadowColor(t){this._shadowColor.setValue(t);const[e,r,i]=this._shadowColor.toArray();this.uniforms.uShadowColor[0]=e,this.uniforms.uShadowColor[1]=r,this.uniforms.uShadowColor[2]=i}get shadowAlpha(){return this.uniforms.uShadowAlpha}set shadowAlpha(t){this.uniforms.uShadowAlpha=t}_updateTransform(){this.uniforms.uTransform[0]=this.thickness*Math.cos(this._rotation),this.uniforms.uTransform[1]=this.thickness*Math.sin(this._rotation)}};ce(Bp,"DEFAULT_OPTIONS",{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7});var Lp=Object.defineProperty,Dp=(n,t,e)=>t in n?Lp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Sn=(n,t,e)=>(Dp(n,typeof t!="symbol"?t+"":t,e),e);const Gp=class Za extends hd{constructor(...t){let e=t[0]??{};if(typeof e=="number"||Array.isArray(e)||"x"in e&&"y"in e){F("6.0.0","BloomFilter constructor params are now options object. See params: { strength, quality, resolution, kernelSize }");let r=e;Array.isArray(r)&&(r={x:r[0],y:r[1]}),e={strength:r},t[1]!==void 0&&(e.quality=t[1]),t[2]!==void 0&&(e.resolution=t[2]),t[3]!==void 0&&(e.kernelSize=t[3])}e={...Za.DEFAULT_OPTIONS,...e},super(),Sn(this,"_blurXFilter"),Sn(this,"_blurYFilter"),Sn(this,"_strength"),this._strength={x:2,y:2},e.strength&&(typeof e.strength=="number"?(this._strength.x=e.strength,this._strength.y=e.strength):(this._strength.x=e.strength.x,this._strength.y=e.strength.y)),this._blurXFilter=new $s({...e,horizontal:!0,strength:this.strengthX}),this._blurYFilter=new $s({...e,horizontal:!1,strength:this.strengthY}),this._blurYFilter.blendMode="screen",Object.assign(this,e)}apply(t,e,r,i){const s=bt.getSameSizeTexture(e);t.applyFilter(this,e,r,i),this._blurXFilter.apply(t,e,s,!0),this._blurYFilter.apply(t,s,r,!1),bt.returnTexture(s)}get strength(){return this._strength}set strength(t){this._strength=typeof t=="number"?{x:t,y:t}:t,this._updateStrength()}get strengthX(){return this.strength.x}set strengthX(t){this.strength.x=t,this._updateStrength()}get strengthY(){return this.strength.y}set strengthY(t){this.strength.y=t,this._updateStrength()}_updateStrength(){this._blurXFilter.blur=this.strengthX,this._blurYFilter.blur=this.strengthY}get blur(){return F("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strengthX}set blur(t){F("6.0.0","BloomFilter.blur is deprecated, please use BloomFilter.strength instead"),this.strength=t}get blurX(){return F("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX}set blurX(t){F("6.0.0","BloomFilter.blurX is deprecated, please use BloomFilter.strengthX instead"),this.strengthX=t}get blurY(){return F("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY}set blurY(t){F("6.0.0","BloomFilter.blurY is deprecated, please use BloomFilter.strengthY instead"),this.strengthY=t}};Sn(Gp,"DEFAULT_OPTIONS",{strength:{x:2,y:2},quality:4,resolution:1,kernelSize:5});var Np=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec2 uCenter;
uniform float uRadius;
uniform float uStrength;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

void main()
{
    vec2 coord = vTextureCoord * uInputSize.xy;
    coord -= uCenter * uDimensions.xy;
    float distance = length(coord);

    if (distance < uRadius) {
        float percent = distance / uRadius;
        if (uStrength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, uRadius / distance, percent), uStrength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + uStrength * 0.75) * uRadius / distance, 1.0 - percent);
        }
    }

    coord += uCenter * uDimensions.xy;
    coord /= uInputSize.xy;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);

    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    finalColor = color;
}
`,$p=`struct BulgePinchUniforms {
  uDimensions: vec2<f32>,
  uCenter: vec2<f32>,
  uRadius: f32,
  uStrength: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> bulgePinchUniforms : BulgePinchUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let dimensions: vec2<f32> = bulgePinchUniforms.uDimensions;
  let center: vec2<f32> = bulgePinchUniforms.uCenter;
  let radius: f32 = bulgePinchUniforms.uRadius;
  let strength: f32 = bulgePinchUniforms.uStrength;
  var coord: vec2<f32> = (uv * gfu.uInputSize.xy) - center * dimensions.xy;

  let distance: f32 = length(coord);

  if (distance < radius) {
      let percent: f32 = distance / radius;
      if (strength > 0.0) {
          coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
      } else {
          coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
      }
  }
    coord += (center * dimensions.xy);
    coord /= gfu.uInputSize.xy;

    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);
    var color: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    if (coord.x != clampedCoord.x && coord.y != clampedCoord.y) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    return color;
}

fn compareVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
  if (x.x == y.x && x.y == y.y)
  {
    return true;
  }

  return false;
}`,Vp=Object.defineProperty,Wp=(n,t,e)=>t in n?Vp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Qa=(n,t,e)=>(Wp(n,typeof t!="symbol"?t+"":t,e),e);const Xp=class Ja extends L{constructor(t){t={...Ja.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:$p,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:Np,name:"bulge-pinch-filter"});super({gpuProgram:e,glProgram:r,resources:{bulgePinchUniforms:{uDimensions:{value:[0,0],type:"vec2<f32>"},uCenter:{value:t.center,type:"vec2<f32>"},uRadius:{value:t.radius,type:"f32"},uStrength:{value:t.strength,type:"f32"}}}}),Qa(this,"uniforms"),this.uniforms=this.resources.bulgePinchUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,r,i)}get center(){return this.uniforms.uCenter}set center(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}};Qa(Xp,"DEFAULT_OPTIONS",{center:{x:.5,y:.5},radius:100,strength:1});var Yp=`precision highp float;
in vec2 vTextureCoord;
in vec2 vFilterCoord;
out vec4 finalColor;

const int TYPE_LINEAR = 0;
const int TYPE_RADIAL = 1;
const int TYPE_CONIC = 2;
const int MAX_STOPS = 32;

uniform sampler2D uTexture;
uniform vec4 uOptions;
uniform vec2 uCounts;
uniform vec3 uColors[MAX_STOPS];
uniform vec4 uStops[MAX_STOPS];

const float PI = 3.1415926538;
const float PI_2 = PI*2.;

struct ColorStop {
    float offset;
    vec3 color;
    float alpha;
};

mat2 rotate2d(float angle){
    return mat2(cos(angle), -sin(angle),
    sin(angle), cos(angle));
}

float projectLinearPosition(vec2 pos, float angle){
    vec2 center = vec2(0.5);
    vec2 result = pos - center;
    result = rotate2d(angle) * result;
    result = result + center;
    return clamp(result.x, 0., 1.);
}

float projectRadialPosition(vec2 pos) {
    float r = distance(pos, vec2(0.5));
    return clamp(2.*r, 0., 1.);
}

float projectAnglePosition(vec2 pos, float angle) {
    vec2 center = pos - vec2(0.5);
    float polarAngle=atan(-center.y, center.x);
    return mod(polarAngle + angle, PI_2) / PI_2;
}

float projectPosition(vec2 pos, int type, float angle) {
    if (type == TYPE_LINEAR) {
        return projectLinearPosition(pos, angle);
    } else if (type == TYPE_RADIAL) {
        return projectRadialPosition(pos);
    } else if (type == TYPE_CONIC) {
        return projectAnglePosition(pos, angle);
    }

    return pos.y;
}

void main(void) {
    int uType = int(uOptions[0]);
    float uAngle = uOptions[1];
    float uAlpha = uOptions[2];
    float uReplace = uOptions[3];

    int uNumStops = int(uCounts[0]);
    float uMaxColors = uCounts[1];

    // current/original color
    vec4 currentColor = texture(uTexture, vTextureCoord);

    // skip calculations if gradient alpha is 0
    if (0.0 == uAlpha) {
        finalColor = currentColor;
        return;
    }

    // project position
    float y = projectPosition(vFilterCoord, int(uType), radians(uAngle));

    // check gradient bounds
    float offsetMin = uStops[0][0];
    float offsetMax = 0.0;

    int numStops = int(uNumStops);

    for (int i = 0; i < MAX_STOPS; i++) {
        if (i == numStops-1){ // last index
            offsetMax = uStops[i][0];
        }
    }

    if (y  < offsetMin || y > offsetMax) {
        finalColor = currentColor;
        return;
    }

    // limit colors
    if (uMaxColors > 0.) {
        float stepSize = 1./uMaxColors;
        float stepNumber = float(floor(y/stepSize));
        y = stepSize * (stepNumber + 0.5);// offset by 0.5 to use color from middle of segment
    }

    // find color stops
    ColorStop from;
    ColorStop to;

    for (int i = 0; i < MAX_STOPS; i++) {
        if (y >= uStops[i][0]) {
            from = ColorStop(uStops[i][0], uColors[i], uStops[i][1]);
            to = ColorStop(uStops[i+1][0], uColors[i+1], uStops[i+1][1]);
        }

        if (i == numStops-1){ // last index
            break;
        }
    }

    // mix colors from stops
    vec4 colorFrom = vec4(from.color * from.alpha, from.alpha);
    vec4 colorTo = vec4(to.color * to.alpha, to.alpha);

    float segmentHeight = to.offset - from.offset;
    float relativePos = y - from.offset;// position from 0 to [segmentHeight]
    float relativePercent = relativePos / segmentHeight;// position in percent between [from.offset] and [to.offset].

    float gradientAlpha = uAlpha * currentColor.a;
    vec4 gradientColor = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

    if (uReplace < 0.5) {
        // mix resulting color with current color
        finalColor = gradientColor + currentColor*(1.-gradientColor.a);
    } else {
        // replace with gradient color
        finalColor = gradientColor;
    }
}
`,Hp=`in vec2 aPosition;
out vec2 vTextureCoord;
out vec2 vFilterCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
    vFilterCoord = vTextureCoord * uInputSize.xy / uOutputFrame.zw;
}
`,Hs=`struct BaseUniforms {
  uOptions: vec4<f32>,
  uCounts: vec2<f32>,
};

struct StopsUniforms {
  uColors: array<vec3<f32>, MAX_STOPS>,
  uStops: array<vec4<f32>, MAX_STOPS>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> baseUniforms : BaseUniforms;
@group(1) @binding(1) var<uniform> stopsUniforms : StopsUniforms;

struct VSOutput {
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn filterCoord( vTextureCoord:vec2<f32> ) -> vec2<f32>
{
    return vTextureCoord * gfu.uInputSize.xy / gfu.uOutputFrame.zw;
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  let vTextureCoord: vec2<f32> = filterTextureCoord(aPosition);
  return VSOutput(
   filterVertexPosition(aPosition),
   vTextureCoord,
   filterCoord(vTextureCoord),
  );
}

struct ColorStop {
  offset: f32,
  color: vec3<f32>,
  alpha: f32,
};

fn rotate2d(angle: f32) -> mat2x2<f32>{
  return mat2x2(cos(angle), -sin(angle),
  sin(angle), cos(angle));
}

fn projectLinearPosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = vec2<f32>(0.5);
  var result: vec2<f32> = pos - center;
  result = rotate2d(angle) * result;
  result = result + center;
  return clamp(result.x, 0.0, 1.0);
}

fn projectRadialPosition(pos: vec2<f32>) -> f32 {
  var r: f32 = distance(pos, vec2<f32>(0.5));
  return clamp(2.0 * r, 0.0, 1.0);
}

fn projectAnglePosition(pos: vec2<f32>, angle: f32) -> f32 {
  var center: vec2<f32> = pos - vec2<f32>(0.5, 0.5);
  var polarAngle: f32 = atan2(-center.y, center.x);
  return ((polarAngle + angle) % PI_2) / PI_2;
}

fn projectPosition(pos: vec2<f32>, gradientType: i32, angle: f32) -> f32 {
  if (gradientType == TYPE_LINEAR) {
      return projectLinearPosition(pos, angle);
  } else if (gradientType == TYPE_RADIAL) {
      return projectRadialPosition(pos);
  } else if (gradientType == TYPE_CONIC) {
      return projectAnglePosition(pos, angle);
  }

  return pos.y;
}

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
  @location(1) coord : vec2<f32>
) -> @location(0) vec4<f32> {
  let uType: i32 = i32(baseUniforms.uOptions[0]);
  let uAngle: f32 = baseUniforms.uOptions[1];
  let uAlpha: f32 = baseUniforms.uOptions[2];
  let uReplace: f32 = baseUniforms.uOptions[3];

  let uNumStops: i32 = i32(baseUniforms.uCounts[0]);
  let uMaxColors: f32 = baseUniforms.uCounts[1];

  // current/original color
  var currentColor: vec4<f32> = textureSample(uTexture, uSampler, uv);

  // skip calculations if gradient alpha is 0
  if (uAlpha == 0.0) { return currentColor; }

  // project position
  var y: f32 = projectPosition(coord, uType, radians(uAngle));

  // check gradient bounds
  var offsetMin: f32 = stopsUniforms.uStops[0][0];
  var offsetMax: f32 = 0.0;

  let numStops: i32 = uNumStops;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (i == numStops - 1) { // last index
          offsetMax = stopsUniforms.uStops[i][0];
      }
  }

  if (y  < offsetMin || y > offsetMax) { return currentColor; }

  // limit colors
  if (uMaxColors > 0.0) {
      var stepSize: f32 = 1.0 / uMaxColors;
      var stepNumber: f32 = floor(y / stepSize);
      y = stepSize * (stepNumber + 0.5); // offset by 0.5 to use color from middle of segment
  }

  // find color stops
  var stopFrom: ColorStop;
  var stopTo: ColorStop;

  for (var i: i32 = 0; i < MAX_STOPS; i = i + 1) {
      if (y >= stopsUniforms.uStops[i][0]) {
          stopFrom = ColorStop(stopsUniforms.uStops[i][0], stopsUniforms.uColors[i], stopsUniforms.uStops[i][1]);
          stopTo = ColorStop(stopsUniforms.uStops[i + 1][0], stopsUniforms.uColors[i + 1], stopsUniforms.uStops[i + 1][1]);
      }

      if (i == numStops - 1) { // last index
          break;
      }
  }

  // mix colors from stops
  var colorFrom: vec4<f32> = vec4<f32>(stopFrom.color * stopFrom.alpha, stopFrom.alpha);
  var colorTo: vec4<f32> = vec4<f32>(stopTo.color * stopTo.alpha, stopTo.alpha);

  var segmentHeight: f32 = stopTo.offset - stopFrom.offset;
  var relativePos: f32 = y - stopFrom.offset; // position from 0 to [segmentHeight]
  var relativePercent: f32 = relativePos / segmentHeight; // position in percent between [from.offset] and [to.offset].

  var gradientAlpha: f32 = uAlpha * currentColor.a;
  var gradientColor: vec4<f32> = mix(colorFrom, colorTo, relativePercent) * gradientAlpha;

  if (uReplace < 0.5) {
      // mix resulting color with current color
      return gradientColor + currentColor * (1.0 - gradientColor.a);
  } else {
      // replace with gradient color
      return gradientColor;
  }
}

const PI: f32 = 3.14159265358979323846264;
const PI_2: f32 = PI * 2.0;

const TYPE_LINEAR: i32 = 0;
const TYPE_RADIAL: i32 = 1;
const TYPE_CONIC: i32 = 2;
const MAX_STOPS: i32 = 32;`,ie=ie||{};ie.stringify=function(){var n={"visit_linear-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return n.visit_gradient(t)},"visit_radial-gradient":function(t){return n.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return n.visit_gradient(t)},visit_gradient:function(t){var e=n.visit(t.orientation);return e&&(e+=", "),t.type+"("+e+n.visit(t.colorStops)+")"},visit_shape:function(t){var e=t.value,r=n.visit(t.at),i=n.visit(t.style);return i&&(e+=" "+i),r&&(e+=" at "+r),e},"visit_default-radial":function(t){var e="",r=n.visit(t.at);return r&&(e+=r),e},"visit_extent-keyword":function(t){var e=t.value,r=n.visit(t.at);return r&&(e+=" at "+r),e},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return n.visit(t.value.x)+" "+n.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return n.visit_color(t.value,t)},visit_hex:function(t){return n.visit_color("#"+t.value,t)},visit_rgb:function(t){return n.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return n.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,e){var r=t,i=n.visit(e.length);return i&&(r+=" "+i),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var e="",r=t.length;return t.forEach(function(i,s){e+=n.visit(i),s<r-1&&(e+=", ")}),e},visit:function(t){if(!t)return"";var e="";if(t instanceof Array)return n.visit_array(t,e);if(t.type){var r=n["visit_"+t.type];if(r)return r(t);throw Error("Missing visitor visit_"+t.type)}else throw Error("Invalid node.")}};return function(t){return n.visit(t)}}();var ie=ie||{};ie.parse=function(){var n={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},t="";function e(C){var W=new Error(t+": "+C);throw W.source=t,W}function r(){var C=i();return t.length>0&&e("Invalid input not EOF"),C}function i(){return v(s)}function s(){return o("linear-gradient",n.linearGradient,l)||o("repeating-linear-gradient",n.repeatingLinearGradient,l)||o("radial-gradient",n.radialGradient,h)||o("repeating-radial-gradient",n.repeatingRadialGradient,h)}function o(C,W,E){return a(W,function(ot){var Bt=E();return Bt&&(mt(n.comma)||e("Missing comma before color stops")),{type:C,orientation:Bt,colorStops:v(_)}})}function a(C,W){var E=mt(C);if(E){mt(n.startCall)||e("Missing (");var ot=W(E);return mt(n.endCall)||e("Missing )"),ot}}function l(){return u()||c()}function u(){return H("directional",n.sideOrCorner,1)}function c(){return H("angular",n.angleValue,1)}function h(){var C,W=d(),E;return W&&(C=[],C.push(W),E=t,mt(n.comma)&&(W=d(),W?C.push(W):t=E)),C}function d(){var C=f()||p();if(C)C.at=m();else{var W=g();if(W){C=W;var E=m();E&&(C.at=E)}else{var ot=x();ot&&(C={type:"default-radial",at:ot})}}return C}function f(){var C=H("shape",/^(circle)/i,0);return C&&(C.style=Y()||g()),C}function p(){var C=H("shape",/^(ellipse)/i,0);return C&&(C.style=A()||g()),C}function g(){return H("extent-keyword",n.extentKeywords,1)}function m(){if(H("position",/^at/,0)){var C=x();return C||e("Missing positioning value"),C}}function x(){var C=y();if(C.x||C.y)return{type:"position",value:C}}function y(){return{x:A(),y:A()}}function v(C){var W=C(),E=[];if(W)for(E.push(W);mt(n.comma);)W=C(),W?E.push(W):e("One extra comma");return E}function _(){var C=w();return C||e("Expected color definition"),C.length=A(),C}function w(){return S()||B()||I()||b()}function b(){return H("literal",n.literalColor,0)}function S(){return H("hex",n.hexColor,1)}function I(){return a(n.rgbColor,function(){return{type:"rgb",value:v(T)}})}function B(){return a(n.rgbaColor,function(){return{type:"rgba",value:v(T)}})}function T(){return mt(n.number)[1]}function A(){return H("%",n.percentageValue,1)||X()||Y()}function X(){return H("position-keyword",n.positionKeywords,1)}function Y(){return H("px",n.pixelValue,1)||H("em",n.emValue,1)}function H(C,W,E){var ot=mt(W);if(ot)return{type:C,value:ot[E]}}function mt(C){var W,E;return E=/^[\n\r\t\s]+/.exec(t),E&&R(E[0].length),W=C.exec(t),W&&R(W[0].length),W}function R(C){t=t.substr(C)}return function(C){return t=C.toString(),r()}}();var jp=ie.parse;ie.stringify;function qp(n){const t=jp(rm(n));if(t.length===0)throw new Error("Invalid CSS gradient.");if(t.length!==1)throw new Error("Unsupported CSS gradient (multiple gradients is not supported).");const e=t[0],r=Kp(e.type),i=Zp(e.colorStops),s=em(e.orientation);return{type:r,stops:i,angle:s}}function Kp(n){const t={"linear-gradient":0,"radial-gradient":1};if(!(n in t))throw new Error(`Unsupported gradient type "${n}"`);return t[n]}function Zp(n){const t=Jp(n),e=[],r=new G;for(let i=0;i<n.length;i++){const s=Qp(n[i]),o=r.setValue(s).toArray();e.push({offset:t[i],color:o.slice(0,3),alpha:o[3]})}return e}function Qp(n){switch(n.type){case"hex":return`#${n.value}`;case"literal":return n.value;default:return`${n.type}(${n.value.join(",")})`}}function Jp(n){const t=[];for(let s=0;s<n.length;s++){const o=n[s];let a=-1;o.type==="literal"&&o.length&&"type"in o.length&&o.length.type==="%"&&"value"in o.length&&(a=parseFloat(o.length.value)/100),t.push(a)}const r=s=>{for(let o=s;o<t.length;o++)if(t[o]!==-1)return{indexDelta:o-s,offset:t[o]};return{indexDelta:t.length-1-s,offset:1}};let i=0;for(let s=0;s<t.length;s++){const o=t[s];if(o!==-1)i=o;else if(s===0)t[s]=0;else if(s+1===t.length)t[s]=1;else{const a=r(s),u=(a.offset-i)/(1+a.indexDelta);for(let c=0;c<=a.indexDelta;c++)t[s+c]=i+(c+1)*u;s+=a.indexDelta,i=t[s]}}return t.map(tm)}function tm(n){return n.toString().length>6?parseFloat(n.toString().substring(0,6)):n}function em(n){if(typeof n>"u")return 0;if("type"in n&&"value"in n)switch(n.type){case"angular":return parseFloat(n.value);case"directional":return nm(n.value)}return 0}function nm(n){const t={left:270,top:0,bottom:180,right:90,"left top":315,"top left":315,"left bottom":225,"bottom left":225,"right top":45,"top right":45,"right bottom":135,"bottom right":135};if(!(n in t))throw new Error(`Unsupported directional value "${n}"`);return t[n]}function rm(n){let t=n.replace(/\s{2,}/gu," ");return t=t.replace(/;/g,""),t=t.replace(/ ,/g,","),t=t.replace(/\( /g,"("),t=t.replace(/ \)/g,")"),t.trim()}var im=Object.defineProperty,sm=(n,t,e)=>t in n?im(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ee=(n,t,e)=>(sm(n,typeof t!="symbol"?t+"":t,e),e);const Mr=90;function om(n){return[...n].sort((t,e)=>t.offset-e.offset)}const Ke=class Cn extends L{constructor(t){if(t&&"css"in t?t={...qp(t.css||""),alpha:t.alpha??Cn.defaults.alpha,maxColors:t.maxColors??Cn.defaults.maxColors}:t={...Cn.defaults,...t},!t.stops||t.stops.length<2)throw new Error("ColorGradientFilter requires at least 2 color stops.");const e=k.from({vertex:{source:Hs,entryPoint:"mainVertex"},fragment:{source:Hs,entryPoint:"mainFragment"}}),r=U.from({vertex:Hp,fragment:Yp,name:"color-gradient-filter"}),i=32;super({gpuProgram:e,glProgram:r,resources:{baseUniforms:{uOptions:{value:[t.type,t.angle??Mr,t.alpha,t.replace?1:0],type:"vec4<f32>"},uCounts:{value:[t.stops.length,t.maxColors],type:"vec2<f32>"}},stopsUniforms:{uColors:{value:new Float32Array(i*3),type:"vec3<f32>",size:i},uStops:{value:new Float32Array(i*4),type:"vec4<f32>",size:i}}}}),ee(this,"baseUniforms"),ee(this,"stopsUniforms"),ee(this,"_stops",[]),this.baseUniforms=this.resources.baseUniforms.uniforms,this.stopsUniforms=this.resources.stopsUniforms.uniforms,Object.assign(this,t)}get stops(){return this._stops}set stops(t){const e=om(t),r=new G;let i,s,o;for(let a=0;a<e.length;a++){r.setValue(e[a].color);const l=a*3;[i,s,o]=r.toArray(),this.stopsUniforms.uColors[l]=i,this.stopsUniforms.uColors[l+1]=s,this.stopsUniforms.uColors[l+2]=o,this.stopsUniforms.uStops[a*4]=e[a].offset,this.stopsUniforms.uStops[a*4+1]=e[a].alpha}this.baseUniforms.uCounts[0]=e.length,this._stops=e}get type(){return this.baseUniforms.uOptions[0]}set type(t){this.baseUniforms.uOptions[0]=t}get angle(){return this.baseUniforms.uOptions[1]+Mr}set angle(t){this.baseUniforms.uOptions[1]=t-Mr}get alpha(){return this.baseUniforms.uOptions[2]}set alpha(t){this.baseUniforms.uOptions[2]=t}get maxColors(){return this.baseUniforms.uCounts[1]}set maxColors(t){this.baseUniforms.uCounts[1]=t}get replace(){return this.baseUniforms.uOptions[3]>.5}set replace(t){this.baseUniforms.uOptions[3]=t?1:0}};ee(Ke,"LINEAR",0);ee(Ke,"RADIAL",1);ee(Ke,"CONIC",2);ee(Ke,"defaults",{type:Ke.LINEAR,stops:[{offset:0,color:16711680,alpha:1},{offset:1,color:255,alpha:1}],alpha:1,angle:90,maxColors:0,replace:!1});var am=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform float uMix;
uniform float uSize;
uniform float uSliceSize;
uniform float uSlicePixelSize;
uniform float uSliceInnerSize;

void main() {
    vec4 color = texture(uTexture, vTextureCoord.xy);
    vec4 adjusted;

    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = uSize - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = uSlicePixelSize * 0.5 + color.r * uSliceInnerSize;
        float s0 = xOffset + (zSlice0 * uSliceSize);
        float s1 = xOffset + (zSlice1 * uSliceSize);
        float yOffset = uSliceSize * 0.5 + color.g * (1.0 - uSliceSize);
        vec4 slice0Color = texture(uMapTexture, vec2(s0,yOffset));
        vec4 slice1Color = texture(uMapTexture, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }

    finalColor = vec4(mix(color, adjusted, uMix).rgb, color.a);

}`,lm=`struct ColorMapUniforms {
  uMix: f32,
  uSize: f32,
  uSliceSize: f32,
  uSlicePixelSize: f32,
  uSliceInnerSize: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorMapUniforms : ColorMapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color:vec4<f32> = textureSample(uTexture, uSampler, uv);

  var adjusted: vec4<f32>;

  var altColor: vec4<f32> = vec4<f32>(color.rgb / color.a, color.a);
  let innerWidth: f32 = colorMapUniforms.uSize - 1.0;
  let zSlice0: f32 = min(floor(color.b * innerWidth), innerWidth);
  let zSlice1: f32 = min(zSlice0 + 1.0, innerWidth);
  let xOffset: f32 = colorMapUniforms.uSlicePixelSize * 0.5 + color.r * colorMapUniforms.uSliceInnerSize;
  let s0: f32 = xOffset + (zSlice0 * colorMapUniforms.uSliceSize);
  let s1: f32 = xOffset + (zSlice1 * colorMapUniforms.uSliceSize);
  let yOffset: f32 = colorMapUniforms.uSliceSize * 0.5 + color.g * (1.0 - colorMapUniforms.uSliceSize);
  let slice0Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s0,yOffset));
  let slice1Color: vec4<f32> = textureSample(uMapTexture, uMapSampler, vec2(s1,yOffset));
  let zOffset: f32 = fract(color.b * innerWidth);
  adjusted = mix(slice0Color, slice1Color, zOffset);
  altColor = vec4<f32>(color.rgb * color.a, color.a);

  let realColor: vec4<f32> = select(color, altColor, color.a > 0.0);

  return vec4<f32>(mix(realColor, adjusted, colorMapUniforms.uMix).rgb, realColor.a);
}`,um=Object.defineProperty,cm=(n,t,e)=>t in n?um(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Et=(n,t,e)=>(cm(n,typeof t!="symbol"?t+"":t,e),e);const hm=class tl extends L{constructor(...t){let e=t[0]??{};if((e instanceof O||e instanceof vt)&&(F("6.0.0","ColorMapFilter constructor params are now options object. See params: { colorMap, nearest, mix }"),e={colorMap:e},t[1]!==void 0&&(e.nearest=t[1]),t[2]!==void 0&&(e.mix=t[2])),e={...tl.DEFAULT_OPTIONS,...e},!e.colorMap)throw Error("No color map texture source was provided to ColorMapFilter");const r=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:lm,entryPoint:"mainFragment"}}),i=U.from({vertex:$,fragment:am,name:"color-map-filter"});super({gpuProgram:r,glProgram:i,resources:{colorMapUniforms:{uMix:{value:e.mix,type:"f32"},uSize:{value:0,type:"f32"},uSliceSize:{value:0,type:"f32"},uSlicePixelSize:{value:0,type:"f32"},uSliceInnerSize:{value:0,type:"f32"}},uMapTexture:e.colorMap.source,uMapSampler:e.colorMap.source.style}}),Et(this,"uniforms"),Et(this,"_size",0),Et(this,"_sliceSize",0),Et(this,"_slicePixelSize",0),Et(this,"_sliceInnerSize",0),Et(this,"_nearest",!1),Et(this,"_scaleMode","linear"),Et(this,"_colorMap"),this.uniforms=this.resources.colorMapUniforms.uniforms,Object.assign(this,e)}get mix(){return this.uniforms.uMix}set mix(t){this.uniforms.uMix=t}get colorSize(){return this._size}get colorMap(){return this._colorMap}set colorMap(t){if(!t||t===this.colorMap)return;const e=t instanceof O?t.source:t;e.style.scaleMode=this._scaleMode,e.autoGenerateMipmaps=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms.uSize=this._size,this.uniforms.uSliceSize=this._sliceSize,this.uniforms.uSlicePixelSize=this._slicePixelSize,this.uniforms.uSliceInnerSize=this._sliceInnerSize,this.resources.uMapTexture=e,this._colorMap=t}get nearest(){return this._nearest}set nearest(t){this._nearest=t,this._scaleMode=t?"nearest":"linear";const e=this._colorMap;e&&e.source&&(e.source.scaleMode=this._scaleMode,e.source.autoGenerateMipmaps=!1,e.source.style.update(),e.source.update())}updateColorMap(){const t=this._colorMap;t!=null&&t.source&&(t.source.update(),this.colorMap=t)}destroy(){var t;(t=this._colorMap)==null||t.destroy(),super.destroy()}};Et(hm,"DEFAULT_OPTIONS",{colorMap:O.WHITE,nearest:!1,mix:1});var fm=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uColor;
uniform float uAlpha;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    finalColor = vec4(mix(c.rgb, uColor.rgb, c.a * uAlpha), c.a);
}
`,dm=`struct ColorOverlayUniforms {
    uColor: vec3<f32>,
    uAlpha: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorOverlayUniforms : ColorOverlayUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let c = textureSample(uTexture, uSampler, uv);
    return vec4<f32>(mix(c.rgb, colorOverlayUniforms.uColor.rgb, c.a * colorOverlayUniforms.uAlpha), c.a);
}
`,pm=Object.defineProperty,mm=(n,t,e)=>t in n?pm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ii=(n,t,e)=>(mm(n,typeof t!="symbol"?t+"":t,e),e);const gm=class el extends L{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(F("6.0.0","ColorOverlayFilter constructor params are now options object. See params: { color, alpha }"),e={color:e},t[1]!==void 0&&(e.alpha=t[1])),e={...el.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:dm,entryPoint:"mainFragment"}}),i=U.from({vertex:$,fragment:fm,name:"color-overlay-filter"});super({gpuProgram:r,glProgram:i,resources:{colorOverlayUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"}}}}),ii(this,"uniforms"),ii(this,"_color"),this.uniforms=this.resources.colorOverlayUniforms.uniforms,this._color=new G,this.color=e.color??0}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};ii(gm,"DEFAULT_OPTIONS",{color:0,alpha:1});var xm=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uOriginalColor;
uniform vec3 uTargetColor;
uniform float uTolerance;

void main(void) {
    vec4 c = texture(uTexture, vTextureCoord);
    vec3 colorDiff = uOriginalColor - (c.rgb / max(c.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, uTolerance);
    finalColor = vec4(mix(c.rgb, (uTargetColor + colorDiff) * c.a, doReplace), c.a);
}
`,vm=`struct ColorReplaceUniforms {
  uOriginalColor: vec3<f32>,
  uTargetColor: vec3<f32>,
  uTolerance: f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> colorReplaceUniforms : ColorReplaceUniforms;

@fragment
fn mainFragment(
   @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sample: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let colorDiff: vec3<f32> = colorReplaceUniforms.uOriginalColor - (sample.rgb / max(sample.a, 0.0000000001));
  let colorDistance: f32 = length(colorDiff);
  let doReplace: f32 = step(colorDistance, colorReplaceUniforms.uTolerance);

  return vec4<f32>(mix(sample.rgb, (colorReplaceUniforms.uTargetColor + colorDiff) * sample.a, doReplace), sample.a);
}`,ym=Object.defineProperty,_m=(n,t,e)=>t in n?ym(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,wn=(n,t,e)=>(_m(n,typeof t!="symbol"?t+"":t,e),e);const bm=class nl extends L{constructor(...t){let e=t[0]??{};(typeof e=="number"||Array.isArray(e)||e instanceof Float32Array)&&(F("6.0.0","ColorReplaceFilter constructor params are now options object. See params: { originalColor, targetColor, tolerance }"),e={originalColor:e},t[1]!==void 0&&(e.targetColor=t[1]),t[2]!==void 0&&(e.tolerance=t[2])),e={...nl.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:vm,entryPoint:"mainFragment"}}),i=U.from({vertex:$,fragment:xm,name:"color-replace-filter"});super({gpuProgram:r,glProgram:i,resources:{colorReplaceUniforms:{uOriginalColor:{value:new Float32Array(3),type:"vec3<f32>"},uTargetColor:{value:new Float32Array(3),type:"vec3<f32>"},uTolerance:{value:e.tolerance,type:"f32"}}}}),wn(this,"uniforms"),wn(this,"_originalColor"),wn(this,"_targetColor"),this.uniforms=this.resources.colorReplaceUniforms.uniforms,this._originalColor=new G,this._targetColor=new G,this.originalColor=e.originalColor??16711680,this.targetColor=e.targetColor??0,Object.assign(this,e)}get originalColor(){return this._originalColor.value}set originalColor(t){this._originalColor.setValue(t);const[e,r,i]=this._originalColor.toArray();this.uniforms.uOriginalColor[0]=e,this.uniforms.uOriginalColor[1]=r,this.uniforms.uOriginalColor[2]=i}get targetColor(){return this._targetColor.value}set targetColor(t){this._targetColor.setValue(t);const[e,r,i]=this._targetColor.toArray();this.uniforms.uTargetColor[0]=e,this.uniforms.uTargetColor[1]=r,this.uniforms.uTargetColor[2]=i}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set newColor(t){F("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor=t}get newColor(){return F("6.0.0","ColorReplaceFilter.newColor is deprecated, please use ColorReplaceFilter.targetColor instead"),this.targetColor}set epsilon(t){F("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return F("6.0.0","ColorReplaceFilter.epsilon is deprecated, please use ColorReplaceFilter.tolerance instead"),this.tolerance}};wn(bm,"DEFAULT_OPTIONS",{originalColor:16711680,targetColor:0,tolerance:.4});var Sm=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTexelSize;
uniform mat3 uMatrix;

void main(void)
{
    vec4 c11 = texture(uTexture, vTextureCoord - uTexelSize); // top left
    vec4 c12 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y - uTexelSize.y)); // top center
    vec4 c13 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y - uTexelSize.y)); // top right

    vec4 c21 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y)); // mid left
    vec4 c22 = texture(uTexture, vTextureCoord); // mid center
    vec4 c23 = texture(uTexture, vec2(vTextureCoord.x + uTexelSize.x, vTextureCoord.y)); // mid right

    vec4 c31 = texture(uTexture, vec2(vTextureCoord.x - uTexelSize.x, vTextureCoord.y + uTexelSize.y)); // bottom left
    vec4 c32 = texture(uTexture, vec2(vTextureCoord.x, vTextureCoord.y + uTexelSize.y)); // bottom center
    vec4 c33 = texture(uTexture, vTextureCoord + uTexelSize); // bottom right

    finalColor =
        c11 * uMatrix[0][0] + c12 * uMatrix[0][1] + c13 * uMatrix[0][2] +
        c21 * uMatrix[1][0] + c22 * uMatrix[1][1] + c23 * uMatrix[1][2] +
        c31 * uMatrix[2][0] + c32 * uMatrix[2][1] + c33 * uMatrix[2][2];

    finalColor.a = c22.a;
}`,Cm=`struct ConvolutionUniforms {
    uMatrix: mat3x3<f32>,
    uTexelSize: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> convolutionUniforms : ConvolutionUniforms;

@fragment
fn mainFragment(
    @location(0) uv: vec2<f32>,
    @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let texelSize = convolutionUniforms.uTexelSize;
    let matrix = convolutionUniforms.uMatrix;

    let c11: vec4<f32> = textureSample(uTexture, uSampler, uv - texelSize); // top left
    let c12: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y - texelSize.y)); // top center
    let c13: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y - texelSize.y)); // top right

    let c21: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y)); // mid left
    let c22: vec4<f32> = textureSample(uTexture, uSampler, uv); // mid center
    let c23: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x + texelSize.x, uv.y)); // mid right

    let c31: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x - texelSize.x, uv.y + texelSize.y)); // bottom left
    let c32: vec4<f32> = textureSample(uTexture, uSampler, vec2<f32>(uv.x, uv.y + texelSize.y)); // bottom center
    let c33: vec4<f32> = textureSample(uTexture, uSampler, uv + texelSize); // bottom right

    var finalColor: vec4<f32> = vec4<f32>(
        c11 * matrix[0][0] + c12 * matrix[0][1] + c13 * matrix[0][2] +
        c21 * matrix[1][0] + c22 * matrix[1][1] + c23 * matrix[1][2] +
        c31 * matrix[2][0] + c32 * matrix[2][1] + c33 * matrix[2][2]
    );

    finalColor.a = c22.a;

    return finalColor;
}`,wm=Object.defineProperty,Am=(n,t,e)=>t in n?wm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,rl=(n,t,e)=>(Am(n,typeof t!="symbol"?t+"":t,e),e);const Tm=class il extends L{constructor(...t){let e=t[0]??{};Array.isArray(e)&&(F("6.0.0","ConvolutionFilter constructor params are now options object. See params: { matrix, width, height }"),e={matrix:e},t[1]!==void 0&&(e.width=t[1]),t[2]!==void 0&&(e.height=t[2])),e={...il.DEFAULT_OPTIONS,...e};const r=e.width??200,i=e.height??200,s=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Cm,entryPoint:"mainFragment"}}),o=U.from({vertex:$,fragment:Sm,name:"convolution-filter"});super({gpuProgram:s,glProgram:o,resources:{convolutionUniforms:{uMatrix:{value:e.matrix,type:"mat3x3<f32>"},uTexelSize:{value:{x:1/r,y:1/i},type:"vec2<f32>"}}}}),rl(this,"uniforms"),this.uniforms=this.resources.convolutionUniforms.uniforms,this.width=r,this.height=i}get matrix(){return this.uniforms.uMatrix}set matrix(t){t.forEach((e,r)=>{this.uniforms.uMatrix[r]=e})}get width(){return 1/this.uniforms.uTexelSize.x}set width(t){this.uniforms.uTexelSize.x=1/t}get height(){return 1/this.uniforms.uTexelSize.y}set height(t){this.uniforms.uTexelSize.y=1/t}};rl(Tm,"DEFAULT_OPTIONS",{matrix:new Float32Array(9),width:200,height:200});var Pm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uLine;
uniform vec2 uNoise;
uniform vec3 uVignette;
uniform float uSeed;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

float vignette(vec3 co, vec2 coord)
{
    float outter = SQRT_2 - uVignette[0] * SQRT_2;
    vec2 dir = vec2(0.5) - coord;
    dir.y *= uDimensions.y / uDimensions.x;
    float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
    return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

float noise(vec2 coord)
{
    vec2 pixelCoord = coord * uInputSize.xy;
    pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
    pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
    return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

vec3 interlaceLines(vec3 co, vec2 coord)
{
    vec3 color = co;

    float curvature = uLine[0];
    float lineWidth = uLine[1];
    float lineContrast = uLine[2];
    float verticalLine = uLine[3];

    vec2 dir = vec2(coord * uInputSize.xy / uDimensions - 0.5);

    float _c = curvature > 0. ? curvature : 1.;
    float k = curvature > 0. ? (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
    vec2 uv = dir * k;
    float v = verticalLine > 0.5 ? uv.x * uDimensions.x : uv.y * uDimensions.y;
    v *= min(1.0, 2.0 / lineWidth ) / _c;
    float j = 1. + cos(v * 1.2 - uTime) * 0.5 * lineContrast;
    color *= j;

    float segment = verticalLine > 0.5 ? mod((dir.x + .5) * uDimensions.x, 4.) : mod((dir.y + .5) * uDimensions.y, 4.);
    color *= 0.99 + ceil(segment) * 0.015;

    return color;
}

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);
    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
    {
        float n = noise(vTextureCoord);
        finalColor += vec4(n, n, n, finalColor.a);
    }

    if (uVignette[0] > 0.)
    {
        float v = vignette(finalColor.rgb, coord);
        finalColor *= vec4(v, v, v, finalColor.a);
    }

    if (uLine[1] > 0.0)
    {
        finalColor = vec4(interlaceLines(finalColor.rgb, vTextureCoord), finalColor.a);  
    }
}
`,Fm=`struct CRTUniforms {
    uLine: vec4<f32>,
    uNoise: vec2<f32>,
    uVignette: vec3<f32>,
    uSeed: f32,
    uTime: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> crtUniforms : CRTUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let coord: vec2<f32> = uv * gfu.uInputSize.xy / crtUniforms.uDimensions;

  let uNoise = crtUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  if (crtUniforms.uVignette[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  if (crtUniforms.uLine[1] > 0.0)
  {
    color = vec4<f32>(vec3<f32>(interlaceLines(color.rgb, uv)), color.a);  
  }

  return color;
}

const SQRT_2: f32 = 1.414213;

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignette = crtUniforms.uVignette;
  let uDimensions = crtUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignette[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(0.5) - coord;
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignette[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignette[1]);
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = crtUniforms.uNoise;
  let uSeed = crtUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}

fn interlaceLines(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;

  let uDimensions = crtUniforms.uDimensions;

  let curvature: f32 = crtUniforms.uLine[0];
  let lineWidth: f32 = crtUniforms.uLine[1];
  let lineContrast: f32 = crtUniforms.uLine[2];
  let verticalLine: f32 = crtUniforms.uLine[3];

  let dir: vec2<f32> = vec2<f32>(coord * gfu.uInputSize.xy / uDimensions - 0.5);

  let _c: f32 = select(1., curvature, curvature > 0.);
  let k: f32 = select(1., (length(dir * dir) * 0.25 * _c * _c + 0.935 * _c), curvature > 0.);
  let uv: vec2<f32> = dir * k;
  let v: f32 = select(uv.y * uDimensions.y, uv.x * uDimensions.x, verticalLine > 0.5) * min(1.0, 2.0 / lineWidth ) / _c;
  let j: f32 = 1. + cos(v * 1.2 - crtUniforms.uTime) * 0.5 * lineContrast;
  color *= j;

  let segment: f32 = select(modulo((dir.y + .5) * uDimensions.y, 4.), modulo((dir.x + .5) * uDimensions.x, 4.), verticalLine > 0.5);
  color *= 0.99 + ceil(segment) * 0.015;

  return color;
}`,Mm=Object.defineProperty,zm=(n,t,e)=>t in n?Mm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,An=(n,t,e)=>(zm(n,typeof t!="symbol"?t+"":t,e),e);const Im=class sl extends L{constructor(t){t={...sl.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Fm,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:Pm,name:"crt-filter"});super({gpuProgram:e,glProgram:r,resources:{crtUniforms:{uLine:{value:new Float32Array(4),type:"vec4<f32>"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uVignette:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),An(this,"uniforms"),An(this,"seed"),An(this,"time"),this.uniforms=this.resources.crtUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get curvature(){return this.uniforms.uLine[0]}set curvature(t){this.uniforms.uLine[0]=t}get lineWidth(){return this.uniforms.uLine[1]}set lineWidth(t){this.uniforms.uLine[1]=t}get lineContrast(){return this.uniforms.uLine[2]}set lineContrast(t){this.uniforms.uLine[2]=t}get verticalLine(){return this.uniforms.uLine[3]>.5}set verticalLine(t){this.uniforms.uLine[3]=t?1:0}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get vignetting(){return this.uniforms.uVignette[0]}set vignetting(t){this.uniforms.uVignette[0]=t}get vignettingAlpha(){return this.uniforms.uVignette[1]}set vignettingAlpha(t){this.uniforms.uVignette[1]=t}get vignettingBlur(){return this.uniforms.uVignette[2]}set vignettingBlur(t){this.uniforms.uVignette[2]=t}};An(Im,"DEFAULT_OPTIONS",{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0,seed:0});var Om=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAngle;
uniform float uScale;
uniform bool uGrayScale;

uniform vec4 uInputSize;

float pattern()
{
    float s = sin(uAngle), c = cos(uAngle);
    vec2 tex = vTextureCoord * uInputSize.xy;
    vec2 point = vec2(
        c * tex.x - s * tex.y,
        s * tex.x + c * tex.y
    ) * uScale;
    return (sin(point.x) * sin(point.y)) * 4.0;
    }

    void main()
    {
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 colorRGB = vec3(color);

    if (uGrayScale)
    {
        colorRGB = vec3(color.r + color.g + color.b) / 3.0;
    }

    finalColor = vec4(colorRGB * 10.0 - 5.0 + pattern(), color.a);
}
`,Rm=`struct DotUniforms {
  uScale:f32,
  uAngle:f32,
  uGrayScale:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dotUniforms : DotUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let gray: vec3<f32> = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)));
  // dotUniforms.uGrayScale == 1 doesn't ever pass so it is converted to a float and compared to 0.5 instead 
  let finalColor: vec3<f32> = select(color.rgb, gray, f32(dotUniforms.uGrayScale) >= 0.5);

  return vec4<f32>(finalColor * 10.0 - 5.0 + pattern(uv), color.a);
}

fn pattern(uv: vec2<f32>) -> f32
{
  let s: f32 = sin(dotUniforms.uAngle);
  let c: f32 = cos(dotUniforms.uAngle);
  
  let tex: vec2<f32> = uv * gfu.uInputSize.xy;
  
  let p: vec2<f32> = vec2<f32>(
      c * tex.x - s * tex.y,
      s * tex.x + c * tex.y
  ) * dotUniforms.uScale;

  return (sin(p.x) * sin(p.y)) * 4.0;
}`,Em=Object.defineProperty,km=(n,t,e)=>t in n?Em(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Um=(n,t,e)=>(km(n,t+"",e),e);const Bm=class ol extends L{constructor(...t){let e=t[0]??{};typeof e=="number"&&(F("6.0.0","DotFilter constructor params are now options object. See params: { scale, angle, grayscale }"),e={scale:e},t[1]!==void 0&&(e.angle=t[1]),t[2]!==void 0&&(e.grayscale=t[2])),e={...ol.DEFAULT_OPTIONS,...e};const r={uScale:{value:e.scale,type:"f32"},uAngle:{value:e.angle,type:"f32"},uGrayScale:{value:e.grayscale?1:0,type:"f32"}},i=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Rm,entryPoint:"mainFragment"}}),s=U.from({vertex:$,fragment:Om,name:"dot-filter"});super({gpuProgram:i,glProgram:s,resources:{dotUniforms:r}})}get scale(){return this.resources.dotUniforms.uniforms.uScale}set scale(t){this.resources.dotUniforms.uniforms.uScale=t}get angle(){return this.resources.dotUniforms.uniforms.uAngle}set angle(t){this.resources.dotUniforms.uniforms.uAngle=t}get grayscale(){return this.resources.dotUniforms.uniforms.uGrayScale===1}set grayscale(t){this.resources.dotUniforms.uniforms.uGrayScale=t?1:0}};Um(Bm,"DEFAULT_OPTIONS",{scale:1,angle:5,grayscale:!0});var Lm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uAlpha;
uniform vec3 uColor;
uniform vec2 uOffset;

uniform vec4 uInputSize;

void main(void){
    vec4 sample = texture(uTexture, vTextureCoord - uOffset * uInputSize.zw);

    // Premultiply alpha
    sample.rgb = uColor.rgb * sample.a;

    // alpha user alpha
    sample *= uAlpha;

    finalColor = sample;
}`,Dm=`struct DropShadowUniforms {
  uAlpha: f32,
  uColor: vec3<f32>,
  uOffset: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> dropShadowUniforms : DropShadowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv - dropShadowUniforms.uOffset * gfu.uInputSize.zw);

  // Premultiply alpha
  color = vec4<f32>(vec3<f32>(dropShadowUniforms.uColor.rgb * color.a), color.a);
  // alpha user alpha
  color *= dropShadowUniforms.uAlpha;

  return color;
}`,Gm=Object.defineProperty,Nm=(n,t,e)=>t in n?Gm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,he=(n,t,e)=>(Nm(n,typeof t!="symbol"?t+"":t,e),e);const al=class ll extends L{constructor(t){t={...ll.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Dm,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:Lm,name:"drop-shadow-filter"});super({gpuProgram:e,glProgram:r,resources:{dropShadowUniforms:{uAlpha:{value:t.alpha,type:"f32"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},resolution:t.resolution}),he(this,"uniforms"),he(this,"shadowOnly",!1),he(this,"_color"),he(this,"_blurFilter"),he(this,"_basePass"),this.uniforms=this.resources.dropShadowUniforms.uniforms,this._color=new G,this.color=t.color??0,this._blurFilter=new Wa({strength:t.kernels??t.blur,quality:t.kernels?void 0:t.quality}),this._basePass=new L({gpuProgram:k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:`
                    @group(0) @binding(1) var uTexture: texture_2d<f32>; 
                    @group(0) @binding(2) var uSampler: sampler;
                    @fragment
                    fn mainFragment(
                        @builtin(position) position: vec4<f32>,
                        @location(0) uv : vec2<f32>
                    ) -> @location(0) vec4<f32> {
                        return textureSample(uTexture, uSampler, uv);
                    }
                    `,entryPoint:"mainFragment"}}),glProgram:U.from({vertex:$,fragment:`
                in vec2 vTextureCoord;
                out vec4 finalColor;
                uniform sampler2D uTexture;

                void main(void){
                    finalColor = texture(uTexture, vTextureCoord);
                }
                `,name:"drop-shadow-filter"}),resources:{}}),Object.assign(this,t)}apply(t,e,r,i){const s=bt.getSameSizeTexture(e);t.applyFilter(this,e,s,!0),this._blurFilter.apply(t,s,r,i),this.shadowOnly||t.applyFilter(this._basePass,e,r,!1),bt.returnTexture(s)}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t,this._updatePadding()}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t,this._updatePadding()}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t,this._updatePadding()}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get blur(){return this._blurFilter.strength}set blur(t){this._blurFilter.strength=t,this._updatePadding()}get quality(){return this._blurFilter.quality}set quality(t){this._blurFilter.quality=t,this._updatePadding()}get kernels(){return this._blurFilter.kernels}set kernels(t){this._blurFilter.kernels=t}get pixelSize(){return this._blurFilter.pixelSize}set pixelSize(t){typeof t=="number"&&(t={x:t,y:t}),Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._blurFilter.pixelSize=t}get pixelSizeX(){return this._blurFilter.pixelSizeX}set pixelSizeX(t){this._blurFilter.pixelSizeX=t}get pixelSizeY(){return this._blurFilter.pixelSizeY}set pixelSizeY(t){this._blurFilter.pixelSizeY=t}_updatePadding(){const t=Math.max(Math.abs(this.offsetX),Math.abs(this.offsetY));this.padding=t+this.blur*2+this.quality*4}};he(al,"DEFAULT_OPTIONS",{offset:{x:4,y:4},color:0,alpha:.5,shadowOnly:!1,kernels:void 0,blur:2,quality:3,pixelSize:{x:1,y:1},resolution:1});let $m=al;var Vm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uDisplacementMap;
uniform float uSeed;
uniform vec2 uDimensions;
uniform float uAspect;
uniform float uFillMode;
uniform float uOffset;
uniform float uDirection;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float sinDir = sin(uDirection);
    float cosDir = cos(uDirection);

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * uAspect;
    float ny = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture(uDisplacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * uAspect);

    int fillMode = int(uFillMode);

    if (fillMode == CLAMP) {
        coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
        if( coord.x > uInputClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = uInputClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < uInputClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += uInputClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -uInputClamp.z;
            }
        }

        if( coord.y > uInputClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = uInputClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < uInputClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += uInputClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -uInputClamp.w;
            }
        }
    }

    finalColor.r = texture(uTexture, coord + uRed * (1.0 - uSeed * 0.4) / uInputSize.xy).r;
    finalColor.g = texture(uTexture, coord + uGreen * (1.0 - uSeed * 0.3) / uInputSize.xy).g;
    finalColor.b = texture(uTexture, coord + uBlue * (1.0 - uSeed * 0.2) / uInputSize.xy).b;
    finalColor.a = texture(uTexture, coord).a;
}
`,Wm=`struct GlitchUniforms {
  uSeed: f32,
  uDimensions: vec2<f32>,
  uAspect: f32,
  uFillMode: f32,
  uOffset: f32,
  uDirection: f32,
  uRed: vec2<f32>,
  uGreen: vec2<f32>,
  uBlue: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glitchUniforms : GlitchUniforms;
@group(1) @binding(1) var uDisplacementMap: texture_2d<f32>; 
@group(1) @binding(2) var uDisplacementSampler: sampler; 

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uSeed: f32 = glitchUniforms.uSeed;
  let uDimensions: vec2<f32> = glitchUniforms.uDimensions;
  let uAspect: f32 = glitchUniforms.uAspect;
  let uOffset: f32 = glitchUniforms.uOffset;
  let uDirection: f32 = glitchUniforms.uDirection;
  let uRed: vec2<f32> = glitchUniforms.uRed;
  let uGreen: vec2<f32> = glitchUniforms.uGreen;
  let uBlue: vec2<f32> = glitchUniforms.uBlue;

  let uInputSize: vec4<f32> = gfu.uInputSize;
  let uInputClamp: vec4<f32> = gfu.uInputClamp;

  var discarded: bool = false;
  var coord: vec2<f32> = (uv * uInputSize.xy) / uDimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
      discarded = true;
    }

    let sinDir: f32 = sin(uDirection);
    let cosDir: f32 = cos(uDirection);

    let cx: f32 = coord.x - 0.5;
    let cy: f32 = (coord.y - 0.5) * uAspect;
    var ny: f32 = (-sinDir * cx + cosDir * cy) / uAspect + 0.5;

    ny = select(select(ny, -ny, ny < 0.0), 2.0 - ny, ny > 1.0);

    let dc: vec4<f32> = textureSample(uDisplacementMap, uDisplacementSampler, vec2<f32>(0.5, ny));

    let displacement: f32 = (dc.r - dc.g) * (uOffset / uInputSize.x);

    coord = uv + vec2<f32>(cosDir * displacement, sinDir * displacement * uAspect);

    let fillMode: i32 = i32(glitchUniforms.uFillMode);

    if (fillMode == CLAMP) {
      coord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    } else {
      if (coord.x > uInputClamp.z) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x - uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = uInputClamp.z * 2.0 - coord.x;
        }
      } else if (coord.x < uInputClamp.x) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.x = coord.x + uInputClamp.z;
        } else if (fillMode == MIRROR) {
          coord.x = coord.x * -uInputClamp.z;
        }
      }

      if (coord.y > uInputClamp.w) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y - uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = uInputClamp.w * 2.0 - coord.y;
        }
      } else if (coord.y < uInputClamp.y) {
        if (fillMode == TRANSPARENT) {
          discarded = true;
        } else if (fillMode == LOOP) {
          coord.y = coord.y + uInputClamp.w;
        } else if (fillMode == MIRROR) {
          coord.y = coord.y * -uInputClamp.w;
        }
      }
    }

    let seedR: f32 = 1.0 - uSeed * 0.4;
    let seedG: f32 = 1.0 - uSeed * 0.3;
    let seedB: f32 = 1.0 - uSeed * 0.2;

    let offsetR: vec2<f32> = vec2(uRed.x * seedR / uInputSize.x, uRed.y * seedR / uInputSize.y);
    let offsetG: vec2<f32> = vec2(uGreen.x * seedG / uInputSize.x, uGreen.y * seedG / uInputSize.y);
    let offsetB: vec2<f32> = vec2(uBlue.x * seedB / uInputSize.x, uBlue.y * seedB / uInputSize.y);

    let r = textureSample(uTexture, uSampler, coord + offsetR).r;
    let g = textureSample(uTexture, uSampler, coord + offsetG).g;
    let b = textureSample(uTexture, uSampler, coord + offsetB).b;
    let a = textureSample(uTexture, uSampler, coord).a;

    return select(vec4<f32>(r, g, b, a), vec4<f32>(0.0,0.0,0.0,0.0), discarded);
}

const TRANSPARENT: i32 = 0;
const ORIGINAL: i32 = 1;
const LOOP: i32 = 2;
const CLAMP: i32 = 3;
const MIRROR: i32 = 4;`,Xm=Object.defineProperty,Ym=(n,t,e)=>t in n?Xm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,It=(n,t,e)=>(Ym(n,typeof t!="symbol"?t+"":t,e),e);const Hm=class ul extends L{constructor(t){t={...ul.defaults,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Wm,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:Vm,name:"glitch-filter"}),i=document.createElement("canvas");i.width=4,i.height=t.sampleSize??512;const s=new O({source:new re({resource:i})});super({gpuProgram:e,glProgram:r,resources:{glitchUniforms:{uSeed:{value:(t==null?void 0:t.seed)??0,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"},uAspect:{value:1,type:"f32"},uFillMode:{value:(t==null?void 0:t.fillMode)??0,type:"f32"},uOffset:{value:(t==null?void 0:t.offset)??100,type:"f32"},uDirection:{value:(t==null?void 0:t.direction)??0,type:"f32"},uRed:{value:t.red,type:"vec2<f32>"},uGreen:{value:t.green,type:"vec2<f32>"},uBlue:{value:t.blue,type:"vec2<f32>"}},uDisplacementMap:s.source,uDisplacementSampler:s.source.style}}),It(this,"uniforms"),It(this,"average",!1),It(this,"minSize",8),It(this,"sampleSize",512),It(this,"_canvas"),It(this,"texture"),It(this,"_slices",0),It(this,"_sizes",new Float32Array(1)),It(this,"_offsets",new Float32Array(1)),this.uniforms=this.resources.glitchUniforms.uniforms,this._canvas=i,this.texture=s,Object.assign(this,t)}apply(t,e,r,i){const{width:s,height:o}=e.frame;this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,t.applyFilter(this,e,r,i)}_randomizeSizes(){const t=this._sizes,e=this._slices-1,r=this.sampleSize,i=Math.min(this.minSize/r,.9/this._slices);if(this.average){const s=this._slices;let o=1;for(let a=0;a<e;a++){const l=o/(s-a),u=Math.max(l*(1-Math.random()*.6),i);t[a]=u,o-=u}t[e]=o}else{let s=1;const o=Math.sqrt(1/this._slices);for(let a=0;a<e;a++){const l=Math.max(o*s*Math.random(),i);t[a]=l,s-=l}t[e]=s}this.shuffle()}shuffle(){const t=this._sizes,e=this._slices-1;for(let r=e;r>0;r--){const i=Math.random()*r>>0,s=t[r];t[r]=t[i],t[i]=s}}_randomizeOffsets(){for(let t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)}refresh(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()}redraw(){const t=this.sampleSize,e=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);let i,s=0;for(let o=0;o<this._slices;o++){i=Math.floor(this._offsets[o]*256);const a=this._sizes[o]*t,l=i>0?i:0,u=i<0?-i:0;r.fillStyle=`rgba(${l}, ${u}, 0, 1)`,r.fillRect(0,s>>0,t,a+1>>0),s+=a}e.source.update()}set sizes(t){const e=Math.min(this._slices,t.length);for(let r=0;r<e;r++)this._sizes[r]=t[r]}get sizes(){return this._sizes}set offsets(t){const e=Math.min(this._slices,t.length);for(let r=0;r<e;r++)this._offsets[r]=t[r]}get offsets(){return this._offsets}get slices(){return this._slices}set slices(t){this._slices!==t&&(this._slices=t,this._sizes=new Float32Array(t),this._offsets=new Float32Array(t),this.refresh())}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get seed(){return this.uniforms.uSeed}set seed(t){this.uniforms.uSeed=t}get fillMode(){return this.uniforms.uFillMode}set fillMode(t){this.uniforms.uFillMode=t}get direction(){return this.uniforms.uDirection/ge}set direction(t){this.uniforms.uDirection=t*ge}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}destroy(){var t;(t=this.texture)==null||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null}};It(Hm,"defaults",{slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:{x:0,y:0},green:{x:0,y:0},blue:{x:0,y:0},minSize:8,sampleSize:512});var jm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uStrength;
uniform vec3 uColor;
uniform float uKnockout;
uniform float uAlpha;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159265358979323846264;

// Hard-assignment of DIST and ANGLE_STEP_SIZE instead of using uDistance and uQuality to allow them to be use on GLSL loop conditions
const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.);
const float ANGLE_STEP_NUM = ceil(PI * 2. / ANGLE_STEP_SIZE);
const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.) / 2.;

void main(void) {
    vec2 px = vec2(1.) / uInputSize.xy;

    float totalAlpha = 0.;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.; angle < PI * 2.; angle += ANGLE_STEP_SIZE) {
      direction = vec2(cos(angle), sin(angle)) * px;

      for (float curDistance = 0.; curDistance < DIST; curDistance++) {
          displaced = clamp(vTextureCoord + direction * (curDistance + 1.), uInputClamp.xy, uInputClamp.zw);
          curColor = texture(uTexture, displaced);
          totalAlpha += (DIST - curDistance) * curColor.a;
      }
    }
    
    curColor = texture(uTexture, vTextureCoord);

    vec4 glowColor = vec4(uColor, uAlpha);
    bool knockout = uKnockout > .5;
    float innerStrength = uStrength[0];
    float outerStrength = uStrength[1];

    float alphaRatio = totalAlpha / MAX_TOTAL_ALPHA;
    float innerGlowAlpha = (1. - alphaRatio) * innerStrength * curColor.a * uAlpha;
    float innerGlowStrength = min(1., innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);
    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a) * uAlpha;
    float outerGlowStrength = min(1. - innerColor.a, outerGlowAlpha);
    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;

    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      finalColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      finalColor = innerColor + outerGlowColor;
    }
}
`,qm=`struct GlowUniforms {
  uDistance: f32,
  uStrength: vec2<f32>,
  uColor: vec3<f32>,
  uAlpha: f32,
  uQuality: f32,
  uKnockout: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> glowUniforms : GlowUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let quality = glowUniforms.uQuality;
  let distance = glowUniforms.uDistance;

  let dist: f32 = glowUniforms.uDistance;
  let angleStepSize: f32 = min(1. / quality / distance, PI * 2.0);
  let angleStepNum: f32 = ceil(PI * 2.0 / angleStepSize);

  let px: vec2<f32> = vec2<f32>(1.0 / gfu.uInputSize.xy);

  var totalAlpha: f32 = 0.0;

  var direction: vec2<f32>;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.0; angle < PI * 2.0; angle += angleStepSize) {
    direction = vec2<f32>(cos(angle), sin(angle)) * px;
    for (var curDistance = 0.0; curDistance < dist; curDistance+=1) {
      displaced = vec2<f32>(clamp(uv + direction * (curDistance + 1.0), gfu.uInputClamp.xy, gfu.uInputClamp.zw));
      curColor = textureSample(uTexture, uSampler, displaced);
      totalAlpha += (dist - curDistance) * curColor.a;
    }
  }
    
  curColor = textureSample(uTexture, uSampler, uv);

  let glowColorRGB = glowUniforms.uColor;
  let glowAlpha = glowUniforms.uAlpha;
  let glowColor = vec4<f32>(glowColorRGB, glowAlpha);
  let knockout: bool = glowUniforms.uKnockout > 0.5;
  let innerStrength = glowUniforms.uStrength[0];
  let outerStrength = glowUniforms.uStrength[1];

  let alphaRatio: f32 = (totalAlpha / (angleStepNum * dist * (dist + 1.0) / 2.0));
  let innerGlowAlpha: f32 = (1.0 - alphaRatio) * innerStrength * curColor.a * glowAlpha;
  let innerGlowStrength: f32 = min(1.0, innerGlowAlpha);
  
  let innerColor: vec4<f32> = mix(curColor, glowColor, innerGlowStrength);
  let outerGlowAlpha: f32 = alphaRatio * outerStrength * (1. - curColor.a) * glowAlpha;
  let outerGlowStrength: f32 = min(1.0 - innerColor.a, outerGlowAlpha);
  let outerGlowColor: vec4<f32> = outerGlowStrength * glowColor.rgba;
  
  if (knockout) {
    let resultAlpha: f32 = outerGlowAlpha + innerGlowAlpha;
    return vec4<f32>(glowColor.rgb * resultAlpha, resultAlpha);
  }
  else {
    return innerColor + outerGlowColor;
  }
}

const PI: f32 = 3.14159265358979323846264;`,Km=Object.defineProperty,Zm=(n,t,e)=>t in n?Km(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,si=(n,t,e)=>(Zm(n,typeof t!="symbol"?t+"":t,e),e);const Qm=class cl extends L{constructor(t){t={...cl.DEFAULT_OPTIONS,...t};const e=t.distance??10,r=t.quality??.1,i=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:qm,entryPoint:"mainFragment"}}),s=U.from({vertex:$,fragment:jm.replace(/__ANGLE_STEP_SIZE__/gi,`${(1/r/e).toFixed(7)}`).replace(/__DIST__/gi,`${e.toFixed(0)}.0`),name:"glow-filter"});super({gpuProgram:i,glProgram:s,resources:{glowUniforms:{uDistance:{value:e,type:"f32"},uStrength:{value:[t.innerStrength,t.outerStrength],type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:t.alpha,type:"f32"},uQuality:{value:r,type:"f32"},uKnockout:{value:(t==null?void 0:t.knockout)??!1?1:0,type:"f32"}}},padding:e}),si(this,"uniforms"),si(this,"_color"),this.uniforms=this.resources.glowUniforms.uniforms,this._color=new G,this.color=t.color??16777215}get distance(){return this.uniforms.uDistance}set distance(t){this.uniforms.uDistance=this.padding=t}get innerStrength(){return this.uniforms.uStrength[0]}set innerStrength(t){this.uniforms.uStrength[0]=t}get outerStrength(){return this.uniforms.uStrength[1]}set outerStrength(t){this.uniforms.uStrength[1]=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this.uniforms.uQuality}set quality(t){this.uniforms.uQuality=t}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};si(Qm,"DEFAULT_OPTIONS",{distance:10,outerStrength:4,innerStrength:0,color:16777215,alpha:1,quality:.1,knockout:!1});var Jm=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform float uParallel;
uniform vec2 uLight;
uniform float uAspect;
uniform float uTime;
uniform vec3 uRay;

uniform vec4 uInputSize;

\${PERLIN}

void main(void) {
    vec2 uDimensions = uDimensions;
    bool uParallel = uParallel > 0.5;
    vec2 uLight = uLight;
    float uAspect = uAspect;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions;

    float d;

    if (uParallel) {
        float _cos = uLight.x;
        float _sin = uLight.y;
        d = (_cos * coord.x) + (_sin * coord.y * uAspect);
    } else {
        float dx = coord.x - uLight.x / uDimensions.x;
        float dy = (coord.y - uLight.y / uDimensions.y) * uAspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    float uTime = uTime;
    vec3 uRay = uRay;

    float gain = uRay[0];
    float lacunarity = uRay[1];
    float alpha = uRay[2];

    vec3 dir = vec3(d, d, 0.0);
    float noise = turb(dir + vec3(uTime, 0.0, 62.1 + uTime) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(vec3(noise), 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    finalColor = texture(uTexture, vTextureCoord) + mist;
}
`,tg=`struct GodrayUniforms {
  uLight: vec2<f32>,
  uParallel: f32,
  uAspect: f32,
  uTime: f32,
  uRay: vec3<f32>,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> godrayUniforms : GodrayUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = godrayUniforms.uDimensions;
  let uParallel: bool = godrayUniforms.uParallel > 0.5;
  let uLight: vec2<f32> = godrayUniforms.uLight;
  let uAspect: f32 = godrayUniforms.uAspect;

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / uDimensions;

  var d: f32;

  if (uParallel) {
    let _cos: f32 = uLight.x;
    let _sin: f32 = uLight.y;
    d = (_cos * coord.x) + (_sin * coord.y * uAspect);
  } else {
    let dx: f32 = coord.x - uLight.x / uDimensions.x;
    let dy: f32 = (coord.y - uLight.y / uDimensions.y) * uAspect;
    let dis: f32 = sqrt(dx * dx + dy * dy) + 0.00001;
    d = dy / dis;
  }

  let uTime: f32 = godrayUniforms.uTime;
  let uRay: vec3<f32> = godrayUniforms.uRay;
  
  let gain = uRay[0];
  let lacunarity = uRay[1];
  let alpha = uRay[2];

  let dir: vec3<f32> = vec3<f32>(d, d, 0.0);
  var noise: f32 = turb(dir + vec3<f32>(uTime, 0.0, 62.1 + uTime) * 0.05, vec3<f32>(480.0, 320.0, 480.0), lacunarity, gain);
  noise = mix(noise, 0.0, 0.3);
  //fade vertically.
  var mist: vec4<f32> = vec4<f32>(vec3<f32>(noise), 1.0) * (1.0 - coord.y);
  mist.a = 1.0;
  // apply user alpha
  mist *= alpha;
  return textureSample(uTexture, uSampler, uv) + mist;
}

\${PERLIN}`,eg=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,ng=`// Taken from https://gist.github.com/munrocket/236ed5ba7e409b8bdf1ff6eca5dcdc39

fn moduloVec3(x: vec3<f32>, y: vec3<f32>) -> vec3<f32>
{
  return x - y * floor(x/y);
}
fn mod289Vec3(x: vec3<f32>) -> vec3<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn mod289Vec4(x: vec4<f32>) -> vec4<f32>
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
fn permute4(x: vec4<f32>) -> vec4<f32>
{
    return mod289Vec4(((x * 34.0) + 1.0) * x);
}
fn taylorInvSqrt(r: vec4<f32>) -> vec4<f32>
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
fn fade3(t: vec3<f32>) -> vec3<f32>
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
fn fade2(t: vec2<f32>) -> vec2<f32> { return t * t * t * (t * (t * 6. - 15.) + 10.); }

fn perlinNoise2(P: vec2<f32>) -> f32 {
  var Pi: vec4<f32> = floor(P.xyxy) + vec4<f32>(0., 0., 1., 1.);
  let Pf = fract(P.xyxy) - vec4<f32>(0., 0., 1., 1.);
  Pi = Pi % vec4<f32>(289.); // To avoid truncation effects in permutation
  let ix = Pi.xzxz;
  let iy = Pi.yyww;
  let fx = Pf.xzxz;
  let fy = Pf.yyww;
  let i = permute4(permute4(ix) + iy);
  var gx: vec4<f32> = 2. * fract(i * 0.0243902439) - 1.; // 1/41 = 0.024...
  let gy = abs(gx) - 0.5;
  let tx = floor(gx + 0.5);
  gx = gx - tx;
  var g00: vec2<f32> = vec2<f32>(gx.x, gy.x);
  var g10: vec2<f32> = vec2<f32>(gx.y, gy.y);
  var g01: vec2<f32> = vec2<f32>(gx.z, gy.z);
  var g11: vec2<f32> = vec2<f32>(gx.w, gy.w);
  let norm = 1.79284291400159 - 0.85373472095314 *
      vec4<f32>(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
  g00 = g00 * norm.x;
  g01 = g01 * norm.y;
  g10 = g10 * norm.z;
  g11 = g11 * norm.w;
  let n00 = dot(g00, vec2<f32>(fx.x, fy.x));
  let n10 = dot(g10, vec2<f32>(fx.y, fy.y));
  let n01 = dot(g01, vec2<f32>(fx.z, fy.z));
  let n11 = dot(g11, vec2<f32>(fx.w, fy.w));
  let fade_xy = fade2(Pf.xy);
  let n_x = mix(vec2<f32>(n00, n01), vec2<f32>(n10, n11), vec2<f32>(fade_xy.x));
  let n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

// Classic Perlin noise, periodic variant
fn perlinNoise3(P: vec3<f32>, rep: vec3<f32>) -> f32
{
    var Pi0: vec3<f32> = moduloVec3(floor(P), rep); // Integer part, modulo period
    var Pi1: vec3<f32> = moduloVec3(Pi0 + vec3<f32>(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289Vec3(Pi0);
    Pi1 = mod289Vec3(Pi1);
    let Pf0: vec3<f32> = fract(P); // Fractional part for interpolation
    let Pf1: vec3<f32> = Pf0 - vec3<f32>(1.0); // Fractional part - 1.0
    let ix: vec4<f32> = vec4<f32>(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    let iy: vec4<f32> = vec4<f32>(Pi0.yy, Pi1.yy);
    let iz0: vec4<f32> = Pi0.zzzz;
    let iz1: vec4<f32> = Pi1.zzzz;
    let ixy: vec4<f32> = permute4(permute4(ix) + iy);
    let ixy0: vec4<f32> = permute4(ixy + iz0);
    let ixy1: vec4<f32> = permute4(ixy + iz1);
    var gx0: vec4<f32> = ixy0 * (1.0 / 7.0);
    var gy0: vec4<f32> = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    let gz0: vec4<f32> = vec4<f32>(0.5) - abs(gx0) - abs(gy0);
    let sz0: vec4<f32> = step(gz0, vec4<f32>(0.0));
    gx0 -= sz0 * (step(vec4<f32>(0.0), gx0) - 0.5);
    gy0 -= sz0 * (step(vec4<f32>(0.0), gy0) - 0.5);
    var gx1: vec4<f32> = ixy1 * (1.0 / 7.0);
    var gy1: vec4<f32> = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    let gz1: vec4<f32> = vec4<f32>(0.5) - abs(gx1) - abs(gy1);
    let sz1: vec4<f32> = step(gz1, vec4<f32>(0.0));
    gx1 -= sz1 * (step(vec4<f32>(0.0), gx1) - 0.5);
    gy1 -= sz1 * (step(vec4<f32>(0.0), gy1) - 0.5);
    var g000: vec3<f32> = vec3<f32>(gx0.x, gy0.x, gz0.x);
    var g100: vec3<f32> = vec3<f32>(gx0.y, gy0.y, gz0.y);
    var g010: vec3<f32> = vec3<f32>(gx0.z, gy0.z, gz0.z);
    var g110: vec3<f32> = vec3<f32>(gx0.w, gy0.w, gz0.w);
    var g001: vec3<f32> = vec3<f32>(gx1.x, gy1.x, gz1.x);
    var g101: vec3<f32> = vec3<f32>(gx1.y, gy1.y, gz1.y);
    var g011: vec3<f32> = vec3<f32>(gx1.z, gy1.z, gz1.z);
    var g111: vec3<f32> = vec3<f32>(gx1.w, gy1.w, gz1.w);
    let norm0: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    let norm1: vec4<f32> = taylorInvSqrt(vec4<f32>(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    let n000: f32 = dot(g000, Pf0);
    let n100: f32 = dot(g100, vec3<f32>(Pf1.x, Pf0.yz));
    let n010: f32 = dot(g010, vec3<f32>(Pf0.x, Pf1.y, Pf0.z));
    let n110: f32 = dot(g110, vec3<f32>(Pf1.xy, Pf0.z));
    let n001: f32 = dot(g001, vec3<f32>(Pf0.xy, Pf1.z));
    let n101: f32 = dot(g101, vec3<f32>(Pf1.x, Pf0.y, Pf1.z));
    let n011: f32 = dot(g011, vec3<f32>(Pf0.x, Pf1.yz));
    let n111: f32 = dot(g111, Pf1);
    let fade_xyz: vec3<f32> = fade3(Pf0);
    let n_z: vec4<f32> = mix(vec4<f32>(n000, n100, n010, n110), vec4<f32>(n001, n101, n011, n111), fade_xyz.z);
    let n_yz: vec2<f32> = mix(n_z.xy, n_z.zw, fade_xyz.y);
    let n_xyz: f32 = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
fn turb(P: vec3<f32>, rep: vec3<f32>, lacunarity: f32, gain: f32) -> f32
{
    var sum: f32 = 0.0;
    var sc: f32 = 1.0;
    var totalgain: f32 = 1.0;
    for (var i = 0.0; i < 6.0; i += 1)
    {
        sum += totalgain * perlinNoise3(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}`,rg=Object.defineProperty,ig=(n,t,e)=>t in n?rg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,fe=(n,t,e)=>(ig(n,typeof t!="symbol"?t+"":t,e),e);const sg=class hl extends L{constructor(t){t={...hl.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:tg.replace("${PERLIN}",ng),entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:Jm.replace("${PERLIN}",eg),name:"god-ray-filter"});super({gpuProgram:e,glProgram:r,resources:{godrayUniforms:{uLight:{value:new Float32Array(2),type:"vec2<f32>"},uParallel:{value:0,type:"f32"},uAspect:{value:0,type:"f32"},uTime:{value:t.time,type:"f32"},uRay:{value:new Float32Array(3),type:"vec3<f32>"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),fe(this,"uniforms"),fe(this,"time",0),fe(this,"_angleLight",[0,0]),fe(this,"_angle",0),fe(this,"_center"),this.uniforms=this.resources.godrayUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){const s=e.frame.width,o=e.frame.height;this.uniforms.uLight[0]=this.parallel?this._angleLight[0]:this._center.x,this.uniforms.uLight[1]=this.parallel?this._angleLight[1]:this._center.y,this.uniforms.uDimensions[0]=s,this.uniforms.uDimensions[1]=o,this.uniforms.uAspect=o/s,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get angle(){return this._angle}set angle(t){this._angle=t;const e=t*ge;this._angleLight[0]=Math.cos(e),this._angleLight[1]=Math.sin(e)}get parallel(){return this.uniforms.uParallel>.5}set parallel(t){this.uniforms.uParallel=t?1:0}get center(){return this._center}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this._center=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get gain(){return this.uniforms.uRay[0]}set gain(t){this.uniforms.uRay[0]=t}get lacunarity(){return this.uniforms.uRay[1]}set lacunarity(t){this.uniforms.uRay[1]=t}get alpha(){return this.uniforms.uRay[2]}set alpha(t){this.uniforms.uRay[2]=t}};fe(sg,"DEFAULT_OPTIONS",{angle:30,gain:.5,lacunarity:2.5,parallel:!0,time:0,center:{x:0,y:0},alpha:1});var og=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 uHsl;
uniform float uAlpha;
uniform float uColorize;

// https://en.wikipedia.org/wiki/Luma_(video)
const vec3 weight = vec3(0.299, 0.587, 0.114);

float getWeightedAverage(vec3 rgb) {
    return rgb.r * weight.r + rgb.g * weight.g + rgb.b * weight.b;
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const vec3 k = vec3(0.57735, 0.57735, 0.57735);

vec3 hueShift(vec3 color, float angle) {
    float cosAngle = cos(angle);
    return vec3(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}

void main()
{
    vec4 color = texture(uTexture, vTextureCoord);
    vec3 resultRGB = color.rgb;

    float hue = uHsl[0];
    float saturation = uHsl[1];
    float lightness = uHsl[2];

    // colorize
    if (uColorize > 0.5) {
        resultRGB = vec3(getWeightedAverage(resultRGB), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    float average = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    finalColor = mix(color, vec4(resultRGB, color.a), uAlpha);
}
`,ag=`struct HslUniforms {
  uHsl:vec3<f32>,
  uColorize:f32,
  uAlpha:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> hslUniforms : HslUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
    let color: vec4<f32> = textureSample(uTexture, uSampler, uv);
    var resultRGB: vec3<f32> = color.rgb;

    let hue: f32 = hslUniforms.uHsl[0];
    let saturation: f32 = hslUniforms.uHsl[1];
    let lightness: f32 = hslUniforms.uHsl[2];

    // colorize
    if (hslUniforms.uColorize > 0.5) {
        resultRGB = vec3<f32>(dot(color.rgb, vec3<f32>(0.299, 0.587, 0.114)), 0., 0.);
    }

    // hue
    resultRGB = hueShift(resultRGB, hue);

    // saturation
    // https://github.com/evanw/glfx.js/blob/master/src/filters/adjust/huesaturation.js
    let average: f32 = (resultRGB.r + resultRGB.g + resultRGB.b) / 3.0;

    if (saturation > 0.) {
        resultRGB += (average - resultRGB) * (1. - 1. / (1.001 - saturation));
    } else {
        resultRGB -= (average - resultRGB) * saturation;
    }

    // lightness
    resultRGB = mix(resultRGB, vec3<f32>(ceil(lightness)) * color.a, abs(lightness));

    // alpha
    return mix(color, vec4<f32>(resultRGB, color.a), hslUniforms.uAlpha);
}

// https://gist.github.com/mairod/a75e7b44f68110e1576d77419d608786?permalink_comment_id=3195243#gistcomment-3195243
const k: vec3<f32> = vec3(0.57735, 0.57735, 0.57735);

fn hueShift(color: vec3<f32>, angle: f32) -> vec3<f32> 
{
    let cosAngle: f32 = cos(angle);
    return vec3<f32>(
    color * cosAngle +
    cross(k, color) * sin(angle) +
    k * dot(k, color) * (1.0 - cosAngle)
    );
}`,lg=Object.defineProperty,ug=(n,t,e)=>t in n?lg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,oi=(n,t,e)=>(ug(n,typeof t!="symbol"?t+"":t,e),e);const cg=class fl extends L{constructor(t){t={...fl.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:ag,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:og,name:"hsl-adjustment-filter"});super({gpuProgram:e,glProgram:r,resources:{hslUniforms:{uHsl:{value:new Float32Array(3),type:"vec3<f32>"},uColorize:{value:t.colorize?1:0,type:"f32"},uAlpha:{value:t.alpha,type:"f32"}}}}),oi(this,"uniforms"),oi(this,"_hue"),this.uniforms=this.resources.hslUniforms.uniforms,Object.assign(this,t)}get hue(){return this._hue}set hue(t){this._hue=t,this.uniforms.uHsl[0]=t*(Math.PI/180)}get saturation(){return this.uniforms.uHsl[1]}set saturation(t){this.uniforms.uHsl[1]=t}get lightness(){return this.uniforms.uHsl[2]}set lightness(t){this.uniforms.uHsl[2]=t}get colorize(){return this.uniforms.uColorize===1}set colorize(t){this.uniforms.uColorize=t?1:0}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};oi(cg,"DEFAULT_OPTIONS",{hue:0,saturation:0,lightness:0,colorize:!1,alpha:1});var hg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    vec2 velocity = uVelocity / uInputSize.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture(uTexture, vTextureCoord + bias);
    }
    finalColor = color / float(uKernelSize);
}
`,fg=`struct MotionBlurUniforms {
  uVelocity: vec2<f32>,
  uKernelSize: f32,
  uOffset: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> motionBlurUniforms : MotionBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uVelocity = motionBlurUniforms.uVelocity;
  let uKernelSize = motionBlurUniforms.uKernelSize;
  let uOffset = motionBlurUniforms.uOffset;

  let velocity: vec2<f32> = uVelocity / gfu.uInputSize.xy;
  let offset: f32 = -uOffset / length(uVelocity) - 0.5;
  let k: i32 = i32(min(uKernelSize - 1, MAX_KERNEL_SIZE - 1));

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  for(var i: i32 = 0; i < k; i += 1) {
    let bias: vec2<f32> = velocity * (f32(i) / f32(k) + offset);
    color += textureSample(uTexture, uSampler, uv + bias);
  }
  
  return select(color / f32(uKernelSize), textureSample(uTexture, uSampler, uv), uKernelSize == 0);
}

const MAX_KERNEL_SIZE: f32 = 2048;`,dg=Object.defineProperty,pg=(n,t,e)=>t in n?dg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ai=(n,t,e)=>(pg(n,typeof t!="symbol"?t+"":t,e),e);const mg=class dl extends L{constructor(...t){let e=t[0]??{};if(Array.isArray(e)||"x"in e&&"y"in e||e instanceof et){F("6.0.0","MotionBlurFilter constructor params are now options object. See params: { velocity, kernelSize, offset }");const s="x"in e?e.x:e[0],o="y"in e?e.y:e[1];e={velocity:{x:s,y:o}},t[1]!==void 0&&(e.kernelSize=t[1]),t[2]!==void 0&&(e.offset=t[2])}e={...dl.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:fg,entryPoint:"mainFragment"}}),i=U.from({vertex:$,fragment:hg,name:"motion-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{motionBlurUniforms:{uVelocity:{value:e.velocity,type:"vec2<f32>"},uKernelSize:{value:Math.trunc(e.kernelSize??5),type:"i32"},uOffset:{value:e.offset,type:"f32"}}}}),ai(this,"uniforms"),ai(this,"_kernelSize"),this.uniforms=this.resources.motionBlurUniforms.uniforms,Object.assign(this,e)}get velocity(){return this.uniforms.uVelocity}set velocity(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uVelocity=t,this._updateDirty()}get velocityX(){return this.velocity.x}set velocityX(t){this.velocity.x=t,this._updateDirty()}get velocityY(){return this.velocity.y}set velocityY(t){this.velocity.y=t,this._updateDirty()}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateDirty()}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}_updateDirty(){this.padding=(Math.max(Math.abs(this.velocityX),Math.abs(this.velocityY))>>0)+1,this.uniforms.uKernelSize=this.velocityX!==0||this.velocityY!==0?this._kernelSize:0}};ai(mg,"DEFAULT_OPTIONS",{velocity:{x:0,y:0},kernelSize:5,offset:0});var gg=`in vec2 vTextureCoord;
out vec4 finalColor;

const int MAX_COLORS = \${MAX_COLORS};

uniform sampler2D uTexture;
uniform vec3 uOriginalColors[MAX_COLORS];
uniform vec3 uTargetColors[MAX_COLORS];
uniform float uTolerance;

void main(void)
{
    finalColor = texture(uTexture, vTextureCoord);

    float alpha = finalColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = finalColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < uTolerance)
      {
        vec3 targetColor = uTargetColors[i];
        finalColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`,xg=`struct MultiColorReplaceUniforms {
  uOriginalColors: array<vec3<f32>, MAX_COLORS>,
  uTargetColors: array<vec3<f32>, MAX_COLORS>,
  uTolerance:f32,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> multiColorReplaceUniforms : MultiColorReplaceUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uOriginalColors = multiColorReplaceUniforms.uOriginalColors;
  let uTargetColors = multiColorReplaceUniforms.uTargetColors;
  let uTolerance = multiColorReplaceUniforms.uTolerance;

  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  let alpha: f32 = color.a;

  if (alpha > 0.0001)
  {
    var modColor: vec3<f32> = vec3<f32>(color.rgb) / alpha;

    for(var i: i32 = 0; i < MAX_COLORS; i += 1)
    {
      let origColor: vec3<f32> = uOriginalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      let colorDiff: vec3<f32> = origColor - modColor;
      
      if (length(colorDiff) < uTolerance)
      {
        let targetColor: vec3<f32> = uTargetColors[i];
        color = vec4((targetColor + colorDiff) * alpha, alpha);
        return color;
      }
    }
  }

  return color;
}

const MAX_COLORS: i32 = \${MAX_COLORS};`,vg=Object.defineProperty,yg=(n,t,e)=>t in n?vg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Tn=(n,t,e)=>(yg(n,typeof t!="symbol"?t+"":t,e),e);const _g=class pl extends L{constructor(...t){let e=t[0]??{};Array.isArray(e)&&(F("6.0.0","MultiColorReplaceFilter constructor params are now options object. See params: { replacements, tolerance, maxColors }"),e={replacements:e},t[1]&&(e.tolerance=t[1]),t[2]&&(e.maxColors=t[2])),e={...pl.DEFAULT_OPTIONS,...e};const r=e.maxColors??e.replacements.length,i=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:xg.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),entryPoint:"mainFragment"}}),s=U.from({vertex:$,fragment:gg.replace(/\$\{MAX_COLORS\}/g,r.toFixed(0)),name:"multi-color-replace-filter"});super({gpuProgram:i,glProgram:s,resources:{multiColorReplaceUniforms:{uOriginalColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTargetColors:{value:new Float32Array(3*r),type:"vec3<f32>",size:r},uTolerance:{value:e.tolerance,type:"f32"}}}}),Tn(this,"uniforms"),Tn(this,"_replacements",[]),Tn(this,"_maxColors"),this._maxColors=r,this.uniforms=this.resources.multiColorReplaceUniforms.uniforms,this.replacements=e.replacements}set replacements(t){const e=this.uniforms.uOriginalColors,r=this.uniforms.uTargetColors,i=t.length,s=new G;if(i>this._maxColors)throw new Error(`Length of replacements (${i}) exceeds the maximum colors length (${this._maxColors})`);e[i*3]=-1;let o,a,l;for(let u=0;u<i;u++){const c=t[u];s.setValue(c[0]),[o,a,l]=s.toArray(),e[u*3]=o,e[u*3+1]=a,e[u*3+2]=l,s.setValue(c[1]),[o,a,l]=s.toArray(),r[u*3]=o,r[u*3+1]=a,r[u*3+2]=l}this._replacements=t}get replacements(){return this._replacements}refresh(){this.replacements=this._replacements}get maxColors(){return this._maxColors}get tolerance(){return this.uniforms.uTolerance}set tolerance(t){this.uniforms.uTolerance=t}set epsilon(t){F("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance=t}get epsilon(){return F("6.0.0","MultiColorReplaceFilter.epsilon is deprecated, please use MultiColorReplaceFilter.tolerance instead"),this.tolerance}};Tn(_g,"DEFAULT_OPTIONS",{replacements:[[16711680,255]],tolerance:.05,maxColors:void 0});var bg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uSepia;
uniform vec2 uNoise;
uniform vec3 uScratch;
uniform vec3 uVignetting;
uniform float uSeed;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    if (uSepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + uSepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignette = uVignetting[0];
    float vignetteAlpha = uVignetting[1];
    float vignetteBlur = uVignetting[2];

    if (vignette > 0.0)
    {
        float outter = SQRT_2 - vignette * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= uDimensions.y / uDimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignetteBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignetteAlpha);
    }

    float scratch = uScratch[0];
    float scratchDensity = uScratch[1];
    float scratchWidth = uScratch[2];

    if (scratchDensity > uSeed && scratch != 0.0)
    {
        float phase = uSeed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(uSeed * dist, abs(s - uSeed * dist)));
        if (d < uSeed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / uDimensions.x * (0.75 + uSeed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    float noise = uNoise[0];
    float noiseSize = uNoise[1];

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + uSeed * 512.0, 1024.0 - uSeed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * uSeed) - 0.5;
        color += _noise * noise;
    }

    finalColor.rgb = color;
}`,Sg=`struct OldFilmUniforms {
    uSepia: f32,
    uNoise: vec2<f32>,
    uScratch: vec3<f32>,
    uVignetting: vec3<f32>,
    uSeed: f32,
    uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> oldFilmUniforms : OldFilmUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);

  if (oldFilmUniforms.uSepia > 0.)
  {
    color = vec4<f32>(sepia(color.rgb), color.a);
  }

  let coord: vec2<f32> = uv * gfu.uInputSize.xy / oldFilmUniforms.uDimensions;

  if (oldFilmUniforms.uVignetting[0] > 0.)
  {
    color *= vec4<f32>(vec3<f32>(vignette(color.rgb, coord)), color.a);
  }

  let uScratch = oldFilmUniforms.uScratch; 

  if (uScratch[1] > oldFilmUniforms.uSeed && uScratch[0] != 0.)
  {
    color = vec4<f32>(scratch(color.rgb, coord), color.a);
  }

  let uNoise = oldFilmUniforms.uNoise;

  if (uNoise[0] > 0.0 && uNoise[1] > 0.0)
  {
    color += vec4<f32>(vec3<f32>(noise(uv)), color.a);
  }

  return color;
}

const SQRT_2: f32 = 1.414213;
const SEPIA_RGB: vec3<f32> = vec3<f32>(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

fn rand(co: vec2<f32>) -> f32
{
  return fract(sin(dot(co, vec2<f32>(12.9898, 78.233))) * 43758.5453);
}

fn overlay(src: vec3<f32>, dst: vec3<f32>) -> vec3<f32>
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)

    return vec3<f32>(
      select((1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)), (2.0 * src.x * dst.x), (dst.x <= 0.5)), 
      select((1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)), (2.0 * src.y * dst.y), (dst.y <= 0.5)),
      select((1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)), (2.0 * src.z * dst.z), (dst.z <= 0.5))
    );
}

fn sepia(co: vec3<f32>) -> vec3<f32>
{
  let gray: f32 = (co.x + co.y + co.z) / 3.0;
  let grayscale: vec3<f32> = vec3<f32>(gray);
  let color = overlay(SEPIA_RGB, grayscale);
  return grayscale + oldFilmUniforms.uSepia * (color - grayscale);
}

fn vignette(co: vec3<f32>, coord: vec2<f32>) -> f32
{
  let uVignetting = oldFilmUniforms.uVignetting;
  let uDimensions = oldFilmUniforms.uDimensions;
  
  let outter: f32 = SQRT_2 - uVignetting[0] * SQRT_2;
  var dir: vec2<f32> = vec2<f32>(vec2<f32>(0.5) - coord);
  dir.y *= uDimensions.y / uDimensions.x;
  let darker: f32 = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetting[2] * SQRT_2), 0.0, 1.0);
  return darker + (1.0 - darker) * (1.0 - uVignetting[1]);
}

fn scratch(co: vec3<f32>, coord: vec2<f32>) -> vec3<f32>
{
  var color = co;
  let uScratch = oldFilmUniforms.uScratch;
  let uSeed = oldFilmUniforms.uSeed;
  let uDimensions = oldFilmUniforms.uDimensions;

  let phase: f32 = uSeed * 256.0;
  let s: f32 = modulo(floor(phase), 2.0);
  let dist: f32 = 1.0 / uScratch[1];
  let d: f32 = distance(coord, vec2<f32>(uSeed * dist, abs(s - uSeed * dist)));

  if (d < uSeed * 0.6 + 0.4)
  {
    let period: f32 = uScratch[1] * 10.0;

    let xx: f32 = coord.x * period + phase;
    let aa: f32 = abs(modulo(xx, 0.5) * 4.0);
    let bb: f32 = modulo(floor(xx / 0.5), 2.0);
    let yy: f32 = (1.0 - bb) * aa + bb * (2.0 - aa);

    let kk: f32 = 2.0 * period;
    let dw: f32 = uScratch[2] / uDimensions.x * (0.75 + uSeed);
    let dh: f32 = dw * kk;

    var tine: f32 = (yy - (2.0 - dh));

    if (tine > 0.0) {
        let _sign: f32 = sign(uScratch[0]);

        tine = s * tine / period + uScratch[0] + 0.1;
        tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

        color *= tine;
    }
  }

  return color;
}

fn noise(coord: vec2<f32>) -> f32
{
  let uNoise = oldFilmUniforms.uNoise;
  let uSeed = oldFilmUniforms.uSeed;

  var pixelCoord: vec2<f32> = coord * gfu.uInputSize.xy;
  pixelCoord.x = floor(pixelCoord.x / uNoise[1]);
  pixelCoord.y = floor(pixelCoord.y / uNoise[1]);
  return (rand(pixelCoord * uNoise[1] * uSeed) - 0.5) * uNoise[0];
}`,Cg=Object.defineProperty,wg=(n,t,e)=>t in n?Cg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,li=(n,t,e)=>(wg(n,typeof t!="symbol"?t+"":t,e),e);const Ag=class ml extends L{constructor(t){t={...ml.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Sg,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:bg,name:"old-film-filter"});super({gpuProgram:e,glProgram:r,resources:{oldFilmUniforms:{uSepia:{value:t.sepia,type:"f32"},uNoise:{value:new Float32Array(2),type:"vec2<f32>"},uScratch:{value:new Float32Array(3),type:"vec3<f32>"},uVignetting:{value:new Float32Array(3),type:"vec3<f32>"},uSeed:{value:t.seed,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),li(this,"uniforms"),li(this,"seed"),this.uniforms=this.resources.oldFilmUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uSeed=this.seed,t.applyFilter(this,e,r,i)}get sepia(){return this.uniforms.uSepia}set sepia(t){this.uniforms.uSepia=t}get noise(){return this.uniforms.uNoise[0]}set noise(t){this.uniforms.uNoise[0]=t}get noiseSize(){return this.uniforms.uNoise[1]}set noiseSize(t){this.uniforms.uNoise[1]=t}get scratch(){return this.uniforms.uScratch[0]}set scratch(t){this.uniforms.uScratch[0]=t}get scratchDensity(){return this.uniforms.uScratch[1]}set scratchDensity(t){this.uniforms.uScratch[1]=t}get scratchWidth(){return this.uniforms.uScratch[2]}set scratchWidth(t){this.uniforms.uScratch[2]=t}get vignetting(){return this.uniforms.uVignetting[0]}set vignetting(t){this.uniforms.uVignetting[0]=t}get vignettingAlpha(){return this.uniforms.uVignetting[1]}set vignettingAlpha(t){this.uniforms.uVignetting[1]=t}get vignettingBlur(){return this.uniforms.uVignetting[2]}set vignettingBlur(t){this.uniforms.uVignetting[2]=t}};li(Ag,"DEFAULT_OPTIONS",{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,seed:0});var Tg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uThickness;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uKnockout;

uniform vec4 uInputClamp;

const float DOUBLE_PI = 2. * 3.14159265358979323846264;
const float ANGLE_STEP = \${ANGLE_STEP};

float outlineMaxAlphaAtPos(vec2 pos) {
    if (uThickness.x == 0. || uThickness.y == 0.) {
        return 0.;
    }

    vec4 displacedColor;
    vec2 displacedPos;
    float maxAlpha = 0.;

    for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
        displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
        displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
        displacedColor = texture(uTexture, clamp(displacedPos, uInputClamp.xy, uInputClamp.zw));
        maxAlpha = max(maxAlpha, displacedColor.a);
    }

    return maxAlpha;
}

void main(void) {
    vec4 sourceColor = texture(uTexture, vTextureCoord);
    vec4 contentColor = sourceColor * float(uKnockout < 0.5);
    float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
    vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
    finalColor = contentColor + outlineColor;
}
`,Pg=`struct OutlineUniforms {
  uThickness:vec2<f32>,
  uColor:vec3<f32>,
  uAlpha:f32,
  uAngleStep:f32,
  uKnockout:f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> outlineUniforms : OutlineUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let sourceColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let contentColor: vec4<f32> = sourceColor * (1. - outlineUniforms.uKnockout);
  
  let outlineAlpha: f32 = outlineUniforms.uAlpha * outlineMaxAlphaAtPos(uv) * (1. - sourceColor.a);
  let outlineColor: vec4<f32> = vec4<f32>(vec3<f32>(outlineUniforms.uColor) * outlineAlpha, outlineAlpha);
  
  return contentColor + outlineColor;
}

fn outlineMaxAlphaAtPos(uv: vec2<f32>) -> f32 {
  let thickness = outlineUniforms.uThickness;

  if (thickness.x == 0. || thickness.y == 0.) {
    return 0.;
  }
  
  let angleStep = outlineUniforms.uAngleStep;

  var displacedColor: vec4<f32>;
  var displacedPos: vec2<f32>;

  var maxAlpha: f32 = 0.;
  var displaced: vec2<f32>;
  var curColor: vec4<f32>;

  for (var angle = 0.; angle <= DOUBLE_PI; angle += angleStep)
  {
    displaced.x = uv.x + thickness.x * cos(angle);
    displaced.y = uv.y + thickness.y * sin(angle);
    curColor = textureSample(uTexture, uSampler, clamp(displaced, gfu.uInputClamp.xy, gfu.uInputClamp.zw));
    maxAlpha = max(maxAlpha, curColor.a);
  }

  return maxAlpha;
}

const DOUBLE_PI: f32 = 3.14159265358979323846264 * 2.;`,Fg=Object.defineProperty,Mg=(n,t,e)=>t in n?Fg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Zt=(n,t,e)=>(Mg(n,typeof t!="symbol"?t+"":t,e),e);const Oi=class qt extends L{constructor(...t){let e=t[0]??{};typeof e=="number"&&(F("6.0.0","OutlineFilter constructor params are now options object. See params: { thickness, color, quality, alpha, knockout }"),e={thickness:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.quality=t[2]),t[3]!==void 0&&(e.alpha=t[3]),t[4]!==void 0&&(e.knockout=t[4])),e={...qt.DEFAULT_OPTIONS,...e};const r=e.quality??.1,i=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Pg,entryPoint:"mainFragment"}}),s=U.from({vertex:$,fragment:Tg.replace(/\$\{ANGLE_STEP\}/,qt.getAngleStep(r).toFixed(7)),name:"outline-filter"});super({gpuProgram:i,glProgram:s,resources:{outlineUniforms:{uThickness:{value:new Float32Array(2),type:"vec2<f32>"},uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uAngleStep:{value:0,type:"f32"},uKnockout:{value:e.knockout?1:0,type:"f32"}}}}),Zt(this,"uniforms"),Zt(this,"_thickness"),Zt(this,"_quality"),Zt(this,"_color"),this.uniforms=this.resources.outlineUniforms.uniforms,this.uniforms.uAngleStep=qt.getAngleStep(r),this._color=new G,this.color=e.color??0,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uThickness[0]=this.thickness/e.source.width,this.uniforms.uThickness[1]=this.thickness/e.source.height,t.applyFilter(this,e,r,i)}static getAngleStep(t){return parseFloat((Math.PI*2/Math.max(t*qt.MAX_SAMPLES,qt.MIN_SAMPLES)).toFixed(7))}get thickness(){return this._thickness}set thickness(t){this._thickness=this.padding=t}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}get quality(){return this._quality}set quality(t){this._quality=t,this.uniforms.uAngleStep=qt.getAngleStep(t)}get knockout(){return this.uniforms.uKnockout===1}set knockout(t){this.uniforms.uKnockout=t?1:0}};Zt(Oi,"DEFAULT_OPTIONS",{thickness:1,color:0,alpha:1,quality:.1,knockout:!1});Zt(Oi,"MIN_SAMPLES",1);Zt(Oi,"MAX_SAMPLES",100);var zg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

uniform vec4 uInputSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture(uTexture, vTextureCoord);

    if (uKernelSize == 0)
    {
        finalColor = color;
        return;
    }

    float aspect = uInputSize.y / uInputSize.x;
    vec2 center = uCenter.xy / uInputSize.xy;
    float gradient = uRadius / uInputSize.x * 0.3;
    float radius = uRadius / uInputSize.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            finalColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture(uTexture, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    finalColor = color / float(uKernelSize);
}
`,Ig=`struct RadialBlurUniforms {
  uRadian: f32,
  uCenter: vec2<f32>,
  uKernelSize: f32,
  uRadius: f32,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> radialBlurUniforms : RadialBlurUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uRadian = radialBlurUniforms.uRadian;
  let uCenter = radialBlurUniforms.uCenter;
  let uKernelSize = radialBlurUniforms.uKernelSize;
  let uRadius = radialBlurUniforms.uRadius;
  
  var returnColorOnly = false;

  if (uKernelSize == 0)
  {
    returnColorOnly = true;
  }

  let aspect: f32 = gfu.uInputSize.y / gfu.uInputSize.x;
  let center: vec2<f32> = uCenter.xy / gfu.uInputSize.xy;
  let gradient: f32 = uRadius / gfu.uInputSize.x * 0.3;
  let radius: f32 = uRadius / gfu.uInputSize.x - gradient * 0.5;
  let k: i32 = i32(uKernelSize - 1);

  var coord: vec2<f32> = uv;
  let dir: vec2<f32> = vec2<f32>(center - coord);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * aspect));

  var radianStep: f32 = uRadian;
  
  if (radius >= 0.0 && dist > radius)
  {
    let delta: f32 = dist - radius;
    let gap: f32 = gradient;
    let scale: f32 = 1.0 - abs(delta / gap);
    if (scale <= 0.0) {
      returnColorOnly = true;
    }
    radianStep *= scale;
  }

  radianStep /= f32(k);

  let s: f32 = sin(radianStep);
  let c: f32 = cos(radianStep);
  let rotationMatrix: mat2x2<f32> = mat2x2<f32>(vec2<f32>(c, -s), vec2<f32>(s, c));
  
  var color: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let baseColor = vec4<f32>(color);

  let minK: i32 = min(i32(uKernelSize) - 1, MAX_KERNEL_SIZE - 1);

  for(var i: i32 = 0; i < minK; i += 1) 
  {
    coord -= center;
    coord.y *= aspect;
    coord = rotationMatrix * coord;
    coord.y /= aspect;
    coord += center;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, coord);
    // switch to pre-multiplied alpha to correctly blur transparent images
    // sample.rgb *= sample.a;
    color += sample;
  }

  return select(color / f32(uKernelSize), baseColor, returnColorOnly);
}

const MAX_KERNEL_SIZE: i32 = 2048;`,Og=Object.defineProperty,Rg=(n,t,e)=>t in n?Og(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Pn=(n,t,e)=>(Rg(n,typeof t!="symbol"?t+"":t,e),e);const Eg=class gl extends L{constructor(...t){let e=t[0]??{};if(typeof e=="number"){if(F("6.0.0","RadialBlurFilter constructor params are now options object. See params: { angle, center, kernelSize, radius }"),e={angle:e},t[1]){const s="x"in t[1]?t[1].x:t[1][0],o="y"in t[1]?t[1].y:t[1][1];e.center={x:s,y:o}}t[2]&&(e.kernelSize=t[2]),t[3]&&(e.radius=t[3])}e={...gl.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Ig,entryPoint:"mainFragment"}}),i=U.from({vertex:$,fragment:zg,name:"radial-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{radialBlurUniforms:{uRadian:{value:0,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uKernelSize:{value:e.kernelSize,type:"i32"},uRadius:{value:e.radius,type:"f32"}}}}),Pn(this,"uniforms"),Pn(this,"_angle"),Pn(this,"_kernelSize"),this.uniforms=this.resources.radialBlurUniforms.uniforms,Object.assign(this,e)}_updateKernelSize(){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0}get angle(){return this._angle}set angle(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180,this._updateKernelSize()}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.center.x}set centerX(t){this.center.x=t}get centerY(){return this.center.y}set centerY(t){this.center.y=t}get kernelSize(){return this._kernelSize}set kernelSize(t){this._kernelSize=t,this._updateKernelSize()}get radius(){return this.uniforms.uRadius}set radius(t){this.uniforms.uRadius=t<0||t===1/0?-1:t}};Pn(Eg,"DEFAULT_OPTIONS",{angle:0,center:{x:0,y:0},kernelSize:5,radius:-1});var kg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uMirror;
uniform float uBoundary;
uniform vec2 uAmplitude;
uniform vec2 uWavelength;
uniform vec2 uAlpha;
uniform float uTime;
uniform vec2 uDimensions;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * uInputSize.xy;
    vec2 coord = pixelCoord / uDimensions;

    if (coord.y < uBoundary) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    float k = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
    float areaY = uBoundary * uDimensions.y / uInputSize.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = uMirror > 0.5 ? v : vTextureCoord.y;

    float _amplitude = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / uInputSize.x;
    float _waveLength = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / uInputSize.y;
    float _alpha = (uAlpha.y - uAlpha.x) * k + uAlpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - uTime) * _amplitude;
    x = clamp(x, uInputClamp.x, uInputClamp.z);

    vec4 color = texture(uTexture, vec2(x, y));

    finalColor = color * _alpha;
}
`,Ug=`struct ReflectionUniforms {
  uMirror: f32,
  uBoundary: f32,
  uAmplitude: vec2<f32>,
  uWavelength: vec2<f32>,
  uAlpha: vec2<f32>,
  uTime: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> reflectionUniforms : ReflectionUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uDimensions: vec2<f32> = reflectionUniforms.uDimensions;
  let uBoundary: f32 = reflectionUniforms.uBoundary;
  let uMirror: bool = reflectionUniforms.uMirror > 0.5;
  let uAmplitude: vec2<f32> = reflectionUniforms.uAmplitude;
  let uWavelength: vec2<f32> = reflectionUniforms.uWavelength;
  let uAlpha: vec2<f32> = reflectionUniforms.uAlpha;
  let uTime: f32 = reflectionUniforms.uTime;

  let pixelCoord: vec2<f32> = uv * gfu.uInputSize.xy;
  let coord: vec2<f32> = pixelCoord /uDimensions;
  var returnColorOnly: bool = false;

  if (coord.y < uBoundary) {
    returnColorOnly = true;
  }

  let k: f32 = (coord.y - uBoundary) / (1. - uBoundary + 0.0001);
  let areaY: f32 = uBoundary * uDimensions.y / gfu.uInputSize.y;
  let v: f32 = areaY + areaY - uv.y;
  let y: f32 = select(uv.y, v, uMirror);

  let amplitude: f32 = ((uAmplitude.y - uAmplitude.x) * k + uAmplitude.x ) / gfu.uInputSize.x;
  let waveLength: f32 = ((uWavelength.y - uWavelength.x) * k + uWavelength.x) / gfu.uInputSize.y;
  let alpha: f32 = select((uAlpha.y - uAlpha.x) * k + uAlpha.x, 1., returnColorOnly);

  var x: f32 = uv.x + cos(v * 6.28 / waveLength - uTime) * amplitude;
  x = clamp(x, gfu.uInputClamp.x, gfu.uInputClamp.z);
  
  return textureSample(uTexture, uSampler, select(vec2<f32>(x, y), uv, returnColorOnly)) * alpha;
}

fn rand(co: vec2<f32>) -> f32 
{
  return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}`,Bg=Object.defineProperty,Lg=(n,t,e)=>t in n?Bg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ui=(n,t,e)=>(Lg(n,typeof t!="symbol"?t+"":t,e),e);const Dg=class xl extends L{constructor(t){t={...xl.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Ug,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:kg,name:"reflection-filter"});super({gpuProgram:e,glProgram:r,resources:{reflectionUniforms:{uMirror:{value:t.mirror?1:0,type:"f32"},uBoundary:{value:t.boundary,type:"f32"},uAmplitude:{value:t.amplitude,type:"vec2<f32>"},uWavelength:{value:t.waveLength,type:"vec2<f32>"},uAlpha:{value:t.alpha,type:"vec2<f32>"},uTime:{value:t.time,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}}}}),ui(this,"uniforms"),ui(this,"time",0),this.uniforms=this.resources.reflectionUniforms.uniforms,Object.assign(this,t)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get mirror(){return this.uniforms.uMirror>.5}set mirror(t){this.uniforms.uMirror=t?1:0}get boundary(){return this.uniforms.uBoundary}set boundary(t){this.uniforms.uBoundary=t}get amplitude(){return Array.from(this.uniforms.uAmplitude)}set amplitude(t){this.uniforms.uAmplitude[0]=t[0],this.uniforms.uAmplitude[1]=t[1]}get amplitudeStart(){return this.uniforms.uAmplitude[0]}set amplitudeStart(t){this.uniforms.uAmplitude[0]=t}get amplitudeEnd(){return this.uniforms.uAmplitude[1]}set amplitudeEnd(t){this.uniforms.uAmplitude[1]=t}get waveLength(){return Array.from(this.uniforms.uWavelength)}set waveLength(t){this.uniforms.uWavelength[0]=t[0],this.uniforms.uWavelength[1]=t[1]}get wavelengthStart(){return this.uniforms.uWavelength[0]}set wavelengthStart(t){this.uniforms.uWavelength[0]=t}get wavelengthEnd(){return this.uniforms.uWavelength[1]}set wavelengthEnd(t){this.uniforms.uWavelength[1]=t}get alpha(){return Array.from(this.uniforms.uAlpha)}set alpha(t){this.uniforms.uAlpha[0]=t[0],this.uniforms.uAlpha[1]=t[1]}get alphaStart(){return this.uniforms.uAlpha[0]}set alphaStart(t){this.uniforms.uAlpha[0]=t}get alphaEnd(){return this.uniforms.uAlpha[1]}set alphaEnd(t){this.uniforms.uAlpha[1]=t}};ui(Dg,"DEFAULT_OPTIONS",{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0});var Gg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec4 uInputSize;
uniform vec2 uRed;
uniform vec2 uGreen;
uniform vec2 uBlue;

void main(void)
{
   float r = texture(uTexture, vTextureCoord + uRed/uInputSize.xy).r;
   float g = texture(uTexture, vTextureCoord + uGreen/uInputSize.xy).g;
   float b = texture(uTexture, vTextureCoord + uBlue/uInputSize.xy).b;
   float a = texture(uTexture, vTextureCoord).a;
   finalColor = vec4(r, g, b, a);
}
`,Ng=`struct RgbSplitUniforms {
    uRed: vec2<f32>,
    uGreen: vec2<f32>,
    uBlue: vec3<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> rgbSplitUniforms : RgbSplitUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
    let r = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uRed.x / gfu.uInputSize.x, rgbSplitUniforms.uRed.y / gfu.uInputSize.y)).r;
    let g = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uGreen.x / gfu.uInputSize.x, rgbSplitUniforms.uGreen.y / gfu.uInputSize.y)).g;
    let b = textureSample(uTexture, uSampler, uv + vec2<f32>(rgbSplitUniforms.uBlue.x / gfu.uInputSize.x, rgbSplitUniforms.uBlue.y / gfu.uInputSize.y)).b;
    let a = textureSample(uTexture, uSampler, uv).a;
    return vec4<f32>(r, g, b, a);
}
`,$g=Object.defineProperty,Vg=(n,t,e)=>t in n?$g(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,vl=(n,t,e)=>(Vg(n,typeof t!="symbol"?t+"":t,e),e);const Wg=class yl extends L{constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(F("6.0.0","RGBSplitFilter constructor params are now options object. See params: { red, green, blue }"),e={red:e},t[1]!==void 0&&(e.green=t[1]),t[2]!==void 0&&(e.blue=t[2])),e={...yl.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Ng,entryPoint:"mainFragment"}}),i=U.from({vertex:$,fragment:Gg,name:"rgb-split-filter"});super({gpuProgram:r,glProgram:i,resources:{rgbSplitUniforms:{uRed:{value:e.red,type:"vec2<f32>"},uGreen:{value:e.green,type:"vec2<f32>"},uBlue:{value:e.blue,type:"vec2<f32>"}}}}),vl(this,"uniforms"),this.uniforms=this.resources.rgbSplitUniforms.uniforms,Object.assign(this,e)}get red(){return this.uniforms.uRed}set red(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uRed=t}get redX(){return this.red.x}set redX(t){this.red.x=t}get redY(){return this.red.y}set redY(t){this.red.y=t}get green(){return this.uniforms.uGreen}set green(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uGreen=t}get greenX(){return this.green.x}set greenX(t){this.green.x=t}get greenY(){return this.green.y}set greenY(t){this.green.y=t}get blue(){return this.uniforms.uBlue}set blue(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uBlue=t}get blueX(){return this.blue.x}set blueX(t){this.blue.x=t}get blueY(){return this.blue.y}set blueY(t){this.blue.y=t}};vl(Wg,"DEFAULT_OPTIONS",{red:{x:-10,y:0},green:{x:0,y:10},blue:{x:0,y:0}});var Xg=`
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uCenter;
uniform float uTime;
uniform float uSpeed;
uniform vec4 uWave;

uniform vec4 uInputSize;
uniform vec4 uInputClamp;

const float PI = 3.14159;

void main()
{
    float uAmplitude = uWave[0];
    float uWavelength = uWave[1];
    float uBrightness = uWave[2];
    float uRadius = uWave[3];

    float halfWavelength = uWavelength * 0.5 / uInputSize.x;
    float maxRadius = uRadius / uInputSize.x;
    float currentRadius = uTime * uSpeed / uInputSize.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            finalColor = texture(uTexture, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - uCenter / uInputSize.xy);
    dir.y *= uInputSize.y / uInputSize.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        finalColor = texture(uTexture, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );

    vec2 offset = diffUV * powDiff / uInputSize.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, uInputClamp.xy, uInputClamp.zw);
    vec4 color = texture(uTexture, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // finalColor = texture(uTexture, vTextureCoord + offset);

    color.rgb *= 1.0 + (uBrightness - 1.0) * p * fade;

    finalColor = color;
}
`,Yg=`
struct ShockWaveUniforms {
    uTime: f32,
    uOffset: vec2<f32>,
    uSpeed: f32,
    uWave: vec4<f32>,
};

struct GlobalFilterUniforms {
    uInputSize:vec4<f32>,
    uInputPixel:vec4<f32>,
    uInputClamp:vec4<f32>,
    uOutputFrame:vec4<f32>,
    uGlobalFrame:vec4<f32>,
    uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> shockwaveUniforms : ShockWaveUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {

    let uTime = shockwaveUniforms.uTime;
    let uOffset = shockwaveUniforms.uOffset;
    let uSpeed = shockwaveUniforms.uSpeed;
    let uAmplitude = shockwaveUniforms.uWave[0];
    let uWavelength = shockwaveUniforms.uWave[1];
    let uBrightness = shockwaveUniforms.uWave[2];
    let uRadius = shockwaveUniforms.uWave[3];
    let halfWavelength: f32 = uWavelength * 0.5 / gfu.uInputSize.x;
    let maxRadius: f32 = uRadius / gfu.uInputSize.x;
    let currentRadius: f32 = uTime * uSpeed / gfu.uInputSize.x;
    var fade: f32 = 1.0;
    var returnColorOnly: bool = false;
    
    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            returnColorOnly = true;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }
    var dir: vec2<f32> = vec2<f32>(uv - uOffset / gfu.uInputSize.xy);
    dir.y *= gfu.uInputSize.y / gfu.uInputSize.x;

    let dist:f32 = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        returnColorOnly = true;
    }

    let diffUV: vec2<f32> = normalize(dir);
    let diff: f32 = (dist - currentRadius) / halfWavelength;
    let p: f32 = 1.0 - pow(abs(diff), 2.0);
    let powDiff: f32 = 1.25 * sin(diff * PI) * p * ( uAmplitude * fade );
    let offset: vec2<f32> = diffUV * powDiff / gfu.uInputSize.xy;
    // Do clamp :
    let coord: vec2<f32> = uv + offset;
    let clampedCoord: vec2<f32> = clamp(coord, gfu.uInputClamp.xy, gfu.uInputClamp.zw);

    var clampedColor: vec4<f32> = textureSample(uTexture, uSampler, clampedCoord);
    
    if (boolVec2(coord, clampedCoord)) 
    {
        clampedColor *= max(0.0, 1.0 - length(coord - clampedCoord));
    }
    // No clamp :
    var finalColor = clampedColor;

    return select(finalColor, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn boolVec2(x: vec2<f32>, y: vec2<f32>) -> bool
{
    if (x.x == y.x && x.y == y.y)
    {
        return true;
    }
    
    return false;
}

const PI: f32 = 3.14159265358979323846264;
`,Hg=Object.defineProperty,jg=(n,t,e)=>t in n?Hg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,ci=(n,t,e)=>(jg(n,typeof t!="symbol"?t+"":t,e),e);const qg=class _l extends L{constructor(...t){let e=t[0]??{};(Array.isArray(e)||"x"in e&&"y"in e)&&(F("6.0.0","ShockwaveFilter constructor params are now options object. See params: { center, speed, amplitude, wavelength, brightness, radius, time }"),e={center:e,...t[1]},t[2]!==void 0&&(e.time=t[2])),e={..._l.DEFAULT_OPTIONS,...e};const r=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Yg,entryPoint:"mainFragment"}}),i=U.from({vertex:$,fragment:Xg,name:"shockwave-filter"});super({gpuProgram:r,glProgram:i,resources:{shockwaveUniforms:{uTime:{value:e.time,type:"f32"},uCenter:{value:e.center,type:"vec2<f32>"},uSpeed:{value:e.speed,type:"f32"},uWave:{value:new Float32Array(4),type:"vec4<f32>"}}}}),ci(this,"uniforms"),ci(this,"time"),this.time=0,this.uniforms=this.resources.shockwaveUniforms.uniforms,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uTime=this.time,t.applyFilter(this,e,r,i)}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get speed(){return this.uniforms.uSpeed}set speed(t){this.uniforms.uSpeed=t}get amplitude(){return this.uniforms.uWave[0]}set amplitude(t){this.uniforms.uWave[0]=t}get wavelength(){return this.uniforms.uWave[1]}set wavelength(t){this.uniforms.uWave[1]=t}get brightness(){return this.uniforms.uWave[2]}set brightness(t){this.uniforms.uWave[2]=t}get radius(){return this.uniforms.uWave[3]}set radius(t){this.uniforms.uWave[3]=t}};ci(qg,"DEFAULT_OPTIONS",{center:{x:0,y:0},speed:500,amplitude:30,wavelength:160,brightness:1,radius:-1});var Kg=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform sampler2D uMapTexture;
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uDimensions;

uniform vec4 uInputSize;

void main() {
    vec4 diffuseColor = texture(uTexture, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * uInputSize.xy) / uDimensions;
    vec4 light = texture(uMapTexture, lightCoord);
    vec3 ambient = uColor.rgb * uAlpha;
    vec3 intensity = ambient + light.rgb;
    vec3 color = diffuseColor.rgb * intensity;
    finalColor = vec4(color, diffuseColor.a);
}
`,Zg=`struct SimpleLightmapUniforms {
  uColor: vec3<f32>,
  uAlpha: f32,
  uDimensions: vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> simpleLightmapUniforms : SimpleLightmapUniforms;
@group(1) @binding(1) var uMapTexture: texture_2d<f32>;
@group(1) @binding(2) var uMapSampler: sampler;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>,
) -> @location(0) vec4<f32> {
  let uColor = simpleLightmapUniforms.uColor;
  let uAlpha = simpleLightmapUniforms.uAlpha;
  let uDimensions = simpleLightmapUniforms.uDimensions;

  let diffuseColor: vec4<f32> = textureSample(uTexture, uSampler, uv);
  let lightCoord: vec2<f32> = (uv * gfu.uInputSize.xy) / simpleLightmapUniforms.uDimensions;
  let light: vec4<f32> = textureSample(uMapTexture, uMapSampler, lightCoord);
  let ambient: vec3<f32> = uColor * uAlpha;
  let intensity: vec3<f32> = ambient + light.rgb;
  let finalColor: vec3<f32> = diffuseColor.rgb * intensity;
  return vec4<f32>(finalColor, diffuseColor.a);
}`,Qg=Object.defineProperty,Jg=(n,t,e)=>t in n?Qg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Fn=(n,t,e)=>(Jg(n,typeof t!="symbol"?t+"":t,e),e);const tx=class bl extends L{constructor(...t){let e=t[0]??{};if(e instanceof O&&(F("6.0.0","SimpleLightmapFilter constructor params are now options object. See params: { lightMap, color, alpha }"),e={lightMap:e},t[1]!==void 0&&(e.color=t[1]),t[2]!==void 0&&(e.alpha=t[2])),e={...bl.DEFAULT_OPTIONS,...e},!e.lightMap)throw Error("No light map texture source was provided to SimpleLightmapFilter");const r=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:Zg,entryPoint:"mainFragment"}}),i=U.from({vertex:$,fragment:Kg,name:"simple-lightmap-filter"});super({gpuProgram:r,glProgram:i,resources:{simpleLightmapUniforms:{uColor:{value:new Float32Array(3),type:"vec3<f32>"},uAlpha:{value:e.alpha,type:"f32"},uDimensions:{value:new Float32Array(2),type:"vec2<f32>"}},uMapTexture:e.lightMap.source,uMapSampler:e.lightMap.source.style}}),Fn(this,"uniforms"),Fn(this,"_color"),Fn(this,"_lightMap"),this.uniforms=this.resources.simpleLightmapUniforms.uniforms,this._color=new G,this.color=e.color??0,Object.assign(this,e)}apply(t,e,r,i){this.uniforms.uDimensions[0]=e.frame.width,this.uniforms.uDimensions[1]=e.frame.height,t.applyFilter(this,e,r,i)}get lightMap(){return this._lightMap}set lightMap(t){this._lightMap=t,this.resources.uMapTexture=t.source,this.resources.uMapSampler=t.source.style}get color(){return this._color.value}set color(t){this._color.setValue(t);const[e,r,i]=this._color.toArray();this.uniforms.uColor[0]=e,this.uniforms.uColor[1]=r,this.uniforms.uColor[2]=i}get alpha(){return this.uniforms.uAlpha}set alpha(t){this.uniforms.uAlpha=t}};Fn(tx,"DEFAULT_OPTIONS",{lightMap:O.WHITE,color:0,alpha:1});var ex=`in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uBlur;
uniform vec2 uStart;
uniform vec2 uEnd;
uniform vec2 uDelta;
uniform vec2 uDimensions;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float blur = uBlur[0];
    float gradientBlur = uBlur[1];

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(uStart.y - uEnd.y, uEnd.x - uStart.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * uDimensions - uStart, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture(uTexture, vTextureCoord + uDelta / uDimensions * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    finalColor = color;
}
`,nx=`struct TiltShiftUniforms {
  uBlur: vec2<f32>,
  uStart: vec2<f32>,
  uEnd: vec2<f32>,
  uDelta: vec2<f32>,
  uDimensions: vec2<f32>,
};

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> tiltShiftUniforms : TiltShiftUniforms;

@fragment
fn mainFragment(
  @builtin(position) position: vec4<f32>,
  @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uBlur = tiltShiftUniforms.uBlur[0];
  let uBlurGradient = tiltShiftUniforms.uBlur[1];
  let uStart = tiltShiftUniforms.uStart;
  let uEnd = tiltShiftUniforms.uEnd;
  let uDelta = tiltShiftUniforms.uDelta;
  let uDimensions = tiltShiftUniforms.uDimensions;

  var color: vec4<f32> = vec4<f32>(0.0);
  var total: f32 = 0.0;

  let offset: f32 = random(position, vec3<f32>(12.9898, 78.233, 151.7182), 0.0);
  let normal: vec2<f32> = normalize(vec2<f32>(uStart.y - uEnd.y, uEnd.x - uStart.x));
  let radius: f32 = smoothstep(0.0, 1.0, abs(dot(uv * uDimensions - uStart, normal)) / uBlurGradient) * uBlur;

  for (var t: f32 = -30.0; t <= 30.0; t += 1.0)
  {
    var percent: f32 = (t + offset - 0.5) / 30.0;
    var weight: f32 = 1.0 - abs(percent);
    var sample: vec4<f32> = textureSample(uTexture, uSampler, uv + uDelta / uDimensions * percent * radius);
    sample = vec4<f32>(sample.xyz * sample.a, sample.a); // multiply sample.rgb with sample.a
    color += sample * weight;
    total += weight;
  }

  color /= total;
  color = vec4<f32>(color.xyz / (color.a + 0.00001), color.a); // divide color.rgb by color.a + 0.00001

  return color;
}


fn random(position: vec4<f32>, scale: vec3<f32>, seed: f32) -> f32
{
  return fract(sin(dot(position.xyz + seed, scale)) * 43758.5453 + seed);
}`,rx=Object.defineProperty,ix=(n,t,e)=>t in n?rx(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,hi=(n,t,e)=>(ix(n,typeof t!="symbol"?t+"":t,e),e);const sx=class Sl extends L{constructor(t){const{width:e,height:r}=Md.defaultOptions;t={...Sl.DEFAULT_OPTIONS,start:{x:0,y:r/2},end:{x:e,y:r/2},...t};const i=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:nx,entryPoint:"mainFragment"}}),s=U.from({vertex:$,fragment:ex,name:"tilt-shift-axis-filter"});super({gpuProgram:i,glProgram:s,resources:{tiltShiftUniforms:{uBlur:{value:new Float32Array([t.blur,t.gradientBlur]),type:"vec2<f32>"},uStart:{value:t.start,type:"vec2<f32>"},uEnd:{value:t.end,type:"vec2<f32>"},uDelta:{value:new Float32Array([0,0]),type:"vec2<f32>"},uDimensions:{value:new Float32Array([e,r]),type:"vec2<f32>"}}}}),hi(this,"uniforms"),hi(this,"_tiltAxis"),this.uniforms=this.resources.tiltShiftUniforms.uniforms,this._tiltAxis=t.axis}updateDimensions(t){const{uDimensions:e}=this.uniforms;e[0]=t.frame.width,e[1]=t.frame.height}updateDelta(){if(this.uniforms.uDelta[0]=0,this.uniforms.uDelta[1]=0,this._tiltAxis===void 0)return;const t=this.uniforms.uEnd,e=this.uniforms.uStart,r=t.x-e.x,i=t.y-e.y,s=Math.sqrt(r*r+i*i),o=this._tiltAxis==="vertical";this.uniforms.uDelta[0]=o?-i/s:r/s,this.uniforms.uDelta[1]=o?r/s:i/s}};hi(sx,"DEFAULT_OPTIONS",{blur:100,gradientBlur:600});var ox=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uTwist;
uniform vec2 uOffset;
uniform vec4 uInputSize;

vec2 mapCoord( vec2 coord )
{
    coord *= uInputSize.xy;
    coord += uInputSize.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= uInputSize.zw;
    coord /= uInputSize.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= uOffset;

    float dist = length(coord);
    float uRadius = uTwist[0];
    float uAngle = uTwist[1];

    if (dist < uRadius)
    {
        float ratioDist = (uRadius - dist) / uRadius;
        float angleMod = ratioDist * ratioDist * uAngle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += uOffset;

    return coord;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);
    coord = twist(coord);
    coord = unmapCoord(coord);
    finalColor = texture(uTexture, coord);
}
`,ax=`struct TwistUniforms {
  uTwist:vec2<f32>,
  uOffset:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> twistUniforms : TwistUniforms;

@fragment
fn mainFragment(
  @location(0) uv: vec2<f32>,
  @builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {
  return textureSample(uTexture, uSampler, unmapCoord(twist(mapCoord(uv))));
}

fn mapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord *= gfu.uInputSize.xy;
  mappedCoord += gfu.uOutputFrame.xy;
  return mappedCoord;
}

fn unmapCoord(coord: vec2<f32> ) -> vec2<f32>
{
  var mappedCoord: vec2<f32> = coord;
  mappedCoord -= gfu.uOutputFrame.xy;
  mappedCoord /= gfu.uInputSize.xy;
  return mappedCoord;
}

fn twist(coord: vec2<f32>) -> vec2<f32>
{
  var twistedCoord: vec2<f32> = coord;
  let uRadius = twistUniforms.uTwist[0];
  let uAngle = twistUniforms.uTwist[1];
  let uOffset = twistUniforms.uOffset;

  twistedCoord -= uOffset;
  
  let dist = length(twistedCoord);

  if (dist < uRadius)
  {
    let ratioDist: f32 = (uRadius - dist) / uRadius;
    let angleMod: f32 = ratioDist * ratioDist * uAngle;
    let s: f32 = sin(angleMod);
    let c: f32 = cos(angleMod);
    twistedCoord = vec2<f32>(twistedCoord.x * c - twistedCoord.y * s, twistedCoord.x * s + twistedCoord.y * c);
  }

  twistedCoord += uOffset;
  return twistedCoord;
}
`,lx=Object.defineProperty,ux=(n,t,e)=>t in n?lx(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Cl=(n,t,e)=>(ux(n,typeof t!="symbol"?t+"":t,e),e);const cx=class wl extends L{constructor(t){t={...wl.DEFAULT_OPTIONS,...t};const e=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:ax,entryPoint:"mainFragment"}}),r=U.from({vertex:$,fragment:ox,name:"twist-filter"});super({gpuProgram:e,glProgram:r,resources:{twistUniforms:{uTwist:{value:[t.radius??0,t.angle??0],type:"vec2<f32>"},uOffset:{value:t.offset,type:"vec2<f32>"}}},...t}),Cl(this,"uniforms"),this.uniforms=this.resources.twistUniforms.uniforms}get radius(){return this.uniforms.uTwist[0]}set radius(t){this.uniforms.uTwist[0]=t}get angle(){return this.uniforms.uTwist[1]}set angle(t){this.uniforms.uTwist[1]=t}get offset(){return this.uniforms.uOffset}set offset(t){this.uniforms.uOffset=t}get offsetX(){return this.offset.x}set offsetX(t){this.offset.x=t}get offsetY(){return this.offset.y}set offsetY(t){this.offset.y=t}};Cl(cx,"DEFAULT_OPTIONS",{padding:20,radius:200,angle:4,offset:{x:0,y:0}});var hx=`precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform float uStrength;
uniform vec2 uCenter;
uniform vec2 uRadii;

uniform vec4 uInputSize;

const float MAX_KERNEL_SIZE = \${MAX_KERNEL_SIZE};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {
    float minGradient = uRadii[0] * 0.3;
    float innerRadius = (uRadii[0] + minGradient * 0.5) / uInputSize.x;

    float gradient = uRadii[1] * 0.3;
    float radius = (uRadii[1] - gradient * 0.5) / uInputSize.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / uInputSize.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * uInputSize.y / uInputSize.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / uInputSize.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture(uTexture, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture(uTexture, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,fx=`struct ZoomBlurUniforms {
    uStrength:f32,
    uCenter:vec2<f32>,
    uRadii:vec2<f32>,
};

struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

@group(0) @binding(1) var uTexture: texture_2d<f32>; 
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> zoomBlurUniforms : ZoomBlurUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
) -> @location(0) vec4<f32> {
  let uStrength = zoomBlurUniforms.uStrength;
  let uCenter = zoomBlurUniforms.uCenter;
  let uRadii = zoomBlurUniforms.uRadii;

  let minGradient: f32 = uRadii[0] * 0.3;
  let innerRadius: f32 = (uRadii[0] + minGradient * 0.5) / gfu.uInputSize.x;

  let gradient: f32 = uRadii[1] * 0.3;
  let radius: f32 = (uRadii[1] - gradient * 0.5) / gfu.uInputSize.x;

  let MAX_KERNEL_SIZE: f32 = \${MAX_KERNEL_SIZE};

  var countLimit: f32 = MAX_KERNEL_SIZE;

  var dir: vec2<f32> = vec2<f32>(uCenter / gfu.uInputSize.xy - uv);
  let dist: f32 = length(vec2<f32>(dir.x, dir.y * gfu.uInputSize.y / gfu.uInputSize.x));

  var strength: f32 = uStrength;

  var delta: f32 = 0.0;
  var gap: f32;

  if (dist < innerRadius) {
      delta = innerRadius - dist;
      gap = minGradient;
  } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
      delta = dist - radius;
      gap = gradient;
  }

  var returnColorOnly: bool = false;

  if (delta > 0.0) {
    let normalCount: f32 = gap / gfu.uInputSize.x;
    delta = (normalCount - delta) / normalCount;
    countLimit *= delta;
    strength *= delta;
    
    if (countLimit < 1.0)
    {
      returnColorOnly = true;;
    }
  }

  // randomize the lookup values to hide the fixed number of samples
  let offset: f32 = rand(uv, 0.0);

  var total: f32 = 0.0;
  var color: vec4<f32> = vec4<f32>(0.);

  dir *= strength;

  for (var t = 0.0; t < MAX_KERNEL_SIZE; t += 1.0) {
    let percent: f32 = (t + offset) / MAX_KERNEL_SIZE;
    let weight: f32 = 4.0 * (percent - percent * percent);
    let p: vec2<f32> = uv + dir * percent;
    let sample: vec4<f32> = textureSample(uTexture, uSampler, p);
    
    if (t < countLimit)
    {
      color += sample * weight;
      total += weight;
    }
  }

  color /= total;

  return select(color, textureSample(uTexture, uSampler, uv), returnColorOnly);
}

fn modulo(x: f32, y: f32) -> f32
{
  return x - y * floor(x/y);
}

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
fn rand(co: vec2<f32>, seed: f32) -> f32
{
  let a: f32 = 12.9898;
  let b: f32 = 78.233;
  let c: f32 = 43758.5453;
  let dt: f32 = dot(co + seed, vec2<f32>(a, b));
  let sn: f32 = modulo(dt, 3.14159);
  return fract(sin(sn) * c + seed);
}`,dx=Object.defineProperty,px=(n,t,e)=>t in n?dx(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,Al=(n,t,e)=>(px(n,typeof t!="symbol"?t+"":t,e),e);const mx=class Tl extends L{constructor(t){t={...Tl.DEFAULT_OPTIONS,...t};const e=t.maxKernelSize??32,r=k.from({vertex:{source:V,entryPoint:"mainVertex"},fragment:{source:fx.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),entryPoint:"mainFragment"}}),i=U.from({vertex:$,fragment:hx.replace("${MAX_KERNEL_SIZE}",e.toFixed(1)),name:"zoom-blur-filter"});super({gpuProgram:r,glProgram:i,resources:{zoomBlurUniforms:{uStrength:{value:t.strength,type:"f32"},uCenter:{value:t.center,type:"vec2<f32>"},uRadii:{value:new Float32Array(2),type:"vec2<f32>"}}}}),Al(this,"uniforms"),this.uniforms=this.resources.zoomBlurUniforms.uniforms,Object.assign(this,t)}get strength(){return this.uniforms.uStrength}set strength(t){this.uniforms.uStrength=t}get center(){return this.uniforms.uCenter}set center(t){Array.isArray(t)&&(t={x:t[0],y:t[1]}),this.uniforms.uCenter=t}get centerX(){return this.uniforms.uCenter.x}set centerX(t){this.uniforms.uCenter.x=t}get centerY(){return this.uniforms.uCenter.y}set centerY(t){this.uniforms.uCenter.y=t}get innerRadius(){return this.uniforms.uRadii[0]}set innerRadius(t){this.uniforms.uRadii[0]=t}get radius(){return this.uniforms.uRadii[1]}set radius(t){this.uniforms.uRadii[1]=t<0||t===1/0?-1:t}};Al(mx,"DEFAULT_OPTIONS",{strength:.1,center:{x:0,y:0},innerRadius:0,radius:-1,maxKernelSize:32});const P={ceilSize:64,halfCeilSize:32,playground:{offset:{left:120,right:120,top:120,bottom:120},shadow:{offset:{x:8,y:12},color:65535,alpha:.25},border:{width:6,offset:6,borderRadius:32,color:16711935},protector:{width:12,color:65280,alpha:.5}},ball:{startSpeed:.5,maxSpeed:3,accRate:1.002,startPower:1},startStat:{balls:3,score:0},bulletSpeed:2};class gx extends At{constructor(t,e,r){super(Z.bricks.textures[r]),this.anchor.set(.5),this.position.set(t,e),this.left=this.position.x-P.ceilSize-P.halfCeilSize,this.right=this.position.x+P.ceilSize+P.halfCeilSize,this.top=this.position.y-P.ceilSize,this.bottom=this.position.y+P.ceilSize,this.hp=+r,this.hp||(this.hp=1/0)}getHit(){if(isFinite(this.hp)){if(this.hp-=this.parent.parent.ballPower,this.hp<1)return this.broke();this.texture=Z.bricks.textures["0"+this.hp]}}broke(){this.parent.removeChild(this),this.destroy()}}const xx=.02,vx=-.5,zr=.002;class js extends At{constructor(t,e,r){super(Z.bonuses.textures[r]),this.anchor.set(.5),this.position.set(t,e),this.alpha=.75,this.isScaleUp=!1,this.isCollected=!1,this.speed=vx,this.type=r,Ii(this)}tick(t){if(this.isCollected){this.position.y-=t.elapsedMS;const e=t.elapsedMS*zr;return this.scale.x+=e,this.scale.y+=e,this.alpha-=e,this.alpha<.1?this.kill():void 0}if(this.position.y+=this.speed*t.elapsedMS,this.speed+=xx,this.isScaleUp?(this.scale.x+=t.elapsedMS*zr,this.scale.x>1&&(this.scale.x=1,this.isScaleUp=!1)):(this.scale.x-=t.elapsedMS*zr,this.scale.x<.1&&(this.scale.x=.1,this.isScaleUp=!0)),this.position.y>this.parent.platform.bottom)return this.kill();if(this.position.x>this.parent.platform.left&&this.position.x<this.parent.platform.right&&this.position.y>this.parent.platform.top&&this.position.y<this.parent.platform.bottom){switch(this.type){case"size_add":this.parent.platform.resize(!0);break;case"size_sub":this.parent.platform.resize(!1);break;case"stop":this.parent.platform.frize();break;case"speed_ball":this.parent.balls.children.forEach(e=>e.accelerate());break;case"slow_ball":this.parent.balls.children.forEach(e=>e.slowdown());break;case"protection":this.parent.sidePoints.children.forEach(e=>e.protect());break;case"life":this.parent.addBall(1);break;case"bullets":this.parent.sidePoints.children[0].shut();break;case"balls":this.parent.addBall(3);break;case"power":this.parent.ballPower++;break}this.isCollected=!0,this.scale.x=1}}kill(){Da(this),this.parent.removeChild(this),this.destroy()}}class yx extends Ye{constructor(t,e,r){super(Z.bricks.animations[r==="?@"?"bonus":"fire"]),this.anchor.set(.5),this.position.set(t,e),this.type=r,this.left=this.position.x-P.ceilSize-P.halfCeilSize,this.right=this.position.x+P.ceilSize+P.halfCeilSize,this.top=this.position.y-P.ceilSize,this.bottom=this.position.y+P.ceilSize,r==="!*"?this.play():this.gotoAndPlay(Math.floor(Math.random()*this.textures.length))}getHit(){if(this.type==="?@"){const t=["size_add","slow_ball","protection","life","bullets","balls","power"],e=t[Math.floor(Math.random()*t.length)];this.parent.parent.addChild(new js(this.position.x,this.position.y,e))}else{const t=["size_sub","stop","speed_ball"],e=t[Math.floor(Math.random()*t.length)];this.parent.parent.addChild(new js(this.position.x,this.position.y,e))}this.parent.removeChild(this),this.destroy()}}class _x extends At{constructor(t,e,r){super(Z.platform.textures["p_"+e]),this.anchor.set(.5),this.position.set(r*.5,t),this.size=e,this.halfWidth=(this.size+2)*P.halfCeilSize,this.halfBoundsWidth=this.halfWidth+P.halfCeilSize,this.updateBounds(),this.levelWidth=r,this.offsetX=null,this.sceneScale=null,this.sceneScaleRate=null,this.minX=null,this.maxX=null,this.isActive=!0,Ze.on(Qe.pointerMove,this.move,this)}resize(t){t&&this.size===9||!t&&this.size===0||(this.size+=t?1:-1,this.halfWidth=(this.size+2)*P.halfCeilSize,this.halfBoundsWidth=this.halfWidth+P.halfCeilSize,this.updateBounds(),this.minX=this.offsetX+this.halfWidth*this.sceneScale,this.maxX=(this.levelWidth-this.halfWidth)*this.sceneScale+this.offsetX,this.position.x<this.halfWidth?this.position.x=this.halfWidth:this.position.x+this.halfWidth>this.levelWidth&&(this.position.x=this.levelWidth-this.halfWidth),this.texture=Z.platform.textures["p_"+this.size])}frize(){this.isActive=!1,setTimeout(()=>this.isActive=!0,3e3)}updateBounds(){this.left=this.position.x-this.halfBoundsWidth,this.right=this.position.x+this.halfBoundsWidth,this.top=this.position.y-P.ceilSize,this.bottom=this.position.y+P.ceilSize}setSceneSizes(t,e){this.offsetX=t,this.sceneScale=e,this.sceneScaleRate=1/e,this.minX=t+this.halfWidth*e,this.maxX=(this.levelWidth-this.halfWidth)*e+t}move(t){this.sceneScale===null||this.isActive===!1||(t.globalX<this.minX?this.position.x=this.halfWidth:t.globalX>this.maxX?this.position.x=this.levelWidth-this.halfWidth:this.position.x=(t.globalX-this.offsetX)*this.sceneScaleRate,this.updateBounds())}}class qs extends At{constructor(t,e,r,i,s){super(Z.platform.textures.ball),this.anchor.set(.5),this.position.set(e*.5,t-P.ceilSize),this.minX=P.halfCeilSize,this.minY=P.halfCeilSize,this.maxX=e-P.halfCeilSize,this.maxY=r-P.halfCeilSize,this.bricks=i,this.platform=s,this.speed=P.ball.startSpeed,this.acc=P.ball.accRate,this.direction=-Math.PI*.75+Math.random()*Math.PI*.5,this.dx=Math.cos(this.direction),this.dy=Math.sin(this.direction),Ii(this)}getBounceX(t){this.dx*=-1,this.speed*=this.acc,this.speed>P.ball.maxSpeed&&(this.speed=P.ball.maxSpeed),this.position.x=t}getBounceY(t){this.dy*=-1,this.speed*=this.acc,this.speed>P.ball.maxSpeed&&(this.speed=P.ball.maxSpeed),this.position.y=t}move(){this.path<P.halfCeilSize?(this.position.x+=this.dx*this.path,this.position.y+=this.dy*this.path,this.path=0):(this.position.x+=this.dx*P.halfCeilSize,this.position.y+=this.dy*P.halfCeilSize,this.path-=P.halfCeilSize);let t=null;if(this.bricks.forEach(e=>{t||this.position.x>e.left&&this.position.x<e.right&&this.position.y>e.top&&this.position.y<e.bottom&&(t=e,e.getHit())}),t){const e=this.position.x-t.left,r=t.right-this.position.x,i=this.position.y-t.top,s=t.bottom-this.position.y,o=Math.min(e,r,i,s);o===e?this.getBounceX(t.left):o===r?this.getBounceX(t.right):o===i?this.getBounceY(t.top):this.getBounceY(t.bottom);return}if(this.y<this.minY)return this.getBounceY(this.minY);if(this.x<this.minX)return this.getBounceX(this.minX);if(this.x>this.maxX)return this.getBounceX(this.maxX);if(this.y>this.maxY)return this.parent.parent.protect.isActive?this.getBounceY(this.maxY):this.kill();if(this.y>this.platform.top&&this.x>this.platform.left&&this.x<this.platform.right){this.getBounceY(this.platform.top);const r=(this.position.x-this.platform.position.x)/this.platform.width*.75,i=this.dx+=r,s=i/this.dx;this.dy*=s,this.dx=i}}tick(t){for(this.path=this.speed*t.elapsedMS;this.path;)this.move()}kill(){this.path=0,Da(this),this.destroy()}accelerate(){this.speed*=this.acc*2,this.speed>P.ball.maxSpeed&&(this.speed=P.ball.maxSpeed)}slowdown(){this.speed=.5}}class bx extends Ye{constructor(t,e){super(Z.side.animations.open),this.anchor.set(.5),this.position.set(t,e),this.loop=!1}protect(){this.play(),this.onComplete=()=>{this.textures=Z.side.animations.close,console.log(this.parent.parent.protect),!this.parent.parent.protect.isActive&&this.parent.parent.protect.activate()}}shut(){this.play(),this.onComplete=()=>{this.textures=Z.side.animations.close,console.log(this.parent.parent.protect),!this.parent.parent.protect.isActive&&this.parent.parent.protect.activate()}}close(){this.play(),this.onComplete=()=>{this.textures=Z.side.animations.open}}}class Sx extends Xe{constructor(){super(),this.color=P.playground.protector.color,this.alpha=P.playground.protector.alpha,this.radius=P.playground.protector.width,this.leftPoint=null,this.rightPoint=null,this.isActive=!1}initPoint(t,e){this.leftPoint?this.rightPoint={x:t,y:e}:this.leftPoint={x:t,y:e}}activate(){this.isActive=!0,this.roundRect(this.leftPoint.x-this.radius,this.leftPoint.y-this.radius,this.rightPoint.x-this.radius,this.radius+this.radius,this.halfWidth),this.fill(this.color),setTimeout(()=>this.deactivate(),5e3)}deactivate(){this.isActive=!1,this.clear(),this.parent.sidePoints.children.forEach(t=>t.close())}}class Cx extends J{constructor(t,e){super(),gt.load(`./levels/level_${e}.json`).then(this.setup.bind(this)),this.levelSizes=null,this.screenData=t,this.dropShadowFilter=new $m,this.dropShadowFilter.color=P.playground.shadow.color,this.dropShadowFilter.alpha=P.playground.shadow.alpha,this.filters=[this.dropShadowFilter],this.border=new Xe,this.addChild(this.border),this.platform=null,this.ballPower=P.ball.startPower,this.balls=new J,this.addChild(this.balls),this.bricks=new J,this.addChild(this.bricks),this.sidePoints=new J,this.addChild(this.sidePoints),this.protect=new Sx,this.addChild(this.protect),Ze.on(Qe.screenResize,this.screenResize,this)}screenResize(t){if(t&&(this.screenData=t),this.levelSizes){const e=P.playground.offset.left+P.playground.offset.right,r=P.playground.offset.top+P.playground.offset.bottom,i=this.screenData.width-e,s=this.screenData.height-r,o=i/this.levelSizes.width,a=s/this.levelSizes.height;let l=o>a?a:o;l>1&&(l=1),this.scale.set(l),this.position.x=(this.screenData.width-this.levelSizes.width*l)*.5,this.position.y=(this.screenData.height-this.levelSizes.height*l)*.5,this.platform&&this.platform.setSceneSizes(this.position.x,l),this.border.clear(),this.border.roundRect(-P.playground.border.offset,-P.playground.border.offset,this.levelSizes.width+P.playground.border.offset*2,this.levelSizes.height+P.playground.border.offset*2,P.playground.border.borderRadius),this.border.stroke({width:P.playground.border.width,color:P.playground.border.color}),this.dropShadowFilter.offset.x=P.playground.shadow.offset.x*l,this.dropShadowFilter.offset.y=P.playground.shadow.offset.y*l}}setup(t){const e=t.map,r=e[0].length*P.halfCeilSize,i=e.length*P.ceilSize;e.forEach((s,o)=>{for(let a=0;a<s.length;a++){if(s[a]==="["){const l=P.halfCeilSize*a+P.ceilSize,u=P.ceilSize*o+P.halfCeilSize,c=s[a+1]+s[a+2];switch(c){case"01":case"02":case"03":case"04":case"05":case"06":case"07":case"08":case"09":case"10":case"xx":this.bricks.addChild(new gx(l,u,c));break;case"?@":case"!*":this.bricks.addChild(new yx(l,u,c));break}}if(s[a]==="("){const l=P.halfCeilSize*a+P.halfCeilSize,u=P.ceilSize*o+P.halfCeilSize;if(s[a+1]===")")this.sidePoints.addChild(new bx(l,u)),this.protect.initPoint(l,u);else{let c=-1,h=a+1;for(;s[h]==="=";)c++,h+=2;this.platform=new _x(u,c,r),this.addChild(this.platform),this.balls.addChild(new qs(u,r,i,this.bricks.children,this.platform))}}}}),this.levelSizes={width:r,height:i},this.screenResize()}addBall(t=1){for(let e=0;e<t;e++)this.balls.addChild(new qs(this.platform.position.y,this.levelSizes.width,this.levelSizes.height,this.bricks.children,this.platform))}}class wx extends J{constructor(t){super(),this.addChild(new Cx(t,1))}}const Ax=navigator.language||navigator.userLanguage;~Ax.indexOf("ru");function Tx(){Dn.isRealYandex&&Dn.isLangRu;const n=La();ni(new op(n));const t=new wx(n);ni(t),Mi()}gt.addBundle("fonts",dt);gt.loadBundle("fonts").then(n=>{for(let t in n)dt[t]=n[t].family;zd(),np(Pl)});function Pl(){var n;Dn.isReady?((n=Dn.SDK.features.LoadingAPI)==null||n.ready(),Tx()):setTimeout(Pl,200)}export{_u as $,Go as A,xt as B,J as C,j as D,M as E,L as F,k as G,oo as H,bt as I,Ot as J,Ki as K,At as L,D as M,Nu as N,Qu as O,at as P,nt as Q,Rn as R,Ku as S,St as T,In as U,gc as V,Pd as W,Fd as X,rt as Y,Qi as Z,ts as _,ut as a,ir as a0,G as a1,uo as a2,No as a3,Md as a4,bc as a5,$c as a6,ah as a7,uh as a8,ph as a9,gh as aa,xh as ab,ve as ac,F as ad,N as ae,ct as af,af as ag,ra as ah,cs as ai,ls as aj,Vl as ak,Es as al,df as am,Xe as an,K as ao,Xl as ap,Qr as aq,Zr as ar,Os as as,zn as at,oa as au,Uc as b,Ve as c,vn as d,ft as e,us as f,Rc as g,xi as h,Bo as i,gi as j,vt as k,$n as l,Is as m,oh as n,lh as o,fh as p,Ho as q,iu as r,mh as s,Vn as t,O as u,Wl as v,tt as w,U as x,yh as y,kt as z};
