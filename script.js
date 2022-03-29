var firstNumber = 0;
var secondNumber = 0;
var eq = 0;


let keys = document.querySelectorAll(".btns");
for(i of keys){
    let val = i.getAttribute("data-value");
    i.addEventListener("click", function(){
        
        firstNumber = parseInt(val);
        document.querySelector(".result").innerText = val;

       
    });
    
};


function add(){
    //console.log("The add function is successfully invoked");
    
    eq = eq+firstNumber;
   


}

function multiply(){
    //console.log("The multiply function is successfully invoked");

}

function substract(){
    //console.log("The substract function is successfully invoked");

}

function divide(){
    //console.log("The divide function is successfully invoked");

}

function clearN(){
    console.log("The clear function is successfully invoked");
    firstNumber =0;
    secondNumber =0;
    eq = 0;
}

function equals(){
    //console.log("The equals function is successfully invoked");
    add(firstNumber);
    document.querySelector(".result").innerText = eq;
    console.log(eq)
    clearN();

}
