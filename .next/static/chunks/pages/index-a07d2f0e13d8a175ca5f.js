(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5360:function(e,n,t){"use strict";var r=t(5893),o=t(1664);n.Z=function(){return(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{children:"HOME"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"about",children:(0,r.jsx)("a",{children:"ABOUT"})})})]})}},6071:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var a=o(t(7294)),c=t(1689),i=t(2441),u=t(5749),l={};function s(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,E=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),_=g&&"object"===typeof g&&g.ref,m=(0,u.useIntersection)({rootMargin:"200px"}),w=r(m,2),x=w[0],L=w[1],j=a.default.useCallback((function(e){x(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,x]);(0,a.useEffect)((function(){var e=L&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof E?E:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,L,E,n,t]);var M={ref:j,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:u,scroll:i}))}(e,t,d,p,h,b,y,E)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof E?E:t&&t.locale,C=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,k,t&&t.locales,t&&t.domainLocales);M.href=C||(0,c.addBasePath)((0,c.addLocale)(p,k,t&&t.defaultLocale))}return a.default.cloneElement(g,M)};n.default=f},5749:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,u=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t(7294),a=t(8391),c="undefined"!==typeof IntersectionObserver;var i=new Map},8474:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(5360);n.default=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)("h1",{children:"welome to base page"})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8474)}])},1664:function(e,n,t){e.exports=t(6071)}},function(e){e.O(0,[774,351],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);