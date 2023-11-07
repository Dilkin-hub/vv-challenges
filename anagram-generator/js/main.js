const input = document.querySelector('.anagram-text-field');
const formButton = document.querySelector('.generate-anagrams-btn');
const resultsPanel = document.querySelector('.results-panel');
const resultsHeader = document.querySelector('.results .results-header');


const validateInput = ({ target }) => {
  if (target.value) {
    formButton.removeAttribute('disabled');
    return;
  }

  formButton.setAttribute('disabled', '');
}

const generateAnagrams = (word) => {
  const anagrams = permute(word);

  const uniqueAnagrams = [];
  const duplicates = [];

  for (const anagram of anagrams) {
    if (!uniqueAnagrams.includes(anagram)) {
      uniqueAnagrams.push(anagram);
    } else {
      duplicates.push(anagram);
    }
  }

  return { uniqueAnagrams, duplicates };
}

const permute = (str) => {
  if (str.length <= 1) {
    return [str];
  }

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const permutations = permute(remaining);

    for (const perm of permutations) {
      result.push(char + perm);
    }
  }

  return result;
}

formButton.addEventListener('click', function () {
  const anagrams = generateAnagrams(input.value);
  const duplicateCountText = document.createElement('p');
  const uniqueCountText = document.createElement('p');

  resultsPanel.innerHTML = '';
  resultsHeader.innerHTML = '';

  anagrams.uniqueAnagrams.forEach(element => {
    const anagramItem = document.createElement('p');
    anagramItem.className = 'anagram-item';
    anagramItem.textContent = element;

    resultsPanel.appendChild(anagramItem);
  });

  uniqueCountText.className = 'anagram-unique-text';
  uniqueCountText.textContent = 'Anagramas gerados ' + anagrams.uniqueAnagrams.length;

  duplicateCountText.className = 'anagram-duplicates-text';
  duplicateCountText.textContent = 'Itens duplicados ' + anagrams.duplicates.length;

  resultsHeader.appendChild(uniqueCountText);
  resultsHeader.appendChild(duplicateCountText);
})

input.addEventListener('input', validateInput);