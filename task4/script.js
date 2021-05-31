document.querySelector('#changeText').addEventListener('click', function() {
    this.textContent = prompt('Введите новый текст');
})