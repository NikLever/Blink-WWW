/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){ 
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4098, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();
         init(sym);
         startBlink(1);
      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
          console.log("Stage creationComplete");
          stage_sym = sym;
         // insert code to be run when the symbol is created here
         $.getJSON('blinks.json', function(data) {
			console.log("getJSON blinks returned");
			blinks = data;
			blinkID = 0;
            console.log("blink count is " + blinks.length);
		}); 
        $.getScript('edge_includes/jquery-ui-1.10.3.custom.min.js', function(){
            console.log('jquery-ui added');
        });
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'blink_anim'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 108, function(sym, e) {
         if (blink_snd!=null) blink_snd.play();

      });
      //Edge binding end

   })("blink_anim");
   //Edge symbol end:'blink_anim'

   //=========================================================
   
   //Edge symbol: 'intro'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_start2}", "click", function(sym, e) {
         var parent = sym.getParentSymbol();
         parent.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_learn_button}", "click", function(sym, e) {
         var parent = sym.getParentSymbol();
         parent.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_statement_button}", "click", function(sym, e) {
         showStatement1Screen();

      });
      //Edge binding end

   })("intro");
   //Edge symbol end:'intro'

   //=========================================================
   
   //Edge symbol: 'screen1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("screen1");
   //Edge symbol end:'screen1'

   //=========================================================
   
   //Edge symbol: 'self_reflection'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 681, function(sym, e) {
         if (blink_snd!=null) blink_snd.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         playTimer();

      });
      //Edge binding end

   })("self_reflection");
   //Edge symbol end:'self_reflection'

   //=========================================================
   
   //Edge symbol: 'paper'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("paper");
   //Edge symbol end:'paper'

   //=========================================================
   
   //Edge symbol: 'score'
   (function(symbolName) {   
   
   })("score");
   //Edge symbol end:'score'

   //=========================================================
   
   //Edge symbol: 'rewards'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 469, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 717, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 976, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1231, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1479, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1727, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("rewards");
   //Edge symbol end:'rewards'

   //=========================================================
   
   //Edge symbol: 'progress'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1125, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1518, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1923, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2766, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 470, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("progress");
   //Edge symbol end:'progress'

   //=========================================================
   
   //Edge symbol: 'fda_drag'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.stop();
         playTimer();

      });
      //Edge binding end

   })("fda_drag");
   //Edge symbol end:'fda_drag'

   //=========================================================
   
   //Edge symbol: 'messages'
   (function(symbolName) {   
   
   })("messages");
   //Edge symbol end:'messages'

   //=========================================================
   
   //Edge symbol: 'truthful'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("truthful");
   //Edge symbol end:'truthful'

   //=========================================================
   
   //Edge symbol: 'timer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 858, function(sym, e) {
         blinkTimeOut();

      });
      //Edge binding end

   })("timer");
   //Edge symbol end:'timer'

   //=========================================================
   
   //Edge symbol: 'fda_mission'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("fda_mission");
   //Edge symbol end:'fda_mission'

   //=========================================================
   
   //Edge symbol: 'statements_int'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1400, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("statements_int");
   //Edge symbol end:'statements_int'

   //=========================================================
   
   //Edge symbol: 'statement_txt'
   (function(symbolName) {   
   
   })("statement_txt");
   //Edge symbol end:'statement_txt'

   //=========================================================
   
   //Edge symbol: 'FeedbackPanel'
   (function(symbolName) {   
   
   })("FeedbackPanel");
   //Edge symbol end:'FeedbackPanel'

   //=========================================================
   
   //Edge symbol: 'TimeToTalk'
   (function(symbolName) {   
   
   })("TimeToTalk");
   //Edge symbol end:'TimeToTalk'

   //=========================================================
   
   //Edge symbol: 'TTTFeebback'
   (function(symbolName) {    
   
   })("TTTFeebback");
   //Edge symbol end:'TTTFeebback'

   //=========================================================
   
   //Edge symbol: 'assessment'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_back_button}", "click", function(sym, e) {
         // insert code for mouse click here
         playAgain();

      });
      //Edge binding end

   })("assessment");
   //Edge symbol end:'assessment'

   //=========================================================
   
   //Edge symbol: 'blink_anim_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop(0);

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 86, function(sym, e) {
         if (blink_snd!=null) blink_snd.play();

      });
      //Edge binding end

      })("blink_anim_1");
   //Edge symbol end:'blink_anim_1'

   //=========================================================
   
   //Edge symbol: 'rewards_statement'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_back_button}", "click", function(sym, e) {
         showStatement2Screen();

      });
      //Edge binding end

   })("rewards_statement");
   //Edge symbol end:'rewards_statement'

   //=========================================================
   
   //Edge symbol: 'scrolling_statement'
   (function(symbolName) {   
   
   })("scrolling_statement");
   //Edge symbol end:'scrolling_statement'

   //=========================================================
   
   //Edge symbol: 'statement_details'
   (function(symbolName) {   
   
      

   })("statement_details");
   //Edge symbol end:'statement_details'

   //=========================================================
   
   //Edge symbol: 'statement2_btn'
   (function(symbolName) {   
   
   })("statement2_btn");
   //Edge symbol end:'statement2_btn'

   //=========================================================
   
   //Edge symbol: 'rewards_statement_with_back'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_back_button}", "click", function(sym, e) {
         rewardsStatementBackPressed();

      });
      //Edge binding end

   })("rewards_statement_with_back");
   //Edge symbol end:'rewards_statement_with_back'

   //=========================================================
   
   //Edge symbol: 'rewards_statement_clipped'
   (function(symbolName) {   
   
   })("rewards_statement_clipped");
   //Edge symbol end:'rewards_statement_clipped'

   //=========================================================
   
   //Edge symbol: 'details_statement'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_back_button2}", "click", function(sym, e) {
         detailsStatementBackPressed();

      });
      //Edge binding end

   })("details_statement");
   //Edge symbol end:'details_statement'

   //=========================================================
   
   //Edge symbol: 'statement_details_clipped'
   (function(symbolName) {   
   
   })("statement_details_clipped");
   //Edge symbol end:'statement_details_clipped'

   //=========================================================
   
   //Edge symbol: 'Statement1Back'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_back_button}", "click", function(sym, e) {
         statement1BackPressed();

      });
      //Edge binding end

   })("Statement1Back");
   //Edge symbol end:'Statement1Back'

   //=========================================================
   
   //Edge symbol: 'Statement2Back'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_back_button2}", "click", function(sym, e) {
         statement2BackPressed();

      });
      //Edge binding end

   })("Statement2Back");
   //Edge symbol end:'Statement2Back'

   //=========================================================
   
   //Edge symbol: 'Statement1'
   (function(symbolName) {   
   
   })("Statement1");
   //Edge symbol end:'Statement1'

})(jQuery, AdobeEdge, "EDGE-26718532");