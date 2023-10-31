webpackJsonp([20],{"./app/components/DefaultAvatar/DefaultAvatar/Loadable.js":function(e,n,r){"use strict";var t=r("./node_modules/react-loadable/lib/index.js"),o=r.n(t);n.a=o()({loader:function(){return r.e(36).then(r.bind(null,"./app/components/DefaultAvatar/DefaultAvatar/index.js"))},loading:function(){return null}})},"./app/components/EmployerProfileBanner/index.js":function(e,n,r){"use strict";function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=r("./node_modules/classnames/index.js"),l=r.n(i),s=r("./node_modules/react-router-dom/index.js"),u=r("./node_modules/react-loadable/lib/index.js"),c=r.n(u),d=c()({loader:function(){return r.e(53).then(r.bind(null,"./app/components/Icons/Web/index.js"))},loading:function(){return null}}),f=r("./node_modules/react/react.js"),p=c()({loader:function(){return r.e(87).then(r.bind(null,"./app/components/Icons/Phone/index.js"))},loading:function(){return null}}),m=c()({loader:function(){return r.e(104).then(r.bind(null,"./app/components/Icons/Address/index.js"))},loading:function(){return null}}),v=r("./node_modules/react-mailto/dist/react-mailto.js"),y=r.n(v),h=r("./node_modules/lodash/lodash.js"),b=c()({loader:function(){return r.e(52).then(r.bind(null,"./app/components/Icons/WhiteEmail/index.js"))},loading:function(){return null}}),P=r("./app/components/DefaultAvatar/DefaultAvatar/Loadable.js"),E=r("./node_modules/axios/index.js"),j=r.n(E),g=r("./app/utils/operatingSystem.js"),B=r("./config.js"),_=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,r,t,o){var a=n&&n.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&a)for(var l in a)void 0===r[l]&&(r[l]=a[l]);else r||(r=a||{});if(1===i)r.children=o;else if(i>1){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+3];r.children=s}return{$$typeof:e,type:n,key:void 0===t?null:""+t,ref:null,props:r,_owner:null}}}(),N=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),w=B.a.API_BASE_URL+"/users/"+localStorage.currentUser,O="140px",x=_("div",{className:"EmployerProfileBanner-welcomeText"},void 0,"Welcome to Parttime Bee!"),k=_("div",{className:"EmployerProfileBanner-abstractText"},void 0,"In order to post your first job, you must add your company details."),S=_(p,{}),C=_(b,{}),T=_(d,{}),A=_(m,{}),D=_("div",{className:"EmployerProfileBanner-separate"},void 0),L=_("div",{className:"EmployerProfileBanner-companyDescription"},void 0,"COMPANY DESCRIPTION"),M=_(s.Link,{className:"EmployerProfileBanner-editButton EmployerProfileBanner-hrefText",to:"/myprofile/edit-profile"},void 0,_("div",{className:"EmployerProfileBanner-editButtonText"},void 0,"Edit")),R=function(e){function n(){t(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.getDefaultAvatar=function(e){return _(P.a,{defaultAvatarNumber:e.default_avatar,avatarWidth:O,avatarHeight:O})},e.state={showReadMore:!1,shouldUpdate:!1,user:{}},e}return a(n,e),N(n,[{key:"componentWillMount",value:function(){var e=this;j.a.get(w).then(function(n){n.data.contact_name&&n.data.company_name||e.setState({shouldUpdate:!0})}),j.a.get(w).then(function(n){e.setState({user:n.data})})}},{key:"render",value:function(){var e=this,n=this.props,r=n.phone,t=n.email,o=void 0===t?"":t,a=n.website,i=n.address,u=n.companyName,c=n.showEdit,d=void 0!==c&&c,f=n.companyDescription,p=this.state,m=p.showReadMore,v=p.shouldUpdate,b=p.user,P=l()("EmployerProfileBanner",{"EmployerProfileBanner-readMore":m}),E=l()("EmployerProfileBanner-companyDescriptionText",{"EmployerProfileBanner-overFlow":!m,"EmployerProfileBanner-readMoreShow":!m});if(!Object(h.isEmpty)(document.getElementsByClassName("public-DraftStyleDefault-block"))){var j=document&&document.getElementsByClassName("public-DraftStyleDefault-block")[1];j&&j.classList.add("EmployerProfileBanner-readMoreShow")}return _("div",{className:P},void 0,_("div",{className:"EmployerProfileBanner-container"},void 0,b.url_avatar?_("img",{className:"EmployerProfileBanner-avatar",alt:"Avatar",src:b.url_avatar}):_("div",{className:"EmployerProfileBanner-defaultAvatar"},void 0,this.getDefaultAvatar(b)),v&&localStorage.currentUser?_("div",{className:"EmployerProfileBanner-shouldUpdate"},void 0,x,k,_(s.Link,{to:"/myprofile/edit-profile",className:"EmployerProfileBanner-link"},void 0,_("div",{className:"EmployerProfileBanner-addNow"},void 0,_("div",{style:{fontWeight:Object(g.a)()?"500":"700"},className:"EmployerProfileBanner-addNowText"},void 0,"ADD NOW")))):_("div",{className:"EmployerProfileBanner-contentContainer"},void 0,_("div",{className:"EmployerProfileBanner-title"},void 0,u&&u.toUpperCase()),_("div",{className:"EmployerProfileBanner-infoContainer"},void 0,r&&_("div",{className:"EmployerProfileBanner-phoneContainer"},void 0,S,_("div",{className:"EmployerProfileBanner-phoneText"},void 0,r)),_("div",{className:"EmployerProfileBanner-mailContainer"},void 0,C,_("div",{className:"EmployerProfileBanner-mailText"},void 0,_(y.a,{className:"EmployerProfileBanner-emailLink",email:o},void 0,o))),a&&_("div",{className:"EmployerProfileBanner-webContainer"},void 0,T,_("div",{className:"EmployerProfileBanner-webText"},void 0,_(s.Link,{className:"EmployerProfileBanner-websiteLink",to:a,target:"_blank"},void 0,a)))),i&&_("div",{className:"EmployerProfileBanner-addressContainer"},void 0,A,_("div",{className:"EmployerProfileBanner-addressText"},void 0,i)),D,f&&f.length>287&&_("div",{},void 0,L,_("div",{className:E},void 0,_("div",{dangerouslySetInnerHTML:{__html:f}}),!m&&_("button",{onClick:function(){return e.setState({showReadMore:!0})},className:"EmployerProfileBanner-readMoreButton"},void 0,"Read more")))),d&&!v&&M))}}]),n}(f.PureComponent);n.default=R},"./app/utils/operatingSystem.js":function(e,n,r){"use strict";r.d(n,"a",function(){return t});var t=function(){return navigator.platform.toUpperCase().indexOf("MAC")>=0}},"./node_modules/classnames/index.js":function(e,n,r){var t,o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
!function(){"use strict";function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var i=r.apply(null,t);i&&e.push(i)}}else if("object"===o){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)a.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}var a={}.hasOwnProperty;void 0!==e&&e.exports?(r.default=r,e.exports=r):(t=[],void 0!==(o=function(){return r}.apply(n,t))&&(e.exports=o))}()},"./node_modules/react-mailto/dist/react-mailto.js":function(e,n,r){"use strict";function t(e,n){var r={};for(var t in e)n.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),n.createMailtoLink=n.toSearchString=void 0;var l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s=function(){function e(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,r,t){return r&&e(n.prototype,r),t&&e(n,t),n}}(),u=r("./node_modules/react/react.js"),c=function(e){return e&&e.__esModule?e:{default:e}}(u),d=n.toSearchString=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return Object.keys(e).map(function(n){return n+"="+encodeURIComponent(e[n])}).join("&")},f=n.createMailtoLink=function(e,n){var r="mailto:"+e;return n&&(r+="?"+d(n)),r},p=function(e){function n(){return o(this,n),a(this,Object.getPrototypeOf(n).apply(this,arguments))}return i(n,e),s(n,[{key:"render",value:function(){return this.props.obfuscate?this.renderObfuscatedLink():this.renderLink()}},{key:"renderLink",value:function(){var e=this.props,n=e.email,r=(e.obfuscate,e.headers),o=e.children,a=t(e,["email","obfuscate","headers","children"]);return c.default.createElement("a",l({href:f(n,r)},a),o)}},{key:"renderObfuscatedLink",value:function(){var e=this.props,n=(e.email,e.obfuscate,e.headers,e.children),r=t(e,["email","obfuscate","headers","children"]);return c.default.createElement("a",l({onClick:this.handleClick.bind(this),href:"mailto:obfuscated"},r),n)}},{key:"handleClick",value:function(e){e.preventDefault();var n=this.props,r=n.email,t=n.headers;window.location.href=f(r,t)}}]),n}(u.Component);p.propTypes={children:u.PropTypes.node.isRequired,email:u.PropTypes.string.isRequired,headers:u.PropTypes.object,obfuscate:u.PropTypes.bool},p.defaultProps={obfuscate:!1},n.default=p}});