class Calculator{
    constructor(prevButton, currentButton){
        this.prevButton = prevButton;
        this.currentButton = currentButton;
        this.currentOperand = '';
        this.prevOperand = '';
    }

    clear(){
        this.currentOperand = ''
        this.prevOperand = ''
        this.operation = undefined
    
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0 , -1)

    }
    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString()
        console.log(number)

    }
    ooperation(operation){
        if(this.currentOperand === '') return 
        if(this.prevOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.prevOperand = this.currentOperand + operation
        this.currentOperand = '';

    }
    compute(){
        let computation 
        const prev = parseInt(this.prevOperand)
        const current = parseInt(this.currentOperand)
        if(isNaN(current) || isNaN(prev)) return

        if(this.operation === '+')
            computation = prev + current
        else if(this.operation === '/')
            computation = prev / current
        else if(this.operation === '-')
            computation = prev - current
        else if(this.operation === 'x')
            computation = prev * current
        
        
        this.currentOperand = computation
        this.operation = undefined
        this.prevOperand = ''

    }
    getDisplayNumber(number){
        
    }
    updateDisplay(){
        this.currentButton.innerText = this.currentOperand
        this.prevButton.innerText = this.prevOperand

    }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-Clear]')
const deleteButton = document.querySelector('[data-delete]')
const prevButton = document.querySelector('[data-previous]')
const currentButton = document.querySelector('[data-current]')

const calculator = new Calculator(prevButton, currentButton)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.ooperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
