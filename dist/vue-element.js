!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="/vue-element/",t(0)}([function(e,t,o){e.exports=o(13)},,,,,,function(e,t){"use strict";function o(e){var t=e,o=["true","false"].indexOf(e)>-1,n=parseFloat(t,10),r=!isNaN(n)&&isFinite(t);return o?t="true"===t:r&&(t=n),t}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1],o={camelCase:[],hyphenate:[]};if(e.props&&e.props.length)e.props.forEach(function(e){o.camelCase.push(t.util.camelize(e))});else if(e.props&&"object"===c(e.props))for(var n in e.props)o.camelCase.push(t.util.camelize(n));return o.camelCase.forEach(function(e){o.hyphenate.push(t.util.hyphenate(e))}),o}function r(e,t){t.camelCase.forEach(function(n,r){Object.defineProperty(e,n,{get:function(){return this.__vue_element__[n]},set:function(e){this.setAttribute(t.hyphenate[r],o(e))}})})}function a(e,t,n){var r=t.propsData||{};return n.hyphenate.forEach(function(t,a){var c=e.attributes[t]&&e.attributes[t].nodeValue;void 0!==c&&""!==c&&(r[n.camelCase[a]]=o(c))}),r}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.convertAttributeValue=o,t.getProps=n,t.reactiveProps=r,t.getPropsData=a},,,function(e,t,o){"use strict";function n(e,t,o,n,c){e.__vue_element__||!function(){var i=t.util.extend({},o),u=e.cloneNode(!0).childNodes,l=(0,r.getPropsData)(e,i,n),s=t.version&&parseInt(t.version.split(".")[0],10)||0,f=void 0;s>=2?f={propsData:l,props:n.camelCase,computed:{reactiveProps:function(){var e=this,t={};return n.camelCase.forEach(function(o){t[o]=e[o]}),t}},render:function(e){var o={props:this.reactiveProps};return e(i,o,(0,a.getSlots)(u,e,t))}}:1===s?(f=i,f.propsData=l):!function(){f=i;var e={};Object.keys(l).forEach(function(t){e[t]={default:l[t]}}),f.props=e}();var p=s>=2?"<div></div>":"<div>"+e.innerHTML+"</div>";c.shadow&&e.shadowRoot?(e.shadowRoot.innerHTML=p,f.el=e.shadowRoot.children[0]):(e.innerHTML=p,f.el=e.children[0]),(0,r.reactiveProps)(e,n),e.__vue_element__=new t(f)}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var r=o(6),a=o(12)},function(module,exports){"use strict";function isES2015(){if("undefined"==typeof Symbol)return!1;try{eval("class Foo {}")}catch(e){return!1}return!0}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=isES2015()},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}function u(e){function t(){s.shadow===!0&&HTMLElement.prototype.attachShadow&&this.attachShadow({mode:"open"}),"function"==typeof s.constructorCallback&&s.constructorCallback.call(this)}function o(){"function"==typeof s.connectedCallback&&s.connectedCallback.call(this)}function n(){"function"==typeof s.disconnectedCallback&&s.disconnectedCallback.call(this)}function u(e,t,o){"function"==typeof s.attributeChangedCallback&&s.attributeChangedCallback.call(this,e,t,o)}var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!=typeof customElements)if(f.default){var p=function(e){function o(e){var n;r(this,o);var c=a(this,(o.__proto__||Object.getPrototypeOf(o)).call(this)),i=e?HTMLElement.call(e):c;return t.call(i),n=i,a(c,n)}return c(o,e),l(o,null,[{key:"observedAttributes",get:function(){return s.observedAttributes||[]}}]),o}(i);p.prototype.connectedCallback=o,p.prototype.disconnectedCallback=n,p.prototype.attributeChangedCallback=u,customElements.define(e,p)}else{var d=function(e){var o=e?HTMLElement.call(e):this;return t.call(o),o};d.observedAttributes=s.observedAttributes||[],d.prototype=Object.create(HTMLElement.prototype,{constructor:{configurable:!0,writable:!0,value:d}}),d.prototype.connectedCallback=o,d.prototype.disconnectedCallback=n,d.prototype.attributeChangedCallback=u,customElements.define(e,d)}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();t.default=u,o(18);var s=o(10),f=n(s);Object.setPrototypeOf(i.prototype,HTMLElement.prototype),Object.setPrototypeOf(i,HTMLElement)},function(e,t){"use strict";function o(e,t){var o={};return t.util.toArray(e.attributes).forEach(function(e){o["vue-slot"===e.nodeName?"slot":e.nodeName]=e.nodeValue}),o}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n=arguments[2],r=[];return n.util.toArray(e).forEach(function(e){if("#text"===e.nodeName)e.nodeValue.trim()&&r.push(t("span",e.nodeValue));else{var a=o(e,n),c={attrs:a,domProps:{innerHTML:e.innerHTML}};a.slot&&(c.slot=a.slot,a.slot=void 0),r.push(t(e.tagName,c))}}),r}Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributes=o,t.getSlots=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){e.element=function(t,o){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r="function"==typeof o,a=r&&{props:n.props||[]},i=(0,l.getProps)(r?a:o,e);(0,c.default)(t,{constructorCallback:function(){"function"==typeof n.constructorCallback&&n.constructorCallback.call(this)},connectedCallback:function(){var a=this,c=r&&o(),s=c&&c.then&&"function"==typeof c.then;if(r&&!s)throw new Error("Async component "+t+" do not returns Promise");this.__detached__||(s?c.then(function(t){var o=(0,l.getProps)(t,e);(0,u.default)(a,e,t,o,n)}):(0,u.default)(this,e,o,i,n)),this.__detached__=!1},disconnectedCallback:function(){var e=this;this.__detached__=!0,"function"==typeof n.disconnectedCallback&&n.disconnectedCallback.call(this),setTimeout(function(){e.__detached__&&e.__vue_element__&&e.__vue_element__.$destroy(!0)},3e3)},attributeChangedCallback:function(t,o,r){if(this.__vue_element__&&"undefined"!=typeof r){var a=e.util.camelize(t);"function"==typeof n.attributeChangedCallback&&n.attributeChangedCallback.call(this,t,o,r),this.__vue_element__[a]=(0,l.convertAttributeValue)(r)}},observedAttributes:i.hyphenate,shadow:!!n.shadow&&!!HTMLElement.prototype.attachShadow})}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(11),c=n(a),i=o(9),u=n(i),l=o(6);t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},,,,,function(e,t){function o(e,t){return e.__proto__=t,e}Object.setPrototypeOf=Object.setPrototypeOf||o,e.exports=o.bind(Object)}])});
//# sourceMappingURL=vue-element.js.map