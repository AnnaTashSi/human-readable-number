module.exports = function toReadable(num) {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];

  function convertTens(numb) {
    // Function for tens (20-99)
    if (numb < 10) return ones[numb];
    // If parameter is less than 10, return text 1-9
    if (numb >= 10 && numb < 20) return teens[numb - 10];
    // If parameter is 10-19, return text 10-19
    // [number - 10] calculates position in array

    return `${tens[Math.floor(numb / 10)]} ${ones[numb % 10]}`.trim();
    // If parameter >=20, return text 20-99
    // calculate array position (20/10=2) + space + remainder position/10-- 20/10=2, i.e. 0)
  } // doesn't work on 20,30,40,50,60,70,80,90,100 without trim() method - removes trailing space

  function convertHundreds(numb) {
    if (numb > 99 && numb < 1000) {
      return `${ones[Math.floor(numb / 100)]} hundred ${convertTens(
        numb % 100,
      )}`.trim();
    }
    return convertTens(numb);
  } // Function for hundreds. if parameter is 100-999..........

  function convert(numb) {
    if (numb === 0) return 'zero';
    return convertHundreds(numb);
  } // Function for 0. if parameter == 0, then return text, otherwise call hundreds function

  return convert(num); // call function for 0
};

// node index.js
// get function from module.exports
// console.log(module.exports(121));
