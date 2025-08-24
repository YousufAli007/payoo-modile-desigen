//  money add button
   const validPin = 6581;
   document.getElementById('moneyBtn')
    .addEventListener('click', function(e){
         e.preventDefault()
         const account =document.getElementById('AccountNumber').value;
         const pin = parseInt(document.getElementById('valid-Pin').value);
         if(account.length !== 11){
             alert('place use valid number')
             return
            }
         if(pin !== validPin){
            alert('use valid pin')
            return
         }
            
         const addAmount =parseInt(document.getElementById('amount').value);

          const totalAmount = parseInt(document.getElementById('amountCount').innerText)
          
         const totalAvailableBlanc =totalAmount + addAmount;
          
         document.getElementById('amountCount').innerText = totalAvailableBlanc;   
    })



  
    document.getElementById('btn1')
      .addEventListener('click', function(){
          document.getElementById('cashOut_container').style.display ='none';
          document.getElementById('addMoney_container').style.display='block'
      })

    document.getElementById('btn2')
      .addEventListener('click', function(){
          document.getElementById('addMoney_container').style.display ="none";
          document.getElementById('cashOut_container').style.display='block';
           
      })
  








    // add log Out btn
    document.getElementById('logOut')
        .addEventListener('click', function(){
           window.location.href="./index.html" 
        })








