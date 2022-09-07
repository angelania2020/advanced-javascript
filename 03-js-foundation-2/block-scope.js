function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final', i);
}
// 0 1 2 3 4 final 5

function loop() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final', i);
}
// 0 1 2 3 4 not defined