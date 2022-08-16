class Calculator{
constructor(topdisptext,bottomdisptext){

    this.topdisptext = topdisptext;
    this.bottomdisp = bottomdisptext;
}
clear (){
    this.topdisptext = '';
    this.bottomdisp = '';
    this.Operator = undefined;

}
delete () {

    this.bottomdisp = this.bottomdisp.toString().slice(0, -1)

}

appendNumber(number){
    if (number == '.' && this.bottomdisp.includes('.')) return
    this.bottomdisp = this.bottomdisp.toString() + number.toString();
    //console.log(this.bottomdisp)

}
getDisplayNumber(number){

    return number
}

chooseOperation(operation){
    if(this.bottomdisp == '') return
    if(this.topdisptext != ''){
        this.compute();
    }

    this.operation = operation;
    this.topdisptext = this.bottomdisp;
    this.bottomdisp = '';

}

compute(){

    let results;
    const prev = parseFloat(this.topdisptext);
    const current = parseFloat(this.bottomdisp);
    
    
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation){

        case '+':
            results = prev + current;
            break;
        case '-':
                results = prev - current;
                break;
        case '÷':
            results = prev / current;
            break;
        case 'x':
                results = prev * current;
                break;
        default: 
            return
    
            
    }
    
    this.topdisptext = '';
    this.bottomdisp = results;
    this.operation = undefined;

}

updateDisplay(){
   // console.log(this.bottomdisp)
  bottomdisptextElement.innerText = this.getDisplayNumber(this.bottomdisp);
  console.log = this.topdisptext;
  if(this.operation != null)
  topdisptextElement.innerText = this.getDisplayNumber(this.topdisptext + ' ' +this.operation);
  else
  topdisptextElement.innerText = this.getDisplayNumber(this.topdisptext);
}
}

const numbersbutton = document.querySelectorAll('[data-number]')
const operationsbutton = document.querySelectorAll('[data-operation]')
const equalsbutton = document.querySelector('[data-equals]')
const deletebutton = document.querySelector('[data-delete]')
const allClearbutton = document.querySelector('[data-AC]')
const topdisptextElement = document.querySelector('.SemiTopDisplay')
const bottomdisptextElement = document.querySelector('.SemiBottomDisplay')

const calculator = new Calculator(topdisptextElement,bottomdisptextElement)
calculator.clear();

numbersbutton.forEach(button => {button.addEventListener('click',()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay();

})  
});

operationsbutton.forEach(button => {button.addEventListener('click',()=>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay();

})   
});

equalsbutton.addEventListener('click',()=>{
    
    calculator.compute();
    calculator.updateDisplay();

})

allClearbutton.addEventListener('click',()=>{
    
    calculator.clear();
    calculator.updateDisplay();

})

deletebutton.addEventListener('click',()=>{
    
    calculator.delete();
    calculator.updateDisplay();

})













