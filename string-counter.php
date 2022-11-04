<?php

$ASCII_SIZE = 256;

function letterIsVowel(string $letter): bool
{
    $letter = strtoupper($letter);
    return ($letter =='A' || $letter =='E' || $letter =='I' || $letter =='O' || $letter =='U');
}

function countVowels(string $string)
{
    $count = 0;
    for ($i = 0; $i < strlen($string); $i++)
        if (letterIsVowel($string[$i])) 
            ++$count;
    return $count;
}

function getFrequentCharacter(string $string)
{
    global $ASCII_SIZE;

    $string = str_replace(' ', '', $string);
    $string = preg_replace("/[^A-Za-z ]/", '', $string);
    $count  = array_fill(0, $ASCII_SIZE, NULL);
 
    $len   = strlen($string);
    $max   = 0;
 
    for ($i = 0; $i < ($len); $i++)
    {
        $count[ord($string[$i])]++;
        if ($max < $count[ord($string[$i])])
        {
            $max = $count[ord($string[$i])];
            $result = $string[$i];
        }
    }
 
    return [
        'frequency' => $max,
        'result'    => $result
    ];
}

function displayStringCounter(string $string)
{
    $string = str_replace(' ', '', $string);
    $string = preg_replace("/[^A-Za-z ]/", '', $string);

    if (!is_string($string) || is_numeric($string) || !$string) :
        echo 'Valor inválido.';
        return;
    endif;

    $vowelsCount   = countVowels($string);
    $frequencyChar = getFrequentCharacter($string);

    if ($vowelsCount < 1) :
        echo 'Nenhuma vogal encontrada<br/>';
    else:
        echo 'Quantidade de vogais: ' . $vowelsCount . '<br/>';
    endif;

    echo 'Letra mais utilizada: ' . $frequencyChar['result'] . ' ('. $frequencyChar['frequency'] .' vezes)<br/>';
}

$string = 'Cachorro';
 
displayStringCounter($string);