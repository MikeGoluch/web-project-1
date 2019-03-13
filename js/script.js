let playersRoundScore;
let activePlayer;
let mainScores;
let isGameEnd;



function gameInit() {
    mainScores = [0, 0];
    playersRoundScore = 0;
    activePlayer = 0;
    isGameEnd = true;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

gameInit();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (isGameEnd) {
        let diceRandom1 = Math.floor((Math.random()*6)+1);
        let diceRandom2 = Math.floor((Math.random()*6)+1);
        let diceDOM1 = document.querySelector('.dice-1');
        let diceDOM2 = document.querySelector('.dice-2');
        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM1.src = 'img/dice-' + diceRandom1 + '.png';
        diceDOM2.src = 'img/dice-' + diceRandom2 + '.png';
        if (diceRandom1 !== 1 && diceRandom2 !== 1) {
            playersRoundScore += (diceRandom1 + diceRandom2);
            document.getElementById('current-' + activePlayer).textContent = playersRoundScore;
        } else {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            playersRoundScore = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (isGameEnd) {
        mainScores[activePlayer] += playersRoundScore;
        document.getElementById('score-' + activePlayer).textContent = mainScores[activePlayer];
        if (mainScores[activePlayer] >= 20) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            isGameEnd = false;
        } else {
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            playersRoundScore = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', gameInit);