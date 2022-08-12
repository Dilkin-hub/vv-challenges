<?php //Hi, this is the Fizzbuzz challenge

function FooBarFizz (int $number)
{
    if ($number % 15 == 0) :
        echo 'FooBar';
    else :
	if ($number % 7 == 0) {
		echo 'Fizz ';
        if ($number % 5 == 0) {
            echo 'Bar ';
        } else {
            if ($number % 3 == 0) {
                echo 'Foo ';
            } else {
                echo $number;
            }
        }
	}
    endif;
};
