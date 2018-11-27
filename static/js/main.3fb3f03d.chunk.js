(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,a,t){e.exports=t(300)},300:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),i=t.n(l),o=t(47),s=t(20),c=t(22),m=t(23),u=t(25),h=t(24),d=t(26),p=t(17),g=t.n(p),v=t(5),E=t.n(v),y=t(58),f=t.n(y),w=t(124),b=t.n(w),S=t(125),C=t.n(S),P=t(126),k=t(6),O=t.n(k),N=t(113),x=t.n(N),j=t(116),I=t.n(j),L=t(117),R=t.n(L),W=t(120),D=t.n(W),G=t(118),T=t.n(G),A=t(119),M=t.n(A),B=t(75),_=t.n(B),V=t(115),H=t.n(V),U=t(18),Y={success:x.a,warning:H.a,error:I.a,info:R.a};var z=Object(U.withStyles)(function(e){return{success:{backgroundColor:T.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:M.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var a=e.classes,t=e.className,n=e.message,l=e.onClose,i=e.variant,o=Object(P.a)(e,["classes","className","message","onClose","variant"]),s=Y[i];return r.a.createElement(_.a,Object.assign({className:O()(a[i],t),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:a.message},r.a.createElement(s,{className:O()(a.icon,a.iconVariant)}),n),action:[r.a.createElement(f.a,{key:"close","aria-label":"Close",color:"inherit",className:a.close,onClick:l},r.a.createElement(D.a,{className:a.icon}))]},o))}),F=t(16),J=t.n(F),X=t(59),$=t.n(X),q=t(61),K=t.n(q),Q=t(14),Z=t.n(Q),ee=t(60),ae=t.n(ee),te=t(39),ne=t.n(te),re=Object(U.withStyles)(function(e){return{button:{margin:e.spacing.unit},grid:{margin:e.spacing.unit}}})(function(e){var a=e.playersList,t=e.handleClick,n=e.classes,l=function(e,a){return e+a},i=0,o=!0,s=!1,c=void 0;try{for(var m,u=a[Symbol.iterator]();!(o=(m=u.next()).done);o=!0){var h=m.value;i+=h.scores.reduce(l)}}catch(y){s=!0,c=y}finally{try{o||null==u.return||u.return()}finally{if(s)throw c}}var d=[],p=-1,v=a.map(function(e,a){var t=e.scores.reduce(l);return t>=p&&(t===p?d.push(e.name):(d=[e.name],p=t)),{percentage:(t/i*100).toFixed(2),name:e.name,totalScore:t,color:e.color,id:a}});return r.a.createElement(E.a,{container:!0,justify:"center"},r.a.createElement(E.a,{item:!0,xs:12,className:n.grid},r.a.createElement(g.a,{variant:"h5",gutterBottom:!0,style:{textAlign:"center"}},"Game Over! ",d.length>1?d.join(", "):d[0]," ",d.length>1?"Win!":"Wins!")),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement($.a,{padding:"dense"},r.a.createElement(ae.a,null,r.a.createElement(ne.a,null,r.a.createElement(Z.a,null,"Name"),r.a.createElement(Z.a,{numeric:!0},"Total Score"),r.a.createElement(Z.a,{numeric:!0},"Total %"),r.a.createElement(Z.a,{numeric:!0},"Color"))),r.a.createElement(K.a,null,v.map(function(e){return r.a.createElement(ne.a,{key:e.id},r.a.createElement(Z.a,{component:"th",scope:"row"},e.name),r.a.createElement(Z.a,{numeric:!0},e.totalScore),r.a.createElement(Z.a,{numeric:!0},e.percentage),r.a.createElement(Z.a,{style:{background:e.color}}))})))),r.a.createElement(E.a,{item:!0},r.a.createElement(J.a,{variant:"contained",color:"primary",className:n.button,onClick:t},"New Game")))}),le=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).saveBoard=function(){var e=document.createElement("a"),a=document.getElementById("physCanvas");e.href=a.toDataURL(),e.download="board.png",e.click()},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.handleClick,t=e.classes,n=e.roundNum,l=e.numPlayers;return r.a.createElement(E.a,{container:!0,justify:"center",className:t.grid},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(g.a,{variant:"h5",gutterBottom:!0,style:{textAlign:"center"}},"Round ",n," Over!")),n+1<=l?r.a.createElement(E.a,{item:!0},r.a.createElement(J.a,{variant:"contained",color:"primary",className:t.button,onClick:a},"Next Round")):null,n+1>l?r.a.createElement(E.a,{item:!0},r.a.createElement(J.a,{variant:"contained",color:"primary",className:t.button,onClick:a},"Next")):null,r.a.createElement(E.a,{item:!0},r.a.createElement(J.a,{variant:"contained",color:"primary",className:t.button,onClick:this.saveBoard},"Save Board")))}}]),a}(r.a.Component),ie=Object(U.withStyles)(function(e){return{button:{margin:e.spacing.unit},grid:{margin:e.spacing.unit}}})(le),oe=function(e){var a=e.scores,t=e.playersList,n=e.numStones,l=0,i=!0,o=!1,s=void 0;try{for(var c,m=a[Symbol.iterator]();!(i=(c=m.next()).done);i=!0){var u=c.value;l+=u}}catch(p){o=!0,s=p}finally{try{i||null==m.return||m.return()}finally{if(o)throw s}}var h=a.map(function(e){return 0===l?0:(e/l*100).toFixed(2)}),d=t.map(function(e,t){return{name:e.name,color:e.color,score:a[t],weightRemaining:e.weightRemaining,stonesRemaining:n-e.piecesPlaced,percentage:h[t],id:t}});return r.a.createElement($.a,{padding:"dense"},r.a.createElement(ae.a,null,r.a.createElement(ne.a,null,r.a.createElement(Z.a,null,"Name"),r.a.createElement(Z.a,{numeric:!0},"Score"),r.a.createElement(Z.a,{numeric:!0},"Weight Left"),r.a.createElement(Z.a,{numeric:!0},"Stones Left"),r.a.createElement(Z.a,{numeric:!0},"%"),r.a.createElement(Z.a,{numeric:!0},"Color"))),r.a.createElement(K.a,null,d.map(function(a){return r.a.createElement(ne.a,{key:a.id,selected:a.id===e.currentPlayer},r.a.createElement(Z.a,{component:"th",scope:"row"},a.name),r.a.createElement(Z.a,{numeric:!0},a.score),r.a.createElement(Z.a,{numeric:!0},a.weightRemaining),r.a.createElement(Z.a,{numeric:!0},a.stonesRemaining),r.a.createElement(Z.a,{numeric:!0},a.percentage),r.a.createElement(Z.a,{style:{background:a.color}}))})))},se=["red","blue","green","orange","yellow","purple","silver","olive","teal"],ce=[[255,0,0],[0,0,255],[0,255,0],[255,165,0],[255,255,0],[128,0,128],[192,192,192],[128,128,0],[0,128,128]],me=function(e,a,t,n){var r=!0,l=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var c=o.value,m=c.x,u=c.y;if(Math.pow(e-m,2)+Math.pow(a-u,2)<Math.pow(n,2))return!1}}catch(h){l=!0,i=h}finally{try{r||null==s.return||s.return()}finally{if(l)throw i}}return!0},ue=function(e,a,t,n){for(var r=[],l=[],i=0;i<n;i++)l.push(0);for(var o=0;o<e;o+=1){r.push([]);for(var s=0;s<a;s+=1){for(var c=[],m=0;m<n;m++)c.push(0);var u=!0,h=!1,d=void 0;try{for(var p,g=t[Symbol.iterator]();!(u=(p=g.next()).done);u=!0){var v=p.value,E=v.weight/(Math.pow(v.x-o,2)+Math.pow(v.y-s,2));c[v.playerInd]+=E}}catch(f){h=!0,d=f}finally{try{u||null==g.return||g.return()}finally{if(h)throw d}}var y=Math.max.apply(Math,c);0!==y?(r[o][s]=c.indexOf(y),l[r[o][s]]+=1):r[o][s]=-1}}return{owners:r,scores:l}},he=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleClick=function(e){var a=t.canvas.current.getBoundingClientRect(),n=e.clientX-a.left,r=e.clientY-a.top;t.props.handleCanvasClick&&t.props.handleCanvasClick(n,r)},t.handleHover=function(e){if(!t.props.handleCanvasClick)return!1;var a=t.props,n=a.currentPlayer,r=a.piecesList,l=a.minDist,i=t.hoverCanvas.current.getContext("2d");t.clearCanvas(i);var o=t.hoverCanvas.current.getBoundingClientRect(),s=e.clientX-o.left,c=e.clientY-o.top,m=me(s,c,r,l),u=ce[n][0],h=ce[n][1],d=ce[n][2];i.beginPath(),i.arc(s,c,5,0,2*Math.PI,!1),m&&(i.fillStyle="rgb(".concat(u,", ").concat(h,", ").concat(d,", 1)"),i.fill(),i.lineWidth=2,i.strokeStyle="#ffcc00",i.stroke())},t.canvas=r.a.createRef(),t.hoverCanvas=r.a.createRef(),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.piecesList,t=e.owners,n=e.newPiece,r=this.canvas.current.getContext("2d");this.clearCanvas(r),this.drawBoard(r,t),this.drawStones(r,a,n)}},{key:"componentDidUpdate",value:function(){var e=this.props,a=e.piecesList,t=e.owners,n=e.newPiece,r=this.canvas.current.getContext("2d"),l=this.hoverCanvas.current.getContext("2d");this.clearCanvas(r),this.clearCanvas(l),this.drawBoard(r,t),this.drawStones(r,a,n)}},{key:"shouldComponentUpdate",value:function(e){return e.piecesList!==this.props.piecesList}},{key:"clearCanvas",value:function(e){e.clearRect(0,0,500,500)}},{key:"drawStones",value:function(e,a,t){for(var n=0;n<a.length;n+=1){var r=a[n],l=r.x,i=r.y,o=r.playerInd;e.beginPath(),e.arc(l,i,5,0,2*Math.PI,!1),e.fillStyle=se[o],e.fill(),e.lineWidth=1,e.strokeStyle="#003300",e.stroke()}if(t){l=t.x,i=t.y,o=t.playerInd;e.beginPath(),e.arc(l,i,5,0,2*Math.PI,!1),e.fillStyle=se[o],e.fill(),e.lineWidth=2,e.strokeStyle="#ffcc00",e.stroke()}}},{key:"drawBoard",value:function(e,a){for(var t=e.getImageData(0,0,500,500),n=t.data,r=0;r<500;r+=1)for(var l=0;l<500;l+=1){var i=4*(500*r+l),o=a[l][r];if(o>-1){for(var s=ce[o],c=0;c<3;c+=1)n[i+c]=s[c];n[i+3]=125}}e.putImageData(t,0,0)}},{key:"render",value:function(){var e=this;console.log("Rerender!");var a=this.props.classes;return r.a.createElement("div",{className:a.parentDiv},r.a.createElement("canvas",{id:"physCanvas",className:a.pCanvas,height:500,width:500,ref:this.canvas}),r.a.createElement("canvas",{className:a.hCanvas,height:500,width:500,ref:this.hoverCanvas,onClick:function(a){return e.handleClick(a)},onMouseMove:function(a){return e.handleHover(a)}}))}}]),a}(r.a.Component),de=Object(U.withStyles)(function(){return{parentDiv:{position:"relative",width:"500px",height:"500px",margin:"auto"},hCanvas:{border:"1px solid hsl(0, 0%, 0%)",position:"absolute",top:"0px",left:"0px",zIndex:1},pCanvas:{border:"1px solid hsl(0, 0%, 0%)",position:"relative",zIndex:0}}})(he),pe=t(30),ge=t(28),ve=t.n(ge),Ee=t(33),ye=t.n(Ee),fe=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleChange=function(e){return function(a){var n,r=t.validateState(Object(pe.a)({},e,a.target.value)),l=-1;"numPlayers"===e?l="showErrorPlayers":"numStones"===e?l="showErrorStones":"gravPer"===e?l="showErrorGrav":"minDist"===e&&(l="showErrorDist"),t.setState((n={},Object(pe.a)(n,e,a.target.value),Object(pe.a)(n,l,r[l]),n))}},t.handleSubmit=function(){var e=t.validateState(t.state),a=e.showErrorPlayers,n=e.showErrorStones,r=e.showErrorGrav,l=e.showErrorDist;if(a||n||r||l)t.setState({showErrorPlayers:a,showErrorStones:n,showErrorGrav:r,showErrorDist:l});else{var i=t.state,o=i.numPlayers,s=i.numStones,c=i.gravPer,m=i.minDist,u={numPlayers:o=parseInt(o),numStones:s=parseInt(s),gravPer:c=parseInt(c),minDist:m=parseInt(m)};t.props.handleSubmit(u)}},t.validateState=function(e){var a=e.numPlayers,t=e.numStones,n=e.gravPer,r=e.minDist,l=parseInt(a),i=parseInt(t),o=parseInt(n),s=parseInt(r);return{showErrorPlayers:isNaN(l)||!Number.isInteger(l)||l<=1,showErrorStones:isNaN(i)||!Number.isInteger(i)||i<1,showErrorGrav:isNaN(o)||!Number.isInteger(o)||o<=0,showErrorDist:isNaN(s)||s<0}},t.state={numPlayers:2,numStones:5,gravPer:1e3,minDist:60,showErrorPlayers:!1,showErrorStones:!1,showErrorGrav:!1,showErrorDist:!1},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.numPlayers,n=a.gravPer,l=a.numStones,i=a.minDist,o=a.showErrorDist,s=a.showErrorPlayers,c=a.showErrorGrav,m=a.showErrorStones,u=this.props.classes;return r.a.createElement(ye.a,{className:u.root,elevation:3},r.a.createElement(g.a,{variant:"h4",component:"h3"},"Game Options"),r.a.createElement(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:8},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(ve.a,{label:"Number Of Players",value:t,onChange:this.handleChange("numPlayers"),margin:"normal",variant:"outlined",error:s})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(ve.a,{label:"Available Gravity Per Player",value:n,onChange:this.handleChange("gravPer"),margin:"normal",variant:"outlined",error:c})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(ve.a,{label:"Max Stones Per Player",value:l,onChange:this.handleChange("numStones"),margin:"normal",variant:"outlined",error:m})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(ve.a,{label:"Minimum Distance",value:i,onChange:this.handleChange("minDist"),margin:"normal",variant:"outlined",error:o})),r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"contained",color:"primary",onClick:function(){return e.handleSubmit()}},"Submit"))))}}]),a}(r.a.Component),we=Object(U.withStyles)(function(e){return{root:Object(s.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,textAlign:"center"})}})(fe),be=Object(U.withStyles)(function(e){return{root:Object(s.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,textAlign:"center"})}})(function(e){var a=e.playersList,t=e.classes;return r.a.createElement(ye.a,{elevation:3,className:t.root},r.a.createElement(g.a,{variant:"h4",component:"h3"},"Player Info:"),r.a.createElement(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:8},a.map(function(a,t){return r.a.createElement(E.a,{item:!0,key:"playerInfo"+t},r.a.createElement(ve.a,{label:"Player Name:",value:a.name,onChange:e.handleChange(t),margin:"normal",variant:"outlined"}))}),r.a.createElement(E.a,{item:!0},r.a.createElement(J.a,{variant:"contained",color:"primary",onClick:e.handleSubmit},"Submit"))))}),Se=t(62),Ce=t.n(Se),Pe=t(63),ke=t.n(Pe),Oe=t(76),Ne=t.n(Oe);function xe(e){return r.a.createElement(Ne.a,Object.assign({direction:"up"},e))}var je=function(e){return r.a.createElement(g.a,Object.assign({variant:"body1"},e),e.children)},Ie=function(e){return r.a.createElement("li",null,r.a.createElement(je,e,e.children))},Le=Object(U.withStyles)(function(e){return{root:Object(s.a)({},e.mixins.gutters(),{marginTop:e.spacing.unit}),screenImg:{width:"50%",margin:"0 auto",display:"block"},gameoverImg:{width:"80%",margin:"0 auto",display:"block"}}})(function(e){var a=e.classes;return r.a.createElement(Ce.a,{open:e.open,onClose:e.handleClose,scroll:"paper","aria-labelledby":"scroll-dialog-title",TransitionComponent:xe},r.a.createElement(ke.a,null,r.a.createElement(E.a,{container:!0,justify:"center",direction:"row",spacing:16,className:a.root},r.a.createElement(E.a,{item:!0},r.a.createElement(je,{variant:"h4",paragraph:!0},"Rules of the Game")),r.a.createElement(E.a,{item:!0},r.a.createElement(je,{variant:"h5",paragraph:!0},"Overview:"),r.a.createElement("hr",null),r.a.createElement(je,{paragraph:!0},"Given a set of point-sized stones of various colors, a Gravitational Voronoi diagram is a tesselation of a plane into colored regions such that every point with integer coordinates (x, y) has the color of the stones that give it the greatest pull.")),r.a.createElement(E.a,{item:!0},r.a.createElement("img",{src:"images/board.png",alt:"board",className:a.screenImg})),r.a.createElement(E.a,{item:!0},r.a.createElement(je,{variant:"h5",paragraph:!0},"Playing a Round:"),r.a.createElement("hr",null),r.a.createElement(je,{paragraph:!0},"Graviational Voronoi is a n player game that works as follows:"),r.a.createElement("ul",null,r.a.createElement(Ie,null,"n players are each assigned a color, and are each allocated W units of weight"),r.a.createElement(Ie,null,"Each player can distribute their allotted weight across a maximum of S stones on a 500x500 board."),r.a.createElement(Ie,null,"The first player places one stone, then the second player places one stone and so on..."),r.a.createElement(Ie,null,"Each player places one stone until all players have placed S stones or have exhausted all their weight."),r.a.createElement(Ie,null,"If a player cannot place a stone (either they have used all of their weight or placed all of their stones), their turn is skipped"),r.a.createElement(Ie,null,"Additionally, every stone must be a Euclidean distance of at least d units away from any other stone.")),r.a.createElement(je,null,"n, S, W, and d are set at the beginning of every game."),r.a.createElement(je,{paragraph:!0},"The winner of a round is the player with the most controlled area at the end of the round.")),r.a.createElement(E.a,{item:!0},r.a.createElement("img",{src:"images/options.png",alt:"options",className:a.screenImg})),r.a.createElement(E.a,{item:!0},r.a.createElement(je,{variant:"h5",paragraph:!0},"Ending a Game:"),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement(Ie,null,"If there are n players, the game runs for a total of n rounds, allowing each player to go first."),r.a.createElement(Ie,null,"At the end of the game (after n rounds), each players' scores over all rounds are summed."),r.a.createElement(Ie,null,"The player with the highest combined score over all n rounds is declared the winner!"))),r.a.createElement(E.a,{item:!0},r.a.createElement("img",{src:"images/gameover.png",alt:"gameover",className:a.gameoverImg})),r.a.createElement(E.a,{item:!0},r.a.createElement(je,{variant:"h5",paragraph:!0},"Pull Calculation:"),r.a.createElement("hr",null),r.a.createElement(je,{paragraph:!0},"The pull for a color c at point p with coordinates (x, y) is calculated as follows:"),r.a.createElement(je,{paragraph:!0},"Supposing that color c has k stones placed:"),r.a.createElement("ul",null,r.a.createElement(Ie,null,"Take all k stones and compute their Euclidean distances to point p say d1, d2, ... dk."),r.a.createElement(Ie,null,"Take the weights of all k stones w1, ..., wk"),r.a.createElement(Ie,null,"pull(c, p) = (w/(d1*d1)) + (w/(d2*d2)) + ... + (w/(dk*dk)).")),r.a.createElement(je,{paragraph:!0},"It's as if we're computing the color of a point based on the color that gives the greatest pull.")),r.a.createElement(E.a,{item:!0},r.a.createElement(J.a,{onClick:e.handleClose,color:"primary",variant:"contained"},"Got It!")))))}),Re=t(123),We=t.n(Re),De=t(122),Ge=t.n(De),Te=t(121),Ae=t.n(Te),Me=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).handleChange=function(e){return function(a){var n=t.validateState(a.target.value).showErrorWeight;t.setState(Object(pe.a)({showErrorWeight:n},e,a.target.value))}},t.validateState=function(e){e||(e=t.state.selectedWeight);var a=t.props.currentPlayer.weightRemaining,n=parseInt(e);return{showErrorWeight:isNaN(n)||!Number.isInteger(n)||n>a||n<=0}},t.handleSubmit=function(){var e=t.validateState().showErrorWeight;if(e)t.setState({showErrorWeight:e});else{var a=t.state.selectedWeight;a=parseInt(a),t.props.handleClose(a)}},t.state={selectedWeight:null,showErrorWeight:!1},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.currentPlayer!==e.currentPlayer&&this.setState({selectedWeight:null,showErrorWeight:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement(Ce.a,{open:this.props.open,scroll:"paper","aria-labelledby":"weight-dialog-title"},r.a.createElement(Ae.a,{id:"weight-dialog-title"},"Weight Selection"),r.a.createElement(ke.a,null,r.a.createElement(Ge.a,null,"Please Select a Weight"),r.a.createElement(ve.a,{label:"Weight",onChange:this.handleChange("selectedWeight"),margin:"normal",variant:"outlined",error:this.state.showErrorWeight})),r.a.createElement(We.a,null,r.a.createElement(J.a,{onClick:this.props.handleCancel,color:"primary"},"Cancel"),r.a.createElement(J.a,{onClick:function(){return e.handleSubmit()},color:"primary"},"Submit")))}}]),a}(r.a.Component),Be=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(u.a)(this,Object(h.a)(a).call(this))).initialState={stage:"GAME_SETTINGS",numPlayers:2,numStones:5,minDist:60,playersList:[],gravPer:1e3,isPlaying:!1,roundNum:0},e.initialRound={piecesList:[],displayHelpBox:!1,showWeightOverlay:!1,currentPlayer:0,newPiece:null,snackOpen:!1},e.createNewPlayer=function(e,a){return{name:"Player "+(e+1),color:se[e],weightRemaining:a,piecesPlaced:0,scores:[]}},e.createNewPiece=function(e,a,t,n){return{x:e,y:a,weight:t,playerInd:n}},e.handleSubmit=function(a){var t=e.state.stage;if("GAME_SETTINGS"===t){t="PLAYER_LIST";for(var n=[],r=0;r<a.numPlayers;r++)n.push(e.createNewPlayer(r,a.gravPer));e.setState(Object(s.a)({},a,{playersList:n,stage:t}))}else"PLAYER_LIST"===t&&(t="PLAYING_ROUND",e.setState({currentPlayer:0,stage:t,isPlaying:!0}))},e.handlePlayerChange=function(a){return function(t){var n=Object(o.a)(e.state.playersList);n[a].name=t.target.value,e.setState({playersList:n})}},e.handleCanvasClick=function(a,t){e.handleBoardClick(a,t,e.state.currentPlayer)},e.handleBoardClick=function(a,t,n){var r=e.state,l=r.piecesList,i=r.minDist;me(a,t,l,i)?e.setState({showWeightOverlay:!0,newPiece:{x:a,y:t,playerInd:n}}):e.setState({snackOpen:!0})},e.getValidPlayer=function(a,t){for(var n=e.state,r=n.numPlayers,l=n.numStones,i=1;i<=r;i+=1){var o=(a+i)%r;if(t[o].weightRemaining>0&&t[o].piecesPlaced+1<=l)return o}return-1},e.handleWeightSelection=function(a){var t=e.state,n=t.piecesList,r=t.newPiece,l=t.currentPlayer,i=t.playersList,s=r.x,c=r.y,m=r.playerInd,u=Object(o.a)(n);u.push(e.createNewPiece(s,c,a,m));var h=Object(o.a)(i);h[m].weightRemaining-=a,h[m].piecesPlaced+=1;var d=e.getValidPlayer(l,h);-1===d?e.setState({piecesList:u,showWeightOverlay:!1,playersList:h,currentPlayer:-1,stage:"ROUND_OVER",newPiece:null}):e.setState({showWeightOverlay:!1,piecesList:u,currentPlayer:d,playersList:h,newPiece:null})},e.cancelWeightSelection=function(){console.log("canceled, should remove new piece"),e.setState({showWeightOverlay:!1,newPiece:null})},e.closeHelpModal=function(){e.setState({displayHelpBox:!1})},e.renderOverlay=function(){var a=e.state,t=a.stage,n=a.playersList;switch(t){case"GAME_SETTINGS":return r.a.createElement(we,{handleSubmit:e.handleSubmit});case"PLAYER_LIST":default:return r.a.createElement(be,{playersList:n,handleChange:e.handlePlayerChange,handleSubmit:e.handleSubmit})}},e.resetGame=function(){e.setState(Object(s.a)({},e.initialState,e.initialRound))},e.resetRound=function(a){for(var t=e.state,n=t.playersList,r=t.gravPer,l=t.numPlayers,i=t.roundNum,c=Object(o.a)(n),m=0;m<c.length;m+=1){var u=c[m];u.piecesPlaced=0,u.weightRemaining=r,u.scores.push(a[m])}var h="PLAYING_ROUND";i+1===l?(h="GAME_OVER",e.setState({stage:h,playersList:c,roundNum:i+1,currentPlayer:i+1})):e.setState(Object(s.a)({},e.initialRound,{stage:h,playersList:c,roundNum:i+1,currentPlayer:i+1}))},e.handleSnackClose=function(a,t){"clickaway"!==t&&e.setState({snackOpen:!1})},e.renderGame=function(){var a=e.state,t=a.piecesList,n=a.playersList,l=a.numPlayers,i=a.currentPlayer,o=a.newPiece,s=a.stage,c=a.numStones,m=a.minDist,u=a.roundNum,h=ue(500,500,t,l),d=h.scores,p=h.owners;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(de,{piecesList:t,owners:p,handleCanvasClick:"PLAYING_ROUND"===s?e.handleCanvasClick:null,newPiece:o,currentPlayer:i,minDist:m})),r.a.createElement(E.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(E.a,{container:!0},r.a.createElement(E.a,{item:!0,xs:12},"GAME_OVER"===s?r.a.createElement(re,{handleClick:e.resetGame,playersList:n,lastScores:d}):r.a.createElement(oe,{scores:d,playersList:n,currentPlayer:i,numStones:c})),r.a.createElement(E.a,{item:!0,xs:12},"ROUND_OVER"===s?r.a.createElement(ie,{numPlayers:l,roundNum:u+1,handleClick:function(){return e.resetRound(d)}}):null))))},e.state=Object(s.a)({},e.initialRound,e.initialState),e}return Object(d.a)(a,e),Object(m.a)(a,[{key:"renderScene",value:function(e){return"GAME_SETTINGS"===e?r.a.createElement(E.a,{item:!0,xs:10,sm:6,md:4},this.renderOverlay()):"PLAYER_LIST"===e?r.a.createElement(E.a,{item:!0,xs:10,sm:6,md:4},this.renderOverlay()):this.renderGame()}},{key:"render",value:function(){var e=this,a=this.state,t=a.stage,n=a.showWeightOverlay,l=a.displayHelpBox,i=a.playersList,o=a.currentPlayer,s=a.minDist;return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{container:!0,spacing:8,justify:"center"},r.a.createElement(E.a,{item:!0,xs:12},r.a.createElement(g.a,{component:"h3",variant:"h3",style:{textAlign:"center"},gutterBottom:!0},"Gravitational Voronoi",r.a.createElement(f.a,{color:"primary","aria-label":"Help",onClick:function(){return e.setState({displayHelpBox:!0})}},r.a.createElement(b.a,null)))),this.renderScene(t)),r.a.createElement(Le,{open:l,handleClose:this.closeHelpModal}),r.a.createElement(Me,{open:n,handleClose:this.handleWeightSelection,currentPlayer:i[o],handleCancel:this.cancelWeightSelection}),r.a.createElement(C.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.snackOpen,autoHideDuration:3e3,onClose:this.handleSnackClose},r.a.createElement(z,{onClose:this.handleClose,variant:"error",message:"Stones must be at least ".concat(s," units apart!")})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[127,2,1]]]);
//# sourceMappingURL=main.3fb3f03d.chunk.js.map