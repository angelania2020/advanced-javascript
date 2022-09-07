// How would you implement this:

const array = [1, 2, 3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr) {
    return Math.max.apply(null, arr);
    // null.max.apply(1, 2, 3);
}

getMaxNumber(array); // should return 3

