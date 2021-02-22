function isOperator(character) {
    return ['*', '/', '+', '-'].includes(character);
}

class Stack {
    #stack;

    constructor() {
        this.#stack = [];
    }

    get length() {
        return this.#stack.length;
    }

    push(item) {
        this.#stack.push(item);
        return item;
    }

    pop() {
        return this.#stack.pop();
    }

    peek() {
        return this.#stack[this.length - 1];
    }

    isEmpty() {
        return this.#stack.length === 0;
    }

    toString() {
        return this.#stack.toString();
    }
}

function hasPrecedence(operandOne, operandTwo) {
    if ([')', '('].includes(operandTwo)) return false;
    if (isOperator(operandOne)) return false;
    return true;
}

function calculate(operator, num1, num2) {
    let res = 0;

    switch(operator) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num2 - num1;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = num2 / num1;
            break;
        default:
            break;
    }
    return res;
}

export default function calcu(string, {min = 1, max = 10} = {}) {
    let array = [];

    if (!max) max = 10;
    if (!min) min = 1;

    for (let index = 0; index <= max - min; index++) {
        const value = Number(min) + Number(index);
        const s = string.replace('x', value);
        const result = calculator(s)
        array.push({value, result});
    }

    return array;
}

export function calculator(string) {
    if (!string) return Error('Invalid input');

    let numbers = new Stack();
    let operators = new Stack();

    let i = 0;
    let num = 0;
    let n = string.length;


        while (i < n) {
            let c = string.charAt(i);

            if (!isNaN(c) && c.toString().trim() !== '') {
                num = c;

                while ((i + 1) < n && !isNaN(string.charAt(i + 1))) {
                    num += string.charAt(i + 1);
                    ++i;
                }

                numbers.push(num);
            }
            else if (isOperator(c)) {
                while (!operators.isEmpty() && hasPrecedence(c, operators.peek())) {
                    numbers.push(calculate(operators.pop(), Number.parseInt(numbers.pop()), Number.parseInt(numbers.pop())));
                }
                operators.push(c);
            }
            else if (c === '(') {
                operators.push(c);
            }
            else if (c === ')') {
                while (!operators.isEmpty() && operators.peek() !== '(') {
                    numbers.push(calculate(operators.pop(), Number.parseInt(numbers.pop()), Number.parseInt(numbers.pop())));
                }

                operators.pop();
            }

            ++i;
        }

        while (!operators.isEmpty()) {
            numbers.push(calculate(operators.pop(), Number.parseInt(numbers.pop()), Number.parseInt(numbers.pop())));
        }
        
        return numbers.isEmpty() ? 0 : numbers.pop();
}
