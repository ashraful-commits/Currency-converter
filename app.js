// get form 

const currencyConverter =document.getElementById('currency-converter');

// get Alert msg div 
const AlertMsg =document.querySelector('.alertMsg');
const ResultMsg =document.querySelector('.resultMsg');

currencyConverter.addEventListener('submit',(e)=>{
    e.preventDefault();


    // start from here 


    // get input value 
    let Amount = currencyConverter.querySelector('input[name="amount"]');
    let currency =currencyConverter.querySelector('select[name="currency"]');

    

    let rate = 0;
    switch(currency.value){
        case "USD" :
            rate = 89.24;
            break;
        case "CAD" :
            rate = 71.02;
            break;
        case "Pound" :
            rate = 112.03;
            break;
        case "Euro" :
            rate = 95.87;
            break;
        case "Rupee" :
            rate = 1.15;
            break;
        default:
            rate = 0;

    }

    // form validition 
    if(Amount.value == ''|| currency.value ==''){
        AlertMsg.innerHTML = AlertFunction('All fields are required','danger')
    }else if(numtest(Amount.value) == false){
        AlertMsg.innerHTML = AlertFunction('Amount not valid','danger')
    }else{
       ResultMsg.innerHTML = currencyFunc(Amount.value,currency.value,rate,'success');

    }

})




