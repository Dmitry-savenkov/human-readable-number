module.exports = function toReadable(number) {
  
  const onesText = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nin", "ten", "eleven", "twelve", 'thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tensText = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];

  if (number == 0) {
      return 'zero';
  }

  const hundreds = Math.floor( number / 100 );

  let ten = Math.floor((number - hundreds * 100) / 10);
  let one = number - (hundreds * 100) - (tens * 10);

  if (ten == 1) {
    ten = 0;
    one = number - (hundreds * 100);
  }

  const hundreds = hundreds ? onesText[hundreds] + ' hundred ' : '';
  return (hundreds + tensText[ten] + onesText[one]).trim()
};
