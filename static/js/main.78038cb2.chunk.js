(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t){e.exports=[{id:1,header:{background:"#eb3b5a",color:"#fff"},subButton:{background:"#fc5c65",color:"#fff"},clearButton:{background:"#fc5c65",color:"#fff",line:"#fc5c65"},placeholder:"redtodo"},{id:4,header:{background:"#16a085",color:"#fff"},subButton:{background:"#1abc9c",color:"#fff"},clearButton:{background:"#1abc9c",color:"#fff",line:"#1abc9c"},placeholder:"greentodo"},{id:3,header:{background:"#8854d0",color:"#fff"},subButton:{background:"#a55eea",color:"#fff"},clearButton:{background:"#a55eea",color:"#fff",line:"#8854d0"},placeholder:"purpletodo"},{id:2,header:{background:"#2d98da",color:"#fff"},subButton:{background:"#45aaf2",color:"#fff"},clearButton:{background:"#45aaf2",color:"#fff",line:"#45aaf2"},placeholder:"bluetodo"},{id:666,header:{background:"black",color:"#fff"},subButton:{background:"black",color:"#fff"},clearButton:{background:"black",color:"#fff",line:"black"},placeholder:"blacktodo"}]},18:function(e,t,o){e.exports=o(34)},24:function(e,t,o){},28:function(e,t,o){e.exports=o.p+"static/media/reward.2fa06881.png"},31:function(e,t,o){e.exports=o.p+"static/media/logo.bd41593c.png"},32:function(e,t,o){e.exports=o.p+"static/media/arrow.f681fb2d.png"},33:function(e,t){e.exports=[{id:"",task:"Meet two new people",completed:!1,special:!0},{id:"",task:"Go jogging",completed:!1,special:!0},{id:"",task:"Help someone in need",completed:!1,special:!0},{id:"",task:"Double tap TodoList Header for a surprise",completed:!1,special:!0},{id:"",task:"Get some MindSpace",completed:!1,special:!0},{id:"",task:"Make a friend",completed:!1,special:!0},{id:"",task:"Chill out, you've done enough",completed:!1,special:!0}]},34:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(15),c=o.n(r),s=(o(24),o(6)),l=o(16),i=o(1),d=o(2),p=o(4),u=o(3),h=o(5),m=o(7),f=o(10),b=o(28),g=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(p.a)(this,Object(u.a)(t).call(this))).delTaskEvent=function(t){e.setState({flag:!0}),setTimeout(function(){e.props.delTask(t)},600)},e.getCrossStyle=function(){var t=e.props.theme;return{background:t.background,color:t.color,border:"none",fontSize:"90%",padding:"1px 7px",borderRadius:"50%",cursor:"pointer",float:"right",transition:"1.1s"}},e.getTodoStyle=function(){return e.props.todo.special?{background:"#ffeaa7",border:"1.5px solid #FFCF40",padding:"2px 12px",color:e.props.todo.completed?e.props.theme.line:"black",textDecoration:e.props.todo.completed?"line-through":"none",fontSize:"110%",fontFamily:"Overlock",transition:"1s"}:{padding:"2px 12px",borderBottom:"1px #ccc solid",color:e.props.todo.completed?e.props.theme.line:"black",textDecoration:e.props.todo.completed?"line-through":"none",fontSize:"110%",fontFamily:"Overlock"}},e.state={flag:!1},e.delTaskEvent=e.delTaskEvent.bind(Object(m.a)(Object(m.a)(e))),e}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e={display:this.props.todo.special?"inline":"none",position:"absolute",left:"0px",top:"-10px"},t={display:this.props.todo.special?"inline":"none",position:"absolute",left:"25px",top:"-12px",fontStyle:"oblique",fontSize:"0.7rem"},o=this.props.todo,a=o.id,r=o.task;return n.a.createElement(f.a,{onSwipe:this.delTaskEvent.bind(this,a),direction:"DIRECTION_RIGHT"},n.a.createElement("div",{className:"todoItem ".concat(this.state.flag?"tododel":""),style:this.getTodoStyle()}," ",n.a.createElement("img",{src:b,alt:"Reward",width:"20px",style:e}),n.a.createElement("p",{style:t},"Get reward"),n.a.createElement("p",null,n.a.createElement("input",{type:"checkbox",defaultChecked:this.props.todo.completed,onChange:this.props.markComplete.bind(this,a)})," ",r,n.a.createElement("button",{style:this.getCrossStyle(),onClick:this.delTaskEvent.bind(this,a)},"-"))))}}]),t}(a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.tasks.map(function(t){return n.a.createElement(g,{key:t.id,todo:t,markComplete:e.props.markComplete,delTask:e.props.delTask,theme:e.props.theme})})}}]),t}(a.Component),y=o(8),O=o.n(y),v=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t={flex:"1",border:"0.0099rem solid",borderColor:this.props.theme.background,color:this.props.theme.background},o={textAlign:"center",cursor:"pointer",margin:"7px"};return this.props.items.map(function(a){return n.a.createElement("div",{className:"barItem",key:O.a.v4(),style:t,onClick:e.props.showTodos.bind(e,a.toLowerCase())},n.a.createElement("p",{style:o},a))})}}]),t}(a.Component),S=o(31),j=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={secret:!1},o.secretCSS=function(){o.setState(function(e){return{secret:!e.secret}})},o.getHeaderStyle=function(){var e=o.props.theme;return{background:e.background,color:e.color,textAlign:"center",padding:"10px",cursor:"pointer",transition:"all 0.9s"}},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",null,n.a.createElement(f.a,{onDoubleTap:this.secretCSS},n.a.createElement("header",{className:this.state.secret?"secretGlow":"secretGlowR",style:this.getHeaderStyle()},n.a.createElement("h1",null,"Todo",n.a.createElement("span",{id:this.state.secret?"spanClass":""},"L"),"ist"))),n.a.createElement("img",{className:this.state.secret?"imgShake":"headImg",src:S,alt:"Failed to load",width:"30px"})),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement(v,{theme:this.props.theme,items:["All","Completed","Pending"],showTodos:this.props.showTodos})))}}]),t}(n.a.Component),T=o(9),x=o(32),w=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={title:"",placeholder:"Add Todo.."},o.getSubmitStyle=function(){var e=o.props.theme.subButton;return{background:e.background,color:e.color,display:"inline-block",border:"none",padding:"1px 25px",cursor:"pointer",fontFamily:"Overlock",transition:"1s"}},o.onSubmit=function(e){e.preventDefault(),""!==o.state.title?(E="",o.props.addTodo(o.state.title),o.setState({title:""}),o.setState({placeholder:"Add Todo.."})):o.setState({placeholder:"Add a valid Todo and try again.."})},o.takeInput=function(e){return o.setState(Object(T.a)({},e.target.name,e.target.value))},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillUpdate",value:function(e,t){E=e.theme.placeholder}},{key:"render",value:function(){return E=this.props.theme.placeholder,n.a.createElement("form",{style:{display:"flex"}},n.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"15px"},placeholder:this.state.placeholder,className:"addTodo ".concat(E),value:this.state.title,onChange:this.takeInput}),n.a.createElement("input",{type:"submit",value:"submit",className:"sbtnInput",style:{display:"none"},onClick:this.onSubmit}),n.a.createElement("div",{className:"sbtn",style:this.getSubmitStyle(),onClick:this.onSubmit},n.a.createElement("img",{src:x,alt:"submit",width:"30px"})))}}]),t}(n.a.Component),E="",C=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).getButtonStyle=function(){return{background:o.props.theme.header.background,fontSize:"90%",height:"20px",width:"20px",borderRadius:"50%",cursor:"pointer",margin:"0 2px",boxShadow:"1px 1px 3px rgba(0, 0, 0, 0.7)",transition:"all .1s ease-in-out"}},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("button",{className:"themeBarItem",style:this.getButtonStyle(),onClick:this.props.changeTheme.bind(this,this.props.theme.id)})}}]),t}(n.a.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return this.props.themeArr.map(function(t){return n.a.createElement(C,{key:t.id,theme:t,changeTheme:e.props.changeTheme})})}}]),t}(n.a.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=o(14);return n.a.createElement("div",{className:"footer",style:A},n.a.createElement(I,{themeArr:e,changeTheme:this.props.changeTheme}),n.a.createElement("p",null,"~Made with love, by"," ",n.a.createElement("span",{style:{color:this.props.theme.background}},"Adusparx")," ~ v4.0"))}}]),t}(n.a.Component),A={clear:"both",position:"absolute",textAlign:"center",height:"40px",right:"0",marginTop:"10px",left:"0"},N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[],theme:{header:{background:"#eb3b5a",color:"#fff"},subButton:{background:"#fc5c65",color:"#fff"},clearButton:{background:"#fc5c65",color:"#fff",line:"#fc5c65"},placeholder:"redtodo"},showList:[]},a.changeTheme=function(e){var t=o(14),n=Object(l.a)({},t.filter(function(t){return t.id===e}));a.setState({theme:function(){for(var e in n)return n[e]}()})},a.addTodo=function(e){var t={id:O.a.v4(),task:e,completed:!1};a.setState({todos:a.state.todos.concat(t),showList:a.state.todos.concat(t)})},a.delTask=function(e){a.setState({todos:Object(s.a)(a.state.todos.filter(function(t){return t.id!==e})),showList:Object(s.a)(a.state.showList.filter(function(t){return t.id!==e}))})},a.markComplete=function(e){a.setState({todos:a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a.showTodos=function(e){"completed"===e?a.setState({showList:Object(s.a)(a.state.todos.filter(function(e){return!0===e.completed}))}):"all"===e?a.setState({showList:Object(s.a)(a.state.todos)}):"pending"===e&&a.setState({showList:Object(s.a)(a.state.todos.filter(function(e){return!1===e.completed}))})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.showTodos("all")}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("storedTodos",JSON.stringify(t.todos)),localStorage.setItem("storedTheme",JSON.stringify(t.theme)),localStorage.setItem("timestamp",Date.now())}},{key:"componentWillMount",value:function(){var e=new Date;if(e-new Date(localStorage.getItem("updatedOn"))>=432e5){var t=o(33),a=t[Math.floor(Math.random()*t.length)];a.id=O.a.v4(),this.setState({todos:[].concat(Object(s.a)(this.state.todos),[a])}),localStorage.setItem("updatedOn",e)}localStorage.getItem("storedTodos")&&this.setState({todos:JSON.parse(localStorage.getItem("storedTodos"))}),localStorage.getItem("storedTheme")&&this.setState({theme:JSON.parse(localStorage.getItem("storedTheme"))})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{theme:this.state.theme.header,changeTheme:this.changeTheme,showTodos:this.showTodos}),n.a.createElement(w,{addTodo:this.addTodo,theme:this.state.theme}),n.a.createElement(k,{tasks:this.state.showList,markComplete:this.markComplete,delTask:this.delTask,theme:this.state.theme.clearButton}),n.a.createElement(B,{theme:this.state.theme.header,changeTheme:this.changeTheme}))}}]),t}(a.Component);c.a.render(n.a.createElement(N,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.78038cb2.chunk.js.map