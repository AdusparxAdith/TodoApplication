(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,o){e.exports=o(24)},21:function(e,t,o){},24:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(12),c=o.n(r),l=(o(21),o(7)),i=o(13),s=o(1),d=o(2),u=o(4),p=o(3),h=o(5),f=function(e){function t(){var e,o;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).getCrossStyle=function(){var e=o.props.theme;return{background:e.background,color:e.color,border:"none",fontSize:"90%",padding:"1px 7px",borderRadius:"50%",cursor:"pointer",float:"right",transition:"1.1s"}},o.getTodoStyle=function(){return{background:"#f1f2f6",padding:"2px 12px",borderBottom:"1px #ccc dotted",color:o.props.todo.completed?o.props.theme.line:"black",textDecoration:o.props.todo.completed?"line-through":"none",fontSize:"110%",fontFamily:"Overlock",transition:"1s"}},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,o=e.task;return a.a.createElement("div",{style:this.getTodoStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",defaultChecked:this.props.todo.completed,onChange:this.props.markComplete.bind(this,t)})," "," ",o,a.a.createElement("button",{style:this.getCrossStyle(),onClick:this.props.delTask.bind(this,t)},"-")))}}]),t}(n.Component),m=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.tasks.map(function(t){return a.a.createElement(f,{key:t.id,todo:t,markComplete:e.props.markComplete,delTask:e.props.delTask,theme:e.props.theme})})}}]),t}(n.Component),b=function(e){function t(){var e,o;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).getButtonStyle=function(){return{background:o.props.theme.header.background,border:"2px solid white",fontSize:"90%",height:"20px",width:"20px",borderRadius:"50%",cursor:"pointer",margin:"0 2px",boxShadow:"1px 1px 3px rgba(0, 0, 0, 0.7)"}},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement("button",{style:this.getButtonStyle(),onClick:this.props.changeTheme.bind(this,this.props.theme.id)})}}]),t}(a.a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.themeArr.map(function(t){return a.a.createElement(b,{key:t.id,theme:t,changeTheme:e.props.changeTheme})})}}]),t}(a.a.Component),k=function(e){function t(){var e,o;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).getStyle=function(){var e=o.props.theme;return{background:e.background,color:e.color,textAlign:"center",padding:"10px",cursor:"pointer",transition:"0.9s"}},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=o(9);return a.a.createElement("div",null,a.a.createElement("div",{className:"themeBar",style:y},a.a.createElement(g,{themeArr:e,changeTheme:this.props.changeTheme})),a.a.createElement("header",{style:this.getStyle()},a.a.createElement("h1",null,"TodoList")))}}]),t}(a.a.Component),y={textAlign:"center",fontStyle:"oblique",position:"absolute",bottom:"50px",right:"0",left:"0"},v=o(6),O=function(e){function t(){var e,o;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={title:"",placeholder:"Add Todo.."},o.getSubmitStyle=function(){var e=o.props.theme.subButton;return{background:e.background,color:e.color,flex:"1",display:"inline-block",border:"none",fontSize:"120%",padding:"7px 20px",cursor:"pointer",fontFamily:"Overlock",transition:"1s"}},o.onSubmit=function(e){e.preventDefault(),""!==o.state.title?(S="",o.props.addTodo(o.state.title),o.setState({title:""}),o.setState({placeholder:"Add Todo.."})):o.setState({placeholder:"Add a valid Todo and try again.."})},o.takeInput=function(e){return o.setState(Object(v.a)({},e.target.name,e.target.value))},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillUpdate",value:function(e,t){S=e.theme.placeholder}},{key:"render",value:function(){return S=this.props.theme.placeholder,a.a.createElement("form",{style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"15px"},placeholder:this.state.placeholder,className:"todo ".concat(S),value:this.state.title,onChange:this.takeInput}),a.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:this.getSubmitStyle(),onClick:this.onSubmit}))}}]),t}(a.a.Component),S="";function j(){return a.a.createElement("div",{style:x},a.a.createElement("p",null,"~Made with love, by Adusparx"))}var x={textAlign:"center",fontStyle:"oblique",position:"absolute",bottom:"0",right:"0",left:"0"},T=o(14),E=o.n(T),C=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[],theme:{header:{background:"#eb3b5a",color:"#fff"},subButton:{background:"#fc5c65",color:"#fff"},clearButton:{background:"#fc5c65",color:"#fff",line:"#fc5c65"}}},n.changeTheme=function(e){var t=o(9),a=Object(i.a)({},t.filter(function(t){return t.id===e}));n.setState({theme:function(){for(var e in a)return a[e]}()})},n.addTodo=function(e){var t={id:E.a.v4(),task:e,completed:!1};n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t])})},n.delTask=function(e){n.setState({todos:Object(l.a)(n.state.todos.filter(function(t){return t.id!==e}))})},n.markComplete=function(e){n.setState({todos:n.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("storedTodos",JSON.stringify(t.todos)),localStorage.setItem("storedTheme",JSON.stringify(t.theme)),localStorage.setItem("timestamp",Date.now())}},{key:"componentWillMount",value:function(){localStorage.getItem("storedTodos")&&this.setState({todos:JSON.parse(localStorage.getItem("storedTodos"))}),localStorage.getItem("storedTheme")&&this.setState({theme:JSON.parse(localStorage.getItem("storedTheme"))})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(k,{theme:this.state.theme.header,changeTheme:this.changeTheme}),a.a.createElement(O,{addTodo:this.addTodo,theme:this.state.theme}),a.a.createElement(m,{tasks:this.state.todos,markComplete:this.markComplete,delTask:this.delTask,theme:this.state.theme.clearButton}),a.a.createElement(j,null))}}]),t}(n.Component);c.a.render(a.a.createElement(C,null),document.getElementById("root"))},9:function(e,t){e.exports=[{id:1,header:{background:"#eb3b5a",color:"#fff"},subButton:{background:"#fc5c65",color:"#fff"},clearButton:{background:"#fc5c65",color:"#fff",line:"#fc5c65"},placeholder:"redtodo"},{id:4,header:{background:"#16a085",color:"#fff"},subButton:{background:"#1abc9c",color:"#fff"},clearButton:{background:"#1abc9c",color:"#fff",line:"#1abc9c"},placeholder:"greentodo"},{id:3,header:{background:"#fff176",color:"#000000"},subButton:{background:"#fff59d",color:"#000000"},clearButton:{background:"#FBEDBA",color:"#130f40",line:"#000000"},placeholder:"yellowtodo"},{id:2,header:{background:"#2d98da",color:"#fff"},subButton:{background:"#45aaf2",color:"#fff"},clearButton:{background:"#45aaf2",color:"#fff",line:"#45aaf2"},placeholder:"bluetodo"}]}},[[15,1,2]]]);
//# sourceMappingURL=main.3c881f9e.chunk.js.map