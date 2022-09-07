// Run this code, and you will see there is an issue. How would you fix it?

// const character = {
//     name: 'Simon',
//     getCharacter() {
//         return this.name;
//     }
// };

const character = {
    name: 'Simon',
    getCharacter() {
        return this.name;
    }
};

// character.getCharacter(); // Simon

// was:
// const giveMeTheCharacterNOW = character.getCharacter;
// new:
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
//this should return 'Simon' but doesn't
console.log('?', giveMeTheCharacterNOW()); 