var b = {
    name: 'jay',
    say() { console.log(this) }
}

var c = {
    name: 'jay',
    say() { return function () { console.log(this) } }
}

var d = {
    name: 'jay',
    say() { return () => console.log(this) }
}

b.say(); // b
c.say(); // function 
c.say()(); // window
d.say(); // function
d.say()(); // d