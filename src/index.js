module.exports = function toReadable(number) {
  const  NumberOne = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const  NumberTen = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

 if (number === 0){
     return 'zero';
 }
  const hundreds = Math.floor(number / 100);
  let ten = Math.floor((number - hundreds * 100) / 10);
  let one = number - hundreds * 100 - ten * 10;
  if (ten === 1) {
    one = number - hundreds * 100;
    ten = 0;
  }
  const hundredsText = hundreds ? NumberOne[hundreds] + ' hundred ' : '';
  return (hundredsText + NumberTen[ten] + NumberOne[one]).trim()
}
