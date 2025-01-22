// Game Logic
class RockPaperScissors {
    constructor() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.rounds = 0;
        this.maxRounds = 5;

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.querySelectorAll('.choice').forEach(choice => {
            choice.addEventListener('click', this.playRound.bind(this));
        });

        document.getElementById('reset-btn').addEventListener('click', this.resetGame.bind(this));
    }

    getDifficulty() {
        return document.getElementById('difficulty').value;
    }

    generateComputerChoice(difficulty) {
        const choices = ['rock', 'paper', 'scissors'];

        switch (difficulty) {
            case 'easy':
                return choices[Math.floor(Math.random() * 3)];

            case 'medium':
                // 70% chance of random, 30% chance of countering
                return Math.random() < 0.7 ?
                    choices[Math.floor(Math.random() * 3)] :
                    this.getCounterChoice(this.getLastPlayerChoice());

            case 'hard':
                // More strategic: tries to predict and counter
                return this.getCounterChoice(this.getLastPlayerChoice());
        }
    }

    getCounterChoice(choice) {
        const counterMap = {
            'rock': 'paper',
            'paper': 'scissors',
            'scissors': 'rock'
        };
        return counterMap[choice] || 'rock';
    }

    getLastPlayerChoice() {
        // This would be more sophisticated in a real implementation
        return localStorage.getItem('lastPlayerChoice') || 'rock';
    }

    playRound(event) {
        if (this.rounds >= this.maxRounds) {
            this.endGame();
            return;
        }

        const playerChoice = event.currentTarget.dataset.choice;
        localStorage.setItem('lastPlayerChoice', playerChoice);

        const difficulty = this.getDifficulty();
        const computerChoice = this.generateComputerChoice(difficulty);

        this.updateChoiceDisplay(playerChoice, computerChoice);
        this.determineWinner(playerChoice, computerChoice);
    }

    updateChoiceDisplay(playerChoice, computerChoice) {
        const playerImg = document.getElementById('player-choice-img');
        const computerImg = document.getElementById('computer-choice-img');

        playerImg.src = `/images/${playerChoice}.png`;
        computerImg.src = `/images/${computerChoice}.png`;

        playerImg.classList.add('shake');
        computerImg.classList.add('shake');

        setTimeout(() => {
            playerImg.classList.remove('shake');
            computerImg.classList.remove('shake');
        }, 500);
    }

    determineWinner(playerChoice, computerChoice) {
        const message = document.getElementById('message');
        const playerScoreEl = document.getElementById('player-score');
        const computerScoreEl = document.getElementById('computer-score');

        if (playerChoice === computerChoice) {
            message.textContent = "It's a Draw!";
            message.style.backgroundColor = '#2c3e50';
        } else {
            const winningConditions = {
                rock: 'scissors',
                paper: 'rock',
                scissors: 'paper'
            };

            if (winningConditions[playerChoice] === computerChoice) {
                this.playerScore++;
                playerScoreEl.textContent = this.playerScore;
                message.textContent = `You Win! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
                message.style.backgroundColor = 'green';
            } else {
                this.computerScore++;
                computerScoreEl.textContent = this.computerScore;
                message.textContent = `Computer Wins! ${computerChoice.toUpperCase()} beats ${playerChoice.toUpperCase()}`;
                message.style.backgroundColor = 'red';
            }
        }

        this.rounds++;

        if (this.rounds >= this.maxRounds) {
            this.endGame();
        }
    }

    endGame() {
        const message = document.getElementById('message');

        if (this.playerScore > this.computerScore) {
            message.textContent = `You Win the Game ${this.playerScore}-${this.computerScore}! 🏆`;
        } else if (this.playerScore < this.computerScore) {
            message.textContent = `Computer Wins the Game ${this.computerScore}-${this.playerScore}! 💻`;
        } else {
            message.textContent = `The Game is a Tie ${this.playerScore}-${this.computerScore}! 🤝`;
        }

        message.style.backgroundColor = '#4a235a';

        // Disable choices
        document.querySelectorAll('.choice').forEach(choice => {
            choice.style.pointerEvents = 'none';
            choice.style.opacity = '0.5';
        });
    }

    resetGame() {
        this.playerScore = 0;
        this.computerScore = 0;
        this.rounds = 0;

        document.getElementById('player-score').textContent = '0';
        document.getElementById('computer-score').textContent = '0';
        document.getElementById('message').textContent = 'Choose your weapon!';
        document.getElementById('message').style.backgroundColor = 'rgba(8, 27, 49, 0.8)';

        document.getElementById('player-choice-img').src = '';
        document.getElementById('computer-choice-img').src = '';

        // Re-enable choices
        document.querySelectorAll('.choice').forEach(choice => {
            choice.style.pointerEvents = 'auto';
            choice.style.opacity = '1';
        });
    }
}

// Initialize the game
new RockPaperScissors();