let result = 0;
let logEntries = [];
function getUserInput(){
    return parseInt(userInput.value);
}

function makeLogEntries(op,prRes,num,res){
    let entry = {
        Operation: op,
        PrevResult: prRes,
        Number: num,
        Result: res
    };
    logEntries.push(entry);
    console.log(logEntries);
}

function WriteOperationLog(prevResult, operator, userInput, result){
    let calcDescription = `${prevResult} ${operator} ${userInput}`;
    outputResult(result, calcDescription);
}

function calculateResult(op){
    let userInput = getUserInput();
    let prevResult = result;
    let mathOp;
    if(op === 'ADD'){
        result += userInput;
        mathOp = '+';
    }
    else if(op === 'SUB'){
        result -= userInput;
        mathOp = '-';
    }
    else if(op === 'MUL'){
        result *= userInput;
        mathOp = 'x';
    }
    else{
        result /= userInput;
        mathOp = '/';
    }
    WriteOperationLog(prevResult, mathOp, userInput, result);
    makeLogEntries(op,prevResult,userInput,result);
}

addBtn.addEventListener('click', calculateResult.bind(this,'ADD'));
subtractBtn.addEventListener('click', calculateResult.bind(this,'SUB'));
multiplyBtn.addEventListener('click', calculateResult.bind(this,'MUL'));
divideBtn.addEventListener('click', calculateResult.bind(this,'DIV'));