const toggleButton = document.querySelector('.toggle-mode')
let numberIndex = 1
let isBinary = true

toggleButton.addEventListener('click', () => {
  const headerTitle = document.querySelector('.header-title')

  const responseLabel = document.querySelector('.labels.response')
  const responseInput = document.querySelector('.conversor.response input')

  const answerLabel = document.querySelector('.labels.answer')
  const answerInput = document.querySelector('.conversor.answer input')

  responseInput.value = ''
  answerInput.value = ''

  if ( numberIndex % 2 == 0 ) {
    headerTitle.innerText = 'Binário para Decimal'

    responseLabel.innerText = "Binário"
    responseInput.setAttribute('placeholder', 'Coloque o número Binário aqui')
    
    answerLabel.innerText = "Decimal"
    
    toggleButton.classList.remove('decimal')
    toggleButton.classList.add('binary')
    
    isBinary = true
  } else {
    headerTitle.innerText = 'Decimal para Binário'

    responseLabel.innerText = "Decimal"
    responseInput.setAttribute('placeholder', 'Coloque o número Decimal aqui')

    answerLabel.innerText = "Binário"
    
    toggleButton.classList.remove('binary')
    toggleButton.classList.add('decimal')

    isBinary = false
  }
  
  return numberIndex++
})




const convertButton = document.querySelector('.button-converter')
convertButton.addEventListener('click', () => {
  const responseValue = document.querySelector('.conversor.response input').value
  const answerInput = document.querySelector('.conversor.answer input')

  if (validationChecking()) return

  if ( isBinary ) {
    if (checkingCorrectBinaryNumber()) return

    let decimalAnswer = 0
    let finalIndex = responseValue.length - 1
    for ( binaryNumber of responseValue ) {
      decimalAnswer += binaryNumber * 2 ** finalIndex
      finalIndex--

    }

    return answerInput.value = decimalAnswer
  }

  let binaryAnswer = ''
  let test = responseValue
  for ( let i = 0; i < 10; i++) {
    let quotient = parseInt(test / 2)
    let remainder = test % 2

    if ( remainder == 0 ) binaryAnswer += 0
    else binaryAnswer += 1
    
    test = quotient
    
    if (quotient == 0) break

  }

  binaryAnswer = binaryAnswer.split('').reverse().join('')
  return answerInput.value = binaryAnswer

  function validationChecking() {
    if ( !responseValue ) {
      console.log('error input without any numbers')
      return true
    }
  }

  function checkingCorrectBinaryNumber() {
    for ( let number of responseValue ) {
      if ( number != '0' & number != '1') {
        console.log('Invalid binary number')
        return true
      }
    }
  }
})


