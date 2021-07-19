function compute()

{

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;

    // "No of years" converted into an actual year
    var year = new Date().getFullYear()+parseInt(years);
    var  amount = interest

    //innerHTML property set and numbers in the result are highlighted with the <mark>tag
    document.getElementById("result").innerHTML="If you deposit<mark>"+principal+"</mark> \<br\>at an interest rate of<mark>"+rate+"%</mark><br\>You will receive an amount of <mark>"+amount+",</mark>\<br\>in the year <mark>"+year+"</mark>\<br\>"
}
        
function updateRate() 

{    
    //function that reads the value of range slider and display it
     var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= rateval;
}
    
function checkdata(){
    //validation for the "principal" input box
    
    // create references to input elements we wish to validate
     var principal = document.getElementById("principal")



     // check if principal amount is negative or equal 0
     if (principal.value <=0)  {
        alert("Enter a positive number");
        principal.focus();
        return false;

     }
     // If all is well return true.
     return true; 
}


    

        