function transliterate(text) {
    const map = {
        'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'Yo', 'Ж': 'Zh',
        'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O',
        'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts',
        'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ь': '', 'Ы': 'Y', 'Ъ': '', 'Э': 'E', 'Ю': 'Yu',
        'Я': 'Ya', 'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
        'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh',
        'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ы': 'y', 'ъ': '', 'э': 'e',
        'ю': 'yu', 'я': 'ya'
    };

    return text.split('').map(char => map[char] || char).join('');
}

document.getElementById('change-btn').addEventListener('click', function() {
    const lastName = document.getElementById('last-name').textContent;
    const firstName = document.getElementById('first-name').textContent;
    const patronymic = document.getElementById('patronymic').textContent;
    const birthDate = document.getElementById('birth-date').textContent;
    const birthPlace = document.getElementById('birth-place').textContent;
    const issueDate = document.getElementById('issue-date').textContent;

    document.getElementById('last-name').textContent = transliterate(lastName);
    document.getElementById('first-name').textContent = transliterate(firstName);
    document.getElementById('patronymic').textContent = transliterate(patronymic);
    document.getElementById('birth-date').textContent = transliterate(birthDate);
    document.getElementById('birth-place').textContent = transliterate(birthPlace);
    document.getElementById('issue-date').textContent = transliterate(issueDate);
});