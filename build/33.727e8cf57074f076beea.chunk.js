webpackJsonp([33],{"./app/components/Icons/CloseIcon/Loadable.js":function(e,o,n){"use strict";var t=n("./node_modules/react-loadable/lib/index.js"),r=n.n(t);o.a=r()({loader:function(){return n.e(95).then(n.bind(null,"./app/components/Icons/CloseIcon/index.js"))},loading:function(){return null}})},"./app/components/Popup/DeleteConfirmation/index.js":function(e,o,n){"use strict";function t(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function r(e,o){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?e:o}function a(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(e,o):e.__proto__=o)}Object.defineProperty(o,"__esModule",{value:!0});var i=n("./node_modules/react/react.js"),l=(n.n(i),n("./app/components/Icons/CloseIcon/Loadable.js")),u=n("./node_modules/axios/index.js"),c=n.n(u),s=n("./config.js"),p=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var a=o&&o.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&a)for(var l in a)void 0===n[l]&&(n[l]=a[l]);else n||(n=a||{});if(1===i)n.children=r;else if(i>1){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+3];n.children=u}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),f=function(){function e(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(o,n,t){return n&&e(o.prototype,n),t&&e(o,t),o}}(),d=p(l.a,{}),m=p("span",{className:"DeleteConfirmationPopup-cancelButtonText"},void 0," Cancel "),v=p("span",{className:"DeleteConfirmationPopup-deleteButtonText"},void 0," Delete "),b=function(e){function o(){return t(this,o),r(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return a(o,e),f(o,[{key:"handleDelete",value:function(){var e=localStorage.jobId,o=s.a.API_BASE_URL+"/jobs/"+e+"}";c.a.delete(o),location.reload()}},{key:"handleDeleteUser",value:function(){var e=s.a.API_BASE_URL+"/users/"+this.props.currentUserId;c.a.delete(e).then(function(e){200===e.status&&localStorage.removeItem("currentUser"),location.replace(""+s.a.BASE_URL)})}},{key:"render",value:function(){var e=this,o=this.props,n=o.closeFunc,t=void 0===n?function(){}:n,r=o.type,a=void 0===r?"JOB":r,i="JOB"===a;return p("div",{className:"DeleteConfirmationPopup"},void 0,p("div",{className:"DeleteConfirmationPopup-containerPopup"},void 0,p("button",{onClick:t,className:"DeleteConfirmationPopup-closeButton"},void 0,d),p("div",{className:"DeleteConfirmationPopup-container"},void 0,p("div",{className:"DeleteConfirmationPopup-content"},void 0,p("div",{className:"DeleteConfirmationPopup-text"},void 0,i?"Are you sure to delete this job?":"Are you sure to delete this account?"),p("div",{className:"DeleteConfirmationPopup-buttonContainer"},void 0,p("button",{onClick:t,className:"DeleteConfirmationPopup-cancelButton"},void 0,m),p("button",{onClick:i?function(){return e.handleDelete()}:function(){return e.handleDeleteUser()},className:"DeleteConfirmationPopup-deleteButton"},void 0,v))))))}}]),o}(i.PureComponent);o.default=b}});