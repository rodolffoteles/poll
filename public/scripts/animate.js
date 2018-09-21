$(function(){
	loader();

	function loader(){
		setTimeout(() => {
			$('#vote').removeClass('none');
			$('.spinner').remove();
			linkListeners();
			}, 1500)
	}

	var $voteSection = $('#vote');
	var $tutorialSection = $('#tutorial');

	function linkListeners(){
		$('.buttons-container input.button').on('click', inputHandler);
		$('.help-button').on('click', showTutorial);
		$('.vote-button').on('click', showVote);
	}

	function inputHandler(){
		var $fisrtCard = $('.card:nth-child(1)');
		var $secondCard = $('.card:nth-child(2)');

		var id = $fisrtCard.children('input').attr('value').toString();
		var token = $('meta[name="csrf-token"]').attr('content');
		var note = $(this).val().toString();

		switchCards($fisrtCard, $secondCard);
		submitVote(note, id, token);	
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

	function submitVote(score, id, csrf){
		$.post('vote', {
			note: score,
			sentenceId: id,
			_csrf: csrf
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
		$tutorialSection.removeClass('none');
		$voteSection.addClass('none');	
	}

	function showVote(){
		$tutorialSection.addClass('none');
		$voteSection.removeClass('none');	
	}

});