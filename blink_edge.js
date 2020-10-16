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
            display:'none',
            type:'rect',
            rect:['376','268','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'fda_mission',
            symbolName:'fda_mission'
         },
         {
            id:'statements',
            symbolName:'screen1'
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
            id:'rewards',
            symbolName:'rewards'
         },
         {
            id:'statements_int',
            symbolName:'statements_int'
         },
         {
            id:'TimeToTalk',
            symbolName:'TimeToTalk'
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
            id:'timer',
            symbolName:'timer'
         },
         {
            id:'intro',
            symbolName:'intro'
         },
         {
            id:'self_reflection',
            symbolName:'self_reflection'
         },
         {
            id:'truthful2',
            symbolName:'truthful'
         }
         ]
      },
   states: {
      "Base State": {
         "${_bottom}": [
            ["style", "top", '315px']
         ],
         "${_assessment}": [
            ["style", "display", 'none']
         ],
         "${_truthful2}": [
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
         "${_score}": [
            ["style", "display", 'none']
         ],
         "${_self_reflection}": [
            ["style", "display", 'none']
         ],
         "${_timer}": [
            ["style", "display", 'none']
         ],
         "${_intro}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0']
         ],
         "${_TimeToTalk}": [
            ["style", "display", 'none']
         ],
         "${_statements}": [
            ["style", "display", 'none']
         ],
         "${_fda_mission}": [
            ["style", "display", 'none']
         ],
         "${_progress}": [
            ["style", "display", 'none']
         ],
         "${_rewards}": [
            ["style", "display", 'none']
         ],
         "${_side}": [
            ["style", "left", '-133px'],
            ["style", "width", '135px']
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
         "${_top}": [
            ["style", "height", '42px'],
            ["style", "top", '-40px']
         ],
         "${_statements_int}": [
            ["style", "display", 'none'],
            ["style", "left", '108px'],
            ["style", "top", '45px']
         ],
         "${_blink_anim2}": [
            ["style", "top", '-70px']
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
            { id: "eid143", tween: [ "style", "${_timer}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid138", tween: [ "style", "${_finished_btn}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid131", tween: [ "style", "${_self_reflection}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid119", tween: [ "style", "${_top}", "top", '0px', { fromValue: '-40px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid121", tween: [ "style", "${_bottom}", "top", '255px', { fromValue: '315px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid139", tween: [ "style", "${_start_btn}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid365", tween: [ "style", "${_TimeToTalk}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid128", tween: [ "style", "${_blink_anim2}", "top", '0px', { fromValue: '-70px'}], position: 250, duration: 250, easing: "easeInOutQuad" },
            { id: "eid123", tween: [ "style", "${_side}", "left", '0px', { fromValue: '-133px'}], position: 0, duration: 250, easing: "easeInOutQuad" },
            { id: "eid408", tween: [ "style", "${_assessment}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid231", tween: [ "style", "${_intro}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid233", tween: [ "style", "${_intro}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 112 },
            { id: "eid237", tween: [ "style", "${_intro}", "opacity", '0', { fromValue: '1'}], position: 1098, duration: 128 },
            { id: "eid225", tween: [ "style", "${_fda_mission}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInOutQuad" },
            { id: "eid370", tween: [ "style", "${_fda_mission}", "display", 'none', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid336", tween: [ "style", "${_statements_int}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid129", tween: [ "style", "${_fda_drag}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid371", tween: [ "style", "${_fda_drag}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid137", tween: [ "style", "${_continue_btn}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid130", tween: [ "style", "${_truthful2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid133", tween: [ "style", "${_progress}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid132", tween: [ "style", "${_statements}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid136", tween: [ "style", "${_rewards}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid135", tween: [ "style", "${_score}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid134", tween: [ "style", "${_info_button}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid228", tween: [ "style", "${_intro}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid124", tween: [ "style", "${_intro}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid238", tween: [ "style", "${_intro}", "display", 'none', { fromValue: 'block'}], position: 1226, duration: 0 },
            { id: "eid116", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_fda_drag}', [] ], ""], position: 0 },
            { id: "eid407", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_assessment}', [] ], ""], position: 0 },
            { id: "eid330", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_timer}', [] ], ""], position: 0 },
            { id: "eid77", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_self_reflection}', [] ], ""], position: 0 },
            { id: "eid55", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_statements}', [] ], ""], position: 0 },
            { id: "eid43", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_intro}', [0] ], ""], position: 500 }         ]
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
         duration: 145,
         autoPlay: false,
         timeline: [
            { id: "eid3", tween: [ "style", "${_blink3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_blink3}", "display", 'block', { fromValue: 'none'}], position: 22, duration: 0 },
            { id: "eid13", tween: [ "style", "${_blink3}", "display", 'none', { fromValue: 'block'}], position: 34, duration: 0 },
            { id: "eid18", tween: [ "style", "${_blink3}", "display", 'block', { fromValue: 'none'}], position: 94, duration: 0 },
            { id: "eid19", tween: [ "style", "${_blink3}", "display", 'none', { fromValue: 'block'}], position: 104, duration: 0 },
            { id: "eid6", tween: [ "style", "${_blink4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_blink4}", "display", 'block', { fromValue: 'none'}], position: 34, duration: 0 },
            { id: "eid14", tween: [ "style", "${_blink4}", "display", 'none', { fromValue: 'block'}], position: 46, duration: 0 },
            { id: "eid16", tween: [ "style", "${_blink4}", "display", 'block', { fromValue: 'none'}], position: 82, duration: 0 },
            { id: "eid17", tween: [ "style", "${_blink4}", "display", 'none', { fromValue: 'block'}], position: 94, duration: 0 },
            { id: "eid2", tween: [ "style", "${_blink2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid1", tween: [ "style", "${_blink2}", "display", 'block', { fromValue: 'none'}], position: 11, duration: 0 },
            { id: "eid12", tween: [ "style", "${_blink2}", "display", 'none', { fromValue: 'block'}], position: 22, duration: 0 },
            { id: "eid20", tween: [ "style", "${_blink2}", "display", 'block', { fromValue: 'none'}], position: 104, duration: 0 },
            { id: "eid21", tween: [ "style", "${_blink2}", "display", 'none', { fromValue: 'block'}], position: 116, duration: 0 },
            { id: "eid7", tween: [ "style", "${_blink5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_blink5}", "display", 'block', { fromValue: 'none'}], position: 46, duration: 0 },
            { id: "eid15", tween: [ "style", "${_blink5}", "display", 'none', { fromValue: 'block'}], position: 82, duration: 0 },
            { id: "eid10", tween: [ "style", "${_blink12}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid11", tween: [ "style", "${_blink12}", "display", 'none', { fromValue: 'block'}], position: 11, duration: 0 },
            { id: "eid22", tween: [ "style", "${_blink12}", "display", 'block', { fromValue: 'none'}], position: 116, duration: 0 }         ]
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
      text: 'Transform employee training from a time-consuming chore into a fast-paced experience of triumph.',
      align: 'center',
      type: 'text'
   },
   {
      rect: ['0px','67px','311px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,153,51,1.00)','bold','none','italic'],
      id: 'Text2',
      text: 'BLINK TRAINING SYSTEM',
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
   }],
   symbolInstances: [
   {
      id: 'blink_anim',
      symbolName: 'blink_anim'
   }   ]
   },
   states: {
      "Base State": {
         "${_blink_anim}": [
            ["style", "height", '76px'],
            ["style", "top", '0px'],
            ["style", "left", '108px'],
            ["style", "width", '96px']
         ],
         "${symbolSelector}": [
            ["style", "height", '188px'],
            ["style", "width", '311px']
         ],
         "${_Text4}": [
            ["style", "top", '123px'],
            ["style", "font-size", '17px'],
            ["style", "text-align", 'center'],
            ["style", "height", '65px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '311px']
         ],
         "${_Text2}": [
            ["style", "top", '67px'],
            ["style", "width", '311px'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "font-size", '24px']
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
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid227", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0.000000'}], position: 171, duration: 79 },
            { id: "eid29", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 150 },
            { id: "eid41", tween: [ "style", "${_start2}", "left", '252px', { fromValue: '352px'}], position: 400, duration: 100 },
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
      text: 'Study these statements for 15 seconds.',
      align: 'left',
      rect: ['60px','240px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','bold','none','italic'],
      type: 'text',
      id: 'Text5',
      text: 'CUSTOMER SERVICE MEANS',
      align: 'left',
      rect: ['93px','0px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1.00)','bold','none','italic'],
      type: 'text',
      align: 'left',
      id: 'Text6',
      text: 'Going beyond what’s expected.',
      display: 'none',
      rect: ['40px','39px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1)','bold','none','italic'],
      type: 'text',
      align: 'left',
      id: 'Text9',
      text: 'Doing ordinary things extraordinarily well.',
      display: 'none',
      rect: ['40px','77px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',18,'rgba(255,255,255,1)','bold','none','italic'],
      type: 'text',
      align: 'left',
      id: 'Text11',
      text: 'Being at your best with every customer.',
      display: 'none',
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
         "${_small_blink}": [
            ["style", "top", '230px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Text11}": [
            ["style", "display", 'none'],
            ["style", "top", '177px'],
            ["style", "left", '40px'],
            ["style", "font-size", '18px']
         ],
         "${symbolSelector}": [
            ["style", "height", '278px'],
            ["style", "width", '424px']
         ],
         "${_Text9}": [
            ["style", "display", 'none'],
            ["style", "top", '116px'],
            ["style", "left", '40px'],
            ["style", "font-size", '18px']
         ],
         "${_Text5}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '93px'],
            ["style", "font-size", '19px']
         ],
         "${_Text2}": [
            ["style", "top", '240px'],
            ["style", "opacity", '0'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '700'],
            ["style", "left", '60px'],
            ["style", "font-size", '15px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 900,
         autoPlay: false,
         timeline: [
            { id: "eid54", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 150 },
            { id: "eid47", tween: [ "style", "${_Text6}", "display", 'block', { fromValue: 'none'}], position: 301, duration: 0 },
            { id: "eid52", tween: [ "style", "${_small_blink}", "opacity", '1', { fromValue: '0'}], position: 602, duration: 148 },
            { id: "eid48", tween: [ "style", "${_Text9}", "display", 'block', { fromValue: 'none'}], position: 400, duration: 0 },
            { id: "eid46", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
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
      id: 'paper1',
      type: 'rect',
      rect: ['28','28','auto','auto','auto','auto']
   },
   {
      id: 'paper4',
      type: 'rect',
      rect: ['28','28','auto','auto','auto','auto']
   },
   {
      id: 'paper3',
      type: 'rect',
      rect: ['28','28','auto','auto','auto','auto']
   },
   {
      id: 'paper2',
      type: 'rect',
      rect: ['28','28','auto','auto','auto','auto']
   },
   {
      id: 'paper5',
      type: 'rect',
      rect: ['28','28','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['91px','0px','auto','auto','auto','auto'],
      id: 'Text12',
      text: 'HONEST SELF REFLECTION',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','bold','none','italic']
   },
   {
      id: 'small_blink',
      type: 'image',
      rect: ['-10px','230px','54px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/small_blink.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['53px','240px','auto','auto','auto','auto'],
      id: 'Text13',
      text: 'Drag the statements to today’s appropriate bins.',
      align: 'left',
      font: ['Arial, Helvetica, sans-serif',15,'rgba(0,0,0,1.00)','bold','none','italic']
   },
   {
      display: 'none',
      type: 'rect',
      rect: ['98','61','auto','auto','auto','auto'],
      id: 'FeedbackPanel'
   }],
   symbolInstances: [
   {
      id: 'paper2',
      symbolName: 'paper'
   },
   {
      id: 'paper4',
      symbolName: 'paper'
   },
   {
      id: 'FeedbackPanel',
      symbolName: 'FeedbackPanel'
   },
   {
      id: 'paper5',
      symbolName: 'paper'
   },
   {
      id: 'paper3',
      symbolName: 'paper'
   },
   {
      id: 'paper1',
      symbolName: 'paper'
   }   ]
   },
   states: {
      "Base State": {
         "${_FeedbackPanel}": [
            ["style", "display", 'none']
         ],
         "${_paper2}": [
            ["style", "left", '11px'],
            ["style", "top", '81px']
         ],
         "${_Text13}": [
            ["style", "top", '240px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '53px'],
            ["style", "font-size", '15px']
         ],
         "${_paper5}": [
            ["style", "left", '236px'],
            ["style", "top", '76px']
         ],
         "${_bins}": [
            ["style", "left", '410px'],
            ["style", "top", '128px']
         ],
         "${_small_blink}": [
            ["style", "top", '230px'],
            ["style", "left", '-10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '246px'],
            ["style", "width", '404px']
         ],
         "${_Text12}": [
            ["style", "top", '0px'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '91px'],
            ["style", "font-size", '19px']
         ],
         "${_paper4}": [
            ["style", "left", '230px'],
            ["style", "top", '22px']
         ],
         "${_paper3}": [
            ["style", "left", '135px'],
            ["style", "top", '52px']
         ],
         "${_paper1}": [
            ["style", "left", '0px'],
            ["style", "top", '22px']
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
            { id: "eid58", tween: [ "style", "${_Text12}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid60", tween: [ "style", "${_bins}", "left", '0px', { fromValue: '410px'}], position: 250, duration: 250 },
            { id: "eid360", tween: [ "style", "${_FeedbackPanel}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid325", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_paper1}', [] ], ""], position: 0 },
            { id: "eid326", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_paper4}', ['paper4'] ], ""], position: 0 },
            { id: "eid327", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_paper3}', ['paper3'] ], ""], position: 0 },
            { id: "eid328", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_paper2}', ['paper2'] ], ""], position: 0 },
            { id: "eid329", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_paper5}', ['paper5'] ], ""], position: 0 }         ]
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
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_paper0002}": [
            ["style", "display", 'none']
         ],
         "${symbolSelector}": [
            ["style", "height", '59px'],
            ["style", "width", '174px']
         ],
         "${_paper0005}": [
            ["style", "display", 'none']
         ],
         "${_paper0003}": [
            ["style", "display", 'none']
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
      rect: ['0px','0px','auto','auto','auto','auto'],
      id: 'Text',
      text: 'SCORE',
      font: ['Arial, Helvetica, sans-serif',10,'rgba(255,255,255,1.00)','700','none','italic'],
      type: 'text'
   },
   {
      rect: ['0px','8px','58px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',22,'rgba(255,255,255,1)','bold','none','italic'],
      id: 'score_txt',
      text: '3456',
      align: 'left',
      type: 'text'
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
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75'],
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
            ["transform", "scaleY", '0.95'],
            ["transform", "scaleX", '0.95'],
            ["style", "left", '-2px'],
            ["style", "display", 'none']
         ],
         "${_reward_0002}": [
            ["style", "top", '140px'],
            ["transform", "scaleY", '0.8'],
            ["transform", "scaleX", '0.8'],
            ["style", "left", '-5px'],
            ["style", "display", 'none']
         ],
         "${_reward_0004}": [
            ["style", "top", '74px'],
            ["transform", "scaleY", '0.9'],
            ["style", "display", 'none'],
            ["style", "left", '-3px'],
            ["transform", "scaleX", '0.9']
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
            ["transform", "scaleY", '0.85'],
            ["style", "display", 'none'],
            ["style", "left", '-4px'],
            ["transform", "scaleX", '0.85']
         ],
         "${_reward_blank6}": [
            ["style", "top", '174px'],
            ["style", "left", '-5px'],
            ["transform", "scaleY", '0.75'],
            ["transform", "scaleX", '0.75']
         ],
         "${_reward_0006}": [
            ["style", "display", 'none'],
            ["style", "left", '-1px'],
            ["style", "top", '1px']
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
         duration: 1500,
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
            { id: "eid214", tween: [ "transform", "${_reward_0005}", "scaleY", '0.95', { fromValue: '0.95'}], position: 1250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid211", tween: [ "style", "${_reward_0005}", "left", '-2px', { fromValue: '-2px'}], position: 1250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid84", tween: [ "style", "${_reward_0004}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid166", tween: [ "transform", "${_reward_0004}", "scaleY", '0.9', { fromValue: '0.9'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid191", tween: [ "transform", "${_reward_0002}", "scaleX", '0.8', { fromValue: '0.8'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid86", tween: [ "style", "${_reward_0005}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid187", tween: [ "transform", "${_reward_0001}", "scaleX", '0.75', { fromValue: '0.75'}], position: 250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid200", tween: [ "style", "${_reward_0003}", "top", '108px', { fromValue: '108px'}], position: 750, duration: 0, easing: "easeInOutQuad" },
            { id: "eid192", tween: [ "transform", "${_reward_0002}", "scaleY", '0.8', { fromValue: '0.8'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid82", tween: [ "style", "${_reward_0003}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid208", tween: [ "style", "${_reward_0004}", "left", '-3px', { fromValue: '-3px'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid217", tween: [ "style", "${_reward_0006}", "left", '-1px', { fromValue: '-1px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid88", tween: [ "style", "${_reward_0006}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid185", tween: [ "style", "${_reward_0001}", "top", '170px', { fromValue: '170px'}], position: 250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid216", tween: [ "style", "${_reward_0005}", "top", '39px', { fromValue: '39px'}], position: 1250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid190", tween: [ "style", "${_reward_0001}", "left", '-5px', { fromValue: '-5px'}], position: 250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid196", tween: [ "style", "${_reward_0002}", "left", '-5px', { fromValue: '-5px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid188", tween: [ "transform", "${_reward_0001}", "scaleY", '0.75', { fromValue: '0.75'}], position: 250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid165", tween: [ "transform", "${_reward_0004}", "scaleX", '0.9', { fromValue: '0.9'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid218", tween: [ "style", "${_reward_0006}", "top", '1px', { fromValue: '1px'}], position: 1500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid209", tween: [ "style", "${_reward_0004}", "top", '74px', { fromValue: '74px'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
            { id: "eid197", tween: [ "transform", "${_reward_0003}", "scaleX", '0.85', { fromValue: '0.85'}], position: 750, duration: 0, easing: "easeInOutQuad" },
            { id: "eid213", tween: [ "transform", "${_reward_0005}", "scaleX", '0.95', { fromValue: '0.95'}], position: 1250, duration: 0, easing: "easeInOutQuad" },
            { id: "eid194", tween: [ "style", "${_reward_0002}", "top", '140px', { fromValue: '140px'}], position: 500, duration: 0, easing: "easeInOutQuad" },
            { id: "eid80", tween: [ "style", "${_reward_0002}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid198", tween: [ "transform", "${_reward_0003}", "scaleY", '0.85', { fromValue: '0.85'}], position: 750, duration: 0, easing: "easeInOutQuad" },
            { id: "eid78", tween: [ "style", "${_reward_0001}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid206", tween: [ "style", "${_reward_0003}", "left", '-4px', { fromValue: '-4px'}], position: 750, duration: 0, easing: "easeInOutQuad" }         ]
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
         "${_blink2}": [
            ["style", "top", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '77px'],
            ["style", "cursor", 'pointer']
         ],
         "${_blink1}": [
            ["style", "top", '8px'],
            ["style", "opacity", '0'],
            ["style", "left", '-1px'],
            ["style", "cursor", 'pointer']
         ],
         "${_progress_bg}": [
            ["style", "top", '0px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '33px'],
            ["style", "width", '317px']
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
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','bold','none','italic'],
      type: 'text',
      id: 'Text15',
      text: 'The FDA requires all promotional <br>material and messages to be:',
      align: 'center',
      rect: ['0px','0px','auto','auto','auto','auto']
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
      font: ['Arial, Helvetica, sans-serif',14,'rgba(0,0,0,1.00)','bold','none','italic'],
      type: 'text',
      id: 'Text23',
      text: 'Drag all that apply to the container.',
      align: 'center',
      rect: ['-5px','241px','auto','auto','auto','auto']
   },
   {
      id: 'small_blink2',
      type: 'image',
      rect: ['-69px','230px','54px','48px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/small_blink.png','0px','0px']
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
         "${_drag5}": [
            ["style", "top", '126px'],
            ["style", "opacity", '0'],
            ["style", "left", '201px']
         ],
         "${_Text23}": [
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '-5px'],
            ["style", "top", '241px']
         ],
         "${_drag4}": [
            ["style", "top", '72px'],
            ["style", "opacity", '0'],
            ["style", "left", '201px']
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
         "${_small_blink2}": [
            ["style", "top", '230px'],
            ["style", "opacity", '0'],
            ["style", "left", '-69px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1750,
         autoPlay: false,
         timeline: [
            { id: "eid376", tween: [ "style", "${_drag6}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
            { id: "eid374", tween: [ "style", "${_drag4}", "opacity", '1', { fromValue: '0'}], position: 780, duration: 250 },
            { id: "eid97", tween: [ "style", "${_small_blink2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 250 },
            { id: "eid373", tween: [ "style", "${_drag3}", "opacity", '1', { fromValue: '0'}], position: 669, duration: 250 },
            { id: "eid115", tween: [ "style", "${_drag1}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 250 },
            { id: "eid95", tween: [ "style", "${_Text15}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 250 },
            { id: "eid100", tween: [ "style", "${_Text23}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 250 },
            { id: "eid372", tween: [ "style", "${_drag2}", "opacity", '1', { fromValue: '0'}], position: 576, duration: 250 },
            { id: "eid375", tween: [ "style", "${_drag5}", "opacity", '1', { fromValue: '0'}], position: 874, duration: 250 },
            { id: "eid93", tween: [ "style", "${_pill_bottle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
            { id: "eid102", tween: [ "style", "${_continue2}", "left", '250px', { fromValue: '360px'}], position: 1500, duration: 250 }         ]
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
      opacity: 0,
      align: 'center',
      text: 'As text appears click the appropriate button.',
      id: 'Text27',
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
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1)','bold','none','italic'],
      type: 'text',
      id: 'Text24',
      text: 'or',
      align: 'center',
      rect: ['209px','217px','auto','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,255,255,1)','bold','none','italic'],
      type: 'text',
      id: 'statement_txt',
      text: 'Five statements, some truthful, some misleading, will appear here. <br>Click on the appropriate button as they appear.',
      align: 'center',
      rect: ['39px','87px','344px','auto','auto','auto']
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
            ["style", "left", '240px'],
            ["style", "cursor", 'pointer']
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
         "${_Text27}": [
            ["style", "top", '282px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '56px'],
            ["style", "font-size", '15px']
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
            ["style", "left", '38px'],
            ["style", "cursor", 'pointer']
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
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid400", tween: [ "style", "${_Text27}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid394", tween: [ "style", "${_continue}", "left", '313px', { fromValue: '423px'}], position: 0, duration: 500 },
            { id: "eid390", tween: [ "style", "${_Text24}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500 },
            { id: "eid391", tween: [ "style", "${_misleading}", "top", '203px', { fromValue: '333px'}], position: 500, duration: 500 },
            { id: "eid398", tween: [ "style", "${_continue}", "opacity", '0', { fromValue: '1'}], position: 500, duration: 270 },
            { id: "eid392", tween: [ "style", "${_truthful}", "top", '203px', { fromValue: '333px'}], position: 500, duration: 500 },
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
      rect: ['0px','0px','329px','33px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/timer_grey.png','0px','0px']
   },
   {
      rect: ['0px','5px','329px','27px','auto','auto'],
      id: 'timer_black2',
      type: 'image',
      clip: ['rect(0px 329pxpx 27.082317073171pxpx 0px)'],
      fill: ['rgba(0,0,0,0)','images/timer_black.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_timer_grey}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_timer_black2}": [
            ["style", "top", '5px'],
            ["style", "clip", [0,0,27.082317352295,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
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
            { id: "eid150", tween: [ "style", "${_timer_black2}", "clip", [0,329,27.082317073171,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,27.082317352295,0]}], position: 0, duration: 1000, easing: "easeInOutQuad" }         ]
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
      text: 'THE FDA MISSION',
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','700','none','italic'],
      type: 'text'
   },
   {
      rect: ['0px','24px','362px','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1.00)','bold','none','italic'],
      id: 'Text2',
      text: 'The FDA is tasked with protecting the health and safety of the American people. This agency approves products and regulates how they are developed, manufactured, marketed, and sold.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['0px','93px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1)','bold','none','italic'],
      id: 'Text3',
      text: 'The FDA requires that all promotional materials and messages be:',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['27px','132px','auto','auto','auto','auto'],
      font: ['Arial, Helvetica, sans-serif',14,'rgba(255,255,255,1)','bold','none','italic'],
      id: 'Text4',
      text: 'Truthful<br> Not misleading<br> On label<br> Balanced in terms of benefits and risks<br> Inclusive of full prescribing information<br>',
      align: 'left',
      type: 'text'
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
         ],
         "${_Text3}": [
            ["style", "top", '93px'],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '278px'],
            ["style", "width", '372px']
         ],
         "${_Text2}": [
            ["style", "top", '24px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '362px'],
            ["style", "left", '0px'],
            ["style", "font-size", '14px']
         ],
         "${_Text4}": [
            ["style", "left", '27px'],
            ["style", "top", '132px']
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
      id: 'txt1',
      type: 'rect',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['1px','-1px','360px','auto','auto','auto'],
      id: 'title',
      text: 'CUSTOMER SERVICE MEANS',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',19,'rgba(255,153,51,1.00)','700','none','italic']
   },
   {
      type: 'text',
      rect: ['1px','196px','360px','auto','auto','auto'],
      id: 'instructions',
      text: 'Touch words to form those statements',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',19,'rgba(249,153,0,1.00)','700','none','']
   },
   {
      rect: ['273px','221px','104px','52px','auto','auto'],
      id: 'continue',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/continue.png','0px','0px']
   }],
   symbolInstances: [
   {
      id: 'txt1',
      symbolName: 'statement_txt'
   }   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '30px'],
            ["style", "width", '360px']
         ],
         "${_continue}": [
            ["style", "display", 'block'],
            ["style", "top", '221px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '273px']
         ],
         "${_instructions}": [
            ["style", "top", '196px'],
            ["style", "text-align", 'center'],
            ["style", "width", '360px'],
            ["color", "color", 'rgba(249,153,0,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '1px'],
            ["style", "font-size", '19px']
         ],
         "${_txt1}": [
            ["style", "top", '31px']
         ],
         "${_title}": [
            ["style", "top", '-1px'],
            ["style", "font-size", '19px'],
            ["style", "text-align", 'center'],
            ["style", "font-style", 'italic'],
            ["color", "color", 'rgba(255,153,51,1.00)'],
            ["style", "font-weight", '700'],
            ["style", "left", '1px'],
            ["style", "width", '360px']
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
            { id: "eid369", tween: [ "style", "${_continue}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 }         ]
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
      rect: ['0px','0px','auto','auto','auto','auto'],
      id: 'text1',
      text: 'Going beyond',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
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
      rect: ['0px','0px','219px','126px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/feedback_panel_small.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['16px','17px','185px','auto','auto','auto'],
      id: 'Text',
      text: 'Keep up the<br>good work!',
      align: 'center',
      font: ['Arial, Helvetica, sans-serif',21,'rgba(0,0,0,1)','normal','none','']
   },
   {
      type: 'text',
      rect: ['16px','17px','185px','auto','auto','auto'],
      align: 'center',
      id: 'TextCopy',
      text: 'Work on it',
      display: 'none',
      font: ['Arial, Helvetica, sans-serif',21,'rgba(0,0,0,1)','normal','none','']
   },
   {
      type: 'text',
      rect: ['16px','17px','185px','auto','auto','auto'],
      align: 'center',
      id: 'TextCopy2',
      text: 'Needs improvement!',
      display: 'none',
      font: ['Arial, Helvetica, sans-serif',21,'rgba(0,0,0,1)','normal','none','']
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
            ["style", "left", '16px'],
            ["style", "font-size", '21px']
         ],
         "${symbolSelector}": [
            ["style", "height", '126px'],
            ["style", "width", '219px']
         ],
         "${_feedback_panel_small}": [
            ["style", "left", '0px'],
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
            ["style", "left", '16px'],
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
            { id: "eid354", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid356", tween: [ "style", "${_TextCopy}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid357", tween: [ "style", "${_TextCopy}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
            { id: "eid355", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid358", tween: [ "style", "${_TextCopy2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid359", tween: [ "style", "${_TextCopy}", "top", '30px', { fromValue: '30px'}], position: 500, duration: 0 }         ]
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
      text: 'When ready, touch START, and read the text out loud. When you\'re done, touch FINISHED.',
      align: 'left',
      rect: ['-135px','237px','315px','auto','auto','auto']
   },
   {
      font: ['Arial, Helvetica, sans-serif',16,'rgba(255,255,255,1.00)','normal','none','normal'],
      type: 'text',
      id: 'txt',
      text: 'Lorem etc',
      align: 'justify',
      rect: ['-95px','27px','367px','177px','auto','auto']
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
            ["style", "text-align", 'justify'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "text-decoration", 'none'],
            ["style", "font-size", '16px']
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
            ["style", "top", '237px'],
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
      id: 'playAgain_btn',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/play_again.png','0px','0px']
   },
   {
      rect: ['-261','-143','auto','auto','auto','auto'],
      id: 'text',
      text: 'This will be the assessment text',
      font: ['Arial, Helvetica, sans-serif',24,'rgba(255,255,255,1.00)','normal','none',''],
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0']
         ],
         "${_playAgain_btn}": [
            ["style", "top", '6px'],
            ["style", "height", '43px'],
            ["style", "left", '110px'],
            ["style", "cursor", 'pointer'],
            ["style", "width", '151px']
         ],
         "${symbolSelector}": [
            ["style", "height", '52px'],
            ["style", "width", '104px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
            { id: "eid404", tween: [ "style", "${_playAgain_btn}", "left", '-54px', { fromValue: '110px'}], position: 0, duration: 500 },
            { id: "eid406", tween: [ "style", "${_text}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 }         ]
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
