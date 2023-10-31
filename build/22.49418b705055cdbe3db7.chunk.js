webpackJsonp([22],{"./app/components/DefaultAvatar/DefaultAvatar/Loadable.js":function(e,n,t){"use strict";var o=t("./node_modules/react-loadable/lib/index.js"),r=t.n(o);n.a=r()({loader:function(){return t.e(36).then(t.bind(null,"./app/components/DefaultAvatar/DefaultAvatar/index.js"))},loading:function(){return null}})},"./app/components/JobDetail/CompanyInfo/index.js":function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=t("./node_modules/react/react.js"),l=t("./node_modules/react-router-dom/index.js"),u=t("./node_modules/react-loadable/lib/index.js"),s=t.n(u),c=s()({loader:function(){return t.e(103).then(t.bind(null,"./app/components/Icons/Arrow/index.js"))},loading:function(){return null}}),f=t("./node_modules/random-string/lib/random-string.js"),d=t.n(f),p=t("./node_modules/axios/index.js"),m=t.n(p),v=t("./app/components/DefaultAvatar/DefaultAvatar/Loadable.js"),b=t("./app/utils/operatingSystem.js"),y=t("./config.js"),h=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(n,t,o,r){var a=n&&n.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===i)t.children=r;else if(i>1){for(var u=Array(i),s=0;s<i;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:e,type:n,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}}(),g=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),j=y.a.API_BASE_URL+"/users/show-user-with-job-id",_=h("div",{},void 0,"View company info "),x=h("div",{},void 0,"and all jobs by this employer "),w=h(c,{}),A=function(e){function n(){o(this,n);var e=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.getJobIdFromUrl=function(){return location.pathname.substring(location.pathname.lastIndexOf("/")+1)},e.state={user:{}},e}return a(n,e),g(n,[{key:"componentWillMount",value:function(){var e=this;m.a.post(j,{jobId:this.getJobIdFromUrl()}).then(function(n){e.setState({user:n.data})})}},{key:"render",value:function(){var e=this.state.user,n=this.props.userId,t=void 0===n?0:n,o=Object(b.a)()?"":"bold",r=d()({length:50});return h(l.Link,{className:"CompanyInfo-href",to:"/employer-profile/"+t+"?"+r},void 0,h("div",{className:"CompanyInfo"},void 0,h("div",{className:"CompanyInfo-container"},void 0,h("div",{className:"CompanyInfo-image"},void 0,h(v.a,{defaultAvatarNumber:e.url_avatar||e.default_avatar})),h("div",{style:{fontWeight:o},className:"CompanyInfo-text"},void 0,_,x),w)))}}]),n}(i.PureComponent);n.default=A},"./app/utils/operatingSystem.js":function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o=function(){return navigator.platform.toUpperCase().indexOf("MAC")>=0}},"./node_modules/random-string/lib/random-string.js":function(e,n,t){"use strict";function o(e){return e||(e={}),{length:e.length||8,numeric:"boolean"!=typeof e.numeric||e.numeric,letters:"boolean"!=typeof e.letters||e.letters,special:"boolean"==typeof e.special&&e.special,exclude:Array.isArray(e.exclude)?e.exclude:[]}}function r(e){var n="";e.numeric&&(n+=a),e.letters&&(n+=i),e.special&&(n+=l);for(var t=0;t<=e.exclude.length;t++)n=n.replace(e.exclude[t],"");return n}var a="0123456789",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",l="!$%^&*()_+|~-=`{}[]:;<>?,./";e.exports=function(e){e=o(e);var n,t,a="",i=e.length,l=(e.exclude,r(e));for(n=1;n<=i;n++)a+=l.substring(t=Math.floor(Math.random()*l.length),t+1);return a}}});