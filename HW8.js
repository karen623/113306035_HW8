document.getElementById('calculator-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  // parseFloat: 將輸入的文字值轉換為小樹
  // get number
  const operator = document.getElementById('operator').value;
  // get operator

  let result;
  // let: store the operating result

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number2 !== 0 ? number1 / number2 : 'Error (Divide by 0)';
      // if true run n1/n2, false run error
      break;
    default:
      result = 'Invalid Operator';
  }

  document.getElementById('result').textContent = isNaN(result) ? 'Invalid Input' : result.toFixed(2);
});
