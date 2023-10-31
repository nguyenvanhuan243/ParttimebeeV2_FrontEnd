webpackJsonp([28],{"./app/components/Icons/ShowMore/Loadable.js":function(e,o,t){"use strict";var n=t("./node_modules/react-loadable/lib/index.js"),i=t.n(n);o.a=i()({loader:function(){return t.e(80).then(t.bind(null,"./app/components/Icons/ShowMore/index.js"))},loading:function(){return null}})},"./app/components/JobList/index.js":function(e,o,t){"use strict";function n(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function i(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function r(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var a=t("./node_modules/react/react.js"),s=t("./node_modules/react-loadable/lib/index.js"),l=t.n(s),c=l()({loader:function(){return t.e(19).then(t.bind(null,"./app/components/JobList/JobItem/index.js"))},loading:function(){return null}}),u=t("./app/components/Icons/ShowMore/Loadable.js"),d=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,t,n,i){var r=o&&o.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===a)t.children=i;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:e,type:o,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}(),f=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),p=d(u.a,{}),h=function(e){function o(){n(this,o);var e=i(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.setJobId=function(o){var t=e.props.onDeleteConfirmation;(void 0===t?function(){}:t)(),localStorage.setItem("jobId",o)},e.handleShowMore=function(o){e.setState({limit:o.length,showMore:!1})},e.changeSpaceToPlus=function(e){return e.split(" ").join("+")},e.state={limit:5,showMore:!0},e}return r(o,e),f(o,[{key:"render",value:function(){var e=this,o=this.props,t=o.text,n=void 0===t?"":t,i=o.showHeading,r=void 0!==i&&i,a=o.title,s=void 0===a?"Today, December 25":a,l=o.showView,u=void 0===l||l,f=o.showShare,h=void 0===f||f,b=o.showEdit,m=void 0!==b&&b,v=o.showDelete,w=void 0!==v&&v,y=o.showImage,j=void 0===y||y,g=o.jobType,_=void 0===g?"going":g,J=o.dataResourceEndPoint,S=void 0===J?[]:J,I=o.size,M=void 0===I?580:I,L={width:M},O=this.state,N=O.limit,P=O.showMore,x=location.pathname.includes("myjobs"),C=location.pathname.includes("my-profile"),T=[],E=[];return E=x||C?S.filter(function(e){return e.job_type===_}):S,E.slice(0,N).map(function(o){return T.push(d(c,{href:"/job-detail/"+o.id+"?"+e.changeSpaceToPlus(o.title),title:o.title,showImage:j,onClickJobItem:function(){return e.setJobId(o.id)},onHoverJobItem:function(){return e.setJobId(o.id)},showDelete:w,showEdit:m,showView:u,showShare:h,showCompanyName:!(C||x),viewNumber:o.views,jobId:o.id,state:o.salary_state,city:o.city,companyName:o.company_name,showCity:!x&&!C},o.id))}),d("div",{},void 0,r&&d("div",{className:"JobList-showHeading"},void 0,n," "),d("div",{style:L,className:"JobList"},void 0,d("div",{className:"JobList-title"},void 0,d("div",{className:"JobList-titleText"},void 0," ",s," ")),T,E.length>5&&P&&d("button",{className:"JobList-buttonContainer",onClick:function(){return e.handleShowMore(E)}},void 0,d("div",{className:"JobList-showMore"},void 0,p,d("div",{className:"JobList-showMoreText"},void 0," SHOW ",E.length-5," MORE ")))))}}]),o}(a.PureComponent);o.default=h}});