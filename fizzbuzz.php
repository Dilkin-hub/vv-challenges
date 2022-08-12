<?php //Hi, this is the Fizzbuzz challenge

function FizzBuzz (int $number)
{
    if ($number % 15 == 0) :
        echo 'FizzBuzz';
    else :
        if ($number % 5 == 0) {
            echo 'Buzz';
        } else {
            if ($number % 3 == 0) {
                echo 'Fizz';
            } else {
                echo $number;
            }
        }
    endif;
};