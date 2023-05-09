<?php
function displayWhoLikes( $names ) {
  $names = array_filter($names);
  
  if (count($names) === 0) :
    echo 'no one likes this';
    return;
  endif;
  
  switch ($names) {
    case count($names) === 1:
        echo array_shift($names) . ' likes this';
        break;
    case count($names) === 2:
        echo array_shift($names) . ' and '. array_pop($names) .' like this';
        break;
    case count($names) === 3:
        echo array_shift($names) . ', ' . $names[1] . 'and' . array_pop($names) . 'like this';
        break;
    case count($names) === 4:
        echo array_shift($names) . ', ' . $names[1] . 'and 2 others like this';
        break;
  }
}
