(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t){e.exports=[{id:1,header:{background:"#eb3b5a",color:"#fff"},subButton:{background:"#fc5c65",color:"#fff"},clearButton:{background:"#fc5c65",color:"#fff",line:"#fc5c65"},placeholder:"redtodo"},{id:4,header:{background:"#16a085",color:"#fff"},subButton:{background:"#1abc9c",color:"#fff"},clearButton:{background:"#1abc9c",color:"#fff",line:"#1abc9c"},placeholder:"greentodo"},{id:3,header:{background:"#8854d0",color:"#fff"},subButton:{background:"#a55eea",color:"#fff"},clearButton:{background:"#a55eea",color:"#fff",line:"#8854d0"},placeholder:"purpletodo"},{id:2,header:{background:"#2d98da",color:"#fff"},subButton:{background:"#45aaf2",color:"#fff"},clearButton:{background:"#45aaf2",color:"#fff",line:"#45aaf2"},placeholder:"bluetodo"},{id:666,header:{background:"black",color:"#fff"},subButton:{background:"black",color:"#fff"},clearButton:{background:"black",color:"#fff",line:"black"},placeholder:"blacktodo"}]},18:function(e,t,o){e.exports=o(31)},24:function(e,t,o){},30:function(e,t){e.exports=[{id:"",task:"Meet two new people",completed:!1,special:!0},{id:"",task:"Go jogging",completed:!1,special:!0},{id:"",task:"Help someone in need",completed:!1,special:!0}]},31:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(14),c=o.n(r),l=(o(24),o(9)),i=o(15),s=o(1),d=o(2),u=o(5),p=o(3),h=o(4),f=o(6),m=o(16),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).delTaskEvent=function(t){e.setState({flag:!0}),setTimeout(function(){e.props.delTask(t)},600)},e.getCrossStyle=function(){var t=e.props.theme;return{background:t.background,color:t.color,border:"none",fontSize:"90%",padding:"1px 7px",borderRadius:"50%",cursor:"pointer",float:"right",transition:"1.1s"}},e.getTodoStyle=function(){return e.props.todo.special?{background:"#f1f2f6",border:"1.5px solid #FFCF40",padding:"2px 12px",color:e.props.todo.completed?e.props.theme.line:"black",textDecoration:e.props.todo.completed?"line-through":"none",fontSize:"110%",fontFamily:"Overlock",transition:"1s"}:{padding:"2px 12px",borderBottom:"1px #ccc dotted",color:e.props.todo.completed?e.props.theme.line:"black",textDecoration:e.props.todo.completed?"line-through":"none",fontSize:"110%",fontFamily:"Overlock"}},e.state={flag:!1},e.delTaskEvent=e.delTaskEvent.bind(Object(f.a)(Object(f.a)(e))),e}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,o=e.task;return n.a.createElement(m.a,{onSwipe:this.delTaskEvent.bind(this,t)},n.a.createElement("div",{onClick:this.props.markComplete.bind(this,t),className:"todoItem ".concat(this.state.flag?"tododel":""),style:this.getTodoStyle()},n.a.createElement("p",null,n.a.createElement("input",{type:"checkbox",defaultChecked:this.props.todo.completed,onChange:this.props.markComplete.bind(this,t)})," ",o,n.a.createElement("button",{style:this.getCrossStyle(),onClick:this.delTaskEvent.bind(this,t)},"-"))))}}]),t}(a.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.tasks.map(function(t){return n.a.createElement(b,{key:t.id,todo:t,markComplete:e.props.markComplete,delTask:e.props.delTask,theme:e.props.theme})})}}]),t}(a.Component),k=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).getButtonStyle=function(){return{background:o.props.theme.header.background,border:"2px solid white",fontSize:"90%",height:"20px",width:"20px",borderRadius:"50%",cursor:"pointer",margin:"0 2px",boxShadow:"1px 1px 3px rgba(0, 0, 0, 0.7)"}},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("button",{style:this.getButtonStyle(),onClick:this.props.changeTheme.bind(this,this.props.theme.id)})}}]),t}(n.a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.themeArr.map(function(t){return n.a.createElement(k,{key:t.id,theme:t,changeTheme:e.props.changeTheme})})}}]),t}(n.a.Component),v=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).getStyle=function(){var e=o.props.theme;return{background:e.background,color:e.color,textAlign:"center",padding:"10px",cursor:"pointer",transition:"0.9s"}},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=o(11);return n.a.createElement("div",null,n.a.createElement("div",{className:"themeBar",style:O},n.a.createElement(y,{themeArr:e,changeTheme:this.props.changeTheme})),n.a.createElement("header",{style:this.getStyle()},n.a.createElement("h1",null,"TodoList")))}}]),t}(n.a.Component),O={textAlign:"center",fontStyle:"oblique",position:"absolute",bottom:"50px",right:"0",left:"0"},S=o(7),j=function(e){function t(){var e,o;Object(s.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",placeholder:"Add Todo.."},o.getSubmitStyle=function(){var e=o.props.theme.subButton;return{background:e.background,color:e.color,flex:"1",display:"inline-block",border:"none",fontSize:"120%",padding:"7px 20px",cursor:"pointer",fontFamily:"Overlock",transition:"1s"}},o.onSubmit=function(e){e.preventDefault(),""!==o.state.title?(T="",o.props.addTodo(o.state.title),o.setState({title:""}),o.setState({placeholder:"Add Todo.."})):o.setState({placeholder:"Add a valid Todo and try again.."})},o.takeInput=function(e){return o.setState(Object(S.a)({},e.target.name,e.target.value))},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillUpdate",value:function(e,t){T=e.theme.placeholder}},{key:"render",value:function(){return T=this.props.theme.placeholder,n.a.createElement("form",{style:{display:"flex"}},n.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"15px"},placeholder:this.state.placeholder,className:"addTodo ".concat(T),value:this.state.title,onChange:this.takeInput}),n.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:this.getSubmitStyle(),onClick:this.onSubmit}))}}]),t}(n.a.Component),T="";function x(){return n.a.createElement("div",{style:E},n.a.createElement("p",null,"~Made with love, by Adusparx ~ v1.0"))}var E={textAlign:"center",fontStyle:"oblique",position:"absolute",bottom:"0",right:"0",left:"0"},C=o(8),w=o.n(C),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[],theme:{header:{background:"#eb3b5a",color:"#fff"},subButton:{background:"#fc5c65",color:"#fff"},clearButton:{background:"#fc5c65",color:"#fff",line:"#fc5c65"},placeholder:"redtodo"}},a.changeTheme=function(e){var t=o(11),n=Object(i.a)({},t.filter(function(t){return t.id===e}));a.setState({theme:function(){for(var e in n)return n[e]}()})},a.addTodo=function(e){var t={id:w.a.v4(),task:e,completed:!1};a.setState({todos:a.state.todos.concat(t)})},a.delTask=function(e){a.setState({todos:Object(l.a)(a.state.todos.filter(function(t){return t.id!==e}))})},a.markComplete=function(e){a.setState({todos:a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=new Date;if(console.log(e),e-new Date(localStorage.getItem("updatedOn"))>=864e5){var t=o(30),a=t[Math.floor(Math.random()*t.length)];a.id=w.a.v4(),this.setState({todos:[].concat(Object(l.a)(this.state.todos),[a])}),localStorage.setItem("updatedOn",e)}}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("storedTodos",JSON.stringify(t.todos)),localStorage.setItem("storedTheme",JSON.stringify(t.theme)),localStorage.setItem("timestamp",Date.now())}},{key:"componentWillMount",value:function(){localStorage.getItem("storedTodos")&&this.setState({todos:JSON.parse(localStorage.getItem("storedTodos"))}),localStorage.getItem("storedTheme")&&this.setState({theme:JSON.parse(localStorage.getItem("storedTheme"))})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(v,{theme:this.state.theme.header,changeTheme:this.changeTheme}),n.a.createElement(j,{addTodo:this.addTodo,theme:this.state.theme}),n.a.createElement(g,{tasks:this.state.todos,markComplete:this.markComplete,delTask:this.delTask,theme:this.state.theme.clearButton}),n.a.createElement(x,null))}}]),t}(a.Component);c.a.render(n.a.createElement(B,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.31c7f473.chunk.js.map