/**
 * 화살표 함수
 */

// map()과 () =>{}
const matrials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

const newArr = matrials.map((e) => {
  return e.length * 2;
});

console.log(newArr);

//회문 filter
let palindromes = [
  '스위스',
  '팥콩밭',
  '별똥별',
  '음악',
  '인도인',
  '필리핀',
  '다시합시다',
  '피카츄',
  '여보안경안보여',
  '역삼역'
];

const contents = palindromes.filter((str) => {
  if (str === str.split('').reverse().join('')) {
    return str;
  }
});

console.log(contents);