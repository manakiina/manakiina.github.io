const lastName = document.getElementsByTagName('p')[0].childNodes[1].innerText;
const firstName = document.getElementsByTagName('p')[1].childNodes[1].innerText;
const birthYear = document.getElementsByTagName('p')[2].childNodes[1].innerText;

console.log(`Фамилия: ${lastName}`);
console.log(`Имя: ${firstName}`);
console.log(`Год рождения: ${birthYear}`);