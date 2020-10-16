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
            id:'Statement2Back',
            display:'none',
            type:'rect',
            rect:['50px','38','auto','auto','auto','auto']
         },
         {
            id:'Statement1Back',
            display:'none',
            type:'rect',
            rect:['52px','38px','auto','auto','auto','auto'],
            transform:[]
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
            symbolName:'Statement1Back'
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
            symbolName:'Statement2Back'
         },
         {
            id:'rewards',
            symbolName:'rewards'
         },
         {
            id:'TimeToTalk',
            symbolName:'TimeToTalk'
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
            id:'intro',
            symbolName:'intro'
         }
         ]
      },
   states: {
      "Base State": {
         "${_fda_mission}": [
            ["style", "display", 'none']
         ],
         "${_assessment}": [
            ["style", "display", 'block']
         ],
         "${_Statement2Back}": [
            ["style", "display", 'none'],
            ["style", "left", '50px']
         ],
         "${_Text3}": [
            ["style", "top", '64px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '61px'],
            ["style", "font-size", '30px']
         ],
         "${_fda_drag}": [
            ["style", "display", 'none']
         ],
         "${_finished_btn}": [
            ["style", "top", '271px'],
            ["style", "left", '375px'],
            ["style", "display", 'none']
         ],
         "${_continue_btn}": [
            ["style", "top", '268px'],
            ["style", "left", '376px'],
            ["style", "display", 'none']
         ],
         "${_score}": [
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '480px'],
            ["style", "height", '320px'],
            ["style", "overflow", 'hidden']
         ],
         "${_start_btn}": [
            ["style", "top", '271px'],
            ["style", "height", '49px'],
            ["style", "display", 'none'],
            ["style", "left", '376px'],
            ["style", "width", '103px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(102,102,204,1.00)'],
            ["style", "opacity", '1']
         ],
         "${_truthful2}": [
            ["style", "display", 'none']
         ],
         "${_Text4}": [
            ["style", "top", '195px'],
            ["style", "opacity", '1'],
            ["style", "left", '190px']
         ],
         "${_timer}": [
            ["style", "display", 'none']
         ],
         "${_blink_anim}": [
            ["style", "top", '116px'],
            ["style", "opacity", '1'],
            ["style", "left", '192px']
         ],
         "${_self_reflection}": [
            ["style", "display", 'none']
         ],
         "${_blink_anim2}": [
            ["style", "top", '-70px']
         ],
         "${_rewards}": [
            ["style", "display", 'none']
         ],
         "${_TimeToTalk}": [
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
         "${_statements_int}": [
            ["style", "display", 'none'],
            ["style", "left", '108px'],
            ["style", "top", '45px']
         ],
         "${_progress}": [
            ["style", "display", 'none']
         ],
         "${_intro}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_statements}": [
            ["style", "display", 'none']
         ],
         "${_info_button}": [
            ["style", "top", '4px'],
            ["style", "height", '46px'],
            ["style", "display", 'none'],
            ["style", "left", '431px'],
            ["style", "width", '48px']
         ],
         "${_side}": [
            ["style", "left", '-133px'],
            ["style", "width", '135px']
         ],
         "${_Statement1Back}": [
            ["style", "top", '38px'],
            ["style", "display", 'none'],
            ["style", "left", '52px'],
            ["transform", "scaleY", '1']
         ],
         "${_bottom}": [
            ["style", "top", '315px']
         ],
         "${_top}": [
            ["style", "height", '42px'],
            ["style", "top", '-40px']
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
            { id: "eid137", tween: [ "style", "${_continue_btn}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid134", tween: [ "style", "${_info_button}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid143", tween: [ "style", "${_timer}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid121", tween: [ "style", "${_bottom}", "top", '255px', { fromValue: '315px'}], position: 3000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid138", tween: [ "style", "${_finished_btn}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid779", tween: [ "style", "${_self_reflection}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_self_reflection}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid775", tween: [ "style", "${_Statement1Back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid753", tween: [ "style", "${_Statement1Back}", "display", 'none', { fromValue: 'none'}], position: 4098, duration: 0 },
            { id: "eid845", tween: [ "style", "${_Statement1Back}", "display", 'none', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid133", tween: [ "style", "${_progress}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid776", tween: [ "style", "${_Statement2Back}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid752", tween: [ "style", "${_Statement2Back}", "display", 'none', { fromValue: 'none'}], position: 4098, duration: 0 },
            { id: "eid846", tween: [ "style", "${_Statement2Back}", "display", 'none', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid336", tween: [ "style", "${_statements_int}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid119", tween: [ "style", "${_top}", "top", '0px', { fromValue: '-40px'}], position: 3000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid128", tween: [ "style", "${_blink_anim2}", "top", '0px', { fromValue: '-70px'}], position: 3250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid139", tween: [ "style", "${_start_btn}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid365", tween: [ "style", "${_TimeToTalk}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid705", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 2500, duration: 196 },
            { id: "eid123", tween: [ "style", "${_side}", "left", '0px', { fromValue: '-133px'}], position: 3000, duration: 250, easing: "easeInOutQuad" },
            { id: "eid228", tween: [ "style", "${_intro}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid124", tween: [ "style", "${_intro}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
            { id: "eid238", tween: [ "style", "${_intro}", "display", 'none', { fromValue: 'block'}], position: 4226, duration: 0 },
            { id: "eid231", tween: [ "style", "${_intro}", "opacity", '0', { fromValue: '0'}], position: 3000, duration: 0 },
            { id: "eid233", tween: [ "style", "${_intro}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 112 },
            { id: "eid237", tween: [ "style", "${_intro}", "opacity", '0', { fromValue: '1'}], position: 4098, duration: 128 },
            { id: "eid225", tween: [ "style", "${_fda_mission}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid370", tween: [ "style", "${_fda_mission}", "display", 'none', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid129", tween: [ "style", "${_fda_drag}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid561", tween: [ "style", "${_fda_drag}", "display", 'none', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid714", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 2779, duration: 148 },
            { id: "eid135", tween: [ "style", "${_score}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid802", tween: [ "style", "${_truthful2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid130", tween: [ "style", "${_truthful2}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid711", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 2696, duration: 163 },
            { id: "eid132", tween: [ "style", "${_statements}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid136", tween: [ "style", "${_rewards}", "display", 'none', { fromValue: 'none'}], position: 3000, duration: 0 },
            { id: "eid708", tween: [ "style", "${_blink_anim}", "opacity", '0', { fromValue: '1'}], position: 2602, duration: 177 },
            { id: "eid807", tween: [ "style", "${_assessment}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid408", tween: [ "style", "${_assessment}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid573", tween: [ "style", "${_assessment}", "display", 'none', { fromValue: 'none'}], position: 4250, duration: 0 },
            { id: "eid717", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 2859, duration: 141 },
            { id: "eid116", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fda_drag}', [] ], ""], position: 0 },
            { id: "eid550", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_self_reflection}', [] ], ""], position: 0 },
            { id: "eid55", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_statements}', [] ], ""], position: 0 },
            { id: "eid330", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_timer}', [] ], ""], position: 0 },
            { id: "eid407", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_assessment}', [] ], ""], position: 0 },
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
      rect: ['0','0','96px','81px','auto','auto'],
      id: 'blink2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/blink2.png','0px','0px']
   },
   {
      rect: ['0','0','96px','78px','auto','auto'],
      id: 'blink3',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/blink3.png','0px','0px']
   },
   {
      rect: ['0','0','96px','82px','auto','auto'],
      id: 'blink4',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/blink4.png','0px','0px']
   },
   {
      rect: ['0','0','97px','80px','auto','auto'],
      id: 'blink5',
      type: 'image',
      display: 'none',
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
      type: 'text',
      rect: ['0px','123px','311px','65px','auto','auto'],
      id: 'Text4',
      text: 'Welcome back!<br>Use this app to learn about your rewards and to view your current rewards statement.',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',17,'rgba(255,255,255,1.00)','bold','none','italic']
   },
   {
      type: 'text',
      rect: ['0px','67px','311px','auto','auto','auto'],
      id: 'Text2',
      text: 'YOUR TOTAL REWARDS',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,153,51,1.00)','bold','none','italic']
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
         "${_learn_button}": [
            ["style", "top", '223px'],
            ["style", "left", '355px'],
            ["style", "cursor", 'pointer']
         ],
         "${_statement_button}": [
            ["style", "top", '221px'],
            ["style", "left", '354px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '188px'],
            ["style", "width", '311px']
         ],
         "${_start2}": [
            ["style", "top", '221px'],
            ["style", "left", '352px'],
            ["style", "cursor", 'pointer']
         ],
         "${_blink_anim}": [
            ["style", "top", '0px'],
            ["style", "height", '76px'],
            ["style", "left", '108px'],
            ["style", "width", '96px']
         ],
         "${_Text2}": [
            ["style", "top", '67px'],
            ["style", "font-size", '24px'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '311px']
         ],
         "${_Text4}": [
            ["style", "top", '102px'],
            ["style", "width", '311px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '65px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '17px']
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
            { id: "eid227", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0.000000'}], position: 171, duration: 79 },
            { id: "eid29", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 150 },
            { id: "eid668", tween: [ "style", "${_statement_button}", "left", '-66px', { fromValue: '354px'}], position: 304, duration: 196 },
            { id: "eid664", tween: [ "style", "${_learn_button}", "left", '254px', { fromValue: '355px'}], position: 400, duration: 100 },
            { id: "eid41", tween: [ "style", "${_start2}", "left", '252px', { fromValue: '352px'}], position: 400, duration: 100 },
            { id: "eid486", tween: [ "style", "${_Text4}", "top", '102px', { fromValue: '102px'}], position: 500, duration: 0 },
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
      rect: ['60px','240px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',15,'rgba(0,0,0,1)','700','none','italic'],
      id: 'Text2',
      text: 'Study the statements then touch CONTINUE.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['317px','226px','104px','52px','auto','auto'],
      id: 'continue',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/continue.png','0px','0px']
   },
   {
      rect: ['93px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','bold','none','italic'],
      id: 'Text5',
      text: 'The U.S. Retirement Program…',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['40px','39px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','bold','none','italic'],
      align: 'left',
      id: 'Text6',
      text: 'Is funded entirely by the Company.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['40px','77px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1)','bold','none','italic'],
      align: 'left',
      id: 'Text9',
      text: 'Requires no contribution from the employee.',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['40px','177px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1)','bold','none','italic'],
      align: 'left',
      id: 'Text11',
      text: 'Helps towards your financial security during retirement.',
      display: 'none',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text11}": [
            ["style", "top", '157px'],
            ["style", "display", 'none'],
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
         "${_Text6}": [
            ["style", "top", '59px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "display", 'none'],
            ["style", "left", '40px'],
            ["style", "font-size", '18px']
         ],
         "${_small_blink}": [
            ["style", "top", '230px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '278px'],
            ["style", "width", '424px']
         ],
         "${_Text9}": [
            ["style", "top", '109px'],
            ["style", "display", 'none'],
            ["style", "left", '38px'],
            ["style", "font-size", '18px']
         ],
         "${_Text2}": [
            ["style", "top", '235px'],
            ["style", "width", '261px'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '700'],
            ["style", "left", '60px'],
            ["style", "font-size", '15px']
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
            { id: "eid489", tween: [ "style", "${_Text2}", "width", '261px', { fromValue: '261px'}], position: 1250, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid729", tween: [ "style", "${_Text11}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid50", tween: [ "style", "${_Text11}", "display", 'block', { fromValue: 'none'}], position: 602, duration: 0 },
            { id: "eid727", tween: [ "style", "${_Text9}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid48", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 400, duration: 0 }         ]
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
      id: 'paper3',
      rect: ['28','28','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'paper2',
      rect: ['28','28','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'paper1',
      rect: ['28px','28px','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['91px','0px','auto','auto','auto','auto'],
      id: 'Text12',
      text: 'The base salary program reflects the partnership between you and the Company.',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','bold','none','italic']
   },
   {
      type: 'text',
      rect: ['53px','240px','auto','auto','auto','auto'],
      display: 'none',
      id: 'Text13',
      text: 'Drag the goal into the correct bin.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',15,'rgba(0,0,0,1.00)','bold','none','italic']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'FeedbackPanel',
      rect: ['98','61','auto','auto','auto','auto']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'blink_anim',
      rect: ['12','246','auto','auto','auto','auto']
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
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '53px'],
            ["style", "font-size", '14px']
         ],
         "${_paper1}": [
            ["transform", "scaleX", '0.82184'],
            ["style", "display", 'none'],
            ["style", "left", '-15px'],
            ["style", "top", '54px']
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
            ["style", "width", '385px'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '18px'],
            ["style", "font-size", '18px']
         ],
         "${_paper3}": [
            ["style", "top", '52px'],
            ["style", "left", '267px'],
            ["style", "display", 'none']
         ],
         "${_paper2}": [
            ["style", "top", '62px'],
            ["style", "left", '117px'],
            ["style", "display", 'none']
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
            { id: "eid645", tween: [ "style", "${_Text13}", "font-size", '14px', { fromValue: '14px'}], position: 2182, duration: 0, easing: "easeInOutQuad" },
            { id: "eid528", tween: [ "style", "${_blink_anim}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid529", tween: [ "style", "${_blink_anim}", "display", 'block', { fromValue: 'none'}], position: 576, duration: 0 },
            { id: "eid661", tween: [ "style", "${_Text12}", "width", '385px', { fromValue: '385px'}], position: 809, duration: 0 },
            { id: "eid670", tween: [ "style", "${_bins}", "top", '125px', { fromValue: '125px'}], position: 1250, duration: 0 },
            { id: "eid538", tween: [ "style", "${_Text13}", "top", '240px', { fromValue: '290px'}], position: 1061, duration: 439 },
            { id: "eid702", tween: [ "style", "${_Text12}", "left", '19px', { fromValue: '18px'}], position: 500, duration: 309 },
            { id: "eid58", tween: [ "style", "${_Text12}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 386 },
            { id: "eid60", tween: [ "style", "${_bins}", "left", '2px', { fromValue: '410px'}], position: 386, duration: 522 },
            { id: "eid360", tween: [ "style", "${_FeedbackPanel}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid534", tween: [ "style", "${_Text13}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid535", tween: [ "style", "${_Text13}", "display", 'block', { fromValue: 'none'}], position: 1061, duration: 0 },
            { id: "eid521", tween: [ "style", "${_paper1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid543", tween: [ "style", "${_paper1}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid662", tween: [ "style", "${_Text12}", "font-size", '18px', { fromValue: '18px'}], position: 809, duration: 0 },
            { id: "eid533", tween: [ "style", "${_blink_anim}", "opacity", '1', { fromValue: '0'}], position: 576, duration: 196 },
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
      type: 'image',
      display: 'none',
      rect: ['-10','-9','150px','75px','auto','auto'],
      id: 'paper0002',
      fill: ['rgba(0,0,0,0)','images/paper0002.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-10','-9','154px','81px','auto','auto'],
      id: 'paper0003',
      fill: ['rgba(0,0,0,0)','images/paper0003.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-10','-9','184px','73px','auto','auto'],
      id: 'paper0004',
      fill: ['rgba(0,0,0,0)','images/paper0004.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-10','-9','181px','98px','auto','auto'],
      id: 'paper0005',
      fill: ['rgba(0,0,0,0)','images/paper0005.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_paper0001}": [
            ["style", "top", '0px'],
            ["style", "height", '71px'],
            ["style", "display", 'block'],
            ["style", "left", '0px'],
            ["style", "width", '146px']
         ],
         "${_paper0002}": [
            ["style", "display", 'none'],
            ["style", "height", '69px'],
            ["style", "width", '169px']
         ],
         "${symbolSelector}": [
            ["style", "height", '59px'],
            ["style", "width", '174px']
         ],
         "${_paper0005}": [
            ["style", "display", 'none']
         ],
         "${_paper0004}": [
            ["style", "display", 'none']
         ],
         "${_paper0003}": [
            ["style", "height", '93px'],
            ["style", "display", 'none'],
            ["style", "width", '164px']
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
      font: ['Arial, Helvetica, sans-serif',10,'rgba(255,255,255,1.00)','700','none','italic'],
      id: 'Text',
      text: 'SCORE',
      type: 'text',
      rect: ['0px','0px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',22,'rgba(255,255,255,1)','bold','none','italic'],
      type: 'text',
      id: 'score_txt',
      text: '3456',
      align: 'left',
      rect: ['0px','8px','58px','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '34px'],
            ["style", "width", '60px']
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px'],
            ["style", "font-size", '10px']
         ],
         "${_score_txt}": [
            ["style", "top", '8px'],
            ["style", "width", '58px'],
            ["style", "left", '0px'],
            ["style", "font-size", '22px']
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
      rect: ['-1px','40px','55px','48px','auto','auto'],
      id: 'reward_blank2',
      transform: [[0,0],[],[],['0.95','0.95']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/reward_blank.png','0px','0px']
   },
   {
      rect: ['-2px','77px','55px','48px','auto','auto'],
      id: 'reward_blank3',
      transform: [[0,0],[],[],['0.9','0.9']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/reward_blank.png','0px','0px']
   },
   {
      rect: ['-3px','111px','55px','48px','auto','auto'],
      id: 'reward_blank4',
      transform: [[0,0],[],[],['0.85','0.85']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/reward_blank.png','0px','0px']
   },
   {
      rect: ['-4px','144px','55px','48px','auto','auto'],
      id: 'reward_blank5',
      transform: [[0,0],[],[],['0.8','0.8']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/reward_blank.png','0px','0px']
   },
   {
      rect: ['-5px','174px','55px','48px','auto','auto'],
      id: 'reward_blank6',
      transform: [[0,0],[],[],['0.75','0.75']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/reward_blank.png','0px','0px']
   },
   {
      rect: ['0','0px','55px','52px','auto','auto'],
      id: 'reward_0001',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/reward_0001.png','0px','0px']
   },
   {
      rect: ['0','0px','57px','54px','auto','auto'],
      id: 'reward_0002',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/reward_0002.png','0px','0px']
   },
   {
      rect: ['0','0','57px','53px','auto','auto'],
      id: 'reward_0003',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/reward_0003.png','0px','0px']
   },
   {
      rect: ['0','0','56px','54px','auto','auto'],
      id: 'reward_0004',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/reward_0004.png','0px','0px']
   },
   {
      rect: ['0','1px','56px','51px','auto','auto'],
      id: 'reward_0005',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/reward_0005.png','0px','0px']
   },
   {
      rect: ['0','0','56px','52px','auto','auto'],
      id: 'reward_0006',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/reward_0006.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_reward_blank4}": [
            ["style", "top", '111px'],
            ["transform", "scaleX", '0.85'],
            ["style", "left", '-3px'],
            ["transform", "scaleY", '0.85']
         ],
         "${_reward_blank}": [
            ["style", "top", '4px'],
            ["style", "left", '0px']
         ],
         "${_reward_blank3}": [
            ["style", "top", '77px'],
            ["transform", "scaleX", '0.9'],
            ["style", "left", '-2px'],
            ["transform", "scaleY", '0.9']
         ],
         "${_reward_0001}": [
            ["style", "top", '170px'],
            ["transform", "scaleY", '1.48'],
            ["transform", "scaleX", '1.48'],
            ["style", "opacity", '0'],
            ["style", "left", '-5px'],
            ["style", "display", 'none']
         ],
         "${_reward_0005}": [
            ["style", "top", '39px'],
            ["transform", "scaleY", '1.74'],
            ["transform", "scaleX", '1.74'],
            ["style", "opacity", '0'],
            ["style", "left", '-2px'],
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
         "${_reward_0002}": [
            ["style", "top", '140px'],
            ["transform", "scaleY", '1.52'],
            ["transform", "scaleX", '1.52'],
            ["style", "opacity", '0'],
            ["style", "left", '-5px'],
            ["style", "display", 'none']
         ],
         "${_reward_blank6}": [
            ["style", "top", '174px'],
            ["transform", "scaleX", '0.75'],
            ["style", "left", '-5px'],
            ["transform", "scaleY", '0.75']
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
         "${_reward_blank5}": [
            ["style", "top", '144px'],
            ["transform", "scaleX", '0.8'],
            ["style", "left", '-4px'],
            ["transform", "scaleY", '0.8']
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
            ["transform", "scaleX", '0.95'],
            ["style", "left", '-1px'],
            ["transform", "scaleY", '0.95']
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
            { id: "eid454", tween: [ "style", "${_reward_0002}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 217, easing: "easeInOutQuad" },
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
            { id: "eid459", tween: [ "transform", "${_reward_0003}", "scaleX", '0.85', { fromValue: '1.6'}], position: 750, duration: 201, easing: "easeInOutQuad" },
            { id: "eid467", tween: [ "transform", "${_reward_0004}", "scaleX", '0.9', { fromValue: '1.66'}], position: 1000, duration: 210, easing: "easeInOutQuad" },
            { id: "eid480", tween: [ "style", "${_reward_0006}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 206, easing: "easeInOutQuad" },
            { id: "eid449", tween: [ "transform", "${_reward_0001}", "scaleY", '0.75', { fromValue: '1.48'}], position: 250, duration: 219, easing: "easeInOutQuad" },
            { id: "eid447", tween: [ "style", "${_reward_0001}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 219, easing: "easeInOutQuad" },
            { id: "eid477", tween: [ "transform", "${_reward_0005}", "scaleX", '0.95', { fromValue: '1.74'}], position: 1250, duration: 206, easing: "easeInOutQuad" },
            { id: "eid483", tween: [ "transform", "${_reward_0006}", "scaleX", '1', { fromValue: '1.84'}], position: 1500, duration: 206, easing: "easeInOutQuad" },
            { id: "eid80", tween: [ "style", "${_reward_0002}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid460", tween: [ "transform", "${_reward_0003}", "scaleY", '0.85', { fromValue: '1.6'}], position: 750, duration: 201, easing: "easeInOutQuad" },
            { id: "eid474", tween: [ "style", "${_reward_0005}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 206, easing: "easeInOutQuad" },
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
      type: 'image',
      id: 'progress_bar',
      rect: ['-1px','0px','317px','38px','auto','auto'],
      clip: ['rect(0px 317pxpx 38pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/progress_bar.png','0px','0px']
   },
   {
      type: 'rect',
      rect: ['-1px','8px','19px','18px','auto','auto'],
      opacity: 0,
      id: 'blink1',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['77px','8px','19px','18px','auto','auto'],
      id: 'blink2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['158px','10px','19px','18px','auto','auto'],
      id: 'blink3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['219px','10px','19px','18px','auto','auto'],
      id: 'blink4',
      stroke: [0,'rgba(0,0,0,1)','none'],
      cursor: ['pointer'],
      fill: ['rgba(192,192,192,1)']
   },
   {
      type: 'rect',
      rect: ['292px','10px','19px','18px','auto','auto'],
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
         "${_progress_bg}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${_blink1}": [
            ["style", "top", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '317px']
         ],
         "${_blink2}": [
            ["style", "top", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '77px'],
            ["style", "cursor", 'pointer']
         ],
         "${_progress_bar}": [
            ["style", "top", '0px'],
            ["style", "left", '-1px'],
            ["style", "clip", [0,4,38,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_blink3}": [
            ["style", "top", '10px'],
            ["style", "opacity", '0'],
            ["style", "left", '158px'],
            ["style", "cursor", 'pointer']
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
      type: 'text',
      rect: ['0px','0px','auto','auto','auto','auto'],
      id: 'Text15',
      text: 'The FDA requires all promotional <br>material and messages to be:',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','bold','none','italic']
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
      type: 'text',
      rect: ['-5px','241px','auto','auto','auto','auto'],
      id: 'Text23',
      text: 'Drag all that apply to the container.',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(0,0,0,1.00)','bold','none','italic']
   },
   {
      id: 'blink_anim_1',
      type: 'rect',
      rect: ['-42','252','auto','auto','auto','auto']
   },
   {
      type: 'image',
      id: 'continue2',
      rect: ['250px','226px','104px','52px','auto','auto'],
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
            { id: "eid564", tween: [ "style", "${_Text23}", "top", '241px', { fromValue: '281px'}], position: 1681, duration: 569 },
            { id: "eid115", tween: [ "style", "${_drag1}", "opacity", '1', { fromValue: '0'}], position: 2774, duration: 431 },
            { id: "eid373", tween: [ "style", "${_drag3}", "opacity", '1', { fromValue: '0'}], position: 3298, duration: 433 },
            { id: "eid571", tween: [ "style", "${_blink_anim_1}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 385 },
            { id: "eid100", tween: [ "style", "${_Text23}", "opacity", '1', { fromValue: '0'}], position: 1682, duration: 568 },
            { id: "eid657", tween: [ "style", "${_Text23}", "opacity", '0', { fromValue: '1'}], position: 4500, duration: 250 },
            { id: "eid93", tween: [ "style", "${_pill_bottle}", "opacity", '1', { fromValue: '0'}], position: 624, duration: 568 },
            { id: "eid375", tween: [ "style", "${_drag5}", "opacity", '1', { fromValue: '0'}], position: 3731, duration: 494 },
            { id: "eid372", tween: [ "style", "${_drag2}", "opacity", '1', { fromValue: '0'}], position: 3013, duration: 445 },
            { id: "eid102", tween: [ "style", "${_continue2}", "left", '250px', { fromValue: '360px'}], position: 4500, duration: 250 },
            { id: "eid376", tween: [ "style", "${_drag6}", "opacity", '1', { fromValue: '0'}], position: 3964, duration: 495 },
            { id: "eid95", tween: [ "style", "${_Text15}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 624 },
            { id: "eid374", tween: [ "style", "${_drag4}", "opacity", '1', { fromValue: '0'}], position: 3500, duration: 464 },
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
      type: 'text',
      rect: ['12px','0px','auto','auto','auto','auto'],
      id: 'text',
      text: 'In 14-point type',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1.00)','bold','none','italic']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "top", '0px'],
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
      type: 'text',
      rect: ['56px','282px','auto','auto','auto','auto'],
      display: 'none',
      id: 'Text27',
      text: 'As text appears, touch the appropriate button.',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',15,'rgba(0,0,0,1.00)','bold','none','italic']
   },
   {
      id: 'question_mark',
      type: 'image',
      rect: ['89px','0px','234px','282px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/question_mark.png','0px','0px']
   },
   {
      type: 'image',
      id: 'truthful',
      rect: ['38px','203px','158px','49px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/truthful.png','0px','0px']
   },
   {
      type: 'image',
      id: 'misleading',
      rect: ['240px','203px','159px','49px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/misleading.png','0px','0px']
   },
   {
      type: 'image',
      id: 'continue',
      rect: ['303px','333px','104px','52px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/continue.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['209px','217px','auto','auto','auto','auto'],
      id: 'Text24',
      text: 'or',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1)','bold','none','italic']
   },
   {
      type: 'text',
      rect: ['52px','43px','328px','auto','auto','auto'],
      id: 'Text2',
      text: 'Your total rewards package…',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1)','bold','none','italic']
   },
   {
      type: 'text',
      rect: ['39px','87px','344px','auto','auto','auto'],
      id: 'statement_txt',
      text: 'Five statements, some truthful, some misleading, will appear here. <br>Touch the appropriate button as they appear.',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1)','bold','none','italic']
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
            ["style", "left", '240px'],
            ["style", "cursor", 'pointer'],
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
            ["style", "font-size", '19px'],
            ["style", "opacity", '0'],
            ["style", "left", '52px'],
            ["style", "width", '328px']
         ],
         "${_statement_txt}": [
            ["style", "top", '87px'],
            ["style", "font-size", '19px'],
            ["style", "left", '39px'],
            ["style", "width", '344px']
         ],
         "${symbolSelector}": [
            ["style", "height", '320px'],
            ["style", "width", '399px']
         ],
         "${_truthful}": [
            ["style", "top", '333px'],
            ["style", "height", '39px'],
            ["style", "left", '38px'],
            ["style", "cursor", 'pointer'],
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
            { id: "eid392", tween: [ "style", "${_truthful}", "top", '203px', { fromValue: '333px'}], position: 500, duration: 500 },
            { id: "eid394", tween: [ "style", "${_continue}", "left", '313px', { fromValue: '423px'}], position: 0, duration: 500 },
            { id: "eid391", tween: [ "style", "${_misleading}", "top", '203px', { fromValue: '333px'}], position: 500, duration: 500 },
            { id: "eid390", tween: [ "style", "${_Text24}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid400", tween: [ "style", "${_Text27}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid646", tween: [ "style", "${_Text27}", "font-size", '14px', { fromValue: '14px'}], position: 1114, duration: 0, easing: "easeInOutQuad" },
            { id: "eid694", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 859, duration: 141 },
            { id: "eid402", tween: [ "style", "${_Text27}", "opacity", '1', { fromValue: '0'}], position: 787, duration: 213 },
            { id: "eid398", tween: [ "style", "${_continue}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 270 },
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
      rect: ['0px','5px','329px','27px','auto','auto'],
      id: 'timer_black2',
      type: 'image',
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
            ["style", "left", '0px'],
            ["style", "clip", [0,0,32,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
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
      rect: ['95px','0px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'THE FDA Regulations',
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','700','none','italic'],
      type: 'text'
   },
   {
      rect: ['0px','24px','362px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','bold','none','italic'],
      id: 'message',
      text: 'The FDA regulates how pharmaceutical products are marketed and sold.  The agency requires that all promotional materials be: <br><br><br> On label <br> Truthful <br> Not misleading<br> Balanced in terms of benefits and risks<br> Inclusive of full prescribing information<br>',
      align: 'left',
      type: 'text'
   },
   {
      type: 'image',
      id: 'continue2',
      rect: ['268px','226px','104px','52px','auto','auto'],
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
            ["style", "font-size", '16px'],
            ["style", "left", '0px'],
            ["style", "width", '362px']
         ],
         "${symbolSelector}": [
            ["style", "height", '278px'],
            ["style", "width", '372px']
         ],
         "${_Text}": [
            ["style", "top", '0px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '95px'],
            ["style", "font-size", '19px']
         ],
         "${_continue2}": [
            ["style", "top", '226px'],
            ["style", "left", '374px'],
            ["style", "cursor", 'pointer']
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
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','700','none','italic'],
      type: 'text',
      id: 'title',
      text: 'The U.S. Retirement Program…',
      align: 'center',
      rect: ['1px','-1px','360px','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',19,'rgba(0,0,0,1.00)','400','none',''],
      type: 'text',
      align: 'left',
      id: 'instructions',
      text: 'Touch words to form those statements.',
      display: 'none',
      rect: ['17px','228px','254px','auto','auto','auto']
   },
   {
      rect: ['273px','221px','104px','52px','auto','auto'],
      type: 'image',
      id: 'continue',
      display: 'none',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/continue.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['-27','239','auto','auto','auto','auto'],
      id: 'blink_anim'
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
         "${_instructions}": [
            ["style", "top", '278px'],
            ["style", "font-size", '14px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '400'],
            ["style", "left", '8px'],
            ["style", "width", '293px']
         ],
         "${_title}": [
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '1px'],
            ["style", "font-size", '19px'],
            ["style", "top", '-1px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["style", "display", 'block'],
            ["style", "width", '360px']
         ],
         "${_continue}": [
            ["style", "top", '221px'],
            ["style", "left", '273px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'none']
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
            { id: "eid510", tween: [ "style", "${_title}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 295 },
            { id: "eid506", tween: [ "style", "${_blink_anim}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 361 },
            { id: "eid501", tween: [ "style", "${_blink_anim}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid503", tween: [ "style", "${_blink_anim}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid502", tween: [ "style", "${_continue}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
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
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none',''],
      id: 'text1',
      text: 'Going beyond',
      type: 'text',
      rect: ['0px','0px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_text_bg}": [
            ["style", "height", '100%'],
            ["style", "top", '0px'],
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
      rect: ['16px','17px','185px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',21,'rgba(0,0,0,1)','normal','none',''],
      id: 'Text',
      text: 'Keep up the<br>good work!',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['16px','17px','185px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',21,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      id: 'TextCopy',
      text: 'Work on it',
      display: 'none',
      type: 'text'
   },
   {
      rect: ['16px','17px','185px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',21,'rgba(0,0,0,1)','normal','none',''],
      align: 'center',
      id: 'TextCopy2',
      text: 'Needs improvement!',
      display: 'none',
      type: 'text'
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
            ["style", "font-size", '21px'],
            ["style", "left", '114px'],
            ["style", "width", '185px']
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
            ["style", "width", '185px'],
            ["style", "left", '16px'],
            ["style", "font-size", '21px']
         ],
         "${_TextCopy2}": [
            ["style", "top", '17px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-size", '21px'],
            ["style", "left", '-85px'],
            ["style", "width", '185px']
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
            { id: "eid354", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid356", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid357", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid358", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid359", tween: [ "style", "${_TextCopy}", "top", '30px', { fromValue: '30px'}], position: 500, duration: 0 },
            { id: "eid558", tween: [ "style", "${_Text}", "left", '114px', { fromValue: '114px'}], position: 0, duration: 0 },
            { id: "eid355", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
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
      rect: ['-100px','0px','374px','22px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','700','none','italic'],
      id: 'title',
      text: 'TIME TO TALK',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['182px','231px','103px','49px','auto','auto'],
      type: 'image',
      id: 'start',
      display: 'none',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/start.png','0px','0px']
   },
   {
      rect: ['180px','231px','105px','49px','auto','auto'],
      type: 'image',
      id: 'finished',
      display: 'none',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/finished.png','0px','0px']
   },
   {
      rect: ['-135px','243px','315px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(0,0,0,1.00)','400','none','normal'],
      id: 'instructions',
      text: 'When ready, touch START then read text aloud.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['-100px','27px','374px','177px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',20,'rgba(255,255,255,1.00)','normal','none','normal'],
      id: 'txt',
      text: 'Lorem etc',
      align: 'center',
      type: 'text'
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['-78','42','auto','auto','auto','auto'],
      id: 'feedback'
   },
   {
      rect: ['182px','228px','104px','52px','auto','auto'],
      id: 'continue',
      type: 'image',
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
            ["style", "font-size", '20px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "text-decoration", 'none'],
            ["style", "left", '-100px'],
            ["style", "width", '374px']
         ],
         "${_start}": [
            ["style", "display", 'none'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '182px'],
            ["style", "top", '231px']
         ],
         "${_feedback}": [
            ["style", "display", 'none']
         ],
         "${_finished}": [
            ["style", "top", '231px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '180px'],
            ["style", "display", 'none']
         ],
         "${_continue}": [
            ["style", "top", '228px'],
            ["style", "left", '182px'],
            ["style", "cursor", 'pointer'],
            ["style", "display", 'block']
         ],
         "${symbolSelector}": [
            ["style", "height", '22px'],
            ["style", "width", '135px']
         ],
         "${_title}": [
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '-100px'],
            ["style", "font-size", '19px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'italic'],
            ["style", "height", '22px'],
            ["style", "width", '374px']
         ],
         "${_instructions}": [
            ["style", "top", '243px'],
            ["style", "font-size", '14px'],
            ["style", "text-decoration", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '400'],
            ["style", "left", '-135px'],
            ["style", "width", '315px']
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
            { id: "eid367", tween: [ "style", "${_feedback}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid364", tween: [ "style", "${_feedback}", "display", 'none', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid361", tween: [ "style", "${_finished}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
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
      rect: ['22px','0px','292px','130px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',18,'rgba(0,0,0,1.00)','normal','none','normal'],
      id: 'feedback_txt',
      text: 'Feedback',
      align: 'justify',
      type: 'text'
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
            ["style", "width", '292px'],
            ["style", "height", '130px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '22px'],
            ["style", "font-size", '18px']
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
      type: 'image',
      rect: ['0px','0px','104px','52px','auto','auto'],
      display: 'none',
      id: 'playAgain_btn',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/play_again.png','0px','0px']
   },
   {
      type: 'image',
      id: 'back_button',
      rect: ['109px','7px','95px','41px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/back_button.png','0px','0px']
   },
   {
      type: 'text',
      id: 'text',
      text: 'Your Total Rewards Demonstration  <br>12/20/13<br>20<br>5. Avg co-worker has mastered 4.<br>Master at least 2 more Blinks this week.<br><br><br>',
      rect: ['-261','-143','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none','']
   },
   {
      type: 'text',
      rect: ['-261','-143','auto','auto','auto','auto'],
      id: 'textCopy',
      text: 'Course:<br>Must be completed by:<br>Blinks in Course:<br>Blinks Mastered:<br>Guidance:<br>',
      align: 'right',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none','italic']
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
      type: 'rect',
      borderRadius: ['10px','10px','10px','10px'],
      rect: ['-294px','-65px','384px','53px','auto','auto'],
      id: 'RoundRectCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      display: 'none',
      fill: ['rgba(248,153,49,1.00)']
   },
   {
      type: 'text',
      rect: ['-207px','-120px','auto','auto','auto','auto'],
      display: 'none',
      id: 'Text',
      text: 'This session:<br>This Course:<br>Lifetime:<br>',
      align: 'right',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(133,153,249,1.00)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['-118px','-104px','222px','35px','auto','auto'],
      display: 'none',
      id: 'TextCopy',
      text: '5,325 (Avg co-worker: 6,434)<br>52,683 (Avg co-worker: 42,325)<br>',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(252,252,252,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['-207px','-61px','auto','auto','auto','auto'],
      display: 'none',
      id: 'TextCopy4',
      text: 'Level:<br>To Level Up:<br>',
      align: 'right',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(81,81,81,1.00)','normal','none','italic']
   },
   {
      type: 'text',
      rect: ['-118px','-46px','222px','35px','auto','auto'],
      display: 'none',
      id: 'TextCopy3',
      text: '- Earn 150 more points<br>- Master 4 more Blinks<br><br>',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(252,252,252,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['-118px','-62px','222px','35px','auto','auto'],
      display: 'none',
      id: 'level_txt',
      text: 'Beginner',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(252,252,252,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['-118px','-120px','222px','35px','auto','auto'],
      display: 'none',
      id: 'score_txt',
      text: 'XXXX<br>',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',14,'rgba(252,252,252,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: ['-289px','-111px','auto','auto','auto','auto'],
      display: 'none',
      id: 'Text2',
      text: 'POINTS',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',18,'rgba(252,252,252,1)','800','none','italic']
   },
   {
      type: 'text',
      rect: ['-289px','-54px','auto','auto','auto','auto'],
      display: 'none',
      id: 'Text2Copy',
      text: 'LEVELS',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',18,'rgba(0,0,0,1.00)','800','none','italic']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_TextCopy4}": [
            ["style", "top", '-61px'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(81,81,81,1.00)'],
            ["style", "left", '-207px'],
            ["style", "display", 'none']
         ],
         "${_TextCopy3}": [
            ["style", "top", '-46px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(252,252,252,1)'],
            ["style", "height", '35px'],
            ["style", "left", '-118px'],
            ["style", "width", '222px']
         ],
         "${_Text2Copy}": [
            ["style", "top", '-54px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "display", 'none'],
            ["style", "font-weight", '800'],
            ["style", "left", '-289px'],
            ["style", "font-size", '18px']
         ],
         "${_score_txt}": [
            ["style", "top", '-120px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(252,252,252,1.00)'],
            ["style", "height", '35px'],
            ["style", "left", '-118px'],
            ["style", "width", '222px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(30,35,86,1.00)'],
            ["style", "display", 'block'],
            ["style", "opacity", '1'],
            ["style", "left", '116px'],
            ["style", "top", '-122px']
         ],
         "${_Text2}": [
            ["style", "top", '-111px'],
            ["style", "display", 'none'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '800'],
            ["style", "left", '-289px'],
            ["style", "font-size", '18px']
         ],
         "${_playAgain_btn}": [
            ["style", "top", '6px'],
            ["style", "display", 'none'],
            ["style", "height", '43px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '110px'],
            ["style", "width", '151px']
         ],
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(248,153,49,1.00)'],
            ["style", "display", 'none'],
            ["style", "top", '-65px'],
            ["style", "left", '116px'],
            ["style", "height", '53px']
         ],
         "${_back_button}": [
            ["style", "top", '7px'],
            ["style", "left", '113px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '-120px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(133,153,249,1.00)'],
            ["style", "font-style", 'italic'],
            ["style", "left", '-207px'],
            ["style", "font-size", '14px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '104px']
         ],
         "${_textCopy}": [
            ["style", "top", '-228px'],
            ["style", "width", '166px'],
            ["style", "text-align", 'right'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(244,162,42,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '-291px'],
            ["style", "font-size", '12px']
         ],
         "${_text}": [
            ["style", "top", '-228px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '-118px'],
            ["style", "font-size", '12px']
         ],
         "${_TextCopy}": [
            ["style", "top", '-104px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(252,252,252,1.00)'],
            ["style", "height", '35px'],
            ["style", "left", '-118px'],
            ["style", "width", '222px']
         ],
         "${_level_txt}": [
            ["style", "top", '-62px'],
            ["style", "text-align", 'left'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(252,252,252,1)'],
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
            { id: "eid610", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid615", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid636", tween: [ "style", "${_RoundRectCopy}", "left", '-294px', { fromValue: '116px'}], position: 2000, duration: 750 },
            { id: "eid632", tween: [ "style", "${_RoundRectCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid633", tween: [ "style", "${_RoundRectCopy}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid616", tween: [ "style", "${_RoundRect}", "left", '-294px', { fromValue: '116px'}], position: 500, duration: 912 },
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
      rect: ['0','0','96px','81px','auto','auto'],
      id: 'blink2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/blink2.png','0px','0px']
   },
   {
      rect: ['0','0','96px','78px','auto','auto'],
      id: 'blink3',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/blink3.png','0px','0px']
   },
   {
      rect: ['0','0','96px','82px','auto','auto'],
      id: 'blink4',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/blink4.png','0px','0px']
   },
   {
      rect: ['0','0','97px','80px','auto','auto'],
      id: 'blink5',
      type: 'image',
      display: 'none',
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
      rect: ['0px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,153,51,1.00)','700','none','italic'],
      id: 'Text2',
      text: 'MY TOTAL REWARDS STATEMENT',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0','41','352px','103px','auto','auto'],
      transform: [],
      id: 'back_button',
      type: 'image',
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
            ["style", "width", '365px'],
            ["style", "overflow", 'visible']
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
      rect: ['0px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      id: 'Text7',
      text: 'My Annual Compensation ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['299px','0px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      id: 'Text8',
      text: '$379,274 ',
      align: 'left',
      type: 'text'
   },
   {
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1.00)','500','none','normal'],
      transform: [],
      align: 'left',
      id: 'Text',
      text: 'Base Salary \t\t                        <br>Annual Incentives paid 2012 for 2011                 <br>Other Cash incentives paid in 2012                             <br>Value of Restricted Share/Units granted 2012     <br>Value of Restricted Cash granted 2012                 <br>Company\'s Cost for Benefits paid 2012                 <br>',
      type: 'text',
      rect: ['12px','22px','321px','auto','auto','auto']
   },
   {
      rect: ['299px','22px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','700','none','normal'],
      id: 'Text10',
      text: ' $195,000<br> $115,000<br> $232<br>$15,203<br> $15,334<br>$38,505',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['0px','128px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','700','none','normal'],
      id: 'Text9',
      text: 'My 2012 Equity Grants (shares)\t                         ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['297px','128px','55px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      id: 'Text12',
      text: '632',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['0px','152px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      id: 'Text11',
      text: 'My 2012 Value from Equity-Base/Cash Awards     ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['298px','152px','54px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      id: 'Text14',
      text: ' $21,832',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['0','175px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      id: 'Text13',
      text: 'My Accumulated Wealth \t              <br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['299px','175px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      id: 'Text15',
      text: '$186,050',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['12px','199px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','500','none','normal'],
      id: 'Text16',
      text: 'My 401K \t\t                          <br>My Restricted Shares/Units<br>Dividends and Dividend Equivalents<br>My Restricted Cash                                                       ',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['299px','199px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','700','none','normal'],
      id: 'Text17',
      text: '$141,532<br>$25,432<br>$9,543<br>$9,543',
      align: 'right',
      type: 'text'
   },
   {
      rect: ['0','271px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','700','none','normal'],
      id: 'Text18',
      text: 'My Estimated Annual Retirement Benefit                 <br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0','293px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      id: 'Text20',
      text: 'My Health and Welfare Benefits',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['306px','271px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(255,255,255,1)','bold','none','normal'],
      id: 'Text19',
      text: '$12,345',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text16}": [
            ["style", "top", '199px'],
            ["style", "font-weight", '500'],
            ["style", "left", '12px']
         ],
         "${_Text14}": [
            ["style", "top", '152px'],
            ["style", "left", '298px'],
            ["style", "text-align", 'right'],
            ["style", "width", '54px']
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
         "${_Text10}": [
            ["style", "top", '22px'],
            ["style", "font-weight", '700'],
            ["style", "left", '299px'],
            ["style", "text-align", 'right']
         ],
         "${_Text17}": [
            ["style", "top", '199px'],
            ["style", "font-weight", '700'],
            ["style", "text-align", 'right'],
            ["style", "left", '299px']
         ],
         "${_Text8}": [
            ["style", "top", '0px'],
            ["style", "left", '299px']
         ],
         "${_Text13}": [
            ["style", "top", '175px']
         ],
         "${_Text7}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
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
            ["transform", "scaleY", '1'],
            ["style", "font-size", '13px']
         ],
         "${_Text12}": [
            ["style", "top", '128px'],
            ["style", "text-align", 'right'],
            ["style", "left", '297px'],
            ["style", "width", '55px']
         ],
         "${symbolSelector}": [
            ["style", "height", '256px'],
            ["style", "width", '370px']
         ],
         "${_Text9}": [
            ["style", "top", '128px'],
            ["style", "font-weight", '700'],
            ["style", "left", '0px']
         ],
         "${_Text18}": [
            ["style", "top", '271px'],
            ["style", "font-weight", '700'],
            ["style", "text-align", 'left']
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
         "${_Rectangle2}": [
            ["style", "top", '422px'],
            ["style", "height", '55px'],
            ["color", "background-color", 'rgba(255,222,189,1.00)']
         ],
         "${_Text41}": [
            ["style", "top", '344px'],
            ["style", "font-weight", '700'],
            ["style", "left", '285px'],
            ["style", "font-size", '10px']
         ],
         "${_Text28}": [
            ["style", "left", '274px']
         ],
         "${_Text23}": [
            ["style", "left", '280px'],
            ["style", "top", '24px']
         ],
         "${_Text30}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-weight", '500'],
            ["style", "top", '234px'],
            ["style", "width", '341px']
         ],
         "${_Text29}": [
            ["style", "top", '209px'],
            ["style", "left", '-1px'],
            ["color", "color", 'rgba(255,153,51,1.00)']
         ],
         "${_statement2_btn}": [
            ["style", "cursor", 'auto']
         ],
         "${_Text2}": [
            ["color", "color", 'rgba(0,0,0,1.00)']
         ],
         "${_Rectangle4}": [
            ["style", "height", '88px']
         ],
         "${_Text32}": [
            ["style", "left", '274px'],
            ["style", "top", '323px']
         ],
         "${_Text21}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Text5}": [
            ["style", "top", '484px'],
            ["style", "text-align", 'right'],
            ["style", "left", '280px']
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
         "${_Text38}": [
            ["style", "top", '344px'],
            ["style", "font-weight", '700'],
            ["style", "left", '105px'],
            ["style", "font-size", '10px']
         ],
         "${_Rectangle5}": [
            ["color", "background-color", 'rgba(255,153,51,1.00)']
         ],
         "${_Text39}": [
            ["style", "top", '344px'],
            ["style", "font-weight", '700'],
            ["style", "left", '166px'],
            ["style", "font-size", '10px']
         ],
         "${_Text22}": [
            ["style", "top", '24px'],
            ["style", "font-style", 'normal'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "font-size", '13px']
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
         "${_Text27}": [
            ["style", "top", '323px'],
            ["style", "height", '19px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '3px'],
            ["style", "width", '341px']
         ],
         "${_Text34}": [
            ["style", "top", '368px'],
            ["style", "left", '4px'],
            ["style", "font-size", '10px']
         ],
         "${_Text37}": [
            ["style", "top", '344px'],
            ["style", "text-align", 'center'],
            ["style", "width", '65px'],
            ["style", "font-weight", '700'],
            ["style", "left", '39px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '520px'],
            ["style", "width", '364px'],
            ["style", "overflow", 'visible']
         ],
         "${_Text40}": [
            ["style", "top", '344px'],
            ["style", "font-weight", '700'],
            ["style", "left", '213px'],
            ["style", "font-size", '10px']
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
            ["style", "width", '370px'],
            ["style", "overflow", 'hidden']
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
            ["style", "width", '365px'],
            ["style", "overflow", 'hidden']
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
      rect: ['0px','0px','351px','106px','auto','auto'],
      id: 'Rectangle2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,222,189,1.00)']
   },
   {
      type: 'text',
      rect: ['5px','4px','341px','102px','auto','auto'],
      id: 'Text25',
      text: 'The Company’s base salary program reflects the partnership between you and the Company and compensation for your skills, effort and commitment to the Company. You are responsible for performing your job to the best of your ability. In return, the Company is responsible for providing a sound, competitive pay program.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1.00)','500','none','normal']
   },
   {
      rect: ['0px','106px','351px','28px','auto','auto'],
      id: 'Rectangle3',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,153,51,1.00)']
   },
   {
      type: 'text',
      rect: ['5px','112px','auto','auto','auto','auto'],
      id: 'Text26',
      text: 'My Base Salary (as of 10/31/13)',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1.00)','700','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(255,222,189,1.00)'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "height", '106px']
         ],
         "${symbolSelector}": [
            ["style", "height", '134px'],
            ["style", "width", '351px']
         ],
         "${_Rectangle3}": [
            ["color", "background-color", 'rgba(255,153,51,1.00)'],
            ["style", "height", '28px'],
            ["style", "left", '0px'],
            ["style", "top", '106px']
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
      rect: ['60px','245px','243px','19px','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',13,'rgba(0,0,0,1)','bold','none','normal'],
      id: 'Text7',
      text: 'Scroll for more information.<br>',
      align: 'left',
      type: 'text'
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
            ["style", "top", '245px'],
            ["style", "height", '19px'],
            ["style", "left", '60px'],
            ["style", "width", '243px']
         ],
         "${symbolSelector}": [
            ["style", "height", '334px'],
            ["style", "width", '430px'],
            ["style", "overflow", 'hidden']
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
      type: 'image',
      id: 'back_button2',
      rect: ['265px','233px','95px','41px','auto','auto'],
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
            ["style", "width", '430px'],
            ["style", "overflow", 'hidden']
         ],
         "${_back_button2}": [
            ["style", "top", '233px'],
            ["style", "left", '324px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text9}": [
            ["style", "left", '70px'],
            ["style", "top", '246px']
         ],
         "${_scroller}": [
            ["style", "clip", [0,370,221,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '59px']
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
