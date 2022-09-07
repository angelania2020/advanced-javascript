const obj = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        var anotherFunc = function () {
            console.log('b', this)
        }
        anotherFunc();
    }
}

obj.sing()
// a {name: 'Billy', sing: ƒ}
// b Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// Inside of a sing function, that's where anotherFunc got run.
// Object did not really call anotherFunc function, the sing function did.

// Solving the issue:
// 1. Arrow functions are lexically bound:
const obj2 = {
    name: 'Billy',
    sing() {
        console.log('a', this);
        // 2. or without arrow function:
        // var self = this;
        var anotherFunc = () => {
            console.log('b', this)
            // 2. or without arrow function:
            // console.log('b', self)
        }
        anotherFunc();
        // 3. or without arrow function:
        // return anotherFunc.bind(this);
    }
}

obj2.sing();
// a {name: 'Billy', sing: ƒ}
// b {name: 'Billy', sing: ƒ}

// if return anotherFunc.bind(this);
// obj2.sing()();
// a {name: 'Billy', sing: ƒ}
// b {name: 'Billy', sing: ƒ}