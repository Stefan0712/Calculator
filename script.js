var firstNumber;
var secondNumber;
var displayValue="";
var result = 0;
const operator = "";
function display(displayValue){
    document.querySelector(".display").innerText = displayValue;
}



let keys = document.querySelectorAll(".btns");
for(i of keys){
    let val = i.getAttribute("data-value");
    i.addEventListener("click", function(){
        append(val);
        firstNumber = parseInt(val);
         
        firstNumber = val;     
    });
    
};

function append(val){
    displayValue = displayValue + val;
    display(displayValue);
    console.log(displayValue);
}
 
