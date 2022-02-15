function getPin(){
    const pin = Math.round((Math.random())* 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
     //  console.log(pin)
        return pin;
    }
    else{
        console.log('got 3 digit ', pin)
       return getPin()
    }
    
}
function generatePin(){
    
    const pin = getPin();
    document.getElementById('display-pin').value = pin
    console.log(pin);
}
document.getElementById('key-pad').addEventListener('click' , function(event){
   const number= event.target.innerText;
   if(isNaN(number)){
       if(number == 'c'){
           document.getElementById('number').value = '';
       }
   }
   else{
    const previousNumber =  document.getElementById('number').value ;
    const newNumber = previousNumber + number;
    document.getElementById('number').value = newNumber;
     

   }
  
})

function verify(){
   const pin =document.getElementById('display-pin').value ;
   const number = document.getElementById('number').value;
   if( number == pin){
       document.getElementById('matched').style.display = 'block';
       document.getElementById('error').style.display = 'none';
   }
   else{
    document.getElementById('error').style.display = 'block';
    document.getElementById('matched').style.display = 'none';
   }
    //console.log(pin);
}

