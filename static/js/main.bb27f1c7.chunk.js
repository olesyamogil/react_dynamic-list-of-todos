(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,r){e.exports=r(21)},18:function(e,t,r){},20:function(e,t,r){},21:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(5),c=r.n(o),s=(r(18),r(6)),i=r(10),l=r(2),u=r.n(l),p=r(3),d=r(7),m=r(8),f=r(11),g=r(9),y=r(1),h=r(12);function b(e){var t=e.user;return a.a.createElement("a",{className:"user-info",href:"mailto:".concat(t.email)},t.name)}b.defaultProps={user:{}};var v=b;function E(e){var t=e.todo;return a.a.createElement("tr",null,a.a.createElement("td",{className:"item-title"},t.title),a.a.createElement("td",{className:"item-user"},a.a.createElement(v,{user:t.user})),a.a.createElement("td",{className:"item-status"},t.completed?"Completed":"In progress"))}E.defaultProps={todo:{}};var O=E;r(20);function j(e){var t=e.todos;return a.a.createElement("table",{className:"todo-list"},a.a.createElement("thead",{className:"todo-list-head"},a.a.createElement("tr",null,a.a.createElement("td",null,"Title"),a.a.createElement("td",null,"Username"),a.a.createElement("td",null,"Status"))),a.a.createElement("tbody",{className:"todo-list-body"},t.map(function(e){return a.a.createElement(O,{todo:e,key:e.id})})))}j.defaultProps={todos:[]};var S=j,T=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{type:"button",onClick:e.changeSortingType,"data-sorting-type":"title"},"Sort by title"),a.a.createElement("button",{type:"button",onClick:e.changeSortingType,"data-sorting-type":"user"},"Sort by user"),a.a.createElement("button",{type:"button",onClick:e.changeSortingType,"data-sorting-type":"completed"},"Sort by status"))};T.defaultProps={changeSortingType:{}};var w=T;function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(r,!0).forEach(function(t){Object(s.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var D=function(e){function t(e){var r;return Object(d.a)(this,t),(r=Object(f.a)(this,Object(g.a)(t).call(this,e))).getDatafromServer=function(){var e=Object(p.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(t).then(function(e){return e.json()}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),r.state={todos:null,isLoading:!1,error:!1,sortingType:""},r.loadTodos=r.loadTodos.bind(Object(y.a)(r)),r.changeSortingType=r.changeSortingType.bind(Object(y.a)(r)),r}return Object(h.a)(t,e),Object(m.a)(t,[{key:"changeSortingType",value:function(e){this.setState({sortingType:e.target.dataset.sortingType})}},{key:"loadTodos",value:function(){var e=Object(p.a)(u.a.mark(function e(){var t,r,n,a,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0,error:!1,sortingType:""}),e.prev=1,e.next=4,Promise.all([this.getDatafromServer("https://jsonplaceholder.typicode.com/users"),this.getDatafromServer("https://jsonplaceholder.typicode.com/todos")]);case 4:t=e.sent,r=Object(i.a)(t,2),n=r[0],a=r[1],o=a.map(function(e){return P({},e,{user:n.find(function(t){return t.id===e.userId})})}),this.setState({todos:o}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),this.setState({error:!0});case 15:return e.prev=15,this.setState({isLoading:!1}),e.finish(15);case 18:case"end":return e.stop()}},e,this,[[1,12,15,18]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.todos,r=e.isLoading,n=e.error,o=e.sortingType;if(null===t)return a.a.createElement(a.a.Fragment,null,n?a.a.createElement("p",null,"Opps...Try again later."):null,a.a.createElement("button",{type:"button",onClick:this.loadTodos},"Load".concat(r?"ing...":"")));var c=this.state.todos.sort(function(e,t){return e[o]>t[o]?1:-1});return a.a.createElement(a.a.Fragment,null,a.a.createElement(w,{changeSortingType:this.changeSortingType}),a.a.createElement(S,{todos:c}))}}]),t}(n.Component);var N=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"Dynamic list of todos"),a.a.createElement(D,null))};c.a.render(a.a.createElement(N,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.bb27f1c7.chunk.js.map