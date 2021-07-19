//task 1
let name = "Герасим";
let age = 25;
let company = "NAYAX";
let position = "Frontend Developer 😁";
let message = `Привет, меня зовут ${name}. Мне ${age} лет. Я работаю на должности ` + position + ` в компании ${company}.`
console.log(message)

//Task 2
const str = 'Каждый охотник желает знать';
const arr = str.split(' '); 
console.log(arr); 

//Task 3
const str1 = "Пример строки";
const result1 = str1.replace(str1.charAt(0), str1.charAt(0).toLowerCase())

console.log(result1)

//Task 4
const str2 = 'Каждый охотник желает знать';
const length = 7;
const result2 = str2.slice(0, 7); 
console.log(result2);

//Task 5
const str3 = "string not starting with capital";
const result3 = str3.replace(str3.charAt(0), str3.charAt(0).toUpperCase())

console.log(result3);



a= 1
a++
console.log(a)