(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,a){},188:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),s=a.n(r),i=a(6),l=a(7),c=a(9),m=a(8),u=a(10),d=a(24),h=a(23),p=a(22),f=a(29),g=a(197),b=a(198),v=a(75),y=a(66),E=a.n(y),w=a(67),k=a.n(w),x=(a(83),function(e){return e.empty?o.a.createElement("div",{className:"Loader container"},o.a.createElement("h3",null,e.filename),o.a.createElement("p",null,"Drag 'n' drop your file here")):e.wrong?o.a.createElement("div",{className:"Loader container"},o.a.createElement("span",{className:" fas fa-times",style:{fontSize:"80px",color:"red"}})):e.verified?o.a.createElement("div",{className:"Loader container"},o.a.createElement("img",{src:E.a,height:"50",alt:"verified"})):e.verfying?o.a.createElement("div",{className:"Loader container"},o.a.createElement("img",{src:k.a,height:"70",alt:"verifying"})):o.a.createElement("h3",null,"Wrong parameter")}),N=(a(84),"https://examschedulerbackend123.herokuapp.com"),j={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"10px",borderWidth:2,borderRadius:2,minHeight:"130px",borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#fafafa",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},_={borderColor:"#2196f3"},T={borderColor:"#00e676"},O={borderColor:"#ff1744"},R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).Reset=function(){a.setState(Object(f.a)({},a.initialstate))},a.onDropFile=function(e){a.setState({file:e[0],task:"verfying"});var t=new FormData;t.append("file",e[0]),t.append("user","srb"),t.append("list",a.props.filename);var n="".concat(N,"/validate");fetch(n,{method:"POST",body:t}).then(function(e){return e.json()}).then(function(t){if(t.done)a.setState({file:e[0],task:"verified",message:null}),a.props.onFileChanged(t.file,{});else{var n=t.message;a.props.onFileChanged(!1,{}),a.setState({file:e[0],task:"wrong",message:n}),n=n.replace(/\n/g,"<br />"),n+="<br/><a href='#/Help'>Read the instructions</a><br/>",document.getElementById(a.props.filename+"_text").innerHTML=n}}).catch(function(e){return console.log(e)})},a.initialstate={file:null,task:"empty",message:null},a.state=a.initialstate,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(e){var t=this;return o.a.createElement(v.a,{onDrop:this.onDropFile},function(e){var a,r=e.getRootProps,s=e.getInputProps,i=e.isDragAccept,l=e.isDragReject,c=e.isDragActive,m=Object(n.useMemo)(function(){return Object(f.a)({},j,c?_:{},i?T:{},l?O:{})},[c,l]);return o.a.createElement("section",{className:"myTooltip"},o.a.createElement("div",r({style:m}),o.a.createElement("input",Object.assign({},s(),{disabled:"_verified"===t.state.task})),o.a.createElement(x,(a={},Object(p.a)(a,t.state.task,!0),Object(p.a)(a,"filename",t.props.filename),a))),t.state.message&&o.a.createElement("span",{className:"myTooltiptext",id:t.props.filename+"_text"}))})}}]),t}(n.Component),C=(a(85),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content-section"},o.a.createElement("ul",{className:"list-group"},o.a.createElement("li",{className:"list-group-item list-group-item-light srb-pane-title text-center"},"Templates"),o.a.createElement("li",{className:"list-group-item list-group-item-light"},o.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/15bAOhsQVrBLxnEd4DI-PgnyDpE14taAN_ydTV9vniWY/edit?usp=sharing",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("i",{className:"fas fa-user-tie",style:{letterSpacing:"10px"}}),"Teachers List")),o.a.createElement("li",{className:"list-group-item list-group-item-light"},o.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1yyfRZFn-ZVB4889vxZ8bu1Tjj6p-qdMqxtfZfdXa554/edit?usp=sharing",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("i",{className:"fas fa-calendar-alt",style:{letterSpacing:"10px"}}),"Schedule List")),o.a.createElement("li",{className:"list-group-item list-group-item-light"},o.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1caJK62qwDkqrdeZ8rUnaGs5JulMyxCFeaYhk7TrnsYc/edit?usp=sharing",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("i",{className:"fas fa-school",style:{letterSpacing:"10px",fontSize:"12px"}}),"Room List")),o.a.createElement("li",{className:"list-group-item list-group-item-light"},o.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/139LZkE2maa5xi97H0Z4hxtvCVocsYLPAPH38n6RblLQ/edit?usp=sharing",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("i",{className:"fas fa-cogs",style:{letterSpacing:"10px",fontSize:"12px"}}),"Work Ratio")),o.a.createElement("li",{className:"list-group-item list-group-item-light"},o.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1kxMy05dvqbor3EW1vEGFoNjI8n3haLKzu7OVdrbX-Dw/edit?usp=sharing",target:"_blank",rel:"noreferrer noopener"},o.a.createElement("i",{className:"fas fa-poll",style:{letterSpacing:"10px"}}),"Final Output"))))}}]),t}(n.Component)),S=(a(86),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onFileChanged=function(e,t,n){a.setState(Object(f.a)({},Object(p.a)({},e,t),n))},a.handleClose=function(){a.setState({showModel:!1})},a.Reset=function(){a.setState(Object(f.a)({},a.initialstate),function(){}),a.teacher_list_ref.current.Reset(),a.schedule_list_ref.current.Reset(),a.room_list_ref.current.Reset(),a.work_ratio_ref.current.Reset()},a.handleCloseReset=function(){a.Reset()},a.onClick=function(e){var t=new FormData;t.append("teachers_list",a.state.teachers_list),t.append("schedule_list",a.state.schedule_list),t.append("room_list",a.state.room_list),t.append("work_ratio",a.state.work_ratio),t.append("seed",a.state.seed),t.append("user","srb");var n="".concat(N,"/output");fetch(n,{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){if(e.done)a.setState({message:null}),setTimeout(function(){window.location.href="".concat(N,"/download/").concat(e.file)},1);else{var t=e.message;a.setState({message:t,showModel:!0}),t=t.replace(/\n/g,"<br />"),t+="<br/><a href='#/Help'>Read the instructions</a><br/>",document.getElementById("modal_desc").innerHTML=t}}).catch(function(e){return console.log(e)})},a.initialstate={teachers_list:!1,room_list:!1,schedule_list:!1,work_ratio:!1,seed:5,message:null,showModel:!1},a.state=a.initialstate,a.teacher_list_ref=Object(n.createRef)(),a.schedule_list_ref=Object(n.createRef)(),a.room_list_ref=Object(n.createRef)(),a.work_ratio_ref=Object(n.createRef)(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=!(this.state.teachers_list&&this.state.room_list&&this.state.schedule_list&&this.state.work_ratio);return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row scheduler-box"},o.a.createElement("div",{className:"col-md-9 scheduler-box"},o.a.createElement("div",{className:"row",style:{minHeight:"150px"}},o.a.createElement("div",{className:"col-md-6 srb-dropbox"},o.a.createElement(R,{filename:"teachers_list",ref:this.teacher_list_ref,onFileChanged:function(t,a){return e.onFileChanged("teachers_list",t,a)}})),o.a.createElement("div",{className:"col-md-6 srb-dropbox"},o.a.createElement(R,{filename:"schedule_list",ref:this.schedule_list_ref,onFileChanged:function(t,a){return e.onFileChanged("schedule_list",t,a)}}))),o.a.createElement("div",{className:"row",style:{minHeight:"150px"}},o.a.createElement("div",{className:"col-md-6 srb-dropbox"},o.a.createElement(R,{filename:"room_list",ref:this.room_list_ref,onFileChanged:function(t,a){return e.onFileChanged("room_list",t,a)}})),o.a.createElement("div",{className:"col-md-6 srb-dropbox"},o.a.createElement(R,{filename:"work_ratio",ref:this.work_ratio_ref,onFileChanged:function(t,a){return e.onFileChanged("work_ratio",t,a)}}))),o.a.createElement("div",{className:"text-center"},o.a.createElement("button",{type:"button",disabled:t,className:"btn btn-primary",onClick:this.onClick,style:{marginTop:"30px"}},"Generate Output"))),o.a.createElement("div",{className:"col-md-3 scheduler-box"},o.a.createElement(C,null))," ")," ",o.a.createElement(g.a,{show:this.state.showModel,onHide:this.handleClose},o.a.createElement(g.a.Header,{closeButton:!0},o.a.createElement(g.a.Title,null,"Error! Incomplete Data")),o.a.createElement(g.a.Body,{id:"modal_desc"}),o.a.createElement(g.a.Footer,null,o.a.createElement(b.a,{variant:"secondary",onClick:this.handleCloseReset},"Reset"),o.a.createElement(b.a,{variant:"primary",onClick:this.handleClose},"Continue"))))}}]),t}(n.Component)),I=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-9"},o.a.createElement("p",null,"Exam Scheduler is a tool to create a automated schedule for teacher duties")),o.a.createElement("div",{className:"col-md-3"},o.a.createElement("div",{className:"content-section"},o.a.createElement("ul",{className:"list-group"},o.a.createElement("li",{className:"list-group-item list-group-item-light"},"Latest Posts"),o.a.createElement("li",{className:"list-group-item list-group-item-light"},"Announcements"),o.a.createElement("li",{className:"list-group-item list-group-item-light"},"Calendars"),o.a.createElement("li",{className:"list-group-item list-group-item-light"},"etc"))))))}}]),t}(n.Component),F=a(72),D=a.n(F),A=(a(187),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e="".concat(N,"/get_version");fetch(e,{method:"POST"}).then(function(e){return e.json()}).then(function(e){if(e.done){var t="version : ".concat(e.version);a.setState({message:t,status:"green"})}else{a.setState({message:"error : some problem with server",status:"blue"})}}).catch(function(e){a.setState({message:"error : server seems offile",status:"red"}),console.log(e)})},a.state={message:null,status:"yellow"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("main",{role:"main",className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(D.a,{className:"srb-markdown",source:"\n## **Instructions**\n\n<br/>\n\n##### **ExamScheduler** is a web-based tool to produce teacher-duty schedule in examination for a school/college.\n\nMain aim of this tool is to automate the process of teacher allotment during the exams in schools and colleges.\nAll you need to maintain is 4 input files out of which 3 will remain constant for an institute.\n4 files are room list, work ratio, teachers list and schedule list.\n- Room list - almost stays constant unless new rooms are added to campus.\n- Work ratio - will remain constant, values vary from institute to institute.\n- Teachers list - just need few updates every time, (even without this tool we need to maintain this list).\n- Schedule list - the only list that we need to make new every time, believe me making schedule list is 100 times easier than original schedule by hand. \n\n<br/>\n\n#### Key Features\n\n- Same number of allotments to teachers with same rank.\n- Teachers with more <code>work ratio</code> will get more allotments.\n    - Ideal work ratio file contains work ratios in increasing order.\n    - So teachers with higher designition will get less allotments(duties).\n- Sum of ranks of teachers alloted in a room will be closer to average.\n    - Two teachers with 1 and 1 rank will sum to 2.\n    - Two teachers with 5 and 5 rank will sum to 10.\n    - Instead of these combinations we will allot teacher with rank 1 with teacher with rank 5.\n    - Chances of clubbing lower rank teachers together are less.\n- Keeping check of all these conditions manually will be a long task, we do it in seconds for you.\n- If you haven't got some terms, please **read full till end** and come back again.\n    - Information provided below is <code>necessary</code> and <code>sufficient</code> to understand the beauty of tool.\n    - **Please read everthing carefully as each term has significance**. Once you understood it, you will love the tool.\n\n<br/>\n\n#### Inputs Required\n\n- [Teachers_list](https://docs.google.com/spreadsheets/d/15bAOhsQVrBLxnEd4DI-PgnyDpE14taAN_ydTV9vniWY/edit?usp=sharing) - Includes <code>*teacher-name*</code> and <code>*rank*</code> as compulsory attributes. Other optional attributes may follow.\n\n    | Name                   | Rank | Info                |\n    | ---------------------- | ---- | --------------------|\n    | Prof. Vinod Kumar      | 0    | Head of Department  |\n    | Prof. Srb Cheema       | 1    | Software Designer   |\n    | Prof. Rakesh Choudhary | 1    | Professor           |\n    | Dr. Anjali Kaushal     | 2    | Associate Professor |\n    | Mr. Prafull Dhiman     | 3    | Assistant Professor |\n\n    - **Name** - This column contains name of teacher. *(Compulsory)*\n        - In case two teachers have same name dont worry, teachers name need not to be unique.\n        - You can mention extra info about teachers to identify in **info** column.\n    - **Rank** - This column contains rank of teacher. *(Compulsory, Integer)*\n        - Rank will determine the ratio of duties a teacher(generally rank can be decided by desgination).\n        - Teacher with rank <var>0</var> will be given no duties.\n        - All ranks except <var>0</var> should be present in *work_ratio* file.\n        - In case a teacher is not to be alloted, just give him 0 rank instead of removing his name.\n    - **Info** - This is an optional column, may contain additional info(meta-data) about teacher.\n        - This column gets printed in output, else it doesn't effect the result logically.\n        - may contain data like designation, department or any data you want to include in output file.\n    - **Optional** - Any other column than this will be ignored i.e. wont participate in output generation.\n\n\n\n- [Schedule_list](https://docs.google.com/spreadsheets/d/1yyfRZFn-ZVB4889vxZ8bu1Tjj6p-qdMqxtfZfdXa554/edit?usp=sharing) - A 2D matrix includeing relation between a <code>*session*</code> and a <code>*room*</code>, value is **Y** if room is required on particular session.\n\n    | Session\\Room | Room1 | Room2 | Room3 |\n    | ------------- | ----- | ----- | ----- |\n    | 01-04 (Mor.)  |       | Y     |       |\n    | 01-04 (Eve.)  | Y     | Y     | Y     |\n    | 02-04 (Mor.)  |       |       | Y     |\n    | 02-04 (Eve.)  | Y     |       | Y     |\n\n    - **Session Column** - This column contains session names. *(Compulsory, Unique)*\n        - There are no restrictions on the naming convention.\n        - Name them in any way, just keep them unique.\n    - **Room Row** - This is the first row contains different room names. *(Compulsory, Unique)*\n        - All the rooms mentioned here should be present in *Room_list* file.\n    - **Inner Cells** - Inner cells may be **blank** **Y**, **y**, **N** or **n**.\n        - **Blank** cell is regarded as **N**.\n        - **Y** means that session requires that room for examination.\n        - We can see that Room1 and Room3 is not required on 01-04 in morning session.\n        - Similarly All rooms are required on 01-04 evening session.\n\n\n- [Room_list](https://docs.google.com/spreadsheets/d/1caJK62qwDkqrdeZ8rUnaGs5JulMyxCFeaYhk7TrnsYc/edit?usp=sharing) - Includes <code>*room-name*</code> and <code>*teachers*</code> required as compulsory attributes. Other optional attributes may follow.\n\n    | Name  | Teacers | Info         |\n    | ----- | ------- | ------------ |\n    | Room1 | 1       | Ground Floor |\n    | Room2 | 2       | Top Floor    |\n    | Room3 | 1       | Lab          |\n\n    - **Name** - This column contains name of rooms *(Compulsory, Unique)*\n        - All the room names present in *Session list* should be present here once.\n    - **Teachers** - Number of teachers to be alloted in that room *(Compulsory, Integer)*\n        - Instead of deleting a room we can just set Teachers to 0.\n    - **Info** - this is optional column just for meta-data.*(Optional)*\n        - It is ignored by the algorithm.\n\n\n- [Work_ratio](https://docs.google.com/spreadsheets/d/139LZkE2maa5xi97H0Z4hxtvCVocsYLPAPH38n6RblLQ/edit#gid=0) - Includes <code>*rank*</code> and <code>*work_ratio*</code> as compulsory attributes. Other optional attributes may follow.\n\n    | Rank | Work Ratio |\n    | ---- | ---------- |\n    | 1    | 100        |\n    | 2    | 150        |\n    | 3    | 200        |\n    | 4    | 300        |\n\n    - **Rank** - This column contains all the possible ranks *(Compulsory, Integer)*\n        - Every Rank present in Teachers list should be present in this list.\n    - **Work Ratio** - This column contains the ratio of work done by each rank holder *(Compulsory, Float)*\n        - Higher the value of work ratio more are the chances of duty of that rank holder.\n        - In example, Teacher with rank 3 will get twice more duties than rank 1 approximately.\n        - In example, Techer with rank 4 will get maximum number of duties and rank 1 will get least number of duties.\n        - Ideal work ratio file will have work ratios in <code>non-decreasing</code> order w.r.t <code>ranks</code>.\n\n\n<br/>\n\n\n#### Template Output\n- [Output_file](https://docs.google.com/spreadsheets/d/1kxMy05dvqbor3EW1vEGFoNjI8n3haLKzu7OVdrbX-Dw/edit?usp=sharing) - Contains a 2D matrix of <code>*teachers*</code> and their <code>*duties*</code> in given <code>*session*</code>.\n\n    | Name of Faculty        | Info  | 01-04 (Mor.) | 01-04 (Eve.) | 02-04 (Mor.) | 02-04 (Eve.) | Total |\n    | ---------------------- | ----- | ------------ | ------------ | ------------ | ------------ | ----- |\n    | Prof. Vinod Kumar      | HoD   | -            | -            | -            | -            | 0     |\n    | Prof. Srb Cheema       | S.E.  | -            | Room1        | -            | -            | 1     |\n    | Prof. Rakesh Choudhary | Prof  | -            | Room2        | -            | -            | 1     |\n    | Dr. Anjali Kaushal     | Asso. | Room2        | Room2        | -            | Room3        | 3     |\n    | Mr. Prafull Dhiman     | Assi. | Room2        | Room3        | Room3        | Room1        | 4     |\n\n    - **Name of Faculty** - This column contains names of faculty as provided in <code>name</code> column of <code>Teachers list</code>.\n    - **Info** - This column contains info about the teachers as provided in <code>info</code> column of <code>Teachers list</code>.\n        - If this column is missing in Teachers list then this column will be blank here.\n    - **Session Cols** - Session columns contain if the teacher has duty in any room in that session.\n        - In example, at *01-04 morning* session there is duty of **<var>Dr. Anjali</var>** and **<var>Mr. Prafull</var>** in **<var>Room2</var>**.\n        - Similarly you can see **<var>Prof. Rakesh</var>** is having only 1 duty in **<var>Room1</var>** on *01-04 evening* session.\n        - You can also notice the number of duties are proportional to ranks (work-ratio).\n        - **<var>Prof Vinod</var>** is having no duty because he was having rank **<var>0</var>**, which means that teacher will get no duty.\n    - **Total** - Total number of duties of a teacher during exams.\n    - **Additionl Info** - There is some additional info about output at the bottom of output sheet.\n        - Rank, Count, Avg Duties - Total Count and Average of each rank.\n        - Type of Room, Number - <code>x,y,z</code> type denotes ranks of teachers alloted in it, number tells total number of such rooms.\n\n</br>\n\n#### Possible Errors\n- **Insufficient Data** - There is less than required data to produce output.\n    - **Too Few Columns** - There are less than required(compulsory) number of columns in your excel sheet.\n    - **Too Few Rows** - There are less than required(compulsory) number of rows in your excel sheet.\n    - **Value not present** - A value that is expected to be present is missing.\n- **Invalid Data** - The data provided is invalid.\n    - **Column should contain Integer/float value** - column is expecting Integer/float value but gets some other type of value.\n    - **Can be blank, Y, y, N or n** - Cell of scheduler list contains invalid value, can contain only Y/y/N/n or can be left blank.\n- **Required Unique value** - The col/row was expecting unique value but there is repition of value somewhere.\n- **Invalid Excel File** - The file provided is not a valid excel file with extension <code>xlsx</code> or <code>xls</code>.\n- **Unable to load file** - There was error loading your input excel file.\n\n<br/>\n\n#### Important Note\n- The line numbers mentioned in error reports are not strictly the same as in excel sheet provided.\n- Lines in excel sheet with first cell empty will be ignored (will not be counted).\n- This property can be used to make comments in excelsheets you provide. To make comment just leave first cell empty.\n\n| Rank | Work Ratio      |\n| ---- | --------------- |\n| 1    | 100             |\n|      | <code>This is a comment</code>          |\n| 2    | 150             |\n| 3    | 200             |\n|      | We can use comments to keep notes.      |\n|      | For example     |\n|      | There is no Faculty of rank 4 right now |\n| 4    | 300             |\n\n- Rank 2 is actually on 4th line in excel sheet but will be treated as 3rd line.\n- We can keep notes in our input files using comments.\n- We can seperate teachers of different departments by one empty row(row with first cell empty is ignored).\n\n<br/>\n\n#### Contact Us\n- For help, drop me your mail at [srbcheema2@gmail.com](mailto:srbcheema2@gmail.com?Subject=ExamScheduler), It would be better to attach your input files alongwith.\n- For any Issues you may report at our github accounts:\n    - [Web Site](https://github.com/srbcheema1/ExamScheduler)\n    - [Server](https://github.com/srbcheema1/exam_scheduler_backend)\n    - [Algorithm](https://github.com/srbcheema1/exam_scheduler)\n- Contributers are welcome :)\n- Give a star to our tool on [github](https://github.com/srbcheema1) if you liked it.\n- We would be happy if you provide your valuable feedback regarding how we can improve our tool.\n- If you liked the tool, please recommend it to other schools/colleges.\n\n<br/>\n\n",escapeHtml:!1}),o.a.createElement("br",null),o.a.createElement("p",{style:{paddingLeft:"10px"}},"status : ",o.a.createElement("i",{className:"status-dot fas fa-circle",style:{color:this.state.status}})," ",o.a.createElement("br",null),this.state.message),o.a.createElement("br",null),o.a.createElement("div",{id:"disqus_thread"}))))}}]),t}(n.Component)),P=(a(188),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark mb-4"},o.a.createElement("div",{className:"container"},o.a.createElement(d.b,{className:"navbar-brand mr-4",to:"/"},o.a.createElement("span",{style:{textAlign:"left"}},o.a.createElement("span",{style:{color:"red",fontWeight:"700"}},"Exam")," scheduler")),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarToggle","aria-controls":"navbarToggle","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarToggle"},o.a.createElement("ul",{className:"navbar-nav ml-auto"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(d.b,{className:"nav-link",to:"/"},"Home")),o.a.createElement("li",{className:"nav-item active"},o.a.createElement(d.b,{className:"nav-link",to:"/About"},"About")),o.a.createElement("li",{className:"nav-item active"},o.a.createElement(d.b,{className:"nav-link",to:"/Help"},"Help"))))))}}]),t}(n.Component)),q=(a(194),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){var e="".concat(N,"/get_version");fetch(e,{method:"POST"}).then(function(e){return e.json()}).then(function(e){if(e.done){var t="running : ".concat(e.version);a.setState({message:t,status:"green"})}else{a.setState({message:"some problem with server",status:"blue"})}}).catch(function(e){a.setState({message:"server seems offile",status:"red"}),console.log(e)})},a.state={message:null,status:"yellow"},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{style:{marginBottom:"30px"}})," ",o.a.createElement("div",{className:"srb-footer"},o.a.createElement("hr",{style:{marginBottom:"0"}}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"hidden-xs col-sm-1 status-dot"}),o.a.createElement("div",{className:"col-12 col-sm-10 text-center content"},o.a.createElement("a",{href:"https://www.linkedin.com/in/srbcheema1/",style:{color:"#999",textDecoration:"none"}},"\xa9 2019 Copyright:",o.a.createElement("span",{style:{letterSpacing:"4px"}}," "),"a",o.a.createElement("span",{style:{letterSpacing:"4px"}}," "),o.a.createElement("span",{style:{color:"#8b8b8b",fontWeight:"700"}},"srbcheema1"),o.a.createElement("span",{style:{letterSpacing:"4px"}}," "),"production")),o.a.createElement("div",{className:"hidden-xs col-sm-1 text-center content status-dot"},o.a.createElement("i",{className:"status-dot fas fa-circle",style:{color:this.state.status}})))," "))}}]),t}(n.Component)),L=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(P,null),o.a.createElement("div",null,o.a.createElement(h.a,{exact:!0,path:"/",component:S}),o.a.createElement(h.a,{exact:!0,path:"/About",component:I}),o.a.createElement(h.a,{exact:!0,path:"/Help",component:A})),o.a.createElement(q,null))}}]),t}(n.Component);s.a.render(o.a.createElement(L,null),document.getElementById("root"))},66:function(e,t,a){e.exports=a.p+"static/media/done.fcecaf11.gif"},67:function(e,t,a){e.exports=a.p+"static/media/loading.d9933c4e.gif"},76:function(e,t,a){e.exports=a(195)},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.8b35e5d2.chunk.js.map