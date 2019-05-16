// Steps
// 1. identify the type of button clicked
// 2. if its a number, concatenate the new number
// 3. if its an operator,
// 4. if its an equalto, it shld be able to display a result 




let keys = document.querySelectorAll(".keys");
let displayNum = document.querySelector(".display__box"); 
// console.log(keys.length);
    
    
    
        // keys.textContent
    for (let i = 0; i < keys.length; i++) {
            
            
        keys[i].addEventListener("click", function(){
            
            if (keys[i].textContent === "+" || keys[i].textContent === "-" || keys[i].textContent === "x" || keys[i].textContent === "/"){
                input1 = displayNum.innerHTML;
                displayNum.innerHTML = " ";
                operator = keys[i].textContent;
                

            }else if (keys[i].textContent === "="){
                // displayNum.innerHTML= " ";
                
                input2 = displayNum.innerHTML;
                    if (operator === "+"){
                        result = parseFloat(input1) + parseFloat(input2);
                        displayNum.innerHTML= result
                    }else if (operator === "x"){
                        result = parseFloat(input1) * parseFloat(input2);
                        displayNum.innerHTML= result
                    }
                    else if (operator === "-"){
                        result = parseFloat(input1) - parseFloat(input2);
                        displayNum.innerHTML= result
                    }
                    else if(operator === "/"){
                        result = parseFloat(input1) / parseFloat(input2);
                        displayNum.innerHTML= result
                    }else {
                        displayNum.innerHTML= " " 
                    }

                    
                
                
            }else if(keys[i].textContent=== "MC"){
                displayNum.innerHTML= " " 
            }
            else {
                if (displayNum.innerHTML.includes("x")){
                   
                    displayNum.innerHTML = input1 + " " + keys[i].textContent;
                  
                }else 
                {
                    displayNum.innerHTML += keys[i].textContent; 
                }
                
                
                
            }


        })
        
    }

    
    

