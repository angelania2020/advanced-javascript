var script1 = (function () {
    function a() {
        return 5;
    }
    return {
        a: a
    }
})();

function a() {
    console.log('hahaha');
}

script1.a();

// Without IIFE:
// script1().a(); OK
// script1.a(); VM623:1 Uncaught TypeError: script1.a is not a function