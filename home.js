//  money add button
   const validPin = 6581;
document.getElementById('moneyBtn')
    .addEventListener('click', function(e){
         e.preventDefault()
         const account =document.getElementById('AccountNumber').value;
         const pin = document.getElementById('valid-Pin')
         if(account.length !== 11){
             alert('place use valid number')
             return
            }
         if(pin.number() !== validPin){
            alert('use valid pin')
            return
         }
            
         const addAmount =parseInt(document.getElementById('amount').value);

          const totalAmount = parseInt(document.getElementById('amountCount').innerText)
          
         const totalAvailableBlanc =totalAmount + addAmount;
          
         document.getElementById('amountCount').innerText = totalAvailableBlanc;   
    })


    // add log Out btn
    document.getElementById('logOut')
        .addEventListener('click', function(){
           window.location.href="./index.html" 
        })