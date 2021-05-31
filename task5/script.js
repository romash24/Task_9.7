const inputField = document.querySelector('input');
const duplicateField = document.querySelector('#duplicateField');
const pressButton = document.querySelector('button');

inputField.addEventListener ('keypress', function(e) {
    if (duplicateField.textContent == '') {
        duplicateField.textContent = e.key;
    } else {
        duplicateField.textContent = duplicateField.textContent + e.key;
    }    
})

pressButton.addEventListener ('click', function() {
    console.log(inputField.value);
    inputField.value = '';
    duplicateField.textContent = '';
})