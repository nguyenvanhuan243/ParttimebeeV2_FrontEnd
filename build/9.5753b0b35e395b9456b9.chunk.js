webpackJsonp([9],{"./app/components/Header/Loadable.js":function(e,o,n){"use strict";var a=n("./node_modules/react-loadable/lib/index.js"),t=n.n(a);o.a=t()({loader:function(){return n.e(18).then(n.bind(null,"./app/components/Header/index.js"))},loading:function(){return null}})},"./app/components/Icons/NotFoundPage/Loadable.js":function(e,o,n){"use strict";var a=n("./node_modules/react-loadable/lib/index.js"),t=n.n(a);o.a=t()({loader:function(){return n.e(89).then(n.bind(null,"./app/components/Icons/NotFoundPage/index.js"))},loading:function(){return null}})},"./app/containers/NotFoundPage/index.js":function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=n("./node_modules/react/react.js"),t=(n.n(a),n("./app/components/Header/Loadable.js")),s=n("./app/components/Icons/NotFoundPage/Loadable.js"),d=n("./config.js"),i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,a,t){var s=o&&o.defaultProps,d=arguments.length-3;if(n||0===d||(n={}),n&&s)for(var i in s)void 0===n[i]&&(n[i]=s[i]);else n||(n=s||{});if(1===d)n.children=t;else if(d>1){for(var r=Array(d),c=0;c<d;c++)r[c]=arguments[c+3];n.children=r}return{$$typeof:e,type:o,key:void 0===a?null:""+a,ref:null,props:n,_owner:null}}}(),r=i(t.a,{}),c=i("div",{className:"NotFoundPage-icon"},void 0,i(s.a,{})),l=i("div",{className:""},void 0,i("span",{className:"NotFoundPage-text"},void 0,"404 Page Not Found")),u=i("div",{className:"NotFoundPage-abstractContainer"},void 0,i("div",{className:"NotFoundPage-abstract"},void 0,i("span",{className:"NotFoundPage-aboveText"},void 0,"I don’t know why you come to this page",i("br",{})),i("span",{className:"NotFoundPage-belowText"},void 0,"but we’re sorry about that…"))),p=function(){return i("div",{},void 0,r,i("div",{className:"NotFoundPage"},void 0,c,l,u,i("div",{className:"NotFoundPage-backToHome"},void 0,i("a",{href:""+d.a.BASE_URL,className:"NotFoundPage-backToHomeText"},void 0,"BACK TO HOME"))))};o.default=p},"./config.js":function(e,o,n){"use strict";const a={NAME:"N.exchange",DOMAIN:"https://n.exchange",BASE_URL:"https://parttimebee.my",API_BASE_URL:"https://api.parttimebee.my/api/v1"};o.a=a}});