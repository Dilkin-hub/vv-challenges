<?php

function FooBarFizz (int $num1, int $num2)
{
	if (!$num1 && !$num2) return;
	
	$nums = [$num1, $num2];
	
    if ($number % 15 == 0) :
        echo 'FooBar';
    else :
        if ($number % 7 == 0) :
            echo 'Fizz ';
            if ($number % 5 == 0) :
                echo 'Bar ';
            else :
                if ($number % 3 == 0) :
                    echo 'Foo ';
                else :
                    echo $number;
                endif;
            endif;
        endif;
    endif;
};