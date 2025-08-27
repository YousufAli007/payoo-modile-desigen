//  money add button
   const validPin = 6581;

   const transactionData =[];

   // a function the get value input in number 
   function inputNum(id){
      const inputValue =document.getElementById(id);
      const inputValueNum =inputValue.value;
      const inputValueNumber =parseInt(inputValueNum);
       return inputValueNumber;
   }

//  function get number 
   function inputValue(id){
      const inputValue =document.getElementById(id);
      const inputValueNumber =inputValue.value;
      return inputValueNumber;
   }
   //  function get innerText in number 
   function innerText(getBlanc){
       const availableBlanc =document.getElementById('amountCount');
       availableBlanc.innerText = getBlanc;
   }

   // function Toggling

   function togglingId(id){
       const forms =document.getElementsByClassName('form');

        for(const justForm of forms){
          justForm.style.display ='none';
        }
        document.getElementById(id).style.display ='block'
   }



   // function toggling card-backgroundColor

   function bgColor(id){
      const forms =document.getElementsByClassName('gard');
      for (const justForm of forms){
         justForm.style.backgroundColor = '#ffffff';
         justForm.style.borderColor = '#66BB6A';
      }
      document.getElementById(id).style.backgroundColor = '#0874f20d';
      document.getElementById(id).style.borderColor = '#0874f2';
   }


   document.getElementById('moneyBtn')
    .addEventListener('click', function(e){
         e.preventDefault()
         const account = inputValue('AccountNumber');;

         const pin = inputNum('valid-Pin')


         if(account.length !== 11){
             alert('place use valid number')
             return
            }
         if(pin !== validPin){
            alert('use valid pin')
            return
         }
            
         const addAmount = inputNum('amount')

          const totalAmount = parseInt(document.getElementById('amountCount').innerText)
          
          const totalAvailableBlanc =totalAmount + addAmount;
          
          innerText(totalAvailableBlanc); 
          
          const transactionValue ={
            name:'Add Moeny',
            date:new Date().toLocaleTimeString()
          }
          transactionData.push(transactionValue);
          
    })

    //  cash Out maney 

    document.getElementById('cashOutBtn')
      .addEventListener('click', function(e){
        e.preventDefault()
          const pin = inputNum('cashout_pin')

         const cashNumber = inputValue('cashOutNumber');
         
         if(cashNumber.length !== 11){
            alert('use valid number')
            return
         }
          if(pin !== validPin){
            alert('use valid pin')
            return
         }

       const cashAmount = inputNum('cashOutAmount');
   
      const  cashOutMoney =parseInt(document.getElementById('amountCount').innerText)
        

       const totalAmountOfAvailableBlanc = cashOutMoney - cashAmount;

        innerText(totalAmountOfAvailableBlanc); 

          const transactionValue ={
            name:'Cash Out',
            date:new Date().toLocaleTimeString()
          }
          transactionData.push(transactionValue)
         
 
      })
   


      // Pay Bil

      document.getElementById('PayBilBtn')
         .addEventListener('click', function(e){
            e.preventDefault()
             const pin = inputNum('pay-pin');

         const cashNumber =  inputValue('pay-number');
         
         if(cashNumber.length !== 11){
            alert('use valid number')
            return
         }
          if(pin !== validPin){
            alert('use valid pin')
            return
         }
             const payAmountBill=inputNum('payAmount');

             const afterPayBilBlanc =parseInt(document.getElementById('amountCount').innerText);

             const payBilAvailableBlanc = afterPayBilBlanc - payAmountBill;

             console.log(payBilAvailableBlanc)

             innerText(payBilAvailableBlanc);
             
            const transactionValue ={
            name:' Pay Bil',
            date:new Date().toLocaleTimeString()
          }
          transactionData.push(transactionValue)
         
         })


      // Transfer Money 
          document.getElementById('transferBtn')
      .addEventListener('click', function(e){
         e.preventDefault()

         const pin = inputNum('transfer-pin');

         const cashNumber = inputValue('transfer_number');
         
         if(cashNumber.length !== 11){
            alert('use valid number')
            return
         }
          if(pin !== validPin){
            alert('use valid pin')
            return
         }

          const transferTotalAmount = inputNum('transferAmount')
          
          const transferAllAmount = parseInt(document.getElementById('amountCount').innerText);
          const transferAvailableBlanc = transferAllAmount - transferTotalAmount;
         innerText(transferAvailableBlanc);  
          const transactionValue ={
            name:' Transfer Moeny',
            date:new Date().toLocaleTimeString()
          }
          transactionData.push(transactionValue)
         
         

      })



      // Transactions 
      document.getElementById('transactionTG')
         .addEventListener('click', function(){
            const transactionContainer =document.getElementById('transactions-container')

            transactionContainer.innerText ='';
            for(const data of transactionData){
               const div =document.createElement('div');

               div.innerHTML=`
               <div class="flex  justify-between items-center bg-[#ffffff] p-2 rounded-xl mb-5">
            <div class="flex items-center gap-3">
                <figure class="w-[45px] bg-[#0808080d] rounded-full py-2">
                    <img class="mx-auto" src="./assets/wallet1.png" alt="">
                </figure>
                <div>
                    <h3 class="text-[20px] font-semibold">${data.name}</h3>
                    <p class="text-[#080808b3]">${data.date}</p>
                </div>
            </div>

            <div>
                <i class="fa-solid fa-ellipsis-vertical text-[#08080880] "></i>
            </div>
        </div>
               `
               transactionContainer.appendChild(div)
            
            }
            

         })
      

//   Toggle
    document.getElementById('addMoneyTg')
      .addEventListener('click', function(){
       togglingId('addMoney_container');
       bgColor('addMoneyTg')
      })


    document.getElementById('cahOutTg')
      .addEventListener('click', function(){
          togglingId('cashOut-container')
          bgColor('cahOutTg')
           
      })

      document.getElementById('transferMoneyTg')
         .addEventListener('click', function(){
          
         togglingId('transfer_container');
         bgColor('transferMoneyTg');

         })


         // get Bonus 
          
         document.getElementById('getBonus')
            .addEventListener('click', function(){
         
         togglingId('bonus_container');
         bgColor('getBonus');


            })


            // pay BilTg

            document.getElementById('payBillTG')
               .addEventListener('click', function(){
         
         togglingId('payBill_container');
         bgColor('payBillTG');

             })


            //  transactionTg
            document.getElementById('transactionTG')
               .addEventListener('click', function(){
         
         togglingId('transactions-container');
         bgColor('transactionTG');
               })




 




    // add log Out btn
    document.getElementById('logOut')
        .addEventListener('click', function(){
           window.location.href="./index.html" 
        })








