const lastName = document.getElementsByTagName('p')[0].textContent;
const firstName = document.getElementsByTagName('p')[1].textContent;
const patronymic = document.getElementsByTagName('p')[2].textContent;
const birthDate = document.getElementsByTagName('p')[3].textContent;
const birthPlace = document.getElementsByTagName('p')[4].textContent;
const issueDate = document.getElementsByTagName('p')[5].textContent;

console.log(`Фамилия: ${lastName}`);
console.log(`Имя: ${firstName}`);
console.log(`Отчество: ${patronymic}`);
console.log(`Дата рождения: ${birthDate}`);
console.log(`Место рождения: ${birthPlace}`);
console.log(`Дата выдачи: ${issueDate}`);