/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/'; 

var fonts = {};
   fonts['arimo, sans-serif']='<script src=\"http://use.edgefonts.net/arimo:n4,i4,n7,i7:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg',
            type:'image',
            rect:['0px','0px','480px','320px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg.png",'0px','0px']
         },
         {
            id:'Rectangle',
            type:'rect',
            rect:['0px','0px','480px','320px','auto','auto'],
            fill:["rgba(102,102,204,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text6',
            type:'text',
            rect:['116px','223px','auto','auto','auto','auto'],
            text:"Blink Training System",
            align:"center",
            font:['Arial, Helvetica, sans-serif',25,"rgba(255,255,255,1.00)","500","none","italic"]
         },
         {
            id:'Text3',
            type:'text',
            rect:['61px','64px','auto','auto','auto','auto'],
            text:"YOUR TOTAL REWARDS",
            align:"center",
            font:['Arial, Helvetica, sans-serif',30,"rgba(255,255,255,1.00)","bold","none","italic"]
         },
         {
            id:'blink_anim',
            type:'rect',
            rect:['192px','116px','auto','auto','auto','auto']
         },
         {
            id:'Text4',
            type:'text',
            rect:['190px','195px','auto','auto','auto','auto'],
            text:"powered by",
            align:"center",
            font:['Arial, Helvetica, sans-serif',18,"rgba(255,153,51,1)","bold","none","italic"]
         },
         {
            id:'top',
            type:'image',
            rect:['0','0','480px','42px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"top.png",'0px','0px']
         },
         {
            id:'bottom',
            type:'image',
            rect:['0','255px','480px','65px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bottom.png",'0px','0px']
         },
         {
            id:'side',
            type:'image',
            rect:['0px','0px','135px','320px','auto','auto'],
            clip:['rect(0px 135pxpx 320pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"side.png",'0px','0px']
         },
         {
            id:'sideCopy',
            type:'image',
            rect:['0px','0px','135px','320px','auto','auto'],
            clip:['rect(0px 135pxpx 320pxpx 0px)'],
            fill:["rgba(0,0,0,0)",im+"side.png",'0px','0px']
         },
         {
            id:'blink_anim2',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'score',
            display:'none',
            type:'rect',
            rect:['12','70','auto','auto','auto','auto']
         },
         {
            id:'rewards',
            display:'none',
            type:'rect',
            rect:['0','97','auto','auto','auto','auto']
         },
         {
            id:'info_button',
            display:'none',
            type:'image',
            rect:['428px','4px','48px','46px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"info_button.png",'0px','0px']
         },
         {
            id:'progress',
            display:'none',
            type:'rect',
            rect:['118','0','auto','auto','auto','auto']
         },
         {
            id:'timer',
            display:'none',
            type:'rect',
            rect:['112','-1','auto','auto','auto','auto']
         },
         {
            id:'start_btn',
            display:'none',
            type:'image',
            rect:['376px','271px','103px','49px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"start.png",'0px','0px']
         },
         {
            id:'finished_btn',
            display:'none',
            type:'image',
            rect:['375px','271px','105px','49px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"finished.png",'0px','0px']
         },
         {
            id:'continue_btn',
            display:'none',
            type:'image',
            rect:['376px','268px','104px','52px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"continue.png",'0px','0px']
         },
         {
            id:'statements',
            display:'none',
            type:'rect',
            rect:['56','42','auto','auto','auto','auto']
         },
         {
            id:'fda_mission',
            display:'none',
            type:'rect',
            rect:['108','42','auto','auto','auto','auto']
         },
         {
            id:'fda_drag',
            display:'none',
            type:'rect',
            rect:['125','42','auto','auto','auto','auto']
         },
         {
            id:'truthful2',
            display:'none',
            type:'rect',
            rect:['62','0','auto','auto','auto','auto']
         },
         {
            id:'intro',
            display:'none',
            type:'rect',
            rect:['124','50','auto','auto','auto','auto']
         },
         {
            id:'mission',
            display:'none',
            type:'rect',
            rect:['58','40','auto','auto','auto','auto']
         },
         {
            id:'self_reflection',
            display:'none',
            type:'rect',
            rect:['66','42','auto','auto','auto','auto']
         },
         {
            id:'TimeToTalk',
            display:'none',
            type:'rect',
            rect:['197','38','auto','auto','auto','auto']
         },
         {
            id:'statements_int',
            display:'none',
            type:'rect',
            rect:['38','62','auto','auto','auto','auto']
         },
         {
            id:'assessment',
            type:'rect',
            rect:['376','268','auto','auto','auto','auto']
         },
         {
            id:'Statement1Back',
            display:'none',
            type:'rect',
            rect:['50px','38','auto','auto','auto','auto']
         },
         {
            id:'Statement2Back',
            display:'none',
            type:'rect',
            rect:['52px','38px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'video',
            display:'none',
            type:'rect',
            rect:['58','40','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'fda_mission',
            symbolName:'fda_mission'
         },
         {
            id:'statements_int',
            symbolName:'statements_int'
         },
         {
            id:'score',
            symbolName:'score'
         },
         {
            id:'progress',
            symbolName:'progress'
         },
         {
            id:'Statement1Back',
            symbolName:'Statement2Back'
         },
         {
            id:'assessment',
            symbolName:'assessment'
         },
         {
            id:'fda_drag',
            symbolName:'fda_drag'
         },
         {
            id:'blink_anim2',
            symbolName:'blink_anim'
         },
         {
            id:'truthful2',
            symbolName:'truthful'
         },
         {
            id:'statements',
            symbolName:'screen1'
         },
         {
            id:'Statement2Back',
            symbolName:'Statement1Back'
         },
         {
            id:'rewards',
            symbolName:'rewards'
         },
         {
            id:'video',
            symbolName:'video'
         },
         {
            id:'TimeToTalk',
            symbolName:'TimeToTalk'
         },
         {
            id:'intro',
            symbolName:'intro'
         },
         {
            id:'timer',
            symbolName:'timer'
         },
         {
            id:'blink_anim',
            symbolName:'blink_anim'
         },
         {
            id:'self_reflection',
            symbolName:'self_reflection'
         },
         {
            id:'mission',
            symbolName:'mission'
         }
         ]
      },
   states: {
      "Base State": {
         "${_fda_mission}": [
            ["style", "display", 'none']
         ],
         "${_sideCopy}": [
            ["style", "clip", [156,67,320,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-133px'],
            ["style", "width", '135px']
         ],
         "${_Statement2Back}": [
            ["style", "top", '38px'],
            ["style", "left", '52px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none']
         ],
         "${_assessment}": [
            ["style", "display", 'block']
         ],
         "${_finished_btn}": [
            ["style", "top", '271px'],
            ["style", "left", '375px'],
            ["style", "display", 'none']
         ],
         "${_top}": [
            ["style", "height", '42px'],
            ["style", "top", '-40px']
         ],
         "${_bottom}": [
            ["style", "top", '315px']
         ],
         "${_video}": [
            ["style", "display", 'none']
         ],
         "${_side}": [
            ["style", "clip", [0,129,159,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-133px'],
            ["style", "width", '135px']
         ],
         "${_continue_btn}": [
            ["style", "top", '268px'],
            ["style", "left", '376px'],
            ["style", "display", 'none']
         ],
         "${_blink_anim}": [
            ["style", "top", '116px'],
            ["style", "opacity", '1'],
            ["style", "left", '192px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(102,102,204,1.00)'],
            ["style", "opacity", '1']
         ],
         "${_start_btn}": [
            ["style", "top", '271px'],
            ["style", "display", 'none'],
            ["style", "height", '49px'],
            ["style", "left", '376px'],
            ["style", "width", '103px']
         ],
         "${_fda_drag}": [
            ["style", "display", 'none']
         ],
         "${_rewards}": [
            ["style", "display", 'none']
         ],
         "${_Text4}": [
            ["style", "top", '195px'],
            ["style", "opacity", '1'],
            ["style", "left", '190px']
         ],
         "${_progress}": [
            ["style", "display", 'none']
         ],
         "${_score}": [
            ["style", "display", 'none']
         ],
         "${_mission}": [
            ["style", "display", 'none']
         ],
         "${_blink_anim2}": [
            ["style", "top", '-70px']
         ],
         "${_self_reflection}": [
            ["style", "display", 'none']
         ],
         "${_TimeToTalk}": [
            ["style", "display", 'none']
         ],
         "${_statements}": [
            ["style", "display", 'none']
         ],
         "${_truthful2}": [
            ["style", "display", 'none']
         ],
         "${_Text6}": [
            ["style", "top", '223px'],
            ["style", "opacity", '1'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '116px'],
            ["style", "font-size", '25px']
         ],
         "${_intro}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_timer}": [
            ["style", "display", 'none']
         ],
         "${_info_button}": [
            ["style", "top", '4px'],
            ["style", "display", 'none'],
            ["style", "height", '46px'],
            ["style", "left", '431px'],
            ["style", "width", '48px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '320px'],
            ["style", "width", '480px']
         ],
         "${_Statement1Back}": [
            ["style", "display", 'none'],
            ["style", "left", '50px']
         ],
         "${_statements_int}": [
            ["style", "display", 'none'],
            ["style", "left", '108px'],
            ["style", "top", '45px']
         ],
         "${_Text3}": [
            ["style", "top", '64px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '61px'],
            ["style", "font-size", '30px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4250,
         autoPlay: true,
         labels: {
            "intro": 3500
         },
         timeline: [
            { id: "eid891", tween: [ "style", "${_mission}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid807", tween: [ "style", "${_assessment}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid408", tween: [ "style", "${_assessment}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid573", tween: [ "style", "${_assessment}", "display", 'none', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid135", tween: [ "style", "${_score}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid129", tween: [ "style", "${_fda_drag}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid561", tween: [ "style", "${_fda_drag}", "display", 'none', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid132", tween: [ "style", "${_statements}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid892", tween: [ "style", "${_statements}", "display", 'none', { fromValue: 'none'}], position: 4226, duration: 0 },
            { id: "eid143", tween: [ "style", "${_timer}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid121", tween: [ "style", "${_bottom}", "top", '255px', { fromValue: '315px'}], position: 3000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid137", tween: [ "style", "${_continue_btn}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid779", tween: [ "style", "${_self_reflection}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_self_reflection}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid776", tween: [ "style", "${_Statement1Back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid802", tween: [ "style", "${_truthful2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid130", tween: [ "style", "${_truthful2}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid708", tween: [ "style", "${_blink_anim}", "opacity", '0', { fromValue: '1'}], position: 2602, duration: 177 },
            { id: "eid365", tween: [ "style", "${_TimeToTalk}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid119", tween: [ "style", "${_top}", "top", '0px', { fromValue: '-40px'}], position: 3000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid128", tween: [ "style", "${_blink_anim2}", "top", '0px', { fromValue: '-70px'}], position: 3250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid139", tween: [ "style", "${_start_btn}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid133", tween: [ "style", "${_progress}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid336", tween: [ "style", "${_statements_int}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid123", tween: [ "style", "${_side}", "left", '0px', { fromValue: '-133px'}], position: 3000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid922", tween: [ "style", "${_sideCopy}", "left", '0px', { fromValue: '-133px'}], position: 3000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid231", tween: [ "style", "${_intro}", "opacity", '0', { fromValue: '0'}], position: 3000, duration: 0 },
            { id: "eid233", tween: [ "style", "${_intro}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 112 },
            { id: "eid237", tween: [ "style", "${_intro}", "opacity", '0', { fromValue: '1'}], position: 4098, duration: 128 },
            { id: "eid225", tween: [ "style", "${_fda_mission}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid370", tween: [ "style", "${_fda_mission}", "display", 'none', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid228", tween: [ "style", "${_intro}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid124", tween: [ "style", "${_intro}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid238", tween: [ "style", "${_intro}", "display", 'none', { fromValue: 'block'}], position: 4226, duration: 0 },
            { id: "eid714", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 2779, duration: 148 },
            { id: "eid883", tween: [ "style", "${_video}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid929", tween: [ "style", "${_video}", "display", 'none', { fromValue: 'none'}], position: 4250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid705", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 196 },
            { id: "eid711", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 2696, duration: 163 },
            { id: "eid775", tween: [ "style", "${_Statement2Back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid136", tween: [ "style", "${_rewards}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid138", tween: [ "style", "${_finished_btn}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid134", tween: [ "style", "${_info_button}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid717", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 2859, duration: 141 },
            { id: "eid116", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fda_drag}', [] ], ""], position: 0 },
            { id: "eid330", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_timer}', [] ], ""], position: 0 },
            { id: "eid550", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_self_reflection}', [] ], ""], position: 0 },
            { id: "eid407", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_assessment}', [] ], ""], position: 0 },
            { id: "eid55", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_statements}', [] ], ""], position: 0 },
            { id: "eid903", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mission}', [] ], ""], position: 0 },
            { id: "eid43", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_intro}', [0] ], ""], position: 3500 }         ]
      }
   }
},
"blink_anim": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'blink12',
      type: 'image',
      rect: ['0px','0px','96px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/blink1.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','96px','81px','auto','auto'],
      id: 'blink2',
      fill: ['rgba(0,0,0,0)','images/blink2.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','96px','78px','auto','auto'],
      id: 'blink3',
      fill: ['rgba(0,0,0,0)','images/blink3.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','96px','82px','auto','auto'],
      id: 'blink4',
      fill: ['rgba(0,0,0,0)','images/blink4.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','97px','80px','auto','auto'],
      id: 'blink5',
      fill: ['rgba(0,0,0,0)','images/blink5.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_blink12}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_blink2}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '96px']
         ],
         "${_blink3}": [
            ["style", "display", 'none']
         ],
         "${_blink5}": [
            ["style", "display", 'none']
         ],
         "${_blink4}": [
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid3", tween: [ "style", "${_blink3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_blink3}", "display", 'block', { fromValue: 'none'}], position: 108, duration: 0 },
            { id: "eid13", tween: [ "style", "${_blink3}", "display", 'none', { fromValue: 'block'}], position: 166, duration: 0 },
            { id: "eid18", tween: [ "style", "${_blink3}", "display", 'block', { fromValue: 'none'}], position: 398, duration: 0 },
            { id: "eid19", tween: [ "style", "${_blink3}", "display", 'none', { fromValue: 'block'}], position: 445, duration: 0 },
            { id: "eid6", tween: [ "style", "${_blink4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_blink4}", "display", 'block', { fromValue: 'none'}], position: 166, duration: 0 },
            { id: "eid14", tween: [ "style", "${_blink4}", "display", 'none', { fromValue: 'block'}], position: 228, duration: 0 },
            { id: "eid16", tween: [ "style", "${_blink4}", "display", 'block', { fromValue: 'none'}], position: 348, duration: 0 },
            { id: "eid17", tween: [ "style", "${_blink4}", "display", 'none', { fromValue: 'block'}], position: 398, duration: 0 },
            { id: "eid2", tween: [ "style", "${_blink2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_blink2}", "display", 'block', { fromValue: 'none'}], position: 52, duration: 0 },
            { id: "eid12", tween: [ "style", "${_blink2}", "display", 'none', { fromValue: 'block'}], position: 108, duration: 0 },
            { id: "eid20", tween: [ "style", "${_blink2}", "display", 'block', { fromValue: 'none'}], position: 445, duration: 0 },
            { id: "eid21", tween: [ "style", "${_blink2}", "display", 'none', { fromValue: 'block'}], position: 484, duration: 0 },
            { id: "eid7", tween: [ "style", "${_blink5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_blink5}", "display", 'block', { fromValue: 'none'}], position: 228, duration: 0 },
            { id: "eid15", tween: [ "style", "${_blink5}", "display", 'none', { fromValue: 'block'}], position: 348, duration: 0 },
            { id: "eid10", tween: [ "style", "${_blink12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_blink12}", "display", 'none', { fromValue: 'block'}], position: 52, duration: 0 },
            { id: "eid22", tween: [ "style", "${_blink12}", "display", 'block', { fromValue: 'none'}], position: 484, duration: 0 }         ]
      }
   }
},
"intro": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','123px','311px','65px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',17,'rgba(255,255,255,1.00)','bold','none','italic'],
      id: 'Text4',
      text: 'Use this app to view your current<br>rewards statement and to get to<br>know more about BlackRock.',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0px','67px','311px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,153,51,1.00)','bold','none','italic'],
      id: 'Text2',
      text: 'YOUR TOTAL REWARDS',
      align: 'center',
      type: 'text'
   },
   {
      id: 'blink_anim',
      type: 'rect',
      rect: ['108px','0px','auto','auto','auto','auto']
   },
   {
      rect: ['252px','221px','103px','49px','auto','auto'],
      id: 'start2',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/start.png','0px','0px']
   },
   {
      rect: ['355px','223px','94px','40px','auto','auto'],
      id: 'learn_button',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/learn_button.png','0px','0px']
   },
   {
      rect: ['124px','221px','223px','42px','auto','auto'],
      id: 'know_button',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/know_button.png','0px','0px']
   },
   {
      rect: ['326px','218px','27px','26px','auto','auto'],
      id: 'message_button',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/message_button.png','0px','0px']
   },
   {
      rect: ['-66px','221px','148px','41px','auto','auto'],
      id: 'statement_button',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/statement_button.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'blink_anim',
      symbolName: 'blink_anim'
   }   ]
   },
   states: {
      "Base State": {
         "${_message_button}": [
            ["style", "top", '218px'],
            ["style", "left", '326px'],
            ["style", "display", 'none']
         ],
         "${_statement_button}": [
            ["style", "top", '221px'],
            ["style", "left", '354px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text2}": [
            ["style", "top", '67px'],
            ["style", "width", '311px'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '24px']
         ],
         "${_Text4}": [
            ["style", "top", '102px'],
            ["style", "font-size", '17px'],
            ["style", "text-align", 'center'],
            ["style", "height", '65px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '311px']
         ],
         "${symbolSelector}": [
            ["style", "height", '188px'],
            ["style", "width", '311px']
         ],
         "${_learn_button}": [
            ["style", "top", '223px'],
            ["style", "left", '355px'],
            ["style", "cursor", 'pointer']
         ],
         "${_know_button}": [
            ["style", "top", '221px'],
            ["style", "left", '361px'],
            ["style", "cursor", 'pointer']
         ],
         "${_blink_anim}": [
            ["style", "height", '76px'],
            ["style", "top", '0px'],
            ["style", "left", '108px'],
            ["style", "width", '96px']
         ],
         "${_start2}": [
            ["style", "top", '221px'],
            ["style", "left", '352px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 528.00385860806,
         autoPlay: false,
         timeline: [
            { id: "eid227", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0.000000'}], position: 171, duration: 79 },
            { id: "eid880", tween: [ "style", "${_message_button}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid29", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 150 },
            { id: "eid879", tween: [ "style", "${_know_button}", "left", '124px', { fromValue: '361px'}], position: 375, duration: 125, easing: "easeInOutQuad" },
            { id: "eid668", tween: [ "style", "${_statement_button}", "left", '-66px', { fromValue: '354px'}], position: 304, duration: 158 },
            { id: "eid486", tween: [ "style", "${_Text4}", "top", '102px', { fromValue: '102px'}], position: 500, duration: 0 },
            { id: "eid41", tween: [ "style", "${_start2}", "left", '252px', { fromValue: '352px'}], position: 400, duration: 100 },
            { id: "eid664", tween: [ "style", "${_learn_button}", "left", '254px', { fromValue: '355px'}], position: 400, duration: 100 },
            { id: "eid44", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_blink_anim}', [] ], ""], position: 0 }         ]
      }
   }
},
"screen1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'small_blink',
      type: 'image',
      rect: ['0px','230px','54px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/small_blink.png','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',15,'rgba(0,0,0,1)','700','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'Study the statements then touch CONTINUE.',
      align: 'left',
      rect: ['60px','240px','auto','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'continue',
      rect: ['317px','226px','104px','52px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/continue.png','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','bold','none','italic'],
      type: 'text',
      id: 'Text5',
      text: 'The U.S. Retirement Program…',
      align: 'left',
      rect: ['93px','0px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','bold','none','italic'],
      type: 'text',
      display: 'none',
      id: 'Text6',
      text: 'Is funded entirely by the Company.',
      align: 'left',
      rect: ['40px','39px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1)','bold','none','italic'],
      type: 'text',
      display: 'none',
      id: 'Text9',
      text: 'Requires no contribution from the employee.',
      align: 'left',
      rect: ['40px','77px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1)','bold','none','italic'],
      type: 'text',
      display: 'none',
      id: 'Text11',
      text: 'Helps towards your financial security during retirement.',
      align: 'left',
      rect: ['40px','177px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text6}": [
            ["style", "top", '59px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '40px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '278px'],
            ["style", "width", '424px']
         ],
         "${_small_blink}": [
            ["style", "top", '230px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text11}": [
            ["style", "display", 'none'],
            ["style", "top", '157px'],
            ["style", "left", '38px'],
            ["style", "font-size", '18px']
         ],
         "${_Text2}": [
            ["style", "top", '235px'],
            ["style", "font-size", '15px'],
            ["style", "font-weight", '700'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '60px'],
            ["style", "width", '261px']
         ],
         "${_Text9}": [
            ["style", "display", 'none'],
            ["style", "top", '109px'],
            ["style", "left", '38px'],
            ["style", "font-size", '18px']
         ],
         "${_Text5}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '93px'],
            ["style", "font-size", '19px']
         ],
         "${_continue}": [
            ["style", "top", '226px'],
            ["style", "left", '427px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: false,
         timeline: [
            { id: "eid54", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 150 },
            { id: "eid492", tween: [ "style", "${_continue}", "left", '317px', { fromValue: '427px'}], position: 1000, duration: 250 },
            { id: "eid490", tween: [ "style", "${_Text2}", "top", '235px', { fromValue: '235px'}], position: 1250, duration: 0 },
            { id: "eid47", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 301, duration: 0 },
            { id: "eid52", tween: [ "style", "${_small_blink}", "opacity", '1', { fromValue: '0'}], position: 602, duration: 148 },
            { id: "eid727", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 400, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid489", tween: [ "style", "${_Text2}", "width", '261px', { fromValue: '261px'}], position: 1250, duration: 0 },
            { id: "eid729", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 602, duration: 0 }         ]
      }
   }
},
"self_reflection": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'bins',
      type: 'image',
      rect: ['0px','128px','404px','118px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/bins.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['28','28','auto','auto','auto','auto'],
      id: 'paper3'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['28','28','auto','auto','auto','auto'],
      id: 'paper2'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['28px','28px','auto','auto','auto','auto'],
      id: 'paper1'
   },
   {
      rect: ['91px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','bold','none','italic'],
      id: 'Text12',
      text: 'The base salary program reflects the partnership between you and the Company.',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['53px','240px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',15,'rgba(0,0,0,1.00)','bold','none','italic'],
      align: 'left',
      id: 'Text13',
      text: 'Drag the goal into the correct bin.',
      display: 'none',
      type: 'text'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['98','61','auto','auto','auto','auto'],
      id: 'FeedbackPanel'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['12','246','auto','auto','auto','auto'],
      id: 'blink_anim'
   }],
   symbolInstances: [
   {
      id: 'paper2',
      symbolName: 'paper'
   },
   {
      id: 'FeedbackPanel',
      symbolName: 'FeedbackPanel'
   },
   {
      id: 'blink_anim',
      symbolName: 'blink_anim_1'
   },
   {
      id: 'paper1',
      symbolName: 'paper'
   },
   {
      id: 'paper3',
      symbolName: 'paper'
   }   ]
   },
   states: {
      "Base State": {
         "${_blink_anim}": [
            ["style", "top", '211px'],
            ["transform", "scaleY", '0.64'],
            ["transform", "scaleX", '0.64'],
            ["style", "opacity", '0'],
            ["style", "left", '-30px'],
            ["style", "display", 'none']
         ],
         "${_FeedbackPanel}": [
            ["style", "display", 'none']
         ],
         "${_Text13}": [
            ["style", "top", '290px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '53px'],
            ["style", "font-size", '14px']
         ],
         "${_paper2}": [
            ["style", "top", '62px'],
            ["style", "left", '117px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '246px'],
            ["style", "width", '404px']
         ],
         "${_bins}": [
            ["style", "left", '410px'],
            ["style", "top", '125px']
         ],
         "${_Text12}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '18px'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '18px'],
            ["style", "width", '385px']
         ],
         "${_paper3}": [
            ["style", "top", '52px'],
            ["style", "left", '267px'],
            ["style", "display", 'none']
         ],
         "${_paper1}": [
            ["style", "display", 'none'],
            ["style", "top", '54px'],
            ["style", "left", '-15px'],
            ["transform", "scaleX", '0.82184']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: false,
         timeline: [
            { id: "eid518", tween: [ "style", "${_paper2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid540", tween: [ "style", "${_paper2}", "display", 'none', { fromValue: 'none'}], position: 1135, duration: 0 },
            { id: "eid546", tween: [ "style", "${_paper2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid519", tween: [ "style", "${_paper3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid541", tween: [ "style", "${_paper3}", "display", 'none', { fromValue: 'none'}], position: 1135, duration: 0 },
            { id: "eid545", tween: [ "style", "${_paper3}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid538", tween: [ "style", "${_Text13}", "top", '240px', { fromValue: '290px'}], position: 1061, duration: 439 },
            { id: "eid533", tween: [ "style", "${_blink_anim}", "opacity", '1', { fromValue: '0'}], position: 576, duration: 196 },
            { id: "eid661", tween: [ "style", "${_Text12}", "width", '385px', { fromValue: '385px'}], position: 809, duration: 0 },
            { id: "eid670", tween: [ "style", "${_bins}", "top", '125px', { fromValue: '125px'}], position: 1250, duration: 0 },
            { id: "eid645", tween: [ "style", "${_Text13}", "font-size", '14px', { fromValue: '14px'}], position: 2182, duration: 0, easing: "easeInOutQuad" },
            { id: "eid702", tween: [ "style", "${_Text12}", "left", '19px', { fromValue: '18px'}], position: 500, duration: 309 },
            { id: "eid58", tween: [ "style", "${_Text12}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 386 },
            { id: "eid60", tween: [ "style", "${_bins}", "left", '2px', { fromValue: '410px'}], position: 386, duration: 522 },
            { id: "eid360", tween: [ "style", "${_FeedbackPanel}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid534", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid535", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 1061, duration: 0 },
            { id: "eid521", tween: [ "style", "${_paper1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid543", tween: [ "style", "${_paper1}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid662", tween: [ "style", "${_Text12}", "font-size", '18px', { fromValue: '18px'}], position: 809, duration: 0 },
            { id: "eid528", tween: [ "style", "${_blink_anim}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid529", tween: [ "style", "${_blink_anim}", "display", 'block', { fromValue: 'none'}], position: 576, duration: 0 },
            { id: "eid325", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_paper1}', [] ], ""], position: 0 },
            { id: "eid327", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_paper3}', ['paper3'] ], ""], position: 0 },
            { id: "eid328", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_paper2}', ['paper2'] ], ""], position: 0 },
            { id: "eid548", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_blink_anim}', [] ], ""], position: 646 },
            { id: "eid549", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blink_anim}', [] ], ""], position: 902 }         ]
      }
   }
},
"paper": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'paper0001',
      type: 'image',
      rect: ['-10px','-9px','174px','59px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/paper0001.png','0px','0px']
   },
   {
      rect: ['-10','-9','150px','75px','auto','auto'],
      id: 'paper0002',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/paper0002.png','0px','0px']
   },
   {
      rect: ['-10','-9','154px','81px','auto','auto'],
      id: 'paper0003',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/paper0003.png','0px','0px']
   },
   {
      rect: ['-10','-9','184px','73px','auto','auto'],
      id: 'paper0004',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/paper0004.png','0px','0px']
   },
   {
      rect: ['-10','-9','181px','98px','auto','auto'],
      id: 'paper0005',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/paper0005.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_paper0001}": [
            ["style", "top", '0px'],
            ["style", "display", 'block'],
            ["style", "height", '71px'],
            ["style", "left", '0px'],
            ["style", "width", '146px']
         ],
         "${_paper0002}": [
            ["style", "height", '69px'],
            ["style", "display", 'none'],
            ["style", "width", '169px']
         ],
         "${symbolSelector}": [
            ["style", "height", '59px'],
            ["style", "width", '174px']
         ],
         "${_paper0005}": [
            ["style", "display", 'none']
         ],
         "${_paper0003}": [
            ["style", "display", 'none'],
            ["style", "height", '93px'],
            ["style", "width", '164px']
         ],
         "${_paper0004}": [
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         labels: {
            "paper1": 0,
            "paper2": 250,
            "paper3": 500,
            "paper4": 750,
            "paper5": 1000
         },
         timeline: [
            { id: "eid69", tween: [ "style", "${_paper0005}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid65", tween: [ "style", "${_paper0003}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid66", tween: [ "style", "${_paper0003}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0 },
            { id: "eid67", tween: [ "style", "${_paper0004}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid68", tween: [ "style", "${_paper0004}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid70", tween: [ "style", "${_paper0001}", "display", 'none', { fromValue: 'block'}], position: 250, duration: 0 },
            { id: "eid63", tween: [ "style", "${_paper0002}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid64", tween: [ "style", "${_paper0002}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"score": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      id: 'Text',
      text: 'SCORE',
      rect: ['0px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',10,'rgba(255,255,255,1.00)','700','none','italic']
   },
   {
      type: 'text',
      rect: ['0px','8px','58px','auto','auto','auto'],
      id: 'score_txt',
      text: '3456',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',22,'rgba(255,255,255,1)','bold','none','italic']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_score_txt}": [
            ["style", "top", '8px'],
            ["style", "font-size", '22px'],
            ["style", "left", '0px'],
            ["style", "width", '58px']
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '60px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"rewards": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'reward_blank',
      type: 'image',
      rect: ['0px','4px','55px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/reward_blank.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.95','0.95']],
      id: 'reward_blank2',
      type: 'image',
      rect: ['-1px','40px','55px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/reward_blank.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.9','0.9']],
      id: 'reward_blank3',
      type: 'image',
      rect: ['-2px','77px','55px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/reward_blank.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.85','0.85']],
      id: 'reward_blank4',
      type: 'image',
      rect: ['-3px','111px','55px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/reward_blank.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.8','0.8']],
      id: 'reward_blank5',
      type: 'image',
      rect: ['-4px','144px','55px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/reward_blank.png','0px','0px']
   },
   {
      transform: [[0,0],[],[],['0.75','0.75']],
      id: 'reward_blank6',
      type: 'image',
      rect: ['-5px','174px','55px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/reward_blank.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0px','55px','52px','auto','auto'],
      id: 'reward_0001',
      fill: ['rgba(0,0,0,0)','images/reward_0001.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0px','57px','54px','auto','auto'],
      id: 'reward_0002',
      fill: ['rgba(0,0,0,0)','images/reward_0002.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','57px','53px','auto','auto'],
      id: 'reward_0003',
      fill: ['rgba(0,0,0,0)','images/reward_0003.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','56px','54px','auto','auto'],
      id: 'reward_0004',
      fill: ['rgba(0,0,0,0)','images/reward_0004.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','1px','56px','51px','auto','auto'],
      id: 'reward_0005',
      fill: ['rgba(0,0,0,0)','images/reward_0005.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','56px','52px','auto','auto'],
      id: 'reward_0006',
      fill: ['rgba(0,0,0,0)','images/reward_0006.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_reward_blank4}": [
            ["style", "top", '111px'],
            ["style", "left", '-3px'],
            ["transform", "scaleY", '0.85'],
            ["transform", "scaleX", '0.85']
         ],
         "${_reward_blank}": [
            ["style", "top", '4px'],
            ["style", "left", '0px']
         ],
         "${_reward_0001}": [
            ["style", "top", '170px'],
            ["transform", "scaleY", '1.48'],
            ["transform", "scaleX", '1.48'],
            ["style", "opacity", '0'],
            ["style", "left", '-5px'],
            ["style", "display", 'none']
         ],
         "${_reward_blank3}": [
            ["style", "top", '77px'],
            ["style", "left", '-2px'],
            ["transform", "scaleY", '0.9'],
            ["transform", "scaleX", '0.9']
         ],
         "${_reward_0005}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '1.74'],
            ["transform", "scaleX", '1.74'],
            ["style", "opacity", '0'],
            ["style", "left", '-2px'],
            ["style", "display", 'none']
         ],
         "${_reward_0002}": [
            ["style", "top", '140px'],
            ["transform", "scaleY", '1.52'],
            ["transform", "scaleX", '1.52'],
            ["style", "opacity", '0'],
            ["style", "left", '-5px'],
            ["style", "display", 'none']
         ],
         "${_reward_0004}": [
            ["style", "top", '74px'],
            ["transform", "scaleY", '1.66'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '-3px'],
            ["transform", "scaleX", '1.66']
         ],
         "${_reward_blank5}": [
            ["style", "top", '144px'],
            ["style", "left", '-4px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8']
         ],
         "${symbolSelector}": [
            ["style", "height", '48px'],
            ["style", "width", '55px']
         ],
         "${_reward_0003}": [
            ["style", "top", '108px'],
            ["transform", "scaleY", '1.6'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '-4px'],
            ["transform", "scaleX", '1.6']
         ],
         "${_reward_blank6}": [
            ["style", "top", '174px'],
            ["style", "left", '-5px'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75']
         ],
         "${_reward_0006}": [
            ["style", "top", '1px'],
            ["transform", "scaleY", '1.84'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px'],
            ["transform", "scaleX", '1.84']
         ],
         "${_reward_blank2}": [
            ["style", "top", '42px'],
            ["style", "left", '-1px'],
            ["transform", "scaleY", '0.95'],
            ["transform", "scaleX", '0.95']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1727,
         autoPlay: false,
         labels: {
            "reward1": 250,
            "reward2": 500,
            "reward3": 750,
            "reward4": 1000,
            "reward5": 1250,
            "reward6": 1500
         },
         timeline: [
            { id: "eid478", tween: [ "transform", "${_reward_0005}", "scaleY", '0.95', { fromValue: '1.74'}], position: 1250, duration: 206, easing: "easeInOutQuad" },
            { id: "eid461", tween: [ "style", "${_reward_0003}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 201, easing: "easeInOutQuad" },
            { id: "eid474", tween: [ "style", "${_reward_0005}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 206, easing: "easeInOutQuad" },
            { id: "eid78", tween: [ "style", "${_reward_0001}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid84", tween: [ "style", "${_reward_0004}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid468", tween: [ "transform", "${_reward_0004}", "scaleY", '0.9', { fromValue: '1.66'}], position: 1000, duration: 210, easing: "easeInOutQuad" },
            { id: "eid455", tween: [ "transform", "${_reward_0002}", "scaleX", '0.8', { fromValue: '1.52'}], position: 500, duration: 217, easing: "easeInOutQuad" },
            { id: "eid86", tween: [ "style", "${_reward_0005}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid82", tween: [ "style", "${_reward_0003}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid456", tween: [ "transform", "${_reward_0002}", "scaleY", '0.8', { fromValue: '1.52'}], position: 500, duration: 217, easing: "easeInOutQuad" },
            { id: "eid484", tween: [ "transform", "${_reward_0006}", "scaleY", '1', { fromValue: '1.84'}], position: 1500, duration: 206, easing: "easeInOutQuad" },
            { id: "eid88", tween: [ "style", "${_reward_0006}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid464", tween: [ "style", "${_reward_0004}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 210, easing: "easeInOutQuad" },
            { id: "eid454", tween: [ "style", "${_reward_0002}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 217, easing: "easeInOutQuad" },
            { id: "eid467", tween: [ "transform", "${_reward_0004}", "scaleX", '0.9', { fromValue: '1.66'}], position: 1000, duration: 210, easing: "easeInOutQuad" },
            { id: "eid480", tween: [ "style", "${_reward_0006}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 206, easing: "easeInOutQuad" },
            { id: "eid449", tween: [ "transform", "${_reward_0001}", "scaleY", '0.75', { fromValue: '1.48'}], position: 250, duration: 219, easing: "easeInOutQuad" },
            { id: "eid80", tween: [ "style", "${_reward_0002}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid477", tween: [ "transform", "${_reward_0005}", "scaleX", '0.95', { fromValue: '1.74'}], position: 1250, duration: 206, easing: "easeInOutQuad" },
            { id: "eid483", tween: [ "transform", "${_reward_0006}", "scaleX", '1', { fromValue: '1.84'}], position: 1500, duration: 206, easing: "easeInOutQuad" },
            { id: "eid447", tween: [ "style", "${_reward_0001}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 219, easing: "easeInOutQuad" },
            { id: "eid460", tween: [ "transform", "${_reward_0003}", "scaleY", '0.85', { fromValue: '1.6'}], position: 750, duration: 201, easing: "easeInOutQuad" },
            { id: "eid459", tween: [ "transform", "${_reward_0003}", "scaleX", '0.85', { fromValue: '1.6'}], position: 750, duration: 201, easing: "easeInOutQuad" },
            { id: "eid448", tween: [ "transform", "${_reward_0001}", "scaleX", '0.75', { fromValue: '1.48'}], position: 250, duration: 219, easing: "easeInOutQuad" }         ]
      }
   }
},
"progress": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'progress_bg',
      type: 'image',
      rect: ['0px','0px','317px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/progress_bg.png','0px','0px']
   },
   {
      rect: ['-1px','0px','317px','38px','auto','auto'],
      id: 'progress_bar',
      type: 'image',
      clip: ['rect(0px 317pxpx 38pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/progress_bar.png','0px','0px']
   },
   {
      rect: ['-1px','8px','19px','18px','auto','auto'],
      type: 'rect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      id: 'blink1',
      opacity: 0,
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['77px','8px','19px','18px','auto','auto'],
      type: 'rect',
      id: 'blink2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['158px','10px','19px','18px','auto','auto'],
      type: 'rect',
      id: 'blink3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['219px','10px','19px','18px','auto','auto'],
      type: 'rect',
      id: 'blink4',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['292px','10px','19px','18px','auto','auto'],
      type: 'rect',
      id: 'blink5',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '317px']
         ],
         "${_blink1}": [
            ["style", "top", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px'],
            ["style", "cursor", 'pointer']
         ],
         "${_blink2}": [
            ["style", "top", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '77px'],
            ["style", "cursor", 'pointer']
         ],
         "${_progress_bg}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_blink3}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '158px'],
            ["style", "cursor", 'pointer']
         ],
         "${_progress_bar}": [
            ["style", "top", '0px'],
            ["style", "left", '-1px'],
            ["style", "clip", [0,4,38,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_blink5}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '292px'],
            ["style", "cursor", 'pointer']
         ],
         "${_blink4}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '219px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         labels: {
            "blink1": 470,
            "blink2": 1125,
            "blink3": 1518,
            "blink4": 1923,
            "blink5": 2766
         },
         timeline: [
            { id: "eid146", tween: [ "style", "${_progress_bar}", "clip", [0,317,38,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,4,38,0]}], position: 0, duration: 3000, easing: "easeInOutQuad" }         ]
      }
   }
},
"fda_drag": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'pill_bottle',
      type: 'image',
      rect: ['114px','60px','87px','115px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/pill_bottle.png','0px','0px']
   },
   {
      rect: ['0px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','bold','none','italic'],
      id: 'Text15',
      text: 'The FDA requires all promotional <br>material and messages to be:',
      align: 'center',
      type: 'text'
   },
   {
      id: 'drag1',
      type: 'rect',
      rect: ['-27','60','auto','auto','auto','auto']
   },
   {
      id: 'drag2',
      type: 'rect',
      rect: ['-27','60','auto','auto','auto','auto']
   },
   {
      id: 'drag3',
      type: 'rect',
      rect: ['-27','60','auto','auto','auto','auto']
   },
   {
      id: 'drag4',
      type: 'rect',
      rect: ['-27','60','auto','auto','auto','auto']
   },
   {
      id: 'drag5',
      type: 'rect',
      rect: ['-27','60','auto','auto','auto','auto']
   },
   {
      id: 'drag6',
      type: 'rect',
      rect: ['-27','60','auto','auto','auto','auto']
   },
   {
      rect: ['-5px','241px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(0,0,0,1.00)','bold','none','italic'],
      id: 'Text23',
      text: 'Drag all that apply to the container.',
      align: 'center',
      type: 'text'
   },
   {
      id: 'blink_anim_1',
      type: 'rect',
      rect: ['-42','252','auto','auto','auto','auto']
   },
   {
      rect: ['250px','226px','104px','52px','auto','auto'],
      id: 'continue2',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/continue.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'blink_anim_1',
      symbolName: 'blink_anim_1'
   },
   {
      id: 'drag1',
      symbolName: 'messages'
   },
   {
      id: 'drag6',
      symbolName: 'messages'
   },
   {
      id: 'drag4',
      symbolName: 'messages'
   },
   {
      id: 'drag5',
      symbolName: 'messages'
   },
   {
      id: 'drag2',
      symbolName: 'messages'
   },
   {
      id: 'drag3',
      symbolName: 'messages'
   }   ]
   },
   states: {
      "Base State": {
         "${_pill_bottle}": [
            ["style", "top", '60px'],
            ["style", "opacity", '0'],
            ["style", "left", '114px']
         ],
         "${_drag6}": [
            ["style", "top", '175px'],
            ["style", "opacity", '0'],
            ["style", "left", '201px']
         ],
         "${_Text15}": [
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '19px']
         ],
         "${_continue2}": [
            ["style", "top", '226px'],
            ["style", "left", '360px'],
            ["style", "cursor", 'pointer']
         ],
         "${_blink_anim_1}": [
            ["style", "top", '212px'],
            ["transform", "scaleY", '0.62'],
            ["transform", "scaleX", '0.62'],
            ["style", "opacity", '0'],
            ["style", "left", '-89px']
         ],
         "${_drag5}": [
            ["style", "top", '126px'],
            ["style", "opacity", '0'],
            ["style", "left", '201px']
         ],
         "${_Text23}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '-5px'],
            ["style", "top", '281px']
         ],
         "${symbolSelector}": [
            ["style", "height", '175px'],
            ["style", "width", '317px']
         ],
         "${_drag1}": [
            ["style", "opacity", '0']
         ],
         "${_drag3}": [
            ["style", "top", '106px'],
            ["style", "opacity", '0']
         ],
         "${_drag2}": [
            ["style", "top", '163px'],
            ["style", "opacity", '0']
         ],
         "${_drag4}": [
            ["style", "top", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '201px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4750,
         autoPlay: false,
         timeline: [
            { id: "eid376", tween: [ "style", "${_drag6}", "opacity", '1', { fromValue: '0'}], position: 3964, duration: 495 },
            { id: "eid100", tween: [ "style", "${_Text23}", "opacity", '1', { fromValue: '0'}], position: 1682, duration: 568 },
            { id: "eid657", tween: [ "style", "${_Text23}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 250 },
            { id: "eid373", tween: [ "style", "${_drag3}", "opacity", '1', { fromValue: '0'}], position: 3298, duration: 433 },
            { id: "eid571", tween: [ "style", "${_blink_anim_1}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 385 },
            { id: "eid374", tween: [ "style", "${_drag4}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 464 },
            { id: "eid95", tween: [ "style", "${_Text15}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 624 },
            { id: "eid564", tween: [ "style", "${_Text23}", "top", '241px', { fromValue: '281px'}], position: 1681, duration: 569 },
            { id: "eid102", tween: [ "style", "${_continue2}", "left", '250px', { fromValue: '360px'}], position: 4500, duration: 250 },
            { id: "eid372", tween: [ "style", "${_drag2}", "opacity", '1', { fromValue: '0'}], position: 3013, duration: 445 },
            { id: "eid375", tween: [ "style", "${_drag5}", "opacity", '1', { fromValue: '0'}], position: 3731, duration: 494 },
            { id: "eid93", tween: [ "style", "${_pill_bottle}", "opacity", '1', { fromValue: '0'}], position: 624, duration: 568 },
            { id: "eid115", tween: [ "style", "${_drag1}", "opacity", '1', { fromValue: '0'}], position: 2774, duration: 431 },
            { id: "eid572", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_blink_anim_1}', [] ], ""], position: 1192 }         ]
      }
   }
},
"messages": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-5px','-5px','149px','33px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'panel',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(209,137,81,1.00)']
   },
   {
      rect: ['12px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1.00)','bold','none','italic'],
      id: 'text',
      text: 'In 14-point type',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_text}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '12px'],
            ["style", "font-size", '14px']
         ],
         "${_panel}": [
            ["color", "background-color", 'rgba(209,137,81,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '24px'],
            ["style", "width", '140px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"truthful": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['56px','282px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',15,'rgba(0,0,0,1.00)','bold','none','italic'],
      align: 'center',
      id: 'Text27',
      text: 'As text appears, touch the appropriate button.',
      display: 'none',
      type: 'text'
   },
   {
      id: 'question_mark',
      type: 'image',
      rect: ['89px','0px','234px','282px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/question_mark.png','0px','0px']
   },
   {
      rect: ['38px','203px','158px','49px','auto','auto'],
      id: 'truthful',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/truthful.png','0px','0px']
   },
   {
      rect: ['240px','203px','159px','49px','auto','auto'],
      id: 'misleading',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/misleading.png','0px','0px']
   },
   {
      rect: ['303px','333px','104px','52px','auto','auto'],
      id: 'continue',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/continue.png','0px','0px']
   },
   {
      rect: ['209px','217px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1)','bold','none','italic'],
      id: 'Text24',
      text: 'or',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['52px','43px','328px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1)','bold','none','italic'],
      id: 'Text2',
      text: 'Your total rewards package…',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['39px','87px','344px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1)','bold','none','italic'],
      id: 'statement_txt',
      text: 'Five statements, some truthful, some misleading, will appear here. <br>Touch the appropriate button as they appear.',
      align: 'center',
      type: 'text'
   },
   {
      id: 'small_blink3',
      type: 'image',
      rect: ['-6px','272px','54px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/small_blink.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_misleading}": [
            ["style", "top", '333px'],
            ["style", "height", '40px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '240px'],
            ["style", "width", '148px']
         ],
         "${_Text24}": [
            ["style", "top", '217px'],
            ["style", "opacity", '0'],
            ["style", "left", '209px']
         ],
         "${_small_blink3}": [
            ["style", "top", '272px'],
            ["style", "left", '-6px']
         ],
         "${_Text2}": [
            ["style", "top", '43px'],
            ["style", "width", '328px'],
            ["style", "opacity", '0'],
            ["style", "left", '52px'],
            ["style", "font-size", '19px']
         ],
         "${_statement_txt}": [
            ["style", "top", '87px'],
            ["style", "width", '344px'],
            ["style", "left", '39px'],
            ["style", "font-size", '19px']
         ],
         "${symbolSelector}": [
            ["style", "height", '320px'],
            ["style", "width", '399px']
         ],
         "${_truthful}": [
            ["style", "top", '333px'],
            ["style", "height", '39px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '38px'],
            ["style", "width", '148px']
         ],
         "${_Text27}": [
            ["style", "top", '282px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '56px'],
            ["style", "font-size", '14px']
         ],
         "${_question_mark}": [
            ["style", "left", '89px'],
            ["style", "top", '0px']
         ],
         "${_continue}": [
            ["style", "top", '265px'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '423px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1114,
         autoPlay: false,
         timeline: [
            { id: "eid694", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 859, duration: 141 },
            { id: "eid394", tween: [ "style", "${_continue}", "left", '313px', { fromValue: '423px'}], position: 0, duration: 500 },
            { id: "eid391", tween: [ "style", "${_misleading}", "top", '203px', { fromValue: '333px'}], position: 500, duration: 500 },
            { id: "eid390", tween: [ "style", "${_Text24}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid400", tween: [ "style", "${_Text27}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid646", tween: [ "style", "${_Text27}", "font-size", '14px', { fromValue: '14px'}], position: 1114, duration: 0, easing: "easeInOutQuad" },
            { id: "eid392", tween: [ "style", "${_truthful}", "top", '203px', { fromValue: '333px'}], position: 500, duration: 500 },
            { id: "eid398", tween: [ "style", "${_continue}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 270 },
            { id: "eid402", tween: [ "style", "${_Text27}", "opacity", '1', { fromValue: '0'}], position: 787, duration: 213 },
            { id: "eid399", tween: [ "style", "${_continue}", "display", 'none', { fromValue: 'block'}], position: 787, duration: 0 }         ]
      }
   }
},
"timer": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'timer_grey',
      type: 'image',
      rect: ['0px','0px','329px','27px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/timer_black.png','0px','0px']
   },
   {
      type: 'image',
      id: 'timer_black2',
      rect: ['0px','5px','329px','27px','auto','auto'],
      clip: ['rect(0px 329pxpx 27.082317073171pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/timer_grey.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_timer_grey}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '27px']
         ],
         "${_timer_black2}": [
            ["style", "top", '-2px'],
            ["transform", "scaleY", '1.22222'],
            ["style", "clip", [0,0,32,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '329px']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '329px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid442", tween: [ "style", "${_timer_black2}", "top", '-2px', { fromValue: '-2px'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid433", tween: [ "transform", "${_timer_black2}", "scaleY", '1.22222', { fromValue: '1.22222'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid150", tween: [ "style", "${_timer_black2}", "clip", [0,329,32,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,32,0]}], position: 0, duration: 1000, easing: "easeInOutQuad" }         ]
      }
   }
},
"fda_mission": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','700','none','italic'],
      id: 'Text',
      text: 'THE FDA Regulations',
      type: 'text',
      rect: ['95px','0px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','bold','none','italic'],
      type: 'text',
      id: 'message',
      text: 'The FDA regulates how pharmaceutical products are marketed and sold.  The agency requires that all promotional materials be: <br><br><br> On label <br> Truthful <br> Not misleading<br> Balanced in terms of benefits and risks<br> Inclusive of full prescribing information<br>',
      align: 'left',
      rect: ['0px','24px','362px','auto','auto','auto']
   },
   {
      rect: ['268px','226px','104px','52px','auto','auto'],
      id: 'continue2',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/continue.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_message}": [
            ["style", "top", '24px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '362px'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${_continue2}": [
            ["style", "top", '226px'],
            ["style", "left", '374px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '95px'],
            ["style", "font-size", '19px']
         ],
         "${symbolSelector}": [
            ["style", "height", '278px'],
            ["style", "width", '372px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid224", tween: [ "style", "${_continue2}", "left", '268px', { fromValue: '374px'}], position: 250, duration: 250, easing: "easeInOutQuad" }         ]
      }
   }
},
"statements_int": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'text',
      rect: ['1px','-1px','360px','auto','auto','auto'],
      id: 'title',
      text: 'The U.S. Retirement Program…',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','700','none','italic']
   },
   {
      type: 'text',
      rect: ['17px','228px','254px','auto','auto','auto'],
      display: 'none',
      id: 'instructions',
      text: 'Touch words to form those statements.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',19,'rgba(0,0,0,1.00)','400','none','']
   },
   {
      type: 'image',
      rect: ['273px','221px','104px','52px','auto','auto'],
      display: 'none',
      id: 'continue',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/continue.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'blink_anim',
      rect: ['-27','239','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'blink_anim',
      symbolName: 'blink_anim_1'
   }   ]
   },
   states: {
      "Base State": {
         "${_blink_anim}": [
            ["style", "top", '209px'],
            ["transform", "scaleY", '0.63'],
            ["transform", "scaleX", '0.63'],
            ["style", "opacity", '0'],
            ["style", "left", '-71px'],
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '360px']
         ],
         "${_continue}": [
            ["style", "display", 'none'],
            ["style", "top", '221px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '273px']
         ],
         "${_title}": [
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '1px'],
            ["style", "font-size", '19px'],
            ["style", "top", '-1px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'italic'],
            ["style", "width", '360px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0']
         ],
         "${_instructions}": [
            ["style", "top", '278px'],
            ["style", "width", '293px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "font-weight", '400'],
            ["style", "left", '8px'],
            ["style", "font-size", '14px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1475,
         autoPlay: false,
         timeline: [
            { id: "eid514", tween: [ "style", "${_instructions}", "top", '238px', { fromValue: '278px'}], position: 1097, duration: 378 },
            { id: "eid652", tween: [ "style", "${_instructions}", "left", '8px', { fromValue: '8px'}], position: 1475, duration: 0 },
            { id: "eid507", tween: [ "style", "${_title}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid651", tween: [ "style", "${_instructions}", "width", '293px', { fromValue: '293px'}], position: 1475, duration: 0 },
            { id: "eid500", tween: [ "style", "${_instructions}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid511", tween: [ "style", "${_instructions}", "display", 'block', { fromValue: 'none'}], position: 1097, duration: 0 },
            { id: "eid502", tween: [ "style", "${_continue}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid501", tween: [ "style", "${_blink_anim}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid503", tween: [ "style", "${_blink_anim}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid506", tween: [ "style", "${_blink_anim}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 361 },
            { id: "eid510", tween: [ "style", "${_title}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 295 },
            { id: "eid515", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_blink_anim}', [] ], ""], position: 860.60446238952 },
            { id: "eid516", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_blink_anim}', [] ], ""], position: 1204.7677859536 }         ]
      }
   }
},
"statement_txt": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['-8px','0px','102%','100%','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'text_bg',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'text',
      id: 'text1',
      text: 'Going beyond',
      rect: ['0px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none','']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_text_bg}": [
            ["style", "top", '0px'],
            ["style", "height", '100%'],
            ["style", "left", '-8px'],
            ["style", "width", '102%']
         ],
         "${_text1}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(255,255,255,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '28px'],
            ["style", "width", '480px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"FeedbackPanel": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'feedback_panel_small',
      type: 'image',
      rect: ['130px','0px','219px','126px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_panel_small.png','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',21,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      id: 'Text',
      text: 'Keep up the<br>good work!',
      align: 'center',
      rect: ['16px','17px','185px','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',21,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      display: 'none',
      id: 'TextCopy',
      text: 'Work on it',
      align: 'center',
      rect: ['16px','17px','185px','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',21,'rgba(0,0,0,1)','normal','none',''],
      type: 'text',
      display: 'none',
      id: 'TextCopy2',
      text: 'Needs improvement!',
      align: 'center',
      rect: ['16px','17px','185px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '17px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'block'],
            ["style", "width", '185px'],
            ["style", "left", '114px'],
            ["style", "font-size", '21px']
         ],
         "${symbolSelector}": [
            ["style", "height", '126px'],
            ["style", "width", '219px']
         ],
         "${_feedback_panel_small}": [
            ["style", "left", '101px'],
            ["style", "top", '0px']
         ],
         "${_TextCopy}": [
            ["style", "top", '30px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-size", '21px'],
            ["style", "left", '16px'],
            ["style", "width", '185px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '17px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "width", '185px'],
            ["style", "left", '-85px'],
            ["style", "font-size", '21px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: true,
         timeline: [
            { id: "eid359", tween: [ "style", "${_TextCopy}", "top", '30px', { fromValue: '30px'}], position: 500, duration: 0 },
            { id: "eid358", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid354", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid356", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid357", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid355", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid558", tween: [ "style", "${_Text}", "left", '114px', { fromValue: '114px'}], position: 0, duration: 0 },
            { id: "eid553", tween: [ "style", "${_feedback_panel_small}", "left", '0px', { fromValue: '101px'}], position: 0, duration: 500 },
            { id: "eid554", tween: [ "style", "${_feedback_panel_small}", "left", '-102px', { fromValue: '0px'}], position: 500, duration: 500 },
            { id: "eid560", tween: [ "style", "${_TextCopy2}", "left", '-85px', { fromValue: '-85px'}], position: 1000, duration: 0 }         ]
      }
   }
},
"TimeToTalk": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','700','none','italic'],
      type: 'text',
      id: 'title',
      text: 'TIME TO TALK',
      align: 'center',
      rect: ['-100px','0px','374px','22px','auto','auto']
   },
   {
      type: 'image',
      rect: ['182px','231px','103px','49px','auto','auto'],
      display: 'none',
      id: 'start',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/start.png','0px','0px']
   },
   {
      type: 'image',
      rect: ['180px','231px','105px','49px','auto','auto'],
      display: 'none',
      id: 'finished',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/finished.png','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',14,'rgba(0,0,0,1.00)','400','none','normal'],
      type: 'text',
      id: 'instructions',
      text: 'When ready, touch START then read text aloud.',
      align: 'left',
      rect: ['-135px','243px','315px','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',20,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'txt',
      text: 'Lorem etc',
      align: 'center',
      rect: ['-100px','27px','374px','177px','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'feedback',
      rect: ['-78','42','auto','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'continue',
      rect: ['182px','228px','104px','52px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/continue.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'feedback',
      symbolName: 'TTTFeebback'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '38px']
         ],
         "${_txt}": [
            ["style", "top", '27px'],
            ["style", "text-align", 'center'],
            ["style", "width", '374px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '-100px'],
            ["style", "text-decoration", 'none'],
            ["style", "font-size", '20px']
         ],
         "${_start}": [
            ["style", "top", '231px'],
            ["style", "display", 'none'],
            ["style", "left", '182px'],
            ["style", "cursor", 'pointer']
         ],
         "${_feedback}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '22px'],
            ["style", "width", '135px']
         ],
         "${_instructions}": [
            ["style", "top", '243px'],
            ["style", "width", '315px'],
            ["style", "left", '-135px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "text-decoration", 'none'],
            ["style", "font-size", '14px']
         ],
         "${_finished}": [
            ["style", "display", 'none'],
            ["style", "top", '231px'],
            ["style", "left", '180px'],
            ["style", "cursor", 'pointer']
         ],
         "${_title}": [
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '-100px'],
            ["style", "font-size", '19px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'italic'],
            ["style", "width", '374px'],
            ["style", "height", '22px']
         ],
         "${_continue}": [
            ["style", "display", 'block'],
            ["style", "top", '228px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '182px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         timeline: [
            { id: "eid361", tween: [ "style", "${_finished}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid367", tween: [ "style", "${_feedback}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid364", tween: [ "style", "${_feedback}", "display", 'none', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid368", tween: [ "style", "${_start}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid366", tween: [ "style", "${_continue}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
      }
   }
},
"TTTFeebback": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'feedback_panel',
      type: 'image',
      rect: ['0px','-22px','337px','204px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_panel.png','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(0,0,0,1.00)','normal','none','normal'],
      type: 'text',
      id: 'feedback_txt',
      text: 'Feedback',
      align: 'justify',
      rect: ['22px','0px','292px','130px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_feedback_panel}": [
            ["style", "left", '0px'],
            ["style", "top", '-22px']
         ],
         "${_feedback_txt}": [
            ["style", "top", '0px'],
            ["style", "font-size", '18px'],
            ["style", "height", '130px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '22px'],
            ["style", "width", '292px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '338px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"assessment": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','104px','52px','auto','auto'],
      type: 'image',
      id: 'playAgain_btn',
      display: 'none',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/play_again.png','0px','0px']
   },
   {
      rect: ['109px','7px','95px','41px','auto','auto'],
      id: 'back_button',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/back_button.png','0px','0px']
   },
   {
      rect: ['-261','-143','auto','auto','auto','auto'],
      id: 'text',
      text: 'Your Total Rewards Demonstration  <br>12/20/13<br>20<br>5. Avg co-worker has mastered 4.<br>Master at least 2 more Blinks this week.<br><br><br>',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   },
   {
      rect: ['-261','-143','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none','italic'],
      id: 'textCopy',
      text: 'Course:<br>Must be completed by:<br>Blinks in Course:<br>Blinks Mastered:<br>Guidance:<br>',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['-294px','-122px','384px','52px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(30,35,86,1.00)']
   },
   {
      rect: ['-294px','-65px','384px','53px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      type: 'rect',
      id: 'RoundRectCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      display: 'none',
      fill: ['rgba(248,153,49,1.00)']
   },
   {
      rect: ['-207px','-120px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(133,153,249,1.00)','normal','none','italic'],
      align: 'right',
      id: 'Text',
      text: 'This session:<br>This Course:<br>Lifetime:<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['-118px','-104px','222px','35px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(252,252,252,1.00)','normal','none','normal'],
      align: 'left',
      id: 'TextCopy',
      text: '5,325 (Avg co-worker: 6,434)<br>52,683 (Avg co-worker: 42,325)<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['-207px','-61px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(81,81,81,1.00)','normal','none','italic'],
      align: 'right',
      id: 'TextCopy4',
      text: 'Level:<br>To Level Up:<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['-118px','-46px','222px','35px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(252,252,252,1.00)','normal','none','normal'],
      align: 'left',
      id: 'TextCopy3',
      text: '- Earn 150 more points<br>- Master 4 more Blinks<br><br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['-118px','-62px','222px','35px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(252,252,252,1.00)','normal','none','normal'],
      align: 'left',
      id: 'level_txt',
      text: 'Beginner',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['-118px','-120px','222px','35px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(252,252,252,1.00)','normal','none','normal'],
      align: 'left',
      id: 'score_txt',
      text: 'XXXX<br>',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['-289px','-111px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(252,252,252,1)','800','none','italic'],
      align: 'left',
      id: 'Text2',
      text: 'POINTS',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['-289px','-54px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(0,0,0,1.00)','800','none','italic'],
      align: 'left',
      id: 'Text2Copy',
      text: 'LEVELS',
      display: 'none',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy4}": [
            ["style", "top", '-61px'],
            ["color", "color", 'rgba(81,81,81,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '-207px'],
            ["style", "font-style", 'italic']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(30,35,86,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '116px'],
            ["style", "top", '-122px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '-54px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '800'],
            ["style", "left", '-289px'],
            ["style", "font-size", '18px']
         ],
         "${_score_txt}": [
            ["style", "top", '-120px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(252,252,252,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '35px'],
            ["style", "left", '-118px'],
            ["style", "width", '222px']
         ],
         "${_TextCopy3}": [
            ["style", "top", '-46px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(252,252,252,1)'],
            ["style", "display", 'none'],
            ["style", "height", '35px'],
            ["style", "left", '-118px'],
            ["style", "width", '222px']
         ],
         "${_Text2}": [
            ["style", "top", '-111px'],
            ["style", "display", 'none'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '800'],
            ["style", "left", '-289px'],
            ["style", "font-size", '18px']
         ],
         "${_TextCopy}": [
            ["style", "top", '-104px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(252,252,252,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '35px'],
            ["style", "left", '-118px'],
            ["style", "width", '222px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(248,153,49,1.00)'],
            ["style", "height", '53px'],
            ["style", "display", 'none'],
            ["style", "left", '116px'],
            ["style", "top", '-65px']
         ],
         "${_back_button}": [
            ["style", "top", '7px'],
            ["style", "left", '113px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '-120px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(133,153,249,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '-207px'],
            ["style", "font-size", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '104px']
         ],
         "${_textCopy}": [
            ["style", "top", '-228px'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'right'],
            ["color", "color", 'rgba(244,162,42,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "left", '-291px'],
            ["style", "width", '166px']
         ],
         "${_text}": [
            ["style", "top", '-228px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '-118px'],
            ["style", "font-size", '12px']
         ],
         "${_playAgain_btn}": [
            ["style", "top", '6px'],
            ["style", "display", 'none'],
            ["style", "height", '43px'],
            ["style", "left", '110px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '151px']
         ],
         "${_level_txt}": [
            ["style", "top", '-62px'],
            ["style", "text-align", 'left'],
            ["color", "color", 'rgba(252,252,252,1)'],
            ["style", "display", 'none'],
            ["style", "height", '35px'],
            ["style", "left", '-118px'],
            ["style", "width", '222px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2750,
         autoPlay: true,
         timeline: [
            { id: "eid625", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid618", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 1412, duration: 0 },
            { id: "eid630", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid623", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 1412, duration: 0 },
            { id: "eid628", tween: [ "style", "${_level_txt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid639", tween: [ "style", "${_level_txt}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid627", tween: [ "style", "${_TextCopy3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid638", tween: [ "style", "${_TextCopy3}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid631", tween: [ "style", "${_Text2Copy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid641", tween: [ "style", "${_Text2Copy}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid404", tween: [ "style", "${_playAgain_btn}", "left", '-54px', { fromValue: '110px'}], position: 0, duration: 500 },
            { id: "eid626", tween: [ "style", "${_TextCopy4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid637", tween: [ "style", "${_TextCopy4}", "display", 'block', { fromValue: 'none'}], position: 2750, duration: 0 },
            { id: "eid730", tween: [ "style", "${_playAgain_btn}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid580", tween: [ "style", "${_textCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
            { id: "eid701", tween: [ "style", "${_back_button}", "left", '3px', { fromValue: '113px'}], position: 0, duration: 500 },
            { id: "eid616", tween: [ "style", "${_RoundRect}", "left", '-294px', { fromValue: '116px'}], position: 500, duration: 912 },
            { id: "eid632", tween: [ "style", "${_RoundRectCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid633", tween: [ "style", "${_RoundRectCopy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid636", tween: [ "style", "${_RoundRectCopy}", "left", '-294px', { fromValue: '116px'}], position: 2000, duration: 750 },
            { id: "eid610", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid615", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid624", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid617", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1412, duration: 0 },
            { id: "eid629", tween: [ "style", "${_score_txt}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid640", tween: [ "style", "${_score_txt}", "display", 'block', { fromValue: 'none'}], position: 1412, duration: 0 },
            { id: "eid406", tween: [ "style", "${_text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }         ]
      }
   }
},
"blink_anim_1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'blink12',
      type: 'image',
      rect: ['0px','0px','96px','76px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/blink1.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','96px','81px','auto','auto'],
      id: 'blink2',
      fill: ['rgba(0,0,0,0)','images/blink2.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','96px','78px','auto','auto'],
      id: 'blink3',
      fill: ['rgba(0,0,0,0)','images/blink3.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','96px','82px','auto','auto'],
      id: 'blink4',
      fill: ['rgba(0,0,0,0)','images/blink4.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0','0','97px','80px','auto','auto'],
      id: 'blink5',
      fill: ['rgba(0,0,0,0)','images/blink5.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_blink12}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_blink2}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '76px'],
            ["style", "width", '96px']
         ],
         "${_blink3}": [
            ["style", "display", 'none']
         ],
         "${_blink5}": [
            ["style", "display", 'none']
         ],
         "${_blink4}": [
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid3", tween: [ "style", "${_blink3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_blink3}", "display", 'block', { fromValue: 'none'}], position: 108, duration: 0 },
            { id: "eid13", tween: [ "style", "${_blink3}", "display", 'none', { fromValue: 'block'}], position: 166, duration: 0 },
            { id: "eid6", tween: [ "style", "${_blink4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_blink4}", "display", 'block', { fromValue: 'none'}], position: 166, duration: 0 },
            { id: "eid14", tween: [ "style", "${_blink4}", "display", 'none', { fromValue: 'block'}], position: 228, duration: 0 },
            { id: "eid2", tween: [ "style", "${_blink2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_blink2}", "display", 'block', { fromValue: 'none'}], position: 52, duration: 0 },
            { id: "eid12", tween: [ "style", "${_blink2}", "display", 'none', { fromValue: 'block'}], position: 108, duration: 0 },
            { id: "eid7", tween: [ "style", "${_blink5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_blink5}", "display", 'block', { fromValue: 'none'}], position: 228, duration: 0 },
            { id: "eid10", tween: [ "style", "${_blink12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_blink12}", "display", 'none', { fromValue: 'block'}], position: 52, duration: 0 }         ]
      }
   }
},
"rewards_statement": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'scrolling_statement',
      type: 'rect',
      rect: ['0','24','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,153,51,1.00)','700','none','italic'],
      type: 'text',
      id: 'Text2',
      text: 'MY TOTAL REWARDS STATEMENT',
      align: 'left',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      transform: [],
      type: 'image',
      id: 'back_button',
      rect: ['0','41','352px','103px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/back_button.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'scrolling_statement',
      symbolName: 'scrolling_statement'
   }   ]
   },
   states: {
      "Base State": {
         "${_back_button}": [
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "height", '103px'],
            ["style", "opacity", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '352px']
         ],
         "${_Text2}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '350px'],
            ["style", "overflow", 'visible'],
            ["style", "width", '365px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"scrolling_statement": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      type: 'text',
      id: 'Text7',
      text: 'My Annual Compensation ',
      align: 'left',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      type: 'text',
      id: 'Text8',
      text: '$379,274 ',
      align: 'left',
      rect: ['299px','0px','auto','auto','auto','auto']
   },
   {
      type: 'text',
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1.00)','500','none','normal'],
      rect: ['12px','22px','321px','auto','auto','auto'],
      id: 'Text',
      text: 'Base Salary \t\t                        <br>Annual Incentives paid 2012 for 2011                 <br>Other Cash incentives paid in 2012                             <br>Value of Restricted Share/Units granted 2012     <br>Value of Restricted Cash granted 2012                 <br>Company\'s Cost for Benefits paid 2012                 <br>',
      align: 'left',
      transform: []
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','700','none','normal'],
      type: 'text',
      id: 'Text10',
      text: ' $195,000<br> $115,000<br> $232<br>$15,203<br> $15,334<br>$38,505',
      align: 'right',
      rect: ['299px','22px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','700','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'My 2012 Equity Grants (shares)\t                         ',
      align: 'left',
      rect: ['0px','128px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      type: 'text',
      id: 'Text12',
      text: '632',
      align: 'right',
      rect: ['297px','128px','55px','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      type: 'text',
      id: 'Text11',
      text: 'My 2012 Value from Equity-Base/Cash Awards     ',
      align: 'left',
      rect: ['0px','152px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      type: 'text',
      id: 'Text14',
      text: ' $21,832',
      align: 'right',
      rect: ['298px','152px','54px','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      type: 'text',
      id: 'Text13',
      text: 'My Accumulated Wealth \t              <br>',
      align: 'left',
      rect: ['0','175px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      type: 'text',
      id: 'Text15',
      text: '$186,050',
      align: 'right',
      rect: ['299px','175px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','500','none','normal'],
      type: 'text',
      id: 'Text16',
      text: 'My 401K \t\t                          <br>My Restricted Shares/Units<br>Dividends and Dividend Equivalents<br>My Restricted Cash                                                       ',
      align: 'left',
      rect: ['12px','199px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','700','none','normal'],
      type: 'text',
      id: 'Text17',
      text: '$141,532<br>$25,432<br>$9,543<br>$9,543',
      align: 'right',
      rect: ['299px','199px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','700','none','normal'],
      type: 'text',
      id: 'Text18',
      text: 'My Estimated Annual Retirement Benefit                 <br>',
      align: 'left',
      rect: ['0','271px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      type: 'text',
      id: 'Text20',
      text: 'My Health and Welfare Benefits',
      align: 'left',
      rect: ['0','293px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      type: 'text',
      id: 'Text19',
      text: '$12,345',
      align: 'left',
      rect: ['306px','271px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text8}": [
            ["style", "top", '0px'],
            ["style", "left", '299px']
         ],
         "${_Text18}": [
            ["style", "top", '271px'],
            ["style", "font-weight", '700'],
            ["style", "text-align", 'left']
         ],
         "${_Text15}": [
            ["style", "top", '175px'],
            ["style", "left", '299px'],
            ["style", "text-align", 'right']
         ],
         "${_Text11}": [
            ["style", "left", '0px'],
            ["style", "top", '152px']
         ],
         "${_Text13}": [
            ["style", "top", '175px']
         ],
         "${_Text17}": [
            ["style", "top", '199px'],
            ["style", "font-weight", '700'],
            ["style", "text-align", 'right'],
            ["style", "left", '299px']
         ],
         "${_Text16}": [
            ["style", "top", '199px'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px']
         ],
         "${_Text10}": [
            ["style", "top", '22px'],
            ["style", "font-weight", '700'],
            ["style", "left", '299px'],
            ["style", "text-align", 'right']
         ],
         "${_Text12}": [
            ["style", "top", '128px'],
            ["style", "left", '297px'],
            ["style", "text-align", 'right'],
            ["style", "width", '55px']
         ],
         "${_Text20}": [
            ["style", "top", '293px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px'],
            ["style", "width", '321px'],
            ["style", "top", '22px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "font-size", '13px'],
            ["transform", "scaleY", '1']
         ],
         "${symbolSelector}": [
            ["style", "height", '256px'],
            ["style", "width", '370px']
         ],
         "${_Text7}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text9}": [
            ["style", "top", '128px'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px']
         ],
         "${_Text14}": [
            ["style", "top", '152px'],
            ["style", "text-align", 'right'],
            ["style", "left", '298px'],
            ["style", "width", '54px']
         ],
         "${_Text19}": [
            ["style", "left", '306px'],
            ["style", "top", '271px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"statement_details": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,153,51,1)','bold','none','italic'],
      id: 'Text21',
      text: 'MY TOTAL REWARDS STATEMENT DETAILS',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','24px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1.00)','bold','none','normal'],
      id: 'Text22',
      text: 'My Annual Compensation',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['280px','24px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      id: 'Text23',
      text: '$379,274.00',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','46px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,153,51,1.00)','bold','none','normal'],
      id: 'Text24',
      text: 'Base Salary',
      align: 'left',
      type: 'text'
   },
   {
      id: 'statement2_btn',
      type: 'rect',
      rect: ['-1','66','auto','auto','auto','auto']
   },
   {
      rect: ['274px','178','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1)','bold','none','normal'],
      id: 'Text28',
      text: '$195,000.00',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['-1px','209px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,153,51,1.00)','bold','none','normal'],
      id: 'Text29',
      text: 'Annual Incentives',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','230px','351px','88px','auto','auto'],
      id: 'Rectangle4',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,222,189,1)']
   },
   {
      rect: ['4','234px','341px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1.00)','500','none','normal'],
      id: 'Text30',
      text: 'Annual incentives help motivate you and reward your efforts toward satisfying personal and corporate goals. Every year, the Company as a whole and each business unit individually establishes goals; most of our variable pay programs are based on achievement of these goals.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['-1px','318px','351px','80px','auto','auto'],
      id: 'Rectangle5',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,153,51,1.00)']
   },
   {
      rect: ['4px','368px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',10,'rgba(0,0,0,1)','bold','none','normal'],
      id: 'Text34',
      text: 'Bonus <br>Plan',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['3px','323px','341px','19px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1.00)','bold','none','normal'],
      id: 'Text27',
      text: 'My Annual Incentives paid 2012 for 2011',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['274px','323px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1)','bold','none','normal'],
      id: 'Text32',
      text: '$115,000.00',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['4','344px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',10,'rgba(0,0,0,1)','bold','none','normal'],
      id: 'Text33',
      text: 'Name',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['39px','344px','65px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',10,'rgba(0,0,0,1)','700','none','normal'],
      id: 'Text37',
      text: 'Voluntary <br>Deferral <br>$0.00',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['105px','344px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',10,'rgba(0,0,0,1)','700','none','normal'],
      id: 'Text38',
      text: 'Mandatory <br>Deferral <br>$0.00',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['166px','344px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',10,'rgba(0,0,0,1)','700','none','normal'],
      id: 'Text39',
      text: 'Other<br>Deferral <br>$0.00',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['213px','344px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',10,'rgba(0,0,0,1)','700','none','normal'],
      id: 'Text40',
      text: '“Cash” <br><br>$115,000.00',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['285px','344px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',10,'rgba(0,0,0,1)','700','none','normal'],
      id: 'Text41',
      text: 'Incentive <br>Amount <br>$115,000.00',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['-1','403px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,153,51,1.00)','bold','none','normal'],
      id: 'Text31',
      text: 'Other Cash incentives<br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','422px','351px','55px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,222,189,1.00)']
   },
   {
      rect: ['4','426','344px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1.00)','500','none','normal'],
      id: 'Text',
      text: 'Your annual total compensation includes other cash incentives that are rewards for your accomplishments at the Company.<br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['-1px','477px','351px','44px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,153,51,1.00)']
   },
   {
      rect: ['4','484','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1.00)','bold','none','normal'],
      id: 'Text2',
      text: 'Other Cash incentives paid in 2012<br>Employee Service Award\t\t                      ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['280px','484px','65px','16px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1)','bold','none','normal'],
      id: 'Text5',
      text: '$232.25<br>$232.25 ',
      align: 'right',
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'statement2_btn',
      symbolName: 'statement2_btn'
   }   ]
   },
   states: {
      "Base State": {
         "${_Text38}": [
            ["style", "top", '344px'],
            ["style", "font-weight", '700'],
            ["style", "left", '105px'],
            ["style", "font-size", '10px']
         ],
         "${_Text27}": [
            ["style", "top", '323px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '19px'],
            ["style", "left", '3px'],
            ["style", "width", '341px']
         ],
         "${_Text28}": [
            ["style", "left", '274px']
         ],
         "${_Text23}": [
            ["style", "left", '280px'],
            ["style", "top", '24px']
         ],
         "${_Text40}": [
            ["style", "top", '344px'],
            ["style", "font-weight", '700'],
            ["style", "left", '213px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '520px'],
            ["style", "overflow", 'visible'],
            ["style", "width", '364px']
         ],
         "${_Text29}": [
            ["style", "top", '209px'],
            ["style", "left", '-1px'],
            ["color", "color", 'rgba(255,153,51,1.00)']
         ],
         "${_Text41}": [
            ["style", "top", '344px'],
            ["style", "font-weight", '700'],
            ["style", "left", '285px'],
            ["style", "font-size", '10px']
         ],
         "${_Rectangle4}": [
            ["style", "height", '88px']
         ],
         "${_Text34}": [
            ["style", "top", '368px'],
            ["style", "left", '4px'],
            ["style", "font-size", '10px']
         ],
         "${_Text21}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_Text31}": [
            ["style", "top", '403px'],
            ["color", "color", 'rgba(255,153,51,1.00)']
         ],
         "${_Text33}": [
            ["style", "top", '344px'],
            ["style", "font-size", '10px']
         ],
         "${_Text24}": [
            ["style", "top", '46px'],
            ["style", "left", '0px'],
            ["color", "color", 'rgba(255,153,51,1.00)']
         ],
         "${_Rectangle2}": [
            ["style", "height", '55px'],
            ["color", "background-color", 'rgba(255,222,189,1.00)'],
            ["style", "top", '422px']
         ],
         "${_Text22}": [
            ["style", "top", '24px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "left", '0px'],
            ["style", "font-size", '13px']
         ],
         "${_Text39}": [
            ["style", "top", '344px'],
            ["style", "font-weight", '700'],
            ["style", "left", '166px'],
            ["style", "font-size", '10px']
         ],
         "${_Rectangle5}": [
            ["color", "background-color", 'rgba(255,153,51,1.00)']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,153,51,1.00)'],
            ["style", "height", '44px']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "width", '344px']
         ],
         "${_Text5}": [
            ["style", "top", '484px'],
            ["style", "text-align", 'right'],
            ["style", "left", '280px']
         ],
         "${_Text32}": [
            ["style", "left", '274px'],
            ["style", "top", '323px']
         ],
         "${_Text37}": [
            ["style", "top", '344px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '10px'],
            ["style", "font-weight", '700'],
            ["style", "left", '39px'],
            ["style", "width", '65px']
         ],
         "${_statement2_btn}": [
            ["style", "cursor", 'auto']
         ],
         "${_Text30}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "top", '234px'],
            ["style", "width", '341px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4098,
         autoPlay: true,
         timeline: [
            { id: "eid751", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_statement2_btn}', [] ], ""], position: 4098 }         ]
      }
   }
},
"Statement1": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: true,
   content: {
   dom: [
   {
      id: 'panel',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'panel',
      symbolName: 'statement_details'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '220px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '370px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Statement2": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel',
      type: 'rect',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'panel',
      symbolName: 'rewards_statement'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel}": [
            ["transform", "scaleX", '1'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '220px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '365px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"statement2_btn": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'Rectangle2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      rect: ['0px','0px','351px','106px','auto','auto'],
      fill: ['rgba(255,222,189,1.00)']
   },
   {
      rect: ['5px','4px','341px','102px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1.00)','500','none','normal'],
      id: 'Text25',
      text: 'The Company’s base salary program reflects the partnership between you and the Company and compensation for your skills, effort and commitment to the Company. You are responsible for performing your job to the best of your ability. In return, the Company is responsible for providing a sound, competitive pay program.',
      align: 'left',
      type: 'text'
   },
   {
      type: 'rect',
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','106px','351px','28px','auto','auto'],
      fill: ['rgba(255,153,51,1.00)']
   },
   {
      rect: ['5px','112px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1.00)','700','none','normal'],
      id: 'Text26',
      text: 'My Base Salary (as of 10/31/13)',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["style", "height", '106px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,222,189,1.00)']
         ],
         "${symbolSelector}": [
            ["style", "height", '134px'],
            ["style", "width", '351px']
         ],
         "${_Rectangle3}": [
            ["style", "height", '28px'],
            ["style", "top", '106px'],
            ["style", "left", '0px'],
            ["color", "background-color", 'rgba(255,153,51,1.00)']
         ],
         "${_Text26}": [
            ["style", "top", '112px'],
            ["style", "font-weight", '700'],
            ["style", "left", '5px'],
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_Text25}": [
            ["style", "top", '4px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '102px'],
            ["style", "font-weight", '500'],
            ["style", "left", '5px'],
            ["style", "width", '341px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Statement1Back": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'scroller',
      type: 'rect',
      rect: ['37','84','auto','auto','auto','auto']
   },
   {
      rect: ['267px','234px','95px','41px','auto','auto'],
      id: 'back_button',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/back_button.png','0px','0px']
   },
   {
      id: 'small_blink',
      type: 'image',
      rect: ['3px','236px','54px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/small_blink.png','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1)','bold','none','normal'],
      type: 'text',
      id: 'Text7',
      text: 'Scroll for more information.<br>',
      align: 'left',
      rect: ['60px','245px','243px','19px','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'scroller',
      symbolName: 'Statement1'
   }   ]
   },
   states: {
      "Base State": {
         "${_back_button}": [
            ["style", "top", '234px'],
            ["style", "left", '322px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text7}": [
            ["style", "height", '19px'],
            ["style", "top", '245px'],
            ["style", "left", '60px'],
            ["style", "width", '243px']
         ],
         "${symbolSelector}": [
            ["style", "height", '334px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '430px']
         ],
         "${_scroller}": [
            ["style", "top", '0px'],
            ["style", "left", '55px'],
            ["style", "overflow", 'hidden']
         ],
         "${_small_blink}": [
            ["style", "top", '236px'],
            ["style", "left", '3px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Statement2Back": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['265px','233px','95px','41px','auto','auto'],
      id: 'back_button2',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/back_button.png','0px','0px']
   },
   {
      id: 'scroller',
      type: 'rect',
      clip: ['rect(0px 365pxpx 312pxpx 0px)'],
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      id: 'small_blink2',
      type: 'image',
      rect: ['-50px','236px','54px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/small_blink.png','0px','0px']
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1)','bold','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'Touch any category for more details.<br><br>',
      align: 'left',
      rect: ['11px','246px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'scroller',
      symbolName: 'Statement2'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '280px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '430px']
         ],
         "${_scroller}": [
            ["style", "clip", [0,370,221,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '59px']
         ],
         "${_Text9}": [
            ["style", "left", '70px'],
            ["style", "top", '246px']
         ],
         "${_back_button2}": [
            ["style", "top", '233px'],
            ["style", "left", '324px'],
            ["style", "cursor", 'pointer']
         ],
         "${_small_blink2}": [
            ["style", "top", '236px'],
            ["style", "left", '9px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4250,
         autoPlay: true,
         timeline: [
            { id: "eid867", tween: [ "style", "${_small_blink2}", "left", '9px', { fromValue: '9px'}], position: 4250, duration: 0 },
            { id: "eid868", tween: [ "style", "${_Text9}", "left", '70px', { fromValue: '70px'}], position: 4250, duration: 0 },
            { id: "eid869", tween: [ "style", "${_back_button2}", "left", '324px', { fromValue: '324px'}], position: 4250, duration: 0 },
            { id: "eid840", tween: [ "style", "${_scroller}", "clip", [0,370,221,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,370,221,0]}], position: 0, duration: 0 },
            { id: "eid870", tween: [ "style", "${_scroller}", "left", '59px', { fromValue: '59px'}], position: 4250, duration: 0 }         ]
      }
   }
},
"mission": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['43px','24px','358px','78px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1)','500','none','normal'],
      id: 'Text2',
      text: 'Our mission is to create a better financial future for our clients. As we pursue that mission, we’re guided by our culture and a set of principles and values that ensure we never forget what we stand for.<br><br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['67px','114px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1)','700','none','normal'],
      id: 'Text7',
      text: 'We are a fiduciary to our clients.<br>We are passionate about performance.<br>We are one Blackrock.<br>We are innovators.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['43px','114px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1)','700','none','normal'],
      id: 'Text8',
      text: '1.<br>2.<br>3.<br>4.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['187px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1)','700','none','italic'],
      id: 'Text5',
      text: 'Mission',
      align: 'left',
      type: 'text'
   },
   {
      type: 'image',
      id: 'back_button',
      rect: ['0px','232px','95px','41px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/back_button.png','0px','0px']
   },
   {
      type: 'image',
      id: 'more_button',
      rect: ['320px','233px','92px','38px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/more_button.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'mission_popup',
      rect: ['27','55','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      rect: ['43px','119px','287px','12px','auto','auto'],
      id: 'Rectangle3',
      stroke: [3,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(255,252,252,0.00)']
   },
   {
      type: 'rect',
      rect: ['43px','145px','322px','12px','auto','auto'],
      id: 'Rectangle3Copy',
      stroke: [3,'rgb(0, 0, 0)','none'],
      cursor: ['pointer'],
      fill: ['rgba(255,252,252,0.00)']
   }],
   symbolInstances: [
   {
      id: 'mission_popup',
      symbolName: 'mission_popup'
   }   ]
   },
   states: {
      "Base State": {
         "${_back_button}": [
            ["style", "top", '232px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text7}": [
            ["style", "top", '114px'],
            ["style", "font-weight", '700'],
            ["style", "left", '67px'],
            ["style", "line-height", '24px']
         ],
         "${_mission_popup}": [
            ["style", "display", 'none']
         ],
         "${_more_button}": [
            ["style", "top", '233px'],
            ["style", "left", '320px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text5}": [
            ["style", "top", '0px'],
            ["style", "font-weight", '700'],
            ["style", "left", '187px'],
            ["style", "font-style", 'italic']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,252,252,0.00)'],
            ["style", "border-style", 'none'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '273px'],
            ["style", "width", '412px']
         ],
         "${_Rectangle3Copy}": [
            ["style", "top", '145px'],
            ["color", "background-color", 'rgba(255,252,252,0.00)'],
            ["style", "border-style", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '322px']
         ],
         "${_Text2}": [
            ["style", "top", '24px'],
            ["style", "font-size", '16px'],
            ["style", "text-align", 'left'],
            ["style", "font-style", 'normal'],
            ["style", "height", '78px'],
            ["style", "font-weight", '500'],
            ["style", "left", '43px'],
            ["style", "width", '358px']
         ],
         "${_Text8}": [
            ["style", "line-height", '24px'],
            ["style", "font-weight", '700'],
            ["style", "left", '43px'],
            ["style", "top", '114px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid906", tween: [ "style", "${_mission_popup}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid907", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_mission_popup}', [] ], ""], position: 0 }         ]
      }
   }
},
"video": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1)','bold','none','italic'],
      type: 'text',
      id: 'Text9',
      text: 'Mission',
      align: 'left',
      rect: ['187px','0px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1)','500','none','normal'],
      type: 'text',
      id: 'Text10',
      text: 'Larry Fink, Rob Kapito, and other senior leaders talk about BlackRock’s role in the world of investing.',
      align: 'left',
      rect: ['44px','167px','368px','46px','auto','auto']
   },
   {
      rect: ['131px','25px','174px','129px','auto','auto'],
      id: 'video',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/video.png','0px','0px']
   },
   {
      rect: ['0px','232px','95px','41px','auto','auto'],
      id: 'back_button2',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/back_button.png','0px','0px']
   },
   {
      rect: ['-6px','-3px','427px','226px','auto','auto'],
      type: 'rect',
      id: 'video_iframe',
      stroke: [0,'rgba(0,0,0,1)','none'],
      display: 'none',
      fill: ['rgba(192,192,192,1)']
   },
   {
      rect: ['-59px','-39px','135px','320px','auto','auto'],
      id: 'side2',
      type: 'image',
      clip: ['rect(32px 135px 268px 49px)'],
      fill: ['rgba(0,0,0,0)','images/side.png','0px','0px']
   },
   {
      rect: ['-58px','-40px','96px','76px','auto','auto'],
      id: 'blink1',
      type: 'image',
      clip: ['rect(31px 96px 76px 49px)'],
      fill: ['rgba(0,0,0,0)','images/blink1.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_side2}": [
            ["style", "top", '-39px'],
            ["style", "display", 'block'],
            ["style", "left", '-59px'],
            ["style", "clip", [32,135,268,50], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_blink1}": [
            ["style", "top", '-40px'],
            ["style", "display", 'block'],
            ["style", "clip", [31,96,76,49], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-58px']
         ],
         "${_Text10}": [
            ["style", "top", '167px'],
            ["style", "height", '46px'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '500'],
            ["style", "left", '44px'],
            ["style", "width", '368px']
         ],
         "${symbolSelector}": [
            ["style", "height", '273px'],
            ["style", "width", '412px']
         ],
         "${_video_iframe}": [
            ["style", "top", '-5px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "height", '230px'],
            ["style", "left", '-8px'],
            ["style", "width", '429px']
         ],
         "${_Text9}": [
            ["style", "left", '187px'],
            ["style", "top", '0px']
         ],
         "${_back_button2}": [
            ["style", "top", '232px'],
            ["style", "left", '0px'],
            ["style", "cursor", 'pointer']
         ],
         "${_video}": [
            ["style", "top", '25px'],
            ["style", "left", '131px'],
            ["style", "cursor", 'pointer']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid920", tween: [ "style", "${_blink1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid913", tween: [ "style", "${_side2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid914", tween: [ "style", "${_video_iframe}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid930", tween: [ "style", "${_side2}", "clip", [32,135,268,50], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [32,135,268,50]}], position: 0, duration: 0, easing: "easeInOutQuad" }         ]
      }
   }
},
"mission_popup": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['7px','-9px','357px','135px','auto','auto'],
      borderRadius: ['10px','10px','10px','10px'],
      id: 'RoundRect',
      stroke: [5,'rgb(0, 0, 0)','solid'],
      type: 'rect',
      fill: ['rgba(255,252,252,1.00)']
   },
   {
      rect: ['21px','15px','328px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(0,0,0,1.00)','400','none','normal'],
      id: 'Text',
      text: 'Their interests come first—always. We speak with the courage of our convictions. We say what we do and do what we say.We have a responsibility to be the voice of the investor, and we represent each client fairly and equally.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1)','400','none','normal'],
      display: 'none',
      id: 'TextCopy',
      text: 'We are passionate about our work and intensely focused on performing at the highest levels. Our success requires that we out-think and out-work our competitors. We prize strong subject matter expertise and an insatiable appetite to learn.',
      align: 'left',
      type: 'text'
   },
   {
      id: 'popup_close',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['348','-7','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'popup_close',
      symbolName: 'popup_close'
   }   ]
   },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,252,252,1.00)'],
            ["style", "border-style", 'solid'],
            ["style", "left", '7px'],
            ["style", "border-width", '5px']
         ],
         "${_Text}": [
            ["style", "top", '15px'],
            ["style", "display", 'block'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '21px'],
            ["style", "width", '328px']
         ],
         "${symbolSelector}": [
            ["style", "height", '126px'],
            ["style", "width", '385px']
         ],
         "${_popup_close}": [
            ["style", "cursor", 'pointer']
         ],
         "${_TextCopy}": [
            ["style", "top", '16px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "display", 'none'],
            ["style", "font-weight", '400'],
            ["style", "left", '21px'],
            ["style", "width", '338px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         labels: {
            "text1": 0,
            "text2": 500
         },
         timeline: [
            { id: "eid895", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid904", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid905", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"popup_close": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','17px','17px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      type: 'ellipse',
      id: 'Ellipse',
      stroke: [3,'rgb(0, 0, 0)','solid'],
      cursor: ['pointer'],
      fill: ['rgba(255,252,252,1)']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(0,0,0,1)','normal','none','normal'],
      type: 'text',
      id: 'Text9',
      text: 'X',
      align: 'left',
      rect: ['6px','3px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text9}": [
            ["style", "top", '3px'],
            ["style", "left", '6px']
         ],
         "${_Ellipse}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "border-width", '3px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-26718532");
