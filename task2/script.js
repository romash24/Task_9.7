const consoleLog = document.querySelector('#consoleLog');
const alertExample = document.querySelector('#alert');
const promptExample = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

alertExample.addEventListener('click', () => {
    alert('Предназначена для вывода в браузере предупреждающего модального диалогового окна с некоторым сообщением и кнопкой «ОК»');
})

promptExample.addEventListener('click', () => {
    alert('Предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена»');
})