(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),r=n.n(l),s=n(4),o=n(5),b=n(8),i=n(7),d=(n(14),n(15),n(6)),u=n.n(d),T=n(1),m=n.n(T),f=(m.a.arrayOf(m.a.object),m.a.number,m.a.string,m.a.func,function(e){var t=e.tabs,n=e.selectedTabId,a=e.selectedTabInfo,l=e.onTabSelected;return c.a.createElement("div",null,t.map((function(e,t){return c.a.createElement("button",{onClick:function(){return l(t)},type:"button",className:u()("button",{focused:n===t}),key:e.title},e.title)})),c.a.createElement("div",{className:"content"},a))}),p=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],v=function(e){Object(b.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={selectedTabIndex:"tab-1",selectedTabTitle:"Tab 1",selectedTabContent:"Some text 1"},e.selectTab=function(t){var n=p.find((function(e){return p.indexOf(e)===t}));e.setState({selectedTabIndex:t,selectedTabTitle:n.title,selectedTabContent:n.content})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.selectedTabIndex,n=e.selectedTabTitle,a=e.selectedTabContent;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"title"},"Selected tab is"," ",n),c.a.createElement(f,{tabs:p,selectedTabId:t,selectedTabInfo:a,onTabSelected:this.selectTab})))}}]),n}(c.a.Component);r.a.render(c.a.createElement(v,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.ad0568be.chunk.js.map