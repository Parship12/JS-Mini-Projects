const input = document.querySelector('input');
const upperCaseOutput = document.querySelector('#uppercase span');
const lowerCaseOutput = document.querySelector('#lowercase span');
const camelCaseOutput = document.querySelector('#camelcase span');
const pascalCaseOutput = document.querySelector('#pascalcase span');
const snakeCaseOutput = document.querySelector('#snakecase span');
const kebabCaseOutput = document.querySelector('#kebabcase span');
const trimmed = document.querySelector('#trim span');

function capitalizeString(string) {
    if (!string) return ""; 
    return string[0].toUpperCase() + string.slice(1, string.length);
}

function toCamelCase(string) {
    const lowerCaseString = string.toLowerCase();
    const wordsArr = lowerCaseString.split(' ');
    const finalArray = wordsArr.map((word, i) => {
        if(i == 0) return word;
        return capitalizeString(word);
    })
    return finalArray.join('');
}

function toPascalCase(string) {
    const lowerCaseString = string.toLowerCase();
    const wordsArr = lowerCaseString.split(' ');
    const finalArray = wordsArr.map((word) => {
        return capitalizeString(word);
    })
    return finalArray.join('');
}

function toSnakeCase(string) {
    return string.split(' ').join('_');
}

function toKebabCase(string) {
    return string.split(' ').join('-');
}

function trim(string) {
    return string.split(' ').join('');
}

input.addEventListener('input', () => {
    lowerCaseOutput.innerHTML = input.value.toLowerCase();
    upperCaseOutput.innerHTML = input.value.toUpperCase();
    camelCaseOutput.innerHTML = toCamelCase(input.value);
    pascalCaseOutput.innerHTML = toPascalCase(input.value);
    snakeCaseOutput.innerHTML = toSnakeCase(input.value);
    kebabCaseOutput.innerHTML = toKebabCase(input.value);
    trimmed.innerHTML = trim(input.value);
})



/*
Inside your capitalizeString function:
return string[0].toUpperCase() + string.slice(1, string.length);

string[0] is undefined for an empty string. In JavaScript:
undefined.toUpperCase()  // throws an error in strict mode, but might silently do weird things
Depending on the environment, it can behave unexpectedly, and in your case it seems to leave a leftover character.

How to fix it?
You can check if the word is non-empty before capitalizing:

function capitalizeString(string) {
    if (!string) return "";  // return empty string if input is empty
    return string[0].toUpperCase() + string.slice(1);
}

This will ensure that when the input is empty, toPascalCase("") will correctly return an empty string.
*/