<?php

class Dictionary
{
  protected $alphabet = range('A', 'Z');
  protected $base = [
    'Palavra'     => 'Significado',
    'Balacobaco'  => 'festa; qualidade ou beleza excepcionais.',
    'Bulhufas'    => 'deixar para depois; adiar.',
    'Chumbrega'   => 'de má qualidade; comum.'
  ];

  private function getMissingChars(array $letters): array
  {
    $alphabet = $this->getAlphabet();
    $start    = reset($letters);
    $index    = array_search($start, $alphabet);

    if ($index !== false) :
      $range    = array_slice($alphabet, $index, 6);
      $missing  = array_diff($range, $letters);
    else :
      $missing = [];
    endif;

    return $missing;
  }

  public function displayLettersDiff(array $letters = ['A', 'B', 'D', 'E', 'F']): void
  {
    $missing  = $this->getMissingChars($letters);
    $response = '';

    if (count($missing) > 0) :
      $response = 'Está faltando a(s) letra(s) ' . implode(', ', $missing) . ' na sequência inserida.';
    else :
      $response = 'Não há letras faltando na sequência inserida.';
    endif;

    echo $response;
  }

  public function searchFor(string $word): void
  {
    $dictionary  = $this->getBase();
    $response   = '';

    if (!$word) :
      $response = 'É preciso inserir uma plavra para buscar no dicionário';
    endif;

    foreach ($dictionary as $k => $item) :
      if ($k !== $word) :
        $response = 'Este termo não foi identificado em nosso sistema.';
        break;
      else :
        $response = $dictionary[$word];
        break;
      endif;
    endforeach;

    echo $response;
  }

  private function getBase(): ?array
  {
    return $this->base;
  }

  private function getAlphabet(): ?array
  {
    return $this->alphabet;
  }
}
