<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="./css/main.css">

  <script defer src="./js/main.js"></script>

  <title>Jogo de adivinhação</title>
</head>

<body>

  <div class="guessing-bg">
    <div class="guessing-main-container">
      <div class="welcome-step-panel">
        <div class="container-header">
          <h1 class="guessing-title">Jogo de Adivinhação</h1>
          <span class="guessing-description">
            Clique no botão abaixo para iniciar. O sistema gerará um número aleatório e você deverá adivinhá-lo.
          </span>
        </div>
        <div class="container-main">
          <div class="select-difficulty-wrap">
            <label for="selectDifficulty">Selecione a dificuldade</label>
            <select class="select-guessing-difficulty" id="selectDifficulty">
              <option data-info="(0 a 15 - 3 tentativas)" value="easy" selected>Fácil</option>
              <option data-info="(0 a 30 - 5 tentativas)" value="medium">Moderado</option>
              <option data-info="(0 a 100 - 10 tentativas)" value="hard">Difícil</option>
            </select>
            <span class="difficulty-info-text">(0 a 15 - 3 tentativas)</span>
          </div>
          <a class="generate-number-btn">
            Gerar número
          </a>
        </div>
      </div>
      <div class="guessing-step-panel hidden">
        <div class="container-header">
          <h1 class="guessing-title">Agora adivinhe o número</h1>
          <span class="guessing-description">
            Insira no campo abaixo o número que você acredita que foi gerado.
          </span>
        </div>
        <div class="container-main">
          <div class="guessing-area-wrap">
            <input class="guess-number-input" id="guessedNumber" type="number" min="1" max="10" step="1">
            <a class="guess-number-btn">Adivinhar</a>
          </div>

        </div>
        <div class="container-footer">
          <div class="attempts-view-panel">
            Tentativas restantes: <span class="attempt-num">3</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>

</html>