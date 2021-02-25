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
  const responseValue = document.querySelector('.conversor.response input')
  const answerInput = document.querySelector('.conversor.answer input')

  if ( !responseValue.value ) {
    responseValue.placeholder = 'Ocorreu um erro, a caixa de entrada está vázia'
    return responseValue.classList.add('error')
  }

  responseValue.classList.remove('error')
  if ( isBinary ) return answerInput.value = binaryMath(responseValue)
  else return answerInput.value = decimalMath(responseValue.value)
})


function binaryMath(responseInput) {
  for ( let number of responseInput.value ) {
    if ( number != '0' & number != '1') {
      responseInput.value = ''
      responseInput.placeholder = "Ocorreu um erro, por favor somente 1 e 0"
      return responseInput.classList.add('error')

    }
  }

  let decimalAnswer = 0
  let finalIndex = responseInput.value.length - 1
  for ( binaryNumber of responseInput.value ) {
    decimalAnswer += binaryNumber * 2 ** finalIndex
    finalIndex--

  }

  return decimalAnswer
}

function decimalMath(value) {
  let binaryAnswer = ''
  let defaultValue = value

  while ( true ) {
    let quotient = parseInt(defaultValue / 2)
    let remainder = defaultValue % 2

    if ( remainder == 0 ) binaryAnswer += 0
    else binaryAnswer += 1
    
    defaultValue = quotient
    
    if (quotient == 0) break

  }

  return binaryAnswer.split('').reverse().join('')
}


