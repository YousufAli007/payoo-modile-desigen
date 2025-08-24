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

    //  cash Out maney 

    document.getElementById('cashOutBtn')
      .addEventListener('click', function(e){
        e.preventDefault()

         const cashNumber = document.getElementById('cashOutNumber').value;
         
         if(cashNumber.length !== 11){
            alert('use valid number')
            return
         }

       const cashAmount =parseInt( document.getElementById('cashOutAmount').value);
       console.log(cashAmount)

        

      const  cashOutMoney =parseInt(document.getElementById('amountCount').innerText)
        

       const totalAmountOfAvailableBlanc = cashOutMoney - cashAmount;

       document.getElementById('amountCount').innerText = totalAmountOfAvailableBlanc;

         
      })
   


  
    document.getElementById('addMoneyTg')
      .addEventListener('click', function(){
          document.getElementById('cashOut-container').style.display ='none';
          document.getElementById('addMoney_container').style.display='block';
         document.getElementById('addMoneyTg').style.backgroundColor = '#0874f20d';
         document.getElementById('addMoneyTg').style.borderColor = '#0874f2';
         
          document.getElementById('cahOutTg').style.backgroundColor = '#ffffff';
          document.getElementById('cahOutTg').style.borderColor = '#66BB6A';
      })

    document.getElementById('cahOutTg')
      .addEventListener('click', function(){
          document.getElementById('addMoney_container').style.display= 'none';
          document.getElementById('cashOut-container').style.display='block';
          document.getElementById('cahOutTg').style.backgroundColor = '#0874f20d';
          document.getElementById('cahOutTg').style.borderColor = '#0874f2';

          document.getElementById('addMoneyTg').style.backgroundColor = '#ffffff';
         document.getElementById('addMoneyTg').style.borderColor = '#66BB6A';
           
      })
  








    // add log Out btn
    document.getElementById('logOut')
        .addEventListener('click', function(){
           window.location.href="./index.html" 
        })








