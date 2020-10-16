var blinks;
var blinkID;
var rewards_sym;
var progress_sym;
var timer_sym;
var stage_sym;
var info_btn;
var start_btn;
var finished_btn;
var continue_btn;
var score_sym;
var blink_sym;
var blink;
var score = 0; 
var displayScore = 0;
var game;
var correct_snd;
var wrong_snd;
var click_snd;
var clapping_snd;
var gameover_snd;
var levelup_snd;
var timerstart_snd;
var timerend_snd;
var blink_snd;
var mute = false;
var scoreTimeout;
var statement1_sym;
var statement2_sym;
var scrollPanel1, scrollPanel2;
var level;

function init(sym){
    stage_sym = sym;
    rewards_sym = stage_sym.getSymbol("rewards");
    timer_sym = stage_sym.getSymbol("timer");
    progress_sym = stage_sym.getSymbol("progress");
    score_sym = stage_sym.getSymbol("score");
    statement1_sym = stage_sym.getSymbol("Statement1Back");
    statement2_sym = stage_sym.getSymbol("Statement2Back");
    info_btn = stage_sym.$("info_button");
    start_btn = stage_sym.$("start_btn");
    finished_btn = stage_sym.$("finished_btn");
    continue_btn = stage_sym.$("continue_btn");
    
    info_btn.click(infoPressed);
    start_btn.click(startPressed);
    finished_btn.click(finishedPressed);
    continue_btn.click(continuePressed);
    
    var btns = new Array(info_btn, start_btn, finished_btn, continue_btn);
    
    for(var i=0; i<btns.length; i++){
        btns[i].css('cursor', 'pointer');
    }
    
    var txt = score_sym.$("score_txt");
    txt.text("0000");
    
    var syms = new Array(rewards_sym, progress_sym, score_sym);
    
    for(i=0; i<syms.length; i++){
        var elm = syms[i].getSymbolElement();
        elm.css('display', 'block');
        elm.css('opacity', 0);
        elm.animate({'opacity':1}, 500); 
    }
    
    progress_sym.play(100);
    
    for(i=1; i<=5; i++){
        var elm = progress_sym.$('blink' + i);
        elm.click(function(){
            var elm = $(this);
            var ids = new Array(0,2,3,5,7);
            for(var i=1; i<=5; i++){
                var btn = progress_sym.$('blink' + i);
                if (btn[0]==elm[0]){
                    startBlink(ids[i-1]);
                }
            }
        });  
    }
    
    loadSounds();
    level = 0;
}

function playAgain(){
	window.location = 'index.html';
	/*progress_sym.stop(0);
	rewards_sym.stop(0);
	blinkID=1;
	setScoreDirect(0);
	var elm = stage_sym.$('assessment');
	elm.css('display', 'none');
	stage_sym.play(3500);*/
}

function setScoreDirect(s){
    score = s;
    if (score<0) score=0;
	displayScore = score;
    var txt = score_sym.$("score_txt"); 
    var str = score.toString();
    while(str.length<4) str = '0' + str;
    txt.text(str);
    var reward = Math.floor(score/250);
    if (reward==0){
        rewards_sym.stop(0);
    }else if (reward<=6){
        rewards_sym.stop('reward' + reward);
    }
    clearTimeout(scoreTimeout);
}

function setScore(s){
    score = s;
    if (score<0) score=0;
    if (score!=displayScore) scoreTimeout = setTimeout(updateScore, 50);
    var reward = Math.floor(score/250);
    if (reward==0){
        rewards_sym.stop(0);
    }else if (reward<=6 && reward>level){
        rewards_sym.play('reward' + reward);
        level = reward;
        if (levelup_snd!=null) levelup_snd.play();
    }
}

function updateScore(){
    if (score>displayScore){
        displayScore++;
    }else if (displayScore>score){
        displayScore--;
    }
    var txt = score_sym.$("score_txt"); 
    var str = displayScore.toString();
    while(str.length<4) str = '0' + str;
    txt.text(str);
    if (displayScore!=score) scoreTimeout = setTimeout(updateScore, 50);
}

function startBlink(id){
    console.log("startBlink " + id);
    blinkID = id;
    
    var elm = progress_sym.getSymbolElement();
    elm.stop(true);
    elm = timer_sym.$("timer_black2");
    elm.stop(true);
    elm.css('clip', 'rect(0px,5px,27px,0px)');
    
    if (blink_sym!=null){
        hideBlink(blink_sym);
        return;
    }
    
    blink = blinks[id-1];
    if (blink==null){
        blink_sym = stage_sym.getSymbol('assessment');
        initAssessment();
        //return;
    }else{
        blink_sym = stage_sym.getSymbol(blink.sym);
    }
    
    var elm = blink_sym.getSymbolElement();
    elm.css('display', 'block');
    elm.css('opacity', 0);
    elm.animate({'opacity':1}, 500);
    
    switch(blink.sym){
        case "statements":
            initStatements(blink);
            break;
        case "statements_int":
            initStatementsInteractive(blink);
            break;
        case "self_reflection":
            initDragInteractive(blink);
            break;
        case "TimeToTalk":
            initTimeToTalk(blink);
            break;
        case "fda_mission":
            initFDAMission(blink);
            break;
        case "fda_drag":
            initFDADrag(blink);
            break;
        case "truthful2":
            initTruthful(blink);
            break;
    }
    
    if (blink!=null && blink.time!=null && blink.show_progress==null){
        initTimer(blink.time);
    }else{
        showProgress();
    }
    
    var sym = stage_sym.getSymbol('blink_anim2');
    sym.play(10);
    
    if (blink!=null && blink.advance!=null){
        progress_sym.play();
    }
}

function hideBlink(sym){
    var elm = sym.getSymbolElement();
    elm.animate({'opacity':0}, 500, initBlink);
    //blink_sym = null;
}

function initBlink(){
    blink_sym.getSymbolElement().css('display', 'none');
    blink_sym = null;
    startBlink(blinkID);
}

function nextBlink(){
    blinkID++;
    startBlink(blinkID);
}

function initTimer(time){
    var elm = progress_sym.getSymbolElement();
    elm.css('display', 'block');
    elm.animate({'opacity':0}, 500, showTimer);
}

function showProgress(){
    var elm = timer_sym.getSymbolElement();
    elm.css('display', 'none');
    elm = progress_sym.getSymbolElement();
    elm.css('display', 'block');
    elm.css('opacity', 0);
    elm.animate({'opacity':1}, 500);
}

function showTimer(){
    var elm = progress_sym.getSymbolElement();
    elm.css('display', 'none');
    elm = timer_sym.getSymbolElement();
    elm.css('display', 'block');
    elm.css('opacity', 0);
    if (blink.timer_held != null){
        elm.animate({'opacity':1}, 500);
    }else{
        elm.animate({'opacity':1}, 500, playTimer);
    }
    timer_sym.stop(0);
}

function stopTimer(){
    var elm = timer_sym.$("timer_black2");
    elm.stop(true);
}

function clearTimer(){
    var elm = timer_sym.$("timer_black2");
    elm.stop(true);
    elm.animate({opacity:0}, 500, showProgress);
}

function playTimer(){
    var elm = timer_sym.$("timer_black2");
    elm.stop(true);
    elm.css('clip', 'rect(0px,5px,27px,0px)');
    elm.animate({'clip':'rect(0px,315px,27px,0px)'}, blink.time*1000, "linear", timerEnded);
    if (timerstart_snd!=null) timerstart_snd.play();
}

function timerEnded(){
    if (timerend_snd!=null) timerend_snd.play();
    if (game!=null){
        if (game.sym == "self_reflection"){
            var notDropped=0;
            for(var i=0; i<game.syms.length; i++){
                if (!game.syms[i].dropped) notDropped++;
            }
            setScore(score - 25 * notDropped);
        }
        if (game.sym == "fda_drag"){
            nextBlink();
            return;
        }
        if (game.timerEnded == "statements_end"){
            statementsTimerEnded();
            return;
        }

    }
    startBlink(blinkID+1);
}

function initAssessment(){
    var elm = blink_sym.$('score_txt');
    elm.css('text-align', 'left');
    elm.text(score);
    elm = blink_sym.$('level_txt');
    elm.css('text-align', 'left');
    if (level<1) level=1; 
    if (level>6) level=6;
    var levels = new Array("Beginner", "Novice", "Rookie", "Achiever", "Ace", "Master");
    elm.text(levels[level-1]);
    var textfields = new Array('text', 'TextCopy', 'TextCopy3');
    for(var i=0; i<textfields.length; i++){
        elm = blink_sym.$(textfields[i]);
        elm.css('text-align', 'left');
    }
    
    elm = stage_sym.$('timer');
    elm.animate({opacity:0}, 500); 
    elm = stage_sym.$('progress');
    elm.animate({opacity:0}, 500); 
    
    blink_sym.play(10);
}

function initStatements(blink){
    var continue_btn = blink_sym.$('continue');
    continue_btn.click(nextBlink);
    blink_sym.play(10);
}

function initStatementsInteractive(blink){
    var elm = blink_sym.$('instructions');
    elm.css('opacity', 1);
    
    var txt;
    var syms = new Array();
    var count = 0;
    var childSymbols = blink_sym.getChildSymbols(); 
    
    for(var i=0; i<childSymbols.length; i++){ 
        var sym = childSymbols[i];
        var type = sym.getSymbolTypeName();
        if (type=="statement_txt"){
            sym.deleteSymbol();
        }
    }

    for(var i=0; i<blink.options.length; i++){
        for(var j=0; j<blink.options[i].words.length; j++){
            txt = stage_sym.createChildSymbol("statement_txt", "statements_int");
            var elm = txt.$('text1');
            elm.text(blink.options[i].words[j]);
            elm.css({'width':'auto'});
            elm.click(statementClicked);
            elm.css('cursor', 'pointer');
            elm = txt.getSymbolElement();
            elm.css('cursor', 'arrow');
            //elm.css({'width':'auto'});
            elm.css('left', 480);
            syms.push(txt);
            count++;
        }
    }
    
    //Jumble words
    for(i=0; i<count; i++){
        var id = Math.floor(Math.random()*count);
        var sym = syms.splice(id, 1);
        syms.push(sym[0]);
    }

    var btn = blink_sym.$('continue');
    btn.css('display', 'none');
    
    setTimeout(statementLayout, 2000);
    blink_sym.play(0);

    game = { "sym":"statements_int", "words":syms, "timerEnded":"statements_end", "matched":0 };
}

function statementLayout(){
    var left = 0;
    var top = 31;
    var paddingW = 15;
    var paddingH = 10;
    var count = game.words.length;
    var lines = new Array();
    //Position them
    for(i=0; i<count; i++){
        var elm = game.words[i].$('text1');
        var w = elm.width();
        var h = elm.height();
        if ((left + w)>360){
            lines.push(left);
            if (lines.length==5){
                //We need to fit in to one of the existing lines
                for(j=0; j<lines.length; j++){
                    if ((lines[j]+w)<360){
                        left = lines[j];
                        top = 31 + j * (h+paddingH);
                        lines[j] += (w + paddingW);
                        break;
                    }
                }
            }else{
                left = 0;
                top += (h + paddingH);
            }
        }
        elm = game.words[i].$('text_bg');
        elm.css('width',(w+paddingW-5));
        elm = game.words[i].getSymbolElement();
        elm.css('zIndex', i+10);
        elm.css('position', 'absolute');
        elm.animate({'left':left}, 500);
        elm.css('top', top);     
        left += (w + paddingW);
    }
    
    setTimeout(playTimer, 1000);
}

function statementClicked(){
    var txt = this.innerText;
    var sym;
    if (click_snd != null && !mute) click_snd.play();
    //console.log("statementClicked " + txt);
    for(var i=0; i<blink.options.length; i++){
        for(var j=0; j<blink.options[i].words.length; j++){
            if (blink.options[i].words[j]==txt){
                //Found the one
                if (game.sentence == null){
                    if (j==0){
                        game.sentence = i;
                        game.word = 1;
                        sym = statementGetSymFromText(txt);
                        game.sentence_syms = new Array(sym);
                        statementSetWord(sym, blink.options[i].color);
                    }else{
                        if (wrong_snd != null && !mute) wrong_snd.play();
                        setScore(score-25);
                    }
                }else if (game.sentence != i || game.word != j){
                    //Wrong sentence
                    setScore(score-25);
                    if (wrong_snd != null && !mute) wrong_snd.play();
                    game.sentence = game.word = null;
                    statementClearSentence(game.sentence_syms);
                    game.sentence_syms = null;
                }else{
                    sym = statementGetSymFromText(txt);
                    statementSetWord(sym, blink.options[i].color);
                    game.sentence_syms.push(sym);
                    game.word++;
                    if (game.word == blink.options[game.sentence].words.length){
                        //Completed sentence
                        statementLockSentence(game.sentence_syms);
                        if (correct_snd != null && !mute) correct_snd.play();
                        setScore(score + 150);
                        game.matched++;
                        if (game.matched == blink.options.length){
                            //Completed all sentences
                            var btn = blink_sym.$('continue');
                            btn.unbind('click');
                            btn.click(function(){
                                for(var i=0; i<game.words.length; i++){
                                    var sym = game.words[i];
                                    sym.deleteSymbol();
                                }
                                nextBlink();
                            });
                            btn.css('left', 350);
                            btn.css('display', 'block');
                            btn.animate({'left':273}, 500); 
                            stopTimer();
                            var elm = blink_sym.$('instructions');
                            elm.animate({opacity:0}, 500);
                        }
                        game.sentence = game.word = game.sentence_syms = null;
                    }
                }
            }
        }
    }
}

function statementGetSymFromText(txt){
    for(var i=0; i<game.words.length; i++){
        var sym = game.words[i];
        var elm = sym.$('text1');
        var str = elm.text();
        if (str == txt) return sym;
    }
    
    return null;
}

function statementSetWord(sym, color){
    console.log("statementSetWord " + sym.$('text1').text() + " " + color);
    var elm = sym.$('text_bg');
    elm.css('background-color', color);
}

function statementClearSentence(syms){
    for(var i=0; i<syms.length; i++){
        statementSetWord(syms[i], '#C0C0C0');
    }
}

function statementLockSentence(syms){
    for(var i=0; i<syms.length; i++){
        var elm = syms[i].$('text1');
        elm.unbind('click');
        elm.css('cursor', 'default');
    }
}

function statementsTimerEnded(){
    for(var i=0; i<game.words.length; i++){
        var txt = game.words[i];
        var elm = txt.$('text1');
        elm.css('cursor', 'auto');
        elm.unbind('click');
    }
    
    var btn = blink_sym.$('continue');
    btn.unbind('click');
    btn.click(function(){
        for(var i=0; i<game.words.length; i++){
            var sym = game.words[i];
            sym.deleteSymbol();
        }
        nextBlink();
    });
    btn.css('left', 350);
    btn.css('display', 'block');
    btn.animate({'left':273}, 500); 
    
    var elm = blink_sym.$('instructions');
    elm.animate({opacity:0}, 500);
}

function initDragInteractive(blink){
    var syms = new Array();
    
    for(var i=1; i<=3; i++){
        var elm = blink_sym.$('paper' + i);
        elm.css('cursor', 'pointer');
        elm.css('display', 'block');
        elm.draggable({start: function(event, ui) { $(this).css("z-index", 100); },
                       stop: function( event, ui ) {
                           var elm = $(this);
                           var id = getDragID(elm);
                           if (id!=-1){
                            elm.css('left', game.syms[id].position.left);
                            elm.css('top', game.syms[id].position.top);
                            elm.css('z-index', game.syms[id].zIndex);
                           } } });
        syms.push({elm:elm, dropped:false, position:elm.position(), zIndex:elm.css('z-index')});
    }
                  
    var bins = blink_sym.$('bins');
    bins.droppable( {
      drop: function( event, ui ) {
          var elm = ui.draggable;
          var id = getDragID(elm);
          var pos = elm.position();
          var inBoxes = (pos.top>109 && pos.top<193);
          var boxID = 0;
          if (pos.left>-75 && pos.left<300){
              if (pos.left>183){
                  boxID=3;
              }else if(pos.left>49){
                  boxID=2;
              }else{
                  boxID=1;
              }
          }
          console.log("dropped " + id + " (" + pos.left + ',' + pos.top + ') inBoxes=' + inBoxes + " boxID=" + boxID);
          if (id!=-1){
              setScore(score + 150);
              //elm.css('left', game.syms[id].position.left);
              //elm.css('top', game.syms[id].position.top);
              //elm.css('z-index', game.syms[id].zIndex);
              if (inBoxes && boxID!=0){
                  elm.css('display', 'none');
                  game.syms[id].dropped = true;
                  var sym = blink_sym.getSymbol("FeedbackPanel");
                  if (sym!=undefined){
                      var elm = sym.getSymbolElement();
                      elm.stop(true);
                      elm.css('top', 320);
                      elm.css('opacity', 1);
                      elm.css('display', 'block');
                      elm.animate({top:61}, 500);
                      if (game.timeoutID!=null) clearTimeout(game.timeoutID);
                      game.timeoutID = setTimeout(hideDragFeedback, 2000);
                  }
                  switch(boxID){
                    case 1://Rarely
					updateDragFeedbackPanel(sym.$('TextCopy2'), (id==1));
                    sym.stop(1000);
                    break;
                    case 2://Sometimes
					updateDragFeedbackPanel(sym.$('TextCopy'), (id==2));
                    sym.stop(500);
                    break;
                    case 3://Always
					updateDragFeedbackPanel(sym.$('Text'), (id==0));
                    sym.stop(0);
                    break;
                  }
              }else{
                  if (wipe_snd!=null) wipe_snd.play();               
              }
          }
        }
    });
    
    blink_sym.play(0);
    
    game = { "syms":syms, "dropped":0 };
}
  
function updateDragFeedbackPanel(txt, correct){
	if (correct){
		txt.text("Great work.");
		if (correct_snd!=null) correct_snd.play();
	}else{
		txt.text("Work on it!");
		if (wrong_snd!=null) wrong_snd.play();
	}
}

function hideDragFeedback(){
    if (blink_sym==null) return;
    var sym = blink_sym.getSymbol("FeedbackPanel");
    if (sym!=undefined){
        var elm = sym.getSymbolElement();
        elm.animate({opacity:0}, 500, function(){
            $(this).css('display', 'none');
        });
    }
    var dropped = 0;
    for(var i=0; i<game.syms.length; i++){
        if (game.syms[i].dropped) dropped++;
    }
    if (dropped==game.syms.length){
        stopTimer();
        nextBlink();
    }
}

function getDragID(elm){
    for(var i=0; i<game.syms.length; i++){
        if (game.syms[i].elm[0]==elm[0]) return i;
    }
    return -1;
}

function initTimeToTalk(blink){
    var elm = blink_sym.$('instructions');
    elm.css('opacity', 1);
    var start_btn = blink_sym.$('start');
    
    start_btn.click(function(){
        var d = new Date();
        game.start_time = d.getTime(); 
        $(this).css('display', 'none');
        var elm = blink_sym.$('finished');
        elm.css('display', 'block');
        var left = elm.css('left');
        elm.css('left', 350);
        elm.animate({left:left}, 500);
        elm = blink_sym.$('instructions');
        elm.text('When you’re done, touch finished.');
    });
    
    var finished_btn = blink_sym.$('finished');
    finished_btn.click(function(){
        var d = new Date();
        var tm = d.getTime();
        var elapsed = (tm - game.start_time)/1000;
        $(this).css('display', 'none');
        var elm = blink_sym.$('continue');
        elm.css('display', 'block');
        var left = elm.css('left');
        elm.css('left', 350);
        elm.animate({left:left}, 500);
        var sym = blink_sym.getSymbol("feedback");
        elm = sym.getSymbolElement();
        elm.css('display', 'block');
        elm.css('left', 300);
        elm.animate({left:-78}, 500);
        
        elm = sym.$('feedback_txt');

        if (elapsed<(blink.talk_time-7)){
            //Too fast
            setScore(score-50);
            elm.text(blink.feedback[2]);
        }else if (elapsed>(blink.talk_time+7)){
            //Too slow   
            setScore(score-50);
            elm.text(blink.feedback[0]);
        }else{
            //Perfect
            setScore(score+150);
            elm.text(blink.feedback[1]);
        }
        
        elm = blink_sym.$('instructions');
        elm.animate({opacity:0}, 500);
    });
    
    var continue_btn = blink_sym.$('continue');
    continue_btn.click(function(){
        elm = blink_sym.$('txt');
        elm.text(blink.text);
        elm.css('left', 300);
        elm.animate({left:-95}, 800);
        $(this).css('display','none');
        elm = blink_sym.$('start');
        elm.css('display', 'block');
        var left = elm.css('left');
        elm.css('left', 350);
        elm.animate({left:left}, 500);
        elm = blink_sym.$('instructions');
        elm.css('display','block');
        elm = blink_sym.$('title');
        elm.text("TIME TO TALK");
        elm.css('left', 300);
        elm.animate({left:-100}, 500);
        $(this).unbind('click');
        $(this).click(function(){
            nextBlink();
        });
    });
    continue_btn.css('display', 'block');
    
    var sym = blink_sym.getSymbol("feedback");
    var elm = sym.getSymbolElement();
    elm.css('display', 'none');
    
    elm = blink_sym.$('txt');
    elm.html(blink.intro);
    
    elm = blink_sym.$('instructions');
    elm.css('display','none');
    
    elm = blink_sym.$('title');
    elm.text(blink.intro_title);
    
    blink_sym.play(10);
    
    game = { };
}

function initFDAMission(blink){
    var elm = blink_sym.$("message");
    elm.html(blink.message);
    blink_sym.play();
    var elm = blink_sym.$('continue2');
    elm.click(nextBlink);
}

function initFDADrag(blink){
    var syms = new Array();
    
    for(var i=1; i<=6; i++){
        var elm = blink_sym.$('drag' + i);
        elm.css('cursor', 'pointer');
        elm.css('display', 'block');
        elm.draggable({start: function(event, ui) { $(this).css("z-index", 100); },
                       stop: function( event, ui ) {
                           var elm = $(this);
                           var id = getDragID(elm);
                           if (id!=-1){
                            elm.css('left', game.syms[id].position.left);
                            elm.css('top', game.syms[id].position.top);
                            elm.css('z-index', game.syms[id].zIndex);
                           } } });
        syms.push({elm:elm, dropped:false, position:elm.position(), zIndex:elm.css('z-index')});
        elm = blink_sym.getSymbol('drag' + i).$('text');
        elm.css('height', 'auto');
        elm.text(blink.options[i-1].text);
        var height = elm.height();
        elm = blink_sym.getSymbol('drag' + i).$('panel');
        elm.css('height', height + 15);
    }
                  
    var bins = blink_sym.$('pill_bottle');
    bins.droppable( {
      drop: function( event, ui ) {
          var elm = ui.draggable;
          var id = getDragID(elm);
          if (blink.options[id].correct){
              if (correct_snd!=null) correct_snd.play();
              game.dropped++;
              setScore(score+150);
          }else{
              if (wrong_snd!=null) wrong_snd.play();
              setScore(score-50);
          }
          if (game.dropped==4){
              stopTimer();
              blink_sym.play();
          }
          elm.css('display', 'none');
      }
    } );
    
    elm = blink_sym.$('continue2');
    elm.click(nextBlink);
    
    blink_sym.play();
    
    game = { "syms":syms, "dropped":0 };
}

function initTruthful(){
    var elm = blink_sym.$('continue');
    elm.click(function(){ 
        blink_sym.play();
        initTimer(blink.time);
        nextTruthful();
    });
    
    elm = blink_sym.$('truthful');
    elm.click(function(){
        var truthful = blink.options[game.id].truthful;
        if (truthful){
            if (correct_snd!=null) correct_snd.play();
            setScore(score+150);
        }else{
            if (wrong_snd!=null) wrong_snd.play();
            setScore(score-50);
        }
        nextTruthful();
    });
    
    elm = blink_sym.$('misleading');
    elm.click(function(){
        var truthful = blink.options[game.id].truthful;
        if (!truthful){
            if (correct_snd!=null) correct_snd.play();
            setScore(score+150);
        }else{
            if (wrong_snd!=null) wrong_snd.play();
            setScore(score-50);
        }
        nextTruthful();
    });
    
    blink_sym.play();
    
    game = { id:-1 };
}

function nextTruthful(){
    game.id++;
    if (game.id>=blink.options.length){
        nextBlink();
    }else{
        var elm = blink_sym.$('statement_txt');
        elm.animate({opacity:0}, 500, function(){
            var elm = $(this);
            elm.text(blink.options[game.id].text);
            elm.animate({opacity:1}, 500);
        });
    }
}

function showAssessment(){
    blink_sym = stage_sym.getSymbol('Assessment');
}

function infoPressed(){
}

function startPressed(){
}

function continuePressed(){
    startBlink(blinkID+1);
    continue_btn.animate({'opacity':0}, 500, function(){
        continue_btn.css('display', 'none');
    });
    if (game.words!=null){
        for(var i=0; i<game.words.length; i++){
            var sym = game.words[i];
            sym.deleteSymbol();
        }
    }
}

function initStatementPanels(){
	statement1_sym = stage_sym.getSymbol("Statement2Back");
	statement2_sym = stage_sym.getSymbol("Statement1Back");
	scrollPanel1 = new iScroll('Stage_Statement2Back_scroller', { scrollX:false , scrollY:true, hScrollbar:false, vScrollbar:true});
	scrollPanel2 = new iScroll('Stage_Statement1Back_scroller', { scrollX:false , scrollY:true, hScrollbar:false, vScrollbar:true});
}

function showStatement1Screen(){
    if (stage_sym != null){
        if (statement1_sym==null) initStatementPanels();		 
        var elm = statement1_sym.getSymbolElement();
        elm.css({opacity:0, display:'block'});
        elm.animate({opacity:1}, 500, function(){
			scrollPanel1.refresh();
			scrollPanel2.refresh();
		});
        elm = stage_sym.$("intro");
        elm.css('display', 'none');
    }
}

function showStatement2Screen(){
    if (stage_sym != null){
        var elm = statement1_sym.getSymbolElement();
        elm.css('display','none');
        elm = statement2_sym.getSymbolElement();
        elm.css('display','block');
		setTimeout(function(){ scrollPanel1.refresh(); scrollPanel2.refresh(); }, 100);
    }
}

function statement2BackPressed(){
    if (stage_sym != null){
        var elm = statement1_sym.getSymbolElement();
        elm.css({opacity:0, display:'none'});
        elm = stage_sym.$("intro");
        elm.css('display', 'block');
        elm.animate({opacity:1}, 500);
    }
}

function statement1BackPressed(){
    if (stage_sym != null){
        var elm = statement1_sym.getSymbolElement();
        elm.css('display','block');
        elm = statement2_sym.getSymbolElement();
        elm.css('display','none');
		setTimeout(function(){ scrollPanel1.refresh(); scrollPanel2.refresh(); }, 100);
    }
}

function finishedPressed(){
}

function loadSounds(){
	correct_snd = new buzz.sound("sounds/correct", {formats: [ "ogg", "mp3" ], preload:true });
	wrong_snd = new buzz.sound("sounds/wrong", {formats: [ "ogg", "mp3" ], preload:true });
	click_snd = new buzz.sound("sounds/click", {formats: [ "ogg", "mp3" ], preload:true });
	clapping_snd = new buzz.sound("sounds/clapping", {formats: [ "ogg", "mp3" ], preload:true });
	gameover_snd = new buzz.sound("sounds/gameover", {formats: [ "ogg", "mp3" ], preload:true });
	levelup_snd = new buzz.sound("sounds/levelup", {formats: [ "ogg", "mp3" ], preload:true });
	timerstart_snd = new buzz.sound("sounds/timerstart", {formats: [ "ogg", "mp3" ], preload:true });
    timerend_snd = new buzz.sound("sounds/timerend", {formats: [ "ogg", "mp3" ], preload:true });
	blink_snd = new buzz.sound("sounds/blink", {formats: [ "ogg", "mp3" ], preload:true });
} 