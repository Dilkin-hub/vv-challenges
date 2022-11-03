<?php

function letterIsVowel($letter)
{
    $letter = strtoupper($letter);
    return ($letter =='A' || $letter =='E' || $letter =='I' || $letter =='O' || $letter =='U');
}

function countVowels($string)
{
    $count = 0;
    for ($i = 0; $i < strlen($string); $i++)
        if (letterIsVowel($string[$i])) 
            ++$count;
    return $count;
}

function getFrequentCharacter($string)
{
    global $ASCII_SIZE;

    $count = array_fill(0, $ASCII_SIZE, NULL);
 
    $len = strlen($string);
    $max = 0;
 
    for ($i = 0; $i < ($len); $i++)
    {
        $count[ord($string[$i])]++;
        if ($max < $count[ord($string[$i])])
        {
            $max = $count[ord($string[$i])];
            $result = $string[$i];
        }
    }
 
    return $result;
}

function displayStringCounter($string)
{
    $vowelsCount = countVowels($string);

    if ($vowelsCount < 1) :
        echo 'Nenhuma vogal encontrada em '. $string .'<br/>';
    else:
        echo 'Quantidade de vogais: ' . $vowelsCount . '<br/>';
    endif;
    echo 'Letra mais utilizada: ' . getFrequentCharacter($string) . '<br/>';
}

$string = 'Cachorro';
 
displayStringCounter($string);