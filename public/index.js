const toggleButton = document.querySelector('.toggle-mode')
let numberIndex = 1
let isBinary = true

toggleButton.addEventListener('click', () => {
  const headerTitle = document.querySelector('.header-title')

  const responseLabel = document.querySelector('.labels.response')
  const responseInput = document.querySelector('.conversor.response input')

  const answerLabel = document.querySelector('.labels.answer')

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
  const responseInput = document.querySelector('.conversor.response input').value
  
  if (validationChecking()) return

  if ( isBinary ) {
    if (checkingCorrectBinaryNumber()) return
    return console.log('Converting in Decimal number')
  }

  return console.log('Converting in Binary number')

  function validationChecking() {
    if ( !responseInput ) {
      console.log('error input without any numbers')
      return true
    }
  }

  function checkingCorrectBinaryNumber() {
    for ( let number of responseInput ) {
      if ( number != '0' & number != '1') {
        console.log('Invalid binary number')
        return true
      }
    }
  }
})


