const button = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output");
function checkUserInput() {
    const romanNumber = [
        {value:1000,symbols:"M"},
        {value:900,symbols:"CM"},
        {value:500,symbols:"D"},
        {value:400,symbols:"CD"},
        {value:100,symbols:"C"},
        {value:90,symbols:"XC"},
        {value:50,symbols:"L"},
        {value:40,symbols:"XL"},
        {value:10,symbols:"X"},
        {value:9,symbols:"IX"},
        {value:5,symbols:"V"},
        {value:4,symbols:"IV"},
        {value:1,symbols:"I"}
    ];
    let inputNum = parseInt(input.value);
    if(isNaN(inputNum)) {
        alert("Please enter a valid number");
        return;
    }
    else if(inputNum < 1) {
        alert("Please enter a number greater than or equal to 1");
        return;
    }
    else if(inputNum >= 4000) {
        alert("Please enter a number less than or equal to 3999");
        return;
    }  
    let result = "";
    for(let i of romanNumber) {
        while(inputNum >= i.value) {
            result += i.symbols;
            inputNum-=i.value;
        }
    }
   output.textContent = result;
 }

button.addEventListener("click",checkUserInput);
input.addEventListener("keydown",(e) => {
    if(e.key === "Enter") {
        checkUserInput();
    }
})
