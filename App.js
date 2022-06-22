const inputValue = document.getElementById('pin-generator-value')
function forRandomPin(){
    const randomPin =Math.round( Math.random() * 10000)
    const randomPinInteger = randomPin + '';
    
    if(randomPinInteger.length == 4){
        inputValue.value =randomPin
        
    }
    else{
        return forRandomPin()
    }
}



document.getElementById('all-number').addEventListener('click', function (event) {

    const buttonInputValue = document.getElementById('for-number-value')
    const firstInputValue = buttonInputValue.value
    const secondInputValue = document.getElementById('for-number-value')
    const secontButtonValue = event.target.innerText
    secondInputValue.value = firstInputValue + secontButtonValue
    const forLength = secondInputValue.value
    
    if(forLength.length > 4){
        secondInputValue.value ='';
    }
})

function forSubmit() {
    
    const pin = document.getElementById('pin-generator-value').value
    const numberValue = document.getElementById('for-number-value').value
    

    if (pin == numberValue) {
        const matchingSuccess = document.getElementById('matching-success')
        matchingSuccess.style.display = 'block'
        matchingFailed = ''
    }
    else{
        const matchingFailed = document.getElementById('matching-failed')
        matchingFailed.style.display = 'block'
        matchingSuccess = ''
    }

}
