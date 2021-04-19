function startGame(counter = 3) {
	var container = $('#gameBoard');
  var turn = $('.turn');
  var player = 'X';

  buildBoard(container, counter);
  displayNextPlayer(turn, player);
  handleChangeBoard();
  handleClickedButton(player, turn);
}

function displayNextPlayer(turn, player) {
  turn.html('Player turn : '+ player);
}

function handleChangeBoard() {
  $(document).on('click', '#counter', function() {
    var counter = $('.number').val();
    var intRegex = /^\d+$/;
    if(intRegex.test(counter)) {
      $('#gameBoard').empty();
      $(document).off('click', '.myclass');
      startGame(counter);
    }
  });
}

function setNextPlayer(player) {
  if(player === 'X') {
    return player = 'O';
  } else {
    return player = 'X';
  }
}

function handleClickedButton(player, turn) {
  $(document).on('click', '.myclass', function (e) {
    var current = e.target;

    if(current.value !== '') {
      alert('This button is already checked');
    } else {
      current.value = player;
      player = setNextPlayer(player);
      displayNextPlayer(turn, player);
    }
  }); 
}

function buildBoard(container, counter) {
  for (var i = 0; i < counter; i++) {
    for (var j = 0; j < counter; j++) {
      var elem = $('<input/>').addClass('myclass');
      elem.attr('type', 'button');
      container.append(elem);

    }
    var breaker = $('<div></div>');
    container.append(breaker);
    breaker.className = 'clear';
  }
}

$( document ).ready(function() {
	startGame();
});
