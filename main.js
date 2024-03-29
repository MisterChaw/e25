class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // add element to the top
    push(element) {
        this.items[this.count] = element
        this.count += 1;
        console.log (`${element} added to ${this.count}`);
        this.count += 1;
        return this.count - 1;
    };

    //  return and remove top element in stack
    // return undifined if stack is empty

    pop() {
        if(this.count == 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count -= 1;
        console.log(`${deleteItem} removed`)
        return deleteItem;
    }

    // check top element in stack

    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }

    // check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? `Stack is empty` : 'Stack is not empty');
        return this.count == 0; 
    }

    // check size of stack
    size() {
        console.log(`${this.count} elements in stack`);
        return this.count
    }

    // print elements in stack
    print() {
        let str = "";
        for(let i = 0; i < this .count; i++) {
            str += this.items[i] + "";
        }
        return str;
    }

    //  clear stacks
    clear() {
        this.items = [];
        this.count = 0;
        console.log('stack cleared..');
        return this.items;
    }
};

const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);

stack.peek();

stack.push(300);

console.log(stack.print());

stack.pop();
stack.pop();

stack.clear();

console.log(stack.print());

stack.size();

stack.isEmpty();

console.log(stack.pop());
console.log(stack.pop());