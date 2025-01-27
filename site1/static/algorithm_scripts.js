function determineSeatType(seatNumber) {
    let type = '';
    if (seatNumber < 1 || seatNumber > 54) {
        return 'Некорректный номер места. Введите число от 1 до 54.';
    }

    if (seatNumber <= 36) {
        const isLower = seatNumber % 2 === 1;
        const inCompartment = Math.ceil(seatNumber / 4);

        if (isLower) {
            type = `Место ${seatNumber}: нижнее, в купе ${inCompartment}`;
        } else {
            type = `Место ${seatNumber}: верхнее, в купе ${inCompartment}`;
        }
    } else {
        const isLower = seatNumber % 2 === 1;
        if (isLower) {
            type = `Место ${seatNumber}: нижнее, боковое`;
        } else {
            type = `Место ${seatNumber}: верхнее, боковое`;
        }
    }
    return type;
}
document.getElementById('seat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const seatNumber = parseInt(document.getElementById('seat-number').value, 10);

    const result = determineSeatType(seatNumber);

    document.getElementById('result').innerText = result;
    fetch('https://example.com/api/seat-type', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            task: 'Определение типа места в вагоне',
            seatNumber: seatNumber,
            result: result
        })
    })
    .then(response => {
        console.log('Данные отправлены на сервер');
        console.log({
            task: 'Определение типа места в вагоне',
            seatNumber: seatNumber,
            result: result
        })
    })
    .catch(error => {
        console.error('Сетевая ошибка:', error);
    });

});