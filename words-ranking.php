<?php
function rankWordsScore($word)
{
  $score  = 0;

  $alphabet   = 'abcdefghijklmnopqrstuvwxyz';

  $word = iconv('UTF-8', 'ASCII//TRANSLIT', $word);

  $pieces = str_split(mb_strtolower($word, 'UTF-8'));

  foreach ($pieces as $piece) :
    $isUpper = ctype_upper($piece);
    $piece = mb_strtolower($piece, 'UTF-8');

    if (mb_strpos($alphabet, $piece, 0, 'UTF-8') !== false) :
      $score += mb_strpos($alphabet, $piece, 0, 'UTF-8') + 1;

      if ($isUpper) :
        $score *= 2;
      endif;
    endif;
  endforeach;

  return $score;
}
function orderWordsByScore($wordsList)
{
  usort($wordsList, function ($a, $b) {
    $scoreA = rankWordsScore($a);
    $scoreB = rankWordsScore($b);

    if ($scoreA == $scoreB) {
      $firstLetterA = mb_substr($a, 0, 1, 'UTF-8');
      $firstLetterB = mb_substr($b, 0, 1, 'UTF-8');

      return rankWordsScore($firstLetterB) - rankWordsScore($firstLetterA);
    }

    return $scoreB - $scoreA;
  });

  $rankedWords = [];

  foreach ($wordsList as $wordItem) :
    $score        = rankWordsScore($wordItem);
    $rankedWords[] = "$wordItem - $score";
  endforeach;

  return $rankedWords;
}

//use aqui para testar :)
$list = ["joia", "jóia", "águ-=-=a", "elefante", "banana"];

foreach (orderWordsByScore($list) as $item) :
  echo $item . '<br>';
endforeach;
