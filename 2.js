// Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и выводит приветствие, 
// используя переданное ей имя, в консоль.Необходимо у пользователя запросить имя и вызвать 
// функцию greeting, передав туда полученное от пользователя значение.

// function greeting() {
//     return 'Привет, ' + name;
// }
// const name = prompt('Введите свое имя: ');
// greeting();

let userName = prompt('Введите свое имя: ');
function greeting() {
let message = 'Привет, ' + userName;
alert(message);
}
greeting();