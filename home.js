//  money add button
document.getElementById('moneyBtn')
    .addEventListener('click', function(e){
         e.preventDefault()
          const bank = document.getElementById('sectctBank').value;
          const account =document.getElementById('bankAccount').value;

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