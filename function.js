



function AlertFunction(msg,type='danger'){
    return `<p class ="alert alert-${type}">${msg}</p>`;

}


// pattern test 

function numtest(num){
    let pattern = /^[0-9]{1,}$/
    return pattern.test(num);

}


function currencyFunc(amount,curr,rate,type="danger"){
    if(curr){
        return `<p class="alert alert-${type} w-100 text-center">
        ${amount} ${curr} = ${(amount*rate).toFixed(2)} BDT
        </p>`
    }
}