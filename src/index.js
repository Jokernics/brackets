module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let bracketsPair = {}
  let openBrackets = [] 

  for (let i of bracketsConfig) {
      openBrackets.push(i[0])
      bracketsPair[i[1]] = i[0]
  }

  for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      
      if (bracketsPair[currentSymbol] === currentSymbol && !stack.includes(currentSymbol)) {
        stack.push(currentSymbol)
      } else if (bracketsPair[currentSymbol] === currentSymbol && stack.includes(currentSymbol)) {
        if (stack.length === 0) {
          return false;
      }

      let topElement = stack[stack.length - 1];

      if (bracketsPair[currentSymbol] === topElement) {
          stack.pop();
      } else {
          return false;
      }
      } else if (openBrackets.includes(currentSymbol)) {
           stack.push(currentSymbol);
      } else {

          if (stack.length === 0) {
              return false;
          }

          let topElement = stack[stack.length - 1];

          if (bracketsPair[currentSymbol] === topElement) {
              stack.pop();
          } else {
              return false;
          }
      }
      console.log(stack)

  }

  return stack.length === 0;
}
