$(function(){
	$('input').on('click', inputHandler);

	function inputHandler() {
		var $fisrtCard = $('.card:nth-child(1)');
		var $secondCard = $('.card:nth-child(2)');

		var id = $fisrtCard.attr('id').toString();
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

	function submitVote(userNote, id){
		$.post('vote', {
			note: userNote,
			sentenceId: id
		}, createNewCard);
	}

	function createNewCard(data){
		var $newCard = $('<div></div>');

		$newCard
			.text(data.Sentence)
			.addClass('card right-inactive')
			.attr('id', data.Id);

		$('.card-container').append($newCard);
	}

});