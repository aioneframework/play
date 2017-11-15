$(document).ready(function(){
	$('.halfscreen').hide();
	editor.focus();
	session = editor.getSession();
	//get the line no and total line with character count
	function countData(){
		var currline = editor.getSelectionRange().start.row;
		var wholelinetxt = editor.session.getLine(currline);
		var current_row_characters = wholelinetxt.toString().trim().length;
		var data = editor.session.getValue().trim().length;
		var totalLines = session.getLength();

		$('.editor-data').html('Line '+(currline+1)+' of '+totalLines+' ,Char '+current_row_characters);
	}
	
	//append the character cout and append html into output box 
	document.getElementById('editor').addEventListener('keyup',function(){
		countData();
		var data = editor.session.getValue().trim();
		$('.aione-output').html(data);
		localStorage.setItem('ace_editor',data);
	});

	//set value to ace editor
	if(editor.session.getValue() != null){
		var data = localStorage.getItem('ace_editor');
		$('.aione-output').html(data);
	}
	editor.setValue(localStorage.getItem('ace_editor'));


	$(document).on('click','.fullscreen',function(e){
		e.preventDefault();
		$(this).hide();
		$('.ace_editor').hide();
		$('.halfscreen').show();
		$('.aione-output').css({'left': '0%'});
	});
	$(document).on('click','.halfscreen',function(e){
		e.preventDefault();
		$('.ace_editor').show();
		$('.fullscreen').show();
		$('.halfscreen').hide();
		$('.aione-output').css({'left': '50%'});
	});

	//mofile
	// 479px
	$('.view-mobile').click(function(){
		// $('.aione-output').css({
		// 	'width': '479px',
		//     'border': '7px solid lightgray',
		//     'border-radius': '19px'
		// });
		alert("hello");
		$('.aione-delault').removeClass('aione-output');
		$('.mobile-frame').show();

	});

	//tab
	// 767px



	//desktop
	// 991px
});