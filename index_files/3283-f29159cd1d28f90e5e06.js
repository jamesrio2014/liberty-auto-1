(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3283],{67154:function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t},37316:function(e){e.exports=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}},21249:function(e,t,r){"use strict";var n=r(82109),i=r(42092).map,o=r(81194),a=r(29207),l=o("map"),u=a("map");n({target:"Array",proto:!0,forced:!l||!u},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},69135:function(e,t,r){e.exports=r(43237)},98771:function(e,t,r){"use strict";var n=r(61682);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e,t){var r=a.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o(o({},n),e));var i=n=o(o({},n),t);if(i.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(i.suspense)return r(i);n.loadableGenerated&&delete(n=o(o({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(r,n);delete n.ssr}return r(n)};l(r(67294));var a=l(r(54860));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},91083:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=i},54860:function(e,t,r){"use strict";var n=r(2553),i=r(62012),o=r(61682);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d,c=(d=r(67294))&&d.__esModule?d:{default:d},m=r(67161),f=r(91083);var b=[],p=[],h=!1;function g(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var v=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l(l({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function F(e){return function(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=c.default.lazy(r.loader));var n=null;function i(){if(!n){var t=new v(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!h&&"function"===typeof r.webpack&&!r.suspense){var o=r.webpack();p.push((function(e){var t,r=u(o);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return i()}}catch(a){r.e(a)}finally{r.f()}}))}var a=r.suspense?function(e,t){return c.default.createElement(r.lazy,l(l({},e),{},{ref:t}))}:function(e,t){i();var o=c.default.useContext(f.LoadableContext),a=m.useSubscription(n);return c.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),c.default.useMemo((function(){return a.loading||a.error?c.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?c.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return a.preload=function(){return!r.suspense&&i()},a.displayName="LoadableComponent",c.default.forwardRef(a)}(g,e)}function y(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return y(e,t)}))}F.preloadAll=function(){return new Promise((function(e,t){y(b).then(e,t)}))},F.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return h=!0,t()};y(p,e).then(r,r)}))},window.__NEXT_PRELOADREADY=F.preloadReady;var x=F;t.default=x},99607:function(e,t,r){"use strict";r.d(t,{m:function(){return u}});r(82526),r(82772),r(19601),r(47941);var n=r(67294),i=r(94184),o=r.n(i);r(34146);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=function(e){var t=e.children,r=e.className,i=l(e,["children","className"]);return n.createElement("span",a({className:o()("lmig-A11yOnly",r)},i),t)}},72890:function(e,t,r){"use strict";r.d(t,{z:function(){return s}});r(82526),r(82772),r(19601),r(47941);var n=r(67294),i=r(94184),o=r.n(i),a=r(32978);r(32562);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=function(e){var t=e.id,r=e.type,i=e.href,s=e.size,d=e.dynamicWidth,c=e.isLargeOnMobile,m=e.variant,f=e.disabled,b=e.onClick,p=e.className,h=e.custom,g=e.children,v=u(e,["id","type","href","size","dynamicWidth","isLargeOnMobile","variant","disabled","onClick","className","custom","children"]),F=o()("lmig-Button","lmig-Button--".concat(s),"lmig-Button--".concat(m),{"lmig-Button--dynamicWidth":d},{"lmig-Button--isLargeOnMobile":c},p);return n.createElement(a.v,l({id:t,type:r,className:F,href:i,custom:h,"aria-disabled":f,onClick:function(e){return f?e.preventDefault():b&&b(e)}},v),g)};s.defaultProps={type:"button",size:"medium",variant:"secondary",dynamicWidth:!1,isLargeOnMobile:!1}},22743:function(e,t,r){"use strict";r.d(t,{g:function(){return c}});r(92222),r(26699),r(19601);var n=r(67294),i=r(94184),o=r.n(i),a=r(20456),l=r(99607);r(44487);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=["radio","checkbox","visualRadio","visualCheckbox"],d=function(e){var t=e.loading,r=void 0!==t&&t,i=e.disabled,o=void 0!==i&&i,u=e.id,d=e.isRequired,c=e.labelA11y,m=void 0===c?"":c,f=e.labelId,b=e.labelStyle,p=void 0===b?"div":b,h=e.labelVisual,g=e.type,v=void 0===g?"alphanumeric":g,F=e.value,y=(h||m||o||("checkbox"===v||"visualCheckbox"===v)&&d&&!o)&&"hidden"!==v,x=s.includes(v),k="div"!==p?a.X:"div",w=function(){var e={select:"select",alphanumeric:"input",radio:"radio",checkbox:"checkbox",visualRadio:"visualRadio",visualCheckbox:"visualCheckbox",hidden:"hidden"};return u?"".concat(u,"-").concat(e[v]):"".concat(f,"-").concat(e[v])};function O(){return n.createElement(n.Fragment,null,h&&n.createElement("span",{"aria-hidden":!!m},h),m&&n.createElement(l.m,null,m),("checkbox"===v||"visualCheckbox"===v)&&d&&!o&&n.createElement(l.m,null,"Please select at least one option."),o&&F&&n.createElement(l.m,null,"This field is prefilled and cannot be modified."),o&&!F&&n.createElement(l.m,null,"This field is disabled."),r&&n.createElement(l.m,null,"Loading options, please wait."))}var E=x?n.createElement("legend",{className:"lm-Field-legend"},n.createElement(k,{id:"".concat(w(),"-label"),className:"lm-FieldGroup-fieldLabel",type:"div"!==p?p:void 0},O())):n.createElement("label",{id:"".concat(w(),"-label"),className:"lm-FieldGroup-fieldLabel",htmlFor:w()},O());return y?E:null},c=function(e){var t=e.id,r=e.type,i=e.loading,a=e.disabled,l=e.isFocused,s=void 0!==l&&l,c=e.isForceFloat,m=void 0!==c&&c,f=e.isPopulated,b=void 0!==f&&f,p=e.isRequired,h=void 0!==p&&p,g=e.highlightType,v=e.inline,F=void 0!==v&&v,y=e.helpText,x=e.className,k=e.children,w={},O="checkbox"===r||"visualCheckbox"===r?"fieldset":"div";"radio"!==r&&"visualRadio"!==r||!h||(w["aria-required"]="true");var E=r&&{alphanumeric:"lm-FieldGroup-field--input",checkbox:"lm-FieldGroup-field--checkbox",radio:"lm-FieldGroup-field--radio",visualCheckbox:"lm-FieldGroup-field--visualCheckbox",visualRadio:"lm-FieldGroup-field--visualRadio",select:"lm-FieldGroup-field--select",hidden:""}[r];return n.createElement("div",{className:o()("lm-FieldGroup-wrapper",{"is-error":"error"===g,"is-forceFloat":m,"is-populated":b,"is-focused":s,"is-loading":i,"is-disabled":a,"is-inline":F},x),id:t},n.createElement(O,u({className:o()("lm-FieldGroup-field",E),role:"radio"===r||"visualRadio"===r?"radiogroup":void 0},w),n.createElement(d,e),n.createElement("div",{className:"lm-FieldGroup-inner"},k,y&&n.createElement("div",{className:"lm-FieldGroup-helpText"},y))))}},9290:function(e,t,r){"use strict";r.d(t,{C:function(){return o}});var n=r(67294),i=n.createContext(null);i.displayName="IconButtonContext";var o=function(){return(0,n.useContext)(i)};t.Z=i},20628:function(e,t,r){"use strict";var n=r(80292);t.Z={base:0,sm:n.props.breakpoint.sm.raw,md:n.props.breakpoint.md.raw,lg:n.props.breakpoint.lg.raw,xl:n.props.breakpoint.xl.raw}},1157:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(49558),i=r(67294),o=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{base:0},r=Object.keys(t),n=r[0],i=1;i<r.length;i++){var o=t[r[i]];if(!(e>=o))break;n=r[i]}return n},a=i.createContext(),l=r(20628),u="undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;var s=function(){var e=(0,i.useContext)(a),t=(0,i.useRef)(null),r=e?e.getThresholdMap():l.Z,s=(0,i.useState)((function(){return o(0,r)})),d=(0,n.Z)(s,2),c=d[0],m=d[1],f=(0,i.useCallback)((function(){return o(window.innerWidth,r)}),[r]);return u((function(){m(f())}),[]),(0,i.useEffect)((function(){var e=function(){t.current||(t.current=window.requestAnimationFrame((function(){t.current=null,function(){var e=f();c!==e&&m(e)}()})))};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),window.cancelAnimationFrame(t.current)}}),[r,c,f]),c}},69042:function(e,t,r){"use strict";r.d(t,{Z:function(){return O},P:function(){return F}});var n=r(83152),i=r(49558),o=r(87328),a=r(46558),l=r(67294),u=r(94184),s=r.n(u);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var c=r(20628),m=function(e){return void 0!==e?e:null},f=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c.Z,i=Object.keys(n),a=i.indexOf(e),l=i.slice(0,a+1).reverse(),u=r.propKeys.filter((function(e){return"object"===d(t[e])&&null!==t[e]})),s=u.reduce((function(e,r){var n=null;if(i.some((function(e){return Object.prototype.hasOwnProperty.call(t[r],e)})))for(var a=0;a<l.length;a++){var u=l[a];if(null!==(n=m(t[r][u])))break}else n=t[r];return Object.assign(e,(0,o.Z)({},r,n))}),{});return s},b=r(1157),p=r(9290);r(59231);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=-1,F="32",y={propKeys:["size","label"]},x=function(e){var t=e.hasLabel,r=e.id,n=e.className,i=e.children;return t?l.createElement("span",{id:r,className:s()("lm-IconWrapper",n)},i):l.createElement(l.Fragment,null,i)},k=function(e){var t=e.element,r=(0,a.Z)(e,["element"]);return l.cloneElement(t,g({},r))},w=function(e){var t=e.size,r=void 0===t?F:t,o="string"===typeof r?r:g({base:F},r),u=f((0,b.Z)(),g({},e,{size:o}),y),s=g({},e,{},u),d=s.id,c=s.label,m=s.title,h=s.color,w=s.className,O=s.children,E=s.size,j=(0,a.Z)(s,["id","label","title","color","className","children","size"]);l.useEffect((function(){"success"===h&&console.warn('Warning: color="success" is deprecated in '.concat(O.type.name,' and will be removed in the next major release. Use color="positive" instead.')),"error"===h&&console.warn('Warning: color="error" is deprecated in '.concat(O.type.name,' and will be removed in the next major release. Use color="negative" instead.'))}),[h]);var C=l.useState((function(){if(c)return v++,d?"".concat(d,"-label"):"icon-".concat(v,"-label")})),_=(0,i.Z)(C,1)[0],P=(0,p.C)();return l.useEffect((function(){"function"===typeof P&&P(E||F)}),[E,P]),l.createElement(x,{hasLabel:c,id:d,className:w},l.createElement(k,(0,n.Z)({element:O,color:h,id:c?void 0:d,className:c?void 0:w,title:c?void 0:m,"aria-labelledby":c?_:void 0,size:E},j)),c&&l.createElement("span",{id:_,className:"lm-Icon-label"},c))};w.defaultProps={color:"blue",size:"32"};var O=w},34146:function(){},32562:function(){},44487:function(){},5152:function(e,t,r){e.exports=r(98771)},9008:function(e,t,r){e.exports=r(70639)},49558:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,o=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(u){l=!0,i=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return i}})},80292:function(e){"use strict";e.exports=JSON.parse('{"meta":{"name":"@lmig/liberty-ui-tokens","author":"LM UX","version":"1.10.0","description":"Liberty UI Design Tokens","repository":"https://git.forge.lmig.com/scm/uue/uscm-ux_liberty-ui-tokens.git","license":"UNLICENSED"},"props":{"border":{"form":{"input":{"style":"solid","thickness":{"default":"1px","hover":"1px","focus":"2px","error":"1px"},"radius":"3px"},"checkbox":{"radius":"2px"},"radio":{"radius":"50%"}},"button":{"style":"solid","thickness":{"default":"1px","hover":"1px","focus":"1px","error":"1px"},"radius":"3px"}},"breakpoint":{"base":{"min":0,"max":"479px","raw":0},"sm":{"min":"480px","max":"767px","raw":480},"md":{"min":"768px","max":"959px","raw":768},"lg":{"min":"960px","max":"1279px","raw":960},"xl":{"min":"1280px","raw":1280}},"color":{"button":{"primary":{"background":"#99E5EA","border":"#99E5EA","text":"#343741","backgroundHover":"#06748C","borderHover":"#06748C","textHover":"#FFFFFF","backgroundPressed":"#06748C","borderPressed":"#06748C","textPressed":"#FFFFFF"},"secondary":{"background":"#FFFFFF","border":"#343741","borderExtraSmall":"#343741","text":"#343741","backgroundHover":"#06748C","borderHover":"#06748C","textHover":"#FFFFFF","backgroundPressed":"#06748C","borderPressed":"#06748C","textPressed":"#FFFFFF"},"primaryInverse":{"background":"#FFFFFF","border":"#FFFFFF","text":"#343741","backgroundHover":"#F5F5F5","borderHover":"#F5F5F5","textHover":"#343741","backgroundPressed":"#343741","borderPressed":"#343741","textPressed":"#FFFFFF"},"disabled":{"background":"#E6E6E6","border":"#E6E6E6","text":"#565656"}},"icon":{"system":{"backgroundDefault":"#FFFFFF","backgroundAccented":"#F5F5F5","backgroundInverse":"#343741","default":"#1A1446","gray":"#343741","inverse":"#FFFFFF","error":"#D32F2F","disabled":"#707070","warning":"#D43900","success":"#008040","info":"#06748C","informative":"#0061F5","caution":"#B85D00"},"brand":{"backgroundDefault":"#FFFFFF","backgroundInverse":"#1A1446","default":"#1A1446","inverse":"#FFFFFF"}},"error":{"background":"#FFF4F5","border":"#E92243","text":"#D32F2F"},"warning":{"background":"#FFECDB","border":"#EE7000","text":"#D43900"},"success":{"background":"#E1F2E6","border":"#03AC63","text":"#343741"},"info":{"background":"#FFFFFF","border":"#06748C","text":"#343741"},"border":{"light":"#C0BFC0","medium":"#919191","dark":"#565656"},"background":{"white":"#FFFFFF","atmospheric":"#F5F5F5"},"header":{"background":"#FFD000","sticky":{"background":"#FFFFFF"}},"modal":{"branded":{"background":"#FFD000","text":"#1A1446"}},"text":{"light":"#707070","medium":"#565656","default":"#343741","inverse":"#FFFFFF"},"link":{"inline":{"default":"#06748C","hover":"#06748C","visited":"#06748C"},"standalone":{"default":"#06748C","hover":"#06748C","visited":"#06748C"},"navigation":{"default":"#06748C","hover":"#06748C","visited":"#06748C"},"onLibertyYellow":{"default":"#343741","hover":"#343741","visited":"#343741"},"onLibertyBlue":{"default":"#FFFFFF","hover":"#FFFFFF","visited":"#FFFFFF"},"onCustom":{"default":"inherit","hover":"inherit","visited":"inherit"}},"logo":{"liberty":{"default":"#1A1446","inverse":"#FFFFFF","black":"#343741"},"safeco":{"default":"#1A1446","inverse":"#FFFFFF"}},"slidepanel":{"background":"#F5F5F5","scrollbar":{"track":"#F5F5F5","thumb":"#C0BFC0","hover":"#E6E6E6"}},"shadow":{"box":{"dark":"#343741"},"text":{"dark":"#343741"}},"form":{"helpText":"#707070","input":{"border":{"default":"#919191","hover":"#28A3AF","focus":"#28A3AF"},"background":{"default":"#FFFFFF","disabled":"#E6E6E6"},"instructionalText":"#707070","text":{"default":"#343741","disabled":"#565656","label":"#707070","labelFloat":"#707070","labelDisabled":"#565656","placeholder":"#707070"},"select":{"default":"#343741","disabled":"#565656","label":"#707070","labelFloat":"#707070","labelDisabled":"#565656","placeholder":"#565656"},"radio":{"default":"#343741","disabled":"#565656","labelDisabled":"#707070","selectedFill":"#565656","selectedFillDisabled":"#707070"},"checkbox":{"default":"#343741","disabled":"#565656","labelDisabled":"#707070","selectedFill":"#343741","selectedFillDisabled":"#565656"}}},"card":{"border":"#C0BFC0","background":"#FFFFFF"},"table":{"border":"#C0BFC0","thead":{"background":"#E6E6E6"}},"wayfinder":{"text":{"default":"#707070","current":"#343741"}}},"interactions":{"link":{"inline":{"default":{"textdecoration":"underline"},"hover":{"textdecoration":"none"},"visited":{"textdecoration":"underline"}},"inlineHighContrast":{"default":{"textdecoration":"underline"},"hover":{"textdecoration":"none"},"visited":{"textdecoration":"underline"}},"navigation":{"default":{"textdecoration":"none"},"hover":{"textdecoration":"underline"},"visited":{"textdecoration":"none"}},"standalone":{"default":{"textdecoration":"none"},"hover":{"textdecoration":"underline"},"visited":{"textdecoration":"none"}}},"form":{"fieldgroup":{"transition":{"duration":"250ms","timingFunction":"cubic-bezier(0.65, 0, 0.45, 1)"}},"input":{"transition":{"duration":"250ms","timingFunction":"ease-out"},"label":{"transition":{"duration":"100ms","timingFunction":"ease-in-out"}},"checkbox":{"tick":{"transition":{"duration":"500ms","timingFunction":"cubic-bezier(0.65, 0, 0.45, 1)"}},"text":{"transition":{"duration":"500ms","timingFunction":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}}},"radio":{"tick":{"transition":{"duration":"500ms","timingFunction":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}},"text":{"transition":{"duration":"500ms","timingFunction":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"}}}}}},"layer":{"tooltip":{"default":400,"highest":449},"menuDropdown":{"default":500,"highest":549},"popover":{"default":600,"highest":649},"stickySection":{"default":700,"highest":749},"flyinPanel":{"default":800,"highest":849},"modal":{"default":900,"highest":949}},"shadow":{"header":{"sticky":{"size":"0 4px 8px 0","opacity":"rgba(0, 0, 0, 0.2)"}},"form":{"input":{"select":{"expanded":{"size":"0 6px 12px 0","opacity":"rgba(179, 179, 179, 0.24)"}}}}},"spacing":{"maxWidth":"1152px","article":{"heading":{"default":{"desktop":{"before":"3rem","between":"2rem","after":"1rem"},"mobile":{"before":"2rem","between":"1rem","after":"0.5rem"}},"h1":{"desktop":{"before":"4rem","after":"1.5rem"},"mobile":{"before":"3rem","after":"1rem"}}},"body":{"desktop":{"before":"1rem","between":"1.5rem","after":"1rem"},"mobile":{"before":"0.5rem","between":"1rem","after":"1rem"}},"lead":{"desktop":{"before":"2rem","after":"1.5rem"},"mobile":{"before":"1rem","after":"1rem"}},"pullquote":{"desktop":{"before":"3rem","between":"1rem","after":"3rem"},"mobile":{"before":"2.75rem","between":"1rem","after":"2.75rem"}}},"default":{"before":"1em","between":"0.75em","after":"0.75em"},"form":{"fieldgroup":{"marginTop":{"mobile":"3rem","desktop":"4rem"},"maxWidth":"600px","label":{"marginBottom":{"mobile":"1.5rem","desktop":"2rem"}},"messages":{"marginBottom":"0.5rem","between":"0.25rem"}},"input":{"height":"3.125rem","padding":{"default":"1em 0.375em 0.8125em","populated":"1.5em 0.5em 0.3125em","focus":"1.4375em 0.5em 0.25em"},"minimumSize":"2.75rem","radio":{"paddingRight":"1.5rem"},"checkbox":{"paddingRight":"1.5rem"}},"label":{"desktop":{"before":"4rem","after":"2rem"},"mobile":{"before":"3.75rem","after":"1.75rem"}},"heading":{"before":"0","after":"0"}},"button":{"between":"1rem","width":{"desktop":"auto","mobile":"100%"},"maxWidth":{"desktop":"20rem","mobile":"100%"},"horizontalPadding":{"default":"3.75rem","extraSmall":"2rem"},"height":{"large":"3.125rem","medium":"2.75rem","small":"2.25rem","extraSmall":"2.25rem"}}},"typography":{"default":{"maxwidth":"736px"},"h1":{"large":{"fontsize":{"desktop":"3.5rem","mobile":"3rem"},"lineheight":"1.2em","letterspacing":"-0.5px","weight":{"default":"300","bold":"400"}},"default":{"fontsize":{"desktop":"3rem","mobile":"2.5rem"},"lineheight":"1.2em","letterspacing":"-0.5px","weight":{"default":"300","bold":"400"}}},"h2":{"fontsize":{"desktop":"2.5rem","mobile":"2.25rem"},"lineheight":"1.2em","letterspacing":"normal","weight":{"light":"300","default":"400","medium":"500","bold":"700"}},"h3":{"fontsize":{"desktop":"2rem","mobile":"1.75rem"},"lineheight":"1.2em","letterspacing":"normal","weight":{"light":"300","default":"400","medium":"500","bold":"700"}},"h4":{"fontsize":{"desktop":"1.5rem","mobile":"1.25rem"},"lineheight":"1.2em","letterspacing":"normal","weight":{"light":"300","default":"400","medium":"500","bold":"700"}},"h5":{"fontsize":{"desktop":"1.25rem","mobile":"1.125rem"},"lineheight":"1.6em","letterspacing":"normal","weight":{"default":"400","medium":"500","bold":"700"}},"h6":{"default":{"fontsize":{"desktop":"1.125rem","mobile":"1rem"},"lineheight":"1.6em","letterspacing":"normal","weight":{"default":"400","medium":"500","bold":"700"}},"small":{"fontsize":{"desktop":"1rem","mobile":"1rem"},"lineheight":"1.6em","letterspacing":"normal","weight":{"default":"400","medium":"500","bold":"700"}}},"body":{"lead":{"fontsize":{"desktop":"1.25rem","mobile":"1.125rem"},"lineheight":"1.6em","letterspacing":"normal","weight":{"default":"400","medium":"500","bold":"700"}},"article":{"fontsize":{"desktop":"1.125rem","mobile":"1rem"},"lineheight":"1.6em","letterspacing":"normal","weight":{"default":"400","medium":"500","bold":"700"}},"default":{"fontsize":{"desktop":"1rem","mobile":"1rem"},"lineheight":"1.6em","letterspacing":"normal","weight":{"default":"400","medium":"500","bold":"700"}}},"caption":{"fontsize":{"desktop":"0.875rem","mobile":"0.875rem"},"lineheight":"1.6em","letterspacing":"normal","weight":{"default":"400","medium":"500","bold":"700"}},"disclaimer":{"fontsize":{"desktop":"0.75rem","mobile":"0.75rem"},"lineheight":"1.6em","letterspacing":"normal","weight":{"default":"400","medium":"500","bold":"700"}},"form":{"fieldgroup":{"messages":{"fontsize":"0.75rem"}},"input":{"fontsize":{"desktop":"1rem","mobile":"1rem"},"lineheight":"1.6em","label":{"lineheight":"1.2em","float":{"minimized":{"desktop":"0.75rem","mobile":"0.75rem","weight":"400"},"weight":"300"}},"radio":{"lineheight":null},"checkbox":{"lineheight":null}}},"table":{"fontsize":{"desktop":"0.75rem","mobile":"0.75rem"}},"button":{"fontsize":{"desktop":"1rem","mobile":"1rem"},"weight":"700"},"icon":{"label":{"desktop":"0.75rem","mobile":"0.75rem"}},"link":{"inline":{"weight":"inherit"},"inlineOnColoredBackground":{"weight":"700"}}}}}')}}]);