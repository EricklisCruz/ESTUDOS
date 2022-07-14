function soma(num1, num2) {
  let sum = num1 + num2

  if (num1 === num2) {
    if (sum < 10) {
      if (sum < 20) {
        return `Os números ${num1} e ${num2} são iguais. Sua soma é menor que 10 e menor que 20!`
      }
    }
  } else if (num1 !== num2) {
    if (sum > 10) {
      if (sum < 20) {
        return `Os números ${num1} e ${num2} são diferentes. Sua soma é maior que 10 e menor que 20!`
      }
    }
  } else if (num1 !== num2) {
    if (sum < 10) {
      if (sum < 20) {
        return `Os números ${num1} e ${num2} são diferentes. Sua soma é menor que 10 e menor que 20!`
      }
    }
  } else {
    return `Os números ${num1} e ${num2} são iguais. Sua soma é maior que 10 e maior que 20!`
  }
}

console.log(soma(11, 2))
