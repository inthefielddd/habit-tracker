(this["webpackJsonphabit-tracker_myself"]=this["webpackJsonphabit-tracker_myself"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(9),r=n.n(o),i=(n(16),n(10)),l=n(6),h=n(2),b=n(3),u=n(5),d=n(4),j=(n(17),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.hanldeDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){console.log("habit ".concat(this.props.habit.name," mounted"))}},{key:"componentWillUnmount",value:function(){console.log("habit ".concat(this.props.habit.name,"will unmounted"))}},{key:"render",value:function(){console.log("habit:".concat(this.props.habit.name));var e=this.props.habit,t=e.name,n=e.count;return Object(a.jsxs)("li",{className:"habit",children:[Object(a.jsx)("span",{className:"habit-name",children:t}),Object(a.jsx)("span",{className:"habit-count",children:n}),Object(a.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(a.jsx)("i",{className:"fas fa-plus-square"})}),Object(a.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(a.jsx)("i",{className:"fas fa-minus-square"})}),Object(a.jsx)("button",{className:"habit-button habit-delete",onClick:this.hanldeDelete,children:Object(a.jsx)("i",{className:"fas fa-trash"})})]})}}]),n}(c.PureComponent)),m=Object(c.memo)((function(e){var t=s.a.createRef(),n=s.a.createRef();return Object(a.jsxs)("form",{ref:t,className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&e.onAdd(c),t.current.reset()},children:[Object(a.jsx)("input",{ref:n,type:"text",className:"add-input",placeholder:"Habit"}),Object(a.jsx)("button",{className:"add-btn",children:"Add"})]})})),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return console.log("habits"),Object(a.jsxs)("div",{className:"habits",children:[Object(a.jsx)(m,{onAdd:this.props.onAdd}),Object(a.jsx)("ul",{children:this.props.habits.map((function(t){return Object(a.jsx)(j,{habit:t,onIncrement:e.props.onIncrement,onDecrement:e.props.onDecrement,onDelete:e.props.onDelete},t.id)}))}),Object(a.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(c.Component),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return console.log("navbar"),Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(a.jsx)("span",{className:"navbar-title",children:"Habit Tracker"}),Object(a.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(c.PureComponent),O=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}]},e.handleIncrement=function(t){console.log("handleIncrement ".concat(t.name));var n=e.state.habits.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},t),{},{count:t.count+1}):e}));e.setState({habits:n})},e.handleDecrement=function(t){console.log("handleDecrement ".concat(t.name));var n=e.state.habits.map((function(e){if(e.id===t.id){var n=t.count-1;return Object(l.a)(Object(l.a)({},t),{},{count:n<0?0:n})}return e}));e.setState({habits:n})},e.hanldeDelete=function(t){console.log("hanldeDelete ".concat(t.name));var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleAdd=function(t){var n=[].concat(Object(i.a)(e.state.habits),[{id:Date.now(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return 0!==e.count?Object(l.a)(Object(l.a)({},e),{},{count:0}):e}));e.setState({habits:t})},e}return Object(b.a)(n,[{key:"render",value:function(){return console.log("app"),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),Object(a.jsx)(p,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.hanldeDelete,onAdd:this.handleAdd,onReset:this.handleReset})]})}}]),n}(c.Component);n(18);r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b6e5499c.chunk.js.map