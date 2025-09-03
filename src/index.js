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
    if (numb < 10) return ones[numb];
    if (numb >= 10 && numb < 20) return teens[numb - 10];

    return `${tens[Math.floor(numb / 10)]} ${ones[numb % 10]}`.trim();
  } 

  function convertHundreds(numb) {
    if (numb > 99 && numb < 1000) {
      return `${ones[Math.floor(numb / 100)]} hundred ${convertTens(
        numb % 100,
      )}`.trim();
    }
    return convertTens(numb);
  } 

  function convert(numb) {
    if (numb === 0) return 'zero';
    return convertHundreds(numb);
  } 
 
  return convert(num); 
};
