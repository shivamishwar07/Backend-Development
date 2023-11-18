let originalArray = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

let transformedArray = originalArray.map(function(element) {
  return element === ' ' ? 'empty string' : element;
});

console.log(transformedArray);