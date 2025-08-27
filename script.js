//  Login button 

document.getElementById('updateBtn')
    .addEventListener('click', function(e){
         e.preventDefault()
         const number = "01842846581";
         const sNumber=parseInt(number)
         const pin = 6581;
         const inputNumber =document.getElementById('input_Number');
         const inputNumberValue =parseInt(inputNumber.value);


        const inputPin =document.getElementById('input_pin');
        const inputPinValue = parseInt(inputPin.value );

         if(sNumber === inputNumberValue && pin=== inputPinValue){
           window.location.href="./home.html"
         }
         else{
            alert('Invalid Credentials')
         }
    })