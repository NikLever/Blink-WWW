// JavaScript Document
function getIntroBlink(mode){
	burstNotUnit = mode;
	var intro = blinkData.intro;
	if (intro==null){
		intro = { title:"", description:"", image:"" };
		blinkData.intro = intro;
	}
	var title = (intro.title!=null) ? intro.title : "";
	var description = (intro.description!=null) ? intro.description : "";
	var image = (intro.image!=null) ? intro.image : "";
	var str = '<table width="100%">';
    str += '<tr><td class="left" width="20%">Title</td><td><textarea id="intro-title" placeholder="Enter your text here" style="width:100%; height:60px;">' + title + '</textarea></td></tr>';
    str += '<tr><td class="left" width="20%">Description</td><td><textarea id="intro-description" placeholder="Enter your text here" style="width:100%; height:60px;">' + description + '</textarea></td></tr>';
	str += '<form id="intro-image-form" method="post" action="blink_update.php" enctype="multipart/form-data">';
	str += '<tr><td class="left" width="20%">Image</td><td>Choose Image<input type="file" name="image"/>';
	str += '<input type="hidden" name="method" value="intro_image" />';
	str += '<input type="submit" value="Upload" />';
	str += '</form>';
	str += '<br/><img id="intro-image" src="../courses/images/' + image + '" />';
	if (burstNotUnit){
		if (blinkData.unlockscore==null) blinkData.unlockscore = 0;
		if (blinkData.quicklink==null) blinkData.quicklink=false;
		if (blinkData.quotation==null) blinkData.quotation="";
		str += '<tr><td class="left" width="20%">Quotation</td><td><textarea id="intro-quotation" placeholder="Enter the text to use as quotation on progress screen." style="width:100%; height:60px;">' + blinkData.quotation + '</textarea></td></tr>';
		str += '<tr><td class="left" width="20%">Unlock score</td><td><input type="text" id="intro-unlock-score" value="' + blinkData.unlockscore + '" /></td></tr>';
		var checked = (blinkData.quicklink=="undefined" || !blinkData.quicklink) ? "" : "checked"; 
		str += '<tr><td class="left" width="20%">Quick link</td><td><input type="checkbox" id="intro-quicklink" ' + checked + ' /></td></tr>';
	}else{
		if (blinkData.dossier==null) blinkData.dossier = false;
		var checked = (blinkData.dossier=="undefined" || !blinkData.dossier) ? "" : "checked"; 
		str += '<tr><td class="left" width="20%">Create Dossier</td><td><input type="checkbox" id="intro-dossier" ' + checked + ' /></td></tr>';
	}
	str += '</td></tr></table>';
	return str;
}

function showIntroBlink(){
	$('#blink-content').html(getIntroBlink());
	$("blinks").attr("overflow", "hidden");
	setTimeout(setScrollHeight, 10);
	addBlinkPanelEvents();
	blinkModified = true;
	updateBlinkPanelButtons();
}

function addIntroEvents(){
	var elm = $("#intro-title");
	
	elm.keyup(function(){
			$("#intro-title").blur();
			$("#intro-title").focus();
		});
		
	elm.change( function(){
			console.log(this.value);
			blinkData.intro.title = this.value;
			blinkModified=true;
			updateBlinkPanelButtons(); 
		});
	
	var elm = $("#intro-quotation");
	
	elm.keyup(function(){
			$("#intro-quotation").blur();
			$("#intro-quotation").focus();
		});
		
	elm.change( function(){
			console.log(this.value);
			blinkData.quotation = this.value;
			blinkModified=true;
			updateBlinkPanelButtons(); 
		});
		
	$("#intro-description").keyup(function(){
			$("#intro-description").blur();
			$("#intro-description").focus();
		});
			
	$('#intro-description').change( function(){
			console.log(this.value);
			blinkData.intro.description = this.value;
			blinkModified=true;
			updateBlinkPanelButtons(); 
		});
		
	$('#intro-image-form').ajaxForm(function(data) {
			console.log("Intro image form " + data); 
			var json = JSON.parse(data);
			if (json.success){
				var src = "../courses/images/" + json.path;
				blinkData.intro.image = json.path;
				var elm = $('#intro-image');
				if (elm!=null){
					elm.attr("src", src+"?timestamp=" + new Date().getTime());
				}else{
					var str = $('#blink-content').html();
					str += '<img id="intro-image" src="../courses/images/' + json.path + ' />';
					$('#blink-content').html(str);
				}
				blinkModified=true;
				updateBlinkPanelButtons();
			}
		});
		
	if (burstNotUnit){
		$("#intro-feedback-pass").keyup(function(){
			$("#intro-feedback-pass").blur();
			$("#intro-feedback-pass").focus();
		});
			
		$('#intro-feedback-pass').change( function(){
			console.log(this.value);
			blinkData.feedback[0] = this.value;
			blinkModified=true;
			updateBlinkPanelButtons(); 
		});
		
		$("#intro-feedback-fail").keyup(function(){
			$("#intro-feedback-fail").blur();
			$("#intro-feedback-fail").focus();
		});
			
		$('#intro-feedback-fail').change( function(){
			console.log(this.value);
			blinkData.feedback[1] = this.value;
			blinkModified=true;
			updateBlinkPanelButtons(); 
		});
		
		$("#intro-unlock-score").keyup(function(){
			$("#intro-unlock-score").blur();
			$("#intro-unlock-score").focus();
		});
			
		$('#intro-unlock-score').change( function(){
			console.log(this.value);
			blinkData.unlockscore = this.value;
			blinkModified=true;
			updateBlinkPanelButtons(); 
		});
		
		$('#intro-quicklink').click (function (){
			var check = $(this);
			if (check.is (':checked')){
				// Do stuff
				blinkData.quicklink = true;
			}else{
				blinkData.quicklink = false;
			}
			blinkModified=true;
			updateBlinkPanelButtons(); 
		});
	}else{
		$('#intro-dossier').click (function (){
			var check = $(this);
			if (check.is (':checked')){
				// Do stuff
				blinkData.dossier = true;
			}else{
				blinkData.dossier = false;
			}
			blinkModified=true;
			updateBlinkPanelButtons(); 
		});
	}
}