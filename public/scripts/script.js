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

		updateCount(score);
	}

	function updateCount(score){
		score = parseInt(score);
		let $voteCount = $('.vote-count');

		let currentCount = $voteCount.text()
									.replace(/[^0-9\s]/g, '')
									.split(' ')
									.filter(Number);

		let totalCount = parseInt(currentCount[0]) + 1;
        let negativeCount = parseInt(currentCount[1])
        let neutralCount = parseInt(currentCount[2])
        let positiveCount = parseInt(currentCount[3])

		switch(score){
			case 1: positiveCount++; break;
			case 0: neutralCount++; break; 
			case -1: negativeCount++; break;
		}

		$voteCount.html(
			'Total: ' + totalCount
			+ '<br>Negativos: ' + negativeCount  
			+ ', Neutros:' + neutralCount 
			+ ', Positivos: ' + positiveCount 
			)
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