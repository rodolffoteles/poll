$(function(){
	$('.buttons-container input.button').on('click', inputHandler);

	$(document).ajaxError(function(){
    	alert("An error occurred!");
	});

	var $voteSection = $('#vote');
	var $tutorialSection = $('#tutorial');
	var $arrowIcon = $('#arrow-icon');
	var $tutorialIcon = $('#tutorial-icon');

	$tutorialIcon.on('click', showTutorial);
	$arrowIcon.on('click', showVote);

	function inputHandler(){
		var $fisrtCard = $('.card:nth-child(1)');
		var $secondCard = $('.card:nth-child(2)');

		var id = $fisrtCard.children('input').attr('value').toString();
		var note = $(this).val().toString();

		switchCards($fisrtCard, $secondCard);
		submitVote(note, id);	
	}

	function switchCards($fisrtCard, $secondCard){
		$fisrtCard
			.removeClass('active')
			.addClass('left-inactive')
			.on("transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd", removeCard);

		$secondCard
			.removeClass('right-inactive')
			.addClass('active');
	}

	function removeCard(){
		$(this).remove();
	}

	function submitVote(score, id){
		$.post('vote', {
			note: score,
			sentenceId: id
		}, createNewCard);
	}

	function createNewCard(data){
		var $newCard = $('<div></div>');

		$newCard
			.addClass('card right-inactive')
			.append($('<p></p>').text(
				data.Sentence))
			.append($('<input>').attr({
			    type: 'hidden',
			    name: 'sentenceId',
			    value: data.Id
			}));
			
		$('.card-container').append($newCard);
	}

	function showTutorial(){
		$arrowIcon.removeClass('hidden');
		$tutorialIcon.addClass('hidden');
		$tutorialSection.removeClass('none');
		$voteSection.addClass('none');	
	}

	function showVote(){
		$arrowIcon.addClass('hidden');
		$tutorialIcon.removeClass('hidden');
		$tutorialSection.addClass('none');
		$voteSection.removeClass('none');	
	}

});