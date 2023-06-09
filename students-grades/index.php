<?php
// TODO
// Implementar o form
// Melhorar o throw de erros (ver como fazer com php)
// Absorver os eventos do form para js
// Transformar os alunos em repetidores (?)
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="./css/static.css">
  <link rel="stylesheet" href="./css/main.css">

  <script defer src="./js/main.js"></script>

  <title>Calculadora de Notas</title>
</head>

<body>

  <?php if (false) : ?>
    <div class="students-grades-bg">
      <div class="grades-container">
        <h1 class="grades-title">Calculadora de Notas</h1>
        <p class="grades-description">Insira as notas de 1 a 10 para cada matéria</p>
        <div class="students-grades-table-wrap">
          <div class="student-line">
            <div class="name-wrap">
              <h3 class="student-name">Aluno 1</h3>
            </div>
            <div class="class-wrap">
              <label for="class-geografia">Geografia</label>
              <input type="number" min="0" max="10" id="class-geografia">
            </div>
            <div class="class-wrap">
              <label for="class-historia">História</label>
              <input type="number" min="0" max="10" id="class-historia">
            </div>
            <div class="class-wrap">
              <label for="class-linguas">Línguas</label>
              <input type="number" min="0" max="10" id="class-linguas">
            </div>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>

</body>

</html>